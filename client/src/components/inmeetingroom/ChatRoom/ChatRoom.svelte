<script context=module>
    import ChatIcon from "$src/components/_common/icons/ChatIcon.svelte";
    import { writable } from "svelte/store";


    export const isChatOpened = writable(false)
</script>

<script>
    function handleClick() {
        isChatOpened.update(v => !v);
    }
</script>

<button class="btn-control" on:click={handleClick}>
    <ChatIcon/>
</button>