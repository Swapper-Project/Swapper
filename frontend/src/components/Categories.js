export const categories = [
  'All',
  'Appliances',
  'Auto',
  'Books',
  'Clothing',
  'Computer',
  'Electronics',
  'Gym',
  'Music',
  'Toys',
  'Sports',
  'Video Games'
];

// Remove 'All' as an option when creating a post.
export const createPostCategories = categories.slice(1);

export default {
  categories,
  createPostCategories
};
