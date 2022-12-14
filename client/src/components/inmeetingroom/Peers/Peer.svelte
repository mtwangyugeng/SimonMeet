<script context=module>
    import {
        selectPeerAudioByID,
        selectDominantSpeaker,
        selectSpeakers,
        selectCameraStreamByPeerID,
        selectIsPeerAudioEnabled
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

    const subAudioEnabledByPeerId = (peerId, setAudioEnabled) => hmsStore.subscribe(enabled => {
        setAudioEnabled(enabled)
    }, selectIsPeerAudioEnabled(peerId));



    // hovering on peer
    export const hoveringOnPeer = writable("")
    hoveringOnPeer.subscribe(v => console.error(v))
    export function handlePeerHover(PeerId) {
        return () => {
            hoveringOnPeer.set(PeerId)
        }
    }

    export function handlePeerLeave() {
        hoveringOnPeer.set("")
    }
</script>


<script>
    import Video from "./PeerVideo.svelte";
    import {onDestroy} from "svelte";
    import { hmsStore } from "$src/apis/_hms";
    import InitialAvatar from "$src/components/_common/InitialAvatar.svelte";
    import ConnectionQuality from './ConnectionQuality.svelte';
    import MicOffIcon from "$src/components/_common/icons/MicOffIcon.svelte";
    import MicIcon from "$src/components/_common/icons/MicIcon.svelte";
    import { writable } from 'svelte/store';

    export let peer;
    let videoTrack;
    let audioLevel = 0;
    let isAudioEnabled = false;

    const unsub = subVideoTrackByPeerId(peer.id, (track) => videoTrack = track)
    const unsub2 = subAudioLevelByPeerId(peer.id, (level) => audioLevel = level)
    const unsub3 = subAudioEnabledByPeerId(peer.id, (enabled) => isAudioEnabled = enabled)

    $: outsideGlow = ((level) => {
        const sigmoid = (num) => 1 / (1 + Math.exp(-num));
        const color = "lightgreen";
        return `box-shadow: ${level ? `0px 0px ${24 * sigmoid(level)}px ${color}, 0px 0px ${16 * sigmoid(level)}px ${color}` : ''};`
    })(audioLevel)

    onDestroy(() => {unsub(); unsub2(); unsub3()});

</script>


<div class="video-container" style={outsideGlow + "transition: all 0.5s ease-in-out;"} class:PeerHovering={peer.id === $hoveringOnPeer}>
    {#if (!videoTrack?.enabled || videoTrack?.degraded)}
        <!--show avatar if video is either muted or degraded-->
        <div class="avatar-container">
            <InitialAvatar name={peer.name}/>
        </div>
    {:else}
        
        <Video isLocal={peer.isLocal} peerId={peer.id} />
        
    {/if}
    <div class="ConnectionQuality">
        <ConnectionQuality peerId={peer.id}/>
    </div>

    <div class="MicState">
        {#if !isAudioEnabled}
            <MicOffIcon />
        {:else}
            <MicIcon />
        {/if}
    </div>
    <div class="peer-name normal-text">
        <span>{peer.name}</span> <div>{peer.isLocal ? " (You)" : ""}</div>
    </div>
</div>


<style>
    .peer-name {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.25rem;

        height: 40px;
        font-size: 14px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        gap: 5px;
    }
    .peer-name span {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .video-container {
        background-color: rgb(255, 255, 255);
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
    }
    .avatar-container{
        max-width: 100px;
        max-height: 100px;
        width: 80%;
        aspect-ratio: 1;
    }

    .ConnectionQuality {
        position: absolute;
        bottom: 10px;
        left: 10px;

        height: 27px;
        width: 27px;
    }

    .MicState {
        position: absolute;
        top: 5px;
        right: 5px;

        width: 30px;
        height: 30px;
        background-color: rgb(247, 71, 71);
        border-radius: 50%;
        fill: white;
    }

    .PeerHovering{
        transition: all 0.1s;
        padding: 20px;
        background-color: rgb(255, 129, 129);
    }

</style>