input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.play(music.stringPlayable("E C5 A E A F C5 A ", 160), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . .
        . . # # .
        . # . . .
        . # . . .
        . . # # .
        `)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.play(music.stringPlayable("E C5 A E A F C5 A ", 160), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . .
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        `)
    basic.showNumber(Math.convert(input.temperature(), UnitConversion.CelsiusToFahrenheit))
})
loops.everyInterval(3600000, function () {
    music.setVolume(255)
    music.play(music.stringPlayable("E C5 A E A F C5 A ", 160), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . .
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        `)
    basic.showNumber(Math.convert(input.temperature(), UnitConversion.CelsiusToFahrenheit))
})
