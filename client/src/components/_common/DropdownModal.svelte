
<section>
    <div class=WindowContainer >
        <slot />
    </div>
</section>

<style>
    section {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;

        animation: turndark 400ms;
        animation-fill-mode: forwards;
    }

    @keyframes turndark {
        from {background-color: rgba(0, 0, 0, 0);}
        to {background-color: rgba(0, 0, 0, 0.5);}
    }

    .WindowContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        

        animation: falldown 400ms;
        animation-fill-mode: forwards;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes falldown {
        from {top: -100%}
        to {top: 0%}
    }

  
</style>