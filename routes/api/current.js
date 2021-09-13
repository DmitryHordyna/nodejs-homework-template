const express = require('express');

const { joiUserSchema } = require('../../models');
const {
  validation,
  controllerWrapper,
  authenticate,
} = require('../../middlewares');
const ctrl = require('../../controller/contact');

const validationMiddleware = validation(joiUserSchema);

const router = express.Router();

router.post(
  'auth/current',
  controllerWrapper(authenticate),
  validationMiddleware,
  controllerWrapper(ctrl.add),
);

module.exports = router;
