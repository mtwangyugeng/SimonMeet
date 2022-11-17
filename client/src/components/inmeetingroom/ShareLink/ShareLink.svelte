<script>
    import RippleButton from "$src/components/_common/RippleButton.svelte";
    import { tokenStore } from "$src/stores/MeetingRoom";
    import { message } from "$src/stores/Messages";
    import ShareIcon from "./ShareIcon.svelte";

    function copyShareLink() {
      const url = `${window.location.origin}#&token=${$tokenStore}`;
      navigator.clipboard.writeText(url).then(function() {
        message.set({type: "good", message:'Copied link to clip board '});
      }, function(err) {
        message.set({type: "error", message:'failed ot copy link to clip board '+ err.message});
      });
    }
</script>

<RippleButton classes={"share-btn"} on:click={copyShareLink}>
    <ShareIcon/>
</RippleButton>

