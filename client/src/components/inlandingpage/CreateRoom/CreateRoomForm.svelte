<script context=module>
    const ROOM_URL = 'http://127.0.0.1:8000/auth/'
    
    //CRUDs
    function postCreateRoom(name, description, region, access_token) {
        return fetch(ROOM_URL + "login/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: JSON.stringify({ name, description, region })
        })

    }


    const ALLOWED_REGION = ['auto', 'us', 'in', 'eu'];
</script>

<script>
    import CloseButton from "$src/components/_common/CloseButton.svelte";
import InputWithAnimatedPlaceHolder from "$src/components/_common/InputWithAnimatedPlaceHolder.svelte";
    import { isCreatingRoom } from "./CreateRoom.svelte";

    let name = "";
    let description = "";
    let region = ALLOWED_REGION[0];

    function handleSubmit() {

    }

    function handleClose() {
        isCreatingRoom.set(false)
    }
</script>

<form 
    on:submit|preventDefault = {handleSubmit}
    class="card card-dropin card-shadow"
    >
    <h1 class="normal-text">Create a new meeting room</h1>
    
    <InputWithAnimatedPlaceHolder bind:value={name} placeholder="Name"/>

    <InputWithAnimatedPlaceHolder bind:value={description} placeholder="description"/>

    <InputWithAnimatedPlaceHolder bind:value={description} placeholder="region"/>

    <button>
        send
    </button>
    <CloseButton on:click={handleClose}/>
</form>
