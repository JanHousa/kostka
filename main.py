x = 0   #int x slouží jako číslo kostky
y = 0   #int y slouží pro změnu typu kostky
def on_logo_event_pressed():
    if y == 0:
            global x
            x = 0
            basic.show_string("1-10")
            global y
            y = 1

    else:
            global x
            x = 0
            basic.show_string("1-6")
            global y
            y = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)

def on_button_pressed_a():
    if y == 0:
        global x
        x = randint(1, 6)
        for index in range(x):
                            music.rest(music.beat(50))
                            music.play_tone(262, music.beat(50))
                            
    else: 
        global x
        x = randint (1, 10)
        for index in range(x):
                            music.rest(music.beat(50))
                            music.play_tone(262, music.beat(50))
                            

input.on_button_pressed(Button.A, on_button_pressed_a)

          

def on_every_interval2():
    if y == 1:
        if x == 0:
                basic.show_leds("""
                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . . . . .
                """)

        if x == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)

        if x == 2:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . # . # .
                                . . . . .
                                . . . . .
            """)
            
        if x == 3:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                . . . . .
            """)
        
        if x == 4:
            basic.show_leds("""
                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
            """)
           
        if x == 5:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            """)
           
        if x == 6:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            """)
           
        if x == 7:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            """)
            
        if x == 8:
            basic.show_leds("""
                # . # . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . # . #
            """)
            
        if x == 9:
            basic.show_leds("""
                # . # . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . # . #
            """)
           
                                   
        if x == 10:
            basic.show_leds("""
                # . # . #
                                . # . # .
                                . . . . .
                                . # . # .
                                # . # . #
            """)
            
loops.every_interval(100, on_every_interval2)

def on_every_interval():
    if y == 0:
        if x == 0:
                        basic.show_leds("""
                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                        """)
        if x == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
        if x == 2:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . # . # .
                                . . . . .
                                . . . . .
            """)
        if x == 3:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                . . . . .
            """)
        if x == 4:
            basic.show_leds("""
                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
            """)
        if x == 5:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            """)
        if x == 6:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            """)
loops.every_interval(100, on_every_interval)


