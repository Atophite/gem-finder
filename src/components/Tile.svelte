<script lang="ts">

    export let tileId: number;

    let enabled: boolean = true;

    export let data: Map<number, object>;

    export let reloadGame = () => {}

    function clickTile(): void {
        let object = data.get(tileId)
        if(enabled) {

            console.log(`Tile id: ${tileId} is clicked.`)
            console.log(object['contentType'])
            enabled = false
            if(object['contentType'] === "bomb") {
                reloadGame()
            }
            return object['contentType']
        }
        else {
            console.log(`Tile id: ${tileId} is not enabled`)
            console.log(data.get(tileId))
        }

    }

    console.log(data.get(0))
</script>

{#if enabled}
    <div on:click={clickTile} class="tile enabled-tile m-2 col">

    </div>
    {:else}

    <div on:click={clickTile} class="tile m-2 col">
        {#if !enabled}
            <img src={data.get(tileId)['contentType']+".svg"}  alt="svg of content" class="mt-2 mb-2 ">
        {/if}

    </div>
    {/if}




<style>


    @media screen and (min-width: 576px) {
        .tile{
            height: 104px;
        }
    }

    @media screen and (max-width: 575px) {
        .tile{
            height: 90px;
        }
    }

    @media screen and (max-width: 475px) {
        .tile{
            height: 50px
        }
    }

    @media screen and (max-width: 300px) {
        .tile{
            height: 40px
        }
    }


    .enabled-tile:hover{
        background-color: #6C6B6B;
        cursor: pointer;
    }

    .tile{
        background-color: #3C3C3C;
    }
</style>