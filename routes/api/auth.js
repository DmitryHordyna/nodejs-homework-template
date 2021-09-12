const express = require('express');

const { joiUserSchema } = require('../../models');
const { validation, controllerWrapper } = require('../../middlewares');
const ctrl = require('../../controller/auth');

const validationMiddleware = validation(joiUserSchema);

const router = express.Router();

router.post(
  '/register',
  validationMiddleware,
  controllerWrapper(ctrl.register),
);

router.post('/login', validationMiddleware, controllerWrapper(ctrl.login));

// router.get('/logout', controllerWrappe(ctrl.logout));

module.exports = router;
