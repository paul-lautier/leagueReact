import { useState } from "react";
import axios from "axios";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);

  function getPlayerGames(event) {
    axios
      .get("http://localhost:4000/past5Games", {
        params: { username: searchText },
      })
      .then(function (response) {
        setGameList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(gameList);
  return (
    <div className="App">
      <h1>Recherche de joueur</h1>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>

      <button onClick={getPlayerGames}>
        Obtenir les 5 dernières parties d'un joueur
      </button>
      {gameList.length !== 0 ? (
        <>
          {gameList.map((gameData, index) => (
            <>
              <h2>Game : {index + 1} </h2>
              <div>
                {gameData.info.participants.map((data, participantIndex) => (
                  <p>
                    Joueur {participantIndex + 1}: {data.summonerName}, KDA:{" "}
                    {data.kills} / {data.deaths} / {data.assists}
                  </p>
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <>
          {/* <p>RIEN</p> */}
        </>
      )}
    </div>
  );
}

export default Search;
