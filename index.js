module.exports = function (content) {
  this.cacheable && this.cacheable();

  return content;
}
