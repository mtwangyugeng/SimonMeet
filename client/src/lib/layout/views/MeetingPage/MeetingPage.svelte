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
        padding: 20px 30px;
        margin: 0 auto;
        flex:1;
        background-color: lightblue;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    .BottomBar {
        height: 70px;
    }
</style>