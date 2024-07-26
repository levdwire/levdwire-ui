import { Instances } from './types'

/**
 * @name         ContainerInterface - Levdwire
 * @description  <b>ContainerInterface</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
export declare interface ContainerInterface {
	/**
	 * Instances of components available in the container.
	 *
	 * @type {Instances}
	 */
	_instances: Instances

	/**
	 * Add a new component instance into the container.
	 *
	 * @param {Instances} component
	 * @param {any} instance
	 * @param {string} id
	 * @param {boolean} override
	 *
	 * @return {any}
	 */
	add(component: keyof Instances, instance: any, id: string, override?: boolean): any

	/**
	 * Get an existing component instance from container.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {any}
	 */
	get(component: keyof Instances, id: string): any

	/**
	 * Get an existing component all instance from container.
	 *
	 * @param {Instances} component
	 *
	 * @return {any}
	 */
	getMany(component: keyof Instances): any

	/**
	 * Set an existing component instance from container.
	 *
	 * @param {Instances} component
	 * @param {any} instance
	 * @param {string} id
	 *
	 * @return {boolean|void}
	 */
	set(component: keyof Instances, instance: any, id: string): boolean | void

	/**
	 * Check if the container has the given component instance.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {boolean|void}
	 */
	has(component: keyof Instances, id: string): boolean | void

	/**
	 * Remove the given component instance from the container.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {boolean|void}
	 */
	remove(component: keyof Instances, id: string): boolean | void

	/**
	 * Destroy the given component instance from the container.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {boolean|void}
	 */
	destroy(component: keyof Instances, id: string): boolean | void

	/**
	 * Remove and destroy the given component instance from the container.
	 *
	 * @param {Instances} component
	 * @param {string} id
	 *
	 * @return {boolean|void}
	 */
	destroyAndRemove(component: keyof Instances, id: string): boolean | void

	/**
	 * Retrieve all components and instances contained in the container.
	 *
	 * @return {any}
	 */
	all(): any
}
