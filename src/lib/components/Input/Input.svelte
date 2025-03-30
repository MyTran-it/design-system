<script>
  import Icon from '../Icon/icon.svelte'

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = ''

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /**
   * Specify the input value.
   * @type {null | number | string}
   */
  export let value = null

  /** Specify the label text */
  export let label = ''

  /** Specify the sub label text */
  export let sublabel = ''

  /** Set to `true` to visually hide the label text */
  export let hideLabel = false

  /** Set to `true` to visually hide the margin top/bottom of input */
  export let noMargin = false

  export let type = 'text'

  /** Specify the placeholder text */
  export let placeholder = '__________'

  /** Specify the helper text */
  export let helperText = ''

  /** Set to `true` to indicate an valid state */
  export let valid = false

  /** Set to `true` to indicate an invalid state */
  export let invalid = false

  /** Specify the invalid state text */
  export let invalidText = ''

  /** Set to `true` to disable the input */
  export let disabled = false

  /** Set to `true` to mark the field as required */
  export let required = false

  /** Set to `true` to use the read-only variant */
  export let readonly = false

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  $: inputProps = {
    id,
    name,
    placeholder,
    type,
    disabled,
    ...$$restProps,
    class: ['mh--input', $$restProps.class].filter(Boolean).join(' '),
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
      <p>
        {label}
        {#if required}
          <span style="color: var(--clr-alert-300)"> * </span>
        {/if}
      </p>
      {#if sublabel}
        <p class="mh--form--item--label-sublabel">
          {sublabel}
        </p>
      {/if}
    </label>
  {/if}
  <div class="mh--input--field">
    <input
      {...inputProps}
      {readonly}
      {required}
      class:mh--input__has-icon={icon || invalid || valid}
      class:mh--input__invalid={invalid}
      aria-invalid={invalid}
      aria-describedby={invalid ? errorId : helperId}
      bind:value
      on:click
      on:change
      on:input
      on:keydown
      on:keyup
      on:focus
      on:blur
      on:paste
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class:mh--input--icon={icon || invalid || valid}
      class:mh--input--icon__invalid={invalid}
      class:mh--input--icon__valid={valid}
      class:mh--input--icon__disabled={disabled}
      on:click
    >
      {#if invalid}
        <Icon name="warning-filled" />
      {:else if valid}
        <Icon name="valid" />
      {:else if icon}
        <Icon name={icon} />
      {/if}
    </span>
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
