import FileUploaderExample from '$lib/components/Input/FileUpload/fileUploaderExample.svelte'
import FormDecoration from '../FormDecoration.svelte'

export default {
  title: 'Pomegranate/Form/FileUploader',
  component: FileUploaderExample,
  tag: ['autodocs'],
  decorators: [() => FormDecoration],
  argTypes: {},
}

const FileUploaderTemplate = (args) => ({
  Component: FileUploaderExample,
  props: args,
})

export const Default = FileUploaderTemplate.bind({})

Default.args = {
  label: 'Fichier upload',
  placeholder: 'File uploader',
  helperText: 'this is helper text',
}

export const WithOptionTakePhoto = FileUploaderTemplate.bind({})

WithOptionTakePhoto.args = {
  label:
    'Fichier upload with take picture (please watch tutorial before using this case)',
  placeholder: `type accepted 'jpg', 'jpeg', 'png', 'pdf'`,
  helperText: 'Charger un fichier ou prendre une photo',
  invalidSizeText: "File's size has exceeded 2MB allowed",
  invalidTypeText: "File's type must be jpg, jpeg, png or pdf",
  takePicture: true,
}
