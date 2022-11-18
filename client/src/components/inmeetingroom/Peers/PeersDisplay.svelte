<script context=module>
    export function findBestFitLayout({
        containerHeight,
        containerWidth,
        numTiles: n,
        aspectRatio=1
    }) {
        let result = { rows: 0, cols: 0, height: 0, width: 0 };
        if (n <= 0 || containerWidth <= 0 || containerHeight <= 0) {
            return result;
        }
        // aspectRatio ||= 1; // if not passed assume square
        let bestArea = 0; // area = tileWidth * tileHeight

        // brute force from 1 column(and n rows) to n columns(and 1 row)
        for (let cols = 1; cols <= n; cols++) {
            const rows = Math.ceil(n / cols);
            // now that we have number of rows and columns, there are two ways to stack the tiles,
            // - to use the full width(dividing the width evenly between cols)
            // - to use the full height(dividing the height evenly between rows)
            // we'll try with first, and if it's not possible we'll go with second

            // tile width and height if we use the full container width
            let width = Math.floor(containerWidth / cols);
            let height = Math.floor(width / aspectRatio);

            // max height possible is when the total height is divided equally between the rows
            const maxHeightPossible = Math.floor(containerHeight / rows);
            if (height > maxHeightPossible) {
                // using full width is not possible for given number of columns, use full height instead
                height = maxHeightPossible;
                width = Math.floor(maxHeightPossible * aspectRatio);
            }
            const tileArea = width * height;
            if (tileArea > bestArea) {
                bestArea = tileArea;
                result = { rows, cols, height, width };
            }
        }

        return result;
    }
</script>

<script>
    import { hmsPeers } from "$src/stores/_hmsStores";
    import { onMount } from "svelte";
    import Peer from "./Peer.svelte";

    let galleryContainer;

	const arrangeTiles = (parent, peers) => {
		if (!galleryContainer){
			return;
		}
		const containerWidth = parent.getBoundingClientRect().width;
		const containerHeight = parent.getBoundingClientRect().height;
		const numTiles = peers.length;
		let result = findBestFitLayout({containerHeight, containerWidth, numTiles});
		galleryContainer.style.setProperty("--width", `${result.width}px`);
		galleryContainer.style.setProperty("--height", `${result.height}px`);
		galleryContainer.style.setProperty("--cols", `${result.cols}`);
	}

	onMount(() => {
		const resizeObserver = new ResizeObserver(() => arrangeTiles(galleryContainer, $hmsPeers));
		resizeObserver.observe(galleryContainer);
		return () => resizeObserver.unobserve(galleryContainer);
	})

	$: arrangeTiles(galleryContainer, $hmsPeers)

</script>

<div class="gallery-container" bind:this={galleryContainer}>
	<div class="gallery">
		{#each $hmsPeers as peer (peer.id)}
			<div class="tile">
				<Peer {peer} />
			</div>
		{/each}
	</div>
</div>

<style>
    .gallery-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: auto;
    }

    .gallery {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: calc(var(--width) * var(--cols));
    }

    .tile {
        width: var(--width);
        height: var(--height);
				padding: 5px;
    }

</style> 