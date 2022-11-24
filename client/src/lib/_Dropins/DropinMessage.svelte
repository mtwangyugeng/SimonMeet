<script context=module>
    import { hmsNotifications } from '$src/apis/_hms';
	import { HMSNotificationTypes } from '@100mslive/hms-video-store';

		const subForNotifications = (setMessage) => hmsNotifications.onNotification((notification) => {
			switch (notification.type) {
				case HMSNotificationTypes.PEER_JOINED:
                    setMessage('info', `${notification.data.name} joined the room`)
					break;
				case HMSNotificationTypes.PEER_LEFT:
                    setMessage('info', `${notification.data.name} left the room`)
					break;
				case HMSNotificationTypes.DEVICE_CHANGE_UPDATE:
                    setMessage('info', notification.message)
					break;
				case HMSNotificationTypes.ERROR:
					const error = notification.data;
					const code = error?.code;
					console.log("error received ", error);
					if (error.isTerminal) {
                        setMessage('error', `Error, you're disconnected: ${error.message}: ${error.description}`)
					} else if ([3001, 3011].includes(code)) {
						const isSystemError = code === 3011;
						const action = isSystemError
							? "Please enable permissions from system settings"
							: "Please enable permissions from the address bar or browser settings";
                        setMessage('error', `${error.message} => ${action}`)
					} else {
                        setMessage('error', `Error: ${error.message}: ${error.description}`)
					}
					break;
				case HMSNotificationTypes.RECONNECTING:
                    setMessage('warn', 'You are offline for now. While we try to reconnect, please check your internet connection.')
					break;
				case HMSNotificationTypes.RECONNECTED:
                    setMessage('good', 'You are now connected')
					break;
			}
		})


    // timeout stuff
    let dispearingTimout = null;
    let goneTimeOut = null;
</script>


<script>
    import CloseIcon from "$src/components/_common/icons/CloseIcon.svelte";
    import { message } from "$src/stores/Messages";
    import { onDestroy } from "svelte";



    let isDisAppearing = false;


    function handleClose() {
        isDisAppearing = true;
    }

    const unsub = message.subscribe(v => {
        isDisAppearing = false;
        clearTimeout(dispearingTimout)
        clearTimeout(goneTimeOut)

        if(v.type === "none" || v.type === "error" || v.type === "warn") return;
        dispearingTimout = setTimeout(() =>{
            isDisAppearing = true;
        }, 5000)
    })

    $: if(isDisAppearing) {
        goneTimeOut = setTimeout(() =>{
            message.set({type: "none", message:""})
        }, 500)
    }

    const unsub2 = subForNotifications((type, msg) => message.set({type: type, message: msg}) );
    
    onDestroy(unsub);
    onDestroy(unsub2);
</script>

{#if $message.type !== "none"}
{#key $message}
<section >
    <div class={"MessageContainer "+ $message.type} class:Disappear={isDisAppearing} >
        <div class="Message">
            {$message.message}
        </div>
        <div class=CloseContainer>
            <button class=Close on:click={handleClose}>
                <CloseIcon />
            </button>
        </div>
    </div>
</section>
{/key}
{/if}

<style>
    section {
        position: fixed;
        margin-left: auto;
        margin-right: auto;

        width: 100vw;

        display: flex;
        justify-content: center;

        animation: dropdown 0.5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        z-index: 9999;
    }

    @keyframes dropdown {
        from {top: -100px} 
        to {top: 60px}
    }

    .Disappear {
        opacity: 0;
        animation-fill-mode: forwards;
        animation: fadeaway 0.5s;
    }

    @keyframes fadeaway {
        from {opacity: 1} 
        to {opacity: 0}
    }

    .MessageContainer {
        width: 100%;
        max-width: 600px;
        max-height: 600px;
        padding: 10px;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;

        display: flex;
        position: relative;
    }

    .error {
        fill: rgb(85, 0, 0);
        color: rgb(85, 0, 0);
        background-color: pink;
        border: 1px solid rgb(194, 9, 9);
    }

    .info {
        fill: rgb(200, 184, 255);
        color: rgb(200, 184, 255);
        background-color: rgb(114, 91, 145);
        border: 1px solid rgb(87, 102, 126);
    }

    .good {
        fill: rgb(50, 235, 106);
        color: rgb(50, 235, 106);
        background-color: rgb(41, 114, 12);
        border: 1px solid rgb(21, 63, 4);
    }

    .warn {
        fill: rgb(105, 70, 5);
        color: rgb(105, 70, 5);
        background-color: rgb(214, 248, 23);
        border: 1px solid rgb(63, 62, 4);
    }

    .Message {
        flex: 1;
        overflow: auto;
    }

    .CloseContainer {
        height:100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Close {
        width: 30px;
        height: 30px;
    }

    .Close:hover :global(svg){
        
        fill: #fff;
    }

    .Close :global(svg){
        transition: fill 0.3s;
        width: 30px;
        height: 30px;

    }
</style>