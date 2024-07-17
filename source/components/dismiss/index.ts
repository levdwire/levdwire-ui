import { DismissInterface } from "./interface";
import { DismissOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the dismiss instance.
 *
 * @type {DismissOptions}
 */
const Default: DismissOptions = {
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
 * @name         Dismiss - SUI
 * @description  <b>Dismiss</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Dismiss extends Component<DismissOptions, HTMLElement> implements DismissInterface {
    /**
     * Create a new dismiss instance.
     *
     * @param {HTMLElement} element
     * @param {DismissOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: DismissOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Dismiss', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Dismiss', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing dismisss.
 *
 * @return {void}
 */
export function initializeDismisses(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Dismiss" component.
    window.Dismiss = Dismiss;

    // Define the "Dismiss" initialize function.
    window.initializeDismisses = initializeDismisses;
}

// Export
export default Dismiss;