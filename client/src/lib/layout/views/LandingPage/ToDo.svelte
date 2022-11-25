<script>
    import CreateRoom from "$src/components/inlandingpage/CreateRoom/CreateRoom.svelte";
import JoinRoomForm from "$src/components/inlandingpage/JoinMeeting/JoinRoomForm.svelte";
    import OpeningWords from "$src/components/inlandingpage/OpeningWords/OpeningWords.svelte";

</script>

<section>
    <div class=OpeningWords>
        <OpeningWords />
    </div>
    <div class=JoinCreate>
        <div class=JoinRoomForm>
            <JoinRoomForm />
        </div>
        <div class=CreateRoom>
            <CreateRoom />
        </div>
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
        max-width: 500px;
    }

    .JoinCreate {
        max-width: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .JoinRoomForm {
        flex: 1;
    }

    @media (max-width:500px) {
        .JoinCreate {
            flex-direction: column-reverse;
            gap: 10px;
        }
        .JoinRoomForm {
            width: 100%;
        }

        .CreateRoom {
            align-self: flex-start;
            padding: 0 10px;
        }
    }
</style>