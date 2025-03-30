<script>
  import { onMount } from 'svelte'
  import FileUploaderButton from './fileUploaderButton.svelte'
  import Button from '../../Button/button.svelte'
  import FormRow from '../FormRow/formRow.svelte'
  import Icon from '../../Icon/icon.svelte'

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

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
  export let maxSize = undefined

  /**
   * Obtain a reference to the uploaded files
   * @type {array}
   */
  export let files = []

  /** Specify the helper text */
  export let helperText = ''

  export let invalid = false

  /** Specify the invalid text*/
  export let invalidText = ''

  /** Specify the invalid text when the file has bigger size then expect */
  export let invalidSizeText = ''

  /** Specify the invalid text when the file has different type then expect */
  export let invalidTypeText = ''

  /** Specify the label text */
  export let label = ''

  export let hideLabel = false

  /** Set to `true` if you want use with Take Photo Component*/
  export let takePicture = false

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /** Set to `true` to mark the form row as required (not contain logique, juste to remind user it is required)*/
  export let required = false

  let state = 'upload'
  let fileNameLabel = ''

  onMount(async () => {
    if (files.length > 0) {
      state = 'uploaded'
      fileNameLabel = files[0].name
    }
  })

  $: helperId = `helper-${id}`
  $: errorId = `error-${id}`
</script>

<div class="mh--form--item">
  {#if !hideLabel && label}
    <label
      for={id}
      class="mh--form--item--label"
      class:mh--form--item--label__disabled={disabled}
    >
      {label}
      {#if required}
        <span style="color: var(--clr-alert-300)"> * </span>
      {/if}
    </label>
  {/if}
  {#if state == 'upload'}
    <FormRow columns={takePicture && 2} noMargin>
      <FileUploaderButton
        {id}
        {placeholder}
        {name}
        {disabled}
        {accept}
        on:change={(e) => {
          files = e.detail
          state = 'uploaded'
          fileNameLabel = files[0].name

          if (files[0].size > maxSize) {
            invalid = true
            invalidText = invalidSizeText ?? 'Size invalid'
          } else if (!accept.includes(files[0].type.split('/')[1])) {
            invalid = true
            invalidText = invalidTypeText ?? 'Type of file invalid'
          }
        }}
      />
      {#if takePicture}
        <Button
          icon="camera"
          {disabled}
          on:click={() => dispatch('takePhoto')}
        />
      {/if}
    </FormRow>
  {:else if state == 'uploaded'}
    <FormRow withButton noMargin>
      <div class="mh--input--field">
        <input
          {id}
          type="text"
          class="mh--input mh--input__has-icon"
          class:mh--input__invalid={invalid}
          readonly
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : helperId}
          value={fileNameLabel}
        />
        <span
          class="mh--input--icon"
          class:mh--input--icon__valid={!invalid}
          class:mh--input--icon__invalid={invalid}
        >
          {#if invalid}
            <Icon name="warning-filled" />
          {:else}
            <Icon name="valid" />
          {/if}
        </span>
      </div>
      <Button
        type="button"
        icon="trash"
        on:click={() => {
          state = 'upload'
          fileNameLabel = ''
          files = []
          invalid = false
          dispatch('remove')
        }}
      />
    </FormRow>
  {/if}

  {#if (helperText && !files[0]) || invalid}
    <div
      id={invalid ? errorId : helperId}
      class:mh--form--item--helper-text={true}
      class:mh--form--item--helper-text__invalid={invalid && !disabled}
      class:mh--form--item--helper-text__disabled={disabled}
    >
      {#if invalid}
        {invalidText}
      {:else if helperText && !files[0]}
        {helperText}
      {/if}
    </div>
  {/if}
  <input type="file" {name} bind:files class="hidden" />
</div>
