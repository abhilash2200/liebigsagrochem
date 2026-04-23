import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://www.liebigsagrochem.com/api/product_category_external/lists/v1/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "ACTIVE" }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("CORS Proxy Error:", error);
    return NextResponse.json({ status: false, message: "Internal Server Error" }, { status: 500 });
  }
}
