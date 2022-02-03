// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "9b06ed0158724c018f1e5c2e823da093";
const redirectUri = "https://Jagrutikatre27.github.io/spotify-clone";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  