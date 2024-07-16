/**
 * @name         ComponentInterface - SUI
 * @description  <b>ComponentInterface</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 All rights reserved by Srylius.
 **/
export declare interface ComponentInterface<Options, Element> {
    /**
     * The component id.
     *
     * @type {string}
     */
    _id: string;

    /**
     * The component element.
     *
     * @type {HTMLElement|HTMLInputElement}
     */
    _element: Element;

    /**
     * The component options.
     *
     * @type {Options}
     */
    _options: Options;

    /**
     * The component status.
     *
     * @type {boolean}
     */
    _initialized: boolean;

    /**
     * Initialize component instance.
     *
     * @return {any}
     */
    initialize(): any;

    /**
     * Remove the component instance from the container.
     *
     * @return {boolean|void}
     */
    remove(): boolean | void;

    /**
     * Destroy the component instance from the container.
     *
     * @return {boolean|void}
     */
    destroy(): boolean | void;

    /**
     * Remove and destroy the component instance from the container.
     *
     * @return {boolean|void}
     */
    destroyAndRemove(): boolean | void;
}