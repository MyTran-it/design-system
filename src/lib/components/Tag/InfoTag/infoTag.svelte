<script>
  import Icon from '../../Icon/icon.svelte'

  /**
   *  Specify the kind of info tag
   * @type {"tertiary" | "tertiary-light" | "warning" | "neutral" | "disabled" | "error" }
   */
  export let kind = 'tertiary'

  /**
   * info tag contents
   * @type {string}
   */
  export let label = ''

  /**
   * Icon name
   * @type {string}
   */
  export let rightIcon = ''

  /**
   * Icon name
   * @type {string}
   */
  export let leftIcon = ''

  /**
   * Set size of infoTag
   * @type {'sm' | 'xl'}
   */
  export let size = 'sm'
</script>

<div
  class={[
    'mh--info--tag',
    `mh--info--tag-${kind}`,
    (rightIcon || leftIcon) && 'hasIcon',
    size != 'sm' && size,
  ]
    .filter(Boolean)
    .join(' ')}
>
  {#if leftIcon}
    <Icon name={leftIcon} {size} />
  {/if}
  <span>
    {label}
  </span>
  {#if rightIcon}
    <Icon name={rightIcon} {size} />
  {/if}
</div>
