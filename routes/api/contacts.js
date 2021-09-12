const express = require('express');

const { joiSchema } = require('../../models');
const { validation } = require('../../middlewares');
const ctrl = require('../../controller/contact');

const validationMiddleware = validation(joiSchema);

const router = express.Router();

router.get('/', ctrl.getAll);

router.post('/', validationMiddleware, ctrl.addContact);

router.get('/:contactId', ctrl.getById);

router.put('/:contactId', validationMiddleware, ctrl.updateById);

router.delete('/:contactId', ctrl.deleteById);

router.patch('/:contactId/favorite', ctrl.updateFavorite);

module.exports = router;
