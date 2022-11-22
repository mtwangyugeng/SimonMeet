<script context=module>
    import { writable } from "svelte/store";
    import LoggedInUser from "./LoggedInUser/LoggedInUser.svelte";
    import SignIn from "./SignIn/SignIn.svelte";

    export const userToken = writable("");
</script>

<section>
    {#if $userToken === ""}
        <SignIn />
    {:else}
        <LoggedInUser />
    {/if}
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>