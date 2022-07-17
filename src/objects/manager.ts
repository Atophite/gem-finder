export {}
class GemFinderManager {
    bombs: number
    gems: number

    numberOfContents: number

    contentTypes: string[]

    tileMap: Map<number, object>

    contentMap: Map<number, string>

    tileId: number


    constructor(bombs, gems) {
        this.bombs = bombs
        this.gems = gems
        this.numberOfContents = bombs + gems
        this.contentTypes = ["bomb", "gem"]
        this.tileMap = new Map<number, object>()
        this.contentMap = new Map<number, string>()

    }


    addTiles(): void {
        for(let i=0; i <= this.numberOfContents-1; i++) {
            this.tileMap.set(i ,{clicked: false, hasContent: false, contentType: null})
            console.log("adding tile")
        }


    }
}