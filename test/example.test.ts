import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style

import {GemFinderManager} from "../src/objects/manager.js";


describe("test tileMap", () => {
    let bombs = 13
    let gems = 12

    let bombsCount = 0
    let gemsCount = 0

    let manager

    for(let i=0; i<10;i++) {


        manager = new GemFinderManager(13,12)
        it(`there should be ${bombs} bombs and ${gems} gems`, () => {
            // @ts-ignore
            for(let x of manager.tileMap) {
                if(x[1]['contentType'] === 'bomb') {
                    bombsCount++
                }
                else if (x[1]['contentType'] === 'gem') {
                    gemsCount++
                }
            }
            assert.equal(bombsCount, bombs);
            assert.equal(gemsCount, gems);
            bombs = 13
            gems = 12

            bombsCount = 0
            gemsCount = 0
        });
    }

})

describe('Simple Math Test', () => {
    it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});