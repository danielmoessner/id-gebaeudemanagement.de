<script>
	import Nav from '../components/Nav.svelte';
	import PageNavigation from '../components/Navigation.svelte';
	import PageFooter from "../components/Footer.svelte";
</script>

<PageNavigation />

<main class="-mt-126">
	<slot></slot>
</main>

<PageFooter />
