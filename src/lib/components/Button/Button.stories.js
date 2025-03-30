import Button from '$lib/components/Button/button.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      table: {
        category: 'slots',
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['md', 'lg'],
    },
    kind: {
      control: { type: 'select' },
      options: ['primary', 'primary-outline', 'secondary', 'secondary-outline', 'warning'],
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
  Component: Button,
  props: args,
})

export const Primary = ButtonTemplate.bind({})

Primary.args = {
  label: 'Primary',
}

export const PrimaryOutline = ButtonTemplate.bind({})

PrimaryOutline.args = {
  kind: 'primary-outline',
  label: 'Primary-outline',
}

export const SecondaryOutline = ButtonTemplate.bind({})

SecondaryOutline.args = {
  kind: 'secondary-outline',
  label: 'Secondary-outline',
}

export const Warning = ButtonTemplate.bind({})

Warning.args = {
  kind: 'warning',
  label: 'Warning',
}
