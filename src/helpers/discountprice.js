export const discountedprice = (originalPrice, discountPercentage) => {
  const discountedprice =
    originalPrice - originalPrice * (discountPercentage / 100);
  return discountedprice.toFixed(2);
};
