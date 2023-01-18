let Temp_in_F = 0
basic.forever(function () {
    serial.writeValue("Farenheit", Temp_in_F)
    Temp_in_F = input.temperature() + 32 * 1.8
    basic.showNumber(Temp_in_F)
    basic.pause(1000)
})
