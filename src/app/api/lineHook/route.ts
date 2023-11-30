
import * as line from '@line/bot-sdk';
import {createEdgeRouter, expressWrapper} from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import type {NextRequest} from 'next/server';

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
}

interface RequestContext {
  params: {
    id: string;
  };
}

const lineMiddleware = line.middleware(config);

const router = createEdgeRouter<NextRequest, RequestContext>();
router
  // @ts-ignore
  .use(expressWrapper(lineMiddleware))
  .get((req) => {
    return NextResponse.json({ hello: 'world' })
  })
  .post((req) => {
    return NextResponse.json({ hello: 'world' })
  })

export async function GET(request: NextRequest, ctx: RequestContext) {
  router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  router.run(request, ctx);
}