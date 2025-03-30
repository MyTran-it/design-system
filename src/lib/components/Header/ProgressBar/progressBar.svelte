<script>
  /**
   * Specify the current step
   * @type {number}
   */
  export let value = undefined

  /** Specify the number of step */
  export let max = 100
</script>

<div class="mh--progress--bar">
  <div class="mh--progress--bar__track">
    <div
      class="mh--progress--bar__track-loading"
      style:width={(value ? (value / max) * 100 : 0) + '%'}
    />
  </div>
</div>
