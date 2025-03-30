<script>
  import { clickOutside } from '../../utils/clickOutside'
  import { createEventDispatcher } from 'svelte'
  import Icon from '../Icon/icon.svelte'
  import ButtonSet from '../Button/buttonSet.svelte'
  import Button from '../Button/button.svelte'
  import ButtonCircle from '../Button/CircleButton/buttonCircle.svelte'

  const dispatch = createEventDispatcher()

  /** Set to `true` to use the passive variant */
  export let passiveModal = false

  /** Set to `true` to open the modal */
  export let open = false

  /** Set to `true` to show the header of page */
  export let paddingTop = false

  /**
   * Set large of space padding
   * @type { 'sm' | 'xl'}
   */
  export let space = 'sm'

  /**
   * Specify the modal heading
   * @type {string}
   */
  export let modalHeading = ''

  /** Specify the primary button text */
  export let primaryButtonText = ''

  /**
   * Specify the primary button icon
   * @type {string}
   */
  export let primaryButtonIcon = ''

  /** Specify the secondary button text */
  export let secondaryButtonText = ''

  /**
   * Specify the secondary button icon
   * @type {string}
   */
  export let secondaryButtonIcon = ''

  /** Set to `true` to use the danger variant */
  export let danger = false
</script>

<svelte:head>
  {#if open}
    <style>
      body {
        overflow-y: hidden;
      }
    </style>
  {/if}
</svelte:head>

<div
  aria-haspopup={open}
  aria-modal="true"
  class={`mh--modal ${paddingTop ? `shift__${space}` : ''}`}
>
  <div
    class="mh--modal--content"
    class:danger
    use:clickOutside
    on:click_outside={() => {
      open = false
      dispatch('clickOutside')
    }}
  >
    <div class="mh--modal--content-header">
      <div class="mh--modal--content-header__heading">
        <Icon name="info" />
        <h3>
          {modalHeading}
        </h3>
      </div>
      <slot />

      <ButtonSet stacked={!passiveModal}>
        {#if !passiveModal}
          <Button
            kind="warning"
            icon={primaryButtonIcon}
            on:click={() => dispatch('firstButtonAction')}
          >
            {primaryButtonText}
          </Button>
          <Button
            kind="primary"
            icon={secondaryButtonIcon}
            on:click={() => {
              open = false
              dispatch('secondButtonAction')
            }}
          >
            {secondaryButtonText}
          </Button>
        {:else}
          <ButtonCircle label="Ok" on:click={() => (open = false)} />
        {/if}
      </ButtonSet>
    </div>
  </div>
</div>
