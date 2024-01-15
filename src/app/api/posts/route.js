import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async(request) =>{
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
    // fetch
    try {
      await connect()
      const posts = await Post.find(username && {username});
      return new NextResponse(JSON.stringify(posts), { status:200 });

    } catch (error) {
      return new NextResponse("Database Error", { status:500 });
    }
};



export const POST = async (request, { params }) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    const post = await Post.findById(id);

    return new NextResponse("Post has been created!", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};