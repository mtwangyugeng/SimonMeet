<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { isChangingDeviceSettings } from "$src/stores/MeetingRoom";

    function handleClick() {
        isChangingDeviceSettings.set(true);
    }
</script>

<RippleButton classes={"setting-btn"} height="60px" width="60px" on:click={handleClick}>
    Device Settings
</RippleButton>