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
        if(v.type === "none" || v.type === "error") return;
        setTimeout(() =>{
            isDisAppearing = true;
        }, 5000)
    })

    $: if(isDisAppearing) {
        setTimeout(() =>{
            message.set({type: "none", message:""})
        }, 500)
    }

    onDestroy(unsub);
</script>

{#if $message.type !== "none"}
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