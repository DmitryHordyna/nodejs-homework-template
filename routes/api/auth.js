const express = require('express');

const { joiUserSchema, joiSchema } = require('../../models');
const {
  validation,
  controllerWrapper,
  authenticate,
} = require('../../middlewares');
const ctrl = require('../../controller/auth');
const contactCtrl = require('../../controller/contact');

const validationMiddleware = validation(joiUserSchema);
const validationMiddlewareContact = validation(joiSchema);

const router = express.Router();

router.post('/signup', validationMiddleware, controllerWrapper(ctrl.signup));

router.post('/login', validationMiddleware, controllerWrapper(ctrl.login));

router.get('/logout', controllerWrapper(ctrl.logout));

router.get(
  '/current',
  controllerWrapper(authenticate),
  controllerWrapper(contactCtrl.getAll),
);
router.post(
  '/current',
  controllerWrapper(authenticate),
  validationMiddlewareContact,
  controllerWrapper(contactCtrl.addContact),
);

router.get(
  '/current/:contactId',
  controllerWrapper(authenticate),
  controllerWrapper(contactCtrl.getById),
);

router.put(
  '/current/:contactId',
  validationMiddlewareContact,
  controllerWrapper(contactCtrl.updateById),
);

router.delete('/current/:contactId', controllerWrapper(contactCtrl.deleteById));

router.patch(
  '/current/:contactId/favorite',
  controllerWrapper(contactCtrl.updateFavorite),
);

module.exports = router;
