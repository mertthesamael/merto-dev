import prisma from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  const req = await request.json();

  try {
    if (req.sort === "all") {
      const projects = await prisma.projects.findMany({
        orderBy: {
          id: "asc",
        },
      });
      return NextResponse.json({ projects });
    } else {
      const projects = await prisma.projects.findMany({
        where: { type: req.sort },
        orderBy: {
          id: "asc",
        },
      });
      return NextResponse.json({ projects });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error", msg: err },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
