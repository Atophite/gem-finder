<script lang="ts">
import TileBox from "../components/TileBox.svelte";
import {GemFinderManager} from "../objects/manager";

let games: number = 0

export let manager: GemFinderManager = new GemFinderManager(13,12)

</script>

<div class="container">
    <div class="row text-center">
        {#if manager.gemsLeftInGame === 0}
            <h1 class="mt-4 col">You found all the gems!</h1>
        {:else}
            <h1 class="mt-4 col">Find the {manager.gemsLeftInGame} gems</h1>
        {/if}

    </div>
    <div class="row text-center">
        <p class="mt-1 col">Tries: {games}</p>
    </div>
</div>

<TileBox bind:manager={manager} bind:gameNumber={games}/>



<style>


</style>