<script>
    import { hmsActions } from "$src/apis/_hms";

    function leaveRoom() {
        hmsActions.leave();
    }
</script>

<button class="btn-danger" on:click={leaveRoom}> Leave Room </button>