const API_KEY = 'AIzaSyA4azAb4CPI2laSiLCLMgXPbeqVaWSeBSo';
const CHANNEL_ID = 'UCf7fGmk8vxEut9zsY_oFzJQ';

async function getUploadsPlaylistId() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function getRecentUploads(playlistId) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=15&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items.map(item => item.snippet.resourceId.videoId);
}

async function getCompletedLivestream(videoIds) {
    const ids = videoIds.join(',');
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${ids}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    const completed = data.items.filter(v =>
        v.liveStreamingDetails && v.liveStreamingDetails.actualEndTime
    );

    return completed.sort((a, b) =>
        new Date(b.liveStreamingDetails.actualEndTime) - new Date(a.liveStreamingDetails.actualEndTime)
    )[0];
}

async function showLatestCompletedLivestream() {
    try {
        const uploadsPlaylistId = await getUploadsPlaylistId();
        const videoIds = await getRecentUploads(uploadsPlaylistId);
        const latestStream = await getCompletedLivestream(videoIds);

        if (latestStream) {
            const videoId = latestStream.id;
            const title = latestStream.snippet.title;
            document.getElementById('livestreamembed').innerHTML = `
            <iframe width="660" height="415" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;"></iframe>
          `;
        } else {
            document.getElementById('livestreamembed').innerText = 'No completed livestreams found.';
        }
    } catch (err) {
        console.error(err);
        document.getElementById('livestreamembed').innerText = 'Error loading livestream.';
    }
}

showLatestCompletedLivestream();