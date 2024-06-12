<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { type Node } from '@vue-flow/core'
import { Field, Form, type GenericObject } from 'vee-validate'
import * as Y from 'yup'
import type { IData } from './interfaces'

const props = defineProps<{
  nodes: Node[]
  node: Node
  height?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'updated', model: IData, id: string): void
}>()

const close = () => {
  emit('close')
}

const validFieldTypes = ['string', 'boolean', 'number']

const initialData = {
  model: props.node.data,
}

const templateField = {
  name: '',
  description: '',
  isMinimized: false,
  isForeignKey: false,
  type: '',
  isPI: false,
  requiresRedaction: false,
  redactionAlgorithm: '',
}

const formData = ref(initialData)

const parseErrors = (errors: Partial<Record<string, string | undefined>>) => {
  if (errors) {
    const parsedError: Record<string, Record<string, string>> = {}
    const fieldPattern = /model\.fields\[(\d+)\]\.(\w+)/
    const attrPattern = /model\.(\w+)/

    for (let fname in errors) {
      const fmatch = fname.match(fieldPattern)
      if (fmatch != null) {
        const fieldNumber = `field-${fmatch[1]}`
        const attrName = fmatch[2]
        if (!(fieldNumber in parsedError)) {
          parsedError[fieldNumber] = {}
        }
        parsedError[fieldNumber][attrName] = errors[fname] || ''
      } else {
        const amatch = fname.match(attrPattern)
        if (amatch != null) {
          const attrName = amatch[1]
          if (!('' in parsedError)) {
            parsedError['Model'] = {}
          }
          parsedError['Model'][attrName] = errors[fname] || ''
        }
      }
    }
    return parsedError
  } else {
    return null
  }
}

const vSchema = toTypedSchema(
  Y.object().shape({
    model: Y.object({
      name: Y.string().required('Name of the model is required'),
      description: Y.string().required('Description of the model is required'),
      fields: Y.array().of(
        Y.object().shape({
          name: Y.string().required('Name of the field is required'),
          description: Y.string().required('Description of field is required'),
          isForeignKey: Y.boolean(),
          foreignKey: Y.string().when('isForeignKey', {
            is: (val: boolean) => val,
            then: () =>
              Y.string()
                .required('Foreign key is required')
                .oneOf(props.nodes.map((v) => v.id)),
          }),
          type: Y.string().when('isForeignKey', {
            is: (val: boolean) => !val,
            then: () => Y.string().required('Field type is required'),
          }),
          isPI: Y.boolean(),
          requiresRedaction: Y.boolean(),
          redactionAlgorithm: Y.string().when('requiresRedaction', {
            is: (val: boolean) => val,
            then: () => Y.string().required('Redaction algorithm is required'),
          }),
          isMinimized: Y.boolean(),
        }),
      ),
    }),
  }),
)

type SetFieldValue = (field: string, val: any) => void

const minimizeField = (index: number, setFieldValue: SetFieldValue) => {
  setFieldValue(`model.fields.${index}.isMinimized`, true)
}

const maximizeField = (index: number, setFieldValue: SetFieldValue) => {
  setFieldValue(`model.fields.${index}.isMinimized`, false)
}

const addField = (values: GenericObject, setFieldValue: SetFieldValue) => {
  formData.value.model.fields.push(templateField)
  let newFields = null
  console.log('Values ', values)
  if (values.model?.fields && values.model.fields.length > 0) {
    newFields = [...values.model.fields, { ...templateField }]
  } else {
    newFields = [{ ...templateField }]
  }
  setFieldValue('model.fields', newFields)
}

const removeField = (index: number) => {
  formData.value.model.fields.splice(index, 1)
}

const onSubmit = (values: GenericObject) => {
  console.log('Values: > ', values)
  emit('updated', values as IData, props.node.id)
}
</script>

<template>
  <BaseCard
    :style="[props.height ? { height: props.height + 'px' } : {}]"
    :class="[props.height ? '' : 'h-full']"
    v-if="props.node"
    class="absolute right-0 top-0 w-2/5 overflow-y-auto bg-white p-3"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        {{ props.node.data.name }}
      </h2>
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="size-6" />
      </button>
    </div>
    <Form
      @submit="onSubmit"
      :validation-schema="vSchema"
      :initial-values="initialData"
      v-slot="{ isSubmitting, values, setFieldValue, errors }"
    >
      <FormGroup label="Model Details" sublabel="Model meta data and fields">
        <BaseCard class="p-3">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <Field
                v-slot="{ errorMessage, field, handleChange, handleBlur }"
                name="model.name"
              >
                <BaseInput
                  label="Name of the model"
                  shape="curved"
                  placeholder="e.g. User or Event or Person"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  type="text"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div class="col-span-12">
              <Field
                v-slot="{ errorMessage, field, handleChange, handleBlur }"
                name="model.description"
              >
                <BaseTextarea
                  label="Short description"
                  shape="curved"
                  placeholder="e.g. the User model will be used User Details in the application."
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  size="sm"
                  rows="2"
                  type="text"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
        </BaseCard>
      </FormGroup>

      <FormGroup
        class="mt-5"
        label="Fields"
        sublabel="Fields and their properties"
      >
        <div
          class="mt-3"
          v-for="(_, index) in formData.model.fields"
          :key="index"
        >
          <BaseCard class="relative mt-3 p-3">
            <BaseButton
              @click="removeField(index)"
              rounded="md"
              size="sm"
              color="light"
              class="absolute right-0 top-0 z-10"
              variant="pastel"
            >
              <Icon name="ph:x" class="size-3" />
            </BaseButton>
            <BaseButton
              v-if="
                values.model.fields && values.model.fields[index].isMinimized
              "
              @click="maximizeField(index, setFieldValue)"
              rounded="md"
              size="sm"
              color="light"
              class="absolute right-12 top-0 z-10"
              variant="pastel"
            >
              <Icon name="ph:rectangle" class="size-3" />
            </BaseButton>
            <BaseButton
              v-if="
                values.model.fields && !values.model.fields[index].isMinimized
              "
              @click="minimizeField(index, setFieldValue)"
              rounded="md"
              size="sm"
              color="light"
              class="absolute right-12 top-0 z-10"
              variant="pastel"
            >
              <Icon name="ph:minus" class="size-3" />
            </BaseButton>
            <div
              v-show="
                values.model.fields && values.model.fields[index]?.isMinimized
              "
              class="flex flex-row gap-x-2"
            >
              {{ values.model.fields[index].name }}
              <template v-if="values.model.fields[index].isForeignKey">
                <Icon name="ph:key-fill" class="size-5 text-yellow-400" />
              </template>
            </div>
            <div
              v-show="
                values.model.fields && !values.model.fields[index]?.isMinimized
              "
              class="grid grid-cols-12 gap-y-2"
            >
              <div class="col-span-12">
                <Field
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].name`"
                >
                  <BaseInput
                    label="Name of the field"
                    shape="curved"
                    placeholder="e.g. name, age, date of birth"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="text"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
              <div class="col-span-12">
                <Field
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].description`"
                >
                  <BaseTextarea
                    label="Short description"
                    shape="curved"
                    placeholder="Field Verbose details e.g. First name of User"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    size="sm"
                    rows="2"
                    type="text"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
              <div class="col-span-12">
                <Field
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].isForeignKey`"
                >
                  <BaseCheckbox
                    label="Is Foreign Key"
                    color="primary"
                    rounded="sm"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-if="values.model.fields[index].isForeignKey"
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].foreignKey`"
                >
                  <BaseSelect
                    v-model="field.value"
                    shape="rounded"
                    label="Foreign key to"
                    :error="errorMessage"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <template :key="n.id" v-for="n in nodes">
                      <option :value="n.id">
                        {{ n.data.name }}
                      </option>
                    </template>
                  </BaseSelect>
                </Field>
              </div>
              <div class="col-span-12">
                <Field
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].isPI`"
                >
                  <BaseCheckbox
                    label="Stores PII"
                    color="primary"
                    rounded="sm"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-if="!values.model.fields[index].isForeignKey"
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].type`"
                >
                  <BaseSelect
                    v-model="field.value"
                    shape="rounded"
                    label="Field Type"
                    :error="errorMessage"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <template :key="v" v-for="v in validFieldTypes">
                      <option :value="v">
                        {{ v.toUpperCase() }}
                      </option>
                    </template>
                  </BaseSelect>
                </Field>
              </div>
              <div class="col-span-12">
                <Field
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].requiresRedaction`"
                >
                  <BaseCheckbox
                    label="Requires Redaction"
                    color="primary"
                    rounded="sm"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-if="
                    values.model.fields &&
                    values.model.fields[index]?.requiresRedaction
                  "
                  v-slot="{ errorMessage, field, handleChange, handleBlur }"
                  :name="`model.fields[${index}].redactionAlgorithm`"
                >
                  <BaseSelect
                    v-model="field.value"
                    shape="rounded"
                    label="Redaction algorithm"
                    :error="errorMessage"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <template :key="v" v-for="v in validFieldTypes">
                      <option :value="v">
                        {{ v.toUpperCase() }}
                      </option>
                    </template>
                  </BaseSelect>
                </Field>
              </div>
            </div>
          </BaseCard>
        </div>
      </FormGroup>

      <BaseButton
        @click="addField(values, setFieldValue)"
        rounded="sm"
        size="sm"
        color="primary"
        class="my-3"
        variant="outline"
      >
        <Icon name="ph:plus" class="size-5" />
        <span>add field</span>
      </BaseButton>

      <BaseButton
        :disabled="isSubmitting"
        :loading="isSubmitting"
        type="submit"
        color="primary"
        class="!h-12 w-full"
      >
        Save
      </BaseButton>

      <div
        class="mt-3 text-base"
        v-for="(errs, field) in parseErrors(errors)"
        :key="field"
      >
        <h1 class="text-lg">{{ field }}</h1>
        <div class="flex flex-col" v-for="(v, k) in errs" :key="k">
          <div class="flex flex-row justify-between">
            <div class="text-sm font-semibold">{{ k }}:</div>
            <div class="text-sm text-danger-600">{{ v }}</div>
          </div>
        </div>
      </div>
    </Form>
  </BaseCard>
</template>
