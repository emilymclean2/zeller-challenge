import { filterUsers, mapUserRoles, stringToRole } from "../helpers/helpers";
import { adminUsers, testDatabaseUsers, testUsers } from "./mockData";

describe("filterUsers", () => {
	describe("GIVEN an array of Users with mixed roles, and a selected role", () => {
		it("SHOULD return only the users that match the selected role", () => {
			const filteredUsers = filterUsers({ users: testUsers, selectedRole: "Admin" });
			expect(filteredUsers).toStrictEqual(adminUsers);
		});
	});
	describe("GIVEN an array of Users with the same role, and a selected role that matches", () => {
		it("SHOULD return the same array", () => {
			const filteredUsers = filterUsers({ users: adminUsers, selectedRole: "Admin" });
			expect(filteredUsers).toStrictEqual(adminUsers);
		});
	});
	describe("GIVEN an array of Users with the same role, and a selected role that does NOT match", () => {
		it("SHOULD an empty array", () => {
			const filteredUsers = filterUsers({ users: adminUsers, selectedRole: "Manager" });
			expect(filteredUsers).toStrictEqual([]);
		});
	});
});

describe("stringToRole", () => {
	it.each`
		input        | result
		${"ADMIN"}   | ${"Admin"}
		${"MANAGER"} | ${"Manager"}
	`("GIVEN an input of $input it SHOULD return $result", ({ input, result }) => {
		expect(stringToRole(input)).toStrictEqual(result);
	});
});

describe("mapUserRoles", () => {
	describe("GIVEN an array of DatabaseUsers", () => {
		it("SHOULD return an array of Users", () => {
			const result = mapUserRoles(testDatabaseUsers);
			expect(result).toStrictEqual(testUsers);
		});
	});
	describe("GIVEN an empty array", () => {
		it("SHOULD return an empty array", () => {
			const result = mapUserRoles([]);
			expect(result).toStrictEqual([]);
		});
	});
});
