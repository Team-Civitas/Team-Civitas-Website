<script>
    import { logotype } from "$lib/IconManager";
</script>

<section class="background-image">
    <img src={logotype} alt="logo" />
</section>

<style>
    .background-image {
        background-image: url('$lib/assets/banner.jpg');
    }

    .background-image img {
        display: block;
        width: 500px;
    }
</style>
