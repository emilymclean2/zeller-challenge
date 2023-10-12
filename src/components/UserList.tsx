import React from "react";
import { Name, Subtitle } from "./Text";
import styled from "styled-components";
import { blueBackgroundColor, borderRadius } from "../helpers/styles";

const StyledInitial = styled.h4`
	padding: 10px;
	color: cornflowerblue;
	background-color: ${blueBackgroundColor};
	border-radius: ${borderRadius};
	margin: 15px;
	width: 15px;
	text-align: center;
	font-weight: 500;
`;

const UserInitial = ({ name }: { name: string }) => {
	return <StyledInitial>{name.charAt(0)}</StyledInitial>;
};

const UserDetailsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0;
`;

const UserDetailsTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	align-self: center;
`;

const UserDetails = ({ user }: { user: User }) => {
	return (
		<UserDetailsWrapper>
			<UserInitial name={user.name}></UserInitial>
			<UserDetailsTextWrapper>
				<Name>{user.name}</Name>
				<Subtitle>{user.role}</Subtitle>
			</UserDetailsTextWrapper>
		</UserDetailsWrapper>
	);
};

export const UserList = ({ users }: { users: User[] }) => {
	return (
		<>
			{users.map((user) => (
				<UserDetails user={user} key={user.id}></UserDetails>
			))}
		</>
	);
};
