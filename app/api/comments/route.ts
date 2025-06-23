import { Databases, ID, Client } from "appwrite";
import { NextResponse } from "next/server";

// Initialize Appwrite client directly in the API route
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

const databases = new Databases(client);

type CommentData = {
  name: string;
  email: string;
  description: string;
};

const createComment = async (data: CommentData) => {
  try {
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      "671789a6000ca6df91f5", // Collection ID
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
      "671789a6000ca6df91f5" // Collection ID
    );
    return response.documents;
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    throw new Error("Failed to fetch comments");
  }
};

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
      { error: `Failed to create comment: ${error.message}` },
      { status: 500 }
    );
  }
}

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
      { error: `Failed to fetch comments: ${error.message}` },
      { status: 500 }
    );
  }
}
