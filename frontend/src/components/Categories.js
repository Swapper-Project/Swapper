export const categories = [
  'All',
  'Appliances',
  'Furniture',
  'Books',
  'Clothing',
  'Electronics',
  'Other',
];

// Remove 'All' as an option when creating a post.
export const createPostCategories = categories.slice(1);

export default {
  categories,
  createPostCategories
};
