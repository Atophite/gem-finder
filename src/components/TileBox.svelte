<script lang="ts">
import Tile from "./Tile.svelte";
import {getRandomInt} from "../helper/helper"
import {onMount} from "svelte";
import TileBox from "./TileBox.svelte";
import {GemFinderManager} from "../objects/manager"


let bombs: number = 13
let gems: number = 12

export let gameNumber = 0


let manager: GemFinderManager = new GemFinderManager(bombs, gems)



function addId(): number {
    return manager.tileId++
}

function restartGame(): void {
    console.log("creating new game")

    manager.restartGame(bombs, gems)
    gameNumber++
}


onMount(async () => {
    // createGame(false)
});

</script>

{#key gameNumber}

    <div id="box" class="container">
        {#each Array(5) as _, x}
            <div class="row">
                {#each Array(5) as _, i}
                    <Tile reloadGame="{() => restartGame()}" tileId="{addId()}" data="{manager.tileMap}"/>
                {/each}
            </div>

        {/each}
    </div>
{/key}





<style>

    @media screen and (min-width: 576px) {
        #box{
            width: 600px;

        }
    }

    @media screen and (max-width: 575px) {
        #box{
            width: 100vw;
        }
    }


    #box{
        background-color: #282828;
    }

</style>