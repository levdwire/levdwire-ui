import Accordion from "../components/accordion";
import Collapse from "../components/collapse";
import Carousel from "../components/carousel";
import Tooltip from "../components/tooltip";
import Dismiss from "../components/dismiss";
import Drawer from "../components/drawer";
import Dropdown from "../components/dropdown";

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
         * <b>Carousel</b> - Next generation user and application interface kit for developers.
         *
         * @type {Carousel}
         */
        Carousel: typeof Carousel;

        /**
         * <b>Dismiss</b> - Next generation user and application interface kit for developers.
         *
         * @type {Dismiss}
         */
        Dismiss: typeof Dismiss;

        /**
         * <b>Drawer</b> - Next generation user and application interface kit for developers.
         *
         * @type {Drawer}
         */
        Drawer: typeof Drawer;

        /**
         * <b>Dropdown</b> - Next generation user and application interface kit for developers.
         *
         * @type {Drawer}
         */
        Dropdown: typeof Dropdown;

        /**
         * <b>Collapse</b> - Next generation user and application interface kit for developers.
         *
         * @type {Collapse}
         */
        Collapse: typeof Collapse;

        /**
         * <b>Tooltip</b> - Next generation user and application interface kit for developers.
         *
         * @type {Tooltip}
         */
        Tooltip: typeof Tooltip;

        /**
         * Initialize all existing accordions.
         *
         * @type {void}
         */
        initializeAccordions: () => void;

        /**
         * Initialize all existing carousels.
         *
         * @type {void}
         */
        initializeCarousels: () => void;

        /**
         * Initialize all existing collapses.
         *
         * @type {void}
         */
        initializeCollapses: () => void;

        /**
         * Initialize all existing dismisses.
         *
         * @type {void}
         */
        initializeDismisses: () => void;

        /**
         * Initialize all existing drawers.
         *
         * @type {void}
         */
        initializeDrawers: () => void;

        /**
         * Initialize all existing dropdowns.
         *
         * @type {void}
         */
        initializeDropdowns: () => void;

        /**
         * Initialize all existing tooltips.
         *
         * @type {void}
         */
        initializeTooltips: () => void;

        /**
         * <b>Container</b> - Next generation user and application interface kit for developers.
         *
         * @type {Container}
         */
        SuiContainer: any;
    }
}