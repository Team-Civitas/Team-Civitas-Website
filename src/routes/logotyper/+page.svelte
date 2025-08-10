<script lang="ts">
    import Card from '$lib/Card.svelte';
    import Grid from '$lib/Grid.svelte';
    import type { ILogo } from '$lib/ILogo';

    let logos = $state<ILogo[]>([]);
    let downloads = $state<ILogo[]>([]);

    const paths = import.meta.glob('/src/resources/img/logotypes/*/*.{png,jpg,jpeg,webp,svg}', {
        eager: true,
        as: 'url'
    });

    for (const path in paths) {
        let pathParts = path.split('/');
        let collection = pathParts.at(-2);
        let filename = pathParts.at(-1);

        if (filename && (filename.includes('logotype') || filename.includes('logo_') || filename.includes('civitas_') || filename.includes('Team Civitas'))) {
            let name = '';
            let href = `/logotyper/${collection}`;
            let download = false;
            let time = 'Samling';

            if (collection === 'arcanum') {
                name = 'Civitas: Arcanum';
            } else if (collection === 're-created') {
                name = 'Civitas: Re-Created';
            } else if (collection === 'synergy') {
                name = 'Civitas: Synergy';
            } else if (collection === 'team-civitas') {
                name = 'Team Civitas';
            } else if (collection === 'team-civitas-classic') {
                name = 'Team Civitas Classic';
            } else if (collection === 'team-civitas-legacy') {
                name = 'Team Civitas Legacy';
            } else if (collection === 'övrigt') {
                name = 'Övrigt';
            } else if (collection === 'overdrive') {
                name = 'Civitas: Overdrive';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            } else if (collection === 'create-horizons') {
                name = 'Civitas: Create Horizons';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            } else if (collection === 'endurance') {
                name = 'Civitas: Endurance';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            } else if (collection === 'create-revolution') {
                name = 'Civitas: Create Revolution';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            } else if (collection === 'create') {
                name = 'Civitas: Create';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            } else if (collection === 'smp') {
                name = 'Civitas: SMP';
                href = paths[path];
                download = true;
                time = 'Direktnedladdning';
            }

            if (download) {
                downloads.push({ name: name, src: paths[path], alt: name, time: time, href: href, download: true });
            } else {
                logos.push({ name: name, src: paths[path], alt: name, time: time, href: href });
            }
        }
    }
</script>

<main>
    <header class="header-content">
        <h1 class="margin-above-title">LOGOTYPER</h1>
        <p class="margin-beneath-description">
            Här finns alla logotyper från hela Civitashistorien samlade, till och med WIP-logotyper samt skrotade logotyper!
        </p>
    </header>

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
</main>