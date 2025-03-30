<script>
  import Icon from '../../Icon/icon.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /** Specify the placeholder text */
  export let placeholder = ''

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = ''

  /** Set to `true` to disable the input */
  export let disabled = false

  /**
   * Specify the accepted file types
   * @type {array}
   */
  export let accept = []

  /**
   * Obtain a reference to the uploaded files
   * @type {ReadonlyArray<File>}
   */
  export let files = []

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  let ref = null
</script>

<div class="mh--input--field">
  <button
    type="button"
    {id}
    {disabled}
    class="mh--input"
    on:click={() => !disabled && ref.click()}
  >
    {placeholder}
    <span
      class:mh--input--icon={true}
      class:mh--input--icon__disabled={disabled}
      class:mh--input--icon__fileuploader={true}
    >
      <Icon name="add-filled" />
    </span>
  </button>
  <input
    {id}
    {name}
    {disabled}
    {accept}
    type="file"
    tabindex="-1"
    bind:this={ref}
    multiple={false}
    on:change|stopPropagation={({ target }) => {
      files = [...target.files]

      dispatch('change', files)
    }}
    on:click={({ target }) => {
      target.value = null
    }}
  />
</div>
