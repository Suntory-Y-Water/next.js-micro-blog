import { config } from '@/lib/config';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(config.JSON_URL!);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { id, title, content } = await req.json();
    const response = await fetch(config.JSON_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, title, content, created_at: new Date().toISOString() }),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
