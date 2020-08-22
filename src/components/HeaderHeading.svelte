<script>
    export let heading;
    export let subHeading;
</script>

<div class="w-2/3">
    <h1 class="text-5xl text-gray-800 font-bold mb-2 leading-tight">{heading}</h1>
    {#if subHeading}
        <h2 class="text-2xl text-gray-700 font-semibold">{subHeading}</h2>
    {/if}
    <slot></slot>
</div>
