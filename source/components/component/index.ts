import { ComponentInterface } from "./interface";
import { ContainerInterface } from "../../container/interface";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";
import { ComponentOptions } from "./types";

/**
 * Default options for the component.
 *
 * @type {AccordionOptions}
 */
const Default: ComponentOptions = {
    // ...
};

/**
 * Default options for the component instance.
 *
 * @type {InstanceOptions}
 */
const DefaultInstance: InstanceOptions = {
    /** @inheritDoc */
    id: null,
    /** @inheritDoc */
    override: true,
};

/**
 * @name         Component - SUI
 * @description  <b>Component</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 *
 * @template O, E
 **/
export default abstract class Component<O = ComponentOptions, E = HTMLElement> implements ComponentInterface<O, E> {
    /** @inheritDoc */
    _id: string;

    /** @inheritDoc */
    _element: E;

    /** @inheritDoc */
    _options: O;

    /** @inheritDoc */
    _initialized: boolean;

    /**
     * Create a new component instance.
     *
     * @param {ContainerInterface['_instances']} component Component name.
     * @param {E} element Component element.
     * @param {O} options Component options.
     * @param {InstanceOptions} instanceOptions Component instance options.
     *
     * @constructor
     */
    constructor(
        component: keyof ContainerInterface['_instances'],
        element: E,
        options: O,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        // Set the component's unique ID for the container.
        this._id = instanceOptions.id
            ? instanceOptions.id
            // @ts-ignore
            : element.id;

        // Set the html element of the component.
        this._element = element;

        // Set the options of the component.
        this._options = { ...Default , ...options };

        // Set the initialization state of the component.
        this._initialized = false;

        // Initialize component.
        this.initialize();

        // Add the component's instance to the container.
        SuiContainer.add(
            component,
            this,
            this._id,
            instanceOptions.override
        );
    }

    /** @inheritdoc */
    abstract initialize(): any;

    /** @inheritdoc */
    abstract remove(): boolean | void;

    /** @inheritdoc */
    abstract destroy(): boolean | void;

    /** @inheritdoc */
    destroyAndRemove(): boolean | void {
        // Destroy existing instance from container.
        this.destroy();

        // Remove existing instance from container.
        this.remove();
    }
}