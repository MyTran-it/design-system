import HeaderInfo from './headerInfo.svelte'
import Header from './header.svelte'

export default {
  title: 'Pomegranate/Header/HeaderInfo',
  component: HeaderInfo,
  decorators: [() => Header],
  tags: ['autodocs'],
  argTypes: {
    size: {
        control: { type: 'radio' },
        options: ['sm', 'xl'],
      },
  }
}

const HeaderInfoTemplate = (args) => ({
    Component: HeaderInfo,
    props: args,
})

export const Default = HeaderInfoTemplate.bind({})

Default.args = {
    size: 'sm'
}