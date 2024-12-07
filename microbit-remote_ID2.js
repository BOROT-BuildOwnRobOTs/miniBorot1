let robot_id = 2
if (true) {
    radio.setGroup(robot_id)
}
let status = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        status = 1
        radio.sendValue("forward", 100)
    } else if (input.isGesture(Gesture.LogoDown)) {
        status = 2
        radio.sendValue("back", 100)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        status = 3
        radio.sendValue("left", 100)
    } else if (input.isGesture(Gesture.TiltRight)) {
        status = 4
        radio.sendValue("right", 100)
    } else if (input.buttonIsPressed(Button.AB)) {
        status = 5
        radio.sendValue("dance1", 100)
    } else if (input.buttonIsPressed(Button.A)) {
        status = 6
        radio.sendValue("dance2", 100)
    } else if (input.buttonIsPressed(Button.B)) {
        status = 7
        radio.sendValue("dance3", 100)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        status = 0
        radio.sendValue("stop", 100)
    }
})
basic.forever(function () {
    if (status == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (status == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (status == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (status == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (status == 5) {
        basic.showNumber(0)
    } else if (status == 6) {
        basic.showNumber(1)
    } else if (status == 7) {
        basic.showNumber(2)
    } else if (status == 0) {
        basic.showIcon(IconNames.Happy)
    }
})
