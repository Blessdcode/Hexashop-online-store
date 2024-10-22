export const selectCategoriesMap = (state) => {
  const mensCategoriesMap = state.mens.mens.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return mensCategoriesMap;
};
