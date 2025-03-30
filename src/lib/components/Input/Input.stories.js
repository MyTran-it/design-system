import Input from '$lib/components/Input/Input.svelte'
import FormDecoration from './FormDecoration.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Form/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [() => FormDecoration],
  argTypes: {
    icon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
  },
}

const InputTemplate = (args) => ({
  Component: Input,
  props: args,
})

export const Default = InputTemplate.bind({})

Default.args = {
  label: 'Input example',
  helperText: 'this is helper text',
  name: 'example',
}

export const Input_Invalid = InputTemplate.bind({})

Input_Invalid.args = {
  label: 'input invalid example',
  invalid: true,
  invalidText: 'This is innvalid text',
}

export const Input_Disabled = InputTemplate.bind({})

Input_Disabled.args = {
  label: 'Input disabled example',
  disabled: true,
  helperText: 'This is helper text',
}
