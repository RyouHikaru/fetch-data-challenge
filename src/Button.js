import { useState } from "react";

const Button = ({ text, source, setSource }) => {
	return (
		<button
			type="button"
			onClick={() => setSource(text)}
			className={ text === source ? 'active' : null }
		>{text.charAt(0).toUpperCase() + text.slice(1)}
		</button>
	)
}

export default Button;