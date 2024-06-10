// store the details of the current Channel and the Thread as set by the user on selecting the Channel from the ChannelList or Thread from the Message list

import React, { useState } from 'react';

export const ChannelContext = React.createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
});

export const ChannelProvider = ({ children }) => {
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();

  return <ChannelContext.Provider value={{ channel, setChannel, thread, setThread }}>{children}</ChannelContext.Provider>;
};

export const useChannelContext = () => React.useContext(ChannelContext);