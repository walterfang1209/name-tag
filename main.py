def on_button_pressed_a():
    for i in range(5):
        while i == 0 or (i == 2 or i == 4):
            for j in range(5):
                led.plot(i, j)
                basic.pause(500)
                led.unplot(i, j)
input.on_button_pressed(Button.A, on_button_pressed_a)
