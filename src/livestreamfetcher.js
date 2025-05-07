const API_KEY = 'AIzaSyA4azAb4CPI2laSiLCLMgXPbeqVaWSeBSo';
const CHANNEL_ID = 'UCf7fGmk8vxEut9zsY_oFzJQ';
const TESTCHANNEL_ID = "UCSJ4gkVC6NrvII8umztf0Ow";

async function getUploadsPlaylistId() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function isChannelLive() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${TESTCHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const liveurl = data.items[0];
    return data.items && data.items.length > 0;
}

async function getLiveUrl() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return liveurl = data.items[0];

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
async function fetchLastLives(videoIds) {
    const ids = videoIds.join(',');
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${ids}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    const completed = data.items.filter(v =>
        v.liveStreamingDetails && v.liveStreamingDetails.actualEndTime
    );
    return completed
        .sort((a, b) =>
            new Date(b.liveStreamingDetails.actualEndTime) - new Date(a.liveStreamingDetails.actualEndTime)
        )
        .slice(0, 5);
}

async function showLatestCompletedLivestream() {
    try {
        const uploadsPlaylistId = await getUploadsPlaylistId();
        const videoIds = await getRecentUploads(uploadsPlaylistId);
        const latestStream = await getCompletedLivestream(videoIds);
        const last5streams = await fetchLastLives(videoIds);
        console.log("Fetched 5 latest streams")
        console.log(last5streams);
        document.getElementById("vid1").innerHTML = innerHTML = `<iframe width="660" height="415" src="https://www.youtube.com/embed/${last5streams[0].id}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>`;
        document.getElementById("vid2").innerHTML = innerHTML = `<iframe width="660" height="415" src="https://www.youtube.com/embed/${last5streams[1].id}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>`;
        document.getElementById("vid3").innerHTML = innerHTML = `<iframe width="660" height="415" src="https://www.youtube.com/embed/${last5streams[2].id}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>`;
        document.getElementById("vid4").innerHTML = innerHTML = `<iframe width="660" height="415" src="https://www.youtube.com/embed/${last5streams[3].id}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>`;
        document.getElementById("vid5").innerHTML = innerHTML = `<iframe width="660" height="415" src="https://www.youtube.com/embed/${last5streams[4].id}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>`;
        if (latestStream) {
            const videoId = latestStream.id;
            const title = latestStream.snippet.title;
            document.getElementById('livestreamembed').innerHTML = `
            <iframe width="660" height="415" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen style="border-radius: 20px; margin: auto; align-content: center;" loading="lazy"></iframe>
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