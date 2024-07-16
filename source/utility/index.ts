/**
 * Writes a warning message to the console.
 *
 * @param {string} message
 *
 * @return {void}
 */
const warningLog = (message: string): void => {
    // Notify the user of the transaction result.
    console.warn(`%c⚠️Srylius.UI (SUI) - %c ${message}`,
        'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
        'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
    );
};

/**
 * Writes an info message to the console.
 *
 * @param {string} message
 *
 * @return {void}
 */
const infoLog = (message: string): void => {
    // Notify the user of the transaction result.
    console.info(`%cℹ️Srylius.UI (SUI) - %c ${message}`,
        'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
        'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
    );
};

/**
 * Writes an info message to the console.
 *
 * @param {string} message
 *
 * @return {void}
 */
const errorLog = (message: string): void => {
    // Notify the user of the transaction result.
    console.error(`%c❌Srylius.UI (SUI) - %c ${message}`,
        'color: #4c956c; font-weight:700; font-family: Karla, sans-serif; font-size:13px;',
        'color: #7E8299; font-weight:500; font-family: Karla, sans-serif; font-size:13px;'
    );
};