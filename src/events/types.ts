/**
 * @name         EventListenerInstance - SUI
 * @description  <b>EventListenerInstance</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The Srylius CPL v1 (https://license.srylius.com/the-srylius-cpl-v1)
 * @copyright    (C) 2010 - 2024 All rights reserved by Srylius.
 **/
export declare type EventListenerInstance = {
    /**
     * The event listener element.
     *
     * @type {HTMLElement}
     */
    element: HTMLElement

    /**
     * The event listener type.
     *
     * @type {string}
     */
    type: string

    /**
     * The event listener.
     *
     * @type {EventListener | EventListenerObject}
     */
    handler: EventListener | EventListenerObject
}
