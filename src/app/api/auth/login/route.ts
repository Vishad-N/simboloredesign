import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check credentials against environment variables
    const validEmail = process.env.ADMIN_EMAIL;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validEmail || !validPassword) {
      console.error("ADMIN_EMAIL or ADMIN_PASSWORD environment variables are not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    if (email === validEmail && password === validPassword) {
      // Create JWT session token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "fallback_secret_for_development"
      );
      
      const alg = "HS256";
      const token = await new SignJWT({ email, role: "admin" })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(secret);

      // Set HTTP-only cookie
      const response = NextResponse.json({ success: true }, { status: 200 });
      response.cookies.set({
        name: "admin_session",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
