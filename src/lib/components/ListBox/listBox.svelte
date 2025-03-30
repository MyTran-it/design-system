<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let items = []

  export let expanded = false

  export let emptyMessage = ''

  export let selectedItem = undefined

  export let withLine = false

  $: listBoxProps = {
    class: ['mh--listbox', $$restProps.class].filter(Boolean).join(' '),
  }
</script>

<div aria-expanded={expanded} {...listBoxProps}>
  <div>
    {#if items.length > 0}
      {#each items as item}
        <button
          tabindex="0"
          aria-pressed={selectedItem == item.id}
          type="button"
          class="mh--listbox--item"
          class:mh--listbox--item__line={withLine}
          on:click={() => {
            selectedItem = item.id
            dispatch('select', { item })
          }}
        >
          <p>{item.text}</p>
          {#if item.subtext}
            <p class="subtext">{item.subtext}</p>
          {/if}
        </button>
      {/each}
    {:else}
      <div class="mh--listbox--item">
        <p>
          <i>
            {emptyMessage}
          </i>
        </p>
      </div>
    {/if}
  </div>
</div>
