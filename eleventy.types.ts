import { renderToString } from "jsx-async-runtime";

export type PageData = {
	title: string;
	layout: string;
	description: string;
};

export class Page {
	data(): PageData {
		return {
			title: "placeholder title",
			layout: "placeholder layout",
			description: "placeholder description",
		};
	}
	contents(): JSX.Element {
		return;
	}
	async render(): Promise<string> {
		return await renderToString(this.contents());
	}
}
