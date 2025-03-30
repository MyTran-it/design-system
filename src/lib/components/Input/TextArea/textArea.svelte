<script>
  /**
   * Specify the input value.
   * @type {string}
   */
  export let value = ''

  /** Specify the label text */
  export let label = ''

  /** Set to `true` to visually hide the label text */
  export let hideLabel = false

  /** Specify the placeholder text */
  export let placeholder = ''

  /** Specify the helper text */
  export let helperText = ''

  /** Specify the invalid state text */
  export let invalidText = ''

  /** Set to `true` to indicate an invalid state */
  export let invalid = false

  /** Specify the background to light mode */
  export let light = false

  /** Specify the number of cols */
  export let cols = 50

  /** Specify the number of rows */
  export let rows = 4

  /**
   * Specify the max character count
   * @type {number}
   */
  export let maxCount = undefined

  /** Set to `true` to mark the field as required */
  export let required = false

  /** Set to `true` to use the read-only variant */
  export let readonly = false

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /** Set to `true` to disable the input */
  export let disabled = false

  /** Set to `true` to visually hide the margin top/bottom */
  export let noMargin = false

  $: helperId = `helper-${id}`
  $: errorId = `error-${id}`
</script>

<div class="mh--form--item" class:noMargin>
  {#if !hideLabel && label}
    <label
      for={id}
      class:mh--form--item--label={true}
      class:mh--form--item--label__disabled={disabled}
      style={maxCount && `display: flex; justify-content: space-between`}
    >
      <span>
        {label}
      </span>
      {#if maxCount}
        <span>
          {value.length}/{maxCount}
        </span>
      {/if}
    </label>
  {/if}

  <textarea
    bind:value
    class="mh--textarea"
    class:mh--textarea--light={light}
    aria-invalid={invalid}
    aria-disabled={disabled}
    maxlength={maxCount ?? undefined}
    {disabled}
    {id}
    {cols}
    {rows}
    {placeholder}
    {readonly}
    {required}
  />
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
