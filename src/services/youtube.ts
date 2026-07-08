const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export async function getVideos() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${CHANNEL_ID}` +
    `&part=snippet,id` +
    `&type=video` +
    `&order=date` +
    `&maxResults=50`;

  const response = await fetch(url);
  const data = await response.json();

  return data.items.filter(
    (item: any) => item.id.kind === "youtube#video"
  );
}