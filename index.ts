import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { DynamoConfig } from './config/dynamo';
import { RedshiftConfig } from './config/redshift';
import { createDynamoDbTable } from './resources/dynamo'
import { createRedshiftCluster } from './resources/redshift'

// Load YAML global configuration and environment
const config = new pulumi.Config();
const environment = config.require("environment");

// Load DynamoDB and Redshift configuration
const dynamoConfig = config.requireObject<DynamoConfig>("dynamodb");
const redshiftConfig = config.requireObject<RedshiftConfig>("redshift");
const masterPassword = config.requireSecret("masterPassword");

// create DynamoDB table and Redshift cluster
createDynamoDbTable(dynamoConfig, environment);
createRedshiftCluster(redshiftConfig, masterPassword, environment)
