<script>
    import Video from "./PeerVideo.svelte";
    import {onDestroy} from "svelte";
    import { hmsStore } from "$src/apis/_hms";
    import {selectCameraStreamByPeerID} from "@100mslive/hms-video-store";
    import InitialAvatar from "$src/components/_common/InitialAvatar.svelte";

    export let peer;

    let videoTrack;

    const unsub = hmsStore.subscribe((track) => {
      videoTrack = track;
    }, selectCameraStreamByPeerID(peer.id));

    onDestroy(unsub);
</script>

<div class="peer-container">
    <div class="upper-container">
        {#if (!videoTrack?.enabled || videoTrack?.degraded)}
            <!--show avatar if video is either muted or degraded-->
            <div class="avatar-container">
                <InitialAvatar name={peer.name}/>
            </div>
        {:else}
            <Video isLocal={peer.isLocal} peerId={peer.id} />
        {/if}
    </div>
    
    <div class="peer-name normal-text">
        {peer.name} {peer.isLocal ? "(You)" : ""}
    </div>
</div>

<style>
    .peer-container {
        background-color: rgb(255, 255, 255);
        width: 230px;
        height: 270px;
        display: flex;
        flex-direction: column;

        border-radius: 5px;;

    }
    .peer-name {
        height: 40px;
        font-size: 14px;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: bold;
    }
    .upper-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .avatar-container{
        width: 100px;
        height: 100px;
    }
</style>