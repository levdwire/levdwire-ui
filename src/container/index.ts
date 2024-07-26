import { ContainerInterface } from './interface'
import { Instances } from './types'
import Utility from '../utility/levdwire'

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
	_instances: Instances

	/**
	 * Create a new container instance.
	 *
	 * @constructor
	 */
	constructor() {
		// Set all component instances to empty.
		this._instances = {
			Accordion: {},
			Carousel: {},
			Collapse: {},
			Dismiss: {},
			Drawer: {},
			Dropdown: {},
			InputImage: {},
			InputMeter: {},
			InputNumber: {},
			Menu: {},
			Modal: {},
			Popover: {},
			Scroll: {},
			Stepper: {},
			Table: {},
			Tabs: {},
			Toast: {},
			Tooltip: {},
		}
	}

	/** @inheritdoc */
	add(component: keyof Instances, instance: any, id: string, override = false): any {
		// Check if the component is available.
		if (!this._instances[component]) {
			// Notify the user of the transaction result.
			Utility.warning(`Component ${component} does not exist.`)

			// If the component is not found, return false.
			return false
		}

		// Check if any components have been registered with such a unique ID before.
		if (this._instances[component][id] && !override) {
			// Notify the user of the transaction result.
			Utility.warning(`Instance with ID ${id} already exists.`)

			// Return false if overwriting is disabled and the component is not found.
			return false
		}

		// Check if it has been declared to be overridden.
		if (override && this._instances[component][id]) {
			// Delete the instance as invalidation is desired.
			this._instances[component][id].destroyAndRemove()
		}

		// If a unique ID is not provided, create and add a new unique ID.
		this._instances[component][id ? id : Utility.generate('id')] = instance
	}

	/** @inheritdoc */
	get(component: keyof Instances, id: string): any {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// Check if there is a component instance in the container.
		if (!this._checkInstance(component, id)) {
			return false
		}

		// If there is an existing instance with the given unique identifier, get it.
		return this._instances[component][id] as any
	}

	/** @inheritdoc */
	getMany(component: keyof Instances): any {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// All available instances for the component.
		return this._instances[component]
	}

	/** @inheritdoc */
	set(component: keyof Instances, instance: any, id: string): boolean | void {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// Check if there is a component instance in the container.
		if (!this._checkInstance(component, id)) {
			return false
		}

		// If there is an existing instance with the given unique identifier, get it.
		this._instances[component][id] = instance
	}

	/** @inheritdoc */
	has(component: keyof Instances, id: string): boolean | void {
		// Check if the ingredients are present in the instance.
		if (!this._instances[component]) {
			return false
		}

		// Check if a component exists with the specified identifier.
		if (!this._instances[component][id]) {
			return false
		}

		// If it passes both checks, it is present.
		return true
	}

	/** @inheritdoc */
	remove(component: keyof Instances, id: string): boolean | void {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// Check if there is a component instance in the container.
		if (!this._checkInstance(component, id)) {
			return false
		}

		// Remove the given component instance from the container.
		delete this._instances[component][id]
	}

	/** @inheritdoc */
	destroy(component: keyof Instances, id: string): boolean | void {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// Check if there is a component instance in the container.
		if (!this._checkInstance(component, id)) {
			return false
		}

		// Destroy the given component instance from the container.
		this._instances[component][id].destroy()
	}

	/** @inheritdoc */
	destroyAndRemove(component: keyof Instances, id: string): boolean | void {
		// Check if there are components in the container.
		if (!this._checkComponent(component)) {
			return false
		}

		// Check if there is a component instance in the container.
		if (!this._checkInstance(component, id)) {
			return false
		}

		// Destroy the given component instance from the container.
		this.destroy(component, id)

		// Remove the given component instance from the container.
		this.remove(component, id)
	}

	/** @inheritDoc */
	all(): any {
		// Return all existing component instances.
		return this._instances
	}

	/**
	 * Check if there are components in the container.
	 *
	 * @param {Instances} component
	 *
	 * @return {boolean}
	 */
	protected _checkComponent(component: keyof Instances): boolean {
		// Check if the ingredients are present in the instance.
		if (!this._instances[component]) {
			// Notify the user of the transaction result.
			Utility.warning(`Component ${component} does not exist.`)

			// Return false because the component does not exist.
			return false
		}

		// Return true if the component and instance exist.
		return true
	}

	/**
	 * Check if there is a component instance in the container.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {boolean}
	 */
    protected _checkInstance(component: keyof Instances, id: string): boolean {
		// Check if a component exists with the specified identifier.
		if (!this._instances[component][id]) {
			// Notify the user of the transaction result.
			Utility.warning(`Instance with ID ${id} does not exist.`)

			// Return false because the instance does not exist.
			return false
		}

		// Return true if the component and instance exist.
		return true
	}
}

/**
 * <b>Container</b> - Next generation user and application interface kit for developers.
 *
 * @type {Container}
 */
const LevdwireContainer: Container = new Container()

// Export
export default LevdwireContainer

// Check if there is a window containing the DOM document.
if (typeof window !== 'undefined') {
	// Identify the "Container".
	window.LevdwireContainer = LevdwireContainer
}
