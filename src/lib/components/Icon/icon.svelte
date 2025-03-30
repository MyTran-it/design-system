<script>
  import iconPaths from '../../icons/mh-icons'

  /**
   * Icon name
   * @type {string} Icon name
   */
  export let name = ''

  /**
   * Specify the size of icon
   * @type {"sm" | "md" | "lg" | "xl"}
   */
  export let size = 'md'

  /**
   * Fill color Icon
   * @type {string}
   */
  export let fill = 'currentColor'


  export let style = ''

  /**
   * Get Icon path and viewBox
   * @typedef {{path: string, viewBox: string}} IconDeff
   *
   * @method   getSvgIcon
   * @param   {string} name name of the icon
   * @returns {IconDeff}
   */
  const getSvgIcon = (name) => {
    const iconDeff = iconPaths[name]

    if (!iconDeff) {
      console.warn(`this ${name} icon does not exists`)

      return {
        path: '',
        viewBox: '',
      }
    }

    const icon = {
      path: iconDeff.path,
      viewBox: iconDeff.viewBox,
    }

    return icon
  }

  /**
   * @type {Object} predefined icon's size
   */
  const iconSizes = {
    sm: {
      height: 16,
      width: 16,
    },
    md: {
      height: 20,
      width: 20,
    },
    lg: {
      height: 24,
      width: 24,
    },
    xl: {
      height: 32,
      width: 32,
    },
  }

  $: height = iconSizes[size].height

  $: width = iconSizes[size].width
</script>

<svg
  style='flex-shrink: 0; {style}'
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox={getSvgIcon(name).viewBox}
  {fill}
>
  {@html getSvgIcon(name).path}
</svg>
