const API_KEY = 'AIzaSyA4azAb4CPI2laSiLCLMgXPbeqVaWSeBSo';
const CHANNEL_ID = 'UCf7fGmk8vxEut9zsY_oFzJQ';

async function getLatestCompletedLivestream() {
    const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`;
    const searchResponse = await fetch(searchURL);
    const searchData = await searchResponse.json();

    const videoIds = searchData.items.map(item => item.id.videoId).join(',');

    const videosURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoIds}&key=${API_KEY}`;
    const videosResponse = await fetch(videosURL);
    const videosData = await videosResponse.json();

    const completedLivestreams = videosData.items.filter(video => {
        return video.liveStreamingDetails &&
            video.liveStreamingDetails.actualEndTime;
    });

    if (completedLivestreams.length > 0) {
        const latest = completedLivestreams[0];
        const videoId = latest.id;
        const title = latest.snippet.title;

        document.getElementById('livestreamembed').innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        `;
    } else {
        document.getElementById('livestreamembed').innerText = 'No completed livestreams found.';
    }
}

getLatestCompletedLivestream();