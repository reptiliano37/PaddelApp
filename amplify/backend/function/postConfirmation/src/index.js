const appsync = require("aws-appsync");
const gql = require("graphql-tag");
require("cross-fetch/polyfill");

exports.handler = async (event, context, callback) => {

	console.log("event:",event)
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: process.env.API_PADDELAPP_GRAPHQLAPIENDPOINTOUTPUT,
        region: process.env.REGION,
        auth: {
            type: "AWS_IAM",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                sessionToken: process.env.AWS_SESSION_TOKEN
            }
        },
        disableOffline: true
    });

    const mutationUser = gql`
        mutation createUser(
            $name: String!
            $cognitoID: String!
            $username: String!
            $email: AWSEmail!
            $typeUser: String!
        ) {
            createUser(
                input: { cognitoID: $cognitoID, email: $email, name: $name, username: $username, typeUser: $typeUser }
            ) {
                id
            }
        }
    `;
    const mutationPlayer = gql`
        mutation createPlayer(
            $name: String!
            $cognitoID: String!
            $username: String!
            $email: AWSEmail!
            $typeUser: String!
        ) {
            createPlayer(
                input: { cognitoID: $cognitoID, email: $email, name: $name, username: $username, typeUser: $typeUser }
            ) {
                id
            }
        }
    `;
    try {
        if (event.request.userAttributes['custom:typeUser'] == "Entrenador"){

            await graphqlClient.mutate({
                mutation:mutationUser,
                variables: {
                    name: event.request.userAttributes.name,
                    username: event.userName,
                    cognitoID: event.request.userAttributes.sub,
                    email: event.request.userAttributes.email,
                    typeUser: event.request.userAttributes['custom:typeUser']
                }
            });
        }else if (event.request.userAttributes['custom:typeUser'] == "Jugador"){
            await graphqlClient.mutate({
                mutation:mutationPlayer,
                variables: {
                    name: event.request.userAttributes.name,
                    username: event.userName,
                    cognitoID: event.request.userAttributes.sub,
                    email: event.request.userAttributes.email,
                    typeUser: event.request.userAttributes['custom:typeUser']
                }
            });
        }
        callback(null, event);
    } catch (error) {
        callback(error);
    }
};