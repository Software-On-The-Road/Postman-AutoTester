function postmanStrategy(parent, prop, type) {
  return 'pm.test("It should have ' + prop + ' property", () => pm.expect.(' + (parent ? parent + '.' : '') + prop + ').to.exist.and.to.be.a(\'' + (type || 'string') + '\'))';
}
