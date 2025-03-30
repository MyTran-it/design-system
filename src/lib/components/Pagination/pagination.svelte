<script>
  import ButtonSet from '../Button/buttonSet.svelte'
  import Button from '../Button/button.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let currentPage = 1

  /** If totalPage is 0, this pagination will not display*/
  export let totalPage = 3

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  $: paginationProps = {
    id,
    ...$$restProps,
    class: ['mh--pagination', $$restProps.class].filter(Boolean).join(' '),
  }
  let width = '2ch'
</script>

{#if totalPage != 0}
  <div {...paginationProps}>
    <Button
      icon="back"
      disabled={currentPage <= 1}
      kind="primary-outline"
      on:click={() => {
        currentPage--
        dispatch('previousPage')
      }}
    />
    <div class="mh--pagination__number">
      <input
        type="number"
        inputmode="numeric"
        pattern="[0-9]*"
        min="1"
        max={totalPage}
        style={`width: ${width}`}
        bind:value={currentPage}
        on:change={() => {
          if (currentPage > totalPage) return (currentPage = totalPage)
          if (currentPage < 1) return (currentPage = 1)

          dispatch('changePage')
        }}
        on:input={(e) => {
          width = e.target.value.length + 1 + 'ch'
        }}
      />
      / {totalPage}
    </div>
    <Button
      icon="next"
      disabled={currentPage >= totalPage}
      kind="primary-outline"
      on:click={() => {
        currentPage++
        dispatch('nextPage')
      }}
    />
  </div>
{/if}
