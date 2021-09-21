function Scoreboard({ incorrectCount, correctCount, times }) {
  const meanTime = times.reduce((prev, curr) => prev + curr, 0) / times.length;

  const lastFive = times.slice(-5).reverse();

  return (
    <div className={'scoreboard'}>
      <div className={'cell'}>
        <div>
          Correct
        </div>
        <div>
          {correctCount}
        </div>
      </div>
      <div className={'cell'}>
        <div>
          Incorrect
        </div>
        <div>
          {incorrectCount}
        </div>
      </div>
      <div className={'cell'}>
        <div>
          Mean time
        </div>
        <div>
          {meanTime}
        </div>
      </div>
      <div className={'cell'}>
        <div>
          Last 5 times
        </div>
        <ul>
          {lastFive.map(time => <li>{time}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Scoreboard;
