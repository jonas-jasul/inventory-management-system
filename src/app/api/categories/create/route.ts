import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const category = await prismadb.category.create({
      data: {
        name,
      }
    });
  
    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORY_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};