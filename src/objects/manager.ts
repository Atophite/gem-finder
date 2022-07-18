import {getRandomInt} from "../helper/helper";

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
        this.tileId = 0

        this.addTiles()
        this.addTileContent()

    }

    restartGame(bombs: number, gems: number): void {
        this.bombs = bombs
        this.gems = gems
        this.numberOfContents = bombs + gems
        this.contentTypes = ["bomb", "gem"]
        this.tileMap.clear()
        this.contentMap.clear()
        this.tileId = 0

        this.addTiles()
        this.addTileContent()


    }


    addTiles(): void {
        for(let i=0; i <= this.numberOfContents-1; i++) {
            this.tileMap.set(i ,{clicked: false, hasContent: false, contentType: null})
        }
    }

    addTileContent(): void {
        let randomInt: number
        let contentType: string

        while(this.contentMap.size !== this.numberOfContents) {
            randomInt = getRandomInt(0, this.numberOfContents-1)

            if(this.tileMap.get(randomInt)["hasContent"] === false) {
                contentType = this.getContentType()
                this.contentMap.set(randomInt, contentType)
                this.tileMap.set(randomInt, {clicked: false, hasContent: true, contentType: contentType})
            }
        }
    }

    getContentType(): string {
        let randomInt: number = getRandomInt(0,1)
        let content: string = this.contentTypes[randomInt]

        if(content === "gem") {
            if(this.gems > 0) {
                this.gems--
                return content
            }

            else if(this.bombs > 0) {
                this.bombs--
                return content
            }
        }

        if(content === "bomb") {
            if(this.bombs > 0) {
                this.bombs--
                return content
            }

            else if(this.gems > 0) {
                this.gems--
                return content
            }
        }
    }
}

export {GemFinderManager}