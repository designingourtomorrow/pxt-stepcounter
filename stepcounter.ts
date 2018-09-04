
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf051" advanced=false block="DOT Step Test"
namespace stepcounter {
    //background variables
    let secretSteps: number = 0                      // our actual step count
    let sampleArray: number[] = []                   // accelerometer readings
    let lastStepTime: number = input.runningTime()   // when we last had a step
    let minStrength: number = 8192                   // accelerometer strength varies so max/min are used
    let maxStrength: number = 0                      // to calculate a threshold value for different people
    let minTime: number = 800                        // milliseconds within which two peaks are /not/ two steps
    let maybeSteps: number[] = [0, 0, 0]             // array of minimal number of steps (three) we should count

    /**
     * helper function for mapping calculation brings any number to 25 for LED plotting
     */
    //% block
    export function mapTo25(value: number, target: number): number {
        return pins.map(value, 0, target, 0, 25)
    }

     /**
     * returns square root of added squares of 3 directions
     * Accel Strength is pythagorean and therefore mostly rotation-agnostic.
     */
    function getAccelStrength(): number {
        let X: number = input.acceleration(Dimension.X)
        let Y: number = input.acceleration(Dimension.Y)
        let Z: number = input.acceleration(Dimension.Z)
        return Math.sqrt(X * X + Y * Y + Z * Z)
    }
    
    /** 
    * used primarily once we move the sample data to where we will examine it to see if there is a 'step' in there
    */
    function blankSampleArray(): void {
        sampleArray = []
    }
    
    /**
     * randomise steps for testing
     */
    //% block="random number for testing"
    export function randomiseSteps(): void {
        secretSteps = Math.random(target)
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
     * graphs LEDs 0-25
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
