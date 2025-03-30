import Tooltip from './tooltip.svelte'
import TooltipDecoration from './tooltipDecoration.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [() => TooltipDecoration],
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom'],
    },
    labelIcon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
    icon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
  },
}

const TooltipTemplate = (args) => ({
  Component: Tooltip,
  props: args,
})

export const Default = TooltipTemplate.bind({})

Default.args = {
  position: 'bottom',
  icon: 'info',
  open: true,
  tooltipText: 'Ajouter une autre adresse mail',
}
