export const selectCategoriesMap = (state) => {
  const womensCategoriesMap = state.womens.womens.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return womensCategoriesMap;
};
