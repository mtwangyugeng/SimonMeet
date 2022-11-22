<script>
    import CloseIcon from "./icons/CloseIcon.svelte";

</script>

<button class="CloseButton" on:click>
    <CloseIcon />
</button>

<style>
    .CloseButton {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .CloseButton:hover {
        background-color: rgb(218, 218, 218);
    }

    .CloseButton :global(svg) {
        width: 20px;
        height: 20px;
    }
</style>