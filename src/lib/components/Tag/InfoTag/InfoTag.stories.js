import InfoTag from '$lib/components/Tag/InfoTag/infoTag.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Info/InfoTag',
  component: InfoTag,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['tertiary', 'tertiary-light', 'warning', 'neutral', 'disabled'],
    },
    rightIcon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
    leftIcon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'xl'],
      control: {
        type: 'radio',
      },
    },
  },
}

const InfoTagTemplate = (args) => ({
  Component: InfoTag,
  props: args,
})

export const Tag_Tertiary = InfoTagTemplate.bind({})

Tag_Tertiary.args = {
  label: 'Tertiary',
}

export const Tag_TertiaryLight = InfoTagTemplate.bind({})

Tag_TertiaryLight.args = {
  label: 'Tertiary-light',
  kind: 'tertiary-light',
}

export const Tag_Warning = InfoTagTemplate.bind({})

Tag_Warning.args = {
  label: 'Warning',
  kind: 'warning',
}

export const Tag_Neutral = InfoTagTemplate.bind({})

Tag_Neutral.args = {
  label: 'Neutral',
  kind: 'neutral',
}

export const Tag_Disabled = InfoTagTemplate.bind({})

Tag_Disabled.args = {
  label: 'Disabled',
  kind: 'disabled',
}
