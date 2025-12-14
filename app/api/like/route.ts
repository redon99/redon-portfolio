import { NextResponse } from 'next/server'
import {
  DynamoDBClient,
  GetItemCommand,
  UpdateItemCommand,
  type UpdateItemCommandOutput,
} from '@aws-sdk/client-dynamodb'

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
})

const TABLE_NAME = process.env.DYNAMODB_TABLE!

export const GET = async () => {
  try {
    const command = new GetItemCommand({
      TableName: TABLE_NAME,
      Key: {
        pk: { S: 'SITE_LIKES' },
      },
    })

    const res = await client.send(command)

    const likes = Number(res.Item?.likes?.N ?? 0)

    return NextResponse.json({ likes })
  } catch (err) {
    console.error('GET /api/like error', err)
    return NextResponse.json(
      { error: 'Failed to fetch likes' },
      { status: 500 }
    )
  }
}

export const POST = async () => {
  try {
    const command = new UpdateItemCommand({
      TableName: TABLE_NAME,
      Key: { pk: { S: 'SITE_LIKES' } },
      UpdateExpression: 'SET likes = if_not_exists(likes, :zero) + :inc',
      ExpressionAttributeValues: {
        ':inc': { N: '1' },
        ':zero': { N: '0' },
      },
      ReturnValues: 'UPDATED_NEW',
    })

    const res: UpdateItemCommandOutput = await client.send(command)

    const likes = Number(res.Attributes?.likes?.N ?? 0)

    return NextResponse.json({ likes })
  } catch (err) {
    console.error('POST /api/like error', err)
    return NextResponse.json(
      { error: 'Failed to increment likes' },
      { status: 500 }
    )
  }
}
