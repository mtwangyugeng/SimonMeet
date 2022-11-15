import { readable } from 'svelte/store';
import {
	selectIsConnectedToRoom,
	selectIsLocalAudioEnabled,
	selectIsLocalVideoEnabled,
	selectPeers
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