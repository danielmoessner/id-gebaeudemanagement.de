<script>
    export let label;
    export let placeholder = "";
    let name = slugify(label)
</script>

<div class="flex flex-wrap mb-8">
    <div class="w-full">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="textarea-{name}">
            {label}
        </label>
        <textarea
            class="mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="{name}" id="textarea-{name}" placeholder="{placeholder}" cols="30" rows="4"></textarea>
    </div>
</div>