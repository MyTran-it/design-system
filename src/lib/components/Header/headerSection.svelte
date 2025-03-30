<script>
  /**
   * 	Specify the title text.
   * @type {string}
   */
  export let title = ''

  /**
   * 	Specify the sub title text.
   * @type {string}
   */
  export let subTitle = ''
</script>

<div class="mh--header--section">
  {#if title && subTitle}
    <h3>{title}</h3>
    <p class="text-light-primary">{subTitle}</p>
  {:else}
    <p>{title}</p>
  {/if}
</div>
