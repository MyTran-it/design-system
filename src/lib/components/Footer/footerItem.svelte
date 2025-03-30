<script>
  import { goto } from '$app/navigation'
  import { createEventDispatcher } from 'svelte'

  import Icon from '../Icon/icon.svelte'

  const dispatch = createEventDispatcher()

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /** Specify the label */
  export let label = ''

  /** Specify the href */
  export let href = ''

  /** Set to `true` to disable the button */
  export let disabled = false
</script>

<button
  class="mh--footer--item"
  {disabled}
  on:click={() => {
    if (!disabled) {
      if (href) goto(href)
      else dispatch('click')
    }
  }}
>
  <Icon name={icon} />
  {#if label}
    <span class="text-light-primary">
      {label}
    </span>
  {/if}
</button>
