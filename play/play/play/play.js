let idsFromNotionPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let randomNumberArray = [];


while (randomNumberArray.length < idsFromNotionPages.length) {
    let rand = Math.floor(Math.random() * idsFromNotionPages.length + 1)
    if (!randomNumberArray.includes(rand)) {
        randomNumberArray.push(rand)
    }
}

console.log('grps after loops: ', randomNumberArray);