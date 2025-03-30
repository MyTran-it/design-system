import SearchPatient from './searchPatient.svelte'

export default {
  title: 'Pomegranate/Header/SearchPatient',
  component: SearchPatient,
  tags: ['autodocs'],
}

const SearchPatientTemplate = (args) => ({
  Component: SearchPatient,
  props: args,
})

let listPatient = [
  { id: 0, text: 'Victoria BREINLEN' },
  { id: 1, text: 'Antoine DAVID' },
  { id: 2, text: 'Thomas DEVILLERS' },
  { id: 3, text: 'Marie-Laure VAILLE' },
]

export const Default = SearchPatientTemplate.bind({})

Default.args = {
  items: listPatient,
  placeholder: 'Choisir un(e) patient(e)',
}
