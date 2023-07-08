import { NextRequest, NextResponse } from "next/server"

export function middleware(request: Request) {
//     const origin = request.headers.get("origin");
//     console.log("Origin:", origin);
  
//     if (request.method === "OPTIONS") {
//       // Handle pre-flight requests
//       const response = new Response(null, {
//         headers: {
//           "Access-Control-Allow-Origin": origin || "*",
//           "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//           "Access-Control-Allow-Headers": "Content-Type, Authorization",
//         },
//       });
//       console.log("Pre-flight request");
//       return response;
//     } else {
//       // Handle all other requests
//       const response = NextResponse.next();
//       response.headers.set("Access-Control-Allow-Origin", origin || "*");
//       response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//       response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//       response.headers.set("Access-Control-Max-Age", "86400");
//       console.log("Regular request");
//       return response;
//     }
  }

// export default middleware(async (req, res) => {
//   const {
//       method,
//   } = req;

//   switch (method) {
//       case "GET":
//           const items = await GET();
//           res.status(200).json(items);
//           break;
//       case "POST":
//           const newItem = await POST(req);
//           res.status(200).json(newItem);
//           break;
//       default:
//           res.setHeader("Allow", ["GET", "POST"]);
//           res.status(405).end(`Method ${method} Not Allowed`);
// }
// });