import Button from "./Button";

const Header = ({ btnStates, handleToggle }) => {
	return (
		<header>
			<Button
				isActive={btnStates["users"]}
				handleToggle={handleToggle}
				name={"users"}
			/>
			<Button
				isActive={btnStates["posts"]}
				handleToggle={handleToggle}
				name={"posts"}
			/>
			<Button
				isActive={btnStates["comments"]}
				handleToggle={handleToggle}
				name={"comments"}
			/>
		</header>
	)
}

export default Header;