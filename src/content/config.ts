import { z, defineCollection } from "astro:content";

const menuCollection = defineCollection({
  type: "content",
  schema: z.object({
    mainTitle: z.string(),
    mainTitleEN: z.string(),
    order: z.number(),
    menuLayout: z.enum(["list", "price-grid"]).default("list"),
    priceColumns: z.array(z.string()).optional(),
    items: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        titleEN: z.string(),
        price: z.string().optional(),
        prices: z.record(z.string()).optional(),
        description: z.string(),
        descriptionEN: z.string(),
      }),
    ),
  }),
});

export const collections = {
  menu: menuCollection,
};
