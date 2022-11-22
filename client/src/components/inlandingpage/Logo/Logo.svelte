<svg viewBox="0 0 1320 300">
    <text x="25%" y="50%" dy=".35em" text-anchor="middle">
		SIMON 
	</text>
	<text class=AnimatedText x="60%" y="50%" dy=".35em" text-anchor="middle">
		MEET
	</text>
</svg>	

<style>
    svg {
        font-family: Arial, sans-serif;
        width: 100%; height: 100%;
        user-select: none;

        display: flex;
    }

    text {
        stroke-width: 2;
        font-size: 140px;
        font-weight: bold;
    }

    .AnimatedText {
        animation: stroke 5s;
        animation-fill-mode: forwards;
    }
    @keyframes stroke {
        0%   {
            fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
            stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
        }
        70%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); }
        80%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
        100% {
            fill: #365fa0; stroke: #365fa0;; 
            stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
        }
    }
</style>