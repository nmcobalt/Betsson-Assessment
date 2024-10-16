function increment({ currentValue = 1, volume = 1, maxValue = 10 }: { currentValue?: number; volume?: number; maxValue?: number } = {}): number {
  return currentValue < maxValue ? currentValue + volume : currentValue;
}

function decrement({ currentValue = 1, volume = 1, minValue = 0 }: { currentValue?: number; volume?: number; minValue?: number } = {}): number {
  return currentValue > minValue ? currentValue - volume : currentValue;
}

export { increment, decrement };
