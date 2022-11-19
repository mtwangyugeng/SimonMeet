<script lang="ts">
    import { hmsActions } from "$src/apis/_hms";
    import ShareScreenIcon from "$src/components/_common/icons/ShareScreenIcon.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { hmsAmIScreenSharing, } from "$src/stores/_hmsStores";


    function toggleScreen() {
        hmsActions.setScreenShareEnabled(!$hmsAmIScreenSharing);
    }

</script>

<span class:Sharing = {$hmsAmIScreenSharing}>
    <RippleButton classes="btn-control" on:click={toggleScreen} >
        <ShareScreenIcon />
    </RippleButton>
</span>

<style>
    span :global(svg){
        fill: black;
        width: 100%;
        height: 100%;
    }

    .Sharing :global(button){
        animation: tinkle 2s infinite;
    }

    @keyframes tinkle {
        0% { 
            background-color: white;
        }
        50% {
            background-color: pink;
        }
        100% { 
            background-color: white;
        }
    }
</style>