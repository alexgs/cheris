# Cheris

[**Cheris**][9] is a component design system built with [**Styled Components**][1], [**Styled System**][2], and [**Rebass Components**][3]. This is the monorepo for Cheris.

[9]: https://bit.dev/alexgs/cheris
[1]: https://www.styled-components.com/
[2]: https://jxnblk.com/styled-system/
[3]: https://github.com/rebassjs/components

## Using the System

- `Page` is a top-level container for one or more `Row` components
- `Row` is a horizontal container for content. It can contain either `Card` or `Column` components. The children of a `Row` should be all of the same time, either `Card` or `Column`. The children should **not** mix types.
- `Column` is a vertical container for content, which should be placed into a `Row` components. The children of a `Column` should all be `Card` components.
- `Card` is the fundamental container for content, such as text, images, etc.

## References

- [Component Based Design System With Styled-System][7]
- [Rebass][6]

[6]: https://rebassjs.org/
[7]: https://varun.ca/styled-system/

### Styled System

- [Responsive Styles][5]
- [Table of Style Functions][4]

[4]: https://github.com/jxnblk/styled-system/blob/master/docs/table.md
[5]: https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md

### Semantic Markup

- [HTML5 Semantic Elements][8]

[8]: https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide

## Generating a Typescript declaration file with Bit

1. Navigate to the working directory for the component.
1. Run `npm install --no-save typescript`.
1. Create a `tsconfig.json` file from the sample below.
1. Run `npx tsc`.
1. Copy `Component.d.ts` from the `declaration` directory to the working directory.
1. Delete the `declaration` directory and do other clean-up as needed.

**Sample `tsconfig.json` file**

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "lib": [
      "dom"
    ],
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "declaration",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": false,
    "target": "es5",
    "types": [
      "node"
    ]
  }
}
```
