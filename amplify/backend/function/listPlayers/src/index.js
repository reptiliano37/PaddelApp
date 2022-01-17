/* Amplify Params - DO NOT EDIT
	API_PADDELAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_PADDELAPP_GRAPHQLAPIIDOUTPUT
	API_PADDELAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const appsync = require("aws-appsync");
const gql = require("graphql-tag");
require("cross-fetch/polyfill");


exports.handler = async (event) => {

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
    return response;
};
