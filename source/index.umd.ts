// Core (Components)
import Events from './events';
import Accordion, { initializeAccordions } from './components/accordion';
import Carousel, { initializeCarousels } from './components/carousel';
import Collapse, { initializeCollapses } from './components/collapse';
import Dismiss, { initializeDismisses } from './components/dismiss';
import Drawer, { initializeDrawers } from './components/drawer';
import Dropdown, { initializeDropdowns } from './components/dropdown';
import Menu, { initializeMenus } from './components/menu';
import Modal, { initializeModals } from './components/modal';
import Popover, { initializePopovers } from './components/popover';
import Tabs, { initializeTabs } from './components/tabs';
import Toast, { initializeToasts } from './components/toast';
import Tooltip, { initializeTooltips } from './components/tooltip';
import InputNumber, { initializeInputNumbers } from './components/input/number';
import InputImage, { initializeInputImages } from './components/input/image';
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
  initializeTabs,
  initializeToasts,
  initializeTooltips,
  initializePopovers,
  initializeInputNumbers,
  initializeInputImages,
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
  Menu,
  Modal,
  Popover,
  Tabs,
  Toast,
  Tooltip,
  InputNumber,
  InputImage,
  Events,
};