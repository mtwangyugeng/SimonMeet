<script>
    import { message } from "$src/stores/Messages";

</script>
{#if $message.type !== "none"}
<section>
    <div class="Message">
        {$message.message}
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

    .Message {
        background-color: pink;
        width: 100%;
        max-width: 600px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgb(194, 9, 9);

        color: rgb(85, 0, 0);
        font-family: Arial, Helvetica, sans-serif;
    }
</style>