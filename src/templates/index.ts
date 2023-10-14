export const templates = {
	base: null,
	cli: null,
	lib: null,
	jasmine: null,
	node: null,
	riao: null,
};

export type Template = keyof typeof templates;
export const templateKeys = <Template[]>Object.keys(templates);
export const baseUrl = 'https://github.com/typescript-template/template-';
