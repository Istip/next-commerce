import Link from "next/link";
import { SimplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

async function getNewest() {
  const query = `
    *[_type == "product"][0...4] | order(_createdAt desc) {
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const SimplifiedProducts: SimplifiedProduct[] = await getNewest();

  return (
    <div className="bg-stone-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tighter text-stone-800">
            Our Newest Products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See all
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {SimplifiedProducts.map((product) => (
            <li key={product._id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-stone-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-stone-700">{product.name}</h3>
                    <p className="mt-1 text-xs text-stone-500">
                      {product.categoryName}
                    </p>
                  </div>

                  <p className="text-stone-950 font-bold font-sm">
                    {product.price}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
