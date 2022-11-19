<script>
    import {hmsActions, hmsStore} from '$src/apis/_hms';;
    import {onMount} from "svelte";
    import {selectCameraStreamByPeerID} from "@100mslive/hms-video-store";

    export let isLocal;
    export let peerId;

    let videoElement;

    onMount(() => {
      return hmsStore.subscribe((track) => {
        if (!track || !videoElement) {
          return
        }
        if (track?.enabled) {
          hmsActions.attachVideo(track.id, videoElement);
        } else {
          hmsActions.detachVideo(track.id, videoElement);
        }
      }, selectCameraStreamByPeerID(peerId));
    })
</script>

<video class="peer-video"
    class:local={isLocal}
    bind:this={videoElement}
    autoPlay
    muted
    playsInline>
</video>


<style>
    .peer-video {
        width: 90%;
        height: 90%;
        border-radius: 5px;
        object-fit: cover;
    }

    .peer-video.local {
        transform: scaleX(-1);
    }
</style>