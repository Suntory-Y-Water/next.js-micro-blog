import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET(req: Request) {
  const id = req.url.split('/blog/')[1];
  const response = await fetch(`${config.JSON_URL!}/${id}`);
  const data = await response.json();
  if (!data) {
    notFound();
  }
  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request) {
  const id = req.url.split('/blog/')[1];
  const response = await fetch(`${config.JSON_URL!}/${id}`, { method: 'DELETE' });
  const data = await response.json();
  if (!data) {
    notFound();
  }
  return NextResponse.json(data, { status: 200 });
}
