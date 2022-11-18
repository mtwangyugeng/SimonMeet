<script>
    import PeersDisplay from "$src/components/inmeetingroom/Peers/PeersDisplay.svelte";
    import DropinAutoPlayError from "$src/lib/_Dropins/DropinAutoPlayError.svelte";
    import DropInDeviceSettings from "$src/lib/_Dropins/DropInDeviceSettings.svelte";
    import DropinLeaveRoom from "$src/lib/_Dropins/DropinLeaveRoom.svelte";
    import BottomBar from "./BottomBar.svelte";
</script>

<section>
    <div class="conference-section">
        
        <PeersDisplay />

    
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
        height: 70px;
    }
</style>