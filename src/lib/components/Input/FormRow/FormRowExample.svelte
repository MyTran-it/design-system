<script>
  import Button from '$lib/components/Button/button.svelte'
  import FormRow from './formRow.svelte'
  import FormRowDecoration from './FormRowDecoration.svelte'

  /** Specify the label text
   * @type {string}
   */
  export let label = ''

  /** Specify the sublabel text
   * @type {string}
   */
  export let sublabel = ''

  /** Number of columns in a row
   * @type {Number}
   */
  export let columns = 1

  /** Large (fr) of first column (grid-template-columns)
   * @type {number}
   */
  export let col1 = 1

  /** Large (fr) of second column (grid-template-columns)
   * @type {number}
   */
  export let col2 = 1

  /** Large (fr) of third column (grid-template-columns)
   * @type {number}
   */
  export let col3 = 1

  export let withButton = false
</script>

{#if withButton}
  <FormRow {label} {sublabel} withButton>
    <FormRowDecoration>
      <p>
        You can use FormRow with 2 buttons too but remember to remove prop
        'WithButton',
      </p>
      <p>
        All button inside FormRow will change a little bit of style (like
        border-radius)
      </p>
    </FormRowDecoration>
    <Button icon="trash" />
  </FormRow>
{:else if columns == 1}
  <FormRow {label} {sublabel} {columns}>
    <FormRowDecoration><p>This is column 1</p></FormRowDecoration>
    <FormRowDecoration>
      <p>This is column 2</p>
    </FormRowDecoration>
  </FormRow>
{:else if columns == 2}
  <FormRow {label} {sublabel} {columns} {col1} {col2}>
    <FormRowDecoration><p>This is column 1</p></FormRowDecoration>
    <FormRowDecoration>
      <p>This is column 2</p>
    </FormRowDecoration>
  </FormRow>
{:else if columns == 3}
  <FormRow {label} {sublabel} {columns} {col1} {col2} {col3}>
    <FormRowDecoration><p>This is column 1</p></FormRowDecoration>
    <FormRowDecoration>
      <p>This is column 2</p>
    </FormRowDecoration>
    <FormRowDecoration>
      <p>This is column 3</p>
    </FormRowDecoration>
  </FormRow>
{/if}
