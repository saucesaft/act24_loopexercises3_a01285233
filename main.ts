input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # .
            . # . # #
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # # .
            . # . . #
            `)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . # # # .
            . # . # .
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . # # # .
            . # . # .
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let counter = 0; counter <= 4; counter++) {
        led.plot(counter, 2)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Surprised)
    }
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
}
