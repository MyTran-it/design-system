import ButtonAnimation from '$lib/components/Button/AnimationButton/buttonAnimation.svelte'
import { userEvent, within } from '@storybook/testing-library'

export default {
  title: 'Pomegranate/Button/ButtonAnimation',
  component: ButtonAnimation,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'loading-bar'],
    },
    loadingFunction: {
      table: {
        category: 'events',
      },
        control: 'object' ,
      
    },
  },
}

const ButtonTemplate = (args) => ({
  Component: ButtonAnimation,
  props: args,
})

function callApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('ok')
    }, 1000)
  })
}

export const Button_Animation = ButtonTemplate.bind({})

Button_Animation.args = {
  type: 'button',
  clickLabel: 'Cliquer pour envoyer',
  loadingLabel: 'Envoi en cours...',
  doneLabel: 'Réussi!',
  loadingFunction: callApi,
}

export const Loading_Bar_Animation = ButtonTemplate.bind({})

Loading_Bar_Animation.args = {
  type: 'loading-bar',
  loadingLabel: 'Envoi en cours...',
  doneLabel: 'Réussi!',
  loadingFunction: callApi,
}

export const IsLoading = ButtonTemplate.bind({})

IsLoading.args = {
  type: 'button',
  clickLabel: 'Cliquer pour envoyer',
  loadingLabel: 'Envoi en cours...',
  doneLabel: 'Réussi!',
  isLoading: true,
}

export const IsDone = ButtonTemplate.bind({})

IsDone.args = {
  type: 'button',
  clickLabel: 'Cliquer pour envoyer',
  loadingLabel: 'Envoi en cours...',
  doneLabel: 'Réussi!',
  isDone: true,
}

export const Button_Animation_Senario = ButtonTemplate.bind({})

Button_Animation_Senario.args = {
  type: 'button',
  clickLabel: 'Cliquer pour envoyer',
  loadingLabel: 'Envoi en cours...',
  doneLabel: 'Réussi!',
  isLoading: false,
  isDone: false,
  loadingFunction: callApi,
}

Button_Animation_Senario.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const submitButton = canvas.getByRole('loadingbutton')

  await userEvent.click(submitButton)
}
