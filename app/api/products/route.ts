import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { categorykey } = await request.json();

    const response = await fetch("https://www.liebigsagrochem.com/api/products_external/lists/v1/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categorykey }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Product Proxy Error:", error);
    return NextResponse.json({ status: false, message: "Internal Server Error" }, { status: 500 });
  }
}
