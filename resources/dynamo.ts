import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import { DynamoConfig } from '../config/dynamo';

export function createDynamoDbTable(dynamoConfig: DynamoConfig, environment: string) {
    const table = new aws.dynamodb.Table(dynamoConfig.tableName, {
        name: dynamoConfig.tableName,
        attributes: [
            {
                name: "PlayerName",
                type: "S"
            },
            {
                name: "Goals",
                type: "N"
            },
            {
                name: "Year",
                type: "N"
            },
        ],
        hashKey: dynamoConfig.hashKey,
        rangeKey: dynamoConfig.rangeKey ? dynamoConfig.rangeKey : undefined,
        globalSecondaryIndexes: [{
            hashKey: "Year",
            name: "YearIndex",
            nonKeyAttributes: ["PlayerName"],
            projectionType: "INCLUDE",
            rangeKey: "Goals",
            readCapacity: 1,
            writeCapacity: 1,
        }
    ],
        billingMode: dynamoConfig.billingMode,
        readCapacity: dynamoConfig.readCapacity ? dynamoConfig.readCapacity : undefined,
        writeCapacity: dynamoConfig.writeCapacity ? dynamoConfig.writeCapacity : undefined,
        tags: {
            Environemnt: environment,
            Name: dynamoConfig.tableName
        }
    });
}