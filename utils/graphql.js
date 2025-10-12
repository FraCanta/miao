// utils/graphql.js
import { GraphQLClient } from "graphql-request";

const endpoint = "https://mithablog.mithacreative.it/graphql"; // l'endpoint WPGraphQL

export const client = new GraphQLClient(endpoint);
