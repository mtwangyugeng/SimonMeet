<script context=module>
    import { writable } from 'svelte/store'
    export const isCreatingRoom = writable(false);
</script>

<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";

    function handleClick() {
        isCreatingRoom.set(true);
    }
</script>


<RippleButton on:click={handleClick}>
    New Meeting
</RippleButton>