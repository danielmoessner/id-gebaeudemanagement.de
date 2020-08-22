<script>
    import ServiceCard from "../components/ServiceCard.svelte";

    let serviceCards = [
        {
            image: "https://via.placeholder.com/400",
            title: "Büroreinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci."
        },
        {
            image: "https://via.placeholder.com/400",
            title: "Teppichreinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci. Vel iste deserunt pariatur, omnis animi non inventore nam rem provident at maxime nostrum maiores."
        },
        {
            image: "https://via.placeholder.com/400",
            title: "Gebäudereinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci. Vel iste deserunt pariatur, omnis animi non inventore nam rem provident at maxime nostrum maiores."
        },
        {
            image: "https://via.placeholder.com/400",
            title: "Treppenhausreinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci. Vel iste deserunt pariatur, omnis animi non inventore nam rem provident at maxime nostrum maiores."
        },
        {
            image: "https://via.placeholder.com/400",
            title: "Praxisreinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci. Vel iste deserunt pariatur, omnis animi non inventore nam rem provident at maxime nostrum maiores."
        },
        {
            image: "https://via.placeholder.com/400",
            title: "Fensterreinigung",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam voluptate ad, harum repellendus adipisci. Vel iste deserunt pariatur, omnis animi non inventore nam rem provident at maxime nostrum maiores."
        }
    ]
</script>

<div class="grid gap-y-12 md:gap-8 grid-cols-3">
    {#each serviceCards as card}
        <div class="col-span-3 md:col-span-1">
            <ServiceCard {...card} />
        </div>
    {/each}
</div>