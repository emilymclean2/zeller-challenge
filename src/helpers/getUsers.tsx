import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, gql } from "@apollo/client";
import awsconfig from "../auth/aws-exports";
import { mapUserRoles } from "./helpers";

const userQuery = gql`
	query ListZellerCustomers {
		listZellerCustomers {
			items {
				email
				id
				name
				role
			}
		}
	}
`;

const httpLink = new HttpLink({ uri: awsconfig.aws_appsync_graphqlEndpoint });

const authLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			"x-api-key": awsconfig.aws_appsync_apiKey,
		},
	});
	return forward(operation);
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export const getUsers = async (): Promise<User[] | null> => {
	try {
		const results = await client.query({
			query: userQuery,
		});
		const data = results.data as DatabaseResponse;
		return mapUserRoles(data.listZellerCustomers.items);
	} catch (error) {
		console.log("Error: ", error);
		return null;
	}
};
