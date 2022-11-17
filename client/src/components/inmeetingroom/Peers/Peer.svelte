<script context=module>
    import {
        selectPeerAudioByID,
        selectDominantSpeaker,
        selectSpeakers,
        selectCameraStreamByPeerID
    } from '@100mslive/hms-video-store';

    const subAudioLevelByPeerId = (peerId, setAudioLevel) => hmsStore.subscribe((level) => setAudioLevel(level), selectPeerAudioByID(peerId));

    console.log('all speakers', hmsStore.getState(selectSpeakers));

    function activeSpeaker(peer, prevPeer) {
        console.log(`previous active speaker - ${prevPeer.name} with role - ${prevPeer.roleName}`);
        console.log(`current active speaker - ${peer.name} with role - ${peer.roleName}`);
    }
    const subActiveSpeaker = () => hmsStore.subscribe(activeSpeaker, selectDominantSpeaker);

    const subVideoTrackByPeerId = (peerId, setTrack) => hmsStore.subscribe((track) => {
      setTrack(track);
    }, selectCameraStreamByPeerID(peerId));
</script>


<script>
    import Video from "./PeerVideo.svelte";
    import {onDestroy} from "svelte";
    import { hmsStore } from "$src/apis/_hms";
    import InitialAvatar from "$src/components/_common/InitialAvatar.svelte";

    export let peer;

    let videoTrack;
    let audioLevel = 0;

    const unsub = subVideoTrackByPeerId(peer.id, (track) => videoTrack = track)
    const unsub2 = subAudioLevelByPeerId(peer.id, (level) => audioLevel = level)

    $: outsideGlow = ((level) => {
        const sigmoid = (num) => 1 / (1 + Math.exp(-num));
        const color = "lightgreen";
        return `box-shadow: ${level ? `0px 0px ${24 * sigmoid(level)}px ${color}, 0px 0px ${16 * sigmoid(level)}px ${color}` : ''};`
    })(audioLevel)

    onDestroy(unsub);
    onDestroy(unsub2);
</script>

<div class="peer-container" style={outsideGlow + "transition: all 0.5s ease-in-out;"}>
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