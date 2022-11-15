<section>
    <span class=Logo>
        <slot name=logo>
            logo
        </slot>
    </span>

    <span class=Menu>
        <slot name=menu>
            Menu
        </slot>
    </span>
</section>


<style>
    .Logo {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 200px;

        background-color: white;
    }

    section {
        height: 100%;
        width: 100%;
        background-color: red;
        display: flex;
        justify-content: space-between;
    }
    .Menu {
        background-color: green;
        padding: 10px;
        width: 420px;
    }
    @media (max-width: 500px) {
        .Logo {
            display: none;
        }

        .Menu {
            background-color: green;
            padding: 10px;
            width: 100%;
        }
    }
</style>