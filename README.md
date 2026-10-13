# Golden Oaks Apartments

Website for [goldenoaks.biz](https://goldenoaks.biz). Static site built with Next.js and Tailwind CSS, hosted on Cloudflare Pages.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # static output in out/
```

Cloudflare Pages settings: build command `npm run build`, output directory `out`.
Pushing to `main` deploys automatically.

Contact details, navigation links, floorplans and gallery photos live in `config.ts`.
## Adding photos

```bash
npm run images -- ~/Downloads/new-photos/*.jpg
```

This writes web-ready `.webp` files (and thumbnails) to `public/assets` and
prints one line per photo. Paste those lines into `photos` in `config.ts` and
add an `alt` describing each photo.

`public/_headers` holds the HTTP headers served by Cloudflare Pages.
