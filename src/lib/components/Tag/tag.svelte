<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from '../Icon/icon.svelte'

  const dispatch = createEventDispatcher()

  /**
   * info tag contents
   * @type {string}
   */
  export let label = ''

  export let selected = false
</script>

<button
  type="button"
  class="mh--tag"
  aria-pressed={selected}
  on:click={() => {
    selected = !selected
    dispatch('select', {
      selected,
    })
  }}
>
  <span>
    {label}
  </span>
  <Icon name={selected ? 'close-outline' : 'add-filled'} size="sm" />
</button>
