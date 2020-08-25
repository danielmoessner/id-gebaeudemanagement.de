<svelte:head>
	<title>I.D. Gebäudemanagement</title>
</svelte:head>

<script>
	import { cta } from '../store.js';
	import CustomContainer from "../components/Container.svelte";
	import HeaderHeading from "../components/HeaderHeading.svelte";
	import PrimaryButton from "../components/PrimaryButton.svelte";
	import SecondaryButton from "../components/SecondaryButton.svelte";
	import CustomServices from "../components/Services.svelte";
	import Heading2 from "../components/Heading2.svelte";
	import PagesToExport from "../components/PagesToExport.svelte";
	cta.set(true)
</script>

<PagesToExport />

<div class="pt-64 pb-32 bg-gray-200">
	<CustomContainer>
		<HeaderHeading heading="Wir sorgen für die Sauberkeit, sodass sich Ihre Kunden &amp; Mitarbeiter wohlfühlen.">
			<div class="mt-6">
				<PrimaryButton href="kontakt" text="Kontakt aufnehmen" customClasses="mr-4 mb-2" />
				<SecondaryButton href="anfrage" text="Anfrage stellen" customClasses="mb-2" />
			</div>
		</HeaderHeading>
	</CustomContainer>
</div>

<div class="py-32">
	<CustomContainer>
		<Heading2 heading="Über uns" />
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/3">
				<div class="pr-8 mb-8 md:mb-0">
					<div class="font-bold">
						<img class="max-w-full h-auto" src="logo.jpg" alt="Logo">
					</div>
				</div>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="font-bold">Top Leistungen</h3>
				<p class="mb-6">
					Wir sind ein professionelles Reinigungsunternehmen aus München und sind für gewerbliche Kunden tätig. Wir bieten das gesamte Spektrum der Reinigung.
				</p>
				<h3 class="font-bold">Engagement & Service</h3>
				<p class="mb-6">
					Wir sind sehr service- und dienstleistungsorieniert. Der Kunde mit seinen Wünschen steht bei uns im Fokus.
				</p>
				<h3 class="font-bold">Qualifikation</h3>
				<p class="mb-6">
					Um dem hohen Servicelevel und der Kundenzufriedenheit gerecht zu werden, wird unser Service ständig optimiert, Fortbildungen besucht, Mitarbeiter geschult - Prozesse hinterfragt.
				</p>
				<h3 class="font-bold">Erfahrung & Know-How</h3>
				<p class="mb-6">
					Professionalität und solides Handwerk sind bei uns keine Fremdworte. Das belegen die zahlreichen Kundengespräche. Mit der I.D. Gebäudemanagement steht Ihnen ein verlässlicher Partner zur Seite, wenn es um das Thema Gebäudereinigung geht. Wir freuen uns auf Ihre Kontaktaufnahme, um Sie von unseren Leistungen persönlich zu überzeugen.
				</p>
			</div>
		</div>
	</CustomContainer>
</div>

<div class="py-32">
	<CustomContainer>
		<Heading2 heading="Leistungen" />
		<CustomServices />
	</CustomContainer>
</div>