<script>
	import PageNavigation from '../components/Navigation.svelte';
	import PageFooter from "../components/Footer.svelte";
</script>

<PageNavigation />

<main class="-mt-126">
	<slot></slot>
</main>

<PageFooter />
 