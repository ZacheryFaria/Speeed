import {LoremIpsum} from "lorem-ipsum";
import {useEffect, useState} from "react";
import moment from "moment";
import {ListItem, UnorderedList} from "@chakra-ui/react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 12,
    min: 4
  }
});

function ListPicker({ finished, id, settings }) {
  const [ipsums, setIpsums] = useState([]);
  const [startTime, setStartTime] = useState(moment());
  const [lucky, setLucky] = useState();

  useEffect(() => {
    let elements = Array.apply(null, Array(settings.numberOfLinks)).map(() => lorem.generateSentences(1));

    setLucky(getRandomInt(settings.numberOfLinks));

    setIpsums(elements);

    setStartTime(moment());
  }, [id, settings])

  const clicked = (e, row) => {
    e.preventDefault();
    const endTime = moment();
    finished(row === lucky, endTime.diff(startTime, 'millisecond'))
  }

  return (
    <UnorderedList spacing={3} margin={0} padding={'1em'} className={'list-picker'}>
      {
        ipsums.map((row, i) => <ListItem listStyleType={'none'}>
          <a className={i === lucky && 'special'} href={`/${i}`} onClick={(e) => clicked(e, i)}>{row}</a>
        </ListItem>)
      }
    </UnorderedList>
  )
}

export default ListPicker;
