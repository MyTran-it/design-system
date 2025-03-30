<script>
  import Icon from '../Icon/icon.svelte'
  import ListBox from '../ListBox/listBox.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /** Specify the `placeholder` attribute of the search input */
  export let placeholder = 'Recherche'

  /**
   * Specify the value of the search input
   * @type {any}
   */
  export let value = ''

  /** Set to `true` to expand the search input */
  export let expanded = false

  /** Set to `true` if this search is inside a ``<Header/>`` */
  export let inHeader = false

  /** Specify the message in case items is empty */
  export let emptyMessage = ''

  /** Set to `true` to option a list appear after on:search */
  export let withDropdownList = false

  export let withLine = false

  /**
   * Set the dropdown items after on:search
   * @type {array}
   */
  export let items = []

  let isSearching = false

  function oninput(e) {
    value = e.target.value
    if (value.length == 0 && !e.items) {
      handleClear()
    }
  }

  function handleClear() {
    dispatch('clear')
    value = ''
    isSearching = false
  }
</script>

<div class="mh--search">
  <div class="mh--search--bar" class:inHeader>
    <input
      {placeholder}
      bind:value
      type="search"
      class="mh--search--bar-input"
      on:input={(e) => oninput(e)}
      on:keydown={({ key }) => {
        if (key === 'Escape') {
          handleClear()
        } else if (key === 'Enter') {
          dispatch('search', { searchValue: value })
          isSearching = true
        }
      }}
    />
    <div class="flex mf-auto">
      <button
        type="button"
        class="mh--search--bar-icon"
        class:mh--search--bar-icon-hidden={value === ''}
        on:click={() => {
          handleClear()
          isSearching = false
        }}
      >
        <Icon name="close" />
      </button>
      <button
        type="button"
        class="mh--search--bar-icon"
        on:click={() => {
          dispatch('search', { searchValue: value })
          if (value) isSearching = true
        }}
      >
        <Icon name="search" />
      </button>
    </div>
    {#if expanded}
      <div class:mh--search--bar--expanded={expanded}>
        <slot name="expanded-content" />
      </div>
    {/if}
  </div>

  {#if withDropdownList}
    <ListBox
      {withLine}
      bind:expanded={isSearching}
      bind:items
      on:select={(e) => {
        dispatch('select', { item: e.detail.item })
        isSearching = false
      }}
      {emptyMessage}
    />
  {/if}
</div>
