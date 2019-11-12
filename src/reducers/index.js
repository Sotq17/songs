import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'songa', duration: '4:05'},
		{ title: 'songb', duration: '5:05'},
		{ title: 'songc', duration: '1:05'},
		{ title: 'songd', duration: '2:05'},
	]
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED'){
		return action.payload;
	}
	return selectedSong
}

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
})