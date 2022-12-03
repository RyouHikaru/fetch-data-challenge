import { useState } from "react";

const Button = ({ handleToggle, isActive, name }) => {
	return (
		<button
			type="button"
			onClick={() => handleToggle(name)}
			className={ isActive ? 'active' : '' }
		>{name}</button>
	)
}

export default Button;