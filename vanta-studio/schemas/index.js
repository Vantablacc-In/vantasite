// Import individual schema documents
import author from './author';
import category from './category';
import product from './product';
import productVariant from './productVariant';
import tag from './tag';

// Export the combined schema types
export const schemaTypes = [author, category, product, productVariant, tag];
