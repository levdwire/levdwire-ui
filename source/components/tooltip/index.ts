import { TooltipInterface } from "./interface";
import { TooltipOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the tooltip instance.
 *
 * @type {TooltipOptions}
 */
const Default: TooltipOptions = {
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
 * @name         Tooltip - SUI
 * @description  <b>Tooltip</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Tooltip extends Component<TooltipOptions, HTMLElement> implements TooltipInterface {
    /**
     * Create a new tooltip instance.
     *
     * @param {HTMLElement} element
     * @param {TooltipOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: TooltipOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Tooltip', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Tooltip', this._id);
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing tooltips.
 *
 * @return {void}
 */
export function initializeTooltips(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Tooltip" component.
    window.Tooltip = Tooltip;

    // Define the "Tooltip" initialize function.
    window.initializeTooltips = initializeTooltips;
}

// Export
export default Tooltip;