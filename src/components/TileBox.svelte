<script>


import Tile from "./Tile.svelte";

let tileId = 0;

function addId() {
    return tileId++
}
</script>

<div id="box" class="container">
    {#each Array(5) as _, x}
        <div class="row">
            {#each Array(5) as _, i}
                <Tile tileId="{addId()}"/>
            {/each}

        </div>

    {/each}

</div>

<style>

    @media screen and (min-width: 576px) {
        #box{
            width: 600px;
            height: 600px;
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