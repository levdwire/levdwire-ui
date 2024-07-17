import { PopoverInterface } from "./interface";
import { PopoverOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the popover instance.
 *
 * @type {PopoverOptions}
 */
const Default: PopoverOptions = {
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
 * @name         Popover - SUI
 * @description  <b>Popover</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Popover extends Component<PopoverOptions, HTMLElement> implements PopoverInterface {
    /**
     * Create a new popover instance.
     *
     * @param {HTMLElement} element
     * @param {PopoverOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: PopoverOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Popover', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Popover', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing popovers.
 *
 * @return {void}
 */
export function initializePopovers(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Popover" component.
    window.Popover = Popover;

    // Define the "Popover" initialize function.
    window.initializePopovers = initializePopovers;
}

// Export
export default Popover;