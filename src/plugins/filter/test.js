// Testing the main file
describe(".filter(selector)", function() {
  
  it("should be defined", function() {
    expect(typeof base.filter).to.equal('function');
  });

  it("can be called empty", function() {
    base.filter();
    base.filter("");
  });

  it("stays the same", function() {
    expect(base.filter('.base').nodes.length).to.equal(1);
  });

  it("gets only one", function() {
    expect(base.find('a').filter('#world').nodes.length).to.equal(1);
  });

  it("accepts a function", function() {
    expect(base.filter(function(){ return true; }).nodes.length).to.equal(1);
    expect(base.filter(function(){ return false; }).nodes.length).to.equal(0);
  });
});