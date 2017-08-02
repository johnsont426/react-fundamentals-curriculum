export function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
}