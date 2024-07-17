import { EventsInterface } from "./interface";

/**
 * @name         Events - Levdwire
 * @description  <b>Events</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Events implements EventsInterface {
    /** @inheritdoc */
    _type: string;

    /** @inheritdoc */
    _functions: EventListener[];

    /**
     * Create a new events instance.
     *
     * @constructor
     */
    constructor(type: string, functions: EventListener[] = []) {
        // Set event type.
        this._type = type;

        // Set event functions.
        this._functions = functions;
    }

    /** @inheritdoc */
    initialize(): void {
        // Register existing listeners individually for the event.
        this._functions.forEach((tFunction) => {
            // Check if a valid dom element exists.
            if (typeof window !== 'undefined') {
                // Add a new event listener with the specified type.
                window.addEventListener(this._type, tFunction);
            }
        });
    }
}