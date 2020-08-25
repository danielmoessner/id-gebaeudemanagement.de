<script>
    import CustomContainer from "../components/Container.svelte";

    let navbarOpen = false;

    function toggleNavbar() {
        navbarOpen = !navbarOpen;
    }
</script>

<!-- <div class="overflow-x-hidden sticky top-0 z-50"> -->
<div class="relative overflow-hidden">
    <CustomContainer customClass="relative bg-indigo-500 z-50">
        <div class="border-b border-gray-400 py-2 flex relative z-10">
            <a class="text-gray-300 hover:text-white block" href="tel:00491712198934">0171 2198934</a>
            <a class="text-gray-300 hover:text-white block ml-auto" href="mailto:kontakt@id-gebaeudemanagement.de?subject=Anfrage">kontakt@id-gebaeudemanagement.de</a>
        </div>
        <div class="absolute bg-indigo-600 bottom-0 right-0 w-full h-800 transform origin-bottom-right rotate-75 z-0" style="--transform-translate-y: 85px">
        </div>
        <div class="absolute bg-indigo-600 bottom-0 left-0 w-full h-800 transform origin-bottom-left -rotate-75 z-0" style="--transform-translate-y: 85px">
        </div>
        <div class="absolute bg-indigo-500 bottom-0 right-0 w-full h-800 transform origin-bottom-right rotate-45 z-0" style="--transform-translate-y: 85px">
        </div>
        <div class="absolute bg-indigo-500 bottom-0 left-0 w-full h-800 transform origin-bottom-left -rotate-45 z-0" style="--transform-translate-y: 85px">
        </div>
    </CustomContainer>
</div>
<nav class="sticky top-0 outline-none z-40">
    <div class="overflow-x-hidden">
        <div class="">
            <CustomContainer customClass="bg-indigo-500 relative">
                <div class="flex items-center justify-between flex-wrap py-6 relative z-50">
                    <div class="flex items-center flex-shrink-0 text-white mr-6">
                        <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg> -->
                        <!-- <img src="logo.jpg" alt="Firmenlogo"> -->
                        <span class="font-semibold text-xl tracking-tight">I.D. Gebäudemanagement</span>
                    </div>
                    <div class="block lg:hidden">
                        <button on:click={toggleNavbar}
                            class="flex items-center px-4 py-3 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white focus:outline-none">
                            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto { navbarOpen ? 'block' : 'hidden' }">
                        <div class="text-sm lg:flex-grow lg:text-right">
                            <a href="." on:click="{() => {navbarOpen = false}}"
                                class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 text-lg hover:border-gray-200 border border-transparent rounded px-2 lg:px-1 p-1 hover:text-white lg:mr-4 focus:outline-none">
                                Startseite
                            </a>
                            <a href="leistungen" on:click="{() => {navbarOpen = false}}"
                                class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 text-lg hover:border-gray-200 border border-transparent rounded px-2 lg:px-1 p-1 hover:text-white lg:mr-4 focus:outline-none">
                                Leistungen
                            </a>
                            <a href="anfrage" on:click="{() => {navbarOpen = false}}"
                                class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 text-lg hover:border-gray-200 border border-transparent rounded px-2 lg:px-1 p-1 hover:text-white lg:mr-4 focus:outline-none">
                                Anfrage
                            </a>
                            <a href="kontakt" on:click="{() => {navbarOpen = false}}"
                                class="block mt-4 lg:inline-block lg:mt-0 text-gray-100 text-lg hover:border-gray-200 border border-transparent rounded px-2 lg:px-1 p-1 hover:text-white lg:-mr-1 focus:outline-none">
                                Kontakt
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute bg-indigo-600 bottom-0 left-0 w-full h-800 transform origin-bottom-left -rotate-75 z-0">
                </div>
                <div
                    class="absolute bg-indigo-600 bottom-0 right-0 w-full h-800 transform origin-bottom-right rotate-75 z-0">
                </div>
                <div
                    class="absolute bg-indigo-500 bottom-0 left-0 w-full h-800 transform origin-bottom-left -rotate-45 z-0">
                </div>
                <div
                    class="absolute bg-indigo-500 bottom-0 right-0 w-full h-800 transform origin-bottom-right rotate-45 z-0">
                </div>
            </CustomContainer>
        </div>
    </div>
</nav>
<!-- <div class="absolute bg-white top-0 left-0 w-64 h-64 rotate-45 transform origin-top-left"></div>
    <div class="absolute bg-white top-0 right-0 w-64 h-64 -rotate-45 transform origin-top-right"></div> -->
<!-- </div> -->