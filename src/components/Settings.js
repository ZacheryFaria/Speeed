import {Box, Button, Flex, Input} from "@chakra-ui/react";

function Settings({settings, setSettings, applySettings, resetScoreboard}) {
  const settingsEditCallback = (e) => {
    const value = Number(e.target.value);
    if (!Number.isInteger(value)) {
      return;
    }
    settings[e.target.id] = value;
    setSettings({...settings});
  }

  const settingsApplyCallback = (e) => {
    e.preventDefault();
    applySettings();
  }

  return (
    <form style={{width: '100%', height: '25%'}} onSubmit={settingsApplyCallback}>
      <Flex direction={'column'} width={'100%'} height={'100%'} justifyContent={'space-between'}>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Box>Number of rows</Box>
          <Input width={'33%'} textAlign={'right'} id='numberOfLinks' value={settings.numberOfLinks}
                 onChange={settingsEditCallback}/>
        </Flex>

        <Flex justifyContent={'space-between'}>
          <Button onClick={settingsApplyCallback} width={'40%'}>Apply</Button>
          <Button onClick={resetScoreboard} width={'40%'}>Reset Scoreboard</Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default Settings;
