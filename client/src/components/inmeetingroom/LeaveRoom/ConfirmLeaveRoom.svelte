<script>
    import { hmsActions } from "$src/apis/_hms";
    import { message } from "$src/stores/Messages";
    import { isLeavingRoom } from "./LeaveRoom.svelte";

    function leaveRoom() {
        isLeavingRoom.set(false);
        hmsActions.leave();
        message.set({type: "info", message: "You left the room."})
    }
    
    function returnToMeeting() {
        isLeavingRoom.set(false);
    }
</script>

<section class="card card-shadow card-dropin">
    <h1 class="normal-text">Leave Room</h1>
    <p>
        Are you sure you want to leave the room?
    </p>
    <div>
        <button class="btn-danger" on:click={leaveRoom}>
            Yes
        </button>
        <button class="btn-lite" on:click={returnToMeeting}>
            no
        </button>
    </div>
</section>

<style>
    h1 {
        font-size: 18px;
    }
    div {
        display: flex;
        justify-content: space-around;
    }
    button {
        width: 80px;
    }
</style>