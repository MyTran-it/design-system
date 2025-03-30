import Toggle from '$lib/components/Toggle/toggle.svelte'

export default {
  title: 'Pomegranate/Toggle/Toggle',
  component: Toggle,
  tags: ['autodocs'],
}

const ToggleTemplate = (args) => ({
  Component: Toggle,
  props: args,
})

export const Default = ToggleTemplate.bind({})

Default.args = {
  labelOff: 'Urgent?',
  labelOn: 'Marqué comme urgent',
}

export const Toggle_With_Icon = ToggleTemplate.bind({})

Toggle_With_Icon.args = {
  labelOff: 'Urgent?',
  labelOn: 'Marqué comme urgent',
}

export const Toggle_Invalid = ToggleTemplate.bind({})

Toggle_Invalid.args = {
  labelOff: 'Urgent?',
  labelOn: 'Marqué comme urgent',
  invalid: true,
}

export const Toggle_Disabled = ToggleTemplate.bind({})

Toggle_Disabled.args = {
  labelOff: 'Urgent?',
  labelOn: 'Marqué comme urgent',
  disabled: true,
}
