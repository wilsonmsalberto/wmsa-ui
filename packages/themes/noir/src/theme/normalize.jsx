export const normalize = `
  /* Remove the margin in all browsers */
  body {
    padding: 40px;
    margin: 0;
    font-family: sans-serif;
  }

  /* 1. Correct the line height in all browsers. */
  /* 2. Prevent adjustments of font size after orientation changes in iOS. */
  html {
    box-sizing: border-box;
    line-height: 1.15;
    -ms-overflow-style: scrollbar;
    -webkit-text-size-adjust: 100%; // stylelint-disable-line property-no-vendor-prefix
  }

  /* Render the 'main' element consistently in IE */
  main {
    display: block;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
