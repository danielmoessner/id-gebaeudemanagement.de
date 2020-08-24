<svelte:head>
    <title>Anfrage</title>
</svelte:head>

<script>
    import CustomContainer from "../components/Container.svelte";
    import HeaderHeading from "../components/HeaderHeading.svelte";
    import InputGroup from "../components/InputGroup.svelte";
    import SelectInputGroup from "../components/SelectInputGroup.svelte";
    import ChoicesInputGroup from "../components/ChoicesInputGroup.svelte";
    import TextAreaInputGroup from "../components/TextareaInputGroup.svelte";
    import SubmitButton from "../components/SubmitButton.svelte";
    import CheckboxInputGroup from "../components/CheckboxInputGroup.svelte";
    import { cta } from '../store.js';
    cta.set(false)
</script>

<div class="pt-64 pb-32 bg-gray-200">
    <CustomContainer>
        <HeaderHeading heading="Anfrage"
            subHeading="Füllen Sie alle Felder aus und wir schicken Ihnen schnellstmöglich Ihr Angebot." />
    </CustomContainer>
</div>

<div class="py-32">
    <CustomContainer>
        <div class="flex flex-col items-center justify-center w-full">
            <div class="max-w-md w-full">
                <h2 class="font-bold text-3xl">Vielen Dank für Ihre Anfrage</h2>
                <p>Wir werden uns schnellstmöglich bei Ihnen melden</p>
            </div>
        </div>
    </CustomContainer>
</div>