import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Collection",
      description: "Discover the latest trends for summer",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      category: "women",
    },
    {
      id: 2,
      name: "Men's Essentials",
      description: "Classic pieces for every wardrobe",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891",
      category: "men",
    },
    {
      id: 3,
      name: "Kids' Fashion",
      description: "Comfortable and stylish clothes for kids",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
      category: "kids",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to SM Clothes</h1>
            <p className="text-xl mb-8">Discover the latest fashion trends</p>
            <Button size="lg" asChild>
              <Link href="/category/all">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button asChild>
                    <Link href={`/category/${product.category}`}>
                      Explore {product.name}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}