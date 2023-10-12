export const filterUsers = ({ users, selectedRole }: { users: User[]; selectedRole: Role }): User[] => {
	return users.filter((user) => user.role === selectedRole);
};

export const stringToRole = (input: DatabaseRole): Role => {
	switch (input) {
		case "ADMIN":
			return "Admin";
		case "MANAGER":
			return "Manager";
	}
};

export const mapUserRoles = (users: DatabaseUser[]): User[] => {
	return users.map((user) => {
		return { ...user, role: stringToRole(user.role) };
	});
};
