let data = [];

/**
 * @typedef Bookmark
 * @prop {string} name - some string, valid in a URL path
 * @prop {string} url - link to an external source
 * @prop {string} creator - username
 */

/**
 * @class Bookmarks
 * 
 * Stores all Bookmarks. Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Bookmarks {
  /**
   * Add a bookmark to the collection.
   * 
   * @param {string} name - The name of the bookmark
   * @param {string} url - The URL which the bookmark represents
   * @param {string} creator - The creator of the bookmark (optional)
   * @return {Bookmark} - the newly created bookmark
   */
  static addOne(name, url, creator = null) {
    const bookmark = { name, url, creator };
    data.push(bookmark);
    return bookmark;
  }

  /**
   * Find a bookmark by Name.
   * 
   * @param {string} name - The name of the bookmark to find
   * @return {Bookmark | undefined} - the found bookmark with above name
   */
  static findOne(name) {
    return data.filter(bookmark => bookmark.name === name)[0];
  }

  /**
   * @return {Bookmark[]} an array of all of the Bookmarks
   */
  static findAll() {
    return data;
  }

  /**
   * Delete a bookmark from the collection.
   * 
   * @param {string} name - name of bookmark to delete
   * @return {Bookmark | undefined} - deleted bookmark
   */
  static deleteOne(name) {
    const bookmark = Bookmarks.findOne(name);
    data = data.filter(s => s.name !== name);
    return bookmark;
  }
}

module.exports = Bookmarks;