input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
radio.sendValue("name", 0)
basic.forever(function () {
    led.unplot(0, 0)
})
