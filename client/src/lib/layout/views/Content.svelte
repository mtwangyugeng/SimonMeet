<script>
    import JoinRoomForm from "$src/components/inlandingpage/JoinMeeting/JoinRoomForm.svelte";
    import { hmsIsConnected } from "$src/stores/_hmsStores";
    import LandingPage from "./LandingPage/LandingPage.svelte";
    import MeetingPage from "./MeetingPage/MeetingPage.svelte";
</script>
<section>
    <!-- <LandingPage /> -->
    {#if $hmsIsConnected}
        <MeetingPage />
    {:else}
        <JoinRoomForm />
    {/if}
</section>

<style>
    section {
        height: 100%;
        width: 100%;
       overflow: hidden;
    }
</style>