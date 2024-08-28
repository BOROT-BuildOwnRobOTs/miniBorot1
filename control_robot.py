# Define initial offset values for each servo
def updateServoOffsets():
    servoOffsets[0] = servoOffset1
    servoOffsets[1] = servoOffset2
    servoOffsets[2] = servoOffset3
    servoOffsets[3] = servoOffset4
    servoOffsets[4] = servoOffset5
    servoOffsets[5] = servoOffset6
    servoOffsets[6] = servoOffset7
    servoOffsets[7] = servoOffset8

def on_received_value_deprecated(name, value):
    global state, isForward, startTime, lastReceivedTime, interloop, tmp_cnt, g2_angle, g5_angle, g15_angle, g20_angle, angle1, angle2, angle3, angle4, mainloop, interloop2, Z1, Z2, Z3, Z4, mainloop2, isLeft, interloop3, mainloop3, isRight, interloop4, mainloop4
    if priolity == 1:
        if name == "forward":
            state = 1
            isForward = True
            startTime = input.running_time()
            # update last received time
            lastReceivedTime = input.running_time()
            # Play sound effect in background
            # control.inBackground(playEffect);
            if mainloop < step:
                # Play sound effect in background
                # control.inBackground(playEffect);
                if interloop < count - 1:
                    interloop += 1
                    tmp_cnt = mainloop + 1
                    g2_angle = forward_g2[mainloop] + Math.idiv((forward_g2[tmp_cnt] - forward_g2[mainloop]) * (interloop + 1),
                        count)
                    g5_angle = forward_g5[mainloop] + Math.idiv((forward_g5[tmp_cnt] - forward_g5[mainloop]) * (interloop + 1),
                        count)
                    g15_angle = forward_g15[mainloop] + Math.idiv((forward_g15[tmp_cnt] - forward_g15[mainloop]) * (interloop + 1),
                        count)
                    g20_angle = forward_g20[mainloop] + Math.idiv((forward_g20[tmp_cnt] - forward_g20[mainloop]) * (interloop + 1),
                        count)
                    angle1 = G1[mainloop] + Math.idiv((G1[tmp_cnt] - G1[mainloop]) * (interloop + 1), count)
                    angle2 = G2[mainloop] + Math.idiv((G2[tmp_cnt] - G2[mainloop]) * (interloop + 1), count)
                    angle3 = G3[mainloop] + Math.idiv((G3[tmp_cnt] - G3[mainloop]) * (interloop + 1), count)
                    angle4 = G4[mainloop] + Math.idiv((G4[tmp_cnt] - G4[mainloop]) * (interloop + 1), count)
                    basic.pause(value)
                    # Apply offsets
                    updateServoOffsets()
                    # Reduce the power of S1 and increase S2 to balance
                    robotbit.servo(robotbit.Servos.S1, g2_angle * 1.1 + servoOffsets[0])
                    robotbit.servo(robotbit.Servos.S2, g5_angle * 0.9 + servoOffsets[1])
                    robotbit.servo(robotbit.Servos.S3, g15_angle * 1.1 + servoOffsets[2])
                    robotbit.servo(robotbit.Servos.S4, g20_angle + servoOffsets[3])
                    robotbit.servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.servo(robotbit.Servos.S6, angle2 + servoOffsets[5])
                    robotbit.servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                else:
                    interloop = 0
                mainloop += 1
            else:
                mainloop = 0
                updateServoOffsets()
                # Reduce the power of S1 and increase S2 to balance
                robotbit.servo(robotbit.Servos.S1, 115 + servoOffsets[0])
                robotbit.servo(robotbit.Servos.S2, 115 + servoOffsets[1])
                robotbit.servo(robotbit.Servos.S3, 85 + servoOffsets[2])
                robotbit.servo(robotbit.Servos.S4, 98 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S7, 120 + servoOffsets[6])
        if name == "back":
            state = 2
            isForward = False
            if mainloop2 < step:
                if interloop2 < count - 1:
                    tmp_cnt = mainloop2 + 1
                    interloop2 += 1
                    g2_angle = backward_g2[mainloop2] + Math.idiv((backward_g2[tmp_cnt] - backward_g2[mainloop2]) * (interloop2 + 1),
                        count)
                    g5_angle = backward_g5[mainloop2] + Math.idiv((backward_g5[tmp_cnt] - backward_g5[mainloop2]) * (interloop2 + 1),
                        count)
                    g15_angle = backward_g15[mainloop2] + Math.idiv((backward_g15[tmp_cnt] - backward_g15[mainloop2]) * (interloop2 + 1),
                        count)
                    g20_angle = backward_g20[mainloop2] + Math.idiv((backward_g20[tmp_cnt] - backward_g20[mainloop2]) * (interloop2 + 1),
                        count)
                    Z1 = G11[mainloop2] + Math.idiv((G11[tmp_cnt] - G11[mainloop2]) * (interloop2 + 1), count)
                    Z2 = G12[mainloop2] + Math.idiv((G12[tmp_cnt] - G12[mainloop2]) * (interloop2 + 1), count)
                    Z3 = G13[mainloop2] + Math.idiv((G13[tmp_cnt] - G13[mainloop2]) * (interloop2 + 1), count)
                    Z4 = G14[mainloop2] + Math.idiv((G14[tmp_cnt] - G14[mainloop2]) * (interloop2 + 1), count)
                    basic.pause(value)
                    # Apply offsets
                    updateServoOffsets()
                    robotbit.servo(robotbit.Servos.S1, g2_angle + servoOffsets[0])
                    robotbit.servo(robotbit.Servos.S2, g5_angle + servoOffsets[1])
                    robotbit.servo(robotbit.Servos.S3, g15_angle + servoOffsets[2])
                    robotbit.servo(robotbit.Servos.S4, g20_angle + servoOffsets[3])
                    robotbit.servo(robotbit.Servos.S5, Z1 + servoOffsets[4])
                    robotbit.servo(robotbit.Servos.S6, Z2 + servoOffsets[5])
                    robotbit.servo(robotbit.Servos.S7, Z3 + servoOffsets[6])
                    robotbit.servo(robotbit.Servos.S8, Z4 + servoOffsets[7])
                else:
                    interloop2 = 0
                mainloop2 += 1
            else:
                mainloop2 = 0
                updateServoOffsets()
                robotbit.servo(robotbit.Servos.S1, 90 + servoOffsets[0])
                robotbit.servo(robotbit.Servos.S2, 90 + servoOffsets[1])
                robotbit.servo(robotbit.Servos.S3, 80 + servoOffsets[2])
                robotbit.servo(robotbit.Servos.S4, 96 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S7, 120 + servoOffsets[6])
        if name == "left":
            state = 3
            isLeft = True
            startTime = input.running_time()
            # update last received time
            lastReceivedTime = input.running_time()
            # control.inBackground(playEffect);
            if mainloop3 < step:
                # Play sound effect in background
                # control.inBackground(playEffect);
                if interloop3 < count - 1:
                    interloop3 += 1
                    tmp_cnt = mainloop3 + 1
                    g2_angle = left_g2[mainloop3] + Math.idiv((left_g2[tmp_cnt] - left_g2[mainloop3]) * (interloop3 + 1),
                        count)
                    g5_angle = left_g5[mainloop3] + Math.idiv((left_g5[tmp_cnt] - left_g5[mainloop3]) * (interloop3 + 1),
                        count)
                    g15_angle = left_g15[mainloop3] + Math.idiv((left_g15[tmp_cnt] - left_g15[mainloop3]) * (interloop3 + 1),
                        count)
                    g20_angle = left_g20[mainloop3] + Math.idiv((left_g20[tmp_cnt] - left_g20[mainloop3]) * (interloop3 + 1),
                        count)
                    angle1 = G21[mainloop3] + Math.idiv((G21[tmp_cnt] - G21[mainloop3]) * (interloop3 + 1), count)
                    angle2 = G22[mainloop3] + Math.idiv((G22[tmp_cnt] - G22[mainloop3]) * (interloop3 + 1), count)
                    angle3 = G23[mainloop3] + Math.idiv((G23[tmp_cnt] - G23[mainloop3]) * (interloop3 + 1), count)
                    angle4 = G24[mainloop3] + Math.idiv((G24[tmp_cnt] - G24[mainloop3]) * (interloop3 + 1), count)
                    basic.pause(value)
                    # Apply offsets
                    updateServoOffsets()
                    # Reduce the power of S1 and increase S2 to balance
                    robotbit.servo(robotbit.Servos.S1, g2_angle * 1.3 + servoOffsets[0])
                    robotbit.servo(robotbit.Servos.S2, g5_angle * 0.9 + servoOffsets[1])
                    robotbit.servo(robotbit.Servos.S3, g15_angle + servoOffsets[2])
                    robotbit.servo(robotbit.Servos.S4, g20_angle * 0.9 + servoOffsets[3])
                    robotbit.servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.servo(robotbit.Servos.S6, angle2 - 50 + servoOffsets[5])
                    robotbit.servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                else:
                    interloop3 = 0
                mainloop3 += 1
            else:
                mainloop3 = 0
                updateServoOffsets()
                # Reduce the power of S1 and increase S2 to balance
                robotbit.servo(robotbit.Servos.S1, 115 + servoOffsets[0])
                robotbit.servo(robotbit.Servos.S2, 115 + servoOffsets[1])
                robotbit.servo(robotbit.Servos.S3, 85 + servoOffsets[2])
                robotbit.servo(robotbit.Servos.S4, 98 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S7, 120 + servoOffsets[6])
        if name == "right":
            state = 4
            isRight = True
            startTime = input.running_time()
            # update last received time
            lastReceivedTime = input.running_time()
            # Play sound effect in background
            # control.inBackground(playEffect);
            if mainloop4 < step:
                # Play sound effect in background
                # control.inBackground(playEffect);
                if interloop4 < count - 1:
                    interloop4 += 1
                    tmp_cnt = mainloop4 + 1
                    g2_angle = right_g2[mainloop4] + Math.idiv((right_g2[tmp_cnt] - right_g2[mainloop4]) * (interloop4 + 1),
                        count)
                    g5_angle = right_g5[mainloop4] + Math.idiv((right_g5[tmp_cnt] - right_g5[mainloop4]) * (interloop4 + 1),
                        count)
                    g15_angle = right_g15[mainloop4] + Math.idiv((right_g15[tmp_cnt] - right_g15[mainloop4]) * (interloop4 + 1),
                        count)
                    g20_angle = right_g20[mainloop4] + Math.idiv((right_g20[tmp_cnt] - right_g20[mainloop4]) * (interloop4 + 1),
                        count)
                    angle1 = G31[mainloop4] + Math.idiv((G31[tmp_cnt] - G31[mainloop4]) * (interloop4 + 1), count)
                    angle2 = G32[mainloop4] + Math.idiv((G32[tmp_cnt] - G32[mainloop4]) * (interloop4 + 1), count)
                    angle3 = G33[mainloop4] + Math.idiv((G33[tmp_cnt] - G33[mainloop4]) * (interloop4 + 1), count)
                    angle4 = G34[mainloop4] + Math.idiv((G34[tmp_cnt] - G34[mainloop4]) * (interloop4 + 1), count)
                    basic.pause(value)
                    # Apply offsets
                    updateServoOffsets()
                    # Reduce the power of S1 and increase S2 to balance
                    robotbit.servo(robotbit.Servos.S1, g2_angle * 0.8 + servoOffsets[0])
                    robotbit.servo(robotbit.Servos.S2, g5_angle * 0.8 + servoOffsets[1])
                    robotbit.servo(robotbit.Servos.S3, g15_angle * 1.6 + servoOffsets[2])
                    robotbit.servo(robotbit.Servos.S4, g20_angle + servoOffsets[3])
                    robotbit.servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.servo(robotbit.Servos.S6, angle2 + servoOffsets[5])
                    robotbit.servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                else:
                    interloop4 = 0
                mainloop4 += 1
            else:
                mainloop4 = 0
                updateServoOffsets()
                # Reduce the powe-r of S1 and increase S2 to balance
                robotbit.servo(robotbit.Servos.S1, 115 + servoOffsets[0])
                robotbit.servo(robotbit.Servos.S2, 115 + servoOffsets[1])
                robotbit.servo(robotbit.Servos.S3, 85 + servoOffsets[2])
                robotbit.servo(robotbit.Servos.S4, 98 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S7, 120 + servoOffsets[6])
        if name == "dance1":
            state = 7
            updateServoOffsets()
            robotbit.servo(robotbit.Servos.S5, 30 + servoOffsets[4])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S7, 170 + servoOffsets[6])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            robotbit.servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            robotbit.servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            robotbit.servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            robotbit.servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            robotbit.servo(robotbit.Servos.S5, 110 + servoOffsets[4])
            robotbit.servo(robotbit.Servos.S7, 80 + servoOffsets[6])
            reset()
        elif name == "dance2":
            state = 8
            reset()
            updateServoOffsets()
            for index in range(2):
                robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S8, 30 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S4, 150 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S6, 120 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S8, 140 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 40 + servoOffsets[1])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S8, 30 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S4, 150 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S6, 140 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S8, 120 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 40 + servoOffsets[1])
                basic.pause(500)
            reset()
        elif name == "dance3":
            state = 9
            reset()
            updateServoOffsets()
            for index2 in range(2):
                robotbit.servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S7, 90 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S4, 90 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 90 + servoOffsets[1])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S7, 30 + servoOffsets[6])
                robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
                robotbit.servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S5, 30 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S8, 30 + servoOffsets[7])
                basic.pause(500)
                robotbit.servo(robotbit.Servos.S5, 150 + servoOffsets[4])
                robotbit.servo(robotbit.Servos.S8, 150 + servoOffsets[7])
                basic.pause(500)
            reset()
        if name == "stop":
            music.stop_all_sounds()
            robotbit.motor_stop_all()
            reset()
radio.on_received_value_deprecated(on_received_value_deprecated)

def playEffect():
    freq = 500
    while freq <= 2000:
        music.ring_tone(freq)
        basic.pause(50)
        freq += 100
    music.stop_all_sounds()
def reset():
    updateServoOffsets()
    robotbit.servo(robotbit.Servos.S1, 90 + servoOffsets[0])
    robotbit.servo(robotbit.Servos.S2, 97 + servoOffsets[1])
    robotbit.servo(robotbit.Servos.S3, 80 + servoOffsets[2])
    robotbit.servo(robotbit.Servos.S4, 96 + servoOffsets[3])
    robotbit.servo(robotbit.Servos.S5, 110 + servoOffsets[4])
    robotbit.servo(robotbit.Servos.S6, 90 + servoOffsets[5])
    robotbit.servo(robotbit.Servos.S7, 80 + servoOffsets[6])
    robotbit.servo(robotbit.Servos.S8, 90 + servoOffsets[7])
    basic.pause(100)
elapsedTime = 0
interloop4 = 0
mainloop4 = 0
isRight = False
interloop3 = 0
mainloop3 = 0
isLeft = False
Z4 = 0
Z3 = 0
Z2 = 0
Z1 = 0
interloop2 = 0
mainloop2 = 0
angle4 = 0
angle3 = 0
angle2 = 0
angle1 = 0
g20_angle = 0
g15_angle = 0
g5_angle = 0
g2_angle = 0
tmp_cnt = 0
interloop = 0
mainloop = 0
lastReceivedTime = 0
isForward = False
state = 0
robot_id = 0
step = 0
count = 0
G34: List[number] = []
G33: List[number] = []
G32: List[number] = []
G31: List[number] = []
right_g20: List[number] = []
right_g15: List[number] = []
right_g5: List[number] = []
right_g2: List[number] = []
G24: List[number] = []
G23: List[number] = []
G22: List[number] = []
G21: List[number] = []
left_g20: List[number] = []
left_g15: List[number] = []
left_g5: List[number] = []
left_g2: List[number] = []
G14: List[number] = []
G13: List[number] = []
G12: List[number] = []
G11: List[number] = []
backward_g20: List[number] = []
backward_g15: List[number] = []
backward_g5: List[number] = []
backward_g2: List[number] = []
G4: List[number] = []
G3: List[number] = []
G2: List[number] = []
G1: List[number] = []
forward_g20: List[number] = []
forward_g15: List[number] = []
forward_g5: List[number] = []
forward_g2: List[number] = []
servoOffsets: List[number] = []
servoOffset8 = 0
servoOffset7 = 0
servoOffset6 = 0
servoOffset5 = 0
servoOffset4 = 0
servoOffset3 = 0
servoOffset2 = 0
servoOffset1 = 0
startTime = 0
priolity = 0
priolity = 0
music.set_volume(255)
# Create NeoPixel strip
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.set_brightness(255)
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.GREEN))
strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.GREEN))
strip.show()
# Variables to track time
startTime = input.running_time()
servoOffset1 = 0
servoOffset2 = 16
servoOffset3 = -6
servoOffset4 = 8
servoOffset5 = -6
servoOffset6 = 0
servoOffset7 = 0
servoOffset8 = 0
# Define array to store offset values
servoOffsets = [servoOffset1,
    servoOffset2,
    servoOffset3,
    servoOffset4,
    servoOffset5,
    servoOffset6,
    servoOffset7,
    servoOffset8]
forward_g2 = [105, 98, 89, 74, 66, 75, 89, 98, 105, 180]
forward_g5 = [90, 101, 110, 101, 90, 80, 72, 82, 90, 180]
forward_g15 = [99, 88, 74, 60, 50, 60, 78, 87, 99, 180]
forward_g20 = [90, 96, 104, 112, 101, 90, 76, 89, 97, 180]
G1 = [115, 104, 91, 81, 71, 80, 93, 104, 111, 180]
G2 = [90, 110, 125, 110, 90, 75, 60, 75, 90, 180]
G3 = [110, 97, 84, 73, 65, 74, 86, 95, 108, 180]
G4 = [90, 75, 65, 75, 90, 110, 125, 115, 90, 180]
backward_g2 = [74, 80, 91, 109, 114, 104, 87, 80, 72, 180]
backward_g5 = [90, 105, 115, 105, 90, 78, 70, 80, 90, 180]
backward_g15 = [52, 60, 78, 99, 108, 96, 88, 74, 70, 180]
backward_g20 = [90, 96, 105, 112, 100, 87, 75, 89, 97, 180]
G11 = [66, 75, 89, 98, 105, 97, 89, 79, 67, 180]
G12 = [90, 75, 60, 75, 90, 110, 130, 110, 75, 180]
G13 = [65, 74, 86, 95, 108, 95, 86, 72, 65, 180]
G14 = [90, 105, 120, 126, 100, 75, 60, 70, 90, 180]
left_g2 = [105, 98, 89, 74, 66, 75, 89, 98, 105, 180]
left_g5 = [90, 101, 110, 101, 90, 80, 72, 82, 90, 180]
left_g15 = [99, 88, 74, 60, 50, 60, 78, 87, 99, 180]
left_g20 = [90, 96, 104, 112, 101, 90, 76, 89, 97, 180]
G21 = [115, 104, 91, 81, 71, 80, 93, 104, 111, 180]
G22 = [90, 110, 125, 110, 90, 75, 60, 75, 90, 180]
G23 = [110, 97, 84, 73, 65, 74, 86, 95, 108, 180]
G24 = [90, 75, 65, 75, 90, 110, 125, 115, 90, 180]
right_g2 = [105, 98, 89, 74, 66, 75, 89, 98, 105, 180]
right_g5 = [90, 101, 110, 101, 90, 80, 72, 82, 90, 180]
right_g15 = [99, 88, 74, 60, 50, 60, 78, 87, 99, 180]
right_g20 = [90, 96, 104, 112, 101, 90, 76, 89, 97, 180]
G31 = [115, 104, 91, 81, 71, 80, 93, 104, 111, 180]
G32 = [90, 110, 125, 110, 90, 75, 60, 75, 90, 180]
G33 = [110, 97, 84, 73, 65, 74, 86, 95, 108, 180]
G34 = [90, 75, 65, 75, 90, 110, 125, 115, 90, 180]
count = 9
step = 7
reset()
radio.set_group(robot_id)
basic.show_leds("""
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . # . # .
    """)

def on_forever():
    if state == 1:
        music.stop_all_sounds()
        music.play(music.create_sound_expression(WaveShape.SAWTOOTH,
                400,
                2484,
                109,
                255,
                100,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 2:
        music.stop_all_sounds()
        music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                300,
                5000,
                187,
                255,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 3:
        music.stop_all_sounds()
        music.play(music.create_sound_expression(WaveShape.SINE,
                500,
                5000,
                78,
                255,
                50,
                SoundExpressionEffect.VIBRATO,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 4:
        music.stop_all_sounds()
        music.play(music.create_sound_expression(WaveShape.NOISE,
                54,
                5000,
                67,
                255,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 5:
        music.stop_all_sounds()
        music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 6:
        music.stop_all_sounds()
        music.play(music.builtin_playable_sound_effect(soundExpression.slide),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 7:
        music.stop_all_sounds()
        music.play(music.string_playable("G F G A - F E D ", 100),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 8:
        music.stop_all_sounds()
        music._play_default_background(music.built_in_playable_melody(Melodies.CHASE),
            music.PlaybackMode.IN_BACKGROUND)
    elif state == 9:
        music.stop_all_sounds()
        music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
            music.PlaybackMode.IN_BACKGROUND)
basic.forever(on_forever)

def on_forever2():
    global elapsedTime, isForward
    # Calculate elapsed time in seconds
    elapsedTime = (input.running_time() - startTime) / 1000
    # Check if "forward" command is still being received
    if input.running_time() - lastReceivedTime > 2000:
        isForward = False
    basic.pause(100)
basic.forever(on_forever2)

def on_forever3():
    global priolity, state
    if input.is_gesture(Gesture.SCREEN_UP):
        priolity = 0
        state = 5
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
        strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        basic.show_leds("""
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            . # . # .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . # # # .
            . . . . .
            # # . # #
            . . . . .
            """)
        basic.pause(100)
    elif input.is_gesture(Gesture.LOGO_DOWN):
        priolity = 1
        state = 0
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.GREEN))
        strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
        basic.show_leds("""
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            """)
    elif input.is_gesture(Gesture.SCREEN_DOWN):
        state = 6
        priolity = 0
        strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.ORANGE))
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.ORANGE))
        strip.show()
        basic.show_leds("""
            . . # . .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            """)
basic.forever(on_forever3)

def on_forever4():
    global priolity
    updateServoOffsets()
    if input.is_gesture(Gesture.SCREEN_UP):
        priolity = 0
        robotbit.servo(robotbit.Servos.S5, 140 + servoOffsets[4])
        robotbit.servo(robotbit.Servos.S6, 70 + servoOffsets[5])
        robotbit.servo(robotbit.Servos.S8, 40 + servoOffsets[7])
        robotbit.servo(robotbit.Servos.S7, 40 + servoOffsets[6])
        basic.pause(500)
        robotbit.servo(robotbit.Servos.S5, 40 + servoOffsets[4])
        robotbit.servo(robotbit.Servos.S6, 10 + servoOffsets[5])
        robotbit.servo(robotbit.Servos.S8, 140 + servoOffsets[7])
        robotbit.servo(robotbit.Servos.S7, 140 + servoOffsets[6])
        basic.pause(500)
    elif input.is_gesture(Gesture.SCREEN_DOWN):
        priolity = 0
        robotbit.servo(robotbit.Servos.S5, 140 + servoOffsets[4])
        robotbit.servo(robotbit.Servos.S8, 40 + servoOffsets[7])
        robotbit.servo(robotbit.Servos.S6, 70 + servoOffsets[5])
        robotbit.servo(robotbit.Servos.S7, 40 + servoOffsets[6])
basic.forever(on_forever4)
