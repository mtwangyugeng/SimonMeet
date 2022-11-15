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
        <span class=Name>
          <InputWithAnimatedPlaceHolder bind:value={name} name="name" placeholder="What's your name?" icon={NameTagIcon}/>
        </span>
        <span class=Token>
          <InputWithAnimatedPlaceHolder bind:value={token} name="token" placeholder="What is the token for your room?" icon={MeetingRoomIcon}/>
        </span>
        <span class=Submit>
            <RippleButton type="submit" classes={(name==="" || token==="") ? "btn-disabled" : "btn-primary"} height="60px" width="60px">
                Join
            </RippleButton>
        </span>
  </form>
  
  <style>
  
      form {
        width: 450px;
        padding: 20px;

        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        border-radius: 8px;

        display: grid;
        grid-template-areas: 
        'name name name name name submit'
        'token token token token token submit'
        ;
        gap: 10px;
      }

      .Name {
        grid-area: name;
      }

      .Token {
        grid-area: token;
      }

      .Submit {
        grid-area: submit;
        display: flex;
        justify-content: center;
        align-items: center;
      }

  </style>