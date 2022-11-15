<script>
</script>

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
    }

    .logo {
        
    }
</style>