import { StepperInterface } from "./interface";
import { StepperOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import LevdwireContainer from "../../container";
import Component from "../component";

/**
 * Default options for the stepper instance.
 *
 * @type {StepperOptions}
 */
const Default: StepperOptions = {
    // ...
};

/**
 * Default options for the component instance.
 *
 * @type {InstanceOptions}
 */
const DefaultInstance: InstanceOptions = {
    id: null,
    override: true,
};

/**
 * @name         Stepper - Levdwire
 * @description  <b>Stepper</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Stepper extends Component<StepperOptions, HTMLElement> implements StepperInterface {
    /**
     * Create a new stepper instance.
     *
     * @param {HTMLElement} element
     * @param {StepperOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: StepperOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Stepper', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Stepper', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing steppers.
 *
 * @return {void}
 */
export function initializeSteppers(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Stepper" component.
    window.Stepper = Stepper;

    // Define the "Stepper" initialize function.
    window.initializeSteppers = initializeSteppers;
}

// Export
export default Stepper;
