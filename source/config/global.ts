import Accordion from "../components/accordion";
import Collapse from "../components/collapse";

declare global {
    /**
     * @name         Window - SUI
     * @description  <b>Window</b> - Next generation user and application interface kit for developers.
     * @version      v1.0.0
     * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
     * @license      The MIT License (https://docs.srylius.com/ui/license)
     * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
     */
    interface Window {
        /**
         * <b>Accordion</b> - Next generation user and application interface kit for developers.
         *
         * @type {Accordion}
         */
        Accordion: typeof Accordion;

        /**
         * <b>Collapse</b> - Next generation user and application interface kit for developers.
         *
         * @type {Collapse}
         */
        Collapse: typeof Collapse;

        /**
         * Initialize all existing accordions.
         *
         * @type {void}
         */
        initializeAccordions: () => void;

        /**
         * Initialize all existing collapses.
         *
         * @type {void}
         */
        initializeCollapses: () => void;

        /**
         * <b>Container</b> - Next generation user and application interface kit for developers.
         *
         * @type {Container}
         */
        SuiContainer: any;
    }
}