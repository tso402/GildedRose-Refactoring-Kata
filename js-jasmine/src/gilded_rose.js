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

  agedBrieQuality(i){
    this.items[i].sellIn -= 1;
    if (this.items[i].quality < 50) {
      this.items[i].quality += 1
    }
  }

  backStagePassQuality(i){
    this.items[i].sellIn -= 1;
    if (this.items[i].sellIn < 0) {
      this.items[i].quality = 0;
    } else {
      if (this.items[i].quality < 50) {
        if (this.items[i].sellIn < 6) {
          this.items[i].quality += 3;
          }
        else if (this.items[i].sellIn < 11) {
          this.items[i].quality += 2;
        } else {
          this.items[i].quality += 1;
        }
      }
    }
  }

  conjuredQuality(i) {
    this.items[i].sellIn -= 1;
    if (this.items[i].quality > 0) {
      if (this.items[i].sellIn < 0) {
        this.items[i].quality -= 4;
      } else {
        this.items[i].quality -= 2;
      }
    }  
  }

  normalItems(i){
    this.items[i].sellIn -= 1;
    if (this.items[i].quality > 0) {
      if (this.items[i].sellIn < 0) {
        this.items[i].quality -= 2;
      } else {
        this.items[i].quality -= 1;
      }
    }  
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Sulfuras, Hand of Ragnaros': {
          break;
        };
        case 'Aged Brie': {
          this.agedBrieQuality(i);
          break;
        }; 
        case 'Backstage passes to a TAFKAL80ETC concert': {
            this.backStagePassQuality(i);
            break;
          }
        case 'Conjured':
          this.conjuredQuality(i);
          break;
        default: {
          this.normalItems(i);
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
