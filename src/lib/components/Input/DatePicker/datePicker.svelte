<script>
  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /** Specify the label text */
  export let label = ''

  /** Set to `true` to disable the date picker */
  export let disabled = false

  /**
   * Specify the date picker input value
   * @type {number | string}
   */
  export let value = ''

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = ''

  /** Specify the helper text */
  export let helperText = ''

  /** Set to `true` to indicate an invalid state */
  export let invalid = false

  /** Specify the invalid state text */
  export let invalidText = ''

  /** The earliest date to accept
   * @type {yyyy-mm-dd}
   */
  export let min = ''

  /** The latest date to accept
   * @type {yyyy-mm-dd}
   */
  export let max = ''

  /** Set to `true` to mark the field as required */
  export let required = false

  /** Set to `true` to use the read-only variant */
  export let readonly = false

  /** Set to `true` to visually hide the margin top/bottom of input */
  export let noMargin = false

  /** Set to `true` to visually hide the label text */
  export let hideLabel = false

  $: inputProps = {
    type: 'date',
    name,
    id,
    disabled,
    min,
    max,
  }

  $: helperId = `helper-${id}`
  $: errorId = `error-${id}`
</script>

<div class="mh--form--item" class:noMargin>
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
  <div class="mh--input--field">
    <input
      {readonly}
      {required}
      class="mh--input"
      class:mh--input__invalid={invalid}
      aria-invalid={invalid}
      aria-describedby={invalid ? errorId : helperId}
      {...inputProps}
      bind:value
    />
  </div>
  {#if helperText || invalidText}
    <div
      id={invalid ? errorId : helperId}
      class:mh--form--item--helper-text={true}
      class:mh--form--item--helper-text__invalid={invalid && !disabled}
      class:mh--form--item--helper-text__disabled={disabled}
    >
      {#if invalid}
        {invalidText}
      {:else if helperText}
        {helperText}
      {/if}
    </div>
  {/if}
</div>
