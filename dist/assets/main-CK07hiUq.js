var e = (e, t, n) => () => { if (n) throw n[0]; try { return e && (t = e(e = 0)), t } catch (e) { throw n = [e], e } }, t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports); (function () { let e = document.createElement(`link`).relList; if (e && e.supports && e.supports(`modulepreload`)) return; for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e); new MutationObserver(e => { for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e) }).observe(document, { childList: !0, subtree: !0 }); function t(e) { let t = {}; return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t } function n(e) { if (e.ep) return; e.ep = !0; let n = t(e); fetch(e.href, n) } })(); var n = e((() => { })); function r() {
  return `
      <div class="underline">
        <div class="underline_square"></div>
        <div class="underline_line"></div>
      </div>
  `} function i() {
  return `
    <section class="game_mode">
      <header class="game_mode_header">
        <img src="../assets/icons/palette.svg" alt="Palette Icon" class="game_mode_header_icon">
        <h3>Game themes</h3>
      </header>

      <button class="theme_button" id="code_vibes_theme" data-label="Code vibes theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Code vibes theme
      </button>
      <button class="theme_button" id="gaming_theme" data-label="Gaming theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Gaming theme
      </button>

    </section>
  `} function a() {
  return `
    <section class="choose_player">
      <header class="choose_player_header">
        <img src="../assets/icons/chess_pawn.svg" alt="Chess Pawn Icon" class="game_mode_header_icon">
        <h3>Choose player</h3>
      </header>

      <button class="choose_player_button" id="playerBlue" data-label="blue">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Blue
      </button>
      <button class="choose_player_button" id="playerOrange" data-label="orange">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Orange
      </button>
    </section>
  `} function ee() {
  return `
    <section class="board_size">
      <header class="board_size_header">
        <img src="../assets/icons/size.svg" alt="Size Icon" class="board_size_header_icon">
        <h3>Board size</h3>
      </header>

      <button class="board_size_button" id="board_4x4" data-label="4x4">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        16 cards
      </button>
      <button class="board_size_button" id="board_4x6" data-label="6x4">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        24 cards
      </button>
      <button class="board_size_button" id="board_6x6" data-label="6x6">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        36 cards
      </button>
    </section>
  `} var o = e((() => { })); function s() { let e = document.querySelector(`[custom-underline]`); e && (e.outerHTML = r()) } function c() { l(`[theme-section]`, i), l(`[choose-player-section]`, a), l(`[board-size-section]`, ee) } function l(e, t) { let n = document.querySelector(e); n && (n.outerHTML = t()) } function u() { f(`.theme_button`, p), f(`.choose_player_button`, m), f(`.board_size_button`, h), d() } function d() { document.getElementById(`startGameButton`)?.addEventListener(`click`, () => { window.location.href = `./memory-game.html` }) } function f(e, t) { let n = document.querySelectorAll(e); n.forEach(e => { e.addEventListener(`click`, () => { b(e, n), t?.(e) }) }) } function p(e) { let t = document.getElementById(`settingsFeedback`), n = document.getElementById(`selectedGameTheme`), r = x[e.id], i = _(e); t && r && (t.innerHTML = `<img src="${r}" alt="${i}">`), v(n, i), y(`themePlayerDivider`), S.theme = !0, g(), localStorage.setItem(`selectedTheme`, i) } function m(e) { let t = document.getElementById(`selectedPlayer`), n = `Player ` + _(e); v(t, n), y(`playerBoardDivider`), S.player = !0, g(), localStorage.setItem(`selectedPlayer`, n) } function h(e) { let t = document.getElementById(`selectedBoardSize`), n = _(e); v(t, n), S.boardSize = !0, g(), localStorage.setItem(`selectedBoardSize`, n) } function g() { let e = document.getElementById(`startDefaultIcon`), t = document.getElementById(`startGameButton`), n = S.theme && S.player && S.boardSize; e && (e.hidden = n), t && (t.hidden = !n) } function _(e) { return e.getAttribute(`data-label`) || `` } function v(e, t) { e && (e.textContent = t, e.style.fontWeight = `700`) } function y(e) { let t = document.getElementById(e); t && t.classList.contains(`start_game_slash`) && (t.outerHTML = r()) } function te(e) { e.querySelector(`.underline`) || e.insertAdjacentHTML(`beforeend`, r()) } function b(e, t) { t.forEach(t => { let n = t === e, r = t.querySelector(`img`); r && (r.src = n ? `../assets/icons/on.svg` : `../assets/icons/off.svg`), t.classList.toggle(`is-selected`, n), n ? te(t) : t.querySelector(`.underline`)?.remove() }) } var x, S, ne = e((() => { o(), x = { code_vibes_theme: `../assets/img/IT_theme.svg`, gaming_theme: `../assets/img/gaming_theme.svg` }, S = { theme: !1, player: !1, boardSize: !1 } })), C, w = e((() => { C = class { cardFaceImage; cardImages; playerImages; cardImageMaxSize; cardBorderRadius; quitDialogBackButtonLabel; quitDialogExitButtonLabel; winnerDialogBackButtonLabel; winnerImage; showWinnerConfetti; fontFamily; getPlayerImage(e) { return this.playerImages[e] } getCardImage(e) { return this.cardImages[e % this.cardImages.length] } } })); function T() { return Array.from({ length: 18 }, (e, t) => `../assets/img/theme/coding/${String(t + 1).padStart(2, `0`)}.svg`) } var E, re = e((() => { w(), E = class extends C { constructor() { super(), this.cardFaceImage = `../assets/img/coding-card-face.svg`, this.cardImages = T(), this.playerImages = { blue: `../assets/icons/blue-code-label.svg`, orange: `../assets/icons/orange-code-label.svg` } } } })); function ie() { return Array.from({ length: 18 }, (e, t) => `../assets/img/theme/gaming/${String(t + 1).padStart(2, `0`)}.svg`) } var D, O = e((() => { w(), D = class extends C { constructor() { super(), this.cardFaceImage = `../assets/img/gaming-card-face.svg`, this.cardImages = ie(), this.playerImages = { blue: `../assets/icons/blue-gaming-label.svg`, orange: `../assets/icons/orange-gaming-label.svg` }, this.cardImageMaxSize = 70, this.cardBorderRadius = 12, this.quitDialogBackButtonLabel = `No, back to Game`, this.quitDialogExitButtonLabel = `Yes, quit game`, this.winnerDialogBackButtonLabel = `Home`, this.winnerImage = `../assets/img/pockal-gaming-theme.svg`, this.showWinnerConfetti = !1, this.fontFamily = `Orbitron` } } })); function k() { return A[localStorage.getItem(`selectedTheme`) ?? ``] ?? A[`Code vibes theme`] } var A, j = e((() => { re(), O(), A = { "Code vibes theme": new E, "Gaming theme": new D } })); function M(e) { N(e), P(e.cardFaceImage), I(`quitGameModal_backToGame_button`, e.quitDialogBackButtonLabel ?? `Back to game`), I(`quitGameModal_exitGame_button`, e.quitDialogExitButtonLabel ?? `Exit game`), I(`backToStart`, e.winnerDialogBackButtonLabel ?? `Back to Start`), document.body.classList.toggle(`has-gaming-font`, e.fontFamily === `Orbitron`), document.body.classList.toggle(`has-coding-theme`, e.fontFamily !== `Orbitron`) } function N(e) { F(`bluePlayerImg`, e.getPlayerImage(`blue`)), F(`orangePlayerImg`, e.getPlayerImage(`orange`)), I(`blueCodingLabel`, `Blue`), I(`orangeCodingLabel`, `Orange`) } function P(e) { document.querySelectorAll(`.card__face:not(.card__face--back)`).forEach(t => { t.style.backgroundImage = `url('${e}')` }) } function F(e, t) { document.getElementById(e)?.setAttribute(`src`, t) } function I(e, t) { let n = document.getElementById(e); n && (n.textContent = t) } var L = e((() => { })); function R(e) { let t = Number(localStorage.getItem(e) ?? `0`); return Number.isFinite(t) ? t : 0 } function z(e, t) { let n = document.querySelector(e); n && (n.textContent = String(t)) } var B, V = e((() => { B = class { update(e) { this.render(e), this.save(e) } reset() { this.update({ blueScore: 0, orangeScore: 0 }) } getScores() { return { blueScore: R(`blueScore`), orangeScore: R(`orangeScore`) } } render({ blueScore: e, orangeScore: t }) { z(`.blue_player_score`, e), z(`.orange_player_score`, t) } save({ blueScore: e, orangeScore: t }) { localStorage.setItem(`blueScore`, String(e)), localStorage.setItem(`orangeScore`, String(t)) } } })); function H() {
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
  `} function U() {
  return `
      <button class="card" type="button">
        <section class="card__inner">
          <div class="card__face"></div>
          <div class="card__face card__face--back"></div>
        </section>
      </button>
    `} function W() {
  return `
      <section class="memory_game_board">
    <section id="field">
      <!-- Cards rendered here -->
    </section>
  </section>
  `} function G() {
  return `
    <dialog id="quitGameModal">
    <h6>Are you sure you want to quit <br> the game?</h6>
    <div class="modal_buttons">
      <button id="quitGameModal_backToGame_button">Back to game</button>
      <button id="quitGameModal_exitGame_button">Exit game</button>
    </div>
  </dialog>
  `} var K = e((() => { })); function q(e) { let t = [...e]; for (let e = t.length - 1; e > 0; --e) { let n = Math.floor(Math.random() * (e + 1));[t[e], t[n]] = [t[n], t[e]] } return t } function J(e) { let t = Array.from(document.querySelectorAll(`.card__face--back`)); if (t.length === 0) return; let n = Math.max(1, Math.floor(e / 2)), r = k(), i = Array.from({ length: n }, (e, t) => r.getCardImage(t)), a = q([...i, ...i]).slice(0, e); t.forEach((e, t) => { let n = a[t]; e.setAttribute(`data-card-image`, n ?? ``), e.style.backgroundImage = r.cardImageMaxSize || !n ? `none` : `url('${n}')`, Y(e, n, r.cardImageMaxSize) }) } function Y(e, t, n) { if (e.querySelector(`.card__image`)?.remove(), !t || !n) return; let r = document.createElement(`img`); r.className = `card__image`, r.src = t, r.alt = ``, r.style.maxWidth = `${n}px`, r.style.maxHeight = `${n}px`, e.append(r) } function ae() { let e = document.querySelector(`[header-section]`); e && (e.outerHTML = H()) } function oe() { let e = document.getElementById(`field`); if (!e) return; let [t, n] = (localStorage.getItem(`selectedBoardSize`) ?? `4x4`).toLowerCase().replace(/\s+/g, ``).split(`x`).map(e => Number(e)), r = Number.isInteger(n) && Number.isInteger(t), i = r ? n * t : 16, a = r ? t : 4; e.style.gridTemplateColumns = `repeat(${a}, 120px)`, e.style.gap = i === 36 ? `6px` : ``, e.innerHTML = Array.from({ length: i }, U).join(``), se(k().cardBorderRadius), J(i) } function se(e) { e && document.querySelectorAll(`.card__face`).forEach(t => t.style.borderRadius = `${e}px`) } function ce() { let e = document.querySelector(`[game-section]`); e && (e.outerHTML = W()) } function le() { let e = document.querySelector(`[quitGameModal-section]`); e && (e.outerHTML = G()) } var ue = e((() => { K(), j() })), X, de = e((() => { X = class { element; image; flipped = !1; matched = !1; constructor(e, t) { this.element = e, this.image = t } flip() { this.flipped = !0, this.element.classList.add(`is-flipped`) } reset() { this.flipped = !1, this.element.classList.remove(`is-flipped`) } match() { this.matched = !0, this.element.classList.add(`is-matched`) } } })); function fe() { return (localStorage.getItem(`selectedPlayer`) ?? `Blue player`).startsWith(`Orange`) ? `orange` : `blue` } function pe(e) { let t = document.getElementById(`field`); t && new Z(t, e).start() } var Z, me = e((() => { de(), V(), Z = class { field; theme; cards = new WeakMap; scoreBoard = new B; selectedCards = []; isComparing = !1; blueScore = 0; orangeScore = 0; currentPlayer; constructor(e, t) { this.field = e, this.theme = t, this.currentPlayer = fe() } start() { this.resetScores(), this.updateCurrentPlayer(), this.field.addEventListener(`click`, this.handleCardClick) } handleCardClick = e => { let t = e.target.closest(`.card`); if (!t) return; let n = this.getCard(t); n.matched || n.flipped || this.isComparing || this.selectCard(n) }; selectCard(e) { e.flip(), this.selectedCards.push(e), !(this.selectedCards.length < 2) && (this.isComparing = !0, this.compareSelectedCards()) } compareSelectedCards() { let [e, t] = this.selectedCards, n = e.image === t.image; window.setTimeout(n ? this.handleMatch : this.handleMiss, n ? 400 : 800) } handleMatch = () => { this.selectedCards.forEach(e => e.match()), this.addPoint(), this.finishTurn(), this.isComplete() && (window.location.href = `./game-over-page.html`) }; handleMiss = () => { this.selectedCards.forEach(e => e.reset()), this.currentPlayer = this.currentPlayer === `blue` ? `orange` : `blue`, this.finishTurn() }; finishTurn() { this.selectedCards = [], this.isComparing = !1, this.updateCurrentPlayer() } getCard(e) { let t = this.cards.get(e); if (t) return t; let n = new X(e, e.querySelector(`.card__face--back`)?.getAttribute(`data-card-image`) ?? null); return this.cards.set(e, n), n } addPoint() { this.currentPlayer === `blue` ? this.blueScore += 1 : this.orangeScore += 1, this.updateScores() } resetScores() { this.blueScore = 0, this.orangeScore = 0, this.scoreBoard.reset() } updateScores() { this.scoreBoard.update({ blueScore: this.blueScore, orangeScore: this.orangeScore }) } updateCurrentPlayer() { document.getElementById(`currentPlayer`)?.setAttribute(`src`, this.theme.playerImages[this.currentPlayer]) } isComplete() { return this.field.querySelectorAll(`.card`).length === this.field.querySelectorAll(`.card.is-matched`).length } } })); function he(e) { let t = ge(); t && (Q(e, t), xe(t.dialog), Se()) } function ge() { let e = document.getElementById(`winnerName`), t = document.getElementById(`winnerFeedbackTitle`), n = document.getElementById(`winnerImg`), r = document.getElementById(`confetti`), i = document.getElementById(`winnerFeedback`); return !e || !t || !n || !r || !i ? null : { winnerName: e, title: t, image: n, confetti: r, dialog: i } } function Q(e, t) { if (e.blueScore === e.orangeScore) return be(t); _e(e.blueScore > e.orangeScore, t) } function _e(e, t) { let n = e ? ve() : ye(); t.title.textContent = `The winner is`, t.winnerName.textContent = n.name, t.winnerName.style.color = n.color, t.image.src = k().winnerImage ?? n.image, t.confetti.hidden = k().showWinnerConfetti === !1, t.dialog.classList.remove(`is-draw`) } function ve() { return { name: `Blue Player`, color: `#2bb1ff`, image: `../assets/img/player-blue.svg` } } function ye() { return { name: `Orange Player`, color: `#f58e39`, image: `../assets/img/player-orange.svg` } } function be(e) { e.title.textContent = `It's a`, e.winnerName.textContent = `Draw`, e.winnerName.style.color = `#4dd5bc`, e.image.src = `../assets/img/draw.svg`, e.confetti.hidden = !0, e.dialog.classList.add(`is-draw`) } function xe(e) { let t = document.querySelector(`.game-over`); t && window.setTimeout(() => { t.remove(), e.showModal(), e.classList.add(`is-visible`) }, 3e3) } function Se() { document.getElementById(`backToStart`)?.addEventListener(`click`, () => { window.location.href = `./settings-page.html` }) } var Ce = e((() => { j() })); function we(e) { e.open || e.showModal() } function $(e) { e.open && e.close() } function Te() { let e = document.querySelector(`.exit_button`), t = document.getElementById(`quitGameModal`), n = document.getElementById(`quitGameModal_backToGame_button`), r = document.getElementById(`quitGameModal_exitGame_button`); !e || !t || !n || !r || (e.addEventListener(`click`, () => we(t)), n.addEventListener(`click`, () => $(t)), r.addEventListener(`click`, () => { $(t), window.location.href = `./settings-page.html` }), Ee(t)) } function Ee(e) { e.addEventListener(`click`, t => { t.target === e && $(e) }) } var De = e((() => { Ce() })), Oe = t((() => { if (n(), ne(), j(), L(), V(), ue(), me(), De(), document.body.classList.contains(`settings`) && (s(), c(), u()), document.body.classList.contains(`memory_game_body`)) { ae(), ce(), oe(), le(), Te(); let e = k(); M(e), pe(e) } if (document.body.classList.contains(`game-over-page`)) { let e = new B, { blueScore: t, orangeScore: n } = e.getScores(); e.render({ blueScore: t, orangeScore: n }), he({ blueScore: t, orangeScore: n }), M(k()) } })); export { Oe as t };