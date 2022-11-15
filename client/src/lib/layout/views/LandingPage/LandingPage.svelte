<script>
    import FeatureIntro from "./FeatureIntro.svelte";
    import ToDo from "./ToDo.svelte";

</script>
<section>
    <div class=ToDo>
        <ToDo />
    </div>  

    <div class=FeatureIntro>
        <FeatureIntro />
    </div>
</section>



<style>
    section {
        background-color: lightblue;
        width: 100%;
        height: 100%;
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