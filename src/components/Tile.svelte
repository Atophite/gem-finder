<script lang="ts">

    export let tileId: number;

    let enabled: boolean = true;

    function clickTile(): void {
        if(enabled) {
            console.log(`Tile id: ${tileId} is clicked.`)
        }
        else {
            console.log(`Tile id: ${tileId} is not enabled`)
        }

    }

</script>

<div id="{tileId}" on:click={clickTile} class="tile enabled-tile m-2 col">
    <img src="bomb.svg" alt="svg of content" class="mt-2 ">
</div>



<style>

    @media screen and (min-width: 576px) {
        .tile{
            height: 104px;
        }
    }

    @media screen and (max-width: 575px) {
        .tile{
            height: 50px;
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