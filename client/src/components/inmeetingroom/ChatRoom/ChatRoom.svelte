<script context=module>
    import ChatIcon from "$src/components/_common/icons/ChatIcon.svelte";
    import { writable } from "svelte/store";
    import { hmsMessages } from '$src/stores/_hmsStores';

    export const isChatOpened = writable(false)

    
</script>

<script>
    import {fly} from "svelte/transition"
    import { onDestroy } from "svelte";
    let unreadMessagesNumber = 0;
    const unsub = hmsMessages.subscribe( v => {
        if (v.length === 0) return;
        if(!$isChatOpened) unreadMessagesNumber += 1
    })

    function handleClick() {
        isChatOpened.update(v => !v);
        unreadMessagesNumber = 0;
    }

    onDestroy(unsub)
</script>

<button class="btn-control" on:click={handleClick}>
    <ChatIcon/>
    <!-- {#if unreadMessagesNumber !== 0} -->
        {#key unreadMessagesNumber}
        <div class=UnreadMessagesNumber in:fly={{ y: 20, duration: 200 }} class:None = {unreadMessagesNumber===0}>
            {unreadMessagesNumber}
        </div>
        {/key}
    <!-- {/if} -->
</button>

<style>

    .UnreadMessagesNumber {
        position: absolute;
        top: -10px;
        right: -10px;

        background-color: red;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
    }

    .None {
        display: none;
    }
</style>