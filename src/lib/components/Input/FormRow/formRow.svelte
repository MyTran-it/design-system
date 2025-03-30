<script>
  /** Specify the label text
   * @type {string}
   */
  export let label = ''

  /** Specify the sub label text */
  export let sublabel = ''

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /** Set to `true` to visually hide the margin top/bottom of row */
  export let noMargin = false

  export let withButton = false

  /**
   * @type {Number} number of columns in a row
   */
  export let columns = 1

  /**
   * @type {number} large (fr) of first column (grid-template-columns)
   */
  export let col1 = 1

  /**
   * @type {number} large (fr) of second column (grid-template-columns)
   */
  export let col2 = 1

  /**
   * @type {number} large (fr) of third column (grid-template-columns)
   */
  export let col3 = 1

  /** Set to `true` to mark the form row as required (not contain logique, juste to remind user it is required)*/
  export let required = false

  let style = ''

  $: if (!withButton) {
    if (columns == 2) style = `grid-template-columns: ${col1}fr ${col2}fr;`
    else if (columns == 3)
      style = `grid-template-columns: ${col1}fr ${col2}fr ${col3}fr;`
  }
</script>

<div class="mh--form--item" class:noMargin>
  {#if label}
    <label for={id} class="mh--form--item--label">
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
  <div class="mh--form--row" class:input--action={withButton} {style}>
    <slot />
  </div>
</div>
