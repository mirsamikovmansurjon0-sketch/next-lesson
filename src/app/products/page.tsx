
import { Order } from "../../types/types";

export default async function Product() {
  const res = await fetch("https://api-service.fintechhub.uz/products/");
  const orders = await res.json();

  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        {orders.map((order: Order) => (
          <div className="p-5 bg-blue-500 text-white" key={order.id}>
            <h2>{order.name}</h2>
            <h2>{order.description}</h2>
            <h2>{order.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

















// import React from 'react'
// import { Badge } from "../../../components/ui/badge"
// import { Button } from "../../../components/ui/button"
// import {
//     Card,
//     CardAction,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "../../../components/ui/card"

// function Note2() {
//     return (
//         <div>

//             <Card className="relative mx-auto w-full max-w-sm pt-0">
//                 <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//                 <img
//                     src="https://avatar.vercel.sh/shadcn1"
//                     alt="Event cover"
//                     className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
//                 />
//                 <CardHeader>
//                     <CardAction>
//                         <Badge variant="secondary">Featured</Badge>
//                     </CardAction>
//                     <CardTitle>Design systems meetup</CardTitle>
//                     <CardDescription>
//                         A practical talk on component APIs, accessibility, and shipping
//                         faster.
//                     </CardDescription>
//                 </CardHeader>
//                 <CardFooter>
//                     <Button className="w-full">View Event</Button>
//                 </CardFooter>
//             </Card>
//         </div>
//     )
// }

// export default Note2
