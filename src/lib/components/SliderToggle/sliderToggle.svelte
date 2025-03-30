<script>
  /**
   *  Specify the label
   *  @type {string}
   */
  export let label = ''

  /**
   *  Specify the first value
   *  @type {string}
   */
  export let value = '0.5'

  /**
   *  Specify the label of value A
   *  @type {string}
   */
  export let labelA = ''

  /**
   *  Specify the label of value B
   *  @type {string}
   */
  export let labelB = ''

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

</script>

<div class="mh--slider--toggle">
  <label for={id}>{label}</label>
  <input
    type="range"
    bind:value
    min="0"
    max="1"
    step="0.5"
    class="mh--slider--toggle-switch"
    aria-valuenow={value}
    {id}
  />
  <div class="mh--slider--toggle-text">
    <span aria-selected={value == '0'}>{labelA}</span>
    <span aria-selected={value == '1'}>{labelB}</span>
  </div>
</div>
