<script>
  import TabItem from './tabItem.svelte'

  import Tabs from './tabs.svelte'

  let selectedTab
</script>

<Tabs
  bind:selected={selectedTab}
  on:change={(e) => {
    console.log('currentTab', e.detail)
  }}
>
  <TabItem>Button</TabItem>
  <TabItem>Form</TabItem>
  <TabItem>Header</TabItem>
</Tabs>
