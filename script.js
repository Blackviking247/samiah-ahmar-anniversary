/* =====================================================================
   CONFIGURATION — edit everything about the site in this one block
   ===================================================================== */
const CONFIG = {
  wife: "Samiah",
  husband: "Ahmar Riaz",
  weddingDate: "",            // "YYYY-MM-DD" to show real elapsed time. Leave "" for 365 / 12 / 1
  signature: "Your Brother ❤️",
  closing: "With lots of love,",
  music: "assets/music/anniversary-soft-original.wav", // Original gentle instrumental; starts only when visitor taps 🎵

  // Letter: one paragraph per line
  letter: [
    "Dear Samiah and Ahmar,",
    "Happy First Anniversary to you both!",
    "It is hard to believe that a whole year has passed since you began this beautiful journey together.",
    "Samiah, you will always be my sister, someone whose happiness means so much to me. Seeing you begin this new chapter of life is something truly special.",
    "Ahmar, I hope your journey together continues to be filled with understanding, respect, laughter, patience, and endless happiness.",
    "Marriage isn't about having a perfect life. It's about finding happiness in imperfect moments, standing beside each other through every challenge, and choosing each other every single day.",
    "I wish you both a lifetime of beautiful memories, countless reasons to smile, and a home full of love and blessings.",
    "Keep laughing together, keep supporting each other, and never stop making little moments special."
  ],

  // Gallery: put photos in assets/images/ and set src, e.g. "assets/images/photo1.jpg". Empty src = pretty placeholder
  photos: [
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "A beautiful beginning ❤️" },
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "Samiah & Ahmar 💕" },
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "One year of memories" },
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "Together is a beautiful place" },
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "A day to remember ✨" },
    { src: "assets/pic/samiah-ahmar-wedding.jpg", caption: "To many more years ❤️" }
  ],

  // Timeline: i = icon, t = title, d = text (add your own dates & memories)
  timeline: [
    { i: "💍", t: "The beginning of forever", d: "Add the date and a memory of your special day here." },
    { i: "📸", t: "First memories together", d: "Add a favourite early memory here." },
    { i: "🌼", t: "Little moments, big happiness", d: "Add a small everyday joy here." },
    { i: "🧭", t: "Adventures and laughter", d: "Add a trip or a funny story here." },
    { i: "🌱", t: "Growing together", d: "Add something you learned together here." },
    { i: "🎂", t: "One beautiful year completed", d: "Cheers to year one, and to every year ahead!" }
  ],

  // Quiz: options are automatically Samiah / Ahmar / Both. Add or remove questions freely.
  quiz: [
    "Who is more likely to steal the blanket?", "Who takes longer to get ready?", "Who is more dramatic?",
    "Who apologizes first?", "Who is the bigger foodie?", "Who laughs at the wrong moment?",
    "Who falls asleep first during a movie?", "Who is the better surprise planner?", "Who says \"I told you so\" more often?"
  ],
  quizResults: {            // {wife} and {husband} are replaced with first names
    wife: "{wife} got the most votes, so she wins the Drama-and-Blanket Crown 👑 {husband}, you are officially the sidekick!",
    husband: "{husband} got the most votes, so he wins the Crown 👑 {wife}, the jury says you're the one who keeps him in line!",
    tie: "It's a perfect tie! You two are equally wonderful, equally funny and equally stuck with each other 💞"
  },

  wishes: [
    "May your laughter never fade.", "May your home always be filled with happiness.",
    "May every new year bring you closer.", "May you always find comfort in each other.",
    "May your journey together be filled with blessings.", "May every little moment become a sweet memory.",
    "May you always choose each other, every single day."
  ],

  boxes: [
    { label: "A Little Happiness", msg: "Fun fact: marriage is two people sharing one remote, one blanket and one mirror. You survived a whole year of it. Legends! 😄" },
    { label: "A Sweet Surprise", msg: "A good marriage is two people who keep choosing to be each other's comfort. May you always be each other's home. 💞" },
    { label: "One More Secret", msg: "One year down, and the best chapters are still unwritten. Happy Anniversary, {wife} & {husband}! 🎉" }
  ],

  catchMessage: "Every heart you caught is a wish for you both: love, laughter and a lifetime of happiness. Happy First Anniversary! ❤️"
};
/* ================== END OF CONFIGURATION ================== */

const $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const W = CONFIG.wife, H = CONFIG.husband.split(" ")[0], fx = $("#fx");
const fill = s => s.replaceAll("{wife}", W).replaceAll("{husband}", H);
const R = a => a[Math.random() * a.length | 0];
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

/* ---------- effects ---------- */
function confetti(n = 100) {
  const c = ["#ff8fab", "#ffc8a2", "#b8a1ff", "#8ecdf7", "#f6d58e", "#ff7a6b"];
  for (let i = 0; i < n; i++) {
    const p = el("i", "cf");
    p.style.cssText = `left:${Math.random() * 100}vw;background:${c[i % 6]};--x:${(Math.random() - .5) * 300}px;--r:${Math.random() * 900}deg;animation-duration:${2.5 + Math.random() * 2.5}s;animation-delay:${Math.random() * .5}s`;
    fx.append(p); setTimeout(() => p.remove(), 6000);
  }
}
function floaty(n = 16, set = ["❤️", "💖", "🌸", "✨", "💕", "🌷"]) {
  for (let i = 0; i < n; i++) {
    const s = el("span", "fy", R(set));
    s.style.cssText = `left:${Math.random() * 94}vw;font-size:${18 + Math.random() * 26}px;animation-duration:${3 + Math.random() * 3}s;animation-delay:${Math.random() * 1.2}s`;
    fx.append(s); setTimeout(() => s.remove(), 7500);
  }
}
function burst(x, y) {
  const c = R(["#ffd36e", "#ff8fab", "#8ecdf7", "#c9b6ff", "#ff7a6b"]);
  for (let i = 0; i < 18; i++) {
    const s = el("b", "sp"); s.style.cssText = `left:${x}px;top:${y}px;background:${c};color:${c};--a:${i * 20}deg`;
    fx.append(s); setTimeout(() => s.remove(), 1200);
  }
}
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2800); }

/* ---------- music (only starts when the visitor taps) ---------- */
let aud;
$("#music").onclick = e => {
  const b = e.currentTarget;
  if (!CONFIG.music) return toast("Add a song path in CONFIG.music to enable music 🎵");
  aud = aud || Object.assign(new Audio(CONFIG.music), { loop: true });
  if (aud.paused) aud.play().then(() => b.classList.add("on")).catch(() => toast("Music file not found"));
  else { aud.pause(); b.classList.remove("on"); }
};

/* ---------- 1. opening ---------- */
$("#names").innerHTML = `${W.toUpperCase()} <span class="hb">❤️</span> ${H.toUpperCase()}`;
$("#gift").onclick = e => {
  const g = e.currentTarget; g.classList.add("open"); g.disabled = true; $("#hint").hidden = true;
  confetti(150); floaty(22); setTimeout(() => $("#welcome").hidden = false, 700);
};
$("#begin").onclick = () => {
  document.body.classList.remove("locked"); $("#intro").hidden = true; $("#main").hidden = false;
  scrollTo(0, 0); floaty(10); observe();
};

/* ---------- 3. timeline ---------- */
$("#tl").innerHTML = CONFIG.timeline.map(t => `<div class="card rv" data-i="${t.i}"><h3>${t.t}</h3><p>${t.d}</p></div>`).join("");

/* ---------- 4. gallery ---------- */
const GC = [["#ffd9c4", "#ffb5c8"], ["#cfe8ff", "#d9ccff"], ["#fff0c2", "#ffcfa8"], ["#d9f2e6", "#bfe3ff"]], GE = ["💑", "🌸", "🍰", "🌅", "✈️", "🏡"];
function polaroid(p, i, tag) {
  const b = el(tag, "pol"), d = el("div", "ph", GE[i % 6]);
  b.style.setProperty("--r", ((i * 37) % 13 - 6) + "deg");
  d.style.setProperty("--g1", GC[i % 4][0]); d.style.setProperty("--g2", GC[i % 4][1]);
  if (p.src) { const im = new Image(); im.alt = p.caption; im.onload = () => d.replaceChildren(im); im.src = p.src; }
  b.append(d, el("small", "", p.caption)); return b;
}
CONFIG.photos.forEach((p, i) => {
  const b = polaroid(p, i, "button"); b.setAttribute("aria-label", "Open photo: " + p.caption);
  b.onclick = () => { $("#lb").replaceChildren(polaroid(p, i, "div")); $("#lb").hidden = false; };
  $("#pw").append(b);
});
$("#lb").onclick = () => $("#lb").hidden = true;
addEventListener("keydown", e => { if (e.key === "Escape") $("#lb").hidden = true; });

/* ---------- 5. quiz ---------- */
let qi, tally;
function quiz() { qi = 0; tally = [0, 0, 0]; step(); }
function step() {
  const b = $("#qb"), Q = CONFIG.quiz;
  if (qi >= Q.length) {
    const [w, h] = tally, r = CONFIG.quizResults;
    b.innerHTML = `<div class="card pop"><h3>🏆 The Verdict</h3><p class="big">${W}: ${w} · ${H}: ${h} · Both: ${tally[2]}</p><p>${fill(w > h ? r.wife : h > w ? r.husband : r.tie)}</p><br><button class="btn" id="qr">Play again</button></div>`;
    $("#qr").onclick = quiz; confetti(120); return;
  }
  b.innerHTML = `<div class="bar"><i style="width:${qi / Q.length * 100}%"></i></div><p>Question ${qi + 1} of ${Q.length}</p><h3>${Q[qi]}</h3><div class="opts">${[W, H, "Both of us 😄"].map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}</div>`;
  $$(".opt", b).forEach(o => o.onclick = () => { tally[o.dataset.i]++; qi++; step(); });
}
quiz();

/* ---------- 6. catch the hearts ---------- */
let sc = 0, tmr, spn, run = false;
$("#cs").onclick = () => {
  if (run) return; run = true; sc = 0; let t = 30;
  $("#sc").textContent = 0; $("#tm").textContent = t; $("#cmsg").hidden = true; $("#cs").disabled = true;
  spn = setInterval(drop, 650);
  tmr = setInterval(() => { $("#tm").textContent = --t; if (t <= 0) endGame(); }, 1000);
};
function drop() {
  const h = el("button", "h", "💖"); h.setAttribute("aria-label", "Catch heart");
  h.style.left = Math.random() * 85 + "%"; h.style.animationDuration = 2.6 + Math.random() * 2 + "s";
  h.onpointerdown = e => { e.preventDefault(); $("#sc").textContent = ++sc; h.textContent = "✨"; h.style.pointerEvents = "none"; setTimeout(() => h.remove(), 200); };
  h.onanimationend = () => h.remove(); $("#arena").append(h);
}
function endGame() {
  clearInterval(spn); clearInterval(tmr); run = false; $$(".h").forEach(h => h.remove());
  $("#cs").disabled = false; $("#cs").textContent = "PLAY AGAIN";
  const m = $("#cmsg"); m.hidden = false; m.innerHTML = `<h3>You caught ${sc} hearts! 💖</h3><p>${fill(CONFIG.catchMessage)}</p>`; confetti(120);
}

/* ---------- 7. mystery boxes ---------- */
$("#bx").innerHTML = CONFIG.boxes.map((b, i) => `<button class="mb" data-i="${i}"><span class="g">🎁</span>${b.label}</button>`).join("");
$$(".mb").forEach(b => b.onclick = () => {
  const i = +b.dataset.i, x = CONFIG.boxes[i]; b.classList.add("open"); b.disabled = true;
  $(".g", b).textContent = ["🎉", "💌", "🎆"][i % 3];
  $("#rev").prepend(el("div", "card pop", `<h3>🎁 ${x.label}</h3><p>${fill(x.msg)}</p>`));
  if (i === 1) floaty(14); else confetti(i === 2 ? 170 : 50);
  if (i === 2) { floaty(20); for (let k = 0; k < 6; k++) setTimeout(() => burst(Math.random() * innerWidth, 80 + Math.random() * innerHeight * .5), k * 250); }
});

/* ---------- 8. counter ---------- */
function counter() {
  const d = CONFIG.weddingDate ? new Date(CONFIG.weddingDate + "T00:00:00") : null; let v = [365, 12, 1];
  if (d && !isNaN(d)) {
    const n = new Date(), m = Math.max(0, (n.getFullYear() - d.getFullYear()) * 12 + n.getMonth() - d.getMonth() - (n.getDate() < d.getDate() ? 1 : 0));
    v = [Math.floor((n - d) / 864e5), m, Math.floor(m / 12)]; $("#csub").textContent = "Counting since " + d.toDateString();
  }
  $$(".tile b").forEach((b, i) => {
    const T = v[i], t0 = performance.now();
    const f = t => { const p = Math.min((t - t0) / 2200, 1); b.textContent = Math.round(T * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  });
}

/* ---------- 9. wishes ---------- */
$("#wishes").innerHTML = CONFIG.wishes.slice(0, 6).map(w => `<div class="card rv">💌 ${w}</div>`).join("");
$("#wb").onclick = () => { const r = $("#rw"); r.classList.remove("pop"); void r.offsetWidth; r.textContent = R(CONFIG.wishes); r.classList.add("pop"); floaty(6); };

/* ---------- 10. letter ---------- */
const n = CONFIG.letter.length;
$("#paper").innerHTML = CONFIG.letter.map((p, i) => `<p style="--i:${i}">${p}</p>`).join("") +
  `<p style="--i:${n}">${CONFIG.closing}</p><div class="sig" style="animation-delay:${(n + 1) * .6 + .8}s">${CONFIG.signature}</div>`;
$("#env").onclick = e => {
  e.currentTarget.classList.add("open"); e.currentTarget.disabled = true; floaty(12);
  setTimeout(() => { $("#paper").classList.add("show"); $("#letter").scrollIntoView({ behavior: "smooth" }); }, 800);
};

/* ---------- 11. finale ---------- */
$("#fn").textContent = `${W.toUpperCase()} & ${H.toUpperCase()}`;
$("#hap").innerHTML = ["Happy", "First", "Anniversary"].map((w, k) => `<span class="wd">${[...w].map((c, i) => `<span style="--i:${i + k * 5}">${c}</span>`).join("")}</span>`).join(" ");
$("#again").onclick = () => { confetti(160); floaty(20); setTimeout(() => { scrollTo(0, 0); location.reload(); }, 1200); };

/* ---------- scroll reveals & triggers ---------- */
let fw, counted = false;
function observe() {
  const a = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .15 });
  $$(".rv").forEach(x => a.observe(x));
  const o = new IntersectionObserver(es => es.forEach(e => {
    if (e.target.id === "count" && e.isIntersecting && !counted) { counted = true; counter(); }
    if (e.target.id === "final") {
      clearInterval(fw);
      if (e.isIntersecting) { confetti(110); floaty(18, ["🌸", "🌺", "💮", "❤️"]); fw = setInterval(() => burst(innerWidth * (.1 + Math.random() * .8), innerHeight * (.1 + Math.random() * .5)), 700); }
    }
  }), { threshold: .35 });
  o.observe($("#count")); o.observe($("#final"));
}
