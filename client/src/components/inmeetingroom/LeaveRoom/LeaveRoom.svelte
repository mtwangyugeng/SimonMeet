<script context=module>
    import { writable } from "svelte/store";

    export const isLeavingRoom = writable(false)
</script>

<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    

    function handleClick() {
        isLeavingRoom.set(true);
    }
</script>

<span title="Leave Room">
    <RippleButton classes="btn-danger" on:click={handleClick}>
        Leave Room
    </RippleButton>
</span>
