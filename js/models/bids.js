class Bids {
  constructor() {
    this.startMoney = 1000000;
    this.money = 0;
    this.convertedMoney = 0;
    this.wonBid = 0;
    this.loseBid = 0;
    this.bidValue1 = 0;
    this.bidValue2 = 0;
    this.bidValue3 = 0;
    this.bidValue4 = 0;
    this.totalBidValues = [];
  }

  setBid(bid) {
    this.bidValue1 = Number(bid[0].value)
    this.bidValue2 = Number(bid[1].value)
    this.bidValue3 = Number(bid[2].value)
    this.bidValue4 = Number(bid[3].value)
    this.totalBidValues = [this.bidValue1, this.bidValue2, this.bidValue3, this.bidValue4]
    this.money = this.startMoney - (this.totalBidValues.reduce((a,b) => a + b))
    this.convertedMoney = numeral(this.startMoney - (this.totalBidValues.reduce((a,b) => a + b))).format('0,0,0') + '$';

    bid.forEach((value, index) => {
      let maxBid = this.money + this.totalBidValues[index];
      value.setAttribute("max", maxBid)
    })
  }

  checkBid(correctAnswer) { 
    DOMElements.questionAnswers.map((answer,index) => {
      if(answer.textContent === correctAnswer) {
        this.wonBid = Number(this.totalBidValues[index])
        this.startMoney = this.wonBid
      } else {
        this.loseBid += Number(this.totalBidValues[index])
      }
    })
  }
}

const bids = new Bids();


