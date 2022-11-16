<script>
    import DeviceSettingsForm from "$src/components/inmeetingroom/DeviceSettings/DeviceSettingsForm.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";
    import { isChangingDeviceSettings } from "$src/stores/MeetingRoom";

</script>

{#if $isChangingDeviceSettings}
    <DropdownModal>
        <DeviceSettingsForm />
    </DropdownModal>
{/if}