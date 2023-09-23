input.onButtonPressed(Button.A, function () {
    for (let j = 0; j <= 4; j++) {
        if (j == 0 || (j == 2 || j == 4)) {
            for (let i = 0; i <= 4; i++) {
                print(i, j)
            }
        } else {
            for (let i = 0; i <= 4; i++) {
                print(i, 4 - j)
            }
        }
    }
})
function print (x: number, y: number) {
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)
}
