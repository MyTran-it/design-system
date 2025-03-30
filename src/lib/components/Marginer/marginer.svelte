<script>
  /**
   *  @type { 'horizontal' | 'vertical'}
   */
  export let direction = 'vertical'

  /**
   * Set the larger of Marginer
   * @type {string}
   */
  export let margin = '1rem'

  let marginer = null

  $: if (marginer) {
    direction == 'vertical' &&
      marginer.style.setProperty('--marginHeight', margin)
    direction == 'horizontal' &&
      marginer.style.setProperty('--marginWidth', margin)
  }
</script>

<span bind:this={marginer} class={direction} />
