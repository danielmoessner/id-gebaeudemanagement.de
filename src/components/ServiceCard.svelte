<script>
    export let image;
    export let title;
    export let text;
</script>

<div>
    <div class="relative pb-5/6 overflow-hidden">
        <img class="absolute h-full w-full object-cover rounded-sm shadow-md" alt="{title}" src="{image}">
        <div class="absolute top-0 left-0 w-16 h-40 transform rotate-45 bg-indigo-500 origin-top-right"></div>
    </div>
    <div class="relative px-4 -mt-16">
        <div class="bg-white p-6 rounded-sm shadow-lg"> 
            <h4 class="font-semibold text-lg leading-tight truncate">{title}</h4>
            <div class="mt-2 flex items-center">
                {text}
            </div>
        </div>
    </div>
</div>
