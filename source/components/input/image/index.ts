import { InputImageInterface } from "./interface";
import { InputImageOptions } from "./types";
import { InstanceOptions } from "../../../container/types";
import SuiContainer from "../../../container";
import Component from "../../component";

/**
 * Default options for the image input instance.
 *
 * @type {InputImageOptions}
 */
const Default: InputImageOptions = {
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
 * @name         InputImage - Levdwire
 * @description  <b>InputImage</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class InputImage extends Component<InputImageOptions, HTMLElement> implements InputImageInterface {
    /**
     * Create a new image input instance.
     *
     * @param {HTMLElement} element
     * @param {InputImageOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: InputImageOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('InputImage', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('InputImage', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing image inputs.
 *
 * @return {void}
 */
export function initializeInputImages(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "InputImage" component.
    window.InputImage = InputImage;

    // Define the "InputImage" initialize function.
    window.initializeInputImages = initializeInputImages;
}

// Export
export default InputImage;