<script>
    export let href;
    export let text;
    export let customClasses = "";
</script>

<a class="{customClasses} inline-flex items-center justify-center px-5 py-3 border-2 hover:border-blue-600 border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-white hover:text-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
    href="{href}">{text}</a>
