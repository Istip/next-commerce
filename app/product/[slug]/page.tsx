import { ProductInterface } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck, ChevronLeftCircle } from "lucide-react";
import Gallery from "@/app/components/Gallery";
import Link from "next/link";

async function getProduct(slug: string) {
  const query = `
    *[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name
    }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product: ProductInterface = await getProduct(slug);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
        <div className="flex w-full justify-center md:justify-start">
          <Link
            href="/"
            className="flex text-primary font-bold gap-2 mb-4 w-max py-4"
          >
            <ChevronLeftCircle />
            <span>Go Back</span>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Gallery images={product.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-stone-500">
                {product.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-stone-900 lg:text-3xl">
                {product.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-stone-500 transition duration-200">
                56 ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-stone-800 md:text-2xl">
                  {product.price} RON
                </span>
              </div>
              <span className="text-sm text-stone-500">
                Tax and shipping not included.
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-stone-500">
              <Truck />
              <span className="text-sm">2-4 Day shipping</span>
            </div>
            <div className="flex gap-2.5">
              <Button>Add To Cart</Button>
              <Button variant="secondary">Checkout now</Button>
            </div>
            <p className="mt-12 text-stone-700 tracking-wide">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
