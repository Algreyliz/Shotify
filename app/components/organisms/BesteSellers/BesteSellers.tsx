"use client";

import Image from "next/image";
import { bestSellers } from "@/app/data/products/products";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WHATSAPP_NUMBER = "50662439362";

export function BestSellers() {
  return (
    <section
      id="best-sellers"
      className="bg-background py-12"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Encabezado */}
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted-foreground mb-2">
          EXPLORE
        </p>
        <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight">
          Our Best Sellers
        </h2>

        {/* Carrusel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {bestSellers.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-1/2 max-w-[50%]"
              >
                <Card className="h-full rounded-3xl border-0 bg-[#FFF4E5] shadow-md flex flex-col">
                  {/* Badge + imagen */}
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center gap-4">
                      <Badge
                        className="rounded-full bg-[#FFE3BF] px-4 py-1 text-xs font-semibold text-orange-700 border-0"
                      >
                        {product.benefitTag}
                      </Badge>

                      <div className="relative h-40 w-32">
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 40vw, 160px"
                        />
                      </div>
                    </div>
                  </CardHeader>

                  {/* Texto + CTA */}
                  <CardContent className="flex flex-1 flex-col justify-between gap-4 pb-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold tracking-tight">
                        {product.name}
                      </h3>

                      <ul className="space-y-1 text-xs text-muted-foreground list-disc pl-4">
                        {product.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>

                      <p className="pt-2 text-sm font-semibold">
                        Now <span>{product.price}</span>
                      </p>
                    </div>

                    <Button
                      asChild
                      className="mt-2 w-full rounded-full bg-[#25D366] px-6 py-5 text-xs font-semibold tracking-wide text-white shadow-md hover:bg-[#1ebe57]"
                    >
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hola, deseo adquirir un ${product.id}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pedir por WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas */}
          <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
