<script>
  import Icon from '../Icon/icon.svelte'

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /**
   * Set title of summary
   * @type {string}
   */
  export let title = ''

  /**
   * Set subtitle1 of summary
   * @type {string}
   */
  export let subTitle1 = ''

  /**
   * Set subtitle2 of summary
   * @type {string}
   */
  export let subTitle2 = ''

  /**
   * Set subtitle3 of summary
   * @type {string}
   */
  export let subTitle3 = ''

  /** Set to `true` if it urgent */
  export let urgent = false

  /** Set to `true` to visually hide the margin of summary */
  export let noMargin = false
</script>

<div class="mh--summary" class:noMargin>
  <div class="mh--summary--info">
    <div class="mh--summary--info-title" class:urgent>
      {#if urgent}
        <div class="mh--summary--info-title__urgent">
          <Icon name="flag-filled" />
        </div>
      {/if}
      <slot name="title">
        <span class="flex font-semibold gap__1">
          {#if icon}
            <Icon name={icon} />
          {/if}
          {title}
        </span>
      </slot>
    </div>
    {#if subTitle1}
      <p class="text-light-primary">
        {subTitle1}
      </p>
    {/if}
    {#if subTitle2}
      <p class="text-light-primary">
        {subTitle2}
      </p>
    {/if}
    {#if subTitle3}
      <p class="text-light-primary">
        {subTitle3}
      </p>
    {/if}
  </div>
</div>

<style>
</style>
