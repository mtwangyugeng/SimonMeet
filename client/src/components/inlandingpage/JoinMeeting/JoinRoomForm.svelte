<script>
    import { hmsActions } from "$src/apis/_hms";
    import InputWithAnimatedPlaceHolder from "$src/components/_common/InputWithAnimatedPlaceHolder.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import MeetingRoomIcon from "./MeetingRoomIcon.svelte";
    import NameTagIcon from "./NameTagIcon.svelte";

    let name = '';
    let token = '';
  
    function join() {
        console.log("submit???")
        hmsActions.join({ userName: name, authToken: token, rememberDeviceSelection: true });
    }

  </script>
  
  <form on:submit|preventDefault={join}>
      <h2>Join a room.</h2>
          <InputWithAnimatedPlaceHolder bind:value={name} name="name" placeholder="What's your name?" icon={NameTagIcon}/>
          <InputWithAnimatedPlaceHolder bind:value={token} name="token" placeholder="What is the token for your room?" icon={MeetingRoomIcon}/>
        <RippleButton type="submit" classes={(name==="" || token==="") ? "btn-disabled" : "btn-primary"}>
            Join
        </RippleButton>
  </form>
  
  <style>
  
      form {
        width: 450px;
        padding: 20px;

        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        gap: 10px;
      }

  </style>