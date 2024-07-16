import { ContainerInterface } from "./interface";

/**
 * @name         Container - SUI
 * @description  <b>Container</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Container implements ContainerInterface {
    /** @inheritdoc */
    _instances: {};

    /**
     * Create a new container instance.
     *
     * @constructor
     */
    constructor() {
        // Set all component instances to empty.
        this._instances = {};
    }

    /** @inheritdoc */
    get(component: keyof Container['_instances'], id: string): any {
        // ...
    }

    /** @inheritdoc */
    set(component: keyof Container['_instances'], instance: any, id: string): boolean | void {
        // ...
    }

    /** @inheritdoc */
    has(component: keyof Container['_instances'], id: string): boolean | void {
        // ...
    }

    /** @inheritdoc */
    remove(component: keyof Container['_instances'], id: string): boolean | void {
        // ...
    }

    /** @inheritdoc */
    destroy(component: keyof Container['_instances'], id: string): boolean | void {
        // Component and check if there is a component with a unique identifier.
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }

        // Destroy the specified component.
        this._instances[component][id].destroy();
    }

    /** @inheritdoc */
    destroyAndRemove(component: keyof Container['_instances'], id: string): boolean | void {
        // Component and check if there is a component with a unique identifier.
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }

        // Destroy the given component instance from the container.
        this.destroy(component, id);

        // Remove the given component instance from the container.
        this.remove(component, id);
    }

    /** @inheritDoc */
    all(): any {
        // Return all existing instances.
        return this._instances;
    }

    /**
     * Component and check if there is a component with a unique identifier.
     *
     * @param {Container['_instances']} component
     * @param {string} id
     *
     * @return {boolean}
     */
    private _componentAndInstanceCheck(component: keyof Container['_instances'], id: string): boolean {
        // Check if the ingredients are present in the instance.
        if (!this._instances[component]) {
            // Notify the user of the transaction result.
            console.warn(`%c⚠️Srylius.UI (SUI) - %c Component ${component} does not exist.`,
                'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
                'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
            );

            // Return false because the component does not exist.
            return false;
        }

        // Check if a component exists with the specified identifier.
        if (!this._instances[component][id]) {
            // Srylius :: Notify the user of the transaction result.
            console.warn(`%c⚠️Srylius.UI (SUI) - %c Instance with ID ${id} does not exist.`,
                'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
                'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
            );

            // Return false because the instance does not exist.
            return false;
        }

        // Return true if the component and instance exist.
        return true;
    }
}

/**
 * <b>Container</b> - Next generation user and application interface kit for developers.
 *
 * @type {Container}
 */
const SuiContainer: Container = new Container();

// Srylius :: Export
export default SuiContainer;

// Check if there is a window containing the DOM document.
if (typeof window !== 'undefined') {
    // Identify the "Container" component.
    window.SuiContainer = SuiContainer;
}