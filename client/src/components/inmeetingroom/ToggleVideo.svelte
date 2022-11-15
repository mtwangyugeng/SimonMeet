<script lang="ts">
    import { hmsActions } from "$src/apis/_hms";
    import { hmsIsVideoEnabled } from "$src/stores/_hmsStores";


    function toggleVideo() {
        hmsActions.setLocalVideoEnabled(!$hmsIsVideoEnabled);
    }
</script>


    <button class="btn-control" on:click={toggleVideo}>
        {#if $hmsIsVideoEnabled}
            Stop Video
        {:else}
            Show video
        {/if}
    </button>

<style>
    .btn-control {
        width: 64px;
        height: 64px;

        background-color: #607d8b;

        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
        color: white;

        border: 2px solid #37474f;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
</style>