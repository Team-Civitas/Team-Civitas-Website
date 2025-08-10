<script lang="ts">
  import { onMount } from 'svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import type { ILogo } from '$lib/ILogo';

  let logos: ILogo[] = [];
  let downloads: ILogo[] = [];
  let loading = true;
  let error: string | null = null;

  // Collections considered direct downloads
  const downloadCollections = new Set([
    'overdrive',
    'create-horizons',
    'endurance',
    'create-revolution',
    'create',
    'smp'
  ]);

  // Friendly display names
  function getDisplayName(collection: string) {
    switch (collection) {
      case 'arcanum': return 'Civitas: Arcanum';
      case 're-created': return 'Civitas: Re-Created';
      case 'synergy': return 'Civitas: Synergy';
      case 'team-civitas': return 'Team Civitas';
      case 'team-civitas-classic': return 'Team Civitas Classic';
      case 'team-civitas-legacy': return 'Team Civitas Legacy';
      case 'övrigt': return 'Övrigt';
      case 'overdrive': return 'Civitas: Overdrive';
      case 'create-horizons': return 'Civitas: Create Horizons';
      case 'endurance': return 'Civitas: Endurance';
      case 'create-revolution': return 'Civitas: Create Revolution';
      case 'create': return 'Civitas: Create';
      case 'smp': return 'Civitas: SMP';
      default: return collection;
    }
  }

  onMount(async () => {
    try {
      const res = await fetch('/api/image-counts');
      if (!res.ok) throw new Error('Failed to fetch image counts');
      const data: Record<string, { count: number; firstImage?: string }> = await res.json();

      // For each folder returned from API
      for (const [folder, info] of Object.entries(data)) {
        // folder format: "logotypes/arcanum"
        const parts = folder.split('/');
        if (parts.length !== 2 || parts[0] !== 'logotypes') continue;

        const collection = parts[1];
        const name = getDisplayName(collection);
        const href = downloadCollections.has(collection)
          ? info.firstImage ?? '#' // direct image URL for download collections
          : `/logotyper/${collection}`; // link to folder page for collections

        const logo: ILogo = {
          name,
          src: info.firstImage ?? '',
          alt: name,
          time: downloadCollections.has(collection) ? 'Direktnedladdning' : 'Samling',
          href,
          download: downloadCollections.has(collection)
        };

        if (logo.download) {
          downloads.push(logo);
        } else {
          logos.push(logo);
        }
      }
    } catch (e: any) {
      error = e.message || 'Unknown error';
    } finally {
      loading = false;
    }
  });
</script>

<main>
  <header class="header-content">
    <h1 class="margin-above-title">LOGOTYPER</h1>
    <p class="margin-beneath-description">
      Här finns alla logotyper från hela Civitashistorien samlade, till och med WIP-logotyper samt skrotade logotyper!
    </p>
  </header>

  {#if loading}
    <p>Laddar logotyper...</p>
  {:else if error}
    <p>Fel: {error}</p>
  {:else}
    <h2 class="header-content">Samlingar:</h2>
    <Grid>
      {#each logos as logo}
        <Card {...logo} />
      {/each}
    </Grid>

    <h2 class="header-content">Direktnedladdningar:</h2>
    <Grid>
      {#each downloads as download}
        <Card {...download} />
      {/each}
    </Grid>
  {/if}
</main>
