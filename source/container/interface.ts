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
    _instances: {};

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
     * Retrieve all components and instances contained in the container.
     *
     * @return {any}
     */
    all(): any;
}