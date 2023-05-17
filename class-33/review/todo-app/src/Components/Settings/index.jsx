import React from 'react';
import { useSettings } from '../../Context/Settings';
import { Button, TextInput } from '@mantine/core';

function Settings() {
  const { settings, setSettings } = useSettings();

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <TextInput
        label="How many tasks per page would you like to display?"
        placeholder="Enter your name"
        value={settings.itemsToDisplay}
        onChange={handleChange}
        name="itemsToDisplay"
      />
      <Button onClick={() => alert('Settings Saved!')}>Save Settings</Button>
    </div>
  );
}

export default Settings;
