<script>
    export let title;
    export let handleYes, handleNo;
</script>

<section class="card card-shadow card-dropin">
    <h1 class="normal-text">{title}</h1>
    <p>
        <slot />
    </p>
    <div>
        <button class="btn-danger" on:click={handleYes}>
            Yes
        </button>
        <button class="btn-lite" on:click={handleNo}>
            no
        </button>
    </div>
</section>

<style>
    h1 {
        font-size: 18px;
    }
    div {
        display: flex;
        justify-content: space-around;
    }
    button {
        width: 80px;
    }

    section {
        min-width: 300px;
    }
    
    p {
        text-align: center;
    }
</style>