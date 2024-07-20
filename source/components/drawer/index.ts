import { DrawerInterface } from './interface'
import { DrawerOptions } from './types'
import { InstanceOptions } from '../../container/types'
import LevdwireContainer from '../../container'
import Component from '../component'

/**
 * Default options for the drawer instance.
 *
 * @type {DrawerOptions}
 */
const Default: DrawerOptions = {
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
 * @name         Drawer - Levdwire
 * @description  <b>Drawer</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Drawer extends Component<DrawerOptions, HTMLElement> implements DrawerInterface {
    /**
     * Create a new drawer instance.
     *
     * @param {HTMLElement} element
     * @param {DrawerOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: DrawerOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Drawer', element, { ...Default, ...options }, instanceOptions)
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Drawer', this._id)
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing drawers.
 *
 * @return {void}
 */
export function initializeDrawers(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Drawer" component.
    window.Drawer = Drawer

    // Define the "Drawer" initialize function.
    window.initializeDrawers = initializeDrawers
}

// Export
export default Drawer
