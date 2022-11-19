<script>
    import PeersDisplay from "$src/components/inmeetingroom/Peers/PeersDisplay.svelte";
    import ScreenShared from "$src/components/inmeetingroom/ShareScreen/ScreenShared.svelte";
    import DropinAutoPlayError from "$src/lib/_Dropins/DropinAutoPlayError.svelte";
    import DropInDeviceSettings from "$src/lib/_Dropins/DropInDeviceSettings.svelte";
    import DropinLeaveRoom from "$src/lib/_Dropins/DropinLeaveRoom.svelte";
    import { hmsIsAnyoneScreenSharing } from "$src/stores/_hmsStores";
    import BottomBar from "./BottomBar.svelte";

</script>

<section>
    <div class="conference-section">
        {#if (!$hmsIsAnyoneScreenSharing)}
            <PeersDisplay />
        {:else}
        <div class="screenshare-view">
            <div class="screenshare">
                <ScreenShared />
            </div>
            <div class="gallery">
                <PeersDisplay />
            </div>
        </div>
    {/if}
    </div>
    <div class="BottomBar">
        <BottomBar />
    </div>
</section>


<DropInDeviceSettings />
<DropinLeaveRoom />
<DropinAutoPlayError />

<style>
    section {
        background-color: #fff;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .conference-section {
        /* max-width: 960px; */
        width: 100%;
        margin: 0 auto;
        flex:1;
        background-color: rgb(208, 211, 212);

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    
    .BottomBar {
        height: fit-content;
    }

    .screenshare-view {
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: space-around;
    }

    .screenshare-view>.screenshare {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex: 1 auto;
    }

    .screenshare-view>.gallery {
        flex: 1 20%;
    }

    /* For mobile devices put the gallery view below the screenshare */
    @media (max-width: 600px) {
        .screenshare-view {
            flex-direction: column;
        }

        .screenshare-view>.screenshare {
            flex-basis: auto;
            height: unset;
        }

        .screenshare-view>.gallery {
            flex-basis: auto;
            height: 20%;
            flex-grow: 1;
        }
    }

</style>