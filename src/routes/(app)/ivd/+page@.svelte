<script>
  import { goto } from '$app/navigation'
  import ButtonCard from '$lib/components/Button/CardButton/buttonCard.svelte'
  import Button from '$lib/components/Button/button.svelte'
  import Footer from '$lib/components/Footer/footer.svelte'
  import FooterItem from '$lib/components/Footer/footerItem.svelte'
  import Icon from '$lib/components/Icon/icon.svelte'
  import Marginer from '$lib/components/Marginer/marginer.svelte'
  import Section from '$lib/components/Section/section.svelte'
  import Summary from '$lib/components/Summary/summary.svelte'
  import InfoTag from '$lib/components/Tag/InfoTag/infoTag.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import Layout from './+layout.svelte'

  let open = false
</script>

<Layout>
  <Tile style="disabled" noPadding>
    <div class="flex justify-between">
      <Summary
        icon="folder-detail"
        title="Créé le 21/08/2022"
        subTitle1="Par: Marie-Laure Vaillé"
      />
      <ButtonCard icon="hourglass" size="lg" disabled />
    </div>
  </Tile>

  <Section bind:expanded={open}>
    <div slot="title">
      {#if open}
        <Summary
          icon="folder-detail"
          title="Créé le 21/08/2022"
          subTitle1="Par: Marie-Laure Vaillé"
        />
        <Summary
          urgent
          icon="cassette"
          title="Test rapide antigénique Covid-19"
          subTitle1="PANBIO, Abbott Diagnostics"
          subTitle2="N° de lot: 12555FE6700"
          subTitle3="Date de péremption: Juillet 2023"
        />
        <Summary
          icon="drop"
          title="Nasopharyngé"
          subTitle1="Contenant: Tube d'extraction"
        />
        <Summary
          icon="timer"
          title="Incubation terminée"
          subTitle1="Prêt pour interprétation et validation"
        />
        <Summary
          icon="chart"
          title="Test rapide antigénique Covid-19"
          subTitle1="PANBIO, Abbott Diagnostics"
          subTitle2="Cassette N° F8 - 2F - E4 - 70"
        />
      {:else}
        <h3>Test : F8-2F-E4-70</h3>
        <Marginer />
        <InfoTag
          rightIcon="timer"
          kind="tertiary-light"
          label="Incubation 01:46"
        />
      {/if}
    </div>
  </Section>

  <div>
    <Tile style="noColor">
      <p>
        <span class="font-semibold">Summary</span> content a slot named title, so
        it can be used in many case
      </p>
      <br />
      <p>For example below:</p>
    </Tile>
    <Tile style="noColor" noPadding>
      <div class="flex justify-between">
        <Summary
          noMargin
          subTitle1="Pharmacie des Champs aux Melles, Paris"
          subTitle2="Test PCR Covid-19"
          urgent
        >
          <div
            slot="title"
            class="flex items-center"
            style="gap: 1rem; color: var(--clr-interactive-tertiary)"
          >
            <span class="font-semibold"> Test PCR Covid-19 </span>
          </div>
        </Summary>
        <span style="color: #5A9892;">
          <Icon name="valid" />
        </span>
      </div>
      <br />
      <div style="height: 1px; background: #BEBEBE;" />
    </Tile>
    <Tile style="noColor" noPadding>
      <div class="flex justify-between">
        <Summary
          noMargin
          subTitle1="<span class='font-semibold'>Pharmacie des Champs aux Melles, Paris</span>"
          subTitle2="<span style='color: var(--clr-interactive-tertiary)'>Test PCR Covid-19</span>"
        >
          <div
            slot="title"
            class="flex items-center"
            style="gap: 1rem; color: #5A9892;"
          >
            <Icon name="folder-detail" />
            <span class="font-semibold"> Test PCR Covid-19 </span>
          </div>
        </Summary>
        <span style="color: #5A9892;">
          <Icon name="valid" />
        </span>
      </div>
      <br />
      <div style="height: 1px; background: #BEBEBE;" />
    </Tile>

    <Tile noPadding>
      <Summary
        icon="folder-detail"
        title="Créé le 21/08/2022"
        subTitle1="Par: Marie-Laure Vaillé"
      />
      <Summary
        urgent
        icon="cassette"
        title="Test rapide antigénique Covid-19"
        subTitle1="PANBIO, Abbott Diagnostics"
        subTitle2="N° de lot: 12555FE6700"
        subTitle3="Date de péremption: Juillet 2023"
      />
      <Summary
        icon="drop"
        title="Nasopharyngé"
        subTitle1="Contenant: Tube d'extraction"
      />
      <Summary
        icon="timer"
        title="Incubation terminée"
        subTitle1="Prêt pour interprétation et validation"
      />
      <Summary
        icon="chart"
        title="Test rapide antigénique Covid-19"
        subTitle1="PANBIO, Abbott Diagnostics"
        subTitle2="Cassette N° F8 - 2F - E4 - 70"
      />
    </Tile>

    <Button
      label="Go to Detail of IVD"
      on:click={() => goto('ivd/detailIvd')}
    />

    <div style="width: 30px; height: 30px; background: blue;" />

    <Footer>
      <FooterItem disabled icon="test" href="/" />
      <FooterItem on:click={() => alert('Scanner')} icon="qrcode" />
      <FooterItem icon="multi-user" />
    </Footer>
  </div>
</Layout>
