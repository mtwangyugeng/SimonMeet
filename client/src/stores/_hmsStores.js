import { readable } from 'svelte/store';
import {
	selectIsConnectedToRoom,
	selectIsLocalAudioEnabled,
	selectIsLocalVideoEnabled,
	selectPeers,
	selectDevices,
	selectLocalMediaSettings,
	selectHMSMessages,
	selectIsLocalScreenShared,
	selectIsSomeoneScreenSharing,
	selectPeerScreenSharing
} from '@100mslive/hms-video-store';
import { hmsStore } from '$src/apis/_hms';


function hmsToSvelteStore(selector){
	return readable(hmsStore.getState(selector), (set) => {
		return hmsStore.subscribe(set, selector);
	});
}

export const hmsIsConnected = hmsToSvelteStore(selectIsConnectedToRoom);
export const hmsPeers = hmsToSvelteStore(selectPeers);
export const hmsIsAudioEnabled = hmsToSvelteStore(selectIsLocalAudioEnabled);
export const hmsIsVideoEnabled = hmsToSvelteStore(selectIsLocalVideoEnabled);

export const hmsAllDevices = hmsToSvelteStore(selectDevices);
export const hmsSelectedDevices = hmsToSvelteStore(selectLocalMediaSettings);

export const hmsMessages = hmsToSvelteStore(selectHMSMessages);

// Screenshare related
export const hmsAmIScreenSharing = hmsToSvelteStore(selectIsLocalScreenShared);
export const hmsIsAnyoneScreenSharing = hmsToSvelteStore(selectIsSomeoneScreenSharing);
export const hmsPeerScreenSharing = hmsToSvelteStore(selectPeerScreenSharing);