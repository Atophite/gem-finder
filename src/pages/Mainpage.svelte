<script lang="ts">
import TileBox from "../components/TileBox.svelte";

let games: number = 0
let gems: number

</script>

<div class="container">
    <div class="row text-center">
        <h1 class="mt-4 col">Find the 12 gems</h1>
    </div>
    <div class="row text-center">
        <p class="mt-1 col">Tries: {games}</p>
    </div>
</div>

<TileBox bind:gameNumber={games}/>



<style>


</style>