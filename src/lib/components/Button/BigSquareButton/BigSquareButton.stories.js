import BigSquareButton from '$lib/components/Button/BigSquareButton/bigSquareButton.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Button/BigSquareButton',
  component: BigSquareButton,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'radio' },
      options: [
        'primary',
          'primary-outline',
          'double',
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
  Component: BigSquareButton,
  props: args,
})

export const BigSquareButton_Primary = ButtonTemplate.bind({})

BigSquareButton_Primary.args = {
  titlePrimaryButton: 'Tous mes tests',
  subtitlePrimaryButton: 'Victoria Breinlen',
  icon: 'folder-detail',
}

export const BigSquareButton_PrimaryOutline = ButtonTemplate.bind({})

BigSquareButton_PrimaryOutline.args = {
  titlePrimaryButton: 'Dossiers',
  subtitlePrimaryButton: 'Voir tout',
  kind: 'primary-outline',
  icon: 'folder-detail',
}

export const BigSquareButton_Double = ButtonTemplate.bind({})

BigSquareButton_Double.args = {
  titlePrimaryButton: 'Patient(es)',
  subtitlePrimaryButton: 'Voir tout',
  kind: 'double',
  icon: 'folder-detail',
  titleSecondaryButton: 'Créer profil',
  secondaryIcon: 'add-user',
}
