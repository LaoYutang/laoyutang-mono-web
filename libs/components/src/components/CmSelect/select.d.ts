export type DataNodeType = {
  label: string
  value: string | number
  disabled?: boolean
  children?: DataNodeType[]
  [attr: string]: any
}
