<script>
    import { hmsPeers } from "$src/stores/_hmsStores";
    import Peer from "./Peer.svelte";
</script>

<div class="peers-container">
    {#each $hmsPeers as peer (peer.id)}
        <Peer {peer} />
    {/each}
</div>

<style>

    .peers-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(min-content, 1fr));
        place-items: center;
        grid-gap: 10px;
        background-color: rgb(223, 217, 217);

        max-width: 960px;
    }
</style>