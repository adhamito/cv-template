"use server";
import { Databases, ID } from "appwrite";
import { databases } from "../../lib/appwrite_client";
import { NextResponse } from "next/server";

type CommentData = {
  name: string;
  email: string;
  description: string;
};

// Helper function to create a comment
const createComment = async (data: CommentData) => {
  try {
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      "671789a6000ca6df91f5",
      ID.unique(),
      data
    );
    return response;
  } catch (error: any) {
    console.error("Error creating comment:", error);
    throw new Error("Failed to create comment");
  }
};

const getComments = async () => {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      "671789a6000ca6df91f5"
    );
    return response.documents;
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    throw new Error("Failed to fetch comments");
  }
};

// POST handler to create a comment
export async function POST(req: Request) {
  try {
    const { name, email, description } = await req.json();
    const data = { name, email, description };
    const response = await createComment(data);

    return NextResponse.json({
      message: "Comment created successfully",
      response,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}

// GET handler to fetch comments
export async function GET() {
  try {
    const comments = await getComments();

    return NextResponse.json({
      message: "Comments fetched successfully",
      comments,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
