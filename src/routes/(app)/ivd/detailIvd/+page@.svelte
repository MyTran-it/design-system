<script>
  import { goto } from '$app/navigation'
  import BubblePoint from '$lib/components/BubbleLineProgress/bubblePoint.svelte'
  import BubbleProgress from '$lib/components/BubbleLineProgress/bubbleProgress.svelte'
  import ButtonCard from '$lib/components/Button/CardButton/buttonCard.svelte'
  import Button from '$lib/components/Button/button.svelte'
  import ChronoTimer from '$lib/components/ChronoTimer/chronoTimer.svelte'
  import Footer from '$lib/components/Footer/footer.svelte'
  import FooterItem from '$lib/components/Footer/footerItem.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import Layout from './+layout.svelte'
</script>

<Layout>
  <BubbleProgress>
    <BubblePoint title="Questionnaire pré-analytique" state="done">
      <Button kind="primary-outline" label="Voir" icon="view" />
    </BubblePoint>

    <BubblePoint expandable title="Echantillon" state="done">
      <div slot="above">
        <p class="text-light-primary">
          le 13/05/23 à 15:02 par Estelle Surville
        </p>
      </div>
      <div slot="below">
        <p>Prélèvement: Nasopharyngé</p>
        <p>Contenant: Tube d'extraction</p>
        <Button label="hihi" />
      </div>
    </BubblePoint>

    <BubblePoint title="Annalyse" state="done" expandable>
      <div slot="above">
        <ChronoTimer label="Fini" kind="active" timer="01:46" noMargin />
        <p class="text-light-primary">
          le 13/05/23 à 15:02 par Estelle Surville
        </p>
      </div>
      <div slot="below">
        <Tile style="noColor" noPadding noMargin>
          <div class="flex justify-between">
            <div class="flex column justify-around">
              <p>Marque: XXXXXX</p>
              <p>Modèle : XXXXXXX</p>
              <p>Temps d’incubation : 5-20 minutes</p>
            </div>
            <ButtonCard
              size="thinner"
              inner
              icon="next"
              on:click={() => goto('detailIvd/detailStep')}
            />
          </div>
        </Tile>
      </div>
    </BubblePoint>
    <BubblePoint title="Interprétation">
      <Button kind="primary" label="Interprétation" icon="view" />
    </BubblePoint>
    <BubblePoint state="disable" title="Validation" />
    <BubblePoint state="disable" title="Validation" />
  </BubbleProgress>
  <Button
    label="Go to detail of Annalyse step"
    on:click={() => goto('detailIvd/detailStep')}
  />

  <Footer>
    <FooterItem icon="test" label="Tests" href="/" />
    <FooterItem icon="qrcode" label="Scanner" />
    <FooterItem icon="multi-user" label="Patient(es)" />
  </Footer>
</Layout>
