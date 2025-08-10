<script lang="ts">
    import civitaIcon from '$img/logotypes/team-civitas-classic/Team Civitas 2023-2025.png';
    import civitasSMPIcon from '$img/logotypes/smp/civitas_smp.png';
    import Card from '$lib/Card.svelte';
    import Grid from '$lib/Grid.svelte';
</script>

<main>
    <header class="header-content">
        <h1 class="margin-above-title">SERVRAR</h1>
        <p class="margin-beneath-description">Här finns flera olika Civitas-servrar listade bortom modpack-serien!</p>
    </header>

    <Grid>
        <Card
            name="Civitascraft"
            src={civitaIcon}
            alt="Civitascraft"
            href="/servrar/civitascraft"
        />
        <Card
            name="Civitas SMP"
            src={civitasSMPIcon}
            alt="Civitas SMP"
            href="/servrar/civitas-smp"
        />
        <Card
            name="Pre-Civitas"
            src={civitaIcon}
            alt="Pre-Civitas"
            href="/servrar/pre-civitas"
        />
    </Grid>
</main>