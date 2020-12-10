const controller = {};

controller.get = (_req, res) => {
  res.send('Controller 1 - get');
};

controller.getOne = (_req, res) => {
  res.send('Controller 1 - getOne');
};

controller.post = (_req, res) => {
  res.send('Controller 1 - post');
};

controller.put = (_req, res) => {
  res.send('Controller 1 - put');
};

controller.delete = (_req, res) => {
  res.send('Controller 1 - delete');
};

module.exports = controller;
