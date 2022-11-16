<script>
    import Main from "./lib/layout/Main.svelte";
    import DropinMessage from "./lib/_Dropins/DropinMessage.svelte";
    import { message } from "./stores/Messages";

</script>

<main>
  <Main />
  {#key $message.type + $message.message}
    <DropinMessage/>
  {/key}
</main>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(button), :global(input[type="submit"]), :global(input[type="reset"]) {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
  }
</style>
