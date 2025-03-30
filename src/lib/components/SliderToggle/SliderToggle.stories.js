import SliderToggle from '$lib/components/SliderToggle/sliderToggle.svelte'

export default {
  title: 'Pomegranate/SliderToggle',
  component: SliderToggle,
  tags: ['autodocs'],
}

const SliderToggleTemplate = (args) => ({
  Component: SliderToggle,
  props: args,
})

export const Example = SliderToggleTemplate.bind({})

Example.args = {
  label: 'Ligne de test (T)',
  labelA: 'Absente',
  labelB: 'Présente',
}
