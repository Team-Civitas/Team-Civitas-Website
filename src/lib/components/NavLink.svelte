<script>
	import { page } from '$app/state';
	import { toDecode } from '$lib/stringFuncs';

	let { href, name = href } = $props();

	name = toDecode(name)

    if (name == "") {
        name = "Hem"
    }

</script>

<a {href} class="{page.url.pathname === href ? 'active' : ''} underlined">{name}</a>

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
		color: var(--highlight-color);
	}
</style>
