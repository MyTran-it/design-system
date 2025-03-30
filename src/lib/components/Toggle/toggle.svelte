<script>
  /** Set to `true` to toggle the checkbox input */
  export let toggled = false

  /**
   *  Specify the label for the untoggled state
   *  @type {string}
   */
  export let labelOff = ''

  /**
   *  Specify the label for the toggled state
   *  @type {string}
   */
  export let labelOn = ''

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /**
   * Specify a name attribute for the checkbox input
   * @type {string}
   */
  export let name = undefined

  /** Set to `true` to invalid */
  export let invalid = false

  /** Set to `true` to disable the toggle */
  export let disabled = false

  /** Specify value for the checkbox input
   * Unlike other input controls, a checkbox's value is only included in the submitted data
   * if the checkbox is currently `checked`
   */
  export let value = 'on'
  export let group = undefined

  $: useGroup = Array.isArray(group)
  $: toggled = useGroup ? group.includes(value) : toggled

  $: toggleProps = {
    ...$$restProps,
    class: ['mh--toggle', $$restProps.class].filter(Boolean).join(' '),
  }
</script>

<div {...toggleProps}>
  <label class="mh--toggle--switch" for={id}>
    <input
      role="switch"
      type="checkbox"
      bind:checked={toggled}
      on:change={() => {
        if (useGroup) {
          group = group.includes(value)
            ? group.filter((_value) => _value !== value)
            : [...group, value]
        }
      }}
      on:change
      {id}
      {name}
      {value}
      {disabled}
    />
    <span
      class="mh--toggle--slider"
      class:invalid
      class:disabled
      aria-controls={toggled}
    />
  </label>
  <div class="mh--toggle--label" class:mh--toggle--label__disabled={disabled}>
    {#if !labelOff}
      <slot>
        <span>
          {labelOn}
        </span>
      </slot>
    {:else if toggled}
      <slot name="labelOn">
        <span>
          {labelOn}
        </span>
      </slot>
    {:else}
      <slot name="labelOff">
        <span>
          {labelOff}
        </span>
      </slot>
    {/if}
  </div>
</div>
