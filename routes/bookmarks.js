const express = require('express');

const Bookmarks = require('../models/Bookmarks');

const router = express.Router();

/**
 * List all Bookmarks.
 * 
 * @name GET /api/bookmarks
 * 
 * @return {Bookmark[]} - list of all stored Bookmarks
 */
 router.get('/', (req, res) => {
  res.status(200).json(Bookmarks.findAll()).end();
});

/**
 * Create a Bookmark.
 * 
 * @name POST /api/bookmarks
 * 
 * @param {string} name - name of Bookmark (link will be /:Bookmark)
 * @param {string} url - link Bookmark points to
 * @return {Bookmark} - the created Bookmark
 * @throws {400} - if name is already taken
 */
router.post('/', (req, res) => {
  if (Bookmarks.findOne(req.body.name) !== undefined) {
    res.status(400).json({
      error: `Bookmark ${req.body.name} already exists.`,
    }).end();
  } else {
    const Bookmark = Bookmarks.addOne(req.body.name, req.body.url); 
    res.status(200).json(Bookmark).end();
  }
});

/**
 * Delete a Bookmark.
 * 
 * @name DELETE /api/bookmarks/:name
 * 
 * @return {Bookmark} - the deleted Bookmark
 * @throws {404} - if Bookmark does not exist
 */
router.delete('/:name?', (req, res) => {
  if (Bookmarks.findOne(req.params.name) === undefined) {
    res.status(404).json({
      error: `Bookmark URL ${req.params.name} does not exist.`,
    }).end();
  } else {
    const Bookmark = Bookmarks.deleteOne(req.params.name);
    res.status(200).json(Bookmark).end();
  }
});

module.exports = router;