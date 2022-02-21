let strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.showRainbow(180, 90)
basic.pause(1000)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 17; index++) {
            strip.rotate(-1)
            strip.show()
            basic.pause(100)
        }
    }
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 17; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    }
})
