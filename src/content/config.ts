import { defineCollection, z } from "astro:content";

const lovesCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			openingPhrase: z.string(),
			acceptedPhrase: z.string(),
			rejectionText: z.array(z.string()),
			acceptText: z.string(),
			pendingImage: image(),
			acceptedImage: image(),
		}),
});

export const collections = {
	loves: lovesCollection,
};
