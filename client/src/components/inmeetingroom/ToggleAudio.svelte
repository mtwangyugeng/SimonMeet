<script lang="ts">
    import { hmsActions } from "$src/apis/_hms";
    import { hmsIsAudioEnabled,  } from "$src/stores/_hmsStores";
    import MicIcon from "../_common/icons/MicIcon.svelte";
    import MicOffIcon from "../_common/icons/MicOffIcon.svelte";
    import RippleButton from "../_common/RippleButton.svelte";

    function toggleAudio() {
        hmsActions.setLocalAudioEnabled(!$hmsIsAudioEnabled);
    }

</script>
<RippleButton classes="btn-control" on:click={toggleAudio}>
    {#if $hmsIsAudioEnabled}
        <span title="Turn off audio">
            <MicIcon />
        </span>
    {:else}
        <span title="Turn on audio">
            <MicOffIcon />
        </span>
    {/if}
</RippleButton>

<style>
</style>