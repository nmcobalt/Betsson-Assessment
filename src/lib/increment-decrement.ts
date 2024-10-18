interface IIncrementDecrement {
  currentValue: number;
  volume: number;
  maxValue?: number;
  minValue?: number;
}


function increment({ currentValue = 1, volume = 1, maxValue = 10 }: Partial<IIncrementDecrement> = {} ): number {
  return currentValue < maxValue ? currentValue + volume : currentValue;
}

function decrement({ currentValue = 1, volume = 1, minValue = 0 }: Partial<IIncrementDecrement> = {}): number {
  return currentValue > minValue ? currentValue - volume : currentValue;
}

export { increment, decrement };
