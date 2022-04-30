export const getAllTournaments = () => {
    const authToken = `${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`;
    const basicAuth = `Basic ${btoa(authToken)}`;
    return fetch(process.env.REACT_APP_REST_API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": basicAuth
        }
    })
    .then(res => res.json())
    .catch(err => {
        alert("Data receiving problem");
      });
}
