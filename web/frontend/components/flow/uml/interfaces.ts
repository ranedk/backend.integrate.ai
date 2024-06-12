export interface IUMLField {
  name: string
  description: string
  isForeignKey: boolean
  foreignKey?: IUMLField
  type: 'string' | 'boolean' | 'number'
  isPI: boolean
  requiresRedaction: boolean
  redactionAlgorithm?: string
}

// You must caary out the extra headache of making this
// model compatible with the yup validation schema construct
// in ModelContent.vue
export interface IModel {
  name: string
  description: string
  fields: IUMLField[]
  selected?: boolean
}

export interface IData {
  model: IModel
}
