import Notification from './notification.svelte'

export default {
  title: 'Pomegranate/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'radio' },
      options: ['success', 'warning'],
    },
  },
}

const NotificationTemplate = (args) => ({
  Component: Notification,
  props: args,
})

export const Default = NotificationTemplate.bind({})

Default.args = {}
