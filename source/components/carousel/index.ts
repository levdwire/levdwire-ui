import { CarouselInterface } from "./interface";
import { CarouselOptions } from "./types";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import Component from "../component";

/**
 * Default options for the accordion instance.
 *
 * @type {CarouselOptions}
 */
const Default: CarouselOptions = {
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
 * @name         Carousel - SUI
 * @description  <b>Carousel</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Carousel extends Component<CarouselOptions, HTMLElement> implements CarouselInterface {
    /**
     * Create a new accordion instance.
     *
     * @param {HTMLElement} element
     * @param {CarouselOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: CarouselOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Carousel', element, { ...Default ,...options }, instanceOptions);
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        SuiContainer.remove('Carousel', this._id);
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
export function initializeCarousels(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Carousel" component.
    window.Carousel = Carousel;

    // Define the "Carousel" initialize function.
    window.initializeCarousels = initializeCarousels;
}

// Export
export default Carousel;