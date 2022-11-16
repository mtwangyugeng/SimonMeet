<span>
    <slot />
</span>

<style>
    span :global(button){
        border-radius: 7px;
        
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    span :global(.btn-primary){
        color: white;
        background-color: blue;
        transition: all 300ms;
    }
    span :global(.btn-disabled){
        color: rgb(71, 71, 71);
        background-color: rgb(216, 216, 216);
        cursor: not-allowed;
        pointer-events: none;
    }

    span :global(.card) {
        border-radius: 8px;
        background-color: white;
    }

    span :global(.card-shadow) {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    span :global(.sub-text) {
        color: #666;
        font-family: Arial, Helvetica, sans-serif;
    }

    span :global(.normal-text) {
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>