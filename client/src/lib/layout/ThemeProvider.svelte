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
        padding: 10px;
    }
    span :global(.btn-primary):hover{
        background-color: rgb(53, 53, 248);
    }

    span :global(.btn-disabled){
        color: rgb(71, 71, 71);
        background-color: rgb(216, 216, 216);
        cursor: not-allowed;
        pointer-events: none;
    }

    span :global(.btn-control){
        background-color: rgb(255, 255, 255);
        width: 40px;
        height: 40px;
        padding: 5px;
    }
    
    span :global(.btn-control):hover{
        transition: all 200ms;
        background-color: rgb(230, 230, 230);
    }

    span :global(.btn-setting) {
        color: rgb(71, 71, 71);
        background-color: rgb(216, 216, 216);
        width: 40px;
        height: 40px;
        
    }

    span :global(.btn-danger) {
        color: #fff;
        background-color: red;
        padding: 10px;
    }

    span :global(.btn-danger):hover {
        background-color: rgb(255, 86, 86);
    }

    span :global(.btn-lite) {
        background-color: #fff;
        padding: 10px;
    }

    span :global(.btn-lite):hover {
        background-color: rgb(216, 216, 216);
    }

    span :global(.btn-selected) {
        background-color: rgb(107, 245, 89);
        padding: 10px;
    }

    span :global(.btn-selected):hover {
        background-color: rgb(0, 139, 0);
    }

    span :global(.card) {
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
    }

    span :global(.card-shadow) {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    span :global(.card-dropin) {
        position: relative;
        padding: 15px 20px 20px 20px;

        display: flex;
        flex-direction: column;
        gap: 15px;
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