import {Box, Flex} from "@chakra-ui/react";

function ScoreboardCell({name, value}) {
  return (
    <Flex marginBottom={'0.5em'} justifyContent={"space-between"}>
      <Box>{name}</Box>
      <Box>{value}</Box>
    </Flex>
  )
}

function Scoreboard({ incorrectCount, correctCount, times }) {
  const meanTime = times.reduce((prev, curr) => prev + curr, 0) / times.length;

  const lastFive = times.slice(-5).reverse();

  return (
    <Flex direction={'column'} width={'100%'} height={'25%'}>
      <ScoreboardCell name={"Correct"} value={correctCount} />
      <ScoreboardCell name={"Incorrect"} value={incorrectCount} />
      <ScoreboardCell name={"Mean time"} value={meanTime.toFixed(2)} />
      <Flex justifyContent={"space-between"}>
        <Box>
          Last 5 times
        </Box>
        <ul>
          {lastFive.map(time => <li>{time.toFixed(2)}</li>)}
        </ul>
      </Flex>
    </Flex>
  )
}

export default Scoreboard;
