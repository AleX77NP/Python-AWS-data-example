import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import { RedshiftConfig } from '../config/redshift';

export function createRedshiftCluster(config: RedshiftConfig, masterPassword: pulumi.Output<string>, environment: string) {
    const cluster = new aws.redshift.Cluster(config.clusterIdentifier, {
        clusterIdentifier: config.clusterIdentifier,
        clusterType: config.clusterType,
        databaseName: "records",
        masterPassword: masterPassword,
        masterUsername: config.masterUsername,
        nodeType: config.nodeType,
        tags: {
            Environemnt: environment
        }
    });
}