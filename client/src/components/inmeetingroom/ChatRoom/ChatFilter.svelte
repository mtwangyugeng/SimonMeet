<script context=module>
    import { writable } from "svelte/store";
    export const selectedPeers = writable({}) 
</script>

<script>
    import { hmsPeers } from "$src/stores/_hmsStores";
    import { onDestroy } from "svelte";
    import { flip } from 'svelte/animate';

    let isOpened = true;

    $: isFiltering = false


    $: selectedPeersId = Object.keys($selectedPeers);

    const unsub = hmsPeers.subscribe(v => {
        const newSelectedPeers = $selectedPeers;
        v.map(({id, name}) => {
            if ($selectedPeers[id] !== undefined) newSelectedPeers[id] = $selectedPeers[id];
            else newSelectedPeers[id] = {name: name, isSelected: true};
        })
        selectedPeers.set(newSelectedPeers);
    })
    onDestroy(unsub)

    function toggleSelect(PeerId) {
        return () => {
            selectedPeers.update( v=> {
                v[PeerId].isSelected = !v[PeerId].isSelected;
                return v
            })
        }
    }
</script>

<section>
    <button on:click={() => isOpened = !isOpened}>
        {isFiltering ? "Filtering" : "Everyone"}
    </button>
    {#if isOpened}
        <div class="Filter card card-shadow" >
            {#each selectedPeersId as id (id)}
                <button class={$selectedPeers[id].isSelected ? "btn-selected" : "btn-lite"} animate:flip="{{duration: 200}}" on:click={toggleSelect(id)}>
                    {$selectedPeers[id].name} ({id})
                </button>
            {/each}
        </div>
    {/if}
</section>

<style>
    .Filter {
        position: absolute;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        z-index: 999;
    }
</style>