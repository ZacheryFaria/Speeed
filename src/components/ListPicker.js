import {LoremIpsum} from "lorem-ipsum";
import {useEffect, useState} from "react";
import moment from "moment";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 12,
    min: 4
  }
});

function ListPicker({ finished, id }) {
  const [ipsums, setIpsums] = useState([]);
  const [startTime, setStartTime] = useState(moment());
  const [lucky, setLucky] = useState();

  useEffect(() => {
    let elements = Array.apply(null, Array(48)).map(() => lorem.generateSentences(1));

    setLucky(getRandomInt(32));

    setIpsums(elements);

    setStartTime(moment());
  }, [id])

  const clicked = (e, row) => {
    e.preventDefault();
    const endTime = moment();
    finished(row === lucky, endTime.diff(startTime, 'millisecond'))
  }

  return (
    <ul className={'list-picker'}>
      {
        ipsums.map((row, i) => <li>
          <a className={i === lucky && 'special'} href={`/${i}`} onClick={(e) => clicked(e, i)}>{row}</a>
        </li>)
      }
    </ul>
  )
}

export default ListPicker;
