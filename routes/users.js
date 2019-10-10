module.exports = [
  {
    method: 'GET', path: '/users', handler() {
      return [
        {userId: 1},
        {userId: 2},
      ]
    }
  },
  {
    method: 'GET', path: '/users/{id}', handler(request) {
      return `Hello ${request.params.id}!`;
    }
  }
];
