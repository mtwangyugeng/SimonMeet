<script>
    import PeersDisplay from "$src/components/inmeetingroom/Peers/PeersDisplay.svelte";
    import DropInDeviceSettings from "$src/lib/_Dropins/DropInDeviceSettings.svelte";
    import BottomBar from "./BottomBar.svelte";
    import TopBar from "./TopBar.svelte";
</script>

<div class="TopBar">
    <TopBar />
</div>
<section class="conference-section">
    <h2>Conference</h2>
    
    <PeersDisplay />

    <BottomBar />
</section>

<DropInDeviceSettings />

<style>
    .conference-section {
        max-width: 960px;

        padding: 20px 30px;
        margin: 0 auto;
    }

    .conference-section h2 {
        text-align: center;
        font-size: 32px;

        padding-bottom: 10px;

        border-bottom: 1px solid #546e7a;
    }

    .TopBar {
        height: 50px;
    }
</style>