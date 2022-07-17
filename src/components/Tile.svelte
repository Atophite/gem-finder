<script>

    export let tileId;

    function clickTile() {
        console.log(`Tile id: ${tileId} is clicked.`)
    }

</script>

<div id="{tileId}" class="tile m-2 col">
    <object data="gem.svg" width="65" height="65"></object>
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

    .tile:hover{
        background-color: #6C6B6B;
        cursor: pointer;
    }

    .tile{
        background-color: #3C3C3C;
    }
</style>