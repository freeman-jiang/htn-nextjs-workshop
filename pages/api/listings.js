import { connectToMongo } from '../../utils/mongo'

const AIRBNB_COLLECTION_NAME = 'listingsAndReviews'

export const getAllListings = async mongo => {
  return mongo.collection(AIRBNB_COLLECTION_NAME).find().limit(100).toArray()
}

export default async function handler(req, res) {
  const { db: mongo } = await connectToMongo()

  const allListings = await getAllListings(mongo)
  res.status(200).json({ listings: allListings })
}
