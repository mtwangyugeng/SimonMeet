<script>
    import DeviceSettings from "$src/components/inmeetingroom/DeviceSettings/DeviceSettings.svelte";
import LeaveRoom from "$src/components/inmeetingroom/LeaveRoom/LeaveRoom.svelte";
import ToggleAudio from "$src/components/inmeetingroom/ToggleAudio.svelte";
    import ToggleVideo from "$src/components/inmeetingroom/ToggleVideo.svelte";

</script>
<section>
    <div>

    </div>
    <div>
        <ToggleAudio />
        <ToggleVideo />
        <DeviceSettings />
        <LeaveRoom />
    </div>
    <div>

    </div>
</section>

<style>
    section {
        background-color: yellow;
        display: flex;
        height: 100%;
        align-items: center;
    }
    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
</style>