import { MenuInterface } from './interface'
import { MenuOptions } from './types'
import { InstanceOptions } from '../../container/types'
import LevdwireContainer from '../../container'
import Component from '../component'

/**
 * Default options for the menu instance.
 *
 * @type {MenuOptions}
 */
const Default: MenuOptions = {
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
 * @name         Menu - Levdwire
 * @description  <b>Menu</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Menu extends Component<MenuOptions, HTMLElement> implements MenuInterface {
    /**
     * Create a new menu instance.
     *
     * @param {HTMLElement} element
     * @param {MenuOptions} options
     * @param {DefaultInstance} instanceOptions
     *
     * @constructor
     */
    constructor(
        element: HTMLElement | null = null,
        options: MenuOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstance
    ) {
        super('Menu', element, { ...Default, ...options }, instanceOptions)
    }

    /** @inheritdoc */
    initialize(): any {
        // ...
    }

    /** @inheritdoc */
    remove(): boolean | void {
        // Remove existing instance from container.
        LevdwireContainer.remove('Menu', this._id)
    }

    /** @inheritdoc */
    destroy(): boolean | void {
        // ...
    }
}

/**
 * Initialize all existing menus.
 *
 * @return {void}
 */
export function initializeMenus(): void {
    // ...
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "Menu" component.
    window.Menu = Menu

    // Define the "Menu" initialize function.
    window.initializeMenus = initializeMenus
}

// Export
export default Menu
