const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    prevGuesses: [],
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    },
    getGuess: function() {
      
    },
   
  }


console.log(game)
game.getGuess()