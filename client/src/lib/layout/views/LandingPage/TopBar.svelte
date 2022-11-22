<script>
    import Logo from "$src/components/inlandingpage/Logo/Logo.svelte";
import User from "$src/components/inlandingpage/User/User.svelte";

</script>
<section>
    <div class=Logo>
        <Logo />
    </div>
    <div class=User>
        <User />
    </div>
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        background-color: rgb(236, 239, 255);
        display: flex;
        justify-content: space-between;
    }

    .User {
        padding: 10px;
        height: 100%;
    }

    .Logo {
        width: 200px;
        height: 100%;
    }


</style>