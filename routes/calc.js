const calc = (num1, num2, op) => {
  const [x, y] = [parseInt(num1), parseInt(num2)];
  switch (op) {
    case 'add':
      return {answer: x + y};
    case 'sub':
      return {answer: x - y};
    case 'multi':
      return {answer: x * y};
    case 'div':
      return {answer: x / y};
    default:
      return {error: `unknown operator ${op}`}
  }
};

const aboutRoute = {
  method: 'GET',
  path: '/calc/about',
  handler(request, h) {
    return {
      message: 'Welcome to our Calculator Service'
    };
  }
};

const calculateRoutes = ['add', 'sub', 'multi', 'div'].map((op) => {
  return {
    method: 'GET',
    path: `/calc/${op}/{num1}/{num2}`,
    handler(request, h) {
      const {num1, num2} = request.params;
      return calc(parseInt(num1), parseInt(num2), op);
    }
  }
});

module.exports = [aboutRoute, ...calculateRoutes];
