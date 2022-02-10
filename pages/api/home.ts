// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Collection, Document } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import mongoClient from '../../connect/mongo';

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    async function getHomeData() {
      await mongoClient.connect();

      const db = mongoClient.db('');

      const articleCollection = db.collection('');

      const current = articleCollection.find().limit(5);

      const contentsSet = Promise.allSettled([
        articleCollection.find().limit(5).toArray(),
        articleCollection.find({
          category: 'study'
        }).toArray(),
        articleCollection.find({
          category: 'cafe'
        }).toArray(),
        articleCollection.find({
          category: 'twitch'
        }).toArray()
      ]).then(results=> results.map(result => result.value.then(res =>
          res.map(contents => ({ thumbnail: contents.thumbnail, title: contents.title }))
        );
      ));

      res.send(contentsSet);
    }

    getHomeData()
      .catch(err => res.send({ error: 'err' }))
      .finally(() => mongoClient.close());
  }
}
