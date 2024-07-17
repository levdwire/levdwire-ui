import { ScrollInterface } from "./interface";
import { ScrollOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the scroll instance.
 *
 * @type {ScrollOptions}
 */
const Default: ScrollOptions = {
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
 * @name         Scroll - Levdwire
 * @description  <b>Scroll</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Scroll extends Component<ScrollOptions, HTMLElement> implements ScrollInterface {
    /**
     * Create a new scroll instance.
     *
     * @param {HTMLElement} element
     * @param {ScrollOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: ScrollOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Scroll', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Scroll', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing scrolls.
 *
 * @return {void}
 */
export function initializeScrolls(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Scroll" component.
    window.Scroll = Scroll;

    // Define the "Scroll" initialize function.
    window.initializeScrolls = initializeScrolls;
}

// Export
export default Scroll;