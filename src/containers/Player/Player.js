import React, { useEffect, useContext, useState } from "react";
import Context from "../../state/context";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

const Player = ({ id = null }) => {
  const { state } = useContext(Context);
  const [winCount, setWinCount] = useState(0);
  const index = [...state.players].findIndex(player => player.id === id);
  let playerWinCount = state.players[index].winCount;
  useEffect(() => {
    setWinCount(playerWinCount);
  }, [id, playerWinCount]);

  return <PlayerCard id={id} winCount={winCount} />;
};

export default Player;
