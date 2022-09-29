const express = require('express');

const Bookmarks = require('../models/Bookmarks');

const router = express.Router();

/**
 * List all Bookmarks.
 * 
 * @name GET /bookmarks
 * 
 * @return {Bookmark[]} - list of all stored Bookmarks
 */
 router.get('/bookmarks', (req, res) => {
  res.status(200).json(Bookmarks.findAll()).end();
});

/**
 * Create a Bookmark.
 * 
 * @name POST TODO1-1: RESTful API endpoint
 * 
 * @param {string} name - name of Bookmark (link will be /:Bookmark)
 * @param {string} url - link Bookmark points to
 * @return {Bookmark} - the created Bookmark
 * @throws {TODO1-2: Response Status} - if name is already taken
 */
router.post('TODO1-1: RESTful API endpoint', (req, res) => {
  if (Bookmarks.findOne(req.body.name) !== undefined) {
    res.status(/* TODO1-2: Response Status */).json({
      error: `Bookmark ${req.body.name} already exists.`,
    }).end();
  } else {
    const Bookmark = Bookmarks.addOne(req.body.name, req.body.url); 
    res.status(/* TODO1-3: Response Status */).json(Bookmark).end();
  }
});

/**
 * Delete a Bookmark.
 * 
 * @name DELETE TODO2-1: RESTful API endpoint
 * 
 * @return {Bookmark} - the deleted Bookmark
 * @throws {TODO2-2: Response Status} - if Bookmark does not exist
 */
router.delete('TODO2-2: Response Status', (req, res) => {
  if (Bookmarks.findOne(req.params.name) === undefined) {
    res.status(/* TODO2-2: Response Status */).json({
      error: `Bookmark URL ${req.params.name} does not exist.`,
    }).end();
  } else {
    const Bookmark = Bookmarks.deleteOne(req.params.name);
    res.status(/* TODO2-3: Response Status */).json(Bookmark).end();
  }
});

module.exports = router;
