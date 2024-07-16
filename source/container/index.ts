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
        // Srylius :: Set all component instances to empty.
        this._instances = {};
    }
}