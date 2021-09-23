const express = require('express');

const { joiUserSchema, joiSchema } = require('../../models');
const ctrl = require('../../controller/auth');
const {
  validation,
  controllerWrapper,
  authenticate,
} = require('../../middlewares');

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
router.get('/verify/:verifyToken', controllerWrapper(ctrl.verify));

router.post('/verify', controllerWrapper(ctrl.repeatVerification));

module.exports = router;
