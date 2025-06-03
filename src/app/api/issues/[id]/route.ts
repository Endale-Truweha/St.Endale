// app/api/user/[id]/route.ts
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(req: Request,{
  params,
}: {
  params: Promise<{ id: string }>
}) {
     const { id } = await params
  const body = await req.json()
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: body,
  })
  return NextResponse.json(user)
}

export async function DELETE(req: Request, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
     const { id } = await params
  await prisma.user.delete({
    where: { id: Number(id) },
  })
  return NextResponse.json({ message: 'User deleted' })
}
