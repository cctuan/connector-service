
import * as line from '@line/bot-sdk';
const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
}

const lineMiddleware = line.middleware(config);

const handler = (req: any, res: any) => {
  if (req.method === 'POST') {
    lineMiddleware(req, res, () => {
      res.json({ message: 'OK' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export { handler as GET, handler as POST };
