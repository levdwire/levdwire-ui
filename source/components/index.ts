import { initializeAccordions } from './accordion';
import { initializeCarousels } from './carousel';
import { initializeCollapses } from './collapse';
import { initializeDismisses } from './dismiss';
import { initializeDrawers } from './drawer';
import { initializeDropdowns } from './dropdown';
import { initializeInputNumbers } from './input/number';
import { initializeMenus } from './menu';
import { initializeModals } from './modal';
import { initializePopovers } from './popover';
import { initializeTabs } from './tabs';
import { initializeTooltips } from './tooltip';

/**
 * Initialize all existing <b>Levdwire</b> components.
 *
 * @return {void}
 */
export function initializeLevdwire(): void {
    /**
     * Initialize all existing accordion.
     *
     * @return {void}
     */
    initializeAccordions();

    /**
     * Initialize all existing collapse.
     *
     * @return {void}
     */
    initializeCollapses();

    /**
     * Initialize all existing carousel.
     *
     * @return {void}
     */
    initializeCarousels();

    /**
     * Initialize all existing dismiss.
     *
     * @return {void}
     */
    initializeDismisses();

    /**
     * Initialize all existing dropdown.
     *
     * @return {void}
     */
    initializeDropdowns();

    /**
     * Initialize all existing menu.
     *
     * @return {void}
     */
    initializeMenus();

    /**
     * Initialize all existing modal.
     *
     * @return {void}
     */
    initializeModals();

    /**
     * Initialize all existing drawer.
     *
     * @return {void}
     */
    initializeDrawers();

    /**
     * Initialize all existing tabs.
     *
     * @return {void}
     */
    initializeTabs();

    /**
     * Initialize all existing tooltip.
     *
     * @return {void}
     */
    initializeTooltips();

    /**
     * Initialize all existing popover.
     *
     * @return {void}
     */
    initializePopovers();

    /**
     * Initialize all existing number inputs.
     *
     * @return {void}
     */
    initializeInputNumbers();
}

// Check if a valid dom element exists.
if (typeof window !== 'undefined') {
    // Identify the "initializeSui" function.
    window.initializeLevdwire = initializeLevdwire;
}