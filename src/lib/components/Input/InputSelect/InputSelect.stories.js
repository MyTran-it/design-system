import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'
import FormDecoration from '../FormDecoration.svelte'

export default {
  title: 'Pomegranate/Form/InputSelect',
  component: InputSelect,
  tag: ['autodocs'],
  decorators: [() => FormDecoration],
  argTypes: {},
}

const InputSelectTemplate = (args) => ({
  Component: InputSelect,
  props: args,
})

let list = [
  { id: 0, text: 'Vaciné(e) (2 doses ou plus)' },
  { id: 1, text: 'Partiellement vacciné(e) (1 dose)' },
  { id: 2, text: 'Non vacciné(e)' },
  { id: 3, text: 'Vaciné(e) (2 doses ou plus)' },
  { id: 4, text: 'Partiellement vacciné(e) (1 dose)' },
  { id: 5, text: 'Non vacciné(e)' },
]

export const Default = InputSelectTemplate.bind({})

Default.args = {
  placeholder: 'Option',
  label: 'This is a label',
  sublabel: 'subLabel',
  helperText: 'This a helperText',
  items: list,
}

export const ShouldFilterItem = InputSelectTemplate.bind({})

ShouldFilterItem.args = {
  placeholder: 'Option',
  label: 'This is a label',
  sublabel: 'ShouldFilterItem',
  helperText: 'This a helperText',
  items: list,
  shouldFilterItem: true
}

export const InvalidExample = InputSelectTemplate.bind({})

InvalidExample.args = {
  placeholder: 'Option',
  label: 'This is a label',
  invalidText: 'This a invalid text',
  items: list,
  invalid: true
}

export const Dropdown = InputSelectTemplate.bind({})

Dropdown.args = {
  placeholder: 'Option',
  label: 'This is a dropdown with placeholder as default option - no input',
  sublabel: 'use props: readonly && !shouldFilterItem',
  helperText: 'This a helperText',
  items: list,
  readonly: true,
}