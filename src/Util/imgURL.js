import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from '../sanity-setup/sanity'

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}