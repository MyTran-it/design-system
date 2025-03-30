<script>
  import { getContext } from 'svelte'

  export let id = 'mh-' + Math.random().toString(36)

  /** Set to `true` for the switch to be the current tab */
  export let isCurrent = false

  /**
   * Set the `href` to use an anchor link
   * @type {string}
   */
  export let href = ''

  /** Set to `true` to disable the tab */
  export let disabled = false

  /** Obtain a reference to the HTML element */
  export let ref = null

  const { selectedTab, add, update } = getContext('Tabs')

  add({ id, disabled })

  $: isCurrent = $selectedTab === id
</script>

<a
  bind:this={ref}
  {id}
  {href}
  {disabled}
  role="tab"
  tabindex={disabled ? '-1' : '0'}
  class="mh--tab--item"
  aria-current={isCurrent}
  on:click={() => {
    if (!disabled) {
      update(id)
    }
  }}
>
  <slot />
</a>
