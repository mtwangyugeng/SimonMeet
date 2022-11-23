<script>
    import { isCreatingRoom } from "$src/components/inlandingpage/CreateRoom/CreateRoom.svelte";
    import CreateRoomForm from "$src/components/inlandingpage/CreateRoom/CreateRoomForm.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>

{#if $isCreatingRoom}
    <DropdownModal>
        <CreateRoomForm />
    </DropdownModal>
{/if}