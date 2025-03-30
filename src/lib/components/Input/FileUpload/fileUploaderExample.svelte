<script>
  import FileUploader from './fileUploader.svelte'
  import TakePhoto from './takePhoto.svelte'

  /** Specify the placeholder text  */
  export let placeholder = ''

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = ''

  /** Set to `true` to disable the fileUploader */
  export let disabled = false

  /**
   * Specify the accepted file types
   * @type {array}
   */
  export let accept = ['jpg', 'jpeg', 'png', 'pdf']

  /* Specify max size of the file (bytes) */
  export let maxSize = 2097152

  /**
   * Obtain a reference to the uploaded files
   * @type {array}
   */
  export let files = []

  /** Specify the helper text */
  export let helperText = ''

  /** Specify the invalid text when the file has bigger size then expect */
  export let invalidSizeText = ''

  /** Specify the invalid text when the file has different type then expect */
  export let invalidTypeText = ''

  /** Specify the label text */
  export let label = ''

  /** Set to `true` if you want use with Take Photo Component*/
  export let takePicture = false

  let openCamera = false
</script>

{#if takePicture}
  {#if !openCamera}
    <FileUploader
      {label}
      {placeholder}
      {helperText}
      {invalidSizeText}
      {invalidTypeText}
      {accept}
      {maxSize}
      {disabled}
      {name}
      takePicture
      bind:files
      on:takePhoto={() => (openCamera = !openCamera)}
    />
  {:else}
    <TakePhoto
      bind:open={openCamera}
      bind:files
      on:captured={() => (openCamera = !openCamera)}
    />
  {/if}
{:else}
  <FileUploader
    {label}
    {placeholder}
    {helperText}
    {invalidSizeText}
    {invalidTypeText}
    {accept}
    {maxSize}
    {disabled}
    {name}
    bind:files
  />
{/if}
