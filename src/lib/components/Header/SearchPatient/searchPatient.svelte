<script>
  import Icon from '../../Icon/icon.svelte'
  import ListBox from '../../ListBox/listBox.svelte'
  import Search from '../../Search/search.svelte'

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /** Specify the placeholder text */
  export let placeholder = ''

  /** Specify the id of selected item */
  export let selectedItemId = null

  /**
   * Set the dropdown items
   * @type {array}
   */
  export let items = []

  /**
   * Icon name
   * @type {string}
   */
  export let icon = 'user-change'

  /**
   * @type {'primary' | 'secondary'}
   */

  export let kind = 'secondary'

  export let withLine = false

  export let search = false

  let selectedItem = null
  let openSearch
  let filterList = items

  function filter(text) {
    return items.filter(
      (elem) => elem.text.toLowerCase().search(text.toLowerCase()) > -1
    )
  }

  $: if (selectedItemId != null) {
    selectedItem = items.find((elem) => elem.id === selectedItemId)
  }
</script>

<div class="mh--header--search--patient">
  <div
    class={`mh--header--search--patient__bar mh--header--search--patient__bar--${kind}`}
  >
    {#if search && openSearch}
      <Search
        inHeader
        {placeholder}
        on:clear={() => (filterList = items)}
        on:search={(e) => (filterList = filter(e.detail.searchValue))}
      />
    {:else}
      <div class="mh--header--search--patient__bar-name">
        <slot>
          {selectedItem ? selectedItem.text : placeholder}
        </slot>
      </div>
    {/if}
    <button
      type="button"
      class="mh--header--search--patient__bar-change--icon"
      on:click={() => (openSearch = !openSearch)}
    >
      <Icon name={openSearch ? 'chevron-up' : icon} size="lg" />
    </button>
  </div>

  <ListBox
    {withLine}
    bind:items={filterList}
    bind:expanded={openSearch}
    on:select={(e) => {
      selectedItemId = e.detail.item.id
      dispatch('select', selectedItemId)
      filterList = items
      openSearch = false
    }}
  />
</div>
