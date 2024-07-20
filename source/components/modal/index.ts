import { ModalInterface } from "./interface";
import { ModalOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import LevdwireContainer from "../../container";
import Component from "../component";

/**
 * Default options for the modal instance.
 *
 * @type {ModalOptions}
 */
const Default: ModalOptions = {
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
 * @name         Modal - Levdwire
 * @description  <b>Modal</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Modal extends Component<ModalOptions, HTMLElement> implements ModalInterface {
    /**
     * Create a new modal instance.
     *
     * @param {HTMLElement} element
     * @param {ModalOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: ModalOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Modal', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Modal', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing modals.
 *
 * @return {void}
 */
export function initializeModals(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Modal" component.
    window.Modal = Modal;

    // Define the "Modal" initialize function.
    window.initializeModals = initializeModals;
}

// Export
export default Modal;
