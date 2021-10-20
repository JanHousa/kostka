let x = 0
// int x slouží jako číslo kostky
let y = 0
// int y slouží pro změnu typu kostky
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    if (y == 0) {
        
        x = 0
        basic.showString("1-10")
        
        y = 1
    } else {
        
        x = 0
        basic.showString("1-6")
        
        y = 0
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let index: number;
    if (y == 0) {
        
        x = randint(1, 6)
        for (index = 0; index < x; index++) {
            music.rest(music.beat(50))
            music.playTone(262, music.beat(50))
        }
    } else {
        
        x = randint(1, 10)
        for (index = 0; index < x; index++) {
            music.rest(music.beat(50))
            music.playTone(262, music.beat(50))
        }
    }
    
})
loops.everyInterval(100, function on_every_interval2() {
    if (y == 1) {
        if (x == 0) {
            basic.showLeds(`
                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . . . . .
                `)
        }
        
        if (x == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 2) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . # . # .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 3) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 4) {
            basic.showLeds(`
                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
            `)
        }
        
        if (x == 5) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (x == 6) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (x == 7) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (x == 8) {
            basic.showLeds(`
                # . # . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . # . #
            `)
        }
        
        if (x == 9) {
            basic.showLeds(`
                # . # . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . # . #
            `)
        }
        
        if (x == 10) {
            basic.showLeds(`
                # . # . #
                                . # . # .
                                . . . . .
                                . # . # .
                                # . # . #
            `)
        }
        
    }
    
})
loops.everyInterval(100, function on_every_interval() {
    if (y == 0) {
        if (x == 0) {
            basic.showLeds(`
                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                        `)
        }
        
        if (x == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 2) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . # . # .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 3) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                . . . . .
            `)
        }
        
        if (x == 4) {
            basic.showLeds(`
                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
            `)
        }
        
        if (x == 5) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (x == 6) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            `)
        }
        
    }
    
})
