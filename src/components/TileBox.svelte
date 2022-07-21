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

let boxIsClicked: boolean = false



function addId(): number {
    return manager.tileId++
}

function restartGame(): void {
    console.log("creating new game")

    manager.restartGame(bombs, gems)
    gameNumber++
    boxIsClicked = false
}

function gameOver(): void{
    if(manager.gameOver) {
        if(boxIsClicked) {
            restartGame()
        }
        else {
            boxIsClicked = true
        }

    }
}


onMount(async () => {
    // createGame(false)
});

</script>

{#key gameNumber}
    <div id="box" on:click={gameOver} class="container tile-box">
        {#each Array(5) as _, x}
            <div class="row">
                {#each Array(5) as _, i}
                    <Tile reloadGame="{gameOver}" tileId="{addId()}" data="{manager.tileMap}" bind:gameOver="{manager.gameOver}"/>
                {/each}
            </div>
        {/each}
    </div>

{/key}





<style>

    @media screen and (min-width: 576px) {
        .tile-box{
            width: 600px;

        }
    }

    @media screen and (max-width: 575px) {
        .tile-box{
            width: 100vw;
        }
    }


    .tile-box{
        background-color: #282828;
    }



</style>