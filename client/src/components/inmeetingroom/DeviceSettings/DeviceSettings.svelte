<script>
    import SettingIcon from "$src/components/_common/icons/SettingIcon.svelte";
import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { isChangingDeviceSettings } from "$src/stores/MeetingRoom";

    function handleClick() {
        isChangingDeviceSettings.set(true);
    }
</script>

<RippleButton classes={"btn-setting"} on:click={handleClick}>
    <SettingIcon />
</RippleButton>