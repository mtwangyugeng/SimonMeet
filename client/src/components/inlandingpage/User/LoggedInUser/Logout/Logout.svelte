<script context=module>
    import { writable } from "svelte/store";

    export const isLoggingOut = writable(false);
</script>

<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";

    function handleClick() {
        isLoggingOut.set(true);
    }

</script>

<RippleButton classes="btn-lite" on:click={handleClick}>
    Log out
</RippleButton>