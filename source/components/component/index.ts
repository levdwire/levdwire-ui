import { ComponentInterface } from "./interface";
import { ContainerInterface } from "../../container/interface";
import { InstanceOptions } from "../../container/types";
import SuiContainer from "../../container";

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
 **/
export default abstract class Component<Options, HTMLElement> implements ComponentInterface<Options, Element> {
    /** @inheritDoc */
    _id;

    /** @inheritDoc */
    _element;

    /** @inheritDoc */
    _options;

    /** @inheritDoc */
    _initialized;

    /**
     * Create a new component instance.
     *
     * @param {ContainerInterface['_instances']} component Component name.
     * @param {HTMLElement} element Component element.
     * @param {Options} options Component options.
     * @param {InstanceOptions} instanceOptions Component instance options.
     *
     * @constructor
     */
    constructor(
        component: keyof ContainerInterface['_instances'],
        element: Element,
        options: Options,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        // Set the component's unique ID for the container.
        this._id = instanceOptions.id
            ? instanceOptions.id
            : element.id;

        // Set the html element of the component.
        this._element = element;

        // Set the options of the component.
        this._options = options;

        // Set the initialization state of the component.
        this._initialized = false;

        // Initialize component.
        this.initialize();

        // Add the component's instance to the container.
        SuiContainer.add(component, this, this._id, instanceOptions.override);
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