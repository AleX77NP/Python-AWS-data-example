import json
import boto3


# load players data
def load_data():
    with open('data.json') as json_file:
        json_data = json.load(json_file)
        return json_data


# put single item into dynamodb
def put_item(table, table_item):
    print(f'Adding item {table_item}')
    response = table.put_item(
        Item={
            "PlayerName": table_item["PlayerName"],
            "Goals": table_item["Goals"],
            "Year": table_item["Year"]
        }
    )

    print(response)


if __name__ == '__main__':
    data = load_data()
    print(data)

    # init dynamodb client and table
    dynamodb = boto3.resource('dynamodb')
    players_table = dynamodb.Table('Records')

    # save all items into 'Records' table
    for item in data:
        put_item(players_table, item)