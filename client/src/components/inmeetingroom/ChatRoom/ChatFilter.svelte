<script context=module>
    import { writable } from "svelte/store";
    export const selectedPeers = writable({}) 
</script>

<script>
    import CheckedIcon from "$src/components/_common/icons/CheckedIcon.svelte";
import ExpandIcon from "$src/components/_common/icons/ExpandIcon.svelte";
    import UnCheckedIcon from "$src/components/_common/icons/UnCheckedIcon.svelte";
import { hmsPeers } from "$src/stores/_hmsStores";
    import { onDestroy } from "svelte";
    import { flip } from 'svelte/animate';
    import { fly } from 'svelte/transition'
    import { handlePeerHover, handlePeerLeave, hoveringOnPeer } from "../Peers/Peer.svelte";

    let isOpened = true;

    let isFiltering = false;


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
                isFiltering = !(Object.values(v).reduce((prev, curr) => (prev && curr.isSelected), true));
                return v
            })
        }
    }

</script>

<section>
    <button class="Activate btn-lite" on:click={() => isOpened = !isOpened} class:Filtering={isFiltering}>
        <div class="Expand" class:Retract={isOpened}> 
            <ExpandIcon /> 
        </div>
        <div class=IsFiltering>
            {isFiltering ? "Filtering" : "Everyone"}
        </div>
    </button>
    {#if isOpened}
        <div class="Filter card card-shadow" in:fly={{ y: -20, duration: 200 }} out:fly={{ y: -10, duration: 200 }} >
            {#each selectedPeersId as id (id)}
                <button class={$selectedPeers[id].isSelected ? "btn-selected" : "btn-lite"} animate:flip="{{duration: 200}}" on:click={toggleSelect(id)}
                    on:mouseover={handlePeerHover(id)}  on:focus={handlePeerHover(id)} on:mouseleave={handlePeerLeave}
                >
                    <div class=Checkbox>
                        {#if $selectedPeers[id].isSelected}
                            <CheckedIcon />
                        {:else}
                            <UnCheckedIcon />
                        {/if}
                    </div>
                    <div class="Name">
                        {$selectedPeers[id].name}
                    </div>
                </button>
            {/each}
        </div>
    {/if}
</section>



<style>

    .Activate {
        width: 90px;
        height: 30px;
        border: 1px solid;
        display: flex;
        padding: 0.5em;
        align-items: center;
    }

    .Filtering {
        background-color: rgb(255, 255, 117);
    }
    section {
        position: relative;
        font-size: 11px;
        
    }

    .Filter {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 999;
        width: 100%;

        margin-top: 5px;
        overflow: hidden;
    }
    .Filter button {
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        
    }

    .Filter button :global(svg){
        height: 20px;
        width: 20px;
    }

    .Expand {
        transition: all 0.2s;
        height: 20px;
        width: 20px;
    }
    .Expand :global(svg){
        height: 20px;
        width: 20px;
    }

    .IsFiltering {
        flex: 1;
    }
    .Retract {
        transform: rotate(180deg);
    }

    .Name {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .Checkbox {
        width: 20px;
        height: 20px;;
    }
</style>