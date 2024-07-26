import { AccordionInterface } from '../components/accordion/interface'
import { CarouselInterface } from '../components/carousel/interface'
import { CollapseInterface } from '../components/collapse/interface'
import { DismissInterface } from '../components/dismiss/interface'
import { DrawerInterface } from '../components/drawer/interface'
import { DropdownInterface } from '../components/dropdown/interface'
import { InputImageInterface } from '../components/input/image/interface'
import { InputMeterInterface } from '../components/input/meter/interface'
import { InputNumberInterface } from '../components/input/number/interface'
import { MenuInterface } from '../components/menu/interface'
import { ModalInterface } from '../components/modal/interface'
import { PopoverInterface } from '../components/popover/interface'
import { ScrollInterface } from '../components/scroll/interface'
import { StepperInterface } from '../components/stepper/interface'
import { TableInterface } from '../components/table/interface'
import { TabsInterface } from '../components/tabs/interface'
import { ToastInterface } from '../components/toast/interface'
import { TooltipInterface } from '../components/tooltip/interface'

/**
 * @name         Instances - Levdwire
 * @description  <b>Instances</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
export declare type Instances = {
	Accordion: { [id: string]: AccordionInterface }
	Carousel: { [id: string]: CarouselInterface }
	Collapse: { [id: string]: CollapseInterface }
	Dismiss: { [id: string]: DismissInterface }
	Drawer: { [id: string]: DrawerInterface }
	Dropdown: { [id: string]: DropdownInterface }
	InputImage: { [id: string]: InputImageInterface }
	InputMeter: { [id: string]: InputMeterInterface }
	InputNumber: { [id: string]: InputNumberInterface }
	Menu: { [id: string]: MenuInterface }
	Modal: { [id: string]: ModalInterface }
	Popover: { [id: string]: PopoverInterface }
	Scroll: { [id: string]: ScrollInterface }
	Stepper: { [id: string]: StepperInterface }
	Table: { [id: string]: TableInterface }
	Tabs: { [id: string]: TabsInterface }
	Toast: { [id: string]: ToastInterface }
	Tooltip: { [id: string]: TooltipInterface }
}

/**
 * @name         InstanceOptions - Levdwire
 * @description  <b>InstanceOptions</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
export declare type InstanceOptions = {
	/**
	 * The instance identifier.
	 *
	 * @type {string}
	 */
	id?: string

	/**
	 * The override status.
	 *
	 * @type {boolean}
	 */
	override?: boolean
}
