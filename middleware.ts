import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('MW hit ->', req.nextUrl.pathname);
  return NextResponse.next();
}
