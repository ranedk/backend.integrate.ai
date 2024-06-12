<template>
  <div>
    <Form @submit="handleSubmit" :validation-schema="schema">
      <div>
        <label for="name">Name:</label>
        <Field name="name" v-slot="{ field }">
          <input v-bind="field" type="text" placeholder="Enter name" />
        </Field>
        <ErrorMessage name="name" />

        <div
          v-for="(field, index) in formData.fields"
          :key="index"
          class="field-group"
        >
          <label :for="`fields[${index}].name`">Field Name:</label>
          <Field :name="`fields[${index}].name`" v-slot="{ field }">
            <input v-bind="field" type="text" placeholder="Enter field name" />
          </Field>
          <ErrorMessage :name="`fields[${index}].name`" />

          <label :for="`fields[${index}].optional`">Optional:</label>
          <Field :name="`fields[${index}].optional`" v-slot="{ field }">
            <input v-bind="field" type="checkbox" />
          </Field>

          <ErrorMessage :name="`fields[${index}].optional`" />

          <div v-if="!formData.fields[index].optional">
            <label :for="`fields[${index}].value`">Field Value:</label>
            <Field :name="`fields[${index}].value`" v-slot="{ field }">
              <input
                v-bind="field"
                type="text"
                placeholder="Enter field value"
              />
            </Field>
            <ErrorMessage :name="`fields[${index}].value`" />
          </div>

          <button type="button" @click="removeField(index)">Remove</button>
        </div>

        <button type="button" @click="addField">Add Field</button>
      </div>

      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

export default {
  setup() {
    const formData = ref({
      name: '',
      fields: [{ name: '', value: '', optional: false }],
    })

    const schema = yup.object({
      name: yup.string().required('Name is required'),
      fields: yup
        .array()
        .of(
          yup.object({
            name: yup.string().required('Field name is required'),
            value: yup.string().when('optional', {
              is: false,
              then: yup.string().required('Field value is required'),
              otherwise: yup.string().nullable(),
            }),
            optional: yup.boolean(),
          }),
        )
        .min(1, 'At least one field is required'),
    })

    const addField = () => {
      formData.value.fields.push({ name: '', value: '', optional: false })
    }

    const removeField = (index) => {
      formData.value.fields.splice(index, 1)
    }

    const handleSubmit = (values) => {
      console.log('Form Submitted:', values)
    }

    return {
      formData,
      schema,
      addField,
      removeField,
      handleSubmit,
    }
  },
}
</script>

<style scoped>
.field-group {
  margin-bottom: 20px;
}
</style>
