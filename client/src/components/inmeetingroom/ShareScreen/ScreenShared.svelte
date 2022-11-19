<script>
	import { onDestroy } from 'svelte';
	import { selectScreenShareByPeerID } from '@100mslive/hms-video-store';
    import { hmsPeerScreenSharing } from '$src/stores/_hmsStores';
    import { hmsStore } from '$src/apis/_hms';
    import ScreenShareVideo from './ScreenShareVideo.svelte';
	let unsub;
	let screenTrack;

	const retrieveScreenTrack = (peerId) => {
		if (unsub) unsub();
		if (!peerId) return;
		unsub = hmsStore.subscribe((track) => {
			screenTrack = track;
		}, selectScreenShareByPeerID(peerId));
	}

	$: retrieveScreenTrack($hmsPeerScreenSharing?.id);

	onDestroy(() => unsub?.());
</script>


<div class='screenshare-container'>
	<ScreenShareVideo mirror={false} trackId={screenTrack?.id} objectFit="contain"/>
</div>

<style>
	.screenshare-container {
        padding: 5px;
        height: 100%;
        width: 100%;
	}
</style> 