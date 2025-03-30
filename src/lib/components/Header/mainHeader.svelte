<script>
  import Icon from '../Icon/icon.svelte'
  import { fly } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /**
   * Set message of main header
   * @type {string}
   */
  export let message = ''

  /**
   * Icon name
   * @type {string}
   */
  export let primaryIcon = ''

  /**
   * Icon name
   * @type {string}
   */
  export let secondaryIcon = ''
</script>

<div class="mh--main--header" in:fly={{ x: -200, duration: 500 }}>
  <slot>
    <h1>
      {message}
    </h1>
  </slot>
  {#if primaryIcon || secondaryIcon}
    <div class="mh--main--header--icon">
      {#if primaryIcon}
        <button type="button" on:click={() => dispatch('primaryAction')}>
          <Icon name={primaryIcon} size="xl" />
        </button>
      {/if}
      {#if secondaryIcon}
        <button type="button" on:click={() => dispatch('secondaryAction')}>
          <Icon name={secondaryIcon} size="xl" />
        </button>
      {/if}
    </div>
  {/if}
</div>
