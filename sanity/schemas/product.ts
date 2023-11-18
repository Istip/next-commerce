export default {
  name: 'product',
  type: 'document',
  title: 'Product',

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product title',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
