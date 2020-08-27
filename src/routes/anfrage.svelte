<svelte:head>
    <title>Anfrage</title>
    <meta name="description" content="Wir sorgen für die Sauberkeit, sodass sich Ihre Kunden &amp; Mitarbeiter wohlfühlen. Schauen Sie sich jetzt unsere Leistungen an." />
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
                <form class="" name="anfrage" method="POST" data-netlify="true" action="danke/">
                    <input type="hidden" name="form-name" value="anfrage">
                    <InputGroup label="Name" type="text" placeholder="Muster" />
                    <InputGroup label="Firma" type="text" placeholder="Muster GmbH" />
                    <InputGroup label="E-Mail" type="mail" placeholder="ansprechpartner@muster.de" />
                    <InputGroup label="Telefon" type="phone" placeholder="123 123456" />
                    <InputGroup label="Adresse" type="text" placeholder="Straße 12, 12345 Ort" />
                    <InputGroup label="Objekt" type="text" placeholder="Firmengebäude, Schule, ..." />
                    <SelectInputGroup label="Bereich" options={["Büro / Dienstleistung", "Industrie / Handel"
                        , "Gastronomie" , "Fitnessstudio" , "Privat" ]} />
                    <ChoicesInputGroup label="Tätigkeiten" choices={["Glasreinigung", "Unterhaltsreinigung"
                        , "Grundreinigung" , "Containerreinigung" , "Desinfektion" , "Sonderreinigung"
                        , "Fassadenreinigung" , "Sonstiges" ]} />
                    <SelectInputGroup label="Reinigungsintervall" options={["Einmalig", "Täglich" , "Alle 14 Tage"
                        , "Monatlich" , "1-Mal pro Woche" , "2-Mal pro Woche" , "3-Mal pro Woche" , "4-Mal pro Woche"
                        , "5-Mal pro Woche" ]} />
                    <ChoicesInputGroup label="Was ist gewünscht?" choices={["Rückruf", "Beratungstermin" ]} />
                    <TextAreaInputGroup label="Weiteres" placeholder="Zusätzliche Informationen" />
                    <CheckboxInputGroup label="Datenschutz"
                        text="Ich habe die Information der Datenverarbeitung zur Kenntnis genommen. Meine angegebenen Daten werden werden zum Zweck der Bearbeitung meiner Anfrage vorrübergehend gespeichert."
                        required="{true}" />
                    <SubmitButton text="Absenden" />
                </form>
            </div>
        </div>
    </CustomContainer>
</div>