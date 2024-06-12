<script lang="ts" setup>
import type { EdgeProps } from '@vue-flow/core'
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useEdge,
  useVueFlow,
} from '@vue-flow/core'
import { computed } from 'vue'

const props = defineProps<EdgeProps>()

const { removeEdges } = useVueFlow()

const { edgeEl, edge } = useEdge()

const addMoveHandle = () => {
  if (edgeEl.value) {
    const edgeHandles = edgeEl.value?.getElementsByClassName(
      'vue-flow__edgeupdater',
    )
    Array.from(edgeHandles).forEach((handle) => {
      handle.setAttribute('r', '5')
      handle.setAttribute('fill', '#8b5cf6')
    })
  }
}

onMounted(() => {
  addMoveHandle()
})
onUpdated(() => {
  addMoveHandle()
})

const path = computed(() => getBezierPath(props))
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <BaseEdge :path="path[0]" />

  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
      class="nodrag nopan edge-close"
    >
      <Icon
        class="size-4 cursor-pointer rounded-full bg-red-500 p-1 text-white"
        name="ph:x"
        @click="removeEdges(id)"
      />
    </div>
  </EdgeLabelRenderer>
</template>

<style lang="css">
.handle-text {
  @apply fill-slate-600 dark:fill-slate-300;
}

.vue-flow__edge:hover .vue-flow__edge-path {
  stroke: antiquewhite;
}
</style>
