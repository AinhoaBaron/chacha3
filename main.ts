input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
