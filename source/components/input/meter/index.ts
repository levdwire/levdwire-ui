import { InputMeterInterface } from './interface'
import { InputMeterOptions } from './types'
import { InstanceOptions } from '../../../container/types'
import LevdwireContainer from '../../../container'
import Component from '../../component'

/**
 * Default options for the input meter instance.
 *
 * @type {InputMeterOptions}
 */
const Default: InputMeterOptions = {
    // ...
}

/**
 * Default options for the component instance.
 *
 * @type {InstanceOptions}
 */
const DefaultInstance: InstanceOptions = {
    id: null,
    override: true,
}

/**
 * @name         InputMeter - Levdwire
 * @description  <b>InputMeter</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class InputMeter
    extends Component<InputMeterOptions, HTMLElement>
    implements InputMeterInterface
{
    /**
     * Create a new input meter instance.
     *
     * @param {HTMLElement} element
     * @param {InputMeterOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: InputMeterOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('InputMeter', element, { ...Default, ...options }, instanceOptions)
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('InputMeter', this._id)
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing input meters.
 *
 * @return {void}
 */
export function initializeInputMeters(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "InputMeter" component.
    window.InputMeter = InputMeter

    // Define the "InputMeter" initialize function.
    window.initializeInputMeters = initializeInputMeters
}

// Export
export default InputMeter
