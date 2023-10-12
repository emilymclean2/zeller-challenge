const roles = ["Admin", "Manager"] as const;
type Role = (typeof roles)[number];
type DatabaseRole = "ADMIN" | "MANAGER";

interface User {
	id: string;
	name: string;
	role: Role;
}

interface DatabaseUser {
	id: string;
	name: string;
	role: DatabaseRole;
}

interface ZellerCustomersConnection {
	items: DatabaseUser[];
}

interface DatabaseResponse {
	listZellerCustomers: ZellerCustomersConnection;
}
