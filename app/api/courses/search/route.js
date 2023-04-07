import { NextResponse } from "next/server";
import courses from "../data.json"

export async function GET(request){
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
 
  if(query){
    const filteredCourses = courses.filter(course => {
      return course.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredCourses);
  }

  return NextResponse.json(courses);

}