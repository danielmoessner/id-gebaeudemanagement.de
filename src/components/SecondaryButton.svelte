<script>
    export let href;
    export let text;
    export let customClasses = "";
</script>

<a class="{customClasses} inline-flex items-center justify-center px-5 py-3 border-2 hover:border-indigo-500 border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
    href="{href}">{text}</a>
