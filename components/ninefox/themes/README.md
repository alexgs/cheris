# Cheris/Ninefox/Themes

[**Cheris**][1] is a component design system built with [**Styled Components**][1], [**Styled System**][2], and [**Rebass Components**][3].

[1]: https://bit.dev/alexgs/cheris
[2]: https://www.styled-components.com/
[3]: https://jxnblk.com/styled-system/
[4]: https://github.com/rebassjs/components

## Using this Component

The themes in this package are intended to be used on top of GitHub's [_Primer_][5] design system. Assuming a standard app structure with an `App.tsx` component that is imported into the root `index.ts` (or `index.js`) of a React app, you can use the themes like this:

```
import themes from '@bit/alexgs.cheris.ninefox.themes';
import 'primer-base/build/build.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

class App extends React.Component<{}}, {}> {
  render() {
    return (
      <ThemeProvider theme={themes.cheris}>
        <BrowserRouter>
            /* Routes and stuff go here */
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
```

[5]: https://primer.style/css
