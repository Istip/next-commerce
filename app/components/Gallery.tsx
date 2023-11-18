"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

interface Props {
  images: any;
}

export default function Gallery({ images }: Props) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <ul className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: number) => (
          <li
            key={id}
            onClick={() => setMainImage(image)}
            className="overflow-hidden rounded-xl bg-stone-100 cursor-pointer opacity-50 hover:opacity-100 transition duration-200"
          >
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={200}
              height={200}
              className="w-full h-full object-cover object-center"
              priority
            />
          </li>
        ))}
      </ul>

      <div className="relative overflow-hidden rounded-lg bg-stone-100 lg:col-span-4">
        <Image
          src={urlFor(mainImage).url()}
          alt="Product Full Image"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}
