import { colors } from './colors';

const fontProps = ({
  color,
  fontSize,
  letterSpacing,
  lineHeight,
  fontWeight,
  textAlign,
}) => {
  return `
    margin: 0;
    ${color && `color: ${color};`}
    ${fontSize && `font-size: ${fontSize};`}
    ${letterSpacing && `letter-spacing: ${letterSpacing};`}
    ${lineHeight && `line-height: ${lineHeight};`}
    ${fontWeight && `font-weight: ${fontWeight};`}
    ${textAlign && `text-align: ${textAlign};`}
  `;
};

export const typography = `
  body {
    font-weight: normal;
    font-family: sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  h1 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '24px',
        letterSpacing: '-.27px',
        fontWeight: 'bold',
        textAlign: 'center',
      }
    )}
  }

  h2 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '21px',
        letterSpacing: '-.3px',
        fontWeight: 'bold',
      }
    )}

    & .center {
      ${fontProps(
        {
          fontSize: '22px',
          letterSpacing: '-.31px',
          lineHeight: '28px',
          textAlign: 'center',
        }
      )}
    }
  }

  h3 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '18px',
        letterSpacing: '-.21px',
        fontWeight: 'bold',
      }
    )}
  }

  h4 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '18px',
        fontWeight: '600',
      }
    )}
  }

  h5 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '16px',
        letterSpacing: '-.18px',
        fontWeight: '600',
      }
    )}
  }

  h6 {
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '14px',
        letterSpacing: '-.16px',
        lineHeight: '1.33',
        fontWeight: 'bold',
      }
    )}

    margin-bottom: 5px;
    text-transform: uppercase;

    & .center {
      ${fontProps(
        {
          textAlign: 'center',
        }
      )}
    }
  }

  p {
    @include font-props($lavender-gray,  18px, null, 24px);
    ${fontProps(
      {
        color: colors['lavender-gray'],
        fontSize: '18px',
        lineHeight: '24px',
      }
    )}
  }

  a {
    color: colors['gray-blue'],
  }
`;
