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

</script>

<script>
    import CloseButton from "$src/components/_common/CloseButton.svelte";
    import LoadingIcon from "$src/components/_common/icons/LoadingIcon.svelte";
import InputWithAnimatedPlaceHolder from "$src/components/_common/InputWithAnimatedPlaceHolder.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import ChooseRegion from "./ChooseRegion.svelte";
    import { isCreatingRoom } from "./CreateRoom.svelte";

    let name = "";
    let description = "";
    let region;

    let isLoading = false;

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

    <InputWithAnimatedPlaceHolder bind:value={description} placeholder="Description (optional)"/>


    <ChooseRegion bind:region={region}/>



    <span class=Submit>
        <RippleButton type=submit classes={(name==="" || description==="" || isLoading) ? "btn-disabled" : "btn-primary"}>
            {#if isLoading}
                <LoadingIcon />
            {:else}
                Send
            {/if}
        </RippleButton>
    </span>
    <CloseButton on:click={handleClose}/>
</form>

<style>
    h1 {
        font-size: 20px;
    }

    form {
        width: 100%;
        max-width: 400px;;
    }

    .Submit {
        display: flex;
        height: 45px;
    }

    .Submit :global(button){
        width: 100%;

    }
    
    .Submit :global(svg){
        width: 30px;
        height: 30px;
    }
</style>