import Accordion from "../components/accordion";
import Collapse from "../components/collapse";
import Carousel from "../components/carousel";
import Tooltip from "../components/tooltip";
import Dismiss from "../components/dismiss";
import Drawer from "../components/drawer";
import Dropdown from "../components/dropdown";
import Menu from "../components/menu";
import Modal from "../components/modal";
import Popover from "../components/popover";
import Tabs from "../components/tabs";
import InputNumber from "../components/input/number";

declare global {
    /**
     * @name         Window - Levdwire
     * @description  <b>Window</b> - Next generation user and application interface kit for developers.
     * @version      v1.0.0
     * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
     * @license      The MIT License (https://levdwire.com/docs/license)
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
         * <b>Collapse</b> - Next generation user and application interface kit for developers.
         *
         * @type {Collapse}
         */
        Collapse: typeof Collapse;

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
         * @type {Dropdown}
         */
        Dropdown: typeof Dropdown;

        /**
         * <b>Menu</b> - Next generation user and application interface kit for developers.
         *
         * @type {Menu}
         */
        Menu: typeof Menu;

        /**
         * <b>Modal</b> - Next generation user and application interface kit for developers.
         *
         * @type {Modal}
         */
        Modal: typeof Modal;

        /**
         * <b>Popover</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        Popover: typeof Popover;

        /**
         * <b>Tabs</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        Tabs: typeof Tabs;

        /**
         * <b>Tooltip</b> - Next generation user and application interface kit for developers.
         *
         * @type {Tooltip}
         */
        Tooltip: typeof Tooltip;

        /**
         * <b>Input: Number</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        InputNumber: typeof InputNumber;

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
         * Initialize all existing menus.
         *
         * @type {void}
         */
        initializeMenus: () => void;

        /**
         * Initialize all existing modals.
         *
         * @type {void}
         */
        initializeModals: () => void;

        /**
         * Initialize all existing popovers.
         *
         * @type {void}
         */
        initializePopovers: () => void;

        /**
         * Initialize all existing tabs.
         *
         * @type {void}
         */
        initializeTabs: () => void;

        /**
         * Initialize all existing tooltips.
         *
         * @type {void}
         */
        initializeTooltips: () => void;

        /**
         * Initialize all existing number inputs.
         *
         * @type {void}
         */
        initializeInputNumbers: () => void;

        /**
         * <b>Container</b> - Next generation user and application interface kit for developers.
         *
         * @type {Container}
         */
        SuiContainer: any;

        /**
         * <b>Levdwire</b> - Next generation user and application interface kit for developers.
         *
         * @type {any}
         */
        initializeLevdwire: any;
    }
}