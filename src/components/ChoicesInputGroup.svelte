<script>
    export let choices;
    export let label;
    let name = label.replace(" ", "").toLowerCase();
    import {slugify} from "../components/Global.svelte"
    $: choices_with_ids = choices.map(choice => { return { "name": choice, "id": slugify(choice) } })
</script>

<div class="flex flex-wrap mb-8">
    <div class="w-full">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label} 
        </span>
        <div class="flex">
            <div class="w-1/2">
                {#each choices_with_ids.slice(0, choices.length / 2 + 0.5) as choice}
                    <div class="flex mb-2 items-center">
                        <input class="text-base mr-2 h-5 w-5" type="checkbox" id="choice-{choice.id}" name="{choice.id}" value="{choice.name}">
                        <label class="text-base" for="choice-{choice.id}">{choice.name}</label>
                    </div>
                {/each}
            </div>
            <div class="w-1/2">
                {#each choices_with_ids.slice(choices.length / 2 + 0.5) as choice}
                    <div class="flex mb-2 items-center">
                        <input class="text-base mr-2 h-5 w-5" type="checkbox" id="choice-{choice.id}" name="{choice.id}" value="{choice.name}">
                        <label class="text-base" for="choice-{choice.id}">{choice.name}</label>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>