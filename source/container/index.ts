import { ContainerInterface } from "./interface";
import { AccordionInterface } from "../components/accordion/interface";
import { CollapseInterface } from "../components/collapse/interface";
import { CarouselInterface } from "../components/carousel/interface";
import { TooltipInterface } from "../components/tooltip/interface";
import { DismissInterface } from "../components/dismiss/interface";
import { DrawerInterface } from "../components/drawer/interface";
import { DropdownInterface } from "../components/dropdown/interface";
import { MenuInterface } from "../components/menu/interface";
import { ModalInterface } from "../components/modal/interface";
import { PopoverInterface } from "../components/popover/interface";
import { ToastInterface } from "../components/toast/interface";
import { ScrollInterface } from "../components/scroll/interface";
import { StepperInterface } from "../components/stepper/interface";
import { TableInterface } from "../components/table/interface";
import { TabsInterface } from "../components/tabs/interface";
import { InputNumberInterface } from "../components/input/number/interface";
import { InputImageInterface } from "../components/input/image/interface";

/**
 * @name         Container - Levdwire
 * @description  <b>Container</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Container implements ContainerInterface {
    /** @inheritdoc */
    _instances: {
        Accordion: { [id: string]: AccordionInterface };
        Carousel: { [id: string]: CarouselInterface };
        Collapse: { [id: string]: CollapseInterface };
        Dismiss: { [id: string]: DismissInterface };
        Drawer: { [id: string]: DrawerInterface };
        Dropdown: { [id: string]: DropdownInterface };
        Menu: { [id: string]: MenuInterface };
        Modal: { [id: string]: ModalInterface };
        Popover: { [id: string]: PopoverInterface };
        Scroll: { [id: string]: ScrollInterface };
        Stepper: { [id: string]: StepperInterface };
        Table: { [id: string]: TableInterface };
        Tabs: { [id: string]: TabsInterface };
        Toast: { [id: string]: ToastInterface };
        Tooltip: { [id: string]: TooltipInterface };
        InputNumber: { [id: string]: InputNumberInterface };
        InputImage: { [id: string]: InputImageInterface };
    };

    /**
     * Create a new container instance.
     *
     * @constructor
     */
    constructor() {
        // Set all component instances to empty.
        this._instances = {
            Accordion : {},
            Collapse : {},
            Carousel : {},
            Dismiss : {},
            Drawer : {},
            Dropdown : {},
            Menu : {},
            Modal : {},
            Popover : {},
            Scroll : {},
            Stepper : {},
            Table : {},
            Tabs : {},
            Toast : {},
            Tooltip : {},
            InputNumber : {},
            InputImage : {}
        };
    }

    /** @inheritdoc */
    add(component: keyof Container['_instances'], instance: any, id?: string, override: boolean = false): any {
        // Check if the component is available.
        if (!this._instances[component]) {
            // Notify the user of the transaction result.
            warningLog(`Component ${component} does not exist.`);

            // If the component is not found, return false.
            return false;
        }

        //  Check if any components have been registered with such a unique ID before.
        if (this._instances[component][id] && !override) {
            // Notify the user of the transaction result.
            warningLog(`Instance with ID ${id} already exists.`);

            // Return false if overwriting is disabled and the component is not found.
            return;
        }

        // Check if it has been declared to be overridden.
        if (override && this._instances[component][id]) {
            // Delete the instance as invalidation is desired.
            this._instances[component][id].destroyAndRemove();
        }

        // If a unique ID is not provided, create and add a new unique ID.
        this._instances[component][id ? id : this._generateRandomId()] = instance;
    }

    /** @inheritdoc */
    get(component: keyof Container['_instances'], id: string): any {
        // Component and check if there is a component with a unique identifier.
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }

        // If there is an existing instance with the given unique identifier, get it.
        return this._instances[component][id] as any;
    }

    /** @inheritdoc */
    set(component: keyof Container['_instances'], instance: any, id: string): boolean | void {
        // Component and check if there is a component with a unique identifier.
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }

        // If there is an existing instance with the given unique identifier, get it.
        this._instances[component][id] = instance;
    }

    /** @inheritdoc */
    has(component: keyof Container['_instances'], id: string): boolean | void {
        // Check if the ingredients are present in the instance.
        if (!this._instances[component]) {
            return false;
        }

        // Check if a component exists with the specified identifier.
        if (!this._instances[component][id]) {
            return false;
        }

        // If it passes both checks, it is present.
        return true;
    }

    /** @inheritdoc */
    remove(component: keyof Container['_instances'], id: string): boolean | void {
        // Component and check if there is a component with a unique identifier.
        if (!this._componentAndInstanceCheck(component, id)) {
            return;
        }

        // Remove the specified component.
        delete this._instances[component][id];
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
     * Generate a unique random id.
     *
     * @return {string}
     */
    private _generateRandomId(): string {
        // Generate a unique random ID.
        return Math.random().toString(36).substring(2, 9);
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
            warningLog(`Component ${component} does not exist.`);

            // Return false because the component does not exist.
            return false;
        }

        // Check if a component exists with the specified identifier.
        if (!this._instances[component][id]) {
            // Notify the user of the transaction result.
            warningLog(`Instance with ID ${id} does not exist.`);

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

// Export
export default SuiContainer;

// Check if there is a window containing the DOM document.
if (typeof window !== 'undefined') {
    // Identify the "Container" component.
    window.SuiContainer = SuiContainer;
}