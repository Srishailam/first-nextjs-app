import { NextResponse } from "next/server";
import { v4 as uuid4 } from "uuid";
import courses from "./data.json";

export async function GET(request){
  return NextResponse.json(courses)
}

export async function POST(request){
  const { title, description, level, url  } = await request.json();
  
  const course = {
    id: uuid4(),
    title,
    description,
    level,
    url,
  };

  courses.push(course);
  return NextResponse.json({
    message: "Course created successfully",
  });
}