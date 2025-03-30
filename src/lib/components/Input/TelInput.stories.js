import TelInput from './telInputExample.svelte'
import FormDecoration from './FormDecoration.svelte'

export default {
  title: 'Pomegranate/Form/TelInput',
  component: TelInput,
  decorators: [() => FormDecoration],
  tags: ['autodocs'],
}

const TelInputTemplate = (args) => ({
  Component: TelInput,
  props: args,
})

export const Default = TelInputTemplate.bind({})

Default.args = {}
