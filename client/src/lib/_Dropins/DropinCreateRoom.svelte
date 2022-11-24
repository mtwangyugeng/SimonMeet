<script>
    import { isCreatingRoom } from "$src/components/inlandingpage/CreateRoom/CreateRoom.svelte";
    import CreateRoomForm from "$src/components/inlandingpage/CreateRoom/CreateRoomForm.svelte";
    import { userToken } from "$src/components/inlandingpage/User/User.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>

{#if $isCreatingRoom && $userToken !== ""}
    <DropdownModal>
        <CreateRoomForm />
    </DropdownModal>
{/if}