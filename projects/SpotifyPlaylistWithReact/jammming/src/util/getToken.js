export function findAccessToken() {
  let urlData = new URLSearchParams(window.location.hash);
  if (urlData.has("#access_token")) {
    return urlData.get("#access_token");
  } else {
    return null;
  }
}

console.log(findAccessToken)

export const data = {
  clientId: "8a925bdbdc514eb3bc6c8f1223aaa83f",
  redirectUri: "http://localhost:3000/",
};

export default function SignInButton() {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${data.clientId}&redirect_uri=${data.redirectUri}`;
  const accessToken = findAccessToken();

  if (accessToken) {
    return <div>You are logged in!</div>;
  } else {
    return (
      <div className="sign-into-spotify-button">
        <a href={url}>Sign into Spotify</a>
      </div>
    );
  }
}
