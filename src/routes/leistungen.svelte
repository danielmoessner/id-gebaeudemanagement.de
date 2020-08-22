<svelte:head>
	<title>Leistungen</title>
</svelte:head>

<script>
    import { cta } from '../store.js';
    import HeaderHeading from "../components/HeaderHeading.svelte";
    import CustomContainer from "../components/Container.svelte";
    import CustomServices from "../components/Services.svelte";
    cta.set(true)

   
</script>

<div class="pt-64 pb-32 bg-gray-200">
    <CustomContainer>
        <HeaderHeading heading="Leistungen" subHeading="Womit können wir Ihnen helfen?" />
    </CustomContainer>
</div>

<div class="py-32">
    <CustomContainer>
        <CustomServices/>
    </CustomContainer>
</div>
