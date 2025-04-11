import { Page, PageData } from "@eleventy.types";
import Box from "@components/Box";

export default class IndexPage extends Page {
	data(): PageData {
		return {
			title: "11ty-typescript-template",
			layout: "layout",
			description: "Template to use 11ty with Typescript",
		};
	}
	contents(): JSX.Element {
		return (
			<>
				<h1>hello world!</h1>
				<Box color={"red"} />
			</>
		);
	}
}
