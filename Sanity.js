export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productID',
      type: 'string',
      title: 'Product ID',
      description: 'Unique identifier for each product (e.g., SKU)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the glasses (e.g., Aviator, Round Frame)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description of the glasses, including design and features',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Type of glasses (e.g., Sunglasses, Prescription Glasses)',
      options: {
        list: [
          { title: 'Sunglasses', value: 'sunglasses' },
          { title: 'Prescription Glasses', value: 'prescription_glasses' },
          { title: 'Kids Glasses', value: 'kids_glasses' },
          { title: 'Blue Light Glasses', value: 'blue_light_glasses' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the glasses',
      validation: Rule => Rule.min(0).precision(2).required(),
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      description: 'Quantity available in inventory',
      validation: Rule => Rule.min(0).required(),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'Images of the glasses (e.g., front, side, angle views)',
      of: [{ type: 'image' }],
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique slug for the product (used in URLs)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount',
      description: 'Discount percentage on the glasses (if applicable)',
      validation: Rule => Rule.min(0).max(100),
    },
    {
      name: 'material',
      type: 'string',
      title: 'Material',
      description: 'Material of the glasses frame (e.g., Metal, Plastic, Acetate)',
    },
    {
      name: 'frameSize',
      type: 'string',
      title: 'Frame Size',
      description: 'Size of the frame (e.g., Small, Medium, Large)',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'gender',
      type: 'string',
      title: 'Gender',
      description: 'Target gender for the glasses (e.g., Unisex, Men, Women, Kids)',
      options: {
        list: [
          { title: 'Unisex', value: 'unisex' },
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
        ],
      },
    },
  ],
};
