const fontsName = ['Varela Round', 'Anton', 'Bebas Neue', 'Playwrite NL Guides', 'Oswald', 'Poppins', 'Montserrat', 'Space Mono', 'monospace', 'Helvetica', 'serif', 'cursive', 'Cherry Bomb One', 'Fascinate Inline', 'Monoton', 'Malle', 'Permanent Marker', 'Badeen Display', 'Noto Sans JP', 'Sarina', 'Pixelify Sans', 'Limelight', 'Fascinate', 'Caprasimo', 'Ballet', 'Asset']
const title = document.getElementById('title')
const body = document.body

console.log(fontsName.length)

const random = () => {
    let nRandom = Math.floor(Math.random() * 256)
    return nRandom
}

const colorRandom = () => {
    let color = `rgb(${random()}, ${random()}, ${random()})`
    console.log(color)
    title.style.color = color
}

const randomIndex = () => {
    let getRandomIndex = Math.floor(Math.random() * fontsName.length)
    let getRandomValue = fontsName[getRandomIndex]
    title.style.fontFamily = getRandomValue
    console.log(getRandomValue)
    return getRandomValue
}

body.addEventListener('wheel', randomIndex)
body.addEventListener('wheel', colorRandom)

console.log(randomIndex(fontsName))


