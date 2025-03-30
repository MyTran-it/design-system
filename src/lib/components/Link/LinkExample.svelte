<script>
  import Link from './link.svelte'

  /** Set to `true` to disable the link */
  export let disabled = false

  /**
   * Specify the href value
   * @type {string}
   */
  export let href = undefined

  export let newTab = false

  export let normalStyle = false
</script>

<p>
  This is <Link inline {disabled} {newTab} {normalStyle} {href}>a Link</Link>.
</p>
