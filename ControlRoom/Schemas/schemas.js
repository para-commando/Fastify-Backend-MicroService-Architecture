module.exports.schemas = {
  responseSchemaGetReqOne: {
    response: {
      200: {
        type: 'object',
        properties: {
          weapons: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                type: { type: 'string' },
                damage: { type: 'integer' },
                rangeValue: { type: 'integer' },
                weight: { type: 'number' },
                manufacturer: { type: 'string' },
                description: { type: 'string' },
              },
              required: ['id', 'name', 'type', 'damage', 'manufacturer'],
            },
          },
        },
      },
    },
  },
};
