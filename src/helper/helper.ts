
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export function checkContentCount(contentCount: number, type: string): string{
//     if(type === "gem") {
//         if(contentCount > 0) {
//             contentCount--
//             return type
//         }
//     }
//
//     if(type === "bomb") {
//         if(contentCount > 0) {
//             contentCount--
//             return type
//         }
//     }
// }






