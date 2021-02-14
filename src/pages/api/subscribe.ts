import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

async function connectDatabase(uri: string) {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db('users')

  cachedDb = db

  return db
}

export default async (request: NowRequest, response: NowResponse):Promise<NowResponse> => {
  const { email } = request.body

  const db = await connectDatabase(process.env.MONGO_URI)

  const collection = db.collection('user_data')

  await collection.insertOne({ email })
  return response.status(201).json({ data: 'success' })
}
