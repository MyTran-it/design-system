<script>
  import Icon from '../../Icon/icon.svelte'

  /** Set to `true` to toggle the checkbox input */
  export let checked = false

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

  /** Set to `true` to disable the toggle */
  export let disabled = false

  $: toggleProps = {
    ...$$restProps,
    class: ['mh--toggle', $$restProps.class].filter(Boolean).join(' '),
  }
</script>

<div {...toggleProps}>
  <button
    type="button"
    class="mh--toggle--icon"
    aria-controls={checked}
    on:click={() => (checked = !checked)}
    {disabled}
  >
    <Icon name={checked ? 'flag-filled' : 'flag'} />
  </button>
  <div class="mh--toggle--label" class:mh--toggle--label__disabled={disabled}>
    {#if !labelOff}
      <slot>
        <span>
          {labelOn}
        </span>
      </slot>
    {:else if checked}
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
  <input type="hidden" {id} {name} value={checked} {disabled} />
</div>
