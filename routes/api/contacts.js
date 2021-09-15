const express = require('express');

const { joiSchema } = require('../../models');
const {
  validation,
  controllerWrapper,
  authenticate,
} = require('../../middlewares');
const contactCtrl = require('../../controller/contact');

const validationMiddlewareContact = validation(joiSchema);

const router = express.Router();

router.post(
  '/current',
  controllerWrapper(authenticate),
  validationMiddlewareContact,
  controllerWrapper(contactCtrl.addContact),
);
router.get(
  '/current',
  controllerWrapper(authenticate),
  controllerWrapper(contactCtrl.getAll),
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
