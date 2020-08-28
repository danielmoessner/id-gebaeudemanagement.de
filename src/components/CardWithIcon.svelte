<script>
    export let icon;
    export let heading;
    export let text;
</script>

<div class="shadow-md">
    <div class="relative p-16 flex justify-center items-center rounded overflow-hidden">
        <div class="text-center">
            <h3 class="text-gray-800 font-semibold text-xl">{heading}</h3>
            <div class="w-40 text-base">
                {@html text}
            </div>
        </div>
        <div
            class="h-64 w-32 absolute top-0 left-0 origin-top-right transform rotate-45 bg-indigo-500 z-0">
        </div>
        <div class="absolute top-0 left-0 text-gray-100 p-3">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12">
                {@html icon}
            </svg>
        </div>
    </div>
</div>