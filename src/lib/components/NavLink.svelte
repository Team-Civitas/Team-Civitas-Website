<script>
	import { page } from '$app/state';

	let { href, name = href } = $props();

	name = name.startsWith('/') ? name.slice(1) : name;
	name = name.replace(/\b\w/g, (char) => char.toUpperCase());
	name = name.replace('-', ' ');

    if (name == "") {
        name = "Hem"
    }

</script>

<a {href} class:active={page.url.pathname == { href }}>{name}</a>

<style>
	a {
		color: white;
		text-decoration: none;

		padding: 2px;
		margin: 0 10px;

		transition: color 0.5s ease;
	}

	a:hover,
	a.active {
		color: aqua;
	}
</style>
