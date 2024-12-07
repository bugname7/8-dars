import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setFilterUser(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (name === "") {
      setFilterUser(user);
    } else {
      setFilterUser(
        user.filter((users) =>
          users.title.toLowerCase().includes(name.toLowerCase())
        )
      );
    }
  }, [name, user]);

  return (
    <div>
      <div className="container">
        <div className="workSpace">
          <h2>Ish qidiruv formasi</h2>
          <form className="work ">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ish nomi....."
            />
          </form>
        </div>
        <div className="cards-title">
          {filterUser.length > 0 ? (
            filterUser.map((users, index) => (
              <div className="works-title" key={users.id}>
                <h3>Title: {users.title}</h3>
                <h5>Body: {users.body}</h5>
              </div>
            ))
          ) : (
            <p>error</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
