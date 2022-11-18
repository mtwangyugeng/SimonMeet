<script>
    import ChatDisplay from "$src/components/inmeetingroom/ChatRoom/ChatDisplay.svelte";
    import ChatRoom, { isChatOpened } from "$src/components/inmeetingroom/ChatRoom/ChatRoom.svelte";
    import DeviceSettings from "$src/components/inmeetingroom/DeviceSettings/DeviceSettings.svelte";
    import LeaveRoom from "$src/components/inmeetingroom/LeaveRoom/LeaveRoom.svelte";
    import ShareLink from "$src/components/inmeetingroom/ShareLink/ShareLink.svelte";
    import ToggleAudio from "$src/components/inmeetingroom/ToggleAudio.svelte";
    import ToggleVideo from "$src/components/inmeetingroom/ToggleVideo.svelte";
    import { fly } from 'svelte/transition'
</script>
<section>
    <div class=Divider>

    </div>
    <div class=Divider>
        <ToggleAudio />
        <ToggleVideo />
        <DeviceSettings />
        <LeaveRoom />
    </div>
    <div class="Divider">
        <div class="ChatContainer">
            <ChatRoom />
            {#if $isChatOpened}
                <div class=ChatRoom in:fly={{ y: 20, duration: 200 }} out:fly={{ y: 20, duration: 200 }}>
                    <ChatDisplay />
                </div>
            {/if}
        </div>
       <ShareLink />
    </div>
</section>

<style>
    section {
        background-color: rgb(114, 114, 114);
        display: flex;
        height: 100%;
        align-items: center;
    }
    .Divider {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }



    .ChatContainer {
        position: relative;
    }

    .ChatRoom {
        position: absolute;
        bottom: 50px;

        left: -155px;
        width: 350px;
        height: 500px;
    }

    @media( max-width: 970px) {
        .ChatRoom {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        }
    }

</style>