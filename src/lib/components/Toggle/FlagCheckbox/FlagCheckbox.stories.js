import FlagCheckbox from '$lib/components/Toggle/FlagCheckbox/flagCheckbox.svelte'

export default {
  title: 'Pomegranate/Toggle/FlagCheckbox',
  component: FlagCheckbox,
  tags: ['autodocs'],
}

const FlagCheckboxTemplate = (args) => ({
  Component: FlagCheckbox,
  props: args,
})

export const Default = FlagCheckboxTemplate.bind({})

Default.args = {
  labelOff: 'Urgent?',
  labelOn: 'Marqué comme urgent',
}
