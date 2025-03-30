import HeaderSection from './headerSection.svelte'
import Header from './header.svelte'

export default {
  title: 'Pomegranate/Header/HeaderSection',
  component: HeaderSection,
  decorators: [() => Header],
  tags: ['autodocs'],
}

const HeaderSectionTemplate = (args) => ({
  Component: HeaderSection,
  props: args,
})

export const Default = HeaderSectionTemplate.bind({})

Default.args = {}

export const TitleOnly = HeaderSectionTemplate.bind({})

TitleOnly.args = {
  title: 'Scanner QR code patient·e',
}

export const TitleAndSubTitle = HeaderSectionTemplate.bind({})

TitleAndSubTitle.args = {
  title: 'Attestation de droit',
  subTitle: 'Comment la télécharger en 4 étapes',
}
