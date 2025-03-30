<script>
  import ButtonAnimation from '$lib/components/Button/AnimationButton/buttonAnimation.svelte'

  export let type
  export let clickLabel
  export let loadingLabel
  export let doneLabel
  export let isLoading = false
  export let isDone = false

  let callApi = () => {
    isLoading = true
    isDone = false
    setTimeout(() => {
      isLoading = false
      isDone = true
    }, 2000)
  }
</script>

<ButtonAnimation
  bind:clickLabel
  bind:loadingLabel
  bind:doneLabel
  bind:isLoading
  bind:isDone
  on:loading={callApi}
  bind:type
/>
