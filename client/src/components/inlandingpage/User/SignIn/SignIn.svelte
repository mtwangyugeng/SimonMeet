<script context=module>
    import {writable} from 'svelte/store';
    export const isSignningIn = writable(false);
</script>

<script>
    import RippleButton from '$src/components/_common/RippleButton.svelte';
    function handleClick() {
        isSignningIn.set(true);
    }
</script>


<span>
    <RippleButton classes="btn-lite" on:click={handleClick}>
        Sign in
    </RippleButton>
</span>

<style>
    span {
        color: #777;
    }
</style>