import { calculateLayerArea, formatAreaHa } from './geometryCalculator'

export { calculateLayerArea, formatAreaHa }

export function formatAreaValue(value: number, unit: 'ha' | 'm2' | 'km2'): string {
  const decimals = unit === 'm2' ? 0 : 4
  const suffix = unit === 'ha' ? ' ha' : unit === 'km2' ? ' km²' : ' m²'
  return `${value.toLocaleString(undefined, { maximumFractionDigits: decimals })}${suffix}`
}
