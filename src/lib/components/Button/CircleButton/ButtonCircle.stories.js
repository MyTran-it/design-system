import ButtonCircle from '$lib/components/Button/CircleButton/buttonCircle.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Button/ButtonCircle',
  component: ButtonCircle,
  tags: ['autodocss'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
    kind: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
}

const ButtonTemplate = (args) => ({
  Component: ButtonCircle,
  props: args,
})

export const ButtonCircle_Big = ButtonTemplate.bind({})

ButtonCircle_Big.args = {
  icon: 'search',
  size: 'sm',
}

export const ButtonCircle_Medium = ButtonTemplate.bind({})

ButtonCircle_Medium.args = {
}

export const ButtonCircle_Small = ButtonTemplate.bind({})

ButtonCircle_Small.args = {
  label: 'HELLO',
  size: 'lg',
  kind: 'secondary'
}
