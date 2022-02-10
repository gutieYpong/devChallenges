export const fontLayout = ( fontFamily, fontWeight, fontSize, lineHeight, color ) => {
  return `
    font-family: ${ fontFamily };
    font-weight: ${ fontWeight };
    font-size: ${ fontSize };
    line-height: ${ lineHeight };
    color: ${ color };
  `;
}