
# Simple example that shows how to use DynamoDB with Python client, and query data in Redshift
Data represents top 5 goals per year values in football history.

## 1. Set AWS access key id and access secret key ENV variables
`export AWS_ACCESS_KEY_ID=\<YOUR_VALUE>`

`export AWS_SECRET_ACCESS_KEY=<YOUR_VALUE>`

## 2. Run pulumi to create DynamoDB table and Redshift cluster
`pulumi up`

## 3. Run Python client script to insert data into DynamoDB
Run `aws configure` and paste the same values from above for access key id and secret acces key

`cd client && python3 main.py`

## 4. Transfer data from DynamoDB to Redshift table
Multiple ways! 

https://hevodata.com/blog/dynamodb-to-redshift-data-migration/
