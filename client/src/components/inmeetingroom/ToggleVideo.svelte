<script lang="ts">
    import { hmsActions } from "$src/apis/_hms";
    import { hmsIsVideoEnabled } from "$src/stores/_hmsStores";
    import VideoCam from "../_common/icons/VideoCam.svelte";
    import VideoCamOff from "../_common/icons/VideoCamOff.svelte";
    import RippleButton from "../_common/RippleButton.svelte";


    function toggleVideo() {
        hmsActions.setLocalVideoEnabled(!$hmsIsVideoEnabled);
    }
</script>


<RippleButton classes="btn-control" on:click={toggleVideo}>
    {#if $hmsIsVideoEnabled}
        <VideoCam />
    {:else}
        <VideoCamOff />
    {/if}
</RippleButton>

<style>
</style>