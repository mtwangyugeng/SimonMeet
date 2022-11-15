<script>
    import Content from "./views/Content.svelte";
    import TopBar from "./TopBar.svelte";
    import ThemeProvider from "./ThemeProvider.svelte";
</script>

<ThemeProvider>
    <section>
        <span class=TopBar>
            <TopBar />
        </span>
        
        <span class=Content>
            <Content />
        </span>
    </section>
</ThemeProvider>


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
        overflow: hidden;
        background-color: lightgreen;
        flex: 1;
    }

</style>