import MarginerExample from './MarginExample.svelte'

export default {
  title: 'Pomegranate/Marginer',
  component: MarginerExample,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
  },
}

const MarginerTemplate = (args) => ({
  Component: MarginerExample,
  props: args,
})

export const Default = MarginerTemplate.bind({})

Default.args = {}
