<script lang="ts">
  let { children, className }: { children: any; className?: string } = $props();
</script>

<div class="grid ${className}">
  {@render children()}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  @media (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 20px;
    }
  }
</style>