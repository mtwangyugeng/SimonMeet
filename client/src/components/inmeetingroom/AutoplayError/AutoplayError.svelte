<script context=module>
    import { hmsActions, hmsNotifications } from "$src/apis/_hms";
    import { HMSNotificationTypes } from "@100mslive/hms-video-store";
    import { onDestroy } from "svelte";
    import { writable } from "svelte/store";
    export const isThereAutoplayError = writable(true);

    const subForAutoplayError = () => hmsNotifications.onNotification(notification => {
        if(notification.type === HMSNotificationTypes.ERROR) {
            const error = notification.data;
			const code = error?.code;
            if (code === 3008) { // autoplay error
                isThereAutoplayError.set(true);
            }
        }		
    })
</script>

<script>
    import LoadingIcon from "$src/components/_common/icons/LoadingIcon.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    
    let isLoading = false;

	const unblockAudio = async () => {
        isLoading = true;
		await hmsActions.unblockAudio();
		isThereAutoplayError.set(false);
        isLoading = false;
    }

    const unsub = subForAutoplayError();

    onDestroy(unsub);
</script>

<section class="card card-dropin">
	<h2 class="normal-text">Couldn't Play Audio :(</h2>
	<p class="normal-text">
		The browser wants us to get a confirmation for playing the Audio.
        <br/>
		Please allow audio to proceed.
	</p>
    
    <span>
        <RippleButton on:click={unblockAudio} classes='btn-primary'> 
            {#if isLoading}
                <LoadingIcon />
            {:else}
                Allow Audio
            {/if}
        </RippleButton>
    </span>
</section>

<style>
    h2 {
        text-align: center;
    }

    span {
        display: flex;
        justify-content: center;
    }
    span :global(button){
        height: 50px;
        width: 120px;
    }

    span :global(svg) {
        height: 30px;
        width: 30px;
    }
</style>
