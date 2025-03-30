<script>
  import { goto } from '$app/navigation'
  import BubbleDetail from '$lib/components/BubbleLineProgress/bubbleDetail.svelte'
  import ButtonCard from '$lib/components/Button/CardButton/buttonCard.svelte'
  import ButtonCircle from '$lib/components/Button/CircleButton/buttonCircle.svelte'
  import ChronoTimer from '$lib/components/ChronoTimer/chronoTimer.svelte'
  import Footer from '$lib/components/Footer/footer.svelte'
  import FooterItem from '$lib/components/Footer/footerItem.svelte'
  import TextArea from '$lib/components/Input/TextArea/textArea.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import Layout from './+layout.svelte'

  let value = ''

  $: console.log(value)
</script>

<Layout>
  <ButtonCircle
    icon="arrow-left"
    size="sm"
    kind="secondary"
    float
    on:click={() => goto('/ivd/detailIvd')}
  />
  <BubbleDetail title="Analyse" state="done">
    <ChronoTimer label="En cour..." kind="active" timer="01:46" noMargin />
    <p class="text-light-primary">le 13/05/23 à 15:02 par Estelle Surville</p>
    <br />
    <div class="flex justify-between">
      <div class="flex column gap__1">
        <p>Marque: XXXXXX</p>
        <p>Modèle : XXXXXXX</p>
        <p>Temps d'incubation : 5-20 minutes</p>
        <p>N° de lot : 020938039483</p>
        <p>Date de péremption : août 2036</p>
        <p>REF : XXXXX</p>
      </div>
    </div>

    <TextArea
      label="Commentaire"
      bind:value
      placeholder="Commentaire..."
      helperText="Figurera sur le rapport du patient"
      invalidText="erreur"
      maxCount="100"
    />
  </BubbleDetail>

  <Footer>
    <FooterItem icon="qrcode" />
  </Footer>
</Layout>
