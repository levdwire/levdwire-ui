/**
 * @name         EventsInterface - Levdwire
 * @description  <b>EventsInterface</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
export declare interface EventsInterface {
    /**
     * The event type.
     *
     * @type {string}
     */
    _type: string;

    /**
     * The event functions.
     *
     * @type {EventListener[]}
     */
    _functions: EventListener[];
}