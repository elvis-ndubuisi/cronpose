/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
	endOfLine: "lf",
	printWidth: 90,
	trailingComma: "all",
	semi: true,
	singleQuote: false,
	jsxSingleQuote: true,
	bracketSpacing: true,
	bracketSameLine: true,
	singleAttributePerLine: true,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
