import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'none',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
