export default function Box({ color }: { color: string }): JSX.Element {
	return <div style={`background-color: ${color};`}>example component</div>;
}
