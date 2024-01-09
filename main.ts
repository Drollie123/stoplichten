input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (randint(0, 7)))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
