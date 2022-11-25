<script>
    import InitialAvatar from "$src/components/_common/InitialAvatar.svelte";
    import { userNameF } from "../User.svelte";
    import Logout from "./Logout/Logout.svelte";

</script>

<section>
    <div class=InitialAvatar title={$userNameF}>
        <InitialAvatar name={$userNameF+""}/>
        
    </div>
    <Logout />
</section>


<style>
    section {
        display: flex;
        gap: 10px;
    }
    .InitialAvatar {
        width: 40px;
        height: 40px;
        font-size: 10px;
    }

    .InitialAvatar :global(.avatar) {
        font-size: 20px;
        user-select: none;
    }

    
</style>