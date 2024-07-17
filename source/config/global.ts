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
import Toast from "../components/toast";
import Scroll from "../components/scroll";
import Stepper from "../components/stepper";
import Tabs from "../components/tabs";
import InputMeter from "../components/input/meter";
import InputNumber from "../components/input/number";
import InputImage from "../components/input/image";
import Table from "../components/table";

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
         * <b>Scroll</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        Scroll: typeof Scroll;

        /**
         * <b>Stepper</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        Stepper: typeof Stepper;

        /**
         * <b>Table</b> - Next generation user and application interface kit for developers.
         *
         * @type {Table}
         */
        Table: typeof Table;

        /**
         * <b>Tabs</b> - Next generation user and application interface kit for developers.
         *
         * @type {Tabs}
         */
        Tabs: typeof Tabs;

        /**
         * <b>Toast</b> - Next generation user and application interface kit for developers.
         *
         * @type {Toast}
         */
        Toast: typeof Toast;

        /**
         * <b>Tooltip</b> - Next generation user and application interface kit for developers.
         *
         * @type {Tooltip}
         */
        Tooltip: typeof Tooltip;

        /**
         * <b>Input: Meter</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        InputMeter: typeof InputMeter;

        /**
         * <b>Input: Number</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        InputNumber: typeof InputNumber;

        /**
         * <b>Input: Image</b> - Next generation user and application interface kit for developers.
         *
         * @type {Popover}
         */
        InputImage: typeof InputImage;

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
         * Initialize all existing scrolls.
         *
         * @type {void}
         */
        initializeScrolls: () => void;

        /**
         * Initialize all existing steppers.
         *
         * @type {void}
         */
        initializeSteppers: () => void;

        /**
         * Initialize all existing tables.
         *
         * @type {void}
         */
        initializeTables: () => void;

        /**
         * Initialize all existing tabs.
         *
         * @type {void}
         */
        initializeTabs: () => void;

        /**
         * Initialize all existing toasts.
         *
         * @type {void}
         */
        initializeToasts: () => void;

        /**
         * Initialize all existing tooltips.
         *
         * @type {void}
         */
        initializeTooltips: () => void;

        /**
         * Initialize all existing input meters.
         *
         * @type {void}
         */
        initializeInputMeters: () => void;

        /**
         * Initialize all existing number inputs.
         *
         * @type {void}
         */
        initializeInputNumbers: () => void;

        /**
         * Initialize all existing image inputs.
         *
         * @type {void}
         */
        initializeInputImages: () => void;

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