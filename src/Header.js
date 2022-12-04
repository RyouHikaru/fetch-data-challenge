import Button from "./Button";

const Header = ({ source, setSource }) => {
	return (
		<header>
			<Button
				text="users"
				source={source}
				setSource={setSource}
			/>
			<Button
				text="posts"
				source={source}
				setSource={setSource}
			/>
			<Button
				text="comments"
				source={source}
				setSource={setSource}
			/>
		</header>
	)
}

export default Header;