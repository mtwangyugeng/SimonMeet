<script>
    import { hmsActions } from "$src/apis/_hms";
    import { isChangingDeviceSettings } from "$src/stores/MeetingRoom";
    import { hmsAllDevices, hmsSelectedDevices } from "$src/stores/_hmsStores";
    import CloseIcon from "./CloseIcon.svelte";


    const changeVideo = (e) => hmsActions.setVideoSettings({deviceId: e.target.value});
    const changeAudio = (e) => hmsActions.setAudioSettings({deviceId: e.target.value});
    const changeSpeaker = (e) => hmsActions.setAudioOutputDevice(e.target.value);


    function handleClose() {
        isChangingDeviceSettings.set(false)
    }
</script>

<section class="card card-shadow">
    <button class=CloseButton on:click={handleClose}>
        <CloseIcon />    
    </button>

    <h1 class="normal-text">Device Settings</h1>
    <div class="selection">
        <label class="sub-text" for="video">Video</label>
        <select value={$hmsSelectedDevices.videoInputDeviceId} on:change={changeVideo} id=video>
            {#each $hmsAllDevices.videoInput as value (value.deviceId)}<option value={value.deviceId}>{value.label}</option>{/each}
        </select>
    </div>
    <div class="selection">
        <label class="sub-text" for="audio">Audio</label>
        <select value={$hmsSelectedDevices.audioInputDeviceId} on:change={changeAudio} id=audio>
            {#each $hmsAllDevices.audioInput as value (value.deviceId)}<option value={value.deviceId}>{value.label}</option>{/each}
        </select>
    </div>
    <div class="selection">
        <label class="sub-text" for="speaker">Speaker</label>
        <select value={$hmsSelectedDevices.audioOutputDeviceId} on:change={changeSpeaker} id=speaker>
            {#each $hmsAllDevices.audioOutput as value (value.deviceId)}<option value={value.deviceId}>{value.label}</option>{/each}
        </select>
    </div>
</section>


<style>
    section {
        position: relative;
        padding: 15px 20px 20px 20px;

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .CloseButton {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .CloseButton:hover {
        filter: brightness(1.75);
    }

    .CloseButton :global(svg) {
        width: 30px;
        height: 30px;
    }

    h1 {
        text-align: center;
        font-size: 23px;
    }

    label {
        font-weight: bold;
        font-size: 15px;
        width: 70px
    }

    .selection {
        display: flex;
        justify-content: space-between;
    }

    select {
        width: 80%;
    }
</style>
