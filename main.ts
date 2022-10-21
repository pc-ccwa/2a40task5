input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(j, i)
            basic.pause(200)
            basic.clearScreen()
            if (i == 0 && j == 4) {
                i += 1
            }
            while (false) {
            	
            }
        }
    }
})
basic.forever(function () {
	
})
