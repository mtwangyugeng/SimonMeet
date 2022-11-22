<script>
    import { isSignningIn } from "$src/components/inlandingpage/User/SignIn/SignIn.svelte";
    import SignInForm from "$src/components/inlandingpage/User/SignIn/SignInForm.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>

{#if $isSignningIn}
    <DropdownModal>
        <SignInForm />
    </DropdownModal>
{/if}