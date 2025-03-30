<script>
  import Icon from '../Icon/icon.svelte'
  import { clickOutside } from '../../utils/clickOutside'

  /** Set to `true` to expand the section */
  export let expanded = false

  /**
   * Specify the label of section
   * @type {string}
   */
  export let label = ''

  /**
   * Specify the text info of section
   * @type {string}
   */
  export let textInfo = ''

  /** Set to `true` to disable the section */
  export let disabled = false
</script>

<div
  use:clickOutside
  on:click_outside={() => (expanded = false)}
  class="mh--tile--expandable"
  aria-expanded={expanded}
>
  <button
    type="button"
    class="mh--tile--expandable--title"
    on:click={() => !disabled && (expanded = !expanded)}
    {disabled}
  >
    <div class="mh--tile--expandable--title-content">
      <slot name="title">
        <span class="mh--tile--expandable--title-content__label">
          {label}
        </span>
        <span class="mh--tile--expandable--title-content__text-info">
          {textInfo}
        </span>
      </slot>
    </div>
    <span class="mh--tile--expandable--title-icon" aria-expanded={expanded}>
      <Icon name="chevron-down" />
    </span>
  </button>
  <div class="mh--tile--expandable--content" aria-expanded={expanded}>
    <slot name="content" />
  </div>
</div>
