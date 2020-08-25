<script>
    export let heading;
    export let subHeading = false;
</script>

<div class="w-full md:w-2/3">
    <h1 class="text-4xl md:text-5xl text-gray-800 font-bold mb-2 leading-tight tracking-tight">{heading}</h1>
    {#if subHeading}
        <h2 class="text-2xl text-gray-700 font-semibold">{subHeading}</h2>
    {/if}
    <slot></slot>
</div>
