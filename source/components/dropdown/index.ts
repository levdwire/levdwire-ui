import { DropdownInterface } from "./interface";
import { DropdownOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the dropdown instance.
 *
 * @type {DropdownOptions}
 */
const Default: DropdownOptions = {
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
 * @name         Dropdown - SUI
 * @description  <b>Dropdown</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Dropdown extends Component<DropdownOptions, HTMLElement> implements DropdownInterface {
    /**
     * Create a new dropdown instance.
     *
     * @param {HTMLElement} element
     * @param {DropdownOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: DropdownOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Dropdown', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Dropdown', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing dropdowns.
 *
 * @return {void}
 */
export function initializeDropdowns(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Dropdown" component.
    window.Dropdown = Dropdown;

    // Define the "Dropdown" initialize function.
    window.initializeDropdowns = initializeDropdowns;
}

// Export
export default Dropdown;