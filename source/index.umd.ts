// Core (Components)
import Events from './events'
import Accordion, { initializeAccordions } from './components/accordion'
import Carousel, { initializeCarousels } from './components/carousel'
import Collapse, { initializeCollapses } from './components/collapse'
import Dismiss, { initializeDismisses } from './components/dismiss'
import Drawer, { initializeDrawers } from './components/drawer'
import Dropdown, { initializeDropdowns } from './components/dropdown'
import InputImage, { initializeInputImages } from './components/input/image'
import InputMeter, { initializeInputMeters } from './components/input/meter'
import InputNumber, { initializeInputNumbers } from './components/input/number'
import Menu, { initializeMenus } from './components/menu'
import Modal, { initializeModals } from './components/modal'
import Popover, { initializePopovers } from './components/popover'
import Scroll, { initializeScrolls } from './components/scroll'
import Stepper, { initializeSteppers } from './components/stepper'
import Table, { initializeTables } from './components/table'
import Tabs, { initializeTabs } from './components/tabs'
import Toast, { initializeToasts } from './components/toast'
import Tooltip, { initializeTooltips } from './components/tooltip'

import './components'

// Instance
const events = new Events('load', [
    initializeAccordions,
    initializeCarousels,
    initializeCollapses,
    initializeDismisses,
    initializeDrawers,
    initializeDropdowns,
    initializeInputImages,
    initializeInputMeters,
    initializeInputNumbers,
    initializeMenus,
    initializeModals,
    initializePopovers,
    initializeScrolls,
    initializeSteppers,
    initializeTables,
    initializeTabs,
    initializeToasts,
    initializeTooltips,
])

// Initialize
events.initialize()

// Export
export default {
    Accordion,
    Carousel,
    Collapse,
    Dismiss,
    Drawer,
    Dropdown,
    InputImage,
    InputMeter,
    InputNumber,
    Menu,
    Modal,
    Popover,
    Scroll,
    Stepper,
    Table,
    Tabs,
    Toast,
    Tooltip,
    Events,
}
