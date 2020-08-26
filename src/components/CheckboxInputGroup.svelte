<script>
    export let label;
    export let text;
    export let required = false;
    import {slugify} from "../components/Global.svelte"
    let name = slugify(label);
</script>

<div class="flex flex-wrap mb-8">
    <div class="w-full">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label}
        </span>
        <div class="flex">
            <input required="{required}" class="text-base mr-2 h-5 w-5 flex-shrink-0" type="checkbox" id="checkbox-{name}" name="{name}" value="{name}">
            <label class="text-base" for="checkbox-{name}">{text}</label>
        </div>
    </div>
</div>
