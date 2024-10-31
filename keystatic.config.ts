// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    // repo: {
    //   name: "jimit-portfolio",
    //   owner: "gaurav-vala",
    // },
  },
  collections: {
    posters: collection({
      label: "Posters",
      slugField: "caption",
      path: "src/content/posters/*",
      format: "json",
      schema: {
        caption: fields.slug({ name: { label: "Poster Caption" } }),
        img_type: fields.select({
          label: "Image Type",
          options: [
            { label: "3d art", value: "3d-poster" },
            { label: "Album Art", value: "album-art" },
            { label: "Poster", value: "poster" },
          ],
          defaultValue: "poster",
        }),
        image: fields.image({
          label: "Poster",
          directory: "/public/images/posters/",
          publicPath: "/images/posters/",
        }),
      },
    }),
  },
});
