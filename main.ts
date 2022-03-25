input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(1500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 40)
        basic.pause(545)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
DFRobotMaqueenPlus.I2CInit()
