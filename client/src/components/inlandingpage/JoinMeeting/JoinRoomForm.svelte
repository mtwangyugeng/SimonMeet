<script>
    import { hmsActions } from "$src/apis/_hms";
    import InputWithAnimatedPlaceHolder from "$src/components/_common/InputWithAnimatedPlaceHolder.svelte";
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { tokenStore } from "$src/stores/MeetingRoom";
    import { message } from "$src/stores/Messages";
    import LoadingIcon from "./LoadingIcon.svelte";
    import MeetingRoomIcon from "./MeetingRoomIcon.svelte";
    import NameTagIcon from "./NameTagIcon.svelte";

    let name = '';
    let token = '';

    tokenStore.subscribe(v => token=v)
    

    let isLoading = false;

    async function join() {
        isLoading = true;
        try {
            tokenStore.set(token)
            await hmsActions.join({ userName: name, authToken: token, rememberDeviceSelection: true });
            message.set({type:"info", message: "Succeefully joined the room. "});
        }catch (e) {
            message.set({type:"error", message: e.message});
        }
        isLoading = false;
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
            <RippleButton type="submit" classes={(name==="" || token==="" || isLoading) ? "btn-disabled" : "btn-primary"} height="60px" width="60px">
                {#if isLoading}
                    <LoadingIcon />
                {:else}
                    Join
                {/if}
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

      .Submit :global(svg) {
        width: 40px;
        height: 40px;
      }
  </style>