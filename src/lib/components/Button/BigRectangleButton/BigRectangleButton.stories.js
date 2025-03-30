import BigRectangleButton from '$lib/components/Button/BigRectangleButton/bigRectangleButton.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Button/BigRectangleButton',
  component: BigRectangleButton,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'radio' },
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'warning',
      ],
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
  Component: BigRectangleButton,
  props: args,
})

export const BigRectangleButton_Primary = ButtonTemplate.bind({})

BigRectangleButton_Primary.args = {
  title: 'Tous mes tests',
  subtitle: 'Victoria Breinlen',
  icon: 'folder-detail',
}

export const BigRectangleButton_PrimaryOutline = ButtonTemplate.bind({})

BigRectangleButton_PrimaryOutline.args = {
  title: 'Dossiers',
  subtitle: 'Voir tout',
  kind: 'primary-outline',
  icon: 'folder-detail',
}
