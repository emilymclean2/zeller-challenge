import React, { useEffect, useState } from "react";
import { Title } from "./components/Text";
import { Container } from "./components/Container";
import { RadioButtonsGroup } from "./components/RadioButtonsGroup";
import { Line } from "./components/Line";
import { UserList } from "./components/UserList";
import { getUsers } from "./helpers/getUsers";
import { ErrorPage } from "./components/ErrorPage";
import { filterUsers } from "./helpers/helpers";

const App = () => {
	const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
	const [selectedRole, setSelectedRole] = useState<Role>("Admin");

	useEffect(() => {
		getUsers().then((users) => {
			if (!users?.length) return <ErrorPage />;
			setSelectedUsers(filterUsers({ users, selectedRole }));
		});
	}, [selectedRole]);

	return (
		<Container>
			<Title>User Types</Title>
			<RadioButtonsGroup
				onRadioChange={(value) => {
					setSelectedRole(value);
				}}
			/>
			<Line />
			<Title>{selectedRole} Users</Title>
			<UserList users={selectedUsers} />
			<Line />
		</Container>
	);
};

export default App;
