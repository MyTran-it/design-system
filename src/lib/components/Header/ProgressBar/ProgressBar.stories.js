import ProgressBar from './progressBar.svelte'
import Header from '../header.svelte'

export default {
  title: 'Pomegranate/Header/ProgressBar',
  component: ProgressBar,
  decorators: [() => Header],
  tags: ['autodos'],
}

const ProgressBarTemplate = (args) => ({
  Component: ProgressBar,
  props: args,
})

export const Default = ProgressBarTemplate.bind({})

Default.args = {}

export const Step1 = ProgressBarTemplate.bind({})

Step1.args = {
  value: 1,
  max: 5,
}

export const Step2 = ProgressBarTemplate.bind({})

Step2.args = {
  value: 2,
  max: 5,
}

export const Step3 = ProgressBarTemplate.bind({})

Step3.args = {
  value: 3,
  max: 5,
}

export const Step4 = ProgressBarTemplate.bind({})

Step4.args = {
  value: 4,
  max: 5,
}

export const Step5 = ProgressBarTemplate.bind({})

Step5.args = {
  value: 5,
  max: 5,
}
