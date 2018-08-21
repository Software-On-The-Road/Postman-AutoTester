function postmanStrategy(parent, prop, type) {
  return 'pm.expect.(' + (parent ? parent + '.' : '') + prop + ').to.exist.and.to.be.a(\'' + (type || 'string') + '\')';
}
