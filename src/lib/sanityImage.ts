import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!builder || !source) return null;
  return builder.image(source);
}
