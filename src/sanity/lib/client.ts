


import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

// Check if the required environment variables are available
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET || !process.env.NEXT_PUBLIC_SANITY_API_VERSION) {
  throw new Error("Sanity environment variables are missing! Check NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION.");
}

// Assign environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Configure Sanity client
export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
};

// Create the Sanity client
export const client = createClient(config);

// URL builder function for images
export const urlFor = (source: object) => createImageUrlBuilder(config).image(source);
