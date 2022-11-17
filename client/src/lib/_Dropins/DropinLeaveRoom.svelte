<script>
    import ConfirmLeaveRoom from "$src/components/inmeetingroom/LeaveRoom/ConfirmLeaveRoom.svelte";
    import { isLeavingRoom } from "$src/components/inmeetingroom/LeaveRoom/LeaveRoom.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>

{#if $isLeavingRoom}
    <DropdownModal>
        <ConfirmLeaveRoom />
    </DropdownModal>
{/if}