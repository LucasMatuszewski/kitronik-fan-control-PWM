// Kitronik Innovator's KIT
// Using transistor to drive a motor
let isOn = false;
let duty = 0;

input.onButtonPressed(Button.A, function () {
    isOn = !isOn;
})

basic.forever(function () {
    while (duty < 1023 && isOn) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 1
        basic.pause(10)
    }
    while (duty > 0 && isOn) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty - 1
        basic.pause(10)
    }
    if(!isOn && duty !== 0) {
        duty = 0;
        pins.analogWritePin(AnalogPin.P0, duty)
    }
})
