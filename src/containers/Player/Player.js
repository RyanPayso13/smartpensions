import React, { useEffect, useContext, useState } from "react";
import Context from "../../state/context";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

const Player = ({ id = null }) => {
  const { state } = useContext(Context);
  const [winCount, setWinCount] = useState(0);
  useEffect(() => {
    const player = state.players.find(player => player.id === id);
    setWinCount(player.winCount);
  }, [id, state.players]);

  return <PlayerCard id={id} winCount={winCount} />;
};

export default Player;
