// Configurations
module.exports = {
    // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
    trailingComma       : 'es5',

    // Print semicolons at the ends of statements.
    semi                : false,

    // Indent lines with tabs instead of spaces.
    useTabs             : true,

    // Specify the number of spaces per indentation-level.
    tabWidth            : 4,

    // Use single quotes instead of double quotes.
    singleQuote         : true,

    // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
    bracketSameLine     : true,

    // Setting end_of_line in an .editorconfig file will configure Prettier’s end of line usage, unless overridden.
    endOfLine           : 'auto',

    // Include parentheses around a sole arrow function parameter.
    arrowParens         : 'always',

    // Plugins
    plugins             : []
}
