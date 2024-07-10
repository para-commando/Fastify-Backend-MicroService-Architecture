module.exports.getReqTwoHandlerOne = (request, reply) => {
  try {
    reply.code(201).send({
      weapons: [
        {
          id: 1,
          name: 'M16',
          type: 'Rifle',
          damage: 30,
          manufacturer: 'Colt',
          rangeValue: 500,
          weight: 3.77,
          description:
            'A lightweight, 5.56 mm, air-cooled, gas-operated, magazine-fed, shoulder-fired weapon with a collapsible stock.',
        },
      ],
    });
  } catch (error) {
    console.log('🚀 ~ handler: ~ error:', error);
    return error;
  }
};
