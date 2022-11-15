<span>
    <slot />
</span>

<style>
    span :global(button){
        border-radius: 7px;
        transition: all 300ms;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    span :global(.btn-primary){
        color: white;
        background-color: blue;
    }
    span :global(.btn-disabled){
        color: rgb(71, 71, 71);
        background-color: rgb(216, 216, 216);
        cursor: not-allowed;
        pointer-events: none;
    }
</style>