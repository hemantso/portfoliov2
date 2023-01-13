import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "qfn9ryv1", 
  dataset: 'production',
  apiVersion: '2023-01-13',
  useCdn: true,
  token: "sknTrHcZYV7PzWBcVLOWFLBRh0pUHONqqw00KudCPLfchh0K7ngOBiDGsZjAYjxDkfumW4gDmyVZXX47Pl6hBW3kOzPqBWOPpa7wHOTK9XAIgwORC5fdTFg1etJBzaXdZokD1WDaqH7eoR5izYVqU5c2ZyhzOBFrNyvaO4jUVWPBaPiaH6tQ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

