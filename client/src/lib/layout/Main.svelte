<script>

</script>


<section>
    <span class=TopBar>
        <slot name=topbar>
            Top Bar
        </slot>
    </span>
    
    <span class=Content>
        <slot name=content>
            Views
        </slot>
    </span>
</section>


<style>
    section {
        height: 100vh;
        width: 100vw;
        background-color: #aaa;

        display: flex;
        flex-direction: column;
    }
    .TopBar {
        height: 50px;
        background-color: pink;
    }

    .Content {
        background-color: lightgreen;
        flex: 1;
    }

</style>