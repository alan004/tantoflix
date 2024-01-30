
export function ratingConverter(rating: number) {
  return  Math.round((rating / 2) * Math.pow(10, 1)) / Math.pow(10, 1);
}


