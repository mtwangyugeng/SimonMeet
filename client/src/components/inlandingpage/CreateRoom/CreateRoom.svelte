<script context=module>
    import { writable } from 'svelte/store'
    export const isCreatingRoom = writable(false);
</script>

<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { userToken } from '../User/User.svelte';
    import { isSignningIn } from '../User/SignIn/SignIn.svelte';
    import { message } from '$src/stores/Messages';

    function handleClick() {
        isCreatingRoom.set(true);
        if($userToken === "") {
            isSignningIn.set(true)
            message.set({type: "warn", message: "Please log in first to create a room."})
        }
    }
</script>


<RippleButton on:click={handleClick}>
    New Meeting
</RippleButton>