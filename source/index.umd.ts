// Core (Components)
import Events from './events';
import Accordion, { initializeAccordions } from './components/accordion';
import Carousel, { initializeCarousels } from './components/carousel';
import Collapse, { initializeCollapses } from './components/collapse';
import Dismiss, { initializeDismisses } from './components/dismiss';
import Drawer, { initializeDrawers } from './components/drawer';
import Dropdown, { initializeDropdowns } from './components/dropdown';
import Modal, { initializeModals } from './components/modal';
import Popover, { initializePopovers } from './components/popover';
import Tabs, { initializeTabs } from './components/tabs';
import Tooltip, { initializeTooltips } from './components/tooltip';
import InputNumber, { initializeInputNumbers } from './components/input/number';
import './components';

// Instance
const events = new Events('load', [
  initializeAccordions,
  initializeCollapses,
  initializeCarousels,
  initializeDismisses,
  initializeDropdowns,
  initializeModals,
  initializeDrawers,
  initializeTabs,
  initializeTooltips,
  initializePopovers,
  initializeInputNumbers
]);

// Initialize
events.initialize();

// Export
export default {
  Accordion,
  Carousel,
  Collapse,
  Drawer,
  Dismiss,
  Dropdown,
  Modal,
  Popover,
  Tabs,
  Tooltip,
  InputNumber,
  Events,
};