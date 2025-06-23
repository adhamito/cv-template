import { Databases, ID, Client } from "appwrite";
import { NextResponse } from "next/server";

// Initialize Appwrite client with better error handling
const initializeAppwrite = () => {
  try {
    // Log environment variables availability (not their values) for debugging
    console.log('Environment variables check:', {
      endpointExists: !!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
      projectIdExists: !!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
      databaseIdExists: !!process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
    });
    
    const client = new Client();
    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
    
    return new Databases(client);
  } catch (error) {
    console.error('Error initializing Appwrite client:', error);
    throw new Error(`Appwrite initialization failed: ${error.message}`);
  }
};

// Initialize database connection
let databases;
try {
  databases = initializeAppwrite();
} catch (error) {
  console.error('Failed to initialize databases:', error);
  // We'll handle this in the API handlers
}

type CommentData = {
  name: string;
  email: string;
  description: string;
};

const createComment = async (data: CommentData) => {
  try {
    if (!databases) {
      throw new Error('Appwrite client not initialized');
    }
    
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    if (!databaseId) {
      throw new Error('Database ID environment variable is missing');
    }
    
    console.log('Creating comment with data:', { ...data, email: '[REDACTED]' });
    
    const response = await databases.createDocument(
      databaseId,
      "671789a6000ca6df91f5", // Collection ID
      ID.unique(),
      data
    );
    return response;
  } catch (error: any) {
    console.error("Error creating comment:", error);
    // Include more details in the error message
    throw new Error(`Failed to create comment: ${error.message || 'Unknown error'}`);
  }
};

const getComments = async () => {
  try {
    if (!databases) {
      throw new Error('Appwrite client not initialized');
    }
    
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    if (!databaseId) {
      throw new Error('Database ID environment variable is missing');
    }
    
    const response = await databases.listDocuments(
      databaseId,
      "671789a6000ca6df91f5" // Collection ID
    );
    return response.documents;
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    // Include more details in the error message
    throw new Error(`Failed to fetch comments: ${error.message || 'Unknown error'}`);
  }
};

export async function POST(req: Request) {
  try {
    // Validate request body
    const body = await req.json();
    const { name, email, description } = body;
    
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and description are required' },
        { status: 400 }
      );
    }
    
    const data = { name, email, description };
    const response = await createComment(data);

    return NextResponse.json({
      message: "Comment created successfully",
      response,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    
    // Provide more detailed error response
    return NextResponse.json(
      { 
        error: `Failed to create comment: ${error.message || 'Unknown error'}`,
        timestamp: new Date().toISOString(),
        path: '/api/comments'
      },
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
    
    // Provide more detailed error response
    return NextResponse.json(
      { 
        error: `Failed to fetch comments: ${error.message || 'Unknown error'}`,
        timestamp: new Date().toISOString(),
        path: '/api/comments'
      },
      { status: 500 }
    );
  }
}
