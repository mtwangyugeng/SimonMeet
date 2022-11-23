<script>
    import ConfirmLogout from "$src/components/inlandingpage/User/LoggedInUser/Logout/ConfirmLogout.svelte";
    import { isLoggingOut } from "$src/components/inlandingpage/User/LoggedInUser/Logout/Logout.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>

{#if $isLoggingOut}
    <DropdownModal>
        <ConfirmLogout />
    </DropdownModal>
{/if}