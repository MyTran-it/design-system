<script>
  import Marginer from './marginer.svelte'
  /**
   *  @type { 'horizontal' | 'vertical'}
   */
  export let direction = 'vertical'

  /**
   * Set the larger of Marginer
   * @type {string}
   */
  export let margin = '1rem'
</script>

{#if direction == 'horizontal'}
  <p>Use Horizontal in case elements are in the same row</p>
  <div style="border: 1px solid red; display: flex; flex-direction: row;">
    <div style="border: 1px solid blue; height: 3rem">
      <p>Col 1</p>
    </div>
    <Marginer {direction} {margin} />
    <div style="border: 1px solid blue; height: 3rem">
      <p>Col 2</p>
    </div>
  </div>
{:else if direction == 'vertical'}
  <p>Use Vertical in case elements are next to each orther</p>
  <div style="border: 1px solid red">
    <div style="border: 1px solid blue; height: 3rem">
      <p>Col 1</p>
    </div>
    <Marginer {direction} {margin} />
    <div style="border: 1px solid blue; height: 3rem">
      <p>Col 2</p>
    </div>
  </div>
{/if}
