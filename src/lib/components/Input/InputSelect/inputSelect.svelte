<script>
  import Icon from '../../Icon/icon.svelte'
  import { clickOutside } from '../../../utils/clickOutside'

  import { createEventDispatcher } from 'svelte'
  import ListBox from '$lib/components/ListBox/listBox.svelte'

  const dispatch = createEventDispatcher()

  /** Specify the selected inputSelect value */
  export let value = ''

  /** Specify the label text
   * @type {string}
   */
  export let label = ''

  /** Specify the sub label text
   * @type {string}
   */
  export let sublabel = ''

  /** Set to `true` to visually hide the label text */
  export let hideLabel = false

  /** Set to `true` to visually hide the margin top/bottom of input */
  export let noMargin = false

  /**
   * Set to `true` if an item should be filtered given the current inputSelect value
   */
  export let shouldFilterItem = false

  /** Specify the placeholder text */
  export let placeholder = '_______'

  /** Specify the helper text
   * @type {string}
   */
  export let helperText = ''

  /** Set to `true` to mark the field as required */
  export let required = false

  /**
   * Specify a name attribute for the input
   * @type {string}
   */
  export let name = undefined

  /** Set to `true` to indicate an invalid state */
  export let invalid = false

  /** Specify the invalid state text
   * @type {string}
   */
  export let invalidText = ''

  /** Set to `true` to disable the inputSelect */
  export let disabled = false

  /** Set to `true` to use the read-only variant */
  export let readonly = false

  /** Set to `true` to open the inputSelect menu dropdown */
  export let expanded = false

  export let withLine = false

  /**
   * Set the inputSelect items
   * @type {Array}
   */
  export let items = []

  /**
   * Set the selected item by value id
   * @type {InputSelectItemId}
   */
  export let selectedId = null

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  $: inputProps = {
    id,
    name,
    placeholder,
    type: 'text',
    disabled,
  }

  $: itemsFiltered =
    shouldFilterItem && value
      ? items.filter(
          (e) =>
            String(e.text).toLowerCase().indexOf(String(value).toLowerCase()) >
            -1
        )
      : items

  $: if (selectedId != undefined) {
    expanded = false
  }

  $: value = readonly ? items.find((e) => e.id === selectedId)?.text : value

  $: helperId = `helper-${id}`
  $: errorId = `error-${id}`
</script>

<div
  class="mh--form--item"
  class:noMargin
  use:clickOutside
  on:click_outside={() => (expanded = false)}
>
  {#if !hideLabel && label}
    <label
      for={id}
      class="mh--form--item--label"
      class:mh--form--item--label__disabled={disabled}
    >
      {label}
      {#if required}
        <span style="color: var(--clr-alert-300)"> * </span>
      {/if}
      <br />
      {#if sublabel}
        <span class="mh--form--item--label-sublabel">
          {sublabel}
        </span>
      {/if}
    </label>
  {/if}

  <div class="mh--input--field">
    <input
      role="textbox"
      class="mh--input mh--input__has-icon"
      class:mh--input__invalid={invalid}
      aria-invalid={invalid}
      aria-describedby={invalid ? errorId : helperId}
      {...inputProps}
      bind:value
      {id}
      {readonly}
      {required}
      on:click={() => {
        if (readonly) expanded = !expanded
      }}
      on:change
      on:input
      on:keydown
      on:keyup={() => (expanded = true)}
      on:focus
      on:blur
      on:paste
    />
    <span
      class:mh--input--icon={true}
      class:mh--input--icon__disabled={disabled}
    >
      {#if (selectedId || value) && !readonly}
        <button
          type="button"
          on:click={() => {
            if (!disabled) {
              selectedId = undefined
              value = ''
              expanded = true
            }
          }}
        >
          <Icon name="close" size="sm" />
        </button>
      {/if}
      <button
        type="button"
        on:click={() => {
          if (!disabled) {
            expanded = !expanded
          }
        }}
      >
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'} />
      </button>
    </span>
  </div>

  <ListBox
    class="mh--input--select--dropdown"
    aria-disabled={disabled}
    {withLine}
    bind:expanded
    bind:items={itemsFiltered}
    bind:selectedItem={selectedId}
    on:select={(e) => {
      selectedId = e.detail.item.id
      value = e.detail.item.text
      expanded = false
      dispatch('select', { item: e.detail.item })
    }}
  />

  {#if helperText || invalidText}
    <div
      id={invalid ? errorId : helperId}
      class:mh--form--item--helper-text={true}
      class:mh--form--item--helper-text__invalid={invalid && !disabled}
      class:mh--form--item--helper-text__disabled={disabled}
    >
      {#if invalid}
        {invalidText}
      {:else if helperText}
        {helperText}
      {/if}
    </div>
  {/if}
</div>
