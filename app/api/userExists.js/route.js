
import { connectMongoDB } from "@/lib/mongoose";
import User from "@/models/user";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}


// import { connectMongoDB } from "@/lib/mongoose";
// import User from "@/models/user";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   console.log("try")
//   try {
//     await connectMongoDB();
//     console.log("connection")
//     const { email } = await req.json();
//     if (!email) {
//       return NextResponse.error("Email is required.", { status: 400 });
//     }

//     const user = await User.findOne({ email }).select("_id");

//     if (!user) {
//       return NextResponse.error("User not found.", { status: 404 });
//     }

//     return NextResponse.json({ user });
//   } catch (error) {
//     console.error("Error in POST request:", error);
//     return NextResponse.error("Internal Server Error", { status: 500 });
//   }
// }

































// export default async function POST(req) {
//   try {
//     await connectMongoDB();
//     const { email } = await req.json();
//     const user = await User.findOne({ email }).select("_id");
//     if (!user) {
//       console.log("User not found for email:", email);
//       return NextResponse.json({ user: null });
//     }
//     console.log("User found:", user);
//     return NextResponse.json({ user });
//   } catch (error) {

//     console.error("Error:", error);
//     return NextResponse.json({ error: "An error occurred." }, { status: 500 });
//   }
// }