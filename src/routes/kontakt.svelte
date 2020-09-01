<svelte:head>
    <title>Kontakt</title>
    <meta name="description" content="Wir sorgen für die Sauberkeit, sodass sich Ihre Kunden &amp; Mitarbeiter wohlfühlen. Schauen Sie sich jetzt unsere Leistungen an." />
</svelte:head>

<script>
    import CardWithIcon from "../components/CardWithIcon.svelte";
    import HeaderHeading from "../components/HeaderHeading.svelte";
    import CustomContainer from "../components/Container.svelte";
    import { cta } from '../store.js'
    cta.set(false)

    let cards = [
        {
            icon: '<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>',
            heading: "Adresse",
            text: "Silcherstraße 13 <br> 80807 München"
        },
        {
            icon: '<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>',
            heading: "Telefon",
            text: "<a class='hover:text-indigo-700 transition-all duration-300' href='tel:00491712198934'>0171 2198934</a> <br> Boban Stanojevic"
        },
        {
            icon: '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>',
            heading: "E-Mail",
            text: "<a class='hover:text-indigo-700 transition-all duration-300' href='mailto:kontakt@id-gebaeudemanagement.de?subject=Anfrage'>kontakt@id-gebaeudemanagement.de</a>"
        }
    ]
</script>

<div class="pt-64 pb-32 bg-gray-200">
    <CustomContainer>
        <HeaderHeading heading="Kontakt" subHeading="Sie haben Fragen, benötigen einen Termin, ein
            Angebot oder möchten anrufen?" />
    </CustomContainer>
</div>

<div class="py-32">
    <CustomContainer>
        <!-- <h2 class="text-center text-2xl text-gray-800 font-bold mb-16">Sie haben Fragen, benötigen einen Termin, ein
            Angebot oder möchten anrufen?</h2> -->
        <div class="grid gap-y-12 md:gap-8 grid-cols-3">
            {#each cards as card}
            <div class="col-span-3 md:col-span-1">
                <CardWithIcon {...card}/>
            </div>
            {/each}
        </div>
    </CustomContainer>
</div>
 
<div class="py-8">
    <CustomContainer customClass="focus:outline-none">
        <div class="shadow-md rounded overflow-hidden outline-none focus:outline-none">
            <iframe class="outline-none focus:outline-none w-full" title="Google Maps Standort" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10640.326681972643!2d11.578286!3d48.1857779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x491fd7790853e90d!2sI.D.%20Geb%C3%A4udemanagement!5e0!3m2!1sde!2sde!4v1598991096443!5m2!1sde!2sde" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </CustomContainer>
</div>