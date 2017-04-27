 class BlackJack {
   constructor() {
     this.playerOneHand = ['A', 'A', 'A'];
     this.playerTwoHand = [];
     this.cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
     this.cardValues = {
       A: 1,
       2: 2,
       3: 3,
       4: 4,
       5: 5,
       6: 6,
       7: 7,
       8: 8,
       9: 9,
       10: 10,
       A: 1,
       J: 10,
       Q: 10,
       K: 10,
     };
     this.playerOneIsPlaying = true;
     this.playerTwoIsPlaying = true;
   }
   hitPlayer(player) {
     this[`${player}Hand`].push(this.cards[Math.floor(Math.random() * this.cards.length)]);
     return `${player} is Hitting, their score is ${this.getScore(player)}`;
   }

   stayPlayer(player) {
     this[`${player}IsPlaying`] = false;
     return `${player} is Staying`;
   }

   getScore(player) {
     return this[`${player}Hand`].reduce((total, card) => {
       if (card === 'A') {
         const temp = total.map(score => score + 1);
         temp.push(temp[temp.length - 1] + 10);
         return temp.filter(score => score < 21);
       }
       return total.map(score => score + this.cardValues[card]);
     }
    , [0]);
   }
}
