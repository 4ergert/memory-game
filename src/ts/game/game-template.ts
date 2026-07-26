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

      <button class="exit_button">
        <img src="../assets/icons/exit.svg" alt="exit icon">
        Exit game
      </button>
    </header>
  `;
}