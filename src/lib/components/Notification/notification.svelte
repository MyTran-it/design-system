<script>
  import Icon from '../Icon/icon.svelte'
  import { createEventDispatcher } from 'svelte'
  import { clickOutside } from '../../utils/clickOutside'

  const dispatch = createEventDispatcher()

  /**
   * Specify the kind of notification
   * @type {"success" | "warning"}
   */
  export let kind = 'success'

  /** Set the timeout duration (ms) to hide the notification after opening it */
  export let timeout = 0

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  /** Set to `true` to hide the close button */
  export let hideCloseButton = false

  /** Set to `true` to enable close by click outside the notification */
  export let closeByClickOutside = false

  /** Set to `true` to open the notification */
  export let open = true

  let timeoutId = undefined

  function close(closeFromTimeout) {
    const shouldContinue = dispatch(
      'close',
      { timeout: closeFromTimeout === true },
      { cancelable: true }
    )
    if (shouldContinue) {
      if (timeout) clearTimeout(timeoutId)
      open = false
    }
  }

  $: if (open && timeout) {
    timeoutId = setTimeout(() => close(true), timeout)
  }

  $: notificationProps = {
    ...$$restProps,
    class: [
      'mh--tag--notification',
      `mh--tag--notification__${kind}`,
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' '),
  }

  $: icon = kind == 'warning' ? 'warning-filled' : 'valid'
</script>

<div
  {id}
  {...notificationProps}
  aria-hidden={!open}
  use:clickOutside
  on:click_outside={() => {
    if (!closeByClickOutside) return
    open = false
  }}
>
  <Icon name={icon} size="lg" />
  <slot />
  {#if !hideCloseButton}
    <button style="margin-left: auto" on:click={close}>
      <Icon name="close" size="lg" />
    </button>
  {/if}
</div>
