export interface DynamoConfig {
    tableName: string,
    hashKey: string,
    rangeKey?: string,
    billingMode: string,
    readCapacity?: number,
    writeCapacity?: number,
    ttlEnabled: boolean,
}