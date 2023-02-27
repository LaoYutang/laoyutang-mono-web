export const ComponentsResolver = (name: string) => {
  if (!/^Cm/.test(name)) return
  return {
    name,
    from: `components/build/${name}`,
    sideEffects: `components/build/${name}/style.css`,
  }
}
