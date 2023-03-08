import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeTweets } from '../../utils/scrape';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  try {
    const tweets = await scrapeTweets(username as string);
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape tweets' });
  }
}
