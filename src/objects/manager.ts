import {getRandomInt} from "../helper/helper.js";

class GemFinderManager {
    totalOfBombs: number
    totalOfGems: number
    gemsLeftInGame: number

    numberOfContents: number
    contentTypes: string[]
    tileMap: Map<number, object>
    contentMap: Map<number, string>
    tileId: number
    gameOver: boolean




    constructor(bombs, gems) {
        this.totalOfBombs = bombs
        this.totalOfGems = gems
        this.gemsLeftInGame = gems
        this.numberOfContents = bombs + gems
        this.contentTypes = ["bomb", "gem"]
        this.tileMap = new Map<number, object>()
        this.contentMap = new Map<number, string>()
        this.tileId = 0
        this.gameOver = false


        this.addTiles()
        this.addTileContent()

    }

    restartGame(bombs: number, gems: number): void {
        this.totalOfBombs = bombs
        this.totalOfGems = gems
        this.numberOfContents = bombs + gems
        this.contentTypes = ["bomb", "gem"]
        this.tileMap.clear()
        this.contentMap.clear()
        this.tileId = 0
        this.gameOver = false
        this.gemsLeftInGame = gems

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

        let gemsLeftToDivide: number = this.totalOfGems
        let bombsLeftToDivide: number = this.totalOfBombs

        if(content === "gem") {
            if(gemsLeftToDivide > 0) {
                gemsLeftToDivide--
                return "gem"
            }

            else if(bombsLeftToDivide > 0) {
                bombsLeftToDivide--
                return "bomb"
            }
        }

        if(content === "bomb") {
            if(bombsLeftToDivide > 0) {
                bombsLeftToDivide--
                return "bomb"
            }

            else if(gemsLeftToDivide > 0) {
                bombsLeftToDivide--
                return "gem"
            }
        }
    }
}

export {GemFinderManager}


