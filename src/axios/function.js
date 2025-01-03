const getToken = async () => {
  try {
    const Client_Id = "a338b217a32f444091056148b8a08cab";
    const Client_Secret = "7876a7ac8c2540aea1bb0fdcb5d9cb5f";

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(Client_Id + ":" + Client_Secret)}`,
      },
      body: "grant_type=client_credentials",
    });

    const auth = await response.json();

    if (response.ok) {
      localStorage.setItem(
        "access_token",
        `${auth.token_type} ${auth.access_token}`
      );
    } else {
      console.error("Failed to fetch token:", auth);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

export { getToken };
