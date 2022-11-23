<script>
    import Confirmation from "$src/components/_common/Confirmation.svelte";
    import { userToken } from "../../User.svelte";
    import { isLoggingOut } from "./Logout.svelte";

    function handleYes() {
        userToken.set("");
        isLoggingOut.set(false);
    }

    function handleNo() {
        isLoggingOut.set(false);
    }
</script>

<Confirmation title="Log Out" handleYes={handleYes} handleNo={handleNo}>
    Are you sure to log out?
</Confirmation>