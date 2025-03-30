import Summary from './summary.svelte'
import LIB_ICONS from '$lib/icons/mh-icons.js'

const availableIcons = Object.keys(LIB_ICONS)

export default {
  title: 'Pomegranate/Summary',
  component: Summary,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: availableIcons,
      control: {
        type: 'select',
      },
    },
  },
}

const SummaryTemplate = (args) => ({
  Component: Summary,
  props: args,
})

export const Default = SummaryTemplate.bind({})

Default.args = {
  title: 'Title',
  subTitle1: 'subTitle 1',
  subTitle2: 'subTitle 2',
  subTitle3: 'subTitle 3',
}

export const WithIcon = SummaryTemplate.bind({})

WithIcon.args = {
  title: 'Summary with icon',
  subTitle1: 'subTitle 1',
  subTitle2: 'subTitle 2',
  subTitle3: 'subTitle 3',
  icon: 'cassette',
}

export const Urgent = SummaryTemplate.bind({})

Urgent.args = {
  title: 'Summary with icon',
  subTitle1: 'subTitle 1',
  subTitle2: 'subTitle 2',
  subTitle3: 'subTitle 3',
  urgent: true,
}
