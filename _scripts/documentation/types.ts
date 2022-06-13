export type YMLConfiguration = {
  name: string
  description: string
  inputs: Record<string, {
    required?: boolean
    description: string
    default?: string
    type?: string
  }>
  outputs: Record<string, {
    description: string
    type?: string
  }>
  envInputs?: Record<string, string>
}
