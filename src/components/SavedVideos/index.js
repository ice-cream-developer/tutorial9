import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'

import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => {
  ;<ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#231f20'
      const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
      const headingColor = isDarkTheme ? '#f3f5f5' : '#475569'

      const noteColor = isDarkTheme ? '#e266310' : '#675569'

      return (
        <>
          <Header />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedVideoTitle>
                <SavedTitleIconContainer>
                  <CgPlayListAdd size={35} color="#ff0105" />
                </SavedTitleIconContainer>
                <SavedText color={textColor}>Saved Videos</SavedText>
              </SavedVideoTitle>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No Saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
}

export default SavedVideos
