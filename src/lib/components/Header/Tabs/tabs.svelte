<script>
  import {
    afterUpdate,
    createEventDispatcher,
    onMount,
    setContext,
  } from 'svelte'
  import { writable, derived } from 'svelte/store'

  const dispatch = createEventDispatcher()

  /** Obtain a reference to the HTML element */
  export let refTabList = null

  /** Set the selected index of the selected item */
  export let selected = 0

  const selectedTab = writable(undefined)
  const tabs = writable([])
  const tabsById = derived(tabs, (_) =>
    _.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: currentValue,
      }),
      {}
    )
  )

  let currentIndex = selected
  let prevIndex = -1

  setContext('Tabs', {
    tabs,
    selectedTab,
    add: (data) => {
      tabs.update((_) => [..._, { ...data, index: _.length }])
    },
    update: (id) => {
      currentIndex = $tabsById[id].index
    },
  })

  afterUpdate(() => {
    selected = currentIndex

    if (prevIndex > -1 && prevIndex !== currentIndex) {
      dispatch('change', currentIndex)
    }

    prevIndex = currentIndex
  })

  $: currentIndex = selected
  $: currentTab = $tabs[currentIndex] || undefined
  $: {
    currentTab && selectedTab.set(currentTab.id)
  }

  onMount(() => {
    let index = currentIndex
    let disabled = $tabs[currentIndex].disabled
    while (disabled && index >= 0) {
      index = index + 1

      if (index >= $tabs.length) {
        index = -1
        selectedTab.set(undefined)
      }

      disabled = index >= 0 && $tabs[index].disabled
    }
    currentIndex = index
  })
</script>

<div bind:this={refTabList} class="mh--header--tabs">
  <slot />
</div>
