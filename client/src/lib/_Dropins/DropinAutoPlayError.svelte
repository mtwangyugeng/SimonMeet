<script>
    import AutoplayError, { isThereAutoplayError } from "$src/components/inmeetingroom/AutoplayError/AutoplayError.svelte";
    import DropdownModal from "$src/components/_common/DropdownModal.svelte";

</script>
{#if $isThereAutoplayError}
    <DropdownModal>
        <AutoplayError />
    </DropdownModal>
{/if}