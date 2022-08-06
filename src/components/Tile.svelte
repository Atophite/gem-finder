<script lang="ts">

    export let tileId: number;

    let enabled: boolean = true;

    export let data: Map<number, object>;

    export let gameOver

    export let gems: number;


    function clickTile(): void {
        let object = data.get(tileId)
        if(enabled) {

            enabled = false
            if(object['contentType'] === "bomb") {
                gameOver = true
            }
            else if(object['contentType'] === "gem") {
                gems--
                if(gems === 0) {
                    gameOver = true
                }
            }
        }
    }

</script>

{#if gameOver}

    {#if enabled}
    <div on:click={clickTile} class="tile m-2 col d-flex justify-content-center">
        <img src={data.get(tileId)['contentType']+".svg"} alt="svg of content" class="grey-out-content mt-2">
    </div>
    {:else}
        <div on:click={clickTile} class="tile m-2 col d-flex justify-content-center">
            <img src={data.get(tileId)['contentType']+".svg"}  alt="svg of content" class="content">
        </div>
    {/if}

{:else if enabled}
    <div on:click={clickTile} class="tile enabled-tile m-2 col">

    </div>
{:else if !enabled}

    <div on:click={clickTile} class="tile m-2 col d-flex justify-content-center tile-click">
        <img src={data.get(tileId)['contentType']+".svg"}  alt="svg of content" class="tile-click fade-in rotate content">
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

    .tile-click{
        -webkit-animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

    .fade-in {
        -webkit-animation: fade-in 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;
        animation: fade-in 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;
    }


    .enabled-tile:hover{
        background-color: #6C6B6B;
        cursor: pointer;
    }

    .content{
        width: 100%;
        height: 100%
    }

    .tile{
        background-color: #3C3C3C;
    }

    .rotate{
        transform: rotate(180deg);
    }

    .grey-out-content{
        opacity: 0.3;
        width: 80%;
        height: 80%;
    }



</style>