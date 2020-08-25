<script>
    import ServiceCard from "../components/ServiceCard.svelte";

    let serviceCards = [
        {
            image: "img/bueroreinigung.1000.jpg",
            title: "Büroreinigung",
            text: "Ein sauberes Büro ist mehr als nur ästhetische Vorliebe. Es hilft Mitarbeitern effizienter zu arbeiten und gesund zu bleiben. Wir sorgen für hygienische Sauberkeit in Ihrem Büro."
        },
        {
            image: "img/teppichreinigung.1000.jpg",
            title: "Teppichreinigung",
            text: "Wir übernehmen gern die Tiefenreinigung sämtlicher Bodenbeläge - materialschonend und hygienisch. Bei Bedarf wechseln und reinigen wir auch Ihre Fußmatten."
        },
        {
            image: "img/gebaeudereinigung.1000.jpg",
            title: "Gebäudereinigung",
            text: "Bürogebäude, Wohnkomplex, öffentliche Einrichtung? Wir bieten für fast jedes Gebäude die passende Reinigungslösung."
        },
        {
            image: "img/treppenhausreinigung.1000.jpg",
            title: "Treppenhausreinigung",
            text: "Wir helfen Ihnen gerne, wenn es darum geht Treppenhäuser regelmäßig zu reinigen. Fragen Sie ganz einfach nach einem Angebot."
        },
        {
            image: "img/praxisreinigung.1000.jpg",
            title: "Praxisreinigung",
            text: "Vertrauen Sie uns, wenn es um die Reinigung Ihrer Arztpraxis geht. Durch Schulung und Erfahrung in der Praxisreinigung garantieren wir höchste hygienischen Standards."
        },
        {
            image: "img/fensterreinigung.1000.jpg",
            title: "Fensterreinigung",
            text: "Sie brauchen wieder einmal einen streifenfreien Durchblick? Unsere Experten übernehmen gern Ihre Fenster- und Glasreinigung."
        }
    ]
</script>

<div class="grid gap-y-12 md:gap-8 grid-cols-3">
    {#each serviceCards as card}
        <div class="col-span-3 md:col-span-1">
            <ServiceCard title="{card.title}" text="{card.text}" image="{card.image}" />
        </div>
    {/each}
</div>