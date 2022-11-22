<script>
    import DropinSignIn from "$src/lib/_Dropins/DropinSignIn.svelte";
import FeatureIntro from "./FeatureIntro.svelte";
    import ToDo from "./ToDo.svelte";
    import TopBar from "./TopBar.svelte";

</script>

<section>
    <div class="TopBar">
        <TopBar />
    </div>

    <div class=Content>
        <div class=ToDo>
            <ToDo />
        </div>  

        <div class=FeatureIntro>
            <FeatureIntro />
        </div>
    </div>
</section>

<DropinSignIn />


<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .TopBar {
        height: 50px;
    }
    .Content {
        background-color: lightblue;
        flex: 1;
        display: flex;
    
    }


    .ToDo {
        background-color: pink;
        width: 55%;
    }

    .FeatureIntro {
        background-color: lightblue;
    }

    @media (max-width: 960px) {
        section {
            overflow: auto;
            display:block;
            
        }

        .ToDo {
            background-color: pink;
            width: 100%;
            
        }
        div {
            height: 60vh;
        }
    }
</style>