import { useState } from "react";

export default function staticHTML() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<hi>Hello {counter}</hi>
			<button onClick={() => setCounter((prev) => prev + 1)}>+</button>
		</div>
	);
}
