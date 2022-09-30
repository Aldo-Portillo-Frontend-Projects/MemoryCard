import { nanoid } from 'nanoid' 

export default function levels (level) {
    if (level === 1) {
      return [
        {key: nanoid(), value: "card one", isClicked: false},
        {key: nanoid(), value: "card two", isClicked: false},
        {key: nanoid(), value: "card three", isClicked: false},
        {key: nanoid(), value: "card four", isClicked: false},
        {key: nanoid(), value: "card five", isClicked: false},
        {key: nanoid(), value: "card six", isClicked: false},
        {key: nanoid(), value: "card seven", isClicked: false},
        {key: nanoid(), value: "card eight", isClicked: false},
      ]
    } else if (level === 2) {
      return [
        {key: nanoid(), value: "card one", isClicked: false},
        {key: nanoid(), value: "card two", isClicked: false},
        {key: nanoid(), value: "card three", isClicked: false},
        {key: nanoid(), value: "card four", isClicked: false},
        {key: nanoid(), value: "card five", isClicked: false},
        {key: nanoid(), value: "card six", isClicked: false},
        {key: nanoid(), value: "card seven", isClicked: false},
        {key: nanoid(), value: "card eight", isClicked: false},
        {key: nanoid(), value: "card nine", isClicked: false},
        {key: nanoid(), value: "card ten", isClicked: false},
        {key: nanoid(), value: "card eleven", isClicked: false},
        {key: nanoid(), value: "card twelve", isClicked: false},
      ]
    }
  }