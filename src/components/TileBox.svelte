<script lang="ts">
import Tile from "./Tile.svelte";
import {getRandomInt} from "../helper/helper"
import {onMount} from "svelte";
import TileBox from "./TileBox.svelte";


let bombs: number = 13
let gems: number = 12

let numberOfContents: number = bombs+gems

let contentTypes: string[] = ["bomb", "gem"]

let tileMap

let contentMap

let tileId: number = 0;

let fail = false


/**
* adds an id when a Tile.svelte is being made.
* @returns tileId
*/
function addId(): number {
    return tileId++
}

function addTiles(): void {
    for(let i=0; i <= numberOfContents-1; i++) {
        tileMap.set(i ,{clicked: false, hasContent: false, contentType: null})
        console.log("adding tile")
    }


}

/**
 * Gets the type of a content (Gem or Bomb)
 * -1 the content type. (gems or bombs)
 * @returns content
 */
function getContentType(): string {
    let randomInt: number = getRandomInt(0,1)
    let content: string = contentTypes[randomInt]

    if(content === "gem") {
        if(gems > 0) {
            gems--
            return content
        }

        else if(bombs > 0) {
            bombs--
            return content
        }
    }

    if(content === "bomb") {
        if(bombs > 0) {
            bombs--
            return content
        }

        else if(gems > 0) {
            gems--
            return content
        }
    }

}


function addTileContent(): void {
    let randomInt: number
    let contentType: string

    while(contentMap.size !== numberOfContents) {
        randomInt = getRandomInt(0, numberOfContents-1)

        if(tileMap.get(randomInt)["hasContent"] === false) {
            contentType = getContentType()
            contentMap.set(randomInt, contentType)
            tileMap.set(randomInt, {clicked: false, hasContent: true, contentType: contentType})
        }
    }

}

export const createGame = () => {
    console.log("creating new game")
    tileMap = new Map<number, object>()
    contentMap = new Map<number, string>()
    addTiles()
    addTileContent()
}

onMount(async () => {
    createGame()
});

</script>


<div id="box" class="container">
    {#each Array(5) as _, x}
        <div class="row">
            {#each Array(5) as _, i}
                <Tile tileId="{addId()}" data="{tileMap}"/>
            {/each}

        </div>

    {/each}
</div>



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

    .hide {
        display: none
    }
</style>