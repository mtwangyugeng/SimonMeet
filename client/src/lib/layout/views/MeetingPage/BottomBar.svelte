<script>
    import DeviceSettings from "$src/components/inmeetingroom/DeviceSettings/DeviceSettings.svelte";
import LeaveRoom from "$src/components/inmeetingroom/LeaveRoom.svelte";
import ToggleAudio from "$src/components/inmeetingroom/ToggleAudio.svelte";
    import ToggleVideo from "$src/components/inmeetingroom/ToggleVideo.svelte";

</script>
<section>
    <ToggleAudio />
    <ToggleVideo />
    <LeaveRoom />
    <DeviceSettings />
</section>