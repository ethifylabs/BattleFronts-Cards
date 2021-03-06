import { ActionTypes } from "const";

class UserAction {
  static setUser({
    name,
    win_count,
    lost_count,
    game,
    staking_done,
    staking_amount,
  }) {
    return {
      type: ActionTypes.SET_USER,
      name, // User name
      win_count, // Users win count
      lost_count, // Users lost count
      game, // Users current Gamestate
      staking_done,
      staking_amount,
    };
  }
}

export default UserAction;
