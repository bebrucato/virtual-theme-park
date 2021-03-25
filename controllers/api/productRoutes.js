const router = require('express').Router();
const { Products } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newProduct = await Products.create({
        ...req.body,
        id: req.session.id,
      });
  
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json(err);
    }
  });