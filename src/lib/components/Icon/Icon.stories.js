import Icon from '$lib/components/Icon/icon.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
}

export const AddFilled = {
  args: {
    name: 'add-filled',
  },
}
