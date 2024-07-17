import { CollapseInterface } from "./interface";
import { CollapseOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the accordion instance.
 *
 * @type {CollapseOptions}
 */
const Default: CollapseOptions = {
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
 * @name         Collapse - Levdwire
 * @description  <b>Collapse</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Collapse extends Component<CollapseOptions, HTMLElement> implements CollapseInterface {
    /**
     * Create a new accordion instance.
     *
     * @param {HTMLElement} element
     * @param {CollapseOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: CollapseOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Collapse', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Collapse', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing accordions.
 *
 * @return {void}
 */
export function initializeCollapses(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Collapse" component.
    window.Collapse = Collapse;

    // Define the "Collapse" initialize function.
    window.initializeCollapses = initializeCollapses;
}

// Export
export default Collapse;