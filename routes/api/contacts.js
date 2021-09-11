const express = require('express');

// const operetionsContact = require('../../models');
const { joiSchema } = require('../../models');
const { validation } = require('../../middlewares');
const contacts = require('../../controller');
const validationMiddleware = validation(joiSchema);
// const { contacts } = require('../../controller');
// console.log(contacts);
const router = express.Router();

// router.post('/', validationMiddleware, ctrl.addContact);
// router / this.post('/', validationMiddleware, ctrl.add);
// router.post('/', validationMiddleware, ctrl.updateById);
// router.delete('/:id', ctrl.deleteById);

module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const contacts = await operetionsContact.listContacts();
//     res.json({
//       contacts,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const contacts = await operetionsContact.getContactById(contactId);
//     if (!contacts) {
//       return res.status(404).json({
//         message: 'Not found',
//       });
//     }
//     res.json({
//       contacts,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', async (req, res, next) => {
//   const { error } = contactsShema.validate(req.body);
//   if (error) {
//     return res.status(400).json({
//       message: 'missing required name field',
//     });
//   }
//   try {
//     const newContact = await operetionsContact.addContact(req.body);
//     res.status(201).json({
//       newContact,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const deleteContact = await operetionsContact.removeContact(contactId);
//     if (!deleteContact) {
//       return res.status(404).json({
//         message: 'Not found',
//       });
//     }
//     res.json({
//       message: 'contact deleted',
//       deleteContact,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/:contactId', async (req, res, next) => {
//   const { error } = contactsShema.validate(req.body);
//   if (error) {
//     return res.status(400).json({
//       message: 'missing fields',
//     });
//   }
//   try {
//     const { contactId } = req.params;
//     const updateContact = await operetionsContact.updateContact(
//       contactId,
//       req.body,
//     );
//     if (!updateContact) {
//       return res.status(404).json({
//         message: 'Not found',
//       });
//     }
//     res.json({
//       updateContact,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
