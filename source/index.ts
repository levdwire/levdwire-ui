import Events from './events';
import { initializeAccordions } from './components/accordion';
import { initializeCollapses } from './components/collapse';
import { initializeCarousels } from './components/carousel';
import { initializeDismisses } from './components/dismiss';
import { initializeDropdowns } from './components/dropdown';
import { initializeMenus } from './components/menu';
import { initializeModals } from './components/modal';
import { initializeDrawers } from './components/drawer';
import { initializeScrolls } from './components/scroll';
import { initializeSteppers } from './components/stepper';
import { initializeTabs } from './components/tabs';
import { initializeToasts } from './components/toast';
import { initializeTooltips } from './components/tooltip';
import { initializePopovers } from './components/popover';
import { initializeInputMeters } from './components/input/meter';
import { initializeInputNumbers } from './components/input/number';
import { initializeInputImages } from './components/input/image';
import './components';

// Instance
const events = new Events('load', [
  initializeAccordions,
  initializeCollapses,
  initializeCarousels,
  initializeDismisses,
  initializeDropdowns,
  initializeMenus,
  initializeModals,
  initializeDrawers,
  initializeScrolls,
  initializeSteppers,
  initializeTabs,
  initializeToasts,
  initializeTooltips,
  initializePopovers,
  initializeInputMeters,
  initializeInputNumbers,
  initializeInputImages,
]);

// Initialize
events.initialize();

// Export all components.
export { default as Accordion } from './components/accordion';
export { default as Carousel } from './components/carousel';
export { default as Collapse } from './components/collapse';
export { default as Dismiss } from './components/dismiss';
export { default as Drawer } from './components/drawer';
export { default as Dropdown } from './components/dropdown';
export { default as Menu } from './components/menu';
export { default as Modal } from './components/modal';
export { default as Popover } from './components/popover';
export { default as Scroll } from './components/scroll';
export { default as Stepper } from './components/stepper';
export { default as Tabs } from './components/tabs';
export { default as Toasts } from './components/toast';
export { default as Tooltip } from './components/tooltip';
export { default as InputMeter } from './components/input/meter';
export { default as InputNumber } from './components/input/number';
export { default as InputImage } from './components/input/image';

// Export all types.
export * from './components/accordion/types';
export * from './components/carousel/types';
export * from './components/collapse/types';
export * from './components/dismiss/types';
export * from './components/drawer/types';
export * from './components/dropdown/types';
export * from './components/modal/types';
export * from './components/popover/types';
export * from './components/scroll/types';
export * from './components/stepper/types';
export * from './components/table/types';
export * from './components/tabs/types';
export * from './components/toast/types';
export * from './components/tooltip/types';
export * from './components/input/meter/types';
export * from './components/input/number/types';
export * from './components/input/image/types';
export * from './container/types';
export * from './events/types';

// Export all interfaces.
export * from './components/accordion/interface';
export * from './components/carousel/interface';
export * from './components/collapse/interface';
export * from './components/dismiss/interface';
export * from './components/drawer/interface';
export * from './components/dropdown/interface';
export * from './components/modal/interface';
export * from './components/popover/interface';
export * from './components/scroll/interface';
export * from './components/stepper/interface';
export * from './components/table/interface';
export * from './components/tabs/interface';
export * from './components/toast/interface';
export * from './components/tooltip/interface';
export * from './components/input/meter/interface';
export * from './components/input/number/interface';
export * from './components/input/image/interface';

// Export all initialize functions.
export { initializeAccordions } from './components/accordion';
export { initializeCarousels } from './components/carousel';
export { initializeCollapses } from './components/collapse';
export { initializeDismisses } from './components/dismiss';
export { initializeDrawers } from './components/drawer';
export { initializeDropdowns } from './components/dropdown';
export { initializeModals } from './components/modal';
export { initializePopovers } from './components/popover';
export { initializeScrolls } from './components/scroll';
export { initializeSteppers } from './components/stepper';
export { initializeTables } from './components/table';
export { initializeTabs } from './components/tabs';
export { initializeToasts } from './components/toast';
export { initializeTooltips } from './components/tooltip';
export { initializeInputMeters } from './components/input/meter';
export { initializeInputNumbers } from './components/input/number';
export { initializeInputImages } from './components/input/image';

// Export initialize Levdwire function.
export { initializeLevdwire } from './components';