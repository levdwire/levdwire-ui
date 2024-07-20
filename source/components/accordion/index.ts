import { AccordionInterface } from "./interface";
import { AccordionOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import LevdwireContainer from "../../container";
import Component from "../component";

/**
 * Default options for the accordion instance.
 *
 * @type {AccordionOptions}
 */
const Default: AccordionOptions = {
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
 * @name         Accordion - Levdwire
 * @description  <b>Accordion</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Accordion extends Component<AccordionOptions, HTMLElement> implements AccordionInterface {
    /**
     * Create a new accordion instance.
     *
     * @param {HTMLElement} element
     * @param {AccordionOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: AccordionOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Accordion', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Accordion', this._id);
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
export function initializeAccordions(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Accordion" component.
    window.Accordion = Accordion;

    // Define the "Accordion" initialize function.
    window.initializeAccordions = initializeAccordions;
}

// Export
export default Accordion;
