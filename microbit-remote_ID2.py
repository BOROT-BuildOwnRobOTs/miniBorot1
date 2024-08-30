robot_id = 2
if True:
    radio.set_group(robot_id)
status = 0
basic.show_icon(IconNames.HAPPY)

def on_forever():
    global status
    if input.is_gesture(Gesture.LOGO_UP):
        status = 1
        radio.send_value("forward", 100)
    elif input.is_gesture(Gesture.LOGO_DOWN):
        status = 2
        radio.send_value("back", 100)
    elif input.is_gesture(Gesture.TILT_LEFT):
        status = 3
        radio.send_value("left", 100)
    elif input.is_gesture(Gesture.TILT_RIGHT):
        status = 4
        radio.send_value("right", 100)
    elif input.button_is_pressed(Button.AB):
        status = 5
        radio.send_value("dance1", 100)
    elif input.button_is_pressed(Button.A):
        status = 6
        radio.send_value("dance2", 100)
    elif input.button_is_pressed(Button.B):
        status = 7
        radio.send_value("dance3", 100)
    elif input.is_gesture(Gesture.SCREEN_UP):
        status = 0
        radio.send_value("stop", 100)
basic.forever(on_forever)

def on_forever2():
    if status == 1:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    elif status == 2:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
    elif status == 3:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif status == 4:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    elif status == 5:
        basic.show_number(0)
    elif status == 6:
        basic.show_number(1)
    elif status == 7:
        basic.show_number(2)
    elif status == 0:
        basic.show_icon(IconNames.HAPPY)
basic.forever(on_forever2)
