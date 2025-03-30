<script>
  import Icon from '../Icon/icon.svelte'

  /** Specify the label text */
  export let label = ''

  /** Specify the value of timer */
  export let timer = ''

  /**
   * Specify the size of Chrono timer
   * @type {'md' | 'lg'}
   */
  export let size = 'md'

  /**
   * @type { "start" | "active" | "expired" | "outrange"}
   */
  export let state = 'start'

  /**
   * Set to `true` for no margin
   */
  export let noMargin = false
</script>

<div class={`mh--chrono--timer ${size}`} class:noMargin>
  <div class="mh--chrono--timer-label">
    <slot>
      {label}
    </slot>
  </div>
  <div class={`mh--chrono--timer-counter ${state}`}>
    <Icon name="timer" />
    {timer}
  </div>
</div>
