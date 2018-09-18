function postmanStrategy(parent, prop, type) {
  return 'pm.test("It should have ' + prop + ' property", function() {\n \t var jsonData = pm.response.json(); \n\t return pm.expect(jsonData.' + (parent ? parent + '.' : '') + prop + ').to.exist.and.to.be.a(\'' + (type || 'string') + '\'); \n})';
}
