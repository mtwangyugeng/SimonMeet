<script context=module>
    import { message } from "$src/stores/Messages";
    import { get } from "svelte/store";
    import { userToken } from "../User/User.svelte";

    const ROOM_URL = URL_ORIGN + '/rooms/api'
    
    //CRUDs
    function postCreateRoom(name, description, region, access_token) {
        console.error("ACCESS_TOKEN: ", access_token)
        return fetch(ROOM_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: JSON.stringify({ name, description, region })
        })

    }

    async function handleCreateRoom(name, description, region) {
        let failed = false;
        const res = await postCreateRoom(name, description, region, get(userToken));
        if(res.status !== 201){
            const errorJson = await res.text();
            message.set({type: "error", message: "Create Room error: " + errorJson});
            failed = true
        }
        else {
            const reader = await res.json();
            tokenStore.set(reader.room_token)
            message.set({type: "good", message: "Successfully created a room! Now you can join the room with the token we just entered for you :)"});
        }

        return failed;

    }

</script>

<script>
    import CloseButton from "$src/components/_common/CloseButton.svelte";
    import LoadingIcon from "$src/components/_common/icons/LoadingIcon.svelte";
    import InputWithAnimatedPlaceHolder from "$src/components/_common/InputWithAnimatedPlaceHolder.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";

    import ChooseRegion from "./ChooseRegion.svelte";
    import { isCreatingRoom } from "./CreateRoom.svelte";
    import { handleJoin } from "../JoinMeeting/JoinRoomForm.svelte";
    import { tokenStore } from "$src/stores/MeetingRoom";
    import { URL_ORIGN } from "$src/apis/urls";

    let name = "";
    let description = "";
    let region;

    let isLoading = false;

    async function handleSubmit() {
        isLoading = true;
        let failed = null;

        try{
            failed = await handleCreateRoom(name, description, region)
        } catch(e) {
            message.set({type: "error", message: "Create Room error: " + e.message});
        }
        

        if (failed === false) {
            handleClose()
        }

        isLoading = false;
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