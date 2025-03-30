import ButtonCard from '$lib/components/Button/CardButton/buttonCard.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Button/ButtonCard',
  component: ButtonCard,
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
  },
}

const ButtonTemplate = (args) => ({
  Component: ButtonCard,
  props: args,
})

export const ButtonCard_Big = ButtonTemplate.bind({})

ButtonCard_Big.args = {
  icon: 'new-folder',
  size: 'lg',
}

export const ButtonCard_Medium = ButtonTemplate.bind({})

ButtonCard_Medium.args = {
  icon: 'next',
  inner: true,
}

export const ButtonCard_Small = ButtonTemplate.bind({})

ButtonCard_Small.args = {
  icon: 'close',
  size: 'sm',
}
