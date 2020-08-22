<script>
    import { cta } from '../store.js';
    import CustomContainer from "../components/Container.svelte";
    let showCta;
    const unsubscribe = cta.subscribe(value => {
		showCta = value;
	});
</script>

<div class="pt-48 overflow-hidden">
    <div class="bg-indigo-700">
        <CustomContainer customClass="relative">
            {#if showCta}
            <div class="">
                <div class="bg-gray-50">
                    <div
                        class="max-w-screen-xl mx-auto pt-20 lg:pt-20 lg:flex lg:items-center lg:justify-between">
                        <h2
                            class="text-3xl leading-9 font-extrabold tracking-tight text-gray-300 sm:leading-10 m-0">
                            Sind Sie überzeugt?
                            <br>
                            <span class="text-indigo-300">Jetzt eine unverbindliche Anfrage stellen.</span>
                        </h2>
                        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                            <!-- <div class="inline-flex rounded-md shadow">
                                <a href="."
                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Get started
                                </a>
                            </div> -->
                            <div class="inline-flex rounded-md shadow">
                                <a href="anfrage"
                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Anfrage stellen
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/if}
            <div class="text-gray-200 py-20">
                <div class="grid grid-cols-12 gap-y-12 md:gap-4">
                    <div class="col-span-12 md:col-span-6">
                        <h2 class="text-lg font-semibold mb-4">Über uns</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et ipsam autem nostrum reprehenderit consequatur accusamus, neque pariatur dolorum corporis mollitia expedita quae, voluptatem velit! Dolorem temporibus pariatur soluta velit.
                        </p>
                    </div>
                    <div class="hidden md:block col-span-1"></div>
                    <div class="col-span-12 md:col-span-3">
                        <h2 class="text-lg font-semibold mb-4">Inhalt</h2>
                        <ul>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href=".">Startseite</a>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href="leistungen">Leistungen</a>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href="anfrage">Anfrage</a>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href="kontakt">Kontakt</a>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-2 lg:text-right">
                        <h2 class="text-lg font-semibold mb-4">Rechtliches</h2>
                        <ul>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href="impressum">Impressum</a>
                            <a class="block mb-3 hover:text-white text-base md:mb-1" href="datenschutz">Datenschutz</a>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div
                class="absolute bg-indigo-600 bottom-0 left-0 w-full h-full transform origin-bottom-right -translate-x-full -rotate-15">
            </div>
            <div
                class="absolute bg-indigo-600 bottom-0 right-0 w-full h-full transform origin-bottom-left translate-x-full rotate-15">
            </div> -->
            <div
                class="absolute bg-indigo-600 top-0 left-0 w-full h-800 transform origin-top-right -translate-x-full rotate-15">
            </div>
            <div
                class="absolute bg-indigo-600 top-0 right-0 w-full h-800 transform origin-top-left translate-x-full -rotate-15">
            </div>
        </CustomContainer>
    </div>
</div>
