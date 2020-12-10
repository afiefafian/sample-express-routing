const controller = {};

controller.get = (_req, res) => {
  res.send('Controller 2 - get');
};

controller.getOne = (_req, res) => {
  res.send('Controller 2 - getOne');
};

controller.post = (_req, res) => {
  res.send('Controller 2 - post');
};

controller.put = (_req, res) => {
  res.send('Controller 2 - put');
};

controller.delete = (_req, res) => {
  res.send('Controller 2 - delete');
};

module.exports = controller;
