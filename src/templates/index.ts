export type TemplateConfig = {
	branch?: string;
};

export const templates: Record<string, TemplateConfig | null> = {
	remote: null,
	base: null,
	cli: null,
	lib: null,
	jasmine: null,
	node: null,
	riao: null,
	rest: { branch: 'main' },
	angular: null,
	vite: null,
	electron: null,
	three: null,
	chrome: null,
};

export type Template = keyof typeof templates;
export const templateKeys = <Template[]>Object.keys(templates);
export const baseUrl = 'https://github.com/typescript-template/template-';
