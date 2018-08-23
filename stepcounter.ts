
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace stepcounter {
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function mapToScreen(value: number) {
        if (value == 0) {
            basic.clearScreen()
        } else {
            basic.clearScreen()
            for (let index = 0; index <= value; index++) {
                led.plot(index / 5, 4 - index % 5)
            }
        }
        value += 1
        if (value > 25) {
            value = 0
        }
    }
}
