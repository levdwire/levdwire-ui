import { ComponentInterface } from "./interface";

/**
 * @name         Component - SUI
 * @description  <b>Component</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://docs.srylius.com/ui/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Component<Options, Element> implements ComponentInterface<Options, Element> {
    /** @inheritDoc */
    _id: string;

    /** @inheritDoc */
    _element: Element;

    /** @inheritDoc */
    _options: Options;

    /** @inheritDoc */
    _initialized: boolean;
}