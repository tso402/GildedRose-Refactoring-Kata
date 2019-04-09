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

  it('should not decrease the sellIn or quality for Sulfuras', function(){
    item2 = new Item('Sulfuras, Hand of Ragnaros', 10, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(10);
    expect(gildedRose.items[1].sellIn).toEqual(10);
  })

  it('should increase the quality of Aged Brie as time progresses', function(){
    item2 = new Item('Aged Brie', 10, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(11);
    expect(gildedRose.items[1].sellIn).toEqual(9);
  })

  it('should not increase the quality an item above 50', function(){
    item2 = new Item('Aged Brie', 10, 50)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(50);
    expect(gildedRose.items[1].sellIn).toEqual(9);
  })

  it('increase the quality of Backstage passes to a TAFKAL80ETC concert as time progresses', function(){
    item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 14, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(11);
    expect(gildedRose.items[1].sellIn).toEqual(13);
  })

  it('increase the quality by 2 of Backstage passes to a TAFKAL80ETC concert as sellIn drops below 11', function(){
    item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(12);
    expect(gildedRose.items[1].sellIn).toEqual(9);
  })

  it('increase the quality by 3 of Backstage passes to a TAFKAL80ETC concert as sellIn drops below 6', function(){
    item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(13);
    expect(gildedRose.items[1].sellIn).toEqual(4);
  })

  it('reduces the quality of Backstage passes to a TAFKAL80ETC concert to 0 after sellIn date is passed', function(){
    item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(0);
    expect(gildedRose.items[1].sellIn).toEqual(-1);
  })

  it('should not reduce quality below 0', function(){
    item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
    gildedRose.addItem(item2)
    gildedRose.updateQuality()
    gildedRose.updateQuality()
    expect(gildedRose.items[1].quality).toEqual(0);
    expect(gildedRose.items[1].sellIn).toEqual(-2);
  })
});
