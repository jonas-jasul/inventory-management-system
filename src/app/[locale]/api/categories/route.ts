import { NextResponse } from 'next/server';
import { currentUser  } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export async function GET(
  req: Request,
) {
  try {
    const user = currentUser ();


    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const category = await prismadb.category.findMany();
  
    return NextResponse.json(category);
  } catch (error) {
    console.log('[GET_CATEGORIES]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};