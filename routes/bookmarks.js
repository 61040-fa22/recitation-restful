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
 * @name GET TODO1: RESTful API endpoint
 * 
 * @param {string} name - name of Bookmark (link will be /:Bookmark)
 * @param {string} url - link Bookmark points to
 * @return {Bookmark} - the created Bookmark
 * @throws {TODO3: Response Status} - if name is already taken
 */
// TODO2: Change the "get" to a proper method for creating a bookmark
router.get('TODO1: RESTful API endpoint (URL)', (req, res) => {
  if (Bookmarks.findOne(req.body.name) !== undefined) {
    res.status(/* TODO3: Response Status */).json({
      error: `Bookmark ${req.body.name} already exists.`,
    }).end();
  } else {
    const Bookmark = Bookmarks.addOne(req.body.name, req.body.url); 
    res.status(/* TODO4: Response Status */).json(Bookmark).end();
  }
});

/**
 * Delete a Bookmark.
 * 
 * @name GET TODO5: RESTful API endpoint
 * 
 * @return {Bookmark} - the deleted Bookmark
 * @throws {404} - if Bookmark does not exist
 */
// TODO6: Change the "get" to a proper method for deleting a bookmark
router.get('TODO5: RESTful API endpoint (URL)', (req, res) => {
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
