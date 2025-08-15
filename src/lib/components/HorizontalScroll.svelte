<script>
    let { children } = $props();
</script>

<div class="horizontalScroll">
    {@render children()}
</div>

<style>
    .horizontalScroll {
        display: flex;
        overflow-x: auto;
    }
</style>