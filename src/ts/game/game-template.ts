export function getGamingHeaderTemplate(): string {
  return `
  <header class="memory_game_header">
      <section class="score_board">
        <div class="blue_player">
          <img id="bluePlayerImg" src="" alt="">
          <span id="blueCodingLabel"></span>
          <span class="blue_player_score">0</span>
        </div>
        
        <div class="orange_player">
          <img id="orangePlayerImg" src="" alt="orange player label">
          <span id="orangeCodingLabel"></span>
          <span class="orange_player_score">0</span>
        </div>
      </section>

      <section class="current_player">
        Current player: <img id="currentPlayer" src="" alt="current player label">
      </section>

      <button class="exit_button" type="button">
        <img src="../assets/icons/exit.svg" alt="exit icon">
        Exit game
      </button>
    </header>
  `;
}

export function getCardTemplate(): string {
  return `
      <button class="card" type="button">
        <section class="card__inner">
          <div class="card__face"></div>
          <div class="card__face card__face--back"></div>
        </section>
      </button>
    `;
}

export function getQuitGameModalTemplate(): string {
  return `
    <dialog id="quitGameModal">
    <h6>Are you sure you want to quit <br> the game?</h6>
    <div class="modal_buttons">
      <button id="quitGameModal_backToGame_button">Back to game</button>
      <button id="quitGameModal_exitGame_button">Exit game</button>
    </div>
  </dialog>
  `;
}
