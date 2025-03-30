<script>
  import Icon from '../Icon/icon.svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  /**
   * Set page title
   * @type {string}
   */
  export let pageTitle = ''

  /**
   * Set size of page title container
   * @type {'sm' | 'xl'}
   */
  export let size = 'xl'

  /**
   * Set previous page
   * @type {string}
   */
  export let previousPage = $page.url.origin

  /** Override method go back
   * @type {() => void}
   */
  export let goBackOverride = undefined

  export let noBack = false

  function goBack() {
    if (goBackOverride) goBackOverride()
    else goto(previousPage)
  }
</script>

<div class="mh--page--title {size}" class:noBack>
  {#if !noBack}
    <button type="button" on:click={goBack}>
      <Icon name="arrow-left" />
    </button>
  {/if}
  {#if size == 'xl'}
    <h2>{pageTitle}</h2>
  {:else if size == 'sm'}
    <h3>{pageTitle}</h3>
  {/if}
</div>
