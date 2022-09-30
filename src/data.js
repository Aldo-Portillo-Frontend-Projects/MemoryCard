import { nanoid } from 'nanoid' 

export default function levels (level) {
    if (level === 1){
        return[
            {key: nanoid(), value: "card one", isClicked: false , img: require('./card-img/2_of_diamonds.png')},
            {key: nanoid(), value: "card two", isClicked: false, img : require('./card-img/2_of_clubs.png')},
            {key: nanoid(), value: "card three", isClicked: false, img : require('./card-img/2_of_hearts.png')},
            {key: nanoid(), value: "card four", isClicked: false, img : require('./card-img/2_of_spades.png')},
        ]
    }
    else if (level === 2) {
      return [
        {key: nanoid(), value: "card one", isClicked: false, img: require('./card-img/2_of_diamonds.png')},
        {key: nanoid(), value: "card two", isClicked: false, img: require('./card-img/2_of_clubs.png')},
        {key: nanoid(), value: "card three", isClicked: false, img: require('./card-img/2_of_hearts.png')},
        {key: nanoid(), value: "card four", isClicked: false, img: require('./card-img/2_of_spades.png')},
        {key: nanoid(), value: "card five", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card six", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card seven", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card eight", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
      ]
    } else if (level === 3) {
      return [
        {key: nanoid(), value: "card one", isClicked: false, img: require('./card-img/2_of_diamonds.png')},
        {key: nanoid(), value: "card two", isClicked: false, img: require('./card-img/2_of_clubs.png')},
        {key: nanoid(), value: "card three", isClicked: false, img: require('./card-img/2_of_hearts.png')},
        {key: nanoid(), value: "card four", isClicked: false, img: require('./card-img/2_of_spades.png')},
        {key: nanoid(), value: "card five", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card six", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card seven", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card eight", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
        {key: nanoid(), value: "card nine", isClicked: false, img: require('./card-img/ace_of_diamonds.png')},
        {key: nanoid(), value: "card ten", isClicked: false, img: require('./card-img/ace_of_spades.png')},
        {key: nanoid(), value: "card eleven", isClicked: false, img: require('./card-img/ace_of_hearts.png')},
        {key: nanoid(), value: "card twelve", isClicked: false, img: require('./card-img/4_of_clubs.png')},
      ]
    } else if (level === 4) {
        return [
            {key: nanoid(), value: "card one", isClicked: false, img: require('./card-img/2_of_diamonds.png')},
            {key: nanoid(), value: "card two", isClicked: false, img: require('./card-img/2_of_clubs.png')},
            {key: nanoid(), value: "card three", isClicked: false, img: require('./card-img/2_of_hearts.png')},
            {key: nanoid(), value: "card four", isClicked: false, img: require('./card-img/2_of_spades.png')},
            {key: nanoid(), value: "card five", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card six", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card seven", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card eight", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card nine", isClicked: false, img: require('./card-img/ace_of_diamonds.png')},
            {key: nanoid(), value: "card ten", isClicked: false, img: require('./card-img/ace_of_spades.png')},
            {key: nanoid(), value: "card eleven", isClicked: false, img: require('./card-img/ace_of_hearts.png')},
            {key: nanoid(), value: "card twelve", isClicked: false, img: require('./card-img/ace_of_clubs.png')},
            {key: nanoid(), value: "card thirteen", isClicked: false, img: require('./card-img/queen_of_diamonds.png')},
            {key: nanoid(), value: "card fourteen", isClicked: false, img: require('./card-img/queen_of_hearts.png')},
            {key: nanoid(), value: "card fifteen", isClicked: false, img: require('./card-img/queen_of_hearts.png')},
            {key: nanoid(), value: "card sixteen", isClicked: false, img: require('./card-img/queen_of_clubs.png')},
        ]
      } else if (level === 5) {
        return [
            {key: nanoid(), value: "card one", isClicked: false, img: require('./card-img/2_of_diamonds.png')},
            {key: nanoid(), value: "card two", isClicked: false, img: require('./card-img/2_of_clubs.png')},
            {key: nanoid(), value: "card three", isClicked: false, img: require('./card-img/2_of_hearts.png')},
            {key: nanoid(), value: "card four", isClicked: false, img: require('./card-img/2_of_spades.png')},
            {key: nanoid(), value: "card five", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card six", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card seven", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card eight", isClicked: false, img: require('./card-img/4_of_diamonds.png')},
            {key: nanoid(), value: "card nine", isClicked: false, img: require('./card-img/ace_of_diamonds.png')},
            {key: nanoid(), value: "card ten", isClicked: false, img: require('./card-img/ace_of_spades.png')},
            {key: nanoid(), value: "card eleven", isClicked: false, img: require('./card-img/ace_of_hearts.png')},
            {key: nanoid(), value: "card twelve", isClicked: false, img: require('./card-img/ace_of_clubs.png')},
            {key: nanoid(), value: "card thirteen", isClicked: false, img: require('./card-img/queen_of_diamonds.png')},
            {key: nanoid(), value: "card fourteen", isClicked: false, img: require('./card-img/queen_of_hearts.png')},
            {key: nanoid(), value: "card fifteen", isClicked: false, img: require('./card-img/queen_of_hearts.png')},
            {key: nanoid(), value: "card sixteen", isClicked: false, img: require('./card-img/queen_of_clubs.png')},
            {key: nanoid(), value: "card thirteen", isClicked: false, img: require('./card-img/king_of_diamonds.png')},
            {key: nanoid(), value: "card fourteen", isClicked: false, img: require('./card-img/king_of_hearts.png')},
            {key: nanoid(), value: "card fifteen", isClicked: false, img: require('./card-img/king_of_hearts.png')},
            {key: nanoid(), value: "card sixteen", isClicked: false, img: require('./card-img/king_of_clubs.png')},
        ]
      } else {
        return [
            {key: nanoid(), value: "Game Is Complete!", isClicked: false},
        ]
      }
      
  }