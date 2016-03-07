var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Letter Grader', function() {
    it('92 or 98 should equal A', function() {
    expect(letterGrader(98)).to.equal('A');
    expect(letterGrader(92)).to.equal('A');
  });
});

describe('Letter Grader', function() {
    it('88 or 82 should equal B', function() {
    expect(letterGrader(88)).to.equal('B');
    expect(letterGrader(82)).to.equal('B');
  });
});

describe('Letter Grader', function() {
    it('88 or 82 should equal C', function() {
    expect(letterGrader(78)).to.equal('C');
    expect(letterGrader(72)).to.equal('C');
  });
});

describe('Letter Grader', function() {
    it('68 or 62 should equal D', function() {
    expect(letterGrader(68)).to.equal('D');
    expect(letterGrader(62)).to.equal('D');
  });
});

describe('Letter Grader', function() {
    it('Less than 60 should equal F', function() {
    expect(letterGrader(59)).to.equal('F');
    expect(letterGrader(0)).to.equal('F');
  });
});
