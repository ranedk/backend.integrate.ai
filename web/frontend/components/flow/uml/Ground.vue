<script lang="ts" setup>
import FlowEdgeRemoveable from '@/components/flow/edge/Removeable.vue'
import dagre from '@dagrejs/dagre'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import type { ToGraphNode } from '@vue-flow/core'
import {
  PanelPosition,
  useVueFlow,
  VueFlow,
  type Edge,
  type FlowEvents,
  type Node,
  type XYPosition,
} from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { markRaw } from 'vue'
import type { IData } from './interfaces'
import ModelNode from './ModelNode.vue'

const nodeTypes = {
  ModelNode: markRaw(ModelNode),
}

const edgeTypes = {
  default: markRaw(FlowEdgeRemoveable),
}

const {
  updateEdge,
  onConnectStart,
  onConnectEnd,
  onConnect,
  onEdgeUpdate,
  addEdges,
  removeEdges,
  getConnectedEdges,
  viewportRef,
  findNode,
  project,
  addNodes,
  getViewport,
  onNodeClick,
  setViewport,
} = useVueFlow({
  fitViewOnInit: true,
  id: 'umlflow',
  edgesUpdatable: true,
  //nodesDraggable: false,
})

// Dagre graph related
var g = new dagre.graphlib.Graph()
g.setGraph({})
g.setDefaultEdgeLabel(function () {
  return {}
})

const nodes: Ref<Node[]> = ref([])
const edges: Ref<Edge[]> = ref([])

const selectedNode: Ref<Node | null> = ref(null)

const closeContextMenu = () => {
  selectedNode.value = null
}

const addModel = () => {
  const idx = getMaxId()
  addNodes({
    id: idx.toString(),
    type: 'ModelNode',
    position: getCenter(),
    data: {
      name: 'NewModel',
      description: '',
      fields: [],
    },
  })
}

const updateNodeModel = (data: IData, id: string) => {
  const forNode = findNode(id)
  if (!forNode) {
    return
  }
  forNode.data = data.model
  const edges = getConnectedEdges([forNode])
  removeEdges(edges)
  data.model.fields
    .filter((f) => f.isForeignKey)
    .forEach((field) => {
      addEdges({
        source: `${forNode.id}`,
        sourceHandle: `from-model-${forNode.id}-field-${field.name}`,
        target: `${field.foreignKey}`,
        targetHandle: `to-model-${field.foreignKey}`,
      })
    })
  g.setNode(forNode.id, {
    width: (forNode as ToGraphNode<Node>).dimensions.width,
    height: (forNode as ToGraphNode<Node>).dimensions.height,
  })
  dagre.layout(g)
  g.nodes().forEach((v) => {
    const node = findNode(forNode.id)
    if (node) {
      node.position.x = g.node(v).x
      node.position.y = g.node(v).y
    }
  })
}

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

onNodeClick(({ node }) => {
  nodes.value.forEach((n: Node) => {
    n.data.selected = false
  })
  selectedNode.value = node
})

let idx = 1
const getMaxId = () => {
  idx = idx + 1
  return idx
}

const getCenter = (): XYPosition => {
  const viewportWidth = viewportRef.value?.clientWidth || 0
  const viewportHeight = viewportRef.value?.clientHeight || 0

  const { zoom } = getViewport()
  const centerX = viewportWidth / 2 / zoom
  const centerY = viewportHeight / 2 / zoom

  const centerPos = project({ x: centerX, y: centerY })
  return centerPos
}

const container: Ref<InstanceType<typeof VueFlow> | null> = ref(null)
let cHeight: number = 0
onMounted(() => {
  cHeight = container.value?.$el.clientHeight + 80
  console.log('cHeight >> ', container, cHeight)
})
</script>

<template>
  <div class="flow-height relative">
    <FlowUmlControl @add-model="addModel" />
    <VueFlow
      v-model="nodes"
      :edges="edges"
      :node-types="nodeTypes"
      :edge-types="edgeTypes"
      :min-zoom="0.5"
      :max-zoom="3"
      id="umlflow"
      ref="container"
    >
      <Background variant="dots" color="#8b5cf6" :gap="8" />

      <MiniMap
        :position="PanelPosition.BottomLeft"
        node-color="#8b5cf6"
        mask-color="#FFFFFF"
      />

      <Controls :position="PanelPosition.BottomRight" />

      <template #edge-removeable="edgeProps">
        <FlowEdgeRemoveable v-bind="edgeProps" />
      </template>
    </VueFlow>
    <div :key="selectedNode.id" v-if="selectedNode">
      <FlowUmlModelContext
        @close="closeContextMenu"
        @updated="updateNodeModel"
        :nodes="nodes"
        :node="selectedNode"
        :height="cHeight"
      />
    </div>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';

.flow-height {
  height: calc(100vh - 12rem);
}
</style>
