<script context=module>
    import { writable } from 'svelte/store'
    export const isCreatingRoom = writable(false);
</script>

<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { userToken } from '../User/User.svelte';
    import { isSignningIn } from '../User/SignIn/SignIn.svelte';
    import { message } from '$src/stores/Messages';
    import AddMeetingIcon from '$src/components/_common/icons/AddMeetingIcon.svelte';

    function handleClick() {
        isCreatingRoom.set(true);
        if($userToken === "") {
            isSignningIn.set(true)
            message.set({type: "warn", message: "Please log in first to create a room."})
        }
    }
</script>

<span>
    <RippleButton classes="btn-lite" on:click={handleClick}>
        <AddMeetingIcon /> New Meeting
    </RippleButton>
</span>

<style>
    span :global(svg) {
        height: 30px;
        width: 30px;
    }

    span :global(button) {
        display: flex;
        gap: 10px;
    }
</style>