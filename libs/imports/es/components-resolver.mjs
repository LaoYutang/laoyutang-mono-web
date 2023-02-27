const t = (s) => {
  if (/^Cm/.test(s))
    return {
      name: s,
      from: `components/build/${s}`,
      sideEffects: `components/build/${s}/style.css`
    };
};
export {
  t as ComponentsResolver
};
