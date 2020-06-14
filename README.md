# Media gallery

## Commands

To install: `npm i`

To run: `npm start`

## Next steps

- Make the header text into the shape of a default bread with `shape-outside` and a `polygon` as value
- Use CSS-grid to enhance the grid with a compound grid (3+4) `grid-template-columns: 0.5fr 3fr 1fr 2fr 2fr 1fr 3fr 0.5fr;` and images bleeding to the edge.
- Use `shape-outside` to style the captions for each element just like the close button of the light-box to create a more coherent design.
- Create multiple sizes of the images and use the `picture` element to render the correct size for the size/resolution
- Upload the images and videos to a CDN
- Apply a motion effect on the light-box: the box should appear with `transform: scale` and the rendered image or video should shrink (while it's bloated when it appears). This will create a effect out of the movie-production scene called "Vertigo"
- Apply motion on the page while loading the elements
