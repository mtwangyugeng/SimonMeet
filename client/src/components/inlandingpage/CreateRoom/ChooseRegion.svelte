<script context=module>
    const ALLOWED_REGION = ['auto', 'us', 'in', 'eu'];

    function regionTextTransform(region) {
        return region === "auto" ? "Auto" : region.toUpperCase();
    }
</script>

<script>
    import ExpandIcon from "$src/components/_common/icons/ExpandIcon.svelte";
    import {fly} from 'svelte/transition'

    export let region = ALLOWED_REGION[0];
    let isOpened = false;

    function handleClick() {
        isOpened = !isOpened
    }

    function handleOptionClick(regionOption) {
        return () => {
            region = regionOption
            isOpened = false;
        }
    }

</script>

<section class="normal-text">
    <label for="RegionOption">Region (Optional):</label>
    <div class=ButtonContainer>
        <button type=button id="RegionOption" on:click={handleClick}>
            {regionTextTransform(region)}
            <div class="Expand" class:Retract={isOpened}> 
                <ExpandIcon /> 
            </div>
        </button>
        {#if isOpened}
            <div class="OptionsContainer card card-shadow" in:fly={{ y: -20, duration: 200 }} out:fly={{ y: -20, duration: 200 }}>
                {#each ALLOWED_REGION as regionOption (regionOption)}
                    <button type=button class="btn-lite Option" on:click={handleOptionClick(regionOption)} class:btn-selected={regionOption === region}>
                        {regionTextTransform(regionOption)}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        padding: 10px;
    }

    label {
        color: rgb(95, 95, 95);
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
    .Retract {
        transform: rotate(180deg);
    }

    .ButtonContainer {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center
    }

    .OptionsContainer {
        display: flex;
        position: absolute;
        bottom: -40px;
        overflow: hidden;
        z-index: 99999;
    }

    .Option{
        border-radius: 0;
    }

    
</style>