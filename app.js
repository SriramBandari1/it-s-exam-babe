// ============================================================
//  IT'S EXAM BABE — App Logic
// ============================================================

// ── State ────────────────────────────────────────────────────
let state = {
  college: null,
  dept: null,
  sem: null,
  subject: null,
  step: "college",   // college | dept | sem | subject
  ansIndex: 0,
  ansUnit: "all"
};

// ── Init ─────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  renderStep("college");
});

// ── Navigation helpers ───────────────────────────────────────
function goHome() {
  state = { college:null, dept:null, sem:null, subject:null, step:"college" };
  document.getElementById("contentArea").style.display = "none";
  document.getElementById("hero").classList.remove("hidden");
  document.querySelector(".main-content").style.display = "";
  renderStep("college");
  updateBreadcrumb();
}

function backFromContent() {
  document.getElementById("contentArea").style.display = "none";
  document.querySelector(".main-content").style.display = "";
  state.subject = null;
  state.step = "subject";
  renderStep("subject");
  updateBreadcrumb();
}

// ── Render Step ──────────────────────────────────────────────
function renderStep(step) {
  const container = document.getElementById("stepContainer");
  container.innerHTML = "";
  state.step = step;
  updateBreadcrumb();

  if (step === "college") {
    renderCollegeStep(container);
  } else if (step === "dept") {
    renderDeptStep(container);
  } else if (step === "sem") {
    renderSemStep(container);
  } else if (step === "subject") {
    renderSubjectStep(container);
  }
}

// ── College ──────────────────────────────────────────────────
function renderCollegeStep(container) {
  const label = el("p", "step-label", "Select your college");
  const grid  = el("div", "cards-grid");

  DATA.colleges.forEach(col => {
    const card = makeCard(col.icon, col.name, col.sub, () => {
      state.college = col;
      document.getElementById("hero").classList.add("hidden");
      renderStep("dept");
    });
    grid.appendChild(card);
  });

  container.appendChild(label);
  container.appendChild(grid);
  animateIn(container);
}

// ── Department ───────────────────────────────────────────────
function renderDeptStep(container) {
  const college = state.college;
  const label   = el("p", "step-label", "Select department");
  const grid    = el("div", "cards-grid");

  college.departments.forEach(dept => {
    const card = makeCard(dept.icon, dept.name, dept.fullName, () => {
      state.dept = dept;
      renderStep("sem");
    });
    grid.appendChild(card);
  });

  container.appendChild(label);
  container.appendChild(grid);
  animateIn(container);
}

// ── Semester ─────────────────────────────────────────────────
function renderSemStep(container) {
  const sems  = state.dept.semesters;
  const label = el("p", "step-label", "Select semester");
  const grid  = el("div", "cards-grid");

  // Group by year
  const years = {};
  sems.forEach(s => {
    if (!years[s.label]) years[s.label] = [];
    years[s.label].push(s);
  });

  Object.entries(years).forEach(([year, semList]) => {
    const yearLabel = el("p", "step-label", year);
    yearLabel.style.marginTop = "18px";
    container.appendChild(yearLabel);

    const yearGrid = el("div", "cards-grid");
    semList.forEach(s => {
      const hasContent = s.subjects.length > 0;
      const card = makeCard(
        s.icon,
        s.name,
        hasContent ? `${s.subjects.length} subject${s.subjects.length>1?"s":""}` : "No content yet",
        hasContent ? () => { state.sem = s; renderStep("subject"); } : null
      );
      if (!hasContent) card.style.opacity = "0.5";
      yearGrid.appendChild(card);
    });
    container.appendChild(yearGrid);
  });

  animateIn(container);
}

// ── Subject ──────────────────────────────────────────────────
function renderSubjectStep(container) {
  const subjects = state.sem.subjects;
  const label    = el("p", "step-label", "Select subject");
  const grid     = el("div", "cards-grid");

  subjects.forEach(sub => {
    const key = `${state.dept.id}-${semNumber()}-${sub.id}`;
    const qbs  = (QUESTION_BANKS[key] || []).length;
    const card = makeCard(
      sub.icon,
      sub.name,
      `${sub.code} · ${qbs > 0 ? qbs + " questions" : "No QB yet"}`,
      () => { state.subject = sub; openSubjectContent(); }
    );
    grid.appendChild(card);
  });

  container.appendChild(label);
  container.appendChild(grid);
  animateIn(container);
}

// ── Open Subject Content ─────────────────────────────────────
function openSubjectContent() {
  document.querySelector(".main-content").style.display = "none";
  const area = document.getElementById("contentArea");
  area.style.display = "block";

  document.getElementById("contentMeta").innerHTML =
    `<strong>${state.subject.name}</strong> &nbsp;|&nbsp; ${state.college.name} → ${state.dept.name} → ${state.sem.name}`;

  updateBreadcrumb();
  switchTab("qb");
}

// ── Tab Switching ─────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(`tab-${tab}`).classList.add("active");
  document.getElementById(`panel-${tab}`).classList.add("active");

  if (tab === "qb")      renderQB();
  if (tab === "answers") renderAnswers();
  if (tab === "talent")  renderTalent();
}

// ── QB Renderer ──────────────────────────────────────────────
function renderQB() {
  const key = `${state.dept.id}-${semNumber()}-${state.subject.id}`;
  const all  = QUESTION_BANKS[key] || [];

  // Populate unit filter
  const unitSel = document.getElementById("unitFilter");
  const units   = [...new Set(all.map(q => q.unit))].sort((a,b)=>a-b);
  unitSel.innerHTML = `<option value="all">All Units</option>` +
    units.map(u => `<option value="${u}">Unit ${u}</option>`).join("");

  // Filter
  const unitVal  = unitSel.value;
  const searchVal = document.getElementById("qbSearch").value.trim().toLowerCase();

  let filtered = all;
  if (unitVal !== "all") filtered = filtered.filter(q => q.unit == unitVal);
  if (searchVal)         filtered = filtered.filter(q => q.q.toLowerCase().includes(searchVal));

  const list = document.getElementById("questionsList");
  document.getElementById("questionCount").textContent =
    `${filtered.length} question${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    list.innerHTML = `<div class="no-results"><div class="nr-icon">${all.length===0?"📂":"🔍"}</div>
      <p>${all.length===0?"No question bank uploaded yet for this subject.":"No questions match your search."}</p></div>`;
    return;
  }

  const btLabel = { 1:"Remember", 2:"Understand", 3:"Apply", 4:"Analyze", 5:"Evaluate", 6:"Create" };

  list.innerHTML = "";
  filtered.forEach((q, i) => {
    const originalIdx = all.indexOf(q);
    const card = document.createElement("div");
    card.className = "question-card fade-in";
    card.innerHTML = `
      <div class="q-number">${i+1}</div>
      <div class="q-body">
        <div class="q-text">${escHtml(q.q)}</div>
        <div class="q-meta">
          <span class="q-tag unit">Unit ${q.unit}</span>
          ${q.bt ? `<span class="q-tag bt">BT L${q.bt} · ${btLabel[q.bt]||""}</span>` : ""}
        </div>
        <button class="btn-view-ans" onclick="openAnswerForQ(${originalIdx})">
          📝 View 10-Mark Answer →
        </button>
      </div>
      <button class="q-copy" title="Copy question" onclick="copyQ(event, ${JSON.stringify(q.q)})">📋</button>`;
    list.appendChild(card);
  });
}

// ── Open Specific Answer from QB ─────────────────────────────
function openAnswerForQ(originalIdx) {
  state.ansIndex = originalIdx;
  state.ansUnit = "all";
  switchTab("answers");
  const area = document.getElementById("contentArea");
  if (area) {
    window.scrollTo({ top: area.offsetTop - 15, behavior: "smooth" });
  }
}

// ── Answers Renderer (10-Mark Dual-Column Adjacent) ─────────
function renderAnswers() {
  const key = `${state.dept.id}-${semNumber()}-${state.subject.id}`;
  const all = QUESTION_BANKS[key] || [];

  const mainCard = document.getElementById("answerMainCard");
  const sidebar = document.getElementById("answerCompanionSidebar");
  const unitSel = document.getElementById("ansUnitFilter");
  const qSel = document.getElementById("ansQSelect");

  if (!mainCard || !sidebar) return;

  if (all.length === 0) {
    mainCard.innerHTML = `<div class="no-results"><div class="nr-icon">🚧</div><p>No questions or model answers uploaded yet for this subject.</p></div>`;
    sidebar.innerHTML = "";
    return;
  }

  // Populate unit filter options
  const units = [...new Set(all.map(q => q.unit))].sort((a,b)=>a-b);
  const currentUnitVal = state.ansUnit || "all";
  unitSel.innerHTML = `<option value="all">All Units</option>` +
    units.map(u => `<option value="${u}" ${u == currentUnitVal ? "selected" : ""}>Unit ${u}</option>`).join("");

  // Filter list by selected unit
  let filtered = all;
  if (currentUnitVal !== "all") {
    filtered = all.filter(q => q.unit == currentUnitVal);
  }

  if (filtered.length === 0) {
    filtered = all;
    state.ansUnit = "all";
    unitSel.value = "all";
  }

  // Clamp state.ansIndex
  if (state.ansIndex >= filtered.length) state.ansIndex = 0;
  if (state.ansIndex < 0) state.ansIndex = filtered.length - 1;

  // Populate question select dropdown
  qSel.innerHTML = filtered.map((q, idx) => {
    const truncated = q.q.length > 55 ? q.q.substring(0, 55) + "…" : q.q;
    return `<option value="${idx}" ${idx === state.ansIndex ? "selected" : ""}>Q${idx+1}: [U${q.unit}] ${escHtml(truncated)}</option>`;
  }).join("");

  // Update nav counter
  const counterEl = document.getElementById("ansNavCounter");
  if (counterEl) {
    counterEl.textContent = `${state.ansIndex + 1} of ${filtered.length}`;
  }

  const currentQ = filtered[state.ansIndex];
  const btLabel = { 1:"Remember", 2:"Understand", 3:"Apply", 4:"Analyze", 5:"Evaluate", 6:"Create" };

  // Fetch 10-Mark Model Answer from answers.js
  const ans = typeof get10MarkAnswer === "function" ? get10MarkAnswer(key, currentQ) : {
    intro: "10-Mark introduction to " + currentQ.q,
    content: "<p>Content detailed points</p>",
    summary: "Summary and conclusion",
    tips: ["Remember the key formulas"],
    vocab: [{ term: "Term", def: "Definition" }],
    mistakes: ["Avoid common errors"]
  };

  // Render Left Column: 10-Mark Model Answer
  mainCard.innerHTML = `
    <div class="ans-meta-header">
      <span class="ans-tag marks">⭐ 10 Marks Model Answer</span>
      <span class="ans-tag unit">Unit ${currentQ.unit}</span>
      ${currentQ.bt ? `<span class="ans-tag bt">BT L${currentQ.bt} · ${btLabel[currentQ.bt]||""}</span>` : ""}
    </div>

    <h2 class="ans-question-title">${escHtml(currentQ.q)}</h2>

    <!-- Part 1: Relevant Introduction -->
    <section class="ans-section">
      <div class="ans-section-badge intro-badge">1. Introduction</div>
      <div class="ans-text">${ans.intro}</div>
    </section>

    <!-- Part 2: Core Content & Explanation with Drawing Diagram -->
    <section class="ans-section">
      <div class="ans-section-badge content-badge">2. Core Content &amp; Explanation</div>
      <div class="ans-text">${ans.content}</div>
    </section>

    <!-- Part 3: Summary and Conclusion -->
    <section class="ans-section">
      <div class="ans-section-badge summary-badge">3. Summary &amp; Conclusion</div>
      <div class="ans-text">${ans.summary}</div>
    </section>
  `;

  // Render Right Column: Adjacent Study Companion
  sidebar.innerHTML = `
    <!-- 1. Tips to Remember -->
    <div class="companion-card tips">
      <div class="companion-header">
        <span class="cp-icon">💡</span>
        <h4>Tips to Remember</h4>
      </div>
      <ul class="companion-list">
        ${(ans.tips || []).map(t => `<li>${escHtml(t)}</li>`).join("")}
      </ul>
    </div>

    <!-- 2. Subject Vocabulary -->
    <div class="companion-card vocab">
      <div class="companion-header">
        <span class="cp-icon">📖</span>
        <h4>Subject Vocabulary</h4>
      </div>
      <div>
        ${(ans.vocab || []).map(v => `
          <div class="companion-vocab-item">
            <div class="companion-vocab-term">${escHtml(v.term)}</div>
            <div class="companion-vocab-def">${escHtml(v.def)}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- 3. Mistakes to Avoid -->
    <div class="companion-card mistakes">
      <div class="companion-header">
        <span class="cp-icon">⚠️</span>
        <h4>Mistakes to Avoid</h4>
      </div>
      <ul class="companion-list">
        ${(ans.mistakes || []).map(m => `<li>${escHtml(m)}</li>`).join("")}
      </ul>
    </div>
  `;
}

// ── Answers Event Handlers ────────────────────────────────────
function onAnsUnitChange() {
  state.ansUnit = document.getElementById("ansUnitFilter").value;
  state.ansIndex = 0;
  renderAnswers();
}

function onAnsSelectChange() {
  state.ansIndex = parseInt(document.getElementById("ansQSelect").value, 10) || 0;
  renderAnswers();
}

function navAns(delta) {
  state.ansIndex += delta;
  renderAnswers();
}

function copyFullAnswer() {
  const mainCard = document.getElementById("answerMainCard");
  if (!mainCard) return;
  const text = mainCard.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Full 10-Mark Answer Copied! 📋");
  });
}

// ── Talent Renderer ──────────────────────────────────────────
function renderTalent() {
  const key  = `${state.dept.id}-${semNumber()}-${state.subject.id}`;
  const data = STUDENT_TALENT[key];
  const cont = document.getElementById("talentContent");

  if (!data) {
    cont.innerHTML = `<div class="no-results"><div class="nr-icon">🚧</div><p>Talent content coming soon for this subject.</p></div>`;
    return;
  }

  cont.innerHTML = "";

  // Quick idea card
  const ideaCard = document.createElement("div");
  ideaCard.className = "talent-section open";
  ideaCard.innerHTML = `
    <div class="talent-section-header" onclick="toggleSection(this)">
      <span class="ts-icon">💡</span>
      <h3>Quick Subject Idea</h3>
      <span class="ts-toggle">▲</span>
    </div>
    <div class="talent-section-body">
      <p style="font-size:14px;line-height:1.7;color:var(--text-mid)">${escHtml(data.quickIdea)}</p>
    </div>`;
  cont.appendChild(ideaCard);

  // Key bullets
  if (data.bullets && data.bullets.length > 0) {
    const sec = makeTalentSection("📌", "Key Points to Remember", `
      <ul class="bullet-list">${data.bullets.map(b=>`<li>${escHtml(b)}</li>`).join("")}</ul>
    `, true);
    cont.appendChild(sec);
  }

  // Vocabulary
  if (data.vocab && data.vocab.length > 0) {
    const sec = makeTalentSection("📖", "Subject Vocabulary", `
      <div class="vocab-grid">
        ${data.vocab.map(v=>`
          <div class="vocab-card">
            <div class="vocab-term">${escHtml(v.term)}</div>
            <div class="vocab-def">${escHtml(v.def)}</div>
          </div>`).join("")}
      </div>`, false);
    cont.appendChild(sec);
  }

  // Exam tips
  if (data.examTips && data.examTips.length > 0) {
    const sec = makeTalentSection("🎯", "Exam Writing Tips", `
      <ul class="bullet-list">${data.examTips.map(t=>`<li>${escHtml(t)}</li>`).join("")}</ul>
    `, false);
    cont.appendChild(sec);
  }
}

function makeTalentSection(icon, title, bodyHtml, open=false) {
  const sec = document.createElement("div");
  sec.className = "talent-section" + (open ? " open" : "");
  sec.innerHTML = `
    <div class="talent-section-header" onclick="toggleSection(this)">
      <span class="ts-icon">${icon}</span>
      <h3>${title}</h3>
      <span class="ts-toggle">▲</span>
    </div>
    <div class="talent-section-body">${bodyHtml}</div>`;
  return sec;
}

function toggleSection(header) {
  header.parentElement.classList.toggle("open");
}

// ── Breadcrumb ───────────────────────────────────────────────
function updateBreadcrumb() {
  const bc   = document.getElementById("breadcrumb");
  const crumbs = [];

  if (state.college) {
    crumbs.push({ label: state.college.name, action: () => { state.dept=null;state.sem=null;state.subject=null; showMain(); renderStep("dept"); }});
  }
  if (state.dept) {
    crumbs.push({ label: state.dept.name,    action: () => { state.sem=null;state.subject=null; showMain(); renderStep("sem"); }});
  }
  if (state.sem) {
    crumbs.push({ label: state.sem.name,     action: () => { state.subject=null; showMain(); renderStep("subject"); }});
  }
  if (state.subject) {
    crumbs.push({ label: state.subject.name, action: null });
  }

  bc.innerHTML = "";
  crumbs.forEach((c, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "bc-sep";
      sep.textContent = "›";
      bc.appendChild(sep);
    }
    const item = document.createElement("span");
    item.className = "bc-item" + (i === crumbs.length-1 ? " active" : "");
    item.textContent = c.label;
    if (c.action) item.onclick = c.action;
    bc.appendChild(item);
  });
}

function showMain() {
  document.getElementById("contentArea").style.display = "none";
  document.querySelector(".main-content").style.display = "";
  document.getElementById("hero").classList.add("hidden");
}

// ── Helpers ──────────────────────────────────────────────────
function semNumber() {
  return state.dept.semesters.indexOf(state.sem) + 1;
}

function makeCard(icon, title, sub, onClick) {
  const card = document.createElement("div");
  card.className = "sel-card";
  card.innerHTML = `
    <div class="card-icon">${icon}</div>
    <div class="card-title">${escHtml(title)}</div>
    ${sub ? `<div class="card-sub">${escHtml(sub)}</div>` : ""}
    ${onClick ? `<span class="card-arrow">›</span>` : ""}`;
  if (onClick) card.onclick = onClick;
  return card;
}

function el(tag, cls, text="") {
  const e = document.createElement(tag);
  e.className = cls;
  e.textContent = text;
  return e;
}

function animateIn(el) {
  el.classList.add("fade-in");
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

function copyQ(event, text) {
  event.stopPropagation();
  navigator.clipboard.writeText(text).then(() => showToast("Question copied! 📋"));
}

function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
