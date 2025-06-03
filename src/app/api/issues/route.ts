import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const {phone, name } = await req.json();
    
    
     
// Assuming telegramUserId is passed in the request

   if (!phone) {
    return NextResponse.json({ error: 'Phone is required' }, { status: 400 })
  }

  const newUser = await prisma.user.create({
    data: { phone, name },
  })

    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while creating the issue.' }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
     const users = await prisma.user.findMany()

    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the users.' }, { status: 500 });
  }
}











