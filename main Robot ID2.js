//  Define initial offset values for each servo
function updateServoOffsets() {
    servoOffsets[0] = servoOffset1
    servoOffsets[1] = servoOffset2
    servoOffsets[2] = servoOffset3
    servoOffsets[3] = servoOffset4
    servoOffsets[4] = servoOffset5
    servoOffsets[5] = servoOffset6
    servoOffsets[6] = servoOffset7
    servoOffsets[7] = servoOffset8
}

radio.onReceivedValueDeprecated(function on_received_value_deprecated(name: string, value: number) {
    
    if (priolity == 1) {
        if (name == "forward") {
            state = 1
            isForward = true
            startTime = input.runningTime()
            //  update last received time
            lastReceivedTime = input.runningTime()
            //  Play sound effect in background
            //  control.inBackground(playEffect);
            if (mainloop < step) {
                //  Play sound effect in background
                //  control.inBackground(playEffect);
                if (interloop < count - 1) {
                    interloop += 1
                    tmp_cnt = mainloop + 1
                    g2_angle = forward_g2[mainloop] + Math.idiv((forward_g2[tmp_cnt] - forward_g2[mainloop]) * (interloop + 1), count)
                    g5_angle = forward_g5[mainloop] + Math.idiv((forward_g5[tmp_cnt] - forward_g5[mainloop]) * (interloop + 1), count)
                    g15_angle = forward_g15[mainloop] + Math.idiv((forward_g15[tmp_cnt] - forward_g15[mainloop]) * (interloop + 1), count)
                    g20_angle = forward_g20[mainloop] + Math.idiv((forward_g20[tmp_cnt] - forward_g20[mainloop]) * (interloop + 1), count)
                    angle1 = G1[mainloop] + Math.idiv((G1[tmp_cnt] - G1[mainloop]) * (interloop + 1), count)
                    angle2 = G2[mainloop] + Math.idiv((G2[tmp_cnt] - G2[mainloop]) * (interloop + 1), count)
                    angle3 = G3[mainloop] + Math.idiv((G3[tmp_cnt] - G3[mainloop]) * (interloop + 1), count)
                    angle4 = G4[mainloop] + Math.idiv((G4[tmp_cnt] - G4[mainloop]) * (interloop + 1), count)
                    basic.pause(value)
                    //  Apply offsets
                    updateServoOffsets()
                    //  Reduce the power of S1 and increase S2 to balance
                    robotbit.Servo(robotbit.Servos.S1, g2_angle + servoOffsets[0])
                    robotbit.Servo(robotbit.Servos.S2, g5_angle + servoOffsets[1])
                    robotbit.Servo(robotbit.Servos.S3, g15_angle*0.8 + servoOffsets[2])
                    robotbit.Servo(robotbit.Servos.S4, g20_angle*1.1 + servoOffsets[3])
                    robotbit.Servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.Servo(robotbit.Servos.S6, angle2 + servoOffsets[5])
                    robotbit.Servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.Servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                } else {
                    interloop = 0
                }
                
                mainloop += 1
            } else {
                mainloop = 0
                updateServoOffsets()
                //  Reduce the power of S1 and increase S2 to balance
                robotbit.Servo(robotbit.Servos.S1, 115 + servoOffsets[0])
                robotbit.Servo(robotbit.Servos.S2, 115 + servoOffsets[1])
                robotbit.Servo(robotbit.Servos.S3, 85*0.8 + servoOffsets[2])
                robotbit.Servo(robotbit.Servos.S4, 98*1.1 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S7, 120 + servoOffsets[6])
            }
            
        }
        
        if (name == "back") {
            state = 2
            isForward = false
            if (mainloop2 < step) {
                if (interloop2 < count - 1) {
                    tmp_cnt = mainloop2 + 1
                    interloop2 += 1
                    g2_angle = backward_g2[mainloop2] + Math.idiv((backward_g2[tmp_cnt] - backward_g2[mainloop2]) * (interloop2 + 1), count)
                    g5_angle = backward_g5[mainloop2] + Math.idiv((backward_g5[tmp_cnt] - backward_g5[mainloop2]) * (interloop2 + 1), count)
                    g15_angle = backward_g15[mainloop2] + Math.idiv((backward_g15[tmp_cnt] - backward_g15[mainloop2]) * (interloop2 + 1), count)
                    g20_angle = backward_g20[mainloop2] + Math.idiv((backward_g20[tmp_cnt] - backward_g20[mainloop2]) * (interloop2 + 1), count)
                    Z1 = G11[mainloop2] + Math.idiv((G11[tmp_cnt] - G11[mainloop2]) * (interloop2 + 1), count)
                    Z2 = G12[mainloop2] + Math.idiv((G12[tmp_cnt] - G12[mainloop2]) * (interloop2 + 1), count)
                    Z3 = G13[mainloop2] + Math.idiv((G13[tmp_cnt] - G13[mainloop2]) * (interloop2 + 1), count)
                    Z4 = G14[mainloop2] + Math.idiv((G14[tmp_cnt] - G14[mainloop2]) * (interloop2 + 1), count)
                    basic.pause(value)
                    //  Apply offsets
                    updateServoOffsets()
                    robotbit.Servo(robotbit.Servos.S1, g2_angle + servoOffsets[0])
                    robotbit.Servo(robotbit.Servos.S2, g5_angle + servoOffsets[1])
                    robotbit.Servo(robotbit.Servos.S3, g15_angle + servoOffsets[2])
                    robotbit.Servo(robotbit.Servos.S4, g20_angle + servoOffsets[3])
                    robotbit.Servo(robotbit.Servos.S5, Z1 + servoOffsets[4])
                    robotbit.Servo(robotbit.Servos.S6, Z2 + servoOffsets[5])
                    robotbit.Servo(robotbit.Servos.S7, Z3 + servoOffsets[6])
                    robotbit.Servo(robotbit.Servos.S8, Z4 + servoOffsets[7])
                } else {
                    interloop2 = 0
                }
                
                mainloop2 += 1
            } else {
                mainloop2 = 0
                updateServoOffsets()
                robotbit.Servo(robotbit.Servos.S1, 90 + servoOffsets[0])
                robotbit.Servo(robotbit.Servos.S2, 90 + servoOffsets[1])
                robotbit.Servo(robotbit.Servos.S3, 80 + servoOffsets[2])
                robotbit.Servo(robotbit.Servos.S4, 96 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S7, 120 + servoOffsets[6])
            }
            
        }
        
        if (name == "left") {
            state = 3
            isLeft = true
            startTime = input.runningTime()
            //  update last received time
            lastReceivedTime = input.runningTime()
            //  control.inBackground(playEffect);
            if (mainloop3 < step) {
                //  Play sound effect in background
                //  control.inBackground(playEffect);
                if (interloop3 < count - 1) {
                    interloop3 += 1
                    tmp_cnt = mainloop3 + 1
                    g2_angle = left_g2[mainloop3] + Math.idiv((left_g2[tmp_cnt] - left_g2[mainloop3]) * (interloop3 + 1), count)
                    g5_angle = left_g5[mainloop3] + Math.idiv((left_g5[tmp_cnt] - left_g5[mainloop3]) * (interloop3 + 1), count)
                    g15_angle = left_g15[mainloop3] + Math.idiv((left_g15[tmp_cnt] - left_g15[mainloop3]) * (interloop3 + 1), count)
                    g20_angle = left_g20[mainloop3] + Math.idiv((left_g20[tmp_cnt] - left_g20[mainloop3]) * (interloop3 + 1), count)
                    angle1 = G21[mainloop3] + Math.idiv((G21[tmp_cnt] - G21[mainloop3]) * (interloop3 + 1), count)
                    angle2 = G22[mainloop3] + Math.idiv((G22[tmp_cnt] - G22[mainloop3]) * (interloop3 + 1), count)
                    angle3 = G23[mainloop3] + Math.idiv((G23[tmp_cnt] - G23[mainloop3]) * (interloop3 + 1), count)
                    angle4 = G24[mainloop3] + Math.idiv((G24[tmp_cnt] - G24[mainloop3]) * (interloop3 + 1), count)
                    basic.pause(value)
                    //  Apply offsets
                    updateServoOffsets()
                    //  Reduce the power of S1 and increase S2 to balance
                    robotbit.Servo(robotbit.Servos.S1, g2_angle * 0.9 + servoOffsets[0])
                    robotbit.Servo(robotbit.Servos.S2, g5_angle * 0.9 + servoOffsets[1])
                    robotbit.Servo(robotbit.Servos.S3, g15_angle * 0.9 + servoOffsets[2])
                    robotbit.Servo(robotbit.Servos.S4, g20_angle * 1.1 + servoOffsets[3])
                    robotbit.Servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.Servo(robotbit.Servos.S6, angle2 + servoOffsets[5])
                    robotbit.Servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.Servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                } else {
                    interloop3 = 0
                }
                
                mainloop3 += 1
            } else {
                mainloop3 = 0
                updateServoOffsets()
                //  Reduce the power of S1 and increase S2 to balance
                robotbit.Servo(robotbit.Servos.S1, 115*0.9 + servoOffsets[0])
                robotbit.Servo(robotbit.Servos.S2, 115*0.9 + servoOffsets[1])
                robotbit.Servo(robotbit.Servos.S3, 85 *0.9+ servoOffsets[2])
                robotbit.Servo(robotbit.Servos.S4, 98 *1.1+ servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S7, 120 + servoOffsets[6])
            }
            
        }
        
        if (name == "right") {
            state = 4
            isRight = true
            startTime = input.runningTime()
            //  update last received time
            lastReceivedTime = input.runningTime()
            //  Play sound effect in background
            //  control.inBackground(playEffect);
            if (mainloop4 < step) {
                //  Play sound effect in background
                //  control.inBackground(playEffect);
                if (interloop4 < count - 1) {
                    interloop4 += 1
                    tmp_cnt = mainloop4 + 1
                    g2_angle = right_g2[mainloop4] + Math.idiv((right_g2[tmp_cnt] - right_g2[mainloop4]) * (interloop4 + 1), count)
                    g5_angle = right_g5[mainloop4] + Math.idiv((right_g5[tmp_cnt] - right_g5[mainloop4]) * (interloop4 + 1), count)
                    g15_angle = right_g15[mainloop4] + Math.idiv((right_g15[tmp_cnt] - right_g15[mainloop4]) * (interloop4 + 1), count)
                    g20_angle = right_g20[mainloop4] + Math.idiv((right_g20[tmp_cnt] - right_g20[mainloop4]) * (interloop4 + 1), count)
                    angle1 = G31[mainloop4] + Math.idiv((G31[tmp_cnt] - G31[mainloop4]) * (interloop4 + 1), count)
                    angle2 = G32[mainloop4] + Math.idiv((G32[tmp_cnt] - G32[mainloop4]) * (interloop4 + 1), count)
                    angle3 = G33[mainloop4] + Math.idiv((G33[tmp_cnt] - G33[mainloop4]) * (interloop4 + 1), count)
                    angle4 = G34[mainloop4] + Math.idiv((G34[tmp_cnt] - G34[mainloop4]) * (interloop4 + 1), count)
                    basic.pause(value)
                    //  Apply offsets
                    updateServoOffsets()
                    //  Reduce the power of S1 and increase S2 to balance
                    robotbit.Servo(robotbit.Servos.S1, g2_angle*1.2 + servoOffsets[0])
                    robotbit.Servo(robotbit.Servos.S2, g5_angle*1.1  + servoOffsets[1])
                    robotbit.Servo(robotbit.Servos.S3, g15_angle*0.9  + servoOffsets[2])
                    robotbit.Servo(robotbit.Servos.S4, g20_angle *1.1 + servoOffsets[3])
                    robotbit.Servo(robotbit.Servos.S5, angle1 + servoOffsets[4])
                    robotbit.Servo(robotbit.Servos.S6, angle2 + servoOffsets[5])
                    robotbit.Servo(robotbit.Servos.S7, angle3 + servoOffsets[6])
                    robotbit.Servo(robotbit.Servos.S8, angle4 + servoOffsets[7])
                } else {
                    interloop4 = 0
                }
                
                mainloop4 += 1
            } else {
                mainloop4 = 0
                updateServoOffsets()
                //  Reduce the powe-r of S1 and increase S2 to balance
                robotbit.Servo(robotbit.Servos.S1, 115 + servoOffsets[0])
                robotbit.Servo(robotbit.Servos.S2, 115 + servoOffsets[1])
                robotbit.Servo(robotbit.Servos.S3, 85*0.5 + servoOffsets[2])
                robotbit.Servo(robotbit.Servos.S4, 98*0.5 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S5, 120 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S6, 110 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S7, 120 + servoOffsets[6])
            }
            
        }
        
        if (name == "dance1") {
            state = 7
            updateServoOffsets()
            robotbit.Servo(robotbit.Servos.S5, 30 + servoOffsets[4])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S7, 170 + servoOffsets[6])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            robotbit.Servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            robotbit.Servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
            robotbit.Servo(robotbit.Servos.S8, 160 + servoOffsets[7])
            basic.pause(500)
            robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
            robotbit.Servo(robotbit.Servos.S8, 90 + servoOffsets[7])
            robotbit.Servo(robotbit.Servos.S5, 110 + servoOffsets[4])
            robotbit.Servo(robotbit.Servos.S7, 80 + servoOffsets[6])
            reset()
        } else if (name == "dance2") {
            state = 8
            reset()
            updateServoOffsets()
            for (let index = 0; index < 2; index++) {
                robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S8, 30 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S4, 150 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S6, 130 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S8, 130 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 40 + servoOffsets[1])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S8, 30 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S4, 150 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S6, 130 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S8, 130 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 40 + servoOffsets[1])
                basic.pause(500)
            }
            reset()
        } else if (name == "dance3") {
            state = 9
            reset()
            updateServoOffsets()
            for (let index2 = 0; index2 < 2; index2++) {
                robotbit.Servo(robotbit.Servos.S8, 150 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S6, 30 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S4, 90 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 90 + servoOffsets[1])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S8, 30 + servoOffsets[6])
                robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
                robotbit.Servo(robotbit.Servos.S4, 30 + servoOffsets[3])
                robotbit.Servo(robotbit.Servos.S2, 150 + servoOffsets[1])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S5, 30 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S7, 30 + servoOffsets[7])
                basic.pause(500)
                robotbit.Servo(robotbit.Servos.S5, 150 + servoOffsets[4])
                robotbit.Servo(robotbit.Servos.S7, 150 + servoOffsets[7])
                basic.pause(500)
            }
            reset()
        }
        
        if (name == "stop") {
            music.stopAllSounds()
            robotbit.MotorStopAll()
            reset()
        }
        
    }
    
})
function playEffect() {
    let freq = 500
    while (freq <= 2000) {
        music.ringTone(freq)
        basic.pause(50)
        freq += 100
    }
    music.stopAllSounds()
}

function reset() {
    updateServoOffsets()
    robotbit.Servo(robotbit.Servos.S1, 90 + servoOffsets[0])
    robotbit.Servo(robotbit.Servos.S2, 97 + servoOffsets[1])
    robotbit.Servo(robotbit.Servos.S3, 80 + servoOffsets[2])
    robotbit.Servo(robotbit.Servos.S4, 96 + servoOffsets[3])
    robotbit.Servo(robotbit.Servos.S5, 110 + servoOffsets[4])
    robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
    robotbit.Servo(robotbit.Servos.S7, 80 + servoOffsets[6])
    robotbit.Servo(robotbit.Servos.S8, 90 + servoOffsets[7])
    basic.pause(100)
}

let elapsedTime = 0
let interloop4 = 0
let mainloop4 = 0
let isRight = false
let interloop3 = 0
let mainloop3 = 0
let isLeft = false
let Z4 = 0
let Z3 = 0
let Z2 = 0
let Z1 = 0
let interloop2 = 0
let mainloop2 = 0
let angle4 = 0
let angle3 = 0
let angle2 = 0
let angle1 = 0
let g20_angle = 0
let g15_angle = 0
let g5_angle = 0
let g2_angle = 0
let tmp_cnt = 0
let interloop = 0
let mainloop = 0
let lastReceivedTime = 0
let isForward = false
let state = 0
let robot_id = 2
let step = 0
let count = 0
let G34 : number[] = []
let G33 : number[] = []
let G32 : number[] = []
let G31 : number[] = []
let right_g20 : number[] = []
let right_g15 : number[] = []
let right_g5 : number[] = []
let right_g2 : number[] = []
let G24 : number[] = []
let G23 : number[] = []
let G22 : number[] = []
let G21 : number[] = []
let left_g20 : number[] = []
let left_g15 : number[] = []
let left_g5 : number[] = []
let left_g2 : number[] = []
let G14 : number[] = []
let G13 : number[] = []
let G12 : number[] = []
let G11 : number[] = []
let backward_g20 : number[] = []
let backward_g15 : number[] = []
let backward_g5 : number[] = []
let backward_g2 : number[] = []
let G4 : number[] = []
let G3 : number[] = []
let G2 : number[] = []
let G1 : number[] = []
let forward_g20 : number[] = []
let forward_g15 : number[] = []
let forward_g5 : number[] = []
let forward_g2 : number[] = []
let servoOffsets : number[] = []
let servoOffset8 = 0
let servoOffset7 = 0
let servoOffset6 = 0
let servoOffset5 = 0
let servoOffset4 = 0
let servoOffset3 = 0
let servoOffset2 = 0
let servoOffset1 = 0
let startTime = 0
let priolity = 0
priolity = 0
music.setVolume(255)
//  Create NeoPixel strip
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
strip.show()
//  Variables to track time
startTime = input.runningTime()
servoOffset1 = -6
servoOffset2 = 16
servoOffset3 = -6
servoOffset4 = 8
servoOffset5 = 0
servoOffset6 = 0
servoOffset7 = 0
servoOffset8 = 0
//  Define array to store offset values
servoOffsets = [servoOffset1, servoOffset2, servoOffset3, servoOffset4, servoOffset5, servoOffset6, servoOffset7, servoOffset8]
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
radio.setGroup(robot_id)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . # . # .
    `)
basic.forever(function on_forever() {
    if (state == 1) {
        music.stopAllSounds()
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 400, 2484, 109, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (state == 2) {
        music.stopAllSounds()
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 5000, 187, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    } else if (state == 3) {
        music.stopAllSounds()
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 5000, 78, 255, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (state == 4) {
        music.stopAllSounds()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 5000, 67, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (state == 5) {
        music.stopAllSounds()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    } else if (state == 6) {
        music.stopAllSounds()
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.InBackground)
    } else if (state == 7) {
        music.stopAllSounds()
        music.play(music.stringPlayable("G F G A - F E D ", 100), music.PlaybackMode.InBackground)
    } else if (state == 8) {
        music.stopAllSounds()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
    } else if (state == 9) {
        music.stopAllSounds()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    }
    
})
basic.forever(function on_forever2() {
    
    //  Calculate elapsed time in seconds
    elapsedTime = (input.runningTime() - startTime) / 1000
    //  Check if "forward" command is still being received
    if (input.runningTime() - lastReceivedTime > 2000) {
        isForward = false
    }
    
    basic.pause(100)
})
basic.forever(function on_forever3() {
    
    if (input.isGesture(Gesture.ScreenUp)) {
        priolity = 0
        state = 5
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            # # . # #
            . . . . .
            `)
        basic.pause(100)
    } else if (input.isGesture(Gesture.LogoDown)) {
        priolity = 1
        state = 0
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            `)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        state = 6
        priolity = 0
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.showLeds(`
            . . # . .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    
})
basic.forever(function on_forever4() {
    
    updateServoOffsets()
    if (input.isGesture(Gesture.ScreenUp)) {
        priolity = 0
        robotbit.Servo(robotbit.Servos.S5, 140 + servoOffsets[4])
        robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
        robotbit.Servo(robotbit.Servos.S8, 60 + servoOffsets[7])
        robotbit.Servo(robotbit.Servos.S7, 40 + servoOffsets[6])
        basic.pause(500)
        robotbit.Servo(robotbit.Servos.S5, 40 + servoOffsets[4])
        robotbit.Servo(robotbit.Servos.S6, 10 + servoOffsets[5])
        robotbit.Servo(robotbit.Servos.S8, 140 + servoOffsets[7])
        robotbit.Servo(robotbit.Servos.S7, 140 + servoOffsets[6])
        basic.pause(500)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        priolity = 0
        robotbit.Servo(robotbit.Servos.S5, 140 + servoOffsets[4])
        robotbit.Servo(robotbit.Servos.S8, 60 + servoOffsets[7])
        robotbit.Servo(robotbit.Servos.S6, 90 + servoOffsets[5])
        robotbit.Servo(robotbit.Servos.S7, 40 + servoOffsets[6])
    }
    
})
