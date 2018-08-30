
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf051" advanced=false block="DOT Step Test"
namespace stepcounter {
    //background secret variable
    let secretSteps = 0

    /**
     * helper function for mapping calculation brings any number to 25
     */
    //% block
    export function mapTo25(value: number, target: number): number {
        return pins.map(value, 0, target, 0, 25)
    }

    /**
     * randomise steps for testing
     */
    //% block="random number for testing"
    export function randomiseSteps(): void {
        secretSteps = Math.random(target)
    }


    /**
     * return 'wheeee' (a test of block labelling)
     */
    //% block="wheeee"
    export function woooo(): string {
        return "wheeee"
    }

    /**
     * set a target and count steps in the background
     * @param target, eg: 1000
     */
    //% block
    export function countStepsTo(target: number): void {
        // Dummy 'counter'
        secretSteps = Math.random(1024)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function graphOnScreen(target: number): void {
        let value = secretSteps
        if (value > target) {
            value = target
        }
        let screenValue = mapTo25(value, target)
        if (screenValue == 0) {
            basic.clearScreen()
            basic.showNumber(0)
        } else {
            basic.clearScreen()
            for (let index = 0; index <= screenValue; index++) {
                led.plot(index / 5, 4 - index % 5)
            }
        }
        value += 1
        if (value > 25) {
            value = 0
        }
    }
}
