

let text = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

let possible_red = 12
let possible_green = 13
let game_id_possible = []
let possible_blue = 14
const myfunc = async (data) => {

    const mydata = await data.text()
    // const mydata = text
    // console.log(mydata);
    for (let i of mydata.split("\n")) {
        if (i.length === 0) {
            continue
        }
        let game_id = /Game [\d]+/g
        let game = i.match(game_id)
        let re = /(\d+ blue)/g
        let re2 = /(\d+ red)/g
        let re1 = /(\d+ green)/g
        let blue = i.match(re)
        let green = i.match(re1)
        let red = i.match(re2)

        red = red?.map(x => parseInt(x.split(" ")[0]))

        red = Math.max(...red)
        // red = red?.reduce((total, item) => total + item, 0);
        blue = blue?.map(x => parseInt(x.split(" ")[0]))
        blue = Math.max(...blue)

        // blue = blue?.reduce((total, item) => total + item, 0);

        green = green?.map(x => parseInt(x.split(" ")[0]))

        green = Math.max(...green)



        // green = green?.reduce((total, item) => total + item, 0);
        green ??= 0
        red ??= 0
        blue ??= 0

        // console.log(red);
        // console.log("Game ID ",game,"red ", red,"blue ", blue, "green ", green)
        // console.log(blue);

        // console.log(green);
        // break

        if (red <= possible_red && blue <= possible_blue && green <= possible_green) {

            game_id_possible.push(parseInt(game[0].split(" ")[1]))


        }
    }

    console.log(game_id_possible.reduce((total, item) => total+item, 0))
}


fetch("https://adventofcode.com/2023/day/2/input", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_ga=GA1.2.654334817.1701678041; session=53616c7465645f5fcdf7eff945fa327a6e8aec7b245639611b4ad8f4c0c7b1025a09c54e93aea6f432d08dfdf7088c43ac61c3088cb932b7fcc98bc256ce44a4; _ga_MHSNPJKWC7=GS1.2.1701688221.3.1.1701689414.0.0.0",
    "Referer": "https://adventofcode.com/2023/day/2",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).then((myfunc));

// console.log(text.split(";"))





