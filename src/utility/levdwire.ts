/**
 * @name         Utility - Levdwire
 * @description  <b>Utility</b> - Next generation user and application interface kit for developers.
 * @version      v1.0.0
 * @author       Selçuk Çukur <hk@selcukcukur.com.tr>
 * @license      The MIT License (https://levdwire.com/docs/license)
 * @copyright    (C) 2010 - 2024 Srylius (Srylius Teknoloji Limited Şirketi)
 **/
class Utility {
	/**
	 * Type something about levdwire on the console screen.
	 *
	 * @return {void}
	 */
	static starting(): void {
		// Notify the user of the transaction result.
		console.info(
			`%c🔥 Levdwire - %c A next-generation products for full-stack developers.`,
			'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
			'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
		)
	}

	/**
	 * Writes a warning message to the console.
	 *
	 * @param {string} message
	 *
	 * @return {void}
	 */
	static warning(message: string): void {
		// Notify the user of the transaction result.
		console.info(
			`%c⚠️ Levdwire (SUI) - %c ${message}`,
			'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
			'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
		)
	}

	/**
	 * Writes an info message to the console.
	 *
	 * @param {string} message
	 *
	 * @return {void}
	 */
	static info(message: string): void {
		// Notify the user of the transaction result.
		console.info(
			`%cℹ️ Levdwire (SUI) - %c ${message}`,
			'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
			'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
		)
	}

	/**
	 * Writes an info message to the console.
	 *
	 * @param {string} message
	 *
	 * @return {void}
	 */
	static error(message: string): void {
		// Notify the user of the transaction result.
		console.info(
			`%c❌ Levdwire (SUI) - %c ${message}`,
			'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
			'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
		)
	}

	/**
	 * Create anything that might be needed.
	 *
	 * @param {string} type
	 *
	 * @return {any}
	 */
	static generate(type: string): any {
		// Check if you want to create a unique random ID.
		if (type === 'id') {
			// Generate a unique random identifier.
			return Math.random().toString(36).substring(2, 9)
		}
	}
}

// Export
export default Utility
