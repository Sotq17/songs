export const selectSong = () => {
	return{
		type: 'SONG_SELECTED',
		payload: songs
	};
};