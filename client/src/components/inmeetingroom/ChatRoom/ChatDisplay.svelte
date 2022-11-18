<script lang="ts">
    import { hmsActions } from '$src/apis/_hms';
    import CloseIcon from '$src/components/_common/icons/CloseIcon.svelte';
    import { message } from '$src/stores/Messages';
    import { hmsMessages } from '$src/stores/_hmsStores';

	
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
    import ChatFilter, { selectedPeers } from './ChatFilter.svelte';
    import { isChatOpened } from './ChatRoom.svelte';

    import {flip} from 'svelte/animate'
    import { fly } from 'svelte/transition'
    import { handlePeerHover, handlePeerLeave } from '../Peers/Peer.svelte';

	let chatBodyElement;
	const scrollToBottom = (instant = false) => {
		if (chatBodyElement) {
			chatBodyElement.scrollTo({top: chatBodyElement.scrollHeight, behavior: instant ? 'auto': 'smooth'});
		}
	}

	let draftMessage = '';
	const sendMessage = async () => {
		if (draftMessage && draftMessage.trim().length > 0) {
			try {
				await hmsActions.sendBroadcastMessage(draftMessage);
				draftMessage = '';
			} catch (err) {
                message.set({type: 'error', message: `Failed to send message - ${err.message}`});
			}
		}
	}

	const formatTime = (time) => {
		return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	// when new message comes auto scroll to bottom if it was already scrolled to bottom
	let autoScroll;
	beforeUpdate(() => {
		// it's scrolled to bottom already
		autoScroll = chatBodyElement && (chatBodyElement.offsetHeight + chatBodyElement.scrollTop) > (chatBodyElement.scrollHeight - 20);
	});
	afterUpdate(() => {
		if (autoScroll) scrollToBottom();
	});

	// scroll to bottom when the component opens for the first time
	onMount(() => scrollToBottom(true));

	const closeChat = () => {isChatOpened.set(false)};
    
</script>

<section class="card card-shadow">
	<div class="Header normal-text">
		<span>Chat</span>
        <ChatFilter />
		<button class="Close" on:click={closeChat}><CloseIcon/></button>
	</div>
	<div bind:this={chatBodyElement} class="chat-messages">
		{#each $hmsMessages as msg (msg.id)}
            <div animate:flip="{{duration: 200}}" class=ChatContainer>
                {#if $selectedPeers[msg.sender]?.isSelected}
                    <div class="chat-message" class:YourMsg={msg.senderName === "You"} in:fly={{ y: 20, duration: 200 }}
                        on:mouseover={handlePeerHover(msg.sender)} on:focus={handlePeerHover(msg.sender)} on:mouseleave={handlePeerLeave}
                    >
                        <p class="chat-message-message">{msg.message}</p>
                        <span class="chat-message-info"><b>{msg.senderName}</b>, {formatTime(msg.time)}</span>
                    </div>
                {/if}
            </div>
		{/each}
		{#if ($hmsMessages.length === 0)}
			<div class="chat-no-messages">
				<p>There are no messages here</p>
			</div>
		{/if}
	</div>
	<form class="flex-center chat-input-container" on:submit|preventDefault={sendMessage}>
		<input bind:value={draftMessage}
							placeholder="Send a message..." autocomplete="off" aria-autocomplete="none" class="chat-input"/>
	</form>

    <div class="SmallSpike" />
</section>

<style>
	section {
        height: 100%;
        width: 100%;
        padding: 15px;
        z-index: 10;
        background-color: #1b2528;
        border-radius: 0.5rem;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 15px;
	}
    .SmallSpike {
        background-color: inherit;
        position: absolute;
        transform: rotate(45deg);
        bottom: 0;
        height: 50px;
        width: 50px;
        z-index: -1;
    }    

	.Header {
        height: 5%;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        gap: 10px;
	}

	.Close {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        margin-left: auto;
        padding: 0.1rem;
        border-radius: 0.3rem;

        height: 30px;
        width: 30px;
	}

	.Close:hover {
        background: rgb(207, 207, 207);
	}

    .ChatContainer {
        width: 100%;
        display: flex;
    }

	.chat-no-messages {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
	}

	.chat-messages {
        display: flex;
        flex-direction: column;
        height: 85%;
        padding-bottom: 1rem;
        overflow-y: scroll;
        gap: 0.5rem;
        align-items: flex-start;
        padding-right: 0.5rem;
        width: 100%;
	}

	.chat-message {
      padding: 0.4rem;
        min-width: 60%;
        max-width: 90%;
        background-color: #e0e0e0;

        border-radius: 0rem 0.5rem 0.5rem 0.5rem;
  }

	.chat-message-message {
      font-size: 1rem;
      line-height: 1.25rem;
	}

	.chat-message-info {
			display: flex;
			align-items: center;
			justify-content: end;
			font-size: .6rem;
			margin-top: 0.1rem;
	}
    .chat-message-info b {
		max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
	}

	.YourMsg {
		margin-left: auto;
        border-radius: 0.5rem 0 0.5rem 0.5rem;
        background-color: lightblue;
	}

	.chat-input-container {
        display: flex;
        align-items: center;
        min-height: 3rem;
        max-height: 6rem;
        background-color: #e0e0e0;
        height: 10%;
        position: relative;
        border: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;

        width: 100%;
	}

	.chat-input {
        width: 100%;
        background-color: transparent;
        line-height: 1rem;
        resize: none;
        font-size: 100%;
        color: rgb(119, 118, 118);
        font-family: inherit;
        border: 0;
        outline: none;
	}
</style>