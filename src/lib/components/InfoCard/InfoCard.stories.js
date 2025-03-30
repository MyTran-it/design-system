import InfoCard from './infoCard.svelte'

export default {
  title: 'Pomegranate/Info/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
}

const InfoCardTemplate = (args) => ({
  Component: InfoCard,
  props: args,
})

export const Default = InfoCardTemplate.bind({})

Default.args = {}
