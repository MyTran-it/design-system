import LinkExample from './LinkExample.svelte'

export default {
  title: 'Pomegranate/Link',
  component: LinkExample,
  tags: ['autodocs'],
}

const LinkTemplate = (args) => ({
  Component: LinkExample,
  props: args,
})

export const Default = LinkTemplate.bind({})

Default.args = {
    href: 'https://www.ameli.fr/'
}
