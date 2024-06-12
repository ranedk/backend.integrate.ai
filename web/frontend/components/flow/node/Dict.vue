<script lang="ts" setup>
import type { NodeProps } from '@vue-flow/core'
interface Props {
  title: string
  description?: string
}
const props = defineProps<NodeProps<Props>>()
</script>

<template>
  <FlowNodeBase :title="props.data.title" :description="props.data.description">
    <FlowHandleFrom :id="props.id + '1'" text="Some text goes here" />
    <FlowHandleFrom :id="props.id + '2'" text="Some text1 goes here" />
    <FlowHandleFrom :id="props.id + '3'" text="Some text2 goes here" />

    <FlowHandleTo :id="props.id + '11'" text="Some text11 goes here" />
    <FlowHandleTo :id="props.id + '22'" text="Some text23 goes here" />
    <FlowHandleTo :id="props.id + '33'" text="Some text43 goes here" />
  </FlowNodeBase>
</template>

<style scoped></style>
