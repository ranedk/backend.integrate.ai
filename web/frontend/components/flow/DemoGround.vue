<script lang="ts" setup>
import FlowEdgeRemoveable from '@/components/flow/edge/Removeable.vue'
import FlowNodeDict from '@/components/flow/node/Dict.vue'
import ModelNode from '@/components/flow/uml/ModelNode.vue'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { VueFlow, useVueFlow, type FlowEvents, type Node } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { markRaw } from 'vue'

const nodeTypes = {
  DictNode: markRaw(FlowNodeDict),
  ModelNode: markRaw(ModelNode),
}

const edgeTypes = {
  default: markRaw(FlowEdgeRemoveable),
}

const nodes: Node[] = [
  {
    id: '1',
    type: 'DictNode',
    data: { title: 'Node 1' },
    label: 'Node 1',
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'DictNode',
    data: { title: 'Node 2' },
    label: 'Node 2',
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'DictNode',
    label: 'Node 3',
    data: {
      title: 'Dict Node',
      description: 'This is a dict node thing',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'ModelNode',
    data: {
      title: 'Node 1',
      description: 'Description here',
      fields: [
        {
          name: 'Field 1',
          description: 'Field Description',
          isForeignKey: false,
          type: 'number',
          isPI: false,
          requiresRedaction: false,
        },
      ],
    },
    position: { x: 100, y: 100 },
  },
]

const {
  updateEdge,
  onConnectStart,
  onConnectEnd,
  onConnect,
  onEdgeUpdate,
  getConnectedEdges,
  addEdges,
} = useVueFlow({
  edgeTypes,
  nodeTypes,
  nodes,
  fitViewOnInit: true,
  minZoom: 0.2,
  maxZoom: 4,
  id: 'dictflow',
  edgesUpdatable: true,
  //nodesDraggable: false,
})

onEdgeUpdate(({ edge, connection }: FlowEvents['edgeUpdate']) => {
  console.log('edge> ', edge)
  updateEdge(edge, connection, true)
})

onConnectStart(({ nodeId, handleType }) => {
  return console.log('on connect start', { nodeId, handleType })
})

onConnectEnd((event) => {
  return console.log('on connect end', event)
})

onConnect((params) => {
  console.log('params> ', params)
  const newParams = {
    ...params,
    updateable: true,
  }
  addEdges([newParams])
})
</script>

<template>
  <div class="flow-height">
    <VueFlow class="dictflow">
      <Background variant="dots" color="#8b5cf6" :gap="8" />

      <MiniMap node-color="#8b5cf6" mask-color="#FFFFFF" />

      <Controls />

      <template #edge-removeable="edgeProps">
        <FlowEdgeRemoveable v-bind="edgeProps" />
      </template>
    </VueFlow>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';

.flow-height {
  height: calc(100vh - 6rem);
}
</style>
