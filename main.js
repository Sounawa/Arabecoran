// ============================================
// MARATHON CORAN - Main JavaScript
// Shared functions for all paliers
// ============================================

// --- LocalStorage helpers ---
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('marathon-coran-progress') || '{}');
  } catch { return {}; }
}

function saveProgress(lessonId) {
  const progress = getProgress();
  progress[lessonId] = { completed: true, date: new Date().toISOString() };
  localStorage.setItem('marathon-coran-progress', JSON.stringify(progress));
}

function isCompleted(lessonId) {
  const progress = getProgress();
  return progress[lessonId]?.completed || false;
}

// --- Render lesson grid (palier index page) ---
function renderLessonGrid(lessons, palierName) {
  const container = document.getElementById('lessons-container');
  if (!container) return;

  container.innerHTML = lessons.map((lesson, idx) => {
    const completed = isCompleted(lesson.id);
    const roots = lesson.words.map((w, i) =>
      `<span class="root-tag root-tag-${(w.rootColor || (i % 6) + 1)}">${w.root}</span>`
    ).join('');

    return `
      <a href="lesson.html?id=${lesson.id}" class="lesson-card" style="animation-delay: ${idx * 0.02}s">
        <div class="lesson-header">
          <span class="lesson-id">${lesson.id}</span>
          <span class="lesson-xp">⭐ ${lesson.xp} XP</span>
        </div>
        <h3>${completed ? '✅ ' : ''}${lesson.title}</h3>
        <p class="lesson-subtitle">${lesson.subtitle}</p>
        <div class="lesson-meta">
          <span>⏱ ${lesson.duration}</span>
          <span>📚 Sourate ${lesson.surah}</span>
        </div>
        <div class="lesson-words-preview">${roots}</div>
      </a>
    `;
  }).join('');
}

// --- Render individual lesson page ---
function renderLessonPage() {
  const page = document.getElementById('lesson-page');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get('id');

  // Determine which palier data to use based on current path
  let lessons = [];
  let palierName = '';
  const path = window.location.pathname;
  if (path.includes('palier4')) {
    lessons = typeof PALIER4_LESSONS !== 'undefined' ? PALIER4_LESSONS : [];
    palierName = 'Palier 4';
  } else if (path.includes('palier5')) {
    lessons = typeof PALIER5_LESSONS !== 'undefined' ? PALIER5_LESSONS : [];
    palierName = 'Palier 5';
  } else if (path.includes('palier3')) {
    lessons = typeof PALIER3_LESSONS !== 'undefined' ? PALIER3_LESSONS : [];
    palierName = 'Palier 3';
  } else if (path.includes('palier2')) {
    lessons = typeof PALIER2_LESSONS !== 'undefined' ? PALIER2_LESSONS : [];
    palierName = 'Palier 2';
  } else if (path.includes('palier1')) {
    lessons = typeof PALIER1_LESSONS !== 'undefined' ? PALIER1_LESSONS : [];
    palierName = 'Palier 1';
  }

  const idx = lessons.findIndex(l => l.id === lessonId);
  if (idx === -1) {
    page.innerHTML = '<div class="hero"><h1>❌ Leçon non trouvée</h1><p>Vérifie le lien de la leçon.</p><a href="index.html" class="nav-btn prev">← Retour aux leçons</a></div>';
    return;
  }

  const lesson = lessons[idx];
  const prevLesson = idx > 0 ? lessons[idx - 1] : null;
  const nextLesson = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  // Save progress
  saveProgress(lesson.id);

  document.title = `${lesson.title} — ${palierName} — Marathon Coran`;

  page.innerHTML = `
    <div class="lesson-top-bar">
      <a href="index.html" class="back-link">← Retour aux leçons</a>
      <div class="lesson-progress-info">
        <span>📍 ${palierName}</span>
        <span>📚 Sourate ${lesson.surah} — ${lesson.surahName}</span>
        <span>⏱ ${lesson.duration}</span>
        <span>⭐ ${lesson.xp} XP</span>
      </div>
    </div>

    <div class="lesson-hero">
      <h1>${lesson.title}</h1>
      <p class="lesson-desc">${lesson.subtitle}</p>
    </div>

    <!-- Verses Section -->
    <section class="verses-section">
      <h2 class="section-title">📜 Versets du Coran</h2>
      ${lesson.verses.map(v => `
        <div class="verse-card">
          <div class="verse-header">
            <span class="verse-number">${v.number}</span>
            <span style="font-size:0.8rem;color:var(--text-light)">Sourate ${lesson.surah}, verset ${v.number}</span>
          </div>
          <div class="arabic-text">${v.arabic}</div>
          <div class="french-text">${v.french}</div>
        </div>
      `).join('')}
    </section>

    <!-- Words Section -->
    <section class="words-section">
      <h2 class="section-title">🔍 Mots et Racines Arabes</h2>
      ${lesson.words.map(w => `
        <div class="word-card" data-root-color="${w.rootColor}">
          <div class="word-main">
            <span class="word-arabic">${w.word}</span>
            <span class="word-translit">${w.translit}</span>
            <span class="word-meaning">${w.meaning}</span>
            <span class="word-root word-root-${w.rootColor}">🌿 ${w.root} = ${w.rootMeaning}</span>
          </div>
          <div class="word-funfact">
            <div class="funfact-title">${w.emoji} ${w.funFactTitle}</div>
            <div>${w.funFact}</div>
          </div>
          ${w.relatedText ? `<div class="word-related">🔗 ${w.relatedText}</div>` : ''}
        </div>
      `).join('')}
    </section>

    <!-- Quiz Section -->
    <section class="quiz-section">
      <h2 class="section-title">🧠 Quiz</h2>
      ${lesson.quiz.map((q, qi) => `
        <div class="quiz-question" data-question="${qi}" data-correct="${q.correct}">
          <div class="question-text">${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, oi) => `
              <button class="quiz-option" data-option="${oi}" onclick="handleQuizAnswer(this, ${qi}, ${oi}, ${q.correct})">
                <span class="option-letter">${'ABCD'[oi]}</span> ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>

    <!-- Completion Section -->
    <section class="completion-section">
      <div class="completion-emoji">🎉</div>
      <div class="completion-text">${lesson.completionText}</div>
    </section>

    <!-- Navigation -->
    <div class="lesson-nav">
      ${prevLesson ? `<a href="lesson.html?id=${prevLesson.id}" class="nav-btn prev">← ${prevLesson.shortTitle || prevLesson.title}</a>` : '<span></span>'}
      ${nextLesson ? `<a href="lesson.html?id=${nextLesson.id}" class="nav-btn next">${nextLesson.shortTitle || nextLesson.title} →</a>` : '<a href="index.html" class="nav-btn prev">🏠 Retour au sommaire</a>'}
    </div>
  `;

  window.scrollTo(0, 0);
}

// --- Quiz answer handler ---
function handleQuizAnswer(btn, questionIdx, optionIdx, correctIdx) {
  const questionEl = btn.closest('.quiz-question');
  const buttons = questionEl.querySelectorAll('.quiz-option');

  // Prevent multiple answers
  if (questionEl.dataset.answered) return;
  questionEl.dataset.answered = 'true';

  if (optionIdx === correctIdx) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    buttons[correctIdx].classList.add('correct');
  }
}
