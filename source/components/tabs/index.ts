import { TabsInterface } from "./interface";
import { TabsOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the tabs instance.
 *
 * @type {TabsOptions}
 */
const Default: TabsOptions = {
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
 * @name         Tabs - Levdwire
 * @description  <b>Tabs</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Tabs extends Component<TabsOptions, HTMLElement> implements TabsInterface {
    /**
     * Create a new tabs instance.
     *
     * @param {HTMLElement} element
     * @param {TabsOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: TabsOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Tabs', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Tabs', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing tabss.
 *
 * @return {void}
 */
export function initializeTabs(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Tabs" component.
    window.Tabs = Tabs;

    // Define the "Tabs" initialize function.
    window.initializeTabs = initializeTabs;
}

// Export
export default Tabs;