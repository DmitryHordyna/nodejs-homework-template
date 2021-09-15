const express = require('express');

const { joiUserSchema, joiSchema } = require('../../models');
const {
  validation,
  controllerWrapper,
  authenticate,
} = require('../../middlewares');
const ctrl = require('../../controller/auth');

const validationMiddleware = validation(joiUserSchema);

const router = express.Router();

router.post('/signup', validationMiddleware, controllerWrapper(ctrl.signup));

router.post('/login', validationMiddleware, controllerWrapper(ctrl.login));

router.get('/logout', controllerWrapper(ctrl.logout));

router.get(
  '/current',
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getCurrentUser),
);

module.exports = router;
