class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item)
    return this.items
  }

  updateQuality() {
    // Runs at end of the day to evaluate and modify the sellIn and quality of each item
    // Loop through each item that has been added to the shops item array
    for (var i = 0; i < this.items.length; i++) {

      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {

      } else {
      // if the item is not Aged Brie or Backstage pass do x quality decrease
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        // if quality is greater than 0 do x quality
        if (this.items[i].quality > 0) {
            // reduce item quality by 1 quality
            this.items[i].quality -= 1;
            // results in normal objects having quality reduced and sulfurus to have same quality
        }
      } else {
        // if Aged Brie or backstage pass do x quality increase 1
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
          // if backstage only
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            // if backstage is less than 11 then increase by 1 again (+2)
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
            // if backstage is less than 6 then increase again (+3)
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
          }
        }
      }
    
      // unless the item is not sulfuras reduce sellin -1
  
        this.items[i].sellIn -= 1;

      // after reducing sellIn date and sellin date has passed this reduces the quality of normal items by 1
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          // if item is not backstge pass
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            // normal items can not be reduced below 0 quality
            if (this.items[i].quality > 0) {
                this.items[i].quality -= 1;
            }
          } else {
            // backstage pass gets set to 0 once sellIn is passed
            this.items[i].quality = 0;
          }
        } else {
          // Brie gets increased quality 
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1;
          }
        }
      }
    }
  }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
