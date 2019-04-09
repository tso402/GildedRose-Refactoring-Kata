var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  var gildedRose;
  var item;

  beforeEach(function(){
    gildedRose = new Shop();
    item = new Item('foo', 10, 10);
    gildedRose.addItem(item)
  }) 

  it("should be able to add an item", function() {
    expect(gildedRose.items[0].name).toEqual(item.name);
  })

  it('should review the quality of an item', function(){
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toEqual(9);
    expect(gildedRose.items[0].sellIn).toEqual(9);
  })
});
