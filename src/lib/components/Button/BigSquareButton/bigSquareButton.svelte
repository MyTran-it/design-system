<script>
  import Icon from '../../Icon/icon.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /**
   *  Specify the kind of button
   * @type {"primary" | "primary-outline" | "double" | "secondary" | "secondary-outline" | "warning"}
   */
  export let kind = 'primary'

  /** Set to `true` to disable the button */
  export let disabled = false

  /**
   * Icon name
   * @type {string}
   */
  export let icon = undefined

  /**
   * Label title
   * @type {string}
   */
  export let titlePrimaryButton = ''

  /**
   * Subtitle
   * @type {string}
   */
  export let subtitlePrimaryButton = ''

  /**
   * Label of secondary button
   * @type {string}
   */
  export let titleSecondaryButton = ''

  /**
   * Secondary icon name
   * @type {string}
   */
  export let secondaryIcon = undefined

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  function getType(kind) {
    if (kind == 'double') {
      return 'primary-outline'
    }
    return kind
  }
</script>

<div class="mh--btn--bigsquare">
  <button
    {type}
    class={`mh--btn--round ${getType(kind)}`}
    on:click={() => dispatch('primaryAction')}
    {disabled}
  >
    {#if icon}
      <Icon name={icon} />
    {/if}
    <h3>
      {titlePrimaryButton}
    </h3>
    <p class="text-light-primary">
      {subtitlePrimaryButton}
    </p>
  </button>
  {#if kind == 'double'}
    <button
      {type}
      class="mh--btn--round--double primary"
      on:click={() => dispatch('secondaryAction')}
    >
      {titleSecondaryButton}
      {#if secondaryIcon}
        <Icon name={secondaryIcon} size="lg" />
      {/if}
    </button>
  {/if}
</div>
