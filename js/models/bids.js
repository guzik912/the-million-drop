class Bids {
  constructor() {
    this.allMoney = 1000000;
    this.wonBid = 0;
    this.loseBid = 0;
    this.bidValue1 = 0;
    this.bidValue2 = 0;
    this.bidValue3 = 0;
    this.bidValue4 = 0;
    this.bidValues = [];
    this.totalBidValues = [];
  }

  setBid(bid) {
    this.bidValue1 = Number(bid[0].value)
    this.bidValue2 = Number(bid[1].value)
    this.bidValue3 = Number(bid[2].value)
    this.bidValue4 = Number(bid[3].value)
    this.totalBidValues = [this.bidValue1, this.bidValue2, this.bidValue3, this.bidValue4]
    this.allMoney = 1000000 - (this.totalBidValues.reduce((a,b) => a + b))
  }

  checkBid(correctAnswer, bids) { 
    const answers = bids.map(bid => bid.parentNode.previousElementSibling.textContent);
    const indexOfCorrectAnswer = answers.findIndex(answer => answer === correctAnswer);

    answers.map((answer,index) => {
      if(answer === correctAnswer) {
        this.wonBid = this.totalBidValues[index]
      } else {
        this.loseBid += this.totalBidValues[index]
      }
    })
  }
}

const bid = new Bids();

const inputs = [...document.querySelectorAll('.bid-value input')];
const allMoney = document.querySelector('.money');

inputs.forEach(input => input.addEventListener('input', (e)=> {
  bid.setBid(inputs);
  allMoney.textContent = bid.allMoney;
}))

