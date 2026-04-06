/* ============================================
   MARATHON CORAN — Script Global
   localStorage, badges, progression, utilitaires
   ============================================ */

const MarathonCoran = (() => {
  'use strict';

  // --- Storage Keys ---
  const STORAGE_PREFIX = 'marathon-coran-';

  // --- Palier Configuration ---
  const PALIERS = {
    1: { lessons: 8, name: 'Découverte', sourates: 'Fatiha → Kafirun' },
    2: { lessons: 10, name: 'Approfondissement', sourates: 'Kawthar → Nas' },
    3: { lessons: 0, name: 'Maîtrise', sourates: 'À venir' },
    4: { lessons: 0, name: 'Excellence', sourates: 'À venir' }
  };

  // --- Storage Helpers ---
  function getKey(palier, lesson) {
    return `${STORAGE_PREFIX}palier${palier}-lecon${lesson}`;
  }

  function getData(palier, lesson) {
    try {
      const raw = localStorage.getItem(getKey(palier, lesson));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setData(palier, lesson, data) {
    try {
      localStorage.setItem(getKey(palier, lesson), JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage non disponible');
    }
  }

  // --- Lesson Management ---
  function markCompleted(palier, lesson, score) {
    setData(palier, lesson, {
      completed: true,
      date: new Date().toISOString(),
      score: score || 0
    });
    return getPalierProgress(palier);
  }

  function isCompleted(palier, lesson) {
    const data = getData(palier, lesson);
    return data && data.completed === true;
  }

  function getLessonData(palier, lesson) {
    return getData(palier, lesson);
  }

  // --- Progression ---
  function getPalierProgress(palier) {
    const total = PALIERS[palier]?.lessons || 0;
    if (total === 0) return { completed: 0, total: 0, percentage: 0 };
    let completed = 0;
    for (let i = 1; i <= total; i++) {
      if (isCompleted(palier, i)) completed++;
    }
    return {
      completed,
      total,
      percentage: Math.round((completed / total) * 100)
    };
  }

  function getGlobalProgress() {
    let totalCompleted = 0;
    let totalLessons = 0;
    for (let p = 1; p <= 4; p++) {
      const prog = getPalierProgress(p);
      totalCompleted += prog.completed;
      totalLessons += prog.total;
    }
    return {
      completed: totalCompleted,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0
    };
  }

  // --- Badge Management ---
  function getBadgeState(palier, lesson) {
    if (isCompleted(palier, lesson)) return 'completed';
    // Check if lesson is unlocked (previous lesson completed or first lesson)
    if (lesson === 1 || isCompleted(palier, lesson - 1)) return 'active';
    return 'locked';
  }

  function updateBadge(element, state) {
    if (!element) return;
    element.className = 'badge'; // reset
    element.classList.add(`badge-${state}`);

    switch (state) {
      case 'completed':
        element.textContent = '⭐';
        element.setAttribute('aria-label', 'Leçon terminée');
        break;
      case 'active':
        element.textContent = '🌟';
        element.setAttribute('aria-label', 'Leçon en cours');
        break;
      case 'locked':
        element.textContent = '🔒';
        element.setAttribute('aria-label', 'Leçon verrouillée');
        break;
    }
  }

  // --- UI Updates ---
  function updateProgressBars() {
    document.querySelectorAll('[data-progress-palier]').forEach(bar => {
      const palier = parseInt(bar.dataset.progressPalier);
      const progress = getPalierProgress(palier);
      const fill = bar.querySelector('.progress-fill');
      if (fill) fill.style.width = `${progress.percentage}%`;
      const label = bar.querySelector('.progress-label');
      if (label) label.textContent = `${progress.completed}/${progress.total} leçons`;
    });

    document.querySelectorAll('[data-progress-global]').forEach(bar => {
      const progress = getGlobalProgress();
      const fill = bar.querySelector('.progress-fill');
      if (fill) fill.style.width = `${progress.percentage}%`;
    });
  }

  function updateLessonList(palier) {
    document.querySelectorAll('[data-lesson-status]').forEach(item => {
      const lesson = parseInt(item.dataset.lessonStatus);
      const state = getBadgeState(palier, lesson);
      const numberEl = item.querySelector('.lesson-number');
      if (numberEl) {
        numberEl.className = 'lesson-number';
        numberEl.classList.add(state);
        if (state === 'completed') {
          numberEl.textContent = '✓';
        } else {
          numberEl.textContent = lesson;
        }
      }
    });
  }

  // --- Validation Button ---
  function setupValidation(palier, lesson) {
    const btn = document.getElementById('validation-btn');
    const msgContainer = document.getElementById('validation-message');

    if (!btn) return;

    if (isCompleted(palier, lesson)) {
      const data = getLessonData(palier, lesson);
      btn.textContent = '✅ Leçon terminée !';
      btn.classList.add('validated', 'btn-success');
      btn.disabled = true;
      if (msgContainer) {
        msgContainer.className = 'validation-message success';
        msgContainer.textContent = `Bravo ! Leçon validée le ${new Date(data.date).toLocaleDateString('fr-FR')} avec un score de ${data.score} points.`;
      }
      return;
    }

    btn.addEventListener('click', () => {
      const progress = markCompleted(palier, lesson, 0);
      btn.textContent = '✅ Leçon terminée !';
      btn.classList.add('validated', 'btn-success');
      btn.disabled = true;

      if (msgContainer) {
        msgContainer.className = 'validation-message success';
        msgContainer.innerHTML = '🎉 <strong>Félicitations !</strong> Ta progression a été enregistrée.';
      }

      updateProgressBars();
    });
  }

  // --- Memory Game ---
  function createMemoryGame(containerId, pairs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // pairs = [{ id, front: emoji, back: text, isArabic: bool }, ...]
    let cards = [...pairs, ...pairs];
    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    let flippedCards = [];
    let matchedPairs = 0;
    let score = 0;
    let attempts = 0;
    let canFlip = true;

    const scoreEl = container.querySelector('[data-memory-score]');
    const attemptsEl = container.querySelector('[data-memory-attempts]');
    const restartBtn = container.querySelector('[data-memory-restart]');

    function updateScore() {
      if (scoreEl) scoreEl.textContent = matchedPairs;
      if (attemptsEl) attemptsEl.textContent = attempts;
    }

    function renderCards() {
      const grid = container.querySelector('.memory-grid');
      if (!grid) return;
      grid.innerHTML = '';

      cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.index = index;
        cardEl.dataset.id = card.id;
        cardEl.innerHTML = `
          <div class="memory-card-inner">
            <div class="memory-card-front">❓</div>
            <div class="memory-card-back ${card.isArabic ? 'ar' : ''}">${card.back}</div>
          </div>
        `;
        cardEl.addEventListener('click', () => flipCard(cardEl));
        grid.appendChild(cardEl);
      });
    }

    function flipCard(cardEl) {
      if (!canFlip) return;
      if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
      if (flippedCards.length >= 2) return;

      cardEl.classList.add('flipped');
      flippedCards.push(cardEl);

      if (flippedCards.length === 2) {
        attempts++;
        canFlip = false;

        const [card1, card2] = flippedCards;
        if (card1.dataset.id === card2.dataset.id) {
          // Match!
          matchedPairs++;
          score += 10;
          setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            flippedCards = [];
            canFlip = true;
            updateScore();

            if (matchedPairs === pairs.length) {
              // Game complete
              const msg = container.querySelector('[data-game-message]');
              if (msg) {
                msg.className = 'validation-message success';
                msg.textContent = `🎉 Bravo ! Tu as trouvé toutes les paires en ${attempts} essais ! Score : ${score} points.`;
              }
            }
          }, 500);
        } else {
          // No match
          setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            canFlip = true;
            updateScore();
          }, 1000);
        }
      }
    }

    function restart() {
      flippedCards = [];
      matchedPairs = 0;
      score = 0;
      attempts = 0;
      canFlip = true;
      // Shuffle again
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      const msg = container.querySelector('[data-game-message]');
      if (msg) {
        msg.className = '';
        msg.textContent = '';
      }
      updateScore();
      renderCards();
    }

    renderCards();
    updateScore();

    if (restartBtn) {
      restartBtn.addEventListener('click', restart);
    }
  }

  // --- Quiz Game ---
  function createQuizGame(containerId, questions) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    const scoreEl = container.querySelector('[data-quiz-score]');
    const questionEl = container.querySelector('[data-quiz-question]');
    const optionsEl = container.querySelector('[data-quiz-options]');
    const nextBtn = container.querySelector('[data-quiz-next]');
    const restartBtn = container.querySelector('[data-quiz-restart]');
    const progressEl = container.querySelector('[data-quiz-progress]');
    const msgEl = container.querySelector('[data-game-message]');

    function showQuestion() {
      if (currentQuestion >= questions.length) {
        showResults();
        return;
      }

      answered = false;
      const q = questions[currentQuestion];

      if (progressEl) {
        progressEl.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
      }

      if (questionEl) {
        questionEl.innerHTML = q.question;
      }

      if (optionsEl) {
        optionsEl.innerHTML = '';
        q.options.forEach((option, i) => {
          const btn = document.createElement('button');
          btn.className = `quiz-option ${option.isArabic ? 'ar-option' : ''}`;
          btn.textContent = option.text;
          btn.addEventListener('click', () => selectAnswer(btn, option.correct, q));
          optionsEl.appendChild(btn);
        });
      }

      if (nextBtn) nextBtn.classList.add('hidden');
    }

    function selectAnswer(btnEl, correct, question) {
      if (answered) return;
      answered = true;

      // Disable all options
      optionsEl.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
      });

      if (correct) {
        btnEl.classList.add('correct');
        score += 10;
        if (scoreEl) scoreEl.textContent = score;
      } else {
        btnEl.classList.add('incorrect');
        // Show correct answer
        optionsEl.querySelectorAll('.quiz-option').forEach(opt => {
          if (opt.textContent === question.options.find(o => o.correct)?.text) {
            opt.classList.add('correct');
          }
        });
      }

      if (nextBtn) {
        if (currentQuestion < questions.length - 1) {
          nextBtn.textContent = 'Question suivante →';
        } else {
          nextBtn.textContent = 'Voir les résultats 🏆';
        }
        nextBtn.classList.remove('hidden');
      }
    }

    function showResults() {
      if (questionEl) questionEl.textContent = '🏆 Résultats du quiz';
      if (optionsEl) optionsEl.innerHTML = '';
      if (nextBtn) nextBtn.classList.add('hidden');

      const total = questions.length * 10;
      const percent = Math.round((score / total) * 100);

      if (msgEl) {
        let emoji = '🌟';
        let message = '';
        if (percent === 100) {
          emoji = '🏆';
          message = `Parfait ! Score : ${score}/${total}. Tu maîtrises toutes les racines !`;
        } else if (percent >= 70) {
          emoji = '⭐';
          message = `Très bien ! Score : ${score}/${total}. Presque tout bon !`;
        } else if (percent >= 40) {
          emoji = '💪';
          message = `Bon effort ! Score : ${score}/${total}. Relis la leçon et réessaie !`;
        } else {
          emoji = '📚';
          message = `Score : ${score}/${total}. Pas de souci ! Relis la leçon attentivement et recommence.`;
        }
        msgEl.className = 'validation-message success';
        msgEl.textContent = `${emoji} ${message}`;
      }

      if (restartBtn) restartBtn.classList.remove('hidden');
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentQuestion++;
        showQuestion();
      });
    }

    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        if (scoreEl) scoreEl.textContent = '0';
        if (msgEl) { msgEl.className = ''; msgEl.textContent = ''; }
        restartBtn.classList.add('hidden');
        showQuestion();
      });
    }

    showQuestion();
  }

  // --- Init on Page Load ---
  function init() {
    // Update all progress bars on the page
    updateProgressBars();

    // Set up validation button if present
    const mainContent = document.querySelector('main') || document.body;
    if (mainContent.dataset.palier && mainContent.dataset.lesson) {
      const palier = parseInt(mainContent.dataset.palier);
      const lesson = parseInt(mainContent.dataset.lesson);
      setupValidation(palier, lesson);
    }
  }

  // --- Public API ---
  return {
    init,
    PALIERS,
    markCompleted,
    isCompleted,
    getLessonData,
    getPalierProgress,
    getGlobalProgress,
    getBadgeState,
    updateBadge,
    updateProgressBars,
    updateLessonList,
    setupValidation,
    createMemoryGame,
    createQuizGame
  };
})();

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  MarathonCoran.init();
});
