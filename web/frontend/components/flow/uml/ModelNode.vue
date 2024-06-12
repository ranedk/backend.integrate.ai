<script lang="ts" setup>
import type { NodeProps } from '@vue-flow/core'
import { Position } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import type { IModel } from './interfaces'

const props = defineProps<NodeProps<IModel>>()
</script>

<template>
  <FlowNodeBase
    :selected="props.data.selected"
    :name="props.data.name"
    :description="props.data.description"
  >
    <NodeToolbar :is-visible="true" :position="Position.Top">
      <button>delete</button>
      <button>copy</button>
      <button>expand</button>
    </NodeToolbar>
    <FlowHandleTo :id="`to-model-${props.id}`">
      <h4 class="text-md text-muted-800 dark:text-muted-200">
        {{ props.data.name }}
      </h4>
    </FlowHandleTo>
    <div :key="field.name" v-for="field in props.data.fields">
      <h1 class="text-sm">- {{ field.name }}</h1>
      <div v-if="field.isForeignKey">
        <FlowHandleFrom :id="`from-model-${props.id}-field-${field.name}`">
          <h1 class="text-sm">- {{ field.name }}</h1>
        </FlowHandleFrom>
      </div>
    </div>
  </FlowNodeBase>
</template>
