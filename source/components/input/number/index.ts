import { InputNumberInterface } from "./interface";
import { InputNumberOptions } from "./types";
import { InstanceOptions } from "../../../container/types";
import SuiContainer from "../../../container";
import Component from "../../component";

/**
 * Default options for the number input instance.
 *
 * @type {InputNumberOptions}
 */
const Default: InputNumberOptions = {
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
 * @name         InputNumber - SUI
 * @description  <b>InputNumber</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class InputNumber extends Component<InputNumberOptions, HTMLElement> implements InputNumberInterface {
    /**
     * Create a new number input instance.
     *
     * @param {HTMLElement} element
     * @param {InputNumberOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: InputNumberOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('InputNumber', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('InputNumber', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing number inputs.
 *
 * @return {void}
 */
export function initializeInputNumbers(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "InputNumber" component.
    window.InputNumber = InputNumber;

    // Define the "InputNumber" initialize function.
    window.initializeInputNumbers = initializeInputNumbers;
}

// Export
export default InputNumber;