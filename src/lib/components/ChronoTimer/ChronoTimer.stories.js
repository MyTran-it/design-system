import ChronoTimer from './chronoTimer.svelte'

export default {
  title: 'Pomegranate/ChronoTimer',
  component: ChronoTimer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['md', 'lg'],
    },
    state: {
      control: { type: 'radio' },
      options: ['start', 'active', 'expired', 'outrange'],
    },
  },
}

const ChronoTimerTemplate = (args) => ({
  Component: ChronoTimer,
  props: args,
})

export const Start = ChronoTimerTemplate.bind({})

Start.args = {
  label: ' Incubation en cours ...',
  timer: '01:46',
}

export const Active = ChronoTimerTemplate.bind({})

Active.args = {
  label: 'Fenêtre de lecture',
  timer: '01:46',
  state: 'active',
}

export const Expiry = ChronoTimerTemplate.bind({})

Expiry.args = {
  label: 'Fenêtre de lecture dépassée',
  timer: '01:46',
  state: 'expiry',
}
