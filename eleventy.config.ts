import { renderToString } from "jsx-async-runtime";

export default function (eleventyConfig: any) {
	eleventyConfig.addWatchTarget("./src/");

	// eleventyConfig.addTransform("tsx", async (content: any) => {
	// 	const result = await renderToString(content);
	// 	return `<!doctype html>\n${result}`;
	// });

	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
	});

	return {
		dir: {
			input: "src",
			output: "dst",
		},
	};
}
