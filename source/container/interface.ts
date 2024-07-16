import {AccordionInterface} from "../components/accordion/interface";

/**
 * @name         ContainerInterface - SUI
 * @description  <b>ContainerInterface</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
export declare interface ContainerInterface {
    /**
     * Instances of components available in the container.
     *
     * @private
     */
    _instances: {
        Accordion: { [id: string]: AccordionInterface };
    };

    /**
     * Add a new component instance into the container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {any} instance
     * @param {string} id
     * @param {boolean} override
     *
     * @return {any}
     */
    add(component: keyof ContainerInterface['_instances'], instance: any, id?: string, override?: boolean): any;

    /**
     * Get an existing component instance from container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {string} id
     *
     * @return {any}
     */
    get(component: keyof ContainerInterface['_instances'], id: string): any;

    /**
     * Set an existing component instance from container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {any} instance
     * @param {string} id
     *
     * @return {boolean|void}
     */
    set(component: keyof ContainerInterface['_instances'], instance: any, id: string): boolean | void;

    /**
     * Check if the container has the given component instance.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {string} id
     *
     * @return {boolean|void}
     */
    has(component: keyof ContainerInterface['_instances'], id: string): boolean | void;

    /**
     * Remove the given component instance from the container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {string} id
     *
     * @return {boolean|void}
     */
    remove(component: keyof ContainerInterface['_instances'], id: string): boolean | void;

    /**
     * Destroy the given component instance from the container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {string} id
     *
     * @return {boolean|void}
     */
    destroy(component: keyof ContainerInterface['_instances'], id: string): boolean | void;

    /**
     * Remove and destroy the given component instance from the container.
     *
     * @param {ContainerInterface['_instances']} component
     * @param {string} id
     *
     * @return {boolean|void}
     */
    destroyAndRemove(component: keyof ContainerInterface['_instances'], id: string): boolean | void;

    /**
     * Retrieve all components and instances contained in the container.
     *
     * @return {any}
     */
    all(): any;
}