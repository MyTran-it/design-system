import DatePicker from './datePicker.svelte'
import FormDecoration from '../FormDecoration.svelte'

export default {
  title: 'Pomegranate/Form/DatePicker',
  component: DatePicker,
  decorators: [() => FormDecoration],
  tag: ['autodocs'],
}

const DatePickerTemplate = (args) => ({
  Component: DatePicker,
  props: args,
})

export const Default = DatePickerTemplate.bind({})

Default.args = {
  label: 'Date de naissance',
}
