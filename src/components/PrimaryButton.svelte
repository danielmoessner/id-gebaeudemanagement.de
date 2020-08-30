<script>
    export let href;
    export let text;
    export let customClasses = "";
</script>

<a class="{customClasses} cursor-pointer inline-flex items-center justify-center px-5 py-3 border-2 border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
    href="{href}">{text}</a>
