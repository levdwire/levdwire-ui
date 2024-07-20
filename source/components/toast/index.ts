import { ToastInterface } from "./interface";
import { ToastOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import LevdwireContainer from "../../container";
import Component from "../component";

/**
 * Default options for the toast instance.
 *
 * @type {ToastOptions}
 */
const Default: ToastOptions = {
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
 * @name         Toast - Levdwire
 * @description  <b>Toast</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Toast extends Component<ToastOptions, HTMLElement> implements ToastInterface {
    /**
     * Create a new toast instance.
     *
     * @param {HTMLElement} element
     * @param {ToastOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: ToastOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Toast', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Toast', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing toasts.
 *
 * @return {void}
 */
export function initializeToasts(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Toast" component.
    window.Toast = Toast;

    // Define the "Toast" initialize function.
    window.initializeToasts = initializeToasts;
}

// Export
export default Toast;
