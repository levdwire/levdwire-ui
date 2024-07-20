import { TableInterface } from './interface'
import { TableOptions } from './types'
import { InstanceOptions } from '../../container/types'
import LevdwireContainer from '../../container'
import Component from '../component'

/**
 * Default options for the table instance.
 *
 * @type {TableOptions}
 */
const Default: TableOptions = {
    // ...
}

/**
 * Default options for the component instance.
 *
 * @type {InstanceOptions}
 */
const DefaultInstance: InstanceOptions = {
    id: null,
    override: true,
}

/**
 * @name         Table - Levdwire
 * @description  <b>Table</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Table extends Component<TableOptions, HTMLElement> implements TableInterface {
    /**
     * Create a new table instance.
     *
     * @param {HTMLElement} element
     * @param {TableOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: TableOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Table', element, { ...Default, ...options }, instanceOptions)
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Table', this._id)
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing tables.
 *
 * @return {void}
 */
export function initializeTables(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Table" component.
    window.Table = Table

    // Define the "Table" initialize function.
    window.initializeTables = initializeTables
}

// Export
export default Table
