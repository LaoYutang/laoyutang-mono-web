export const UtilsImport = (path: string = 'utils') => {
  return {
    [path]: [
      '_getVarType',
      '_isPrimitVar',
      '_debounce',
      '_throttle',
      '_Stack',
      '_deepClone',
      '_Request',
      '_sleep',
    ],
  }
}
