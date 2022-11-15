<script>
    import JoinRoomForm from "$src/components/inlandingpage/JoinMeeting/JoinRoomForm.svelte";
    import OpeningWords from "$src/components/inlandingpage/OpeningWords/OpeningWords.svelte";

</script>

<section>
    <div class=OpeningWords>
        <OpeningWords />
    </div>
    <div class=JoinRoomForm>
        <JoinRoomForm />
    </div>
</section>


<style>
    section {
        background-color: white;
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .OpeningWords {
        max-width: 400px;
    }

    /* .JoinRoomForm {
        width: 100%;
        background-color: yellow;
    } */

</style>