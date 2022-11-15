<script>
import { onDestroy } from "svelte";


    export let value = '';
    $: isFilled = (value !== '');
    console.log(value)

    let isFocused = false;

    export let placeholder = "Placeholder";
    export let type = "text";
    export let name = "";
    export let icon = null

    function handleInput(e) {
        value = e.target.value;
    }

    onDestroy(()=>{
        value = '';
    })
</script>

<span>
    <input class:IconedInput={icon!==null} on:input={handleInput} on:focus={()=>isFocused = true} on:blur={()=>isFocused = false} type={type} name={name}/>
    {#if icon !==null}
        <div class=Icon>
            <svelte:component this={icon} />
        </div>
    {/if}
    <div class=Placeholder class:Iconed={icon!==null} class:Lifted={isFocused || isFilled} class:Focused={isFocused}>
        {placeholder}
    </div>
</span>

<style>
    span {
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
    }


    .Placeholder {
        position: absolute;
        margin-left: 10px;
        transition: 200ms;
        pointer-events: none;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(95, 95, 95);
    }

    .Lifted {
        font-size: 70%;
        transform: translateY(-20px);
        background-color: white;
    }

    .Focused {
        color: rgb(26, 26, 250);
    }

    input {
        height: 100%;
        width: 100%;
        padding-left: 10px;
    }

    .IconedInput {
        padding-left: 40px;
    }

    .Icon {
        position: absolute;
        margin-left: 5px;
    }

    .Iconed {
        margin-left: 40px;
    }

    .Icon :global(svg) {
        width: 30px;
        height: 30px;
    }
</style>




