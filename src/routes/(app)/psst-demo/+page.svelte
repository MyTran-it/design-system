<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/components/Button/button.svelte'
  import HeaderSection from '$lib/components/Header/headerSection.svelte'
  import MainHeader from '$lib/components/Header/mainHeader.svelte'
</script>

<div
  class="flex column"
  style="background: #06332E; color: white; flex-grow: 1; height: 100%;"
>
  <HeaderSection
    title="Test"
    subTitle="Retrouvez vos résultats d'analyses"
  />
  <MainHeader message="Bienvenue !" />

  <div class="flex justify-center autoMargin">
    <svg
      width="191"
      height="190"
      viewBox="0 0 191 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_15081)">
        <mask
          id="mask0_1_15081"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="191"
          height="190"
        >
          <path
            d="M190.879 0.0634766H0.00634766V189.937H190.879V0.0634766Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_15081)">
          <path
            d="M95.4427 189.937C148.151 189.937 190.879 147.432 190.879 95.0002C190.879 42.5681 148.151 0.0634766 95.4427 0.0634766C42.7347 0.0634766 0.00634766 42.5681 0.00634766 95.0002C0.00634766 147.432 42.7347 189.937 95.4427 189.937Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100.197 162.794C80.4085 162.794 64.0713 146.859 64.0713 127.174C64.0713 124.949 64.2338 123.489 64.9792 120.356L123.042 76.8345C127.838 92.735 132.381 108.274 134.83 117.988C135.072 118.948 135.213 119.526 135.261 119.721C136.138 123.302 136.322 124.804 136.322 127.174C136.322 146.859 119.985 162.794 100.197 162.794Z"
            fill="#06332E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M123.042 76.8337C127.281 91.0099 64.9727 120.356 64.9727 120.356C65.0213 120.152 65.0723 119.941 65.126 119.722C65.1737 119.527 65.315 118.948 65.557 117.988C71.1259 95.8935 87.5029 43.6568 93.1442 25.5951C94.3183 21.8362 96.2332 19.0996 100.19 19.0996C104.147 19.0996 106.062 21.8362 107.236 25.5951C110.397 35.7161 116.977 56.5537 123.042 76.8337Z"
            fill="#A6C7C4"
          />
          <path
            d="M64.0713 52.9418C72.1341 52.9418 78.6704 46.4398 78.6704 38.4191C78.6704 30.3985 72.1341 23.8965 64.0713 23.8965C56.0084 23.8965 49.4722 30.3985 49.4722 38.4191C49.4722 46.4398 56.0084 52.9418 64.0713 52.9418Z"
            fill="#6F6994"
          />
          <path
            d="M125.164 167.103C134.139 167.103 141.414 159.866 141.414 150.938C141.414 142.011 134.139 134.773 125.164 134.773C116.19 134.773 108.915 142.011 108.915 150.938C108.915 159.866 116.19 167.103 125.164 167.103Z"
            fill="#E2AC36"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_15081">
          <rect width="191" height="190" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>

  <div class="autoMargin">
    <Button
      kind="warning"
      label="Connexion ou inscription"
      on:click={() => goto('/psst-demo/createPatient')}
    />
  </div>
</div>
