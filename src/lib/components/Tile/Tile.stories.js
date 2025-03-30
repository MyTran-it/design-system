import Tile from './tile.svelte'

export default {
  title: 'Pomegranate/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    style: {
      options: ['noColor', 'light', 'dark'],
      control: { type: 'radio' },
    },
  },
}

const TileTemplate = (args) => ({
  Component: Tile,
  props: args,
})

export const Default = TileTemplate.bind({})

Default.args = {}

export const Light = TileTemplate.bind({})

Light.args = {
  style: 'light',
}

export const NoColor = TileTemplate.bind({})

NoColor.args = {
  style: 'noColor',
}
