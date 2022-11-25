<script>
    import DropinCreateRoom from "$src/lib/_Dropins/DropinCreateRoom.svelte";
import DropinLogOut from "$src/lib/_Dropins/DropinLogOut.svelte";
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
<DropinLogOut />
<DropinCreateRoom />

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

        .Content {
            flex-direction: column;
        }

        .ToDo {
            background-color: white;;
            width: 100%;
            padding: 50px 20px;;
        }

        .FeatureIntro {
            width: 100%;
            height: 500px;
        }
    }
</style>