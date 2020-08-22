<script>
    export let type;
    export let label;
    export let placeholder;
    let name = label.replace(" ", "").toLowerCase();
</script>

<div class="flex flex-wrap mb-8">
    <div class="w-full">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="input-{name}">
            {label}
        </label>
        <input
            class="mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="input-{name}" name="{name}" type="{type}" placeholder="{placeholder}">
    </div>
</div>