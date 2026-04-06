// Palier 5 - Marathon Coran
// Sourates 25-35 - 66 Leçons
// Contenu éducatif pour enfants (7-12 ans)

const PALIER5_LESSONS = [
  {
    "id": "25-01",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "La révélation du Coran et les signes d'Allah",
    "shortTitle": "Al-Furqan (1-16)",
    "subtitle": "Découvrons le début de la sourate Al-Furqan, le Livre qui sépare le bien du mal, comme une balance parfaite !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا",
        "french": "Qu'on exalte la Bénédiction de Celui qui a fait descendre le Livre de Discernement sur Son serviteur, afin qu'il soit un avertisseur à l'univers."
      },
      {
        "number": 2,
        "arabic": "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَلَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُنْ لَهُ شَرِيكٌ فِي الْمُلْكِ وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
        "french": "Celui à qui appartient la royauté des cieux et de la terre, qui ne S'est point attribué d'enfant, qui n'a point d'associé en Sa royauté et qui a créé toute chose en lui donnant ses justes proportions."
      },
      {
        "number": 3,
        "arabic": "وَاتَّخَذُوا مِنْ دُونِهِ آلِهَةً لَّا يَخْلُقُونَ شَيْئًا وَهُمْ يُخْلَقُونَ وَلَا يَمْلِكُونَ لِأَنْفُسِهِمْ ضَرًّا وَلَا نَفْعًا وَلَا يَمْلِكُونَ مَوْتًا وَلَا حَيَاةً وَلَا نُشُورًا",
        "french": "Mais ils ont adopté en dehors de Lui des divinités qui, étant elles-mêmes créées, ne créent rien, et qui ne possèdent la faculté de faire ni le mal ni le bien pour elles-mêmes, et qui ne sont maîtresses ni de la mort, ni de la vie, ni de la résurrection."
      },
      {
        "number": 4,
        "arabic": "وَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا إِفْكٌ افْتَرَاهُ وَأَعَانَهُ عَلَيْهِ قَوْمٌ آخَرُونَ ۖ فَقَدْ جَاءُوا ظُلْمًا وَزُورًا",
        "french": "Les mécréants disent : « Tout ceci n'est qu'un mensonge qu'il a inventé, et où d'autres gens l'ont aidé ». Or, ils commettent là une injustice et un mensonge."
      },
      {
        "number": 5,
        "arabic": "وَقَالُوا أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا فَهِيَ تُمْلَىٰ عَلَيْهِ بُكْرَةً وَأَصِيلًا",
        "french": "Et ils disent : « Ce sont des contes d'anciens qu'il se fait écrire ! On les lui dicte matin et soir ! »"
      },
      {
        "number": 6,
        "arabic": "قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ إِنَّهُ كَانَ غَفُورًا رَّحِيمًا",
        "french": "Dis : « L'a fait descendre Celui qui connaît les secrets dans les cieux et la terre. Et Il est Pardonneur et Miséricordieux. »"
      },
      {
        "number": 7,
        "arabic": "وَقَالُوا مَالِ هَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ وَيَمْشِي فِي الْأَسْوَاقِ ۙ لَوْلَا أُنزِلَ إِلَيْهِ مَلَكٌ فَيَكُونَ مَعَهُ نَذِيرًا",
        "french": "Et ils disent : « Qu'est-ce donc que ce Messager qui mange de la nourriture et circule dans les marchés ? Que n'a-t-on fait descendre vers lui un Ange qui eût été avertisseur en sa compagnie ? »"
      },
      {
        "number": 8,
        "arabic": "أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا ۚ وَقَالَ الظَّالِمُونَ إِنْ تَتَّبِعُونَ إِلَّا رَجُلًا مَّسْحُورًا",
        "french": "Ou que ne lui a-t-on lancé un trésor ? Ou que n'a-t-il un jardin à lui, dont il pourrait manger ? » Les injustes disent : « Vous ne suivez qu'un homme ensorcelé. »"
      },
      {
        "number": 9,
        "arabic": "انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ فَضَلُّوا فَلَا يَسْتَطِيعُونَ سَبِيلًا",
        "french": "Vois à quoi ils te comparent ! Ils se sont égarés. Ils ne pourront trouver aucun chemin."
      },
      {
        "number": 10,
        "arabic": "تَبَارَكَ الَّذِي إِنْ شَاءَ جَعَلَ لَكَ خَيْرًا مِّنْ ذَٰلِكَ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ وَيَجْعَلْ لَكَ قُصُورًا",
        "french": "Béni soit Celui qui, s'Il le veut, t'accordera bien mieux que cela : des Jardins sous lesquels coulent les ruisseaux ; et Il t'assignera des châteaux."
      },
      {
        "number": 11,
        "arabic": "بَلْ كَذَّبُوا بِالسَّاعَةِ ۖ وَأَعْتَدْنَا لِمَنْ كَذَّبَ بِالسَّاعَةِ سَعِيرًا",
        "french": "Mais ils ont plutôt qualifié l'Heure de mensonge. Nous avons cependant préparé, pour quiconque qualifie l'Heure de mensonge, une Flamme brûlante."
      },
      {
        "number": 12,
        "arabic": "إِذَا رَأَتْهُمْ مِنْ مَكَانٍ بَعِيدٍ سَمِعُوا لَهَا تَغَيُّظًا وَزَفِيرًا",
        "french": "Lorsque de loin elle les voit, ils entendront sa fureur et ses pétillements."
      },
      {
        "number": 13,
        "arabic": "وَإِذَا أُلْقُوا مِنْهَا مَكَانًا ضَيِّقًا مُقَرَّنِينَ دَعَوْا هُنَالِكَ ثُبُورًا",
        "french": "Et quand on les y aura jetés, dans un étroit réduit, les mains liées derrière le cou, ils souhaiteront alors leur destruction complète."
      },
      {
        "number": 14,
        "arabic": "لَا تَدْعُوا الْيَوْمَ ثُبُورًا وَاحِدًا وَادْعُوا ثُبُورًا كَثِيرًا",
        "french": "« Aujourd'hui, ne souhaitez pas la destruction une seule fois, mais souhaitez-en plusieurs. »"
      },
      {
        "number": 15,
        "arabic": "قُلْ أَذَٰلِكَ خَيْرٌ أَمْ جَنَّةُ الْخُلْدِ الَّتِي وُعِدَ الْمُتَّقُونَ ۚ كَانَتْ لَهُمْ جَزَاءً وَمَصِيرًا",
        "french": "Dis : « Est-ce mieux ceci ? ou bien le Paradis éternel qui a été promis aux pieux, comme récompense et destination dernière ? »"
      },
      {
        "number": 16,
        "arabic": "لَهُمْ فِيهَا مَا يَشَاءُونَ خَالِدِينَ ۚ كَانَ عَلَىٰ رَبِّكَ وَعْدًا مَسْئُولًا",
        "french": "Ils auront là tout ce qu'ils désireront et une demeure éternelle. C'est une promesse incombant à ton Seigneur."
      }
    ],
    "words": [
      {
        "word": "الْفُرْقَانَ",
        "translit": "al-furqān",
        "meaning": "le Discernement",
        "root": "ف - ر - ق",
        "rootMeaning": "séparer",
        "rootColor": 1,
        "emoji": "⚖️",
        "funFactTitle": "La racine ف - ر - ق : séparer",
        "funFact": "Imagine que tu as une balance magique qui trie les bonnes actions d'un côté et les mauvaises de l'autre ! C'est exactement ce que veut dire <em>Al-Furqan</em> : le Livre qui <strong>sépare</strong> la vérité du mensonge, comme un filtre qui ne laisse passer que le bien. Le mot <strong>فَارِق</strong> (différent) vient de la même racine, tout comme <strong>فُرْقَة</strong> (séparation). ⚖️",
        "relatedText": "On retrouve cette racine dans <span class='arabic-inline'>فَارِقُوا</span> (séparez-vous !) et <span class='arabic-inline'>يَفْرُقُ</span> (il sépare), toujours avec l'idée de faire la différence entre deux choses.",
        "related": "<span class='arabic-inline'>فَارِقُوا الْمُشْرِكِينَ</span> — Séparez-vous des associateurs"
      },
      {
        "word": "عَبْدِهِ",
        "translit": "ʿabdihi",
        "meaning": "Son serviteur",
        "root": "ع - ب - د",
        "rootMeaning": "adorer / servir",
        "rootColor": 2,
        "emoji": "🤲",
        "funFactTitle": "La racine ع - ب - د : adorer / servir",
        "funFact": "Un <em>ʿabd</em> (serviteur), ce n'est pas comme un employé ! C'est quelqu'un qui choisit de toute son cœur d'obéir à Allah, comme un enfant qui aime aider ses parents. Tous les prophètes sont appelés <strong>ʿabd</strong> parce qu'ils sont les meilleurs serviteurs d'Allah. Le nom propre <strong>ʿAbdullāh</strong> signifie « serviteur d'Allah » ! 🤲",
        "relatedText": "Cette racine donne des mots comme <span class='arabic-inline'>عِبَادَة</span> (l'adoration) et <span class='arabic-inline'>عَابِدُونَ</span> (ceux qui adorent), que l'on retrouve dans de nombreuses sourates.",
        "related": "<span class='arabic-inline'>يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا</span> — Ô Mes serviteurs qui avez commis des excès"
      },
      {
        "word": "خَلَقَ",
        "translit": "khalaqa",
        "meaning": "Il a créé",
        "root": "خ - ل - ق",
        "rootMeaning": "créer",
        "rootColor": 3,
        "emoji": "🎨",
        "funFactTitle": "La racine خ - ل - ق : créer",
        "funFact": "Quand Allah <em>khalaqa</em> (crée), c'est comme le plus grand artiste de l'univers ! Il crée tout à partir de rien : les étoiles, les montagnes, les océans… et même toi ! Le mot <strong>khalīqa</strong> signifie « créature » et <strong>khalq</strong> signifie « la création ». Chaque fois que tu vois un beau paysage, dis : « Māshā'Allah, quelle belle création ! » 🎨",
        "relatedText": "On trouve aussi <span class='arabic-inline'>الْخَالِقِينَ</span> (les Créateurs) en référence à Allah, et <span class='arabic-inline'>خَلْقِي</span> (Ma création) dans le Coran.",
        "related": "<span class='arabic-inline'>هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ</span> — C'est Allah le Créateur, le Producteur"
      },
      {
        "word": "مُلْكُ",
        "translit": "mulku",
        "meaning": "la royauté",
        "root": "م - ل - ك",
        "rootMeaning": "posséder / régner",
        "rootColor": 4,
        "emoji": "👑",
        "funFactTitle": "La racine م - ل - ك : posséder / régner",
        "funFact": "Le mot <em>mulk</em> désigne le pouvoir royal, comme quand un roi porte sa couronne ! Mais le vrai <strong>Roi de tous les rois</strong>, c'est Allah. On utilise cette racine pour dire qu'Il possède tout l'univers. Le mot <strong>malak</strong> (ange) vient aussi de cette racine : les anges sont comme les « messagers royaux » d'Allah ! 👑",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>مَلَكُوتَ</span> (la royauté) et <span class='arabic-inline'>مَلِيكٍ</span> (le Souverain), attributs divins dans le Coran.",
        "related": "<span class='arabic-inline'>لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ</span> — À Lui la royauté et à Lui la louange"
      },
      {
        "word": "نَزَّلَ",
        "translit": "nazzala",
        "meaning": "Il a fait descendre",
        "root": "ن - ز - ل",
        "rootMeaning": "descendre",
        "rootColor": 5,
        "emoji": "⬇️",
        "funFactTitle": "La racine ن - ز - ل : descendre",
        "funFact": "Quand Allah <em>nazzala</em> (fait descendre) le Coran, c'est comme une pluie de lumière qui vient du ciel ! La forme redoublée (shadda) montre que c'est fait <strong>graduellement</strong>, verset par verset, pas tout d'un coup. Le mot <strong>nuzūl</strong> signifie « descente » et <strong>munazzal</strong> signifie « ce qui est fait descendre ». Chaque verset descend comme une goutte de pluie précieuse ! ⬇️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>أَنْزَلْنَا</span> (Nous avons fait descendre) et <span class='arabic-inline'>نُزُلًا</span> (hospitalité), chaque fois lié à ce qui vient d'en haut.",
        "related": "<span class='arabic-inline'>وَأَنْزَلَ اللَّهُ عَلَيْكَ الْكِتَابَ</span> — Et Allah a fait descendre sur toi le Livre"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class='arabic-inline'>الْفُرْقَانَ</span> (al-furqān) ?",
        "options": [
          "la prière du matin",
          "le Discernement",
          "le jeûne",
          "la mosquée"
        ],
        "correct": 1
      },
      {
        "question": "Quelle est la racine du mot <span class='arabic-inline'>خَلَقَ</span> (khalaqa) ?",
        "options": [
          "ف - ر - ق",
          "ع - ب - د",
          "م - ل - ك",
          "خ - ل - ق"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie la racine م - ل - ك ?",
        "options": [
          "adorer",
          "créer",
          "posséder / régner",
          "descendre"
        ],
        "correct": 2
      },
      {
        "question": "Comment s'appelle la sourate 25 ?",
        "options": [
          "Al-Furqan",
          "Ash-Shu'ara",
          "An-Naml",
          "Al-Qasas"
        ],
        "correct": 0
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 25-01 ! Tu as découvert les racines <strong>ف - ر - ق, ع - ب - د, خ - ل - ق, م - ل - ك, ن - ز - ل</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "25-02",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "Les faux dieux et le Jour du Jugement",
    "shortTitle": "Al-Furqan (17-33)",
    "subtitle": "Allah rassemble les gens et les faux idoles pour le grand jugement. Qui a vraiment le pouvoir ?",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 17,
        "arabic": "وَيَوْمَ يَحْشُرُهُمْ وَمَا يَعْبُدُونَ مِنْ دُونِ اللَّهِ فَيَقُولُ أَأَنْتُمْ أَضْلَلْتُمْ عِبَادِي هَٰؤُلَاءِ أَمْ هُمْ ضَلُّوا السَّبِيلَ",
        "french": "Et le jour où Il les rassemblera, eux et ceux qu'ils adoraient en dehors d'Allah, Il dira : « Est-ce vous qui avez égaré Mes serviteurs que voici, ou ont-ils eux-mêmes perdu le sentier ? »"
      },
      {
        "number": 18,
        "arabic": "قَالُوا سُبْحَانَكَ مَا كَانَ يَنْبَغِي لَنَا أَنْ نَتَّخِذَ مِنْ دُونِكَ مِنْ أَوْلِيَاءَ وَلَٰكِنْ مَتَّعْتَهُمْ وَآبَاءَهُمْ حَتَّىٰ نَسُوا الذِّكْرَ وَكَانُوا قَوْمًا بُورًا",
        "french": "Ils diront : « Gloire à Toi ! Il ne nous convenait nullement de prendre en dehors de Toi des patrons protecteurs mais Tu les as comblés de jouissance ainsi que leurs ancêtres au point qu'ils en ont oublié le Coran. Et ils ont été des gens perdus. »"
      },
      {
        "number": 19,
        "arabic": "فَقَدْ كَذَّبُوكُمْ بِمَا تَقُولُونَ فَمَا تَسْتَطِيعُونَ صَرْفًا وَلَا نَصْرًا ۚ وَمَنْ يَظْلِمْ مِنْكُمْ نُذِقْهُ عَذَابًا كَبِيرًا",
        "french": "« Ils vous ont démentis en ce que vous dites. Il n'y aura pour vous ni échappatoire ni secours. Et quiconque des vôtres est injuste, Nous lui ferons goûter un grand châtiment. »"
      },
      {
        "number": 20,
        "arabic": "وَمَا أَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِينَ إِلَّا إِنَّهُمْ لَيَأْكُلُونَ الطَّعَامَ وَيَمْشُونَ فِي الْأَسْوَاقِ ۗ وَجَعَلْنَا بَعْضَكُمْ لِبَعْضٍ فِتْنَةً أَتَصْبِرُونَ ۗ وَكَانَ رَبُّكَ بَصِيرًا",
        "french": "Et Nous n'avons envoyé avant toi que des messagers qui mangeaient de la nourriture et circulaient dans les marchés. Et Nous avons fait de certains d'entre vous une épreuve pour les autres — endurerez-vous avec constance ? — Et ton Seigneur demeure Clairvoyant."
      },
      {
        "number": 21,
        "arabic": "وَقَالَ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا لَوْلَا أُنزِلَ عَلَيْنَا الْمَلَائِكَةُ أَوْ نَرَىٰ رَبَّنَا ۗ لَقَدِ اسْتَكْبَرُوا فِي أَنْفُسِهِمْ وَعَتَوْا عُتُوًّا كَبِيرًا",
        "french": "Et ceux qui n'espèrent pas Nous rencontrer disent : « Si seulement on avait fait descendre sur nous des Anges ou si nous pouvions voir notre Seigneur ! » En effet, ils se sont enflés d'orgueil en eux-mêmes, et ont dépassé les limites de l'arrogance."
      },
      {
        "number": 22,
        "arabic": "يَوْمَ يَرَوْنَ الْمَلَائِكَةَ لَا بُشْرَىٰ يَوْمَئِذٍ لِلْمُجْرِمِينَ وَيَقُولُونَ حِجْرًا مَّحْجُورًا",
        "french": "Le jour où ils verront les Anges, ce ne sera pas une bonne nouvelle, ce jour-là, pour les criminels, ils diront : « Barrage totalement défendu ! »"
      },
      {
        "number": 23,
        "arabic": "وَقَدِمْنَا إِلَىٰ مَا عَمِلُوا مِنْ عَمَلٍ فَجَعَلْنَاهُ هَبَاءً مَّنْثُورًا",
        "french": "Nous avons considéré l'œuvre qu'ils ont accomplie et Nous l'avons réduite en poussière éparpillée."
      },
      {
        "number": 24,
        "arabic": "أَصْحَابُ الْجَنَّةِ يَوْمَئِذٍ خَيْرٌ مُّسْتَقَرًّا وَأَحْسَنُ مَقِيلًا",
        "french": "Les gens du Paradis seront, ce jour-là, en meilleure demeure et au plus beau lieu de repos."
      },
      {
        "number": 25,
        "arabic": "وَيَوْمَ تَشَقَّقُ السَّمَاءُ بِالْغَمَامِ وَنُزِّلَ الْمَلَائِكَةُ تَنْزِيلًا",
        "french": "Et le jour où le ciel sera fendu par les nuages et qu'on fera descendre des Anges,"
      },
      {
        "number": 26,
        "arabic": "الْمُلْكُ يَوْمَئِذٍ الْحَقُّ لِلرَّحْمَٰنِ ۚ وَكَانَ يَوْمًا عَلَى الْكَافِرِينَ عَسِيرًا",
        "french": "ce jour-là, la vraie royauté appartient au Tout Miséricordieux, et ce sera un Jour difficile aux infidèles."
      },
      {
        "number": 27,
        "arabic": "وَيَوْمَ يَعَضُّ الظَّالِمُ عَلَىٰ يَدَيْهِ يَقُولُ يَا لَيْتَنِي اتَّخَذْتُ مَعَ الرَّسُولِ سَبِيلًا",
        "french": "Le jour où l'injuste se mordra les deux mains et dira : « Hélas pour moi ! Si seulement j'avais suivi chemin avec le Messager ! »"
      },
      {
        "number": 28,
        "arabic": "يَا وَيْلَتَىٰ لَيْتَنِي لَمْ أَتَّخِذْ فُلَانًا خَلِيلًا",
        "french": "Malheur à moi ! Hélas ! Si seulement je n'avais pas pris « un tel » pour ami ! »"
      },
      {
        "number": 29,
        "arabic": "لَقَدْ أَضَلَّنِي عَنِ الذِّكْرِ بَعْدَ إِذْ جَاءَنِي ۗ وَكَانَ الشَّيْطَانُ لِلْإِنْسَانِ خَذُولًا",
        "french": "Il m'a, en effet, égaré loin du rappel [le Coran], après qu'il me soit parvenu. » Et le Diable déserte l'homme (après l'avoir tenté)."
      },
      {
        "number": 30,
        "arabic": "وَقَالَ الرَّسُولُ يَا رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا",
        "french": "Et le Messager dit : « Seigneur, mon peuple a vraiment pris ce Coran pour une chose délaissée ! »"
      },
      {
        "number": 31,
        "arabic": "وَكَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا مِنَ الْمُجْرِمِينَ ۗ وَكَفَىٰ بِرَبِّكَ هَادِيًا وَنَصِيرًا",
        "french": "C'est ainsi que Nous fîmes à chaque prophète un ennemi parmi les criminels. Mais ton Seigneur suffit comme guide et comme soutien."
      },
      {
        "number": 32,
        "arabic": "وَقَالَ الَّذِينَ كَفَرُوا لَوْلَا نُزِّلَ عَلَيْهِ الْقُرْآنُ جُمْلَةً وَاحِدَةً ۚ كَذَٰلِكَ لِنُثَبِّتَ بِهِ فُؤَادَكَ ۖ وَرَتَّلْنَاهُ تَرْتِيلًا",
        "french": "Et ceux qui ne croient pas disent : « Pourquoi n'a-t-on pas fait descendre sur lui le Coran en une seule fois ? » Nous l'avons révélé ainsi pour raffermir ton cœur. Et Nous l'avons récité soigneusement."
      },
      {
        "number": 33,
        "arabic": "وَلَا يَأْتُونَكَ بِمَثَلٍ إِلَّا جِئْنَاكَ بِالْحَقِّ وَأَحْسَنَ تَفْسِيرًا",
        "french": "Ils ne t'apporteront aucune parabole, sans que Nous ne t'apportions la vérité avec la meilleure interprétation."
      }
    ],
    "words": [
      {
        "word": "يَعْبُدُونَ",
        "translit": "yaʿbudūn",
        "meaning": "ils adorent",
        "root": "ع - ب - د",
        "rootMeaning": "adorer / servir",
        "rootColor": 1,
        "emoji": "🤲",
        "funFactTitle": "La racine ع - ب - د : adorer (déjà vue !)",
        "funFact": "Tu reconnais cette racine ? Elle était dans la leçon 25-01 avec <em>ʿabd</em> ! Ici, <strong>yaʿbudūn</strong> signifie « ils adorent ». C'est comme quand tu obéis à tes parents avec amour : les croyants adorent Allah de la même façon. Plus tu connais de mots avec cette racine, plus tu deviens fort en arabe coranique ! 🤲",
        "relatedText": "Retrouve aussi <span class='arabic-inline'>تَعْبُدُونَ</span> (vous adorez) et <span class='arabic-inline'>الْعِبَادَةِ</span> (l'adoration) à travers le Coran.",
        "related": "<span class='arabic-inline'>إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</span> — C'est Toi que nous adorons, c'est de Toi que nous implorons secours"
      },
      {
        "word": "أَضْلَلْتُمْ",
        "translit": "aḍlaltum",
        "meaning": "avez-vous égaré",
        "root": "ض - ل - ل",
        "rootMeaning": "égarer",
        "rootColor": 2,
        "emoji": "🧭",
        "funFactTitle": "La racine ض - ل - ل : égarer",
        "funFact": "Imagine que tu es dans une forêt sans boussole : tu es <em>ḍāll</em> (égaré) ! Quand on perd le bon chemin dans la vie, on dit aussi qu'on est <strong>égaré</strong>. Le Coran est comme ta boussole magique qui te remet sur le droit chemin. Le mot <strong>ḍalāl</strong> signifie « égarement » : un concept très important dans le Coran ! 🧭",
        "relatedText": "On la trouve dans <span class='arabic-inline'>الضَّالِّينَ</span> (les égarés) de la Fatiha et <span class='arabic-inline'>أَضَلُّ سَبِيلًا</span> (plus égarés du chemin).",
        "related": "<span class='arabic-inline'>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</span> — Le chemin de ceux que Tu as comblés de bienfaits, non pas de ceux qui ont encouru Ta colère, ni des égarés"
      },
      {
        "word": "الْمُرْسَلِينَ",
        "translit": "al-mursalīn",
        "meaning": "les messagers",
        "root": "ر - س - ل",
        "rootMeaning": "envoyer",
        "rootColor": 3,
        "emoji": "✉️",
        "funFactTitle": "La racine ر - س - ل : envoyer",
        "funFact": "Quand tu envoies un message à ton copain, tu es comme un petit <em>rasūl</em> ! Les prophètes sont les <strong>messagers</strong> d'Allah : ils livrent Son message important aux gens. Le mot <strong>risāla</strong> signifie « message » et <strong>mursalūn</strong> signifie « ceux qui sont envoyés ». C'est comme un service de livraison divine ! ✉️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>رَسُولًا</span> (un messager) et <span class='arabic-inline'>مُرْسَلِينَ</span> (envoyés), très fréquents dans le Coran.",
        "related": "<span class='arabic-inline'>مُحَمَّدٌ رَّسُولُ اللَّهِ</span> — Muhammad est le messager d'Allah"
      },
      {
        "word": "هَادِيًا",
        "translit": "hādiyan",
        "meaning": "un guide",
        "root": "ه - د - ي",
        "rootMeaning": "guider",
        "rootColor": 4,
        "emoji": "🧭",
        "funFactTitle": "La racine ه - د - ي : guider",
        "funFact": "Un <em>hādī</em>, c'est comme un guide de montagne qui te montre le chemin sûr ! Allah est le meilleur des guides, et le Coran est Sa carte. Le mot <strong>hidāya</strong> signifie « la guidance » — c'est ce qu'on demande dans chaque prière quand on dit « ihdinā aṣ-ṣirāṭ al-mustaqīm ». Chaque fois que tu trouves la bonne réponse à un problème, remercie ton Guide ! 🧭",
        "relatedText": "On la trouve dans <span class='arabic-inline'>يَهْدِي</span> (Il guide) et <span class='arabic-inline'>الْهُدَىٰ</span> (la bonne direction), présents dans presque toutes les sourates.",
        "related": "<span class='arabic-inline'>اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</span> — Guide-nous dans le droit chemin"
      },
      {
        "word": "بَصِيرًا",
        "translit": "baṣīran",
        "meaning": "Clairvoyant",
        "root": "ب - ص - ر",
        "rootMeaning": "voir",
        "rootColor": 5,
        "emoji": "👁️",
        "funFactTitle": "La racine ب - ص - ر : voir",
        "funFact": "Tu utilises tes yeux pour voir, mais Allah <em>yaṣūru</em> (voit) TOUT, même ce qui est caché ! Le mot <strong>baṣīr</strong> décrit quelqu'un qui a une vue parfaite, sans limites. Dans le Coran, Allah est <strong>Al-Baṣīr</strong> : Il voit tout ce que tu fais en secret comme en public. C'est comme avoir un radar magique à l'infini ! 👁️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>أَبْصَارُهُمْ</span> (leurs regards) et <span class='arabic-inline'>الْبَصِيرُ</span> (Celui qui voit tout), attribut d'Allah.",
        "related": "<span class='arabic-inline'>وَهُوَ السَّمِيعُ الْبَصِيرُ</span> — Et Il est l'Audient, le Clairvoyant"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class='arabic-inline'>الْمُرْسَلِينَ</span> (al-mursalīn) ?",
        "options": [
          "les messagers",
          "les rois",
          "les croyants",
          "les anges"
        ],
        "correct": 0
      },
      {
        "question": "Quelle racine signifie « guider » ?",
        "options": [
          "ض - ل - ل",
          "ر - س - ل",
          "ب - ص - ر",
          "ه - د - ي"
        ],
        "correct": 3
      },
      {
        "question": "Que se passe-t-il le Jour du Jugement avec les faux dieux ?",
        "options": [
          "Ils protègent leurs adorateurs",
          "Ils avouent qu'ils n'ont aucun pouvoir",
          "Ils deviennent des anges",
          "Ils sont pardonnés"
        ],
        "correct": 1
      },
      {
        "question": "Quel est le sens de <span class='arabic-inline'>أَضْلَلْتُمْ</span> (aḍlaltum) ?",
        "options": [
          "avez-vous guidé",
          "avez-vous créé",
          "avez-vous égaré",
          "avez-vous pardonné"
        ],
        "correct": 2
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 25-02 ! Tu as découvert les racines <strong>ع - ب - د, ض - ل - ل, ر - س - ل, ه - د - ي, ب - ص - ر</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "25-03",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "Les peuples anciens et les signes dans la création",
    "shortTitle": "Al-Furqan (34-50)",
    "subtitle": "De Noé aux Thamud, Allah nous rappelle les peuples qui ont refusé la vérité. Et Il nous montre les merveilles de la nature !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 34,
        "arabic": "الَّذِينَ يُحْشَرُونَ عَلَىٰ وُجُوهِهِمْ إِلَىٰ جَهَنَّمَ أُولَٰئِكَ شَرٌّ مَّكَانًا وَأَضَلُّ سَبِيلًا",
        "french": "Ceux qui seront traînés sur leurs visages vers l'Enfer, ceux-là seront dans la pire des situations et les plus égarés hors du chemin droit."
      },
      {
        "number": 35,
        "arabic": "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ وَجَعَلْنَا مَعَهُ أَخَاهُ هَارُونَ وَزِيرًا",
        "french": "En effet, Nous avons apporté à Moïse le Livre et lui avons assigné son frère Aaron comme assistant."
      },
      {
        "number": 36,
        "arabic": "فَقُلْنَا اذْهَبَا إِلَى الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا فَدَمَّرْنَاهُمْ تَدْمِيرًا",
        "french": "Puis Nous avons dit : « Allez tous deux vers les gens qui ont traité de mensonge Nos preuves. » Nous les avons ensuite détruits complètement."
      },
      {
        "number": 37,
        "arabic": "وَقَوْمَ نُوحٍ لَمَّا كَذَّبُوا الرُّسُلَ أَغْرَقْنَاهُمْ وَجَعَلْنَاهُمْ لِلنَّاسِ آيَةً ۖ وَأَعْتَدْنَا لِلظَّالِمِينَ عَذَابًا أَلِيمًا",
        "french": "Et le peuple de Noé, quand ils eurent démenti les messagers, Nous les noyâmes et en fîmes pour les gens un signe d'avertissement. Et Nous avons préparé pour les injustes un châtiment douloureux."
      },
      {
        "number": 38,
        "arabic": "وَعَادًا وَثَمُودَ وَأَصْحَابَ الرَّسِّ وَقُرُونًا بَيْنَ ذَٰلِكَ كَثِيرًا",
        "french": "Et les 'Aad, les Thamûd, les gens d'Ar-Rass et de nombreuses générations intermédiaires !"
      },
      {
        "number": 39,
        "arabic": "وَكُلًّا ضَرَبْنَا لَهُ الْأَمْثَالَ ۖ وَكُلًّا تَبَّرْنَا تَتْبِيرًا",
        "french": "A tous, cependant, Nous avions fait des paraboles et Nous les avions tous anéantis d'une façon brutale."
      },
      {
        "number": 40,
        "arabic": "وَلَقَدْ أَتَوْا عَلَى الْقَرْيَةِ الَّتِي أُمْطِرَتْ مَطَرَ السَّوْءِ ۚ أَفَلَمْ يَكُونُوا يَرَوْنَهَا ۚ بَلْ كَانُوا لَا يَرْجُونَ نُشُورًا",
        "french": "Ils sont passés par la cité sur laquelle est tombée une pluie de malheurs. Ne la voient-ils donc pas ? Mais ils n'espèrent pas de résurrection !"
      },
      {
        "number": 41,
        "arabic": "وَإِذَا رَأَوْكَ إِنْ يَتَّخِذُونَكَ إِلَّا هُزُوًا أَهَٰذَا الَّذِي بَعَثَ اللَّهُ رَسُولًا",
        "french": "Et quand ils te voient, ils ne te prennent qu'en raillerie : « Est-ce là celui qu'Allah a envoyé comme Messager ? »"
      },
      {
        "number": 42,
        "arabic": "إِنْ كَادَ لَيُضِلُّنَا عَنْ آلِهَتِنَا لَوْلَا أَنْ صَبَرْنَا عَلَيْهَا ۚ وَسَوْفَ يَعْلَمُونَ حِينَ يَرَوْنَ الْعَذَابَ مَنْ أَضَلُّ سَبِيلًا",
        "french": "« Peu s'en est fallu qu'il ne nous égare de nos divinités, si ce n'était notre attachement patient à elles ! » Cependant, ils sauront quand ils verront le châtiment, qui est le plus égaré en son chemin."
      },
      {
        "number": 43,
        "arabic": "أَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ أَفَأَنْتَ تَكُونُ عَلَيْهِ وَكِيلًا",
        "french": "Ne vois-tu pas celui qui a fait de sa passion sa divinité ? Est-ce à toi d'être un garant pour lui ?"
      },
      {
        "number": 44,
        "arabic": "أَمْ تَحْسَبُ أَنَّ أَكْثَرَهُمْ يَسْمَعُونَ أَوْ يَعْقِلُونَ ۚ إِنْ هُمْ إِلَّا كَالْأَنْعَامِ ۖ بَلْ هُمْ أَضَلُّ سَبِيلًا",
        "french": "Ou bien penses-tu que la plupart d'entre eux entendent ou comprennent ? Ils ne sont en vérité comparables qu'à des bestiaux. Ou plutôt, ils sont plus égarés encore du sentier."
      },
      {
        "number": 45,
        "arabic": "أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ الظِّلَّ وَلَوْ شَاءَ لَجَعَلَهُ سَاكِنًا ثُمَّ جَعَلْنَا الشَّمْسَ عَلَيْهِ دَلِيلًا",
        "french": "N'as-tu pas vu comment ton Seigneur étend l'ombre ? S'Il avait voulu, certes, Il l'aurait faite immobile. Puis Nous lui fîmes du soleil son indice,"
      },
      {
        "number": 46,
        "arabic": "ثُمَّ قَبَضْنَاهُ إِلَيْنَا قَبْضًا يَسِيرًا",
        "french": "puis Nous la saisissons [pour la ramener] vers Nous avec facilité."
      },
      {
        "number": 47,
        "arabic": "وَهُوَ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِبَاسًا وَالنَّوْمَ سُبَاتًا وَجَعَلَ النَّهَارَ نُشُورًا",
        "french": "Et c'est Lui qui vous fit de la nuit un vêtement, du sommeil un repos et qui fit du jour un retour à la vie active."
      },
      {
        "number": 48,
        "arabic": "وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ ۚ وَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا",
        "french": "Et c'est Lui qui envoya les vents comme une annonce précédant Sa miséricorde. Nous fîmes descendre du ciel une eau pure et purifiante,"
      },
      {
        "number": 49,
        "arabic": "لِنُحْيِيَ بِهِ بَلْدَةً مَيْتًا وَنُسْقِيَهُ مِمَّا خَلَقْنَا أَنْعَامًا وَأَنَاسِيَّ كَثِيرًا",
        "french": "pour faire revivre par elle une contrée morte, et donner à boire aux multiples bestiaux et hommes que Nous avons créés."
      },
      {
        "number": 50,
        "arabic": "وَلَقَدْ صَرَّفْنَاهُ بَيْنَهُمْ لِيَذَّكَّرُوا فَأَبَىٰ أَكْثَرُ النَّاسِ إِلَّا كُفُورًا",
        "french": "Nous l'avions répartie entre eux afin qu'ils se rappellent (de Nous). Mais la plupart des gens se refusent à tout sauf à être ingrats."
      }
    ],
    "words": [
      {
        "word": "أَغْرَقْنَاهُمْ",
        "translit": "aghraqnāhum",
        "meaning": "Nous les noyâmes",
        "root": "غ - ر - ق",
        "rootMeaning": "noyer / submerger",
        "rootColor": 1,
        "emoji": "🌊",
        "funFactTitle": "La racine غ - ر - ق : noyer / submerger",
        "funFact": "Le peuple de Noé a été <em>gharaqa</em> (noyé) dans un déluge immense, comme un verre que l'on plonge dans l'eau ! Le mot <strong>gharaq</strong> signifie « noyer » et <strong>ghirqān</strong> signifie « engloutissement ». Cette racine rappelle que l'eau, quand elle obéit à Allah, peut être aussi puissante qu'une armée de milliers de soldats ! 🌊",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>يُغْرَقُونَ</span> (ils sont noyés) et <span class='arabic-inline'>غَرِقُوا</span> (ils se sont noyés), toujours lié au déluge ou à la noyade.",
        "related": "<span class='arabic-inline'>فَأَنْجَيْنَاكَ بِالْغَرَقِ</span> — Nous t'avons sauvé de la noyade"
      },
      {
        "word": "الرِّيَاحَ",
        "translit": "ar-rīyāḥa",
        "meaning": "les vents",
        "root": "ر - و - ح",
        "rootMeaning": "vent / esprit",
        "rootColor": 2,
        "emoji": "💨",
        "funFactTitle": "La racine ر - و - ح : vent / esprit",
        "funFact": "Le vent en arabe, c'est <em>rīḥ</em>, et l'ange, c'est <em>rūḥ</em> — la même racine ! C'est comme si les anges étaient faits de « vent spirituel ». Les vents apportent la pluie qui fait pousser les plantes, tout comme les anges apportent les révélations d'Allah. Le mot <strong>rūḥ</strong> désigne aussi l'âme humaine, ce souffle de vie qui te fait avancer ! 💨",
        "relatedText": "On la trouve dans <span class='arabic-inline'>رُوحِي</span> (Mon souffle) et <span class='arabic-inline'>رِيَاحًا</span> (des vents), deux faces d'une même racine magnifique.",
        "related": "<span class='arabic-inline'>وَنَفَخْتُ فِيهِ مِنْ رُوحِي</span> — J'y ai insufflé de Mon souffle"
      },
      {
        "word": "مَاءً",
        "translit": "mā'an",
        "meaning": "une eau",
        "root": "م - و - هـ",
        "rootMeaning": "eau",
        "rootColor": 3,
        "emoji": "💧",
        "funFactTitle": "La racine م - و - هـ : eau",
        "funFact": "L'eau en arabe, c'est <em>mā'</em>, et cette racine donne aussi le mot <strong>māwiyah</strong> (source d'eau). Le Coran décrit l'eau comme <strong>ṭahūr</strong> (pure) et <strong>barakah</strong> (bénie). Sans eau, pas de vie sur Terre ! Allah dit que l'eau fait revivre les terres mortes, comme quand tu arroses une plante fanée et qu'elle retrouve ses couleurs. 💧",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>مِيَاهًا</span> (des eaux) et les nombreux versets sur l'eau source de vie.",
        "related": "<span class='arabic-inline'>وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ</span> — Nous avons fait de l'eau toute chose vivante"
      },
      {
        "word": "يَسْمَعُونَ",
        "translit": "yasmaʿūn",
        "meaning": "ils entendent",
        "root": "س - م - ع",
        "rootMeaning": "entendre",
        "rootColor": 4,
        "emoji": "👂",
        "funFactTitle": "La racine س - م - ع : entendre",
        "funFact": "Entendre, ce n'est pas juste percevoir un son ! En arabe, <em>samīʿa</em> veut aussi dire <strong>comprendre</strong> et <strong>obéir</strong>. Quand Allah est <strong>As-Samīʿ</strong>, Il entend tout ET Il comprend tout. Le Coran dit que les mécréants entendent mais ne comprennent pas, comme quelqu'un qui écoute une chanson dans une langue inconnue ! 👂",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>السَّمِيعُ</span> (Celui qui entend tout) et <span class='arabic-inline'>اسْمَعُوا</span> (écoutez !), attribut divin et ordre fréquent.",
        "related": "<span class='arabic-inline'>إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ</span> — C'est Lui l'Audient, l'Omniscient"
      },
      {
        "word": "الظِّلَّ",
        "translit": "aẓ-ẓilla",
        "meaning": "l'ombre",
        "root": "ظ - ل - ل",
        "rootMeaning": "ombrager / couvrir",
        "rootColor": 5,
        "emoji": "🌳",
        "funFactTitle": "La racine ظ - ل - ل : ombrager / couvrir",
        "funFact": "Quand tu te mets à l'ombre d'un arbre en été, tu ressentis le <em>ẓill</em> (ombre) ! Allah étend l'ombre comme une couverture protectrice sur Terre. Sans elle, le soleil serait trop fort. Le mot <strong>muẓill</strong> signifie « celui qui donne de l'ombre ». Au Paradis, Allah parle de « l'ombre étendue » — imagine l'ombre la plus fraîche et la plus belle du monde ! 🌳",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>ظِلَالِهِ</span> (Ses ombres) et <span class='arabic-inline'>أَظِلَّةً</span> (des ombrages), signes de la protection divine.",
        "related": "<span class='arabic-inline'>وَظِلَالٍ ذَاتِ أَغْصَانٍ</span> — Et des ombrages aux branches multiples"
      }
    ],
    "quiz": [
      {
        "question": "Quel peuple a été noyé selon ces versets ?",
        "options": [
          "Le peuple de Moïse",
          "Le peuple de Noé",
          "Les Thamud",
          "Les Aad"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine ر - و - ح ?",
        "options": [
          "eau",
          "vent / esprit",
          "lumière",
          "terre"
        ],
        "correct": 1
      },
      {
        "question": "Comment Allah décrit-il la nuit dans le verset 47 ?",
        "options": [
          "Comme un paradis",
          "Comme un vêtement",
          "Comme un océan",
          "Comme une montagne"
        ],
        "correct": 1
      },
      {
        "question": "Quelle est la racine de <span class='arabic-inline'>يَسْمَعُونَ</span> ?",
        "options": [
          "س - م - ع",
          "ر - و - ح",
          "غ - ر - ق",
          "ظ - ل - ل"
        ],
        "correct": 0
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 25-03 ! Tu as découvert les racines <strong>غ - ر - ق, ر - و - ح, م - و - هـ, س - م - ع, ظ - ل - ل</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "25-04",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "La lutte par le Coran et les signes dans les cieux",
    "shortTitle": "Al-Furqan (51-61)",
    "subtitle": "Allah envoie des avertisseurs et nous montre Ses signes : les montagnes, la mer et les navires !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 51,
        "arabic": "وَلَوْ شِئْنَا لَبَعَثْنَا فِي كُلِّ قَرْيَةٍ نَذِيرًا",
        "french": "Or, si Nous avions voulu, Nous aurions certes envoyé dans chaque cité un avertisseur."
      },
      {
        "number": 52,
        "arabic": "فَلَا تُطِعِ الْكَافِرِينَ وَجَاهِدْهُمْ بِهِ جِهَادًا كَبِيرًا",
        "french": "N'obéis donc pas aux infidèles ; et avec ceci (le Coran), lutte contre eux vigoureusement."
      },
      {
        "number": 53,
        "arabic": "وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ هَٰذَا عَذْبٌ فُرَاتٌ وَهَٰذَا مِلْحٌ أُجَاجٌ وَجَعَلَ بَيْنَهُمَا بَرْزَخًا وَحِجْرًا مَّحْجُورًا",
        "french": "Et c'est Lui qui a donné libre cours aux deux mers : l'une douce, rafraîchissante et l'autre salée, amère. Et Il a assigné entre les deux une zone intermédiaire et un obstacle infranchissable."
      },
      {
        "number": 54,
        "arabic": "وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا فَجَعَلَهُ نَسَبًا وَصِهْرًا ۗ وَكَانَ رَبُّكَ قَدِيرًا",
        "french": "Et c'est Lui qui a créé de l'eau un être humain, puis Il a donné à celui-ci des liens de parenté et d'alliance. Et ton Seigneur est Omnipotent."
      },
      {
        "number": 55,
        "arabic": "وَيَعْبُدُونَ مِنْ دُونِ اللَّهِ مَا لَا يَنفَعُهُمْ وَلَا يَضُرُّهُمْ ۗ وَكَانَ الْكَافِرُ عَلَىٰ رَبِّهِ ظَهِيرًا",
        "french": "Et ils adorent en dehors d'Allah ce qui ne peut ni leur nuire ni leur profiter. Et l'infidèle est toujours assistant [de Satan] contre son Seigneur."
      },
      {
        "number": 56,
        "arabic": "وَمَا أَرْسَلْنَاكَ إِلَّا مُبَشِّرًا وَنَذِيرًا",
        "french": "Et Nous ne t'avons envoyé que comme annonciateur et avertisseur."
      },
      {
        "number": 57,
        "arabic": "قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ إِلَّا مَنْ شَاءَ أَنْ يَتَّخِذَ إِلَىٰ رَبِّهِ سَبِيلًا",
        "french": "Dis : « Je ne vous en demande aucun salaire si ce n'est que celui qui voudra prendre un chemin vers son Seigneur. »"
      },
      {
        "number": 58,
        "arabic": "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِ ۚ وَكَفَىٰ بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا",
        "french": "Et place ta confiance en Le Vivant qui ne meurt jamais. Et célèbre Sa louange. Et Il suffit comme Connaisseur des péchés de Ses serviteurs."
      },
      {
        "number": 59,
        "arabic": "الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۚ الرَّحْمَٰنُ فَاسْأَلْ بِهِ خَبِيرًا",
        "french": "Celui qui a créé en six jours les cieux et la terre, et tout ce qui se trouve entre eux, puis S'est établi « Istawa » sur le Trône. Le Tout Miséricordieux ! Demande donc à qui est bien informé [à Son sujet]."
      },
      {
        "number": 60,
        "arabic": "وَإِذَا قِيلَ لَهُمُ اسْجُدُوا لِلرَّحْمَٰنِ قَالُوا وَمَا الرَّحْمَٰنُ أَنَسْجُدُ لِمَا تَأْمُرُنَا وَزَادَهُمْ نُفُورًا",
        "french": "Et quand on leur dit : « Prosternez-vous pour le Tout Miséricordieux », ils disent : « Qu'est-ce que le Tout Miséricordieux ? Nous allons nous prosterner à ce que tu nous ordonnes ? » Et cela accroît leur aversion."
      },
      {
        "number": 61,
        "arabic": "تَبَارَكَ الَّذِي جَعَلَ فِي السَّمَاءِ بُرُوجًا وَجَعَلَ فِيهَا سِرَاجًا وَقَمَرًا مُّنِيرًا",
        "french": "Béni soit Celui qui a placé au ciel des constellations et y a placé un soleil (lampe) et une lune éclairante."
      }
    ],
    "words": [
      {
        "word": "جَاهِدْهُمْ",
        "translit": "jāhidhum",
        "meaning": "lutte contre eux",
        "root": "ج - ه - د",
        "rootMeaning": "effort / lutte",
        "rootColor": 1,
        "emoji": "⚔️",
        "funFactTitle": "La racine ج - ه - د : effort / lutte",
        "funFact": "Le <em>jihād</em>, ce n'est pas ce que tu crois ! En arabe, ça veut dire « faire un gros effort », comme quand tu te donnes à fond pour un examen difficile. Ici, Allah dit de lutter contre les mécréants <strong>avec le Coran</strong>, pas avec les armes ! Le mot <strong>mujāhada</strong> signifie « effort intense ». Ton effort pour apprendre les racines arabes, c'est aussi une forme de jihād ! ⚔️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>الْمُجَاهِدِينَ</span> (ceux qui font des efforts) et <span class='arabic-inline'>جُهِدَ</span> (il a peiné), toujours lié à l'effort sincère.",
        "related": "<span class='arabic-inline'>وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا</span> — Ceux qui luttent pour Nous, Nous les guiderons certes vers Nos sentiers"
      },
      {
        "word": "الْبَحْرَيْنِ",
        "translit": "al-baḥrayn",
        "meaning": "les deux mers",
        "root": "ب - ح - ر",
        "rootMeaning": "mer / vaste",
        "rootColor": 2,
        "emoji": "🌊",
        "funFactTitle": "La racine ب - ح - ر : mer / vaste",
        "funFact": "Savais-tu que la Méditerranée et l'Atlantique se rencontrent mais ne se mélangent pas ? C'est exactement ce que décrit ce verset ! Le mot <em>baḥr</em> désigne la mer, et <strong>baḥrayn</strong> signifie « les deux mers ». Le Coran parle d'une barrière invisible entre les eaux douces et salées, découverte par les scientifiques modernes ! C'est un vrai miracle scientifique ! 🌊",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>بَحْرٍ</span> (une mer) et <span class='arabic-inline'>أَبْحُرٍ</span> (des mers), évoquant la puissance de la création d'Allah.",
        "related": "<span class='arabic-inline'>مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ</span> — Il a donné libre cours aux deux mers qui se rencontrent"
      },
      {
        "word": "الْحَيِّ",
        "translit": "al-ḥayy",
        "meaning": "le Vivant",
        "root": "ح - ي - ي",
        "rootMeaning": "vivre",
        "rootColor": 3,
        "emoji": "💚",
        "funFactTitle": "La racine ح - ي - ي : vivre",
        "funFact": "Allah est <em>Al-Ḥayy</em>, le Vivant qui ne meurt JAMAIS ! Contrairement à nous, Allah n'a ni début ni fin. Le mot <strong>ḥayāt</strong> signifie « la vie » et <strong>ḥayy</strong> signifie « vivant ». Quand tu prononces « Yā Ḥayy Yā Qayyūm » dans tes invocations, tu appelles le Vivant Éternel ! C'est l'un des plus beaux noms d'Allah ! 💚",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>الْحَيَاةَ</span> (la vie) et <span class='arabic-inline'>يُحْيِي</span> (Il fait vivre), omniprésente dans le Coran.",
        "related": "<span class='arabic-inline'>اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ</span> — Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même"
      },
      {
        "word": "سِرَاجًا",
        "translit": "sirājan",
        "meaning": "une lampe / un soleil",
        "root": "س - ر - ج",
        "rootMeaning": "briller / lampe",
        "rootColor": 4,
        "emoji": "☀️",
        "funFactTitle": "La racine س - ر - ج : briller / lampe",
        "funFact": "Le soleil est appelé <em>sirāj</em> (lampe) dans le Coran ! C'est comme si Allah avait accroché une lampe géante au plafond du ciel pour éclairer tout l'univers. Le mot <strong>sirāj</strong> signifie « lampe brillante » et <strong>misbāḥ</strong> signifie « luminaire ». Sans le soleil, la Terre serait plongée dans le noir total ! Allah est aussi la lumière des cieux et de la terre ☀️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>سِرَاجًا وَهَّاجًا</span> (une lampe brillante) et <span class='arabic-inline'>مِصْبَاحًا</span> (une lampe), symboles de lumière divine.",
        "related": "<span class='arabic-inline'>وَجَعَلَ الشَّمْسَ سِرَاجًا</span> — Et Il a fait du soleil une lampe"
      },
      {
        "word": "اسْجُدُوا",
        "translit": "usjudū",
        "meaning": "prosternez-vous",
        "root": "س - ج - د",
        "rootMeaning": "se prosterner",
        "rootColor": 5,
        "emoji": "🤲",
        "funFactTitle": "La racine س - ج - د : se prosterner",
        "funFact": "La prosternation (<em>sujūd</em>), c'est le moment où tu mets ton front par terre devant Allah. C'est la position la plus humble qu'un humain puisse prendre ! Le mot <strong>masjid</strong> (mosquée) vient de cette racine : c'est le lieu où l'on se prosterne. Quand tu fais le sujūd, tu es plus proche d'Allah que jamais ! Ton front touche le sol, mais ton cœur monte au ciel 🤲",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>مَسْجِدًا</span> (une mosquée) et <span class='arabic-inline'>سَاجِدِينَ</span> (en prosternation), très fréquente dans le Coran.",
        "related": "<span class='arabic-inline'>وَاسْجُدْ وَاقْتَرِبْ</span> — Prosterne-toi et rapproche-toi"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class='arabic-inline'>جَاهِدْهُمْ</span> (jāhidhum) ?",
        "options": [
          "Pardonne-leur",
          "Lutte contre eux",
          "Ignore-les",
          "Fuis-les"
        ],
        "correct": 1
      },
      {
        "question": "Que représente <span class='arabic-inline'>سِرَاجًا</span> (sirājan) dans le verset 61 ?",
        "options": [
          "La lune",
          "La lune et les étoiles",
          "Le soleil",
          "Les étoiles"
        ],
        "correct": 2
      },
      {
        "question": "Quelle est la racine qui signifie « vivre » ?",
        "options": [
          "س - ج - د",
          "ب - ح - ر",
          "ج - ه - د",
          "ح - ي - ي"
        ],
        "correct": 3
      },
      {
        "question": "Quelle racine donne le mot « mosquée » (masjid) ?",
        "options": [
          "س - ر - ج",
          "ب - ح - ر",
          "س - ج - د",
          "ح - ي - ي"
        ],
        "correct": 2
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 25-04 ! Tu as découvert les racines <strong>ج - ه - د, ب - ح - ر, ح - ي - ي, س - ر - ج, س - ج - د</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "25-05",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "Les serviteurs du Tout Miséricordieux",
    "shortTitle": "Al-Furqan (62-70)",
    "subtitle": "Allah décrit les vrais croyants : humbles, patients, généreux et qui prient la nuit ! Veux-tu en faire partie ?",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 62,
        "arabic": "وَهُوَ الَّذِي جَعَلَ اللَّيْلَ وَالنَّهَارَ خِلْفَةً لِّمَنْ أَرَادَ أَنْ يَذَّكَّرَ أَوْ أَرَادَ شُكُورًا",
        "french": "Et c'est Lui qui a assigné la nuit et le jour pour quiconque veut y réfléchir ou veut montrer sa reconnaissance."
      },
      {
        "number": 63,
        "arabic": "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
        "french": "Les serviteurs du Tout Miséricordieux sont ceux qui marchent humblement sur terre, qui, lorsque les ignorants s'adressent à eux, disent : « Paix. »"
      },
      {
        "number": 64,
        "arabic": "وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا",
        "french": "et ceux qui passent la nuit prosternés et debout devant leur Seigneur,"
      },
      {
        "number": 65,
        "arabic": "وَالَّذِينَ يَقُولُونَ رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
        "french": "et ceux qui disent : « Seigneur, écarte de nous le châtiment de l'Enfer, car son châtiment est permanent. »"
      },
      {
        "number": 66,
        "arabic": "إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا",
        "french": "Qu'elle est mauvaise comme demeure et comme lieu de séjour !"
      },
      {
        "number": 67,
        "arabic": "وَالَّذِينَ إِذَا أَنْفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا",
        "french": "et ceux qui, lorsqu'ils dépensent, ne sont ni prodigues ni avares mais se tiennent au juste milieu."
      },
      {
        "number": 68,
        "arabic": "وَالَّذِينَ لَا يَدْعُونَ مَعَ اللَّهِ إِلَٰهًا آخَرَ وَلَا يَقْتُلُونَ النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ وَلَا يَزْنُونَ ۗ وَمَنْ يَفْعَلْ ذَٰلِكَ يَلْقَ أَثَامًا",
        "french": "et ceux qui n'invoquent pas d'autre dieu avec Allah, qui ne tuent pas la vie qu'Allah a rendue sacrée — sauf à bon droit — et qui ne commettent pas l'adultère. Quiconque fait cela encourra une punition."
      },
      {
        "number": 69,
        "arabic": "يُضَاعَفْ لَهُ الْعَذَابُ يَوْمَ الْقِيَامَةِ وَيَخْلُدْ فِيهِ مُهَانًا",
        "french": "Le châtiment lui sera doublé au Jour de la Résurrection, et il y demeurera éternellement couvert d'ignominie."
      },
      {
        "number": 70,
        "arabic": "إِلَّا مَنْ تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ ۗ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        "french": "sauf celui qui se repent, croit et accomplit une bonne œuvre ; ceux-là Allah changera leurs mauvaises actions en bonnes, et Allah est Pardonneur et Miséricordieux."
      }
    ],
    "words": [
      {
        "word": "هَوْنًا",
        "translit": "hawnan",
        "meaning": "avec humilité",
        "root": "ه - و - ن",
        "rootMeaning": "être doux / humble",
        "rootColor": 1,
        "emoji": "🕊️",
        "funFactTitle": "La racine ه - و - ن : être doux / humble",
        "funFact": "Les vrais serviteurs du Miséricordieux marchent sur terre avec <em>hawn</em> (douceur et humilité), comme un chat qui marche sans faire de bruit ! Ils ne sont ni arrogants ni égoïstes. Le mot <strong>hānin</strong> signifie « tendre » et <strong>yahwan</strong> signifie « se montrer doux ». Être humble, c'est comme être fort sans le montrer : la vraie douceur est une super-puissance ! 🕊️",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>هَيِّنًا</span> (facile) et <span class='arabic-inline'>تَهْوِينًا</span> (douceur), lié à la facilité et la modestie.",
        "related": "<span class='arabic-inline'>وَاخْفِضْ جَنَاحَكَ لِلْمُؤْمِنِينَ</span> — Et abaisse ton aile (sois doux) pour les croyants"
      },
      {
        "word": "سُجَّدًا",
        "translit": "sujjadan",
        "meaning": "prosternés",
        "root": "س - ج - د",
        "rootMeaning": "se prosterner",
        "rootColor": 2,
        "emoji": "🌙",
        "funFactTitle": "La racine س - ج - د : se prosterner (déjà vue !)",
        "funFact": "Ici, <em>sujjadan</em> est au pluriel intensif : ceux qui se prosternent BEAUCOUP pendant la nuit ! La forme avec shadda (سُجَّدًا) montre que c'est répété encore et encore, comme un stade où tu t'entraînes chaque jour. Les meilleurs croyants prient quand tout le monde dort, dans le calme de la nuit. C'est le moment privilégié pour parler à Allah ! 🌙",
        "relatedText": "Même racine que <span class='arabic-inline'>اسْجُدُوا</span> de la leçon 25-04, toujours liée à l'adoration et l'humilité.",
        "related": "<span class='arabic-inline'>وَمِنَ اللَّيْلِ فَاسْجُدْ لَهُ</span> — Et de la nuit, prosterne-toi pour Lui"
      },
      {
        "word": "أَنْفَقُوا",
        "translit": "anfaqū",
        "meaning": "ils ont dépensé",
        "root": "ن - ف - ق",
        "rootMeaning": "dépenser",
        "rootColor": 3,
        "emoji": "💰",
        "funFactTitle": "La racine ن - ف - ق : dépenser",
        "funFact": "Quand tu donnes de l'argent aux pauvres, tu <em>anfaqa</em> (dépenses) dans le bien ! Mais attention : le Coran dit de ne pas être <strong>trop généreux</strong> (gaspi!) ni <strong>trop avare</strong> (radin!), mais de trouver le juste milieu. C'est comme les trois ours : pas trop chaud, pas trop froid, juste parfait ! Le mot <strong>nafaqa</strong> signifie « dépense » et <strong>infaq</strong> signifie « charité ». 💰",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>يُنْفِقُونَ</span> (ils dépensent) et <span class='arabic-inline'>نَفَقَةً</span> (une dépense), très fréquent dans les versets sur la charité.",
        "related": "<span class='arabic-inline'>مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا</span> — Qui est celui qui prêtera à Allah un bon prêt ?"
      },
      {
        "word": "تَابَ",
        "translit": "tāba",
        "meaning": "il s'est repenti",
        "root": "ت - و - ب",
        "rootMeaning": "se repentir / revenir",
        "rootColor": 4,
        "emoji": "🔄",
        "funFactTitle": "La racine ت - و - ب : se repentir / revenir",
        "funFact": "Le <em>tawba</em> (repentir), c'est comme faire demi-tour quand tu te trompes de chemin ! Allah dit que si tu te repens sincèrement, Il transforme tes mauvaises actions en BONNES actions — c'est encore mieux que de les effacer ! Le mot <strong>tawwāb</strong> (Celui qui accepte le repentir) est l'un des plus beaux noms d'Allah. Il est toujours prêt à te pardonner, comme les meilleurs parents du monde ! 🔄",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>التَّوَّابُ</span> (Celui qui accepte le repentir) et <span class='arabic-inline'>اسْتَغْفِرُوا</span> (demandez pardon), au cœur de la miséricorde divine.",
        "related": "<span class='arabic-inline'>وَتُوبُوا إِلَى اللَّهِ جَمِيعًا</span> — Et repentez-vous tous à Allah"
      },
      {
        "word": "حَسَنَاتٍ",
        "translit": "ḥasanātin",
        "meaning": "bonnes actions",
        "root": "ح - س - ن",
        "rootMeaning": "être bon / beau",
        "rootColor": 5,
        "emoji": "🌟",
        "funFactTitle": "La racine ح - س - ن : être bon / beau",
        "funFact": "Le mot <em>ḥasana</em> signifie « bonne chose » et c'est la base du mot <strong>iḥsān</strong> (l'excellence). Être muḥsin, c'est faire les choses ENCORE mieux que bien, comme un artiste qui peint avec amour et précision. Le mot <strong>ḥusn</strong> signifie « beauté » et <strong>maḥsin</strong> signifie « ce qui est beau ». Chaque bonne action est comme une étoile brillante dans ton livre de bonnes actions ! 🌟",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>أَحْسَنَ</span> (le meilleur) et <span class='arabic-inline'>مُحْسِنُونَ</span> (ceux qui font le bien), omniprésente dans le Coran.",
        "related": "<span class='arabic-inline'>إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ</span> — Allah aime ceux qui font le bien"
      }
    ],
    "quiz": [
      {
        "question": "Comment les serviteurs du Miséricordieux répondent-ils aux ignorants ?",
        "options": [
          "Ils se fâchent",
          "Ils disent « Paix »",
          "Ils les ignorent",
          "Ils se moquent d'eux"
        ],
        "correct": 1
      },
      {
        "question": "Que se passe-t-il quand quelqu'un se repent sincèrement ?",
        "options": [
          "Ses péchés sont comptés double",
          "Ses mauvaises actions deviennent bonnes actions",
          "Il doit attendre un an",
          "Il perd ses bonnes actions"
        ],
        "correct": 1
      },
      {
        "question": "Quelle racine signifie « dépenser » ?",
        "options": [
          "ت - و - ب",
          "ن - ف - ق",
          "ح - س - ن",
          "ه - و - ن"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class='arabic-inline'>تَابَ</span> (tāba) ?",
        "options": [
          "Il a dépensé",
          "Il s'est repenti",
          "Il a marché",
          "Il a dormi"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 25-05 ! Tu as découvert les racines <strong>ه - و - ن, س - ج - د, ن - ف - ق, ت - و - ب, ح - س - ن</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "25-06",
    "surah": 25,
    "surahName": "Al-Furqan",
    "title": "Les repentis et la fin de la sourate",
    "shortTitle": "Al-Furqan (71-77)",
    "subtitle": "Les vrais croyants sont pardonnés, et ils hériteront du Paradis. La dernière leçon d'Al-Furqan se termine par une grande vérité !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 71,
        "arabic": "وَمَنْ تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ مَتَابًا",
        "french": "Et quiconque se repent et accomplit une bonne œuvre, c'est vers Allah qu'il reviendra vraiment."
      },
      {
        "number": 72,
        "arabic": "وَالَّذِينَ لَا يَشْهَدُونَ الزُّورَ وَإِذَا مَرُّوا بِاللَّغْوِ مَرُّوا كِرَامًا",
        "french": "Et ceux qui ne témoignent pas du mensonge, et qui, lorsqu'ils passent auprès d'une frivolité, s'en écartent noblement."
      },
      {
        "number": 73,
        "arabic": "وَالَّذِينَ إِذَا ذُكِّرُوا بِآيَاتِ رَبِّهِمْ لَمْ يَخِرُّوا عَلَيْهَا صُمًّا وَعُمْيَانًا",
        "french": "et ceux qui, lorsqu'ils sont rappelés aux signes de leur Seigneur, n'y tombent pas sourds et aveugles."
      },
      {
        "number": 74,
        "arabic": "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        "french": "et ceux qui disent : « Seigneur, donne-nous, de nos épouses et de nos enfants, la joie des yeux, et fais de nous un guide pour les pieux. »"
      },
      {
        "number": 75,
        "arabic": "أُولَٰئِكَ يُجْزَوْنَ الْغُرْفَةَ بِمَا صَبَرُوا وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَامًا",
        "french": "Ceux-là seront rétribués pour leur patience. Ils y seront accueillis avec un salut et la paix."
      },
      {
        "number": 76,
        "arabic": "خَالِدِينَ فِيهَا ۚ حَسُنَتْ مُسْتَقَرًّا وَمُقَامًا",
        "french": "et ils y demeureront éternellement. Qu'elle est bonne leur demeure et leur lieu de séjour !"
      },
      {
        "number": 77,
        "arabic": "قُلْ مَا يَعْبَأُ بِكُمْ رَبِّي لَوْلَا دُعَاؤُكُمْ ۖ فَقَدْ كَذَّبْتُمْ فَسَوْفَ يَكُونُ لِزَامًا",
        "french": "Dis : « Mon Seigneur ne se soucierait pas de vous sans votre invocation. » Vous avez pourtant traité le mensonge de vérité. Ce châtiment sera inévitable."
      }
    ],
    "words": [
      {
        "word": "الزُّورَ",
        "translit": "az-zūra",
        "meaning": "le mensonge / le faux",
        "root": "ز - و - ر",
        "rootMeaning": "fausser / mentir",
        "rootColor": 1,
        "emoji": "🚫",
        "funFactTitle": "La racine ز - و - ر : fausser / mentir",
        "funFact": "Le <em>zūr</em>, c'est tout ce qui est FAUX : le mensonge, les faux témoignages, les fausses idoles ! Le Coran dit que les vrais croyants ne participent JAMAIS au mensonge, comme des enfants honnêtes qui disent toujours la vérité. Le mot <strong>muzawwir</strong> signifie « celui qui embellit le faux ». Méfie-toi des belles apparences qui cachent le mensonge ! 🚫",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>زُورًا</span> (faux) et <span class='arabic-inline'>مُزَيِّنَ</span> (celui qui embellit le faux), toujours lié à la tromperie.",
        "related": "<span class='arabic-inline'>وَاجْنُبْ قَوْلَ الزُّورِ</span> — Évite le mensonge"
      },
      {
        "word": "صُمًّا",
        "translit": "ṣumman",
        "meaning": "sourds",
        "root": "ص - م - م",
        "rootMeaning": "être sourd",
        "rootColor": 2,
        "emoji": "🔇",
        "funFactTitle": "La racine ص - م - م : être sourd",
        "funFact": "Les mécréants sont décrits comme <em>aṣamm</em> (sourds) au Coran : ils entendent la vérité mais refusent de l'écouter, comme quelqu'un qui met ses casques alors qu'on lui donne un conseil important ! Le mot <strong>ṣamm</strong> signifie « surdité » mais dans le Coran, c'est souvent une surdité <strong>spirituelle</strong>. La prière (ṣalāt) vient d'une racine proche (ص - ل - و) : les cinq prières nous protègent de la surdité du cœur ! 🔇",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>أَصَمُّ</span> (sourd) et <span class='arabic-inline'>يَصُمُّ</span> (il devient sourd), souvent jumelée avec la cécité du cœur.",
        "related": "<span class='arabic-inline'>صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَعْقِلُونَ</span> — Sourds, muets, aveugles : ils ne raisonnent pas"
      },
      {
        "word": "هَبْ",
        "translit": "hab",
        "meaning": "donne / accorde",
        "root": "و - ه - ب",
        "rootMeaning": "donner généreusement",
        "rootColor": 3,
        "emoji": "🎁",
        "funFactTitle": "La racine و - ه - ب : donner généreusement",
        "funFact": "Quand Allah <em>yahibu</em> (donne), c'est comme le plus beau cadeau de l'univers ! Les croyants demandent à Allah de leur donner des enfants et des épouses qui soient <strong>qurrata aʿyun</strong> (la joie des yeux). Le mot <strong>hiba</strong> signifie « cadeau gratuit » et <strong>mawhiba</strong> signifie « un talent donné par Allah ». Chaque chose belle que tu possèdes est un cadeau d'Allah ! 🎁",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>الْمَوَاهِبِ</span> (les dons) et <span class='arabic-inline'>هِبَةً</span> (un cadeau), toujours liée à la générosité divine.",
        "related": "<span class='arabic-inline'>رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً</span> — Seigneur, donne-moi de Ta part une bonne descendance"
      },
      {
        "word": "إِمَامًا",
        "translit": "imāman",
        "meaning": "un guide / un modèle",
        "root": "أ - م - م",
        "rootMeaning": "guider / précéder",
        "rootColor": 4,
        "emoji": "📿",
        "funFactTitle": "La racine أ - م - م : guider / précéder",
        "funFact": "Un <em>imām</em>, ce n'est pas seulement celui qui dirige la prière ! C'est aussi un <strong>modèle</strong>, quelqu'un que les autres suivent. Ici, les croyants demandent à être des exemples pour les pieux ! Le mot <strong>umm</strong> signifie « mère » (celle qui précède et guide) et <strong>ummah</strong> signifie « communauté » (un groupe qui suit le même guide). Être un imam, c'est être un bon exemple ! 📿",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>أُمَّةً</span> (une communauté) et <span class='arabic-inline'>إِمَامًا مُّبِينًا</span> (un guide clair), omniprésente dans le Coran.",
        "related": "<span class='arabic-inline'>إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ</span> — Ce Coran guide vers ce qui est le plus droit"
      },
      {
        "word": "دُعَاؤُكُمْ",
        "translit": "duʿā'ukum",
        "meaning": "votre invocation",
        "root": "د - ع - و",
        "rootMeaning": "invoquer / appeler",
        "rootColor": 5,
        "emoji": "🤲",
        "funFactTitle": "La racine د - ع - و : invoquer / appeler",
        "funFact": "Le <em>duʿā'</em> (invocation), c'est ta ligne directe avec Allah ! Pas besoin de téléphone : tu peux L'appeler à tout moment, en tout lieu. Le dernier verset dit qu'Allah se soucie de nous grâce à nos invocations. Le mot <strong>dāʿi</strong> signifie « celui qui invoque » et <strong>madʿū</strong> signifie « celui qui est appelé ». L'invocation est l'arme la plus puissante du croyant : elle peut changer tout ! 🤲",
        "relatedText": "On la retrouve dans <span class='arabic-inline'>ادْعُونِي</span> (Invoque-Moi) et <span class='arabic-inline'>يَدْعُونَ</span> (ils invoquent), au cœur de la relation avec Allah.",
        "related": "<span class='arabic-inline'>ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً</span> — Invoquez votre Seigneur avec humilité et discrètement"
      }
    ],
    "quiz": [
      {
        "question": "Que demandent les croyants pour leurs familles dans le verset 74 ?",
        "options": [
          "La richesse",
          "La joie des yeux",
          "Le pouvoir",
          "La célébrité"
        ],
        "correct": 1
      },
      {
        "question": "Quelle racine signifie « invoquer / appeler » ?",
        "options": [
          "أ - م - م",
          "و - ه - ب",
          "ص - م - م",
          "د - ع - و"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie <span class='arabic-inline'>الزُّورَ</span> (az-zūra) ?",
        "options": [
          "la vérité",
          "le mensonge / le faux",
          "la lumière",
          "la prière"
        ],
        "correct": 1
      },
      {
        "question": "Comment les croyants réagissent-ils aux versets d'Allah ?",
        "options": [
          "Ils sont sourds et aveugles",
          "Ils les écoutent et les comprennent",
          "Ils s'en moquent",
          "Ils les ignorent"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as terminé la sourate Al-Furqan ! Tu as découvert les racines <strong>ز - و - ر, ص - م - م, و - ه - ب, أ - م - م, د - ع - و</strong>. Le Coran est un guide pour ceux qui veulent voir clair ! 🌟"
  },
  {
    "id": "26-01",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "L'avertissement et le premier dialogue de Moïse",
    "shortTitle": "Ash-Shu'ara (1-22)",
    "subtitle": "La sourate des Poètes commence par la révélation et l'appel de Moïse. Découvrons comment Allah a préparé Son prophète !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "طس ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
        "french": "Tā-Sīn. Voici les versets du Livre explicite."
      },
      {
        "number": 2,
        "arabic": "لَعَلَّكَ بَاخِعٌ نَّفْسَكَ أَلَّا يَكُونُوا مُؤْمِنِينَ",
        "french": "Peut-être te détruis-tu (le Prophète) à force de chagrin parce qu'ils ne sont pas croyants."
      },
      {
        "number": 3,
        "arabic": "إِنْ نَشَأْ نُنَزِّلْ عَلَيْهِمْ مِنَ السَّمَاءِ آيَةً فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ",
        "french": "Si Nous voulions, Nous ferions descendre du ciel un signe, devant lequel leurs nuques se courberaient en humilité."
      },
      {
        "number": 4,
        "arabic": "وَمَا يَأْتِيهِمْ مِنْ ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ",
        "french": "Mais il ne leur vient aucun rappel nouveau du Tout Miséricordieux sans qu'ils ne s'en détournent."
      },
      {
        "number": 5,
        "arabic": "فَقَدْ كَذَّبُوا فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ",
        "french": "Ils ont traité de mensonge. Il leur viendra des nouvelles de ce dont ils se moquaient."
      },
      {
        "number": 6,
        "arabic": "أَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنْبَتْنَا فِيهَا مِنْ كُلِّ زَوْجٍ كَرِيمٍ",
        "french": "N'ont-ils pas vu combien de générations, avant eux, Nous avons fait périr ?"
      },
      {
        "number": 7,
        "arabic": "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Il y a bien là un signe, mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 8,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      },
      {
        "number": 9,
        "arabic": "وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ",
        "french": "Et lorsque ton Seigneur appela Moïse : « Rends-toi auprès du peuple injuste,"
      },
      {
        "number": 10,
        "arabic": "قَوْمَ فِرْعَوْنَ ۚ أَلَا يَتَّقُونَ",
        "french": "au peuple de Pharaon. Ne craindront-ils pas ? »"
      },
      {
        "number": 11,
        "arabic": "قَالَ رَبِّ إِنِّي أَخَافُ أَنْ يُكَذِّبُونِي",
        "french": "Il dit : « Seigneur, je crains qu'ils ne me traitent de menteur."
      },
      {
        "number": 12,
        "arabic": "وَيَضِيقُ صَدْرِي وَلَا يَنْطَلِقُ لِسَانِي فَأَرْسِلْ إِلَىٰ هَارُونَ",
        "french": "et que ma poitrine ne se serre, et que ma langue ne soit déliée. Envoie donc Aaron."
      },
      {
        "number": 13,
        "arabic": "وَلَهُمْ عَلَيَّ ذَنْبٌ فَأَخَافُ أَنْ يَقْتُلُونِي",
        "french": "Ils ont un crime à me reprocher ; je crains donc qu'ils ne me tuent. »"
      },
      {
        "number": 14,
        "arabic": "قَالَ كَلَّا ۖ فَاذْهَبَا بِآيَاتِنَا ۖ إِنَّا مَعَكُمْ مُّسْتَمِعُونَ",
        "french": "Il dit : « Jamais ! Allez tous deux avec Nos signes. Nous sommes avec vous, à écouter."
      },
      {
        "number": 15,
        "arabic": "فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ",
        "french": "Rendez-vous donc chez Pharaon, et dites : « Nous sommes les messagers du Seigneur de l'univers."
      },
      {
        "number": 16,
        "arabic": "أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ",
        "french": "pour que tu renvoies les Enfants d'Israël avec nous. »"
      },
      {
        "number": 17,
        "arabic": "قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ",
        "french": "Il dit : « Ne t'avons-Nous pas élevé chez nous quand tu étais enfant ? Et n'as-tu pas demeuré des années de ta vie parmi nous ?"
      },
      {
        "number": 18,
        "arabic": "وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ وَأَنْتَ مِنَ الْكَافِرِينَ",
        "french": "Puis tu as commis le acte que tu as commis, tout en étant ingrat. »"
      },
      {
        "number": 19,
        "arabic": "قَالَ فَعَلْتُهَا إِذًا وَأَنَا مِنَ الضَّالِّينَ",
        "french": "Il dit : « Je l'ai fait alors que j'étais encore du nombre des égarés."
      },
      {
        "number": 20,
        "arabic": "فَفَرَرْتُ مِنْكُمْ لَمَّا خِفْتُكُمْ فَوَهَبَ لِي رَبِّي حُكْمًا وَجَعَلَنِي مِنَ الْمُرْسَلِينَ",
        "french": "Je me suis donc enfui de vous lorsque j'ai eu peur de vous. Puis, mon Seigneur m'a accordé la sagesse et m'a placé parmi les messagers."
      },
      {
        "number": 21,
        "arabic": "وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدْتَ بَنِي إِسْرَائِيلَ",
        "french": "Est-ce là un bienfait dont tu me rappelles, alors que tu as asservi les Enfants d'Israël ? »"
      },
      {
        "number": 22,
        "arabic": "قَالَ فِرْعَوْنُ وَمَا رَبُّ الْعَالَمِينَ",
        "french": "Pharaon dit : « Qu'est-ce que le Seigneur de l'univers ? »"
      }
    ],
    "words": [
      {
        "word": "آيَاتُ",
        "translit": "āyātu",
        "meaning": "les signes / les versets",
        "root": "آ - ي - ي",
        "rootMeaning": "signe / miracle",
        "rootColor": 1,
        "emoji": "✨",
        "funFactTitle": "La racine آ - ي - ي : signe / miracle",
        "funFact": "Le mot <em>āya</em> signifie à la fois « signe » et « verset » ! Chaque verset du Coran est comme un petit miracle qui prouve qu'Allah existe. Les miracles de Moïse — son bâton qui devient serpent — sont aussi des <strong>āyāt</strong>. Le mot <strong>muʾmina</strong> (croyant) vient de cette même racine : quelqu'un qui croit aux signes d'Allah ! ✨",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">آيَةً</span> (un signe) et <span class=\"arabic-inline\">مُؤْمِنِينَ</span> (croyants), au cœur de chaque page du Coran.",
        "related": "<span>آيَةً</span> (un signe), <span>مُؤْمِنينَ</span> (croyants), <span>مُعْجِزَةً</span> (un miracle)"
      },
      {
        "word": "نَادَىٰ",
        "translit": "nādā",
        "meaning": "Il a appelé",
        "root": "ن - د - و",
        "rootMeaning": "appeler / crier",
        "rootColor": 2,
        "emoji": "📢",
        "funFactTitle": "La racine ن - د - و : appeler / crier",
        "funFact": "Quand Allah <em>nādā</em> (appela) Moïse, ce n'était pas un appel téléphonique ! C'était un appel direct à son cœur. Le mot <strong>nidā'</strong> signifie « un appel » et <strong>mundā</strong> signifie « celui qui est appelé ». La racine donne aussi <strong>dīwān</strong> (une assemblée) : un lieu où les gens se rassemblent après un appel ! Quand la prière appelle, cours-y ! 📢",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">يُنَادُونَ</span> (ils appellent) et <span class=\"arabic-inline\">نِدَاءً</span> (un appel), partout dans le Coran.",
        "related": "<span>يُنَادُونَ</span> (ils appellent), <span>نِدَاءً</span> (un appel), <span>دِيوانًا</span> (une assemblée)"
      },
      {
        "word": "أَرْسِلْ",
        "translit": "arsil",
        "meaning": "envoie",
        "root": "ر - س - ل",
        "rootMeaning": "envoyer",
        "rootColor": 3,
        "emoji": "✉️",
        "funFactTitle": "La racine ر - س - ل : envoyer (déjà vue !)",
        "funFact": "Moïse demande à Allah d'<em>arsil</em> (envoyer) son frère Aaron pour l'aider. C'est comme demander à ton meilleur ami de t'aider pour un projet de groupe ! On l'avait vue avec <strong>al-mursalīn</strong> (les messagers) dans Al-Furqan. La racine ر - س - ل est l'une des plus importantes du Coran : chaque prophète est un « message ambulant » d'Allah ! ✉️",
        "relatedText": "Même racine que dans <span class=\"arabic-inline\">الْمُرْسَلِينَ</span> (les envoyés) de la sourate 25, toujours liée à la mission prophétique.",
        "related": "<span>رَسُولًا</span> (un messager), <span>الْمُرْسَلِينَ</span> (les envoyés), <span>رِسَالَةً</span> (un message)"
      },
      {
        "word": "الظَّالِمِينَ",
        "translit": "aẓ-ẓālimīn",
        "meaning": "les injustes",
        "root": "ظ - ل - م",
        "rootMeaning": "injustice / ténèbres",
        "rootColor": 4,
        "emoji": "🌑",
        "funFactTitle": "La racine ظ - ل - م : injustice / ténèbres",
        "funFact": "Pharaon est appelé <em>ẓālim</em> (injuste) car il a asservi tout un peuple ! En arabe, <strong>ẓulm</strong> signifie « injustice » mais aussi « obscurité » — comme si chaque acte injuste plongeait le monde dans le noir. Le mot <strong>ẓalām</strong> est l'injustice totale. La justice (ʿadl) est la lumière ; l'injustice est l'obscurité ! Pharaon préférait l'ombre à la lumière. 🌑",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">ظُلْمًا</span> (une injustice) et <span class=\"arabic-inline\">لَا تَظْلِمُوا</span> (ne soyez pas injustes), omniprésente dans le Coran.",
        "related": "<span>ظُلْمًا</span> (une injustice), <span>ظَلَامًا</span> (une obscurité), <span>مَظْلُومًا</span> (un opprimé)"
      },
      {
        "word": "رَبِّ",
        "translit": "rabbi",
        "meaning": "mon Seigneur",
        "root": "ر - ب - ب",
        "rootMeaning": "élever / seigneur",
        "rootColor": 5,
        "emoji": "🏰",
        "funFactTitle": "La racine ر - ب - ب : élever / seigneur",
        "funFact": "Le mot <em>Rabb</em> ne signifie pas seulement « Seigneur » ! Il veut dire aussi « Celui qui élève et prend soin ». C'est comme le meilleur parent de l'univers qui s'occupe de tout le monde. Le mot <strong>tarbiya</strong> signifie « l'éducation » — ce que Rabb fait pour nous chaque jour. Le mot <strong>rabīʿ</strong> (printemps) vient aussi de cette racine : la saison où Allah fait grandir toute la nature ! 🏰",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">رَبُّ الْعَالَمِينَ</span> (Seigneur des mondes) et <span class=\"arabic-inline\">رَبِّي</span> (mon Seigneur), les mots les plus fréquents du Coran.",
        "related": "<span>رَبُ الْعَالَمِينَ</span> (Seigneur des mondes), <span>تَرْبِيَةً</span> (une éducation), <span>رَبِيعًا</span> (un printemps)"
      }
    ],
    "quiz": [
      {
        "question": "Qui est le peuple injuste auquel Moïse est envoyé ?",
        "options": [
          "Les Aad",
          "Le peuple de Pharaon",
          "Les Thamud",
          "Le peuple de Noé"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">آيَاتُ</span> (āyātu) ?",
        "options": [
          "les prières",
          "les histoires",
          "les signes / les versets",
          "les rois"
        ],
        "correct": 2
      },
      {
        "question": "Quelle racine donne le mot « Seigneur » (Rabb) ?",
        "options": [
          "ر - س - ل",
          "ن - د - و",
          "آ - ي - ي",
          "ر - ب - ب"
        ],
        "correct": 3
      },
      {
        "question": "Que demande Moïse à Allah dans le verset 13 ?",
        "options": [
          "De lui donner des richesses",
          "D'envoyer Aaron avec lui",
          "De détruire Pharaon",
          "De lui donner un royaume"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-01 ! Tu as découvert les racines <strong>آ - ي - ي, ن - د - و, ر - س - ل, ظ - ل - م, ر - ب - ب</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-02",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "Le miracle de Moïse et la réponse de Pharaon",
    "shortTitle": "Ash-Shu'ara (23-40)",
    "subtitle": "Moïse lance son défi à Pharaon avec ses miracles ! Les magiciens se prosternent pour Allah !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 23,
        "arabic": "قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ إِنْ كُنْتُمْ مُّوقِنِينَ",
        "french": "Il dit : « Le Seigneur des cieux et de la terre et de ce qui existe entre eux, si vous êtes croyants. »"
      },
      {
        "number": 24,
        "arabic": "قَالَ لِمَنْ حَوْلَهُ أَلَا تَسْتَمِعُونَ",
        "french": "Il dit à ceux qui l'entouraient : « N'entendez-vous pas ? »"
      },
      {
        "number": 25,
        "arabic": "قَالَ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ",
        "french": "Il dit : « Votre Seigneur, et le Seigneur de vos ancêtres. »"
      },
      {
        "number": 26,
        "arabic": "قَالَ إِنَّ رَسُولَكُمُ الَّذِي أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌ",
        "french": "Il dit : « Vraiment, le messager qui vous a été envoyé est un fou. »"
      },
      {
        "number": 27,
        "arabic": "قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا إِنْ كُنْتُمْ تَعْقِلُونَ",
        "french": "Il dit : « Le Seigneur du Levant et du Couchant et de ce qui est entre les deux, si vous comprenez ! »"
      },
      {
        "number": 28,
        "arabic": "قَالَ لَئِنِ اتَّخَذْتَ إِلَٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ",
        "french": "Il dit : « Si tu prends une autre divinité que moi, je te ferai certes mettre parmi les prisonniers. »"
      },
      {
        "number": 29,
        "arabic": "قَالَ أَوَلَوْ جِئْتُكَ بِشَيْءٍ مُّبِينٍ",
        "french": "Il dit : « Même si je t'apportais une chose évidente ? »"
      },
      {
        "number": 30,
        "arabic": "قَالَ فَأْتِ بِهِ إِنْ كُنْتَ مِنَ الصَّادِقِينَ",
        "french": "Il dit : « Apporte-la donc, si tu es du nombre des véridiques. »"
      },
      {
        "number": 31,
        "arabic": "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ",
        "french": "Il jeta donc son bâton, et le voici devenu un serpent manifeste."
      },
      {
        "number": 32,
        "arabic": "وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ",
        "french": "Et il tira sa main, et voici qu'elle était blanche (étincelante) pour ceux qui regardaient."
      },
      {
        "number": 33,
        "arabic": "قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هَٰذَا لَسَاحِرٌ عَلِيمٌ",
        "french": "Il dit à l'entourage : « Voilà certes un magicien savant."
      },
      {
        "number": 34,
        "arabic": "يُرِيدُ أَنْ يُخْرِجَكُمْ مِّنْ أَرْضِكُمْ بِسِحْرِهِ فَمَاذَا تَأْمُرُونَ",
        "french": "Il veut vous expulser de votre terre par sa magie. Que commandez-vous ? »"
      },
      {
        "number": 35,
        "arabic": "قَالُوا أَرْجِهْ وَأَخَاهُ وَابْعَثْ فِي الْمَدَائِنِ حَاشِرِينَ",
        "french": "Ils dirent : « Remets-les, lui et son frère, à plus tard, et envoie des rassembleurs dans les villes."
      },
      {
        "number": 36,
        "arabic": "يَأْتُوكَ بِكُلِّ سَاحِرٍ عَلِيمٍ",
        "french": "qu'ils t'amènent tout magicien savant. »"
      },
      {
        "number": 37,
        "arabic": "فَجُمِعَ السَّحَرَةُ لِمِيقَاتِ يَوْمٍ مَّعْلُومٍ",
        "french": "Ainsi les magiciens furent rassemblés pour le rendez-vous d'un jour bien connu."
      },
      {
        "number": 38,
        "arabic": "وَقِيلَ لِلنَّاسِ هَلْ أَنتُمْ مُّجْتَمِعُونَ",
        "french": "Et il fut dit aux gens : « Vous rassemblerez-vous ? »"
      },
      {
        "number": 39,
        "arabic": "لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِنْ كَانُوا هُمُ الْغَالِبِينَ",
        "french": "Peut-être suivrons-nous les magiciens, si ce sont eux qui gagnent. »"
      },
      {
        "number": 40,
        "arabic": "فَلَمَّا جَاءَ السَّحَرَةُ قَالُوا لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِنْ كُنَّا نَحْنُ الْغَالِبِينَ",
        "french": "Puis, lorsque les magiciens arrivèrent, ils dirent à Pharaon : « Y aura-t-il vraiment une récompense pour nous si nous sommes les vainqueurs ? »"
      }
    ],
    "words": [
      {
        "word": "عَصَاهُ",
        "translit": "ʿaṣāhu",
        "meaning": "son bâton",
        "root": "ع - ص - ي",
        "rootMeaning": "appuyer / soutenir",
        "rootColor": 1,
        "emoji": "🐍",
        "funFactTitle": "La racine ع - ص - ي : appuyer / soutenir",
        "funFact": "Le bâton de Moïse (<em>ʿaṣā</em>) s'est transformé en serpent devant tout le monde ! Le mot <strong>ʿaṣā</strong> vient d'une racine qui veut dire « soutenir » : le bâton <strong>soutient</strong> la marche, et la vérité <strong>soutient</strong> le croyant. C'est comme une canne magique qui, entre les mains d'un prophète, montre la puissance d'Allah ! Le mot <strong>taʿṣiya</strong> signifie « soutien » : Allah est le meilleur soutien ! 🐍",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">يَعْصُونَ</span> (ils désobéissent — opposé !) et <span class=\"arabic-inline\">مَعْصِيَةٍ</span> (désobéissance), la même racine dans les deux sens.",
        "related": "<span>مَعْصِيَةِ</span> (une désobéissance), <span>يَعْصُونَ</span> (ils désobéissent), <span>عِصْيَانًا</span> (la rébellion)"
      },
      {
        "word": "بَيْضَاءُ",
        "translit": "bayḍā'u",
        "meaning": "blanche (étincelante)",
        "root": "ب - ي - ض",
        "rootMeaning": "blancheur",
        "rootColor": 2,
        "emoji": "✋",
        "funFactTitle": "La racine ب - ي - ض : blancheur",
        "funFact": "Quand Moïse a tiré sa main, elle est devenue <em>bayḍā'</em> (blanche comme la lumière) ! C'est un miracle : pas de maladie, juste de la lumière pure dans sa main. Le mot <strong>bayāḍ</strong> signifie « blancheur » et <strong>abyaḍ</strong> signifie « le plus blanc ». Dans le Coran, le blanc représente la pureté et la paix. Le mot <strong>bayṭ</strong> (maison) vient aussi de cette racine : un endroit pur et protégé ! ✋",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">الْبَيْضَاءِ</span> (la blanche) et <span class=\"arabic-inline\">أَبْيَضَ</span> (blanc), souvent liée à la pureté divine.",
        "related": "<span>أَبْيَضَ</span> (blanc), <span>بَيَاضًا</span> (blancheur), <span>تَبْيِيضًا</span> (blanchiment)"
      },
      {
        "word": "السَّمَاوَاتِ",
        "translit": "as-samāwāti",
        "meaning": "les cieux",
        "root": "س - م - و",
        "rootMeaning": "être élevé",
        "rootColor": 3,
        "emoji": "🌌",
        "funFactTitle": "La racine س - م - و : être élevé",
        "funFact": "Les cieux (<em>samāwāt</em>) sont au-dessus de nous, immensément hauts ! La racine <strong>s-m-w</strong> veut dire « ce qui est élevé ». Le mot <strong>ism</strong> (nom) vient de là : un nom est ce qui « élève » et identifie une chose. Le mot <strong>samā'</strong> (ciel) et <strong>sāmiʿ</strong> (celui qui entend) partagent cette racine : quand tu lèves les yeux au ciel, tu te rapproches d'Allah ! 🌌",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">اسْمُهُ</span> (Son nom) et <span class=\"arabic-inline\">سَمِيعٌ</span> (Celui qui entend), au cœur du Coran.",
        "related": "<span>اسْمُهُ</span> (Son nom), <span>سَمِيعٌ</span> (Celui qui entend), <span>سَمَاءً</span> (un ciel)"
      },
      {
        "word": "سَاحِرٍ",
        "translit": "sāḥirin",
        "meaning": "un magicien",
        "root": "س - ح - ر",
        "rootMeaning": "magie / tromperie",
        "rootColor": 4,
        "emoji": "🎩",
        "funFactTitle": "La racine س - ح - ر : magie / tromperie",
        "funFact": "Pharaon appelle Moïse <em>sāḥir</em> (magicien) parce qu'il ne comprend pas la différence entre la vraie magie d'Allah et les tours de passe-passe ! Le mot <strong>siḥr</strong> signifie « magie » et <strong>sahara</strong> signifie « ensorceler ». Mais la vraie différence : les magiciens utilisent des illusions, Moïse utilise la <strong>puissance d'Allah</strong> ! À la fin, même les magiciens de Pharaon ont compris ! 🎩",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">سِحْرٌ عَظِيمٌ</span> (une grande magie) et <span class=\"arabic-inline\">مُسَحَّرُونَ</span> (ensorcelés), souvent liée à l'illusion.",
        "related": "<span>سِحْرٌ</span> (une magie), <span>مُسَحَّرُونَ</span> (ensorcelés), <span>سَاحِرًا</span> (un magicien)"
      },
      {
        "word": "أَجْرًا",
        "translit": "ajran",
        "meaning": "une récompense",
        "root": "أ - ج - ر",
        "rootMeaning": "récompense / salaire",
        "rootColor": 5,
        "emoji": "🏆",
        "funFactTitle": "La racine أ - ج - ر : récompense / salaire",
        "funFact": "Les magiciens demandent une <em>ajr</em> (récompense) s'ils gagnent le défi ! En arabe, <strong>ajr</strong> signifie « récompense » comme quand tu reçois un prix pour ton travail. Le mot <strong>ujra</strong> est le salaire d'un employé. Allah donne la meilleure <strong>ajr</strong> — le Paradis ! Même les magiciens finissent par comprendre que la vraie récompense est auprès d'Allah. 🏆",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">أَجْرَ عَظِيمٍ</span> (une immense récompense) et <span class=\"arabic-inline\">يُؤْجَرُ</span> (il est récompensé), très fréquent dans le Coran.",
        "related": "<span>أَجْرَ عَظِيمٍ</span> (une immense récompense), <span>يُؤْجَرُونَ</span> (ils sont récompensés), <span>أُجُورًا</span> (des salaires)"
      }
    ],
    "quiz": [
      {
        "question": "Que devient le bâton de Moïse quand il le jette ?",
        "options": [
          "Un oiseau",
          "Un serpent",
          "Un éclair",
          "Une étoile"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">بَيْضَاءُ</span> (bayḍā'u) ?",
        "options": [
          "noire",
          "rouge",
          "blanche (étincelante)",
          "verte"
        ],
        "correct": 2
      },
      {
        "question": "Comment Pharaon appelle-t-il Moïse ?",
        "options": [
          "Un prophète",
          "Un savant",
          "Un magicien",
          "Un roi"
        ],
        "correct": 2
      },
      {
        "question": "Que demandent les magiciens à Pharaon avant le défi ?",
        "options": [
          "Un palais",
          "Une récompense",
          "Un royaume",
          "Des armes"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-02 ! Tu as découvert les racines <strong>ع - ص - ي, ب - ي - ض, س - م - و, س - ح - ر, أ - ج - ر</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-03",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "Les magiciens se prosternent et la punition de Pharaon",
    "shortTitle": "Ash-Shu'ara (41-55)",
    "subtitle": "Les magiciens perdent le défi mais gagnent la foi ! Pharaon est puni et la mer s'ouvre pour Moïse !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 41,
        "arabic": "قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَّمِنَ الْمُقَرَّبِينَ",
        "french": "Il dit : « Oui, et vous serez alors du nombre de mes proches."
      },
      {
        "number": 42,
        "arabic": "قَالَ لَهُمْ مُوسَىٰ أَلْقُوا مَا أَنتُم مُّلْقُونَ",
        "french": "Moïse leur dit : « Jetez ce que vous avez à jeter. »"
      },
      {
        "number": 43,
        "arabic": "فَأَلْقَوْا حِبَالَهُمْ وَعِصِيَّهُمْ وَقَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ الْغَالِبُونَ",
        "french": "Ils jetèrent donc leurs cordes et leurs bâtons et dirent : « Par la puissance de Pharaon ! ... C'est nous qui serons les vainqueurs. »"
      },
      {
        "number": 44,
        "arabic": "فَأَلْقَىٰ مُوسَىٰ عَصَاهُ فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ",
        "french": "Puis Moïse jeta son bâton, et voici qu'il engloutit ce qu'ils avaient fabriqué."
      },
      {
        "number": 45,
        "arabic": "فَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ",
        "french": "Les magiciens se jetèrent prosternés."
      },
      {
        "number": 46,
        "arabic": "قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ",
        "french": "Ils dirent : « Nous croyons au Seigneur de l'univers."
      },
      {
        "number": 47,
        "arabic": "رَبِّ مُوسَىٰ وَهَارُونَ",
        "french": "Le Seigneur de Moïse et d'Aaron. »"
      },
      {
        "number": 48,
        "arabic": "قَالَ آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ ۖ إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ ۖ فَلَسَوْفَ تَعْلَمُونَ ۖ لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُمْ مِّنْ خِلَافٍ وَلَأُصَلِّبَنَّكُمْ أَجْمَعِينَ",
        "french": "Il dit : « Avez-vous cru en lui avant que je ne vous y autorise ? C'est lui votre maître qui vous a enseigné la magie. Vous saurez ! Je vous couperai sûrement les mains et les jambes en croix, et je vous crucifierai tous. »"
      },
      {
        "number": 49,
        "arabic": "قَالُوا لَا ضَرَرَ ۖ إِنَّا إِلَىٰ رَبِّنَا مُنْقَلِبُونَ",
        "french": "Ils dirent : « Aucun mal ! Car c'est vers notre Seigneur que nous retournerons."
      },
      {
        "number": 50,
        "arabic": "إِنَّا نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا أَنْ كُنَّا أَوَّلَ الْمُؤْمِنِينَ",
        "french": "Nous espérons que notre Seigneur nous pardonnera nos fautes, puisque nous sommes les premiers à croire. »"
      },
      {
        "number": 51,
        "arabic": "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ أَسْرِ بِعِبَادِي ۖ إِنَّكُمْ مُّتَّبَعُونَ",
        "french": "Et Nous révélâmes à Moïse : « Pars de nuit avec Mes serviteurs, car vous serez poursuivis. »"
      },
      {
        "number": 52,
        "arabic": "فَأَرْسَلَ فِرْعَوْنُ فِي الْمَدَائِنِ حَاشِرِينَ",
        "french": "Alors Pharaon envoya des rassembleurs dans les villes."
      },
      {
        "number": 53,
        "arabic": "إِنَّ هَٰؤُلَاءِ لَشِرْذِمَةٌ قَلِيلُونَ",
        "french": "« Ce sont en fait une petite bande."
      },
      {
        "number": 54,
        "arabic": "وَإِنَّهُمْ لَنَا لَغَائِظُونَ",
        "french": "Et ils nous irritent."
      },
      {
        "number": 55,
        "arabic": "وَإِنَّا لَجَمِيعٌ حَاذِرُونَ",
        "french": "Et nous sommes tous prêts et sur nos gardes. »"
      }
    ],
    "words": [
      {
        "word": "تَلْقَفُ",
        "translit": "taliqafu",
        "meaning": "il engloutit",
        "root": "ل - ق - ف",
        "rootMeaning": "avaler / engloutir",
        "rootColor": 1,
        "emoji": "🐍",
        "funFactTitle": "La racine ل - ق - ف : avaler / engloutir",
        "funFact": "Le bâton de Moïse <em>yaliqafu</em> (engloutit) tout ce que les magiciens avaient jeté ! C'est comme un aspirateur magique qui avale toutes les illusions d'un coup. Le mot <strong>laqf</strong> signifie « dévorer » et <strong>mutalaqif</strong> signifie « ce qui avale ». Le bâton de Moïse ne se contentait pas de gagner : il a <strong>absorbé</strong> la magie des ennemis ! 🐍",
        "relatedText": "On la retrouve rarement ailleurs mais le concept de l'engloutissement est unique dans ce récit miraculeux.",
        "related": "<span>لَقْفًا</span> (une déglutition), <span>يَلْقَفُ</span> (il avale), <span>مُتَلَقِّفًا</span> (avalateur)"
      },
      {
        "word": "يَغْفِرَ",
        "translit": "yaghfira",
        "meaning": "Il pardonne",
        "root": "غ - ف - ر",
        "rootMeaning": "pardonner / couvrir",
        "rootColor": 2,
        "emoji": "💚",
        "funFactTitle": "La racine غ - ف - ر : pardonner / couvrir",
        "funFact": "Le mot <em>ghafara</em> veut dire « pardonner » mais littéralement « couvrir » (comme un plaid sur une erreur) ! Quand Allah pardonne, Il <strong>cachent tes fautes</strong> pour ne plus les voir. Le mot <strong>ghufrān</strong> signifie « le pardon total » et <strong>maghfira</strong> signifie « la protection par le pardon ». Al-Ghaffūr et Al-Ghafūr sont deux beaux noms d'Allah : Il pardonne encore et encore ! 💚",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">الْغَفُورِ</span> (le Pardonneur) et <span class=\"arabic-inline\">غَفِيرًا</span> (Celui qui pardonne beaucoup), noms d'Allah.",
        "related": "<span>الْغَفُورُ</span> (le Pardonneur), <span>غَفِيرًا</span> (Celui qui pardonne beaucoup), <span>مَغْفِرَةً</span> (un pardon divin)"
      },
      {
        "word": "حَاشِرِينَ",
        "translit": "ḥāshirīn",
        "meaning": "rassembleurs",
        "root": "ح - ش - ر",
        "rootMeaning": "rassembler",
        "rootColor": 3,
        "emoji": "📢",
        "funFactTitle": "La racine ح - ش - ر : rassembler",
        "funFact": "Pharaon envoie des <em>ḥāshirīn</em> (rassembleurs) dans toutes les villes pour capturer Moïse ! Le mot <strong>ḥashr</strong> signifie « le rassemblement » et le Jour du Jugement est appelé <strong>Yawm al-Ḥashr</strong> (le Jour du Rassemblement). C'est comme un appel général où tout le monde doit se présenter : personnes, animaux, djinns — tout le monde ! 🔔",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">يَوْمَ الْحَشْرِ</span> (le Jour du Rassemblement) et <span class=\"arabic-inline\">يُحْشَرُونَ</span> (ils seront rassemblés).",
        "related": "<span>يَوْمَ الْحَشْرِ</span> (le Jour du Rassemblement), <span>يُحْشَرُونَ</span> (ils seront rassemblés), <span>حَشْرًا</span> (un rassemblement)"
      },
      {
        "word": "أَسْرِ",
        "translit": "isri",
        "meaning": "pars de nuit",
        "root": "س - ر - ر",
        "rootMeaning": "nuit / secret",
        "rootColor": 4,
        "emoji": "🌙",
        "funFactTitle": "La racine س - ر - ر : nuit / secret",
        "funFact": "Allah dit à Moïse : <em>isri</em> (pars de nuit) ! La racine s-r-r donne à la fois <strong>l'obscurité de la nuit</strong> et <strong>le secret</strong>. C'est logique : la nuit est le moment des secrets ! Le mot <strong>sirr</strong> signifie « secret » et <strong>sarrāj</strong> signifie « celui qui voyage de nuit ». Moïse a fui dans le secret de la nuit, protégé par l'obscurité elle-même ! 🌙",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">السِّرِّ</span> (le secret) et <span class=\"arabic-inline\">أَسْرَارِهِمْ</span> (leurs secrets), omniprésente dans le Coran.",
        "related": "<span>السِرَّ</span> (le secret), <span>أَسْرَارِهِمْ</span> (leurs secrets), <span>سَارَّ</span> (il a murmuré)"
      },
      {
        "word": "يَأْفِكُونَ",
        "translit": "ya'fikūn",
        "meaning": "ils fabriquent (des mensonges)",
        "root": "أ - ف - ك",
        "rootMeaning": "mentir / tromper",
        "rootColor": 5,
        "emoji": "🎭",
        "funFactTitle": "La racine أ - ف - ك : mentir / tromper",
        "funFact": "Les magiciens <em>ya'fikūn</em> (fabriquent) des illusions — du faux qui ressemble à du vrai ! Le mot <strong>ifk</strong> signifie « mensonge » et <strong>mū'fik</strong> signifie « menteur ». C'est comme un sculpteur qui crée des faux objets. Le Coran utilise cette racine pour décrire ceux qui inventent des faux dieux : ils sculptent des mensonges avec leurs propres mains ! 🎭",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">إِفْكٍ</span> (un mensonge) et <span class=\"arabic-inline\">يَأْفِكُونَ</span> (ils inventent), toujours lié à la tromperie.",
        "related": "<span>إِفْكٍ</span> (un mensonge), <span>يَأْفِكُونَ</span> (ils inventent), <span>مُؤْتَفِكَةً</span> (renversée)"
      }
    ],
    "quiz": [
      {
        "question": "Que font les magiciens après avoir perdu le défi ?",
        "options": [
          "Ils s'enfuient",
          "Ils se prosternent",
          "Ils demandent pardon à Pharaon",
          "Ils se battent"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine غ - ف - ر ?",
        "options": [
          "rassembler",
          "pardonner / couvrir",
          "avaler",
          "mentir"
        ],
        "correct": 1
      },
      {
        "question": "Quand Allah dit à Moïse « pars de nuit », quel mot arabe utilise-t-Il ?",
        "options": [
          "انطلق",
          "أسر",
          "اهرب",
          "امض"
        ],
        "correct": 1
      },
      {
        "question": "Comment le bâton de Moïse bat-il la magie des magiciens ?",
        "options": [
          "Il brille très fort",
          "Il devient invisible",
          "Il engloutit leurs cordes et bâtons",
          "Il les effraie"
        ],
        "correct": 2
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-03 ! Tu as découvert les racines <strong>ل - ق - ف, غ - ف - ر, ح - ش - ر, س - ر - ر, أ - ف - ك</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-04",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "La traversée de la mer et le châtiment de Pharaon",
    "shortTitle": "Ash-Shu'ara (56-75)",
    "subtitle": "La mer s'ouvre, Pharaon noyé, puis les histoires d'Abraham et de Noé commencent !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 56,
        "arabic": "فَأَخْرَجْنَاهُمْ مِنْ جَنَّاتٍ وَعُيُونٍ",
        "french": "Nous les fîmes donc sortir des jardins et des sources."
      },
      {
        "number": 57,
        "arabic": "وَكُنُوزٍ وَمَقَامٍ كَرِيمٍ",
        "french": "des trésors et d'un séjour noble."
      },
      {
        "number": 58,
        "arabic": "كَذَٰلِكَ وَأَوْرَثْنَاهَا بَنِي إِسْرَائِيلَ",
        "french": "Ainsi. Et Nous les fîmes hériter aux Enfants d'Israël."
      },
      {
        "number": 59,
        "arabic": "فَأَتْبَعُوهُمْ مُشْرِقِينَ",
        "french": "Ils les poursuivirent au lever du soleil."
      },
      {
        "number": 60,
        "arabic": "فَلَمَّا تَرَاءَوُا الْجَمْعَانِ قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ",
        "french": "Puis, lorsque les deux groupes s'aperçurent, les compagnons de Moïse dirent : « Nous allons être rejoints. »"
      },
      {
        "number": 61,
        "arabic": "قَالَ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ",
        "french": "Il dit : « Jamais ! Mon Seigneur est avec moi et Il me guidera. »"
      },
      {
        "number": 62,
        "arabic": "فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِبْ بِعَصَاكَ الْبَحْرَ ۖ فَانْفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ",
        "french": "Nous révélâmes à Moïse : « Frappe la mer de ton bâton. » Elle se fendit alors, et chaque versant fut comme une immense montagne."
      },
      {
        "number": 63,
        "arabic": "وَأَزْلَفْنَا ثَمَّ الْآخَرِينَ",
        "french": "Et Nous fîmes approcher les autres."
      },
      {
        "number": 64,
        "arabic": "وَأَنْجَيْنَا مُوسَىٰ وَمَنْ مَعَهُ أَجْمَعِينَ",
        "french": "Et Nous sauvâmes Moïse et tous ceux qui étaient avec lui."
      },
      {
        "number": 65,
        "arabic": "ثُمَّ أَغْرَقْنَا الْآخَرِينَ",
        "french": "Ensuite, Nous noyâmes les autres."
      },
      {
        "number": 66,
        "arabic": "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Il y a certes là un signe. Mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 67,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      },
      {
        "number": 68,
        "arabic": "وَاتْلُ عَلَيْهِمْ نَبَأَ إِبْرَاهِيمَ",
        "french": "Et raconte-leur l'histoire d'Abraham."
      },
      {
        "number": 69,
        "arabic": "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَا تَعْبُدُونَ",
        "french": "Quand il dit à son père et à son peuple : « Qu'adorez-vous ? »"
      },
      {
        "number": 70,
        "arabic": "قَالُوا نَعْبُدُ أَصْنَامًا فَنَظَلُّ لَهَا عَاكِفِينَ",
        "french": "Ils dirent : « Nous adorons des idoles et nous leur restons attachés. »"
      },
      {
        "number": 71,
        "arabic": "قَالَ هَلْ يَسْمَعُونَكُمْ إِذْ تَدْعُونَ",
        "french": "Il dit : « Entendent-ils vos invocations quand vous les appelez ? »"
      },
      {
        "number": 72,
        "arabic": "أَوْ يَنْفَعُونَكُمْ أَوْ يَضُرُّونَ",
        "french": "ou vous profitent-elles ? ou vous nuisent-elles ? »"
      },
      {
        "number": 73,
        "arabic": "قَالُوا بَلْ وَجَدْنَا آبَاءَنَا كَذَٰلِكَ يَفْعَلُونَ",
        "french": "Ils dirent : « Non, mais nous avons trouvé nos ancêtres agissant ainsi. »"
      },
      {
        "number": 74,
        "arabic": "قَالَ أَفَرَأَيْتُمْ مَا كُنْتُمْ تَعْبُدُونَ",
        "french": "Il dit : « avez-vous vu ce que vous adorez,"
      },
      {
        "number": 75,
        "arabic": "أَنْتُمْ وَآبَاؤُكُمُ الْأَقْدَمُونَ",
        "french": "vous et vos ancêtres les plus anciens ?"
      }
    ],
    "words": [
      {
        "word": "انْفَلَقَ",
        "translit": "inflaqā",
        "meaning": "elle se fendit",
        "root": "ف - ل - ق",
        "rootMeaning": "fendre / ouvrir",
        "rootColor": 1,
        "emoji": "🌊",
        "funFactTitle": "La racine ف - ل - ق : fendre / ouvrir",
        "funFact": "La mer s'est <em>inflaqat</em> (fendue en deux) pour Moïse ! C'est le même miracle que dans Al-Furqan : la racine <strong>ف - ل - ق</strong> donne « Furqan » (le Livre qui sépare). Ici, la mer se sépare en deux murailles d'eau ! Le mot <strong>falq</strong> signifie « une fente » et <strong>fāliq</strong> signifie « celui qui fend ». Imagine une mer géante qui s'ouvre comme un livre ! 🌊",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">فَالِقُ الْحَبِّ وَالنَّوَىٰ</span> (Celui qui fend la graine et le noyau) et <span class=\"arabic-inline\">الْفُرْقَانَ</span> (le Discernement).",
        "related": "<span>فَالِقُ</span> (Celui qui fend), <span>فَلْقًا</span> (une fente), <span>الْفُرْقَانَ</span> (le Discernement)"
      },
      {
        "word": "كُنُوزٍ",
        "translit": "kunūzin",
        "meaning": "des trésors",
        "root": "ك - ن - ز",
        "rootMeaning": "entasser / trésor",
        "rootColor": 2,
        "emoji": "💎",
        "funFactTitle": "La racine ك - ن - ز : entasser / trésor",
        "funFact": "Les <em>kunūz</em> (trésors) de Pharaon étaient immenses, mais ils n'ont servi à RIEN quand la mer s'est refermée ! Le mot <strong>kanz</strong> signifie « trésor caché ». Le Coran dit souvent que les vrais trésors ne sont pas l'or ou l'argent, mais la science et la foi. Allah a des trésors inépuisables au ciel. Un vrai trésor, c'est un cœur rempli de lumière ! 💎",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">كَنْزًا</span> (un trésor) et <span class=\"arabic-inline\">كَنَائِزَ</span> (des trésors), évoquant les richesses éphémères.",
        "related": "<span>كَنْزًا</span> (un trésor), <span>كَنَائِزَ</span> (des trésors), <span>اكْتَنَزَ</span> (il a thésaurisé)"
      },
      {
        "word": "أَصْنَامًا",
        "translit": "aṣnāman",
        "meaning": "des idoles",
        "root": "ص - ن - م",
        "rootMeaning": "sculpter / idole",
        "rootColor": 3,
        "emoji": "🗿",
        "funFactTitle": "La racine ص - ن - م : sculpter / idole",
        "funFact": "Les idoles (<em>aṣnām</em>) sont des statues que les gens adoraient au lieu d'Allah. Le mot <strong>ṣanam</strong> vient d'une racine qui veut dire « sculpter » : les idoles sont faites de main d'homme ! Abraham les a détruites avec intelligence. Comment peut-on adorer quelque chose qu'on a fabriqué soi-même ? C'est comme parler à un robot et attendre qu'il te réponde ! 🗿",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">صَنَمًا</span> (une idole) et dans le récit d'Abraham brisant les idoles de son peuple.",
        "related": "<span>صَنَمًا</span> (une idole), <span>تَنْحِتُونَ</span> (vous sculptez), <span>أَصْنَامًا</span> (des idoles)"
      },
      {
        "word": "يَنْفَعُونَ",
        "translit": "yanfaʿūn",
        "meaning": "ils profitent / ils aident",
        "root": "ن - ف - ع",
        "rootMeaning": "être utile",
        "rootColor": 4,
        "emoji": "🤝",
        "funFactTitle": "La racine ن - ف - ع : être utile",
        "funFact": "Abraham demande : est-ce que vos idoles vous <em>yanfaʿūn</em> (sont utiles) ? Bien sûr que NON ! Le mot <strong>nafʿ</strong> signifie « utilité » et <strong>nāfiʿ</strong> signifie « ce qui est bénéfique ». Le Coran dit que les fausses idoles ne peuvent ni aider ni nuire. Seul Allah est vraiment <strong>nāfiʿ</strong>. C'est comme essayer de boire dans une tasse percée : ça ne marche pas ! 🤝",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">نَافِعًا</span> (utile) et <span class=\"arabic-inline\">مَنْفَعَةً</span> (un bénéfice), très fréquent dans le Coran.",
        "related": "<span>نَافِعًا</span> (utile), <span>مَنْفَعَةً</span> (un bénéfice), <span>يَنْفَعُ</span> (il est utile)"
      },
      {
        "word": "وَجَدْنَا",
        "translit": "wajadnā",
        "meaning": "nous avons trouvé",
        "root": "و - ج - د",
        "rootMeaning": "trouver",
        "rootColor": 5,
        "emoji": "🔍",
        "funFactTitle": "La racine و - ج - د : trouver",
        "funFact": "Le peuple d'Abraham dit : « Nous avons <em>wajadnā</em> (trouvé) nos ancêtres faisant ainsi. » Ils copient sans réfléchir, comme un perroquet ! Le mot <strong>wajd</strong> signifie « trouvaille » et <strong>wājid</strong> signifie « celui qui trouve ». Mais en arabe, <strong>wajd</strong> signifie aussi « passion » : quand tu trouves quelque chose que tu aimes vraiment ! Cherche la vérité par toi-même, ne copie pas aveuglément ! 🔍",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">وَجَدْتُ</span> (j'ai trouvé) et <span class=\"arabic-inline\">يَجِدُ</span> (il trouve), omniprésente dans le Coran.",
        "related": "<span>وَجَدتُ</span> (j’ai trouvé), <span>يَجِدُ</span> (il trouve), <span>وَجْدًا</span> (une passion)"
      }
    ],
    "quiz": [
      {
        "question": "Que se passe-t-il quand Moïse frappe la mer avec son bâton ?",
        "options": [
          "Elle devient gelée",
          "Elle se fend en deux",
          "Elle disparaît",
          "Elle se transforme en terre"
        ],
        "correct": 1
      },
      {
        "question": "Quelle racine signifie « fendre / ouvrir » ?",
        "options": [
          "ك - ن - ز",
          "ص - ن - م",
          "و - ج - د",
          "ف - ل - ق"
        ],
        "correct": 3
      },
      {
        "question": "Pourquoi le peuple d'Abraham adorait-il des idoles ?",
        "options": [
          "Parce qu'elles les aidaient",
          "Parce qu'ils avaient trouvé leurs ancêtres faisant ainsi",
          "Parce qu'Abraham leur avait dit de le faire",
          "Parce qu'elles parlaient"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">كُنُوزٍ</span> (kunūzin) ?",
        "options": [
          "des armées",
          "des miracles",
          "des trésors",
          "des prières"
        ],
        "correct": 2
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-04 ! Tu as découvert les racines <strong>ف - ل - ق, ك - ن - ز, ص - ن - م, ن - ف - ع, و - ج - د</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-05",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "Abraham brise les idoles, Noé et son peuple",
    "shortTitle": "Ash-Shu'ara (76-102)",
    "subtitle": "Abraham détruit les fausses idoles, Noé appelle son peuple pendant 950 ans, et tous sont rejetés !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 76,
        "arabic": "فَرَاغَ عَلَيْهِمْ ضَرْبًا بِالْيَمِينِ",
        "french": "Il se tourna discrètement vers leurs divinités et dit : « Ne mangez-vous pas ?"
      },
      {
        "number": 77,
        "arabic": "قَالَ أَلَا تَأْكُلُونَ",
        "french": "Pourquoi ne mangez-vous pas ?"
      },
      {
        "number": 78,
        "arabic": "مَا لَكُمْ لَا تَنْطِقُونَ",
        "french": "Qu'avez-vous à ne pas parler ? »"
      },
      {
        "number": 79,
        "arabic": "فَرَاغَ عَلَيْهِمْ ضَرْبًا بِالْيَمِينِ",
        "french": "Puis il se dirigea vers elles, les frappant de sa main droite."
      },
      {
        "number": 80,
        "arabic": "فَأَقْبَلُوا إِلَيْهِ يَزْفُّونَ",
        "french": "Et ils vinrent à lui en courant."
      },
      {
        "number": 81,
        "arabic": "قَالَ أَتَعْبُدُونَ مَا تَنْحِتُونَ",
        "french": "Il dit : « Adorez-vous ce que vous sculptez vous-mêmes ?"
      },
      {
        "number": 82,
        "arabic": "وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ",
        "french": "alors qu'Allah vous a créés, vous et ce que vous fabriquez ? »"
      },
      {
        "number": 83,
        "arabic": "قَالُوا ابْنُوا لَهُ بُنْيَانًا فَأَلْقُوهُ فِي الْجَحِيمِ",
        "french": "Ils dirent : « Construisez-lui un four et jetez-le dans la fournaise ardemment embrasée. »"
      },
      {
        "number": 84,
        "arabic": "فَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَسْفَلِينَ",
        "french": "Ils voulaient lui tendre un piège. Nous les fîmes les plus grands perdants."
      },
      {
        "number": 85,
        "arabic": "وَقَالَ إِنِّي ذَاهِبٌ إِلَىٰ رَبِّي سَيَهْدِينِ",
        "french": "Et il dit : « Je vais vers mon Seigneur ; Il me guidera."
      },
      {
        "number": 86,
        "arabic": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        "french": "Seigneur, fais-moi don d'un enfant vertueux. »"
      },
      {
        "number": 87,
        "arabic": "فَبَشَّرْنَاهُ بِغُلَامٍ حَلِيمٍ",
        "french": "Nous lui fîmes donc la bonne annonce d'un garçon patient."
      },
      {
        "number": 88,
        "arabic": "فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانْظُرْ مَاذَا تَرَىٰ ۖ قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّابِرِينَ",
        "french": "Et lorsqu'il fut en âge de l'accompagner, il dit : « Ô mon fils, je me vois en songe que je te sacrifie. Vois donc ce que tu en penses. » Il dit : « Ô mon père, fais ce qui t'est commandé. Tu me trouveras, si Allah le veut, du nombre des patients. »"
      },
      {
        "number": 89,
        "arabic": "فَلَمَّا أَسْلَمَا وَتَلَّهُ لِلْجَبِينِ",
        "french": "Puis, lorsque tous les deux se furent soumis et qu'il l'eut jeté sur le front,"
      },
      {
        "number": 90,
        "arabic": "وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ",
        "french": "Nous l'appelâmes : « Ô Abraham,"
      },
      {
        "number": 91,
        "arabic": "قَدْ صَدَّقْتَ الرُّؤْيَا ۚ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ",
        "french": "Tu as confirmé la vision. C'est ainsi que Nous récompensons les bienfaisants."
      },
      {
        "number": 92,
        "arabic": "إِنَّ هَٰذَا لَهُوَ الْبَلَاءُ الْمُبِينُ",
        "french": "C'était là certes l'épreuve évidente."
      },
      {
        "number": 93,
        "arabic": "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
        "french": "Et Nous le rachetâmes par une immense offrande."
      },
      {
        "number": 94,
        "arabic": "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ",
        "french": "Et Nous perpétuâmes son renom dans la postérité."
      },
      {
        "number": 95,
        "arabic": "سَلَامٌ عَلَىٰ إِبْرَاهِيمَ",
        "french": "Paix sur Abraham."
      },
      {
        "number": 96,
        "arabic": "كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ",
        "french": "Ainsi récompensons-Nous les bienfaisants."
      },
      {
        "number": 97,
        "arabic": "إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ",
        "french": "Car il était de Nos serviteurs croyants."
      },
      {
        "number": 98,
        "arabic": "وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِنَ الصَّالِحِينَ",
        "french": "Et Nous lui donnâmes la bonne annonce d'Isaac, comme prophète, du nombre des gens de bien."
      },
      {
        "number": 99,
        "arabic": "وَبَارَكْنَا عَلَيْهِ وَعَلَىٰ إِسْحَاقَ ۚ وَمِنْ ذُرِّيَّتِهِمَا مُحْسِنٌ وَظَالِمٌ لِنَفْسِهِ مُبِينٌ",
        "french": "Et Nous le bénîmes, ainsi qu'Isaac. Parmi leur descendance, il y a des bienfaisants et d'autres qui sont manifestement injustes envers eux-mêmes."
      },
      {
        "number": 100,
        "arabic": "وَلَقَدْ مَنَنَّا عَلَىٰ مُوسَىٰ وَهَارُونَ",
        "french": "Et Nous accordâmes Notre bienfait à Moïse et Aaron."
      },
      {
        "number": 101,
        "arabic": "وَنَجَّيْنَاهُمَا وَقَوْمَهُمَا مِنَ الْكَرْبِ الْعَظِيمِ",
        "french": "Et Nous les sauvâmes, eux et leur peuple, de la grande angoisse."
      },
      {
        "number": 102,
        "arabic": "وَنَصَرْنَاهُمْ فَكَانُوا هُمُ الْغَالِبِينَ",
        "french": "Et Nous les secourûmes ; et ils furent les vainqueurs."
      }
    ],
    "words": [
      {
        "word": "تَنْحِتُونَ",
        "translit": "tanḥitūn",
        "meaning": "vous sculptez",
        "root": "ن - ح - ت",
        "rootMeaning": "sculpter / creuser",
        "rootColor": 1,
        "emoji": "🗿",
        "funFactTitle": "La racine ن - ح - ت : sculpter / creuser",
        "funFact": "Abraham se moque de son peuple qui <em>yanḥitūn</em> (sculptent) des idoles de leurs propres mains ! Le mot <strong>naḥt</strong> signifie « sculpture » : c'est quand on taille la pierre ou le bois pour faire une statue. Abraham leur dit : vous sculptez vos dieux ? Mais c'est Allah qui vous a sculptés VOUS ! C'est comme un dessin qui prétend avoir créé le dessinateur ! 🗿",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">تَنْحِتُونَ</span> (vous sculptez) et le récit d'Abraham détruisant les idoles.",
        "related": "<span>تَنْحِتُونَ</span> (vous sculptez), <span>مَنْحُوتًا</span> (sculpté), <span>نَحْتًا</span> (une sculpture)"
      },
      {
        "word": "الْجَحِيمِ",
        "translit": "al-jaḥīm",
        "meaning": "la fournaise ardente",
        "root": "ج - ح - م",
        "rootMeaning": "brûler intensément",
        "rootColor": 2,
        "emoji": "🔥",
        "funFactTitle": "La racine ج - ح - م : brûler intensément",
        "funFact": "Le peuple d'Abraham a jeté ce dernier dans un <em>jaḥīm</em> (feu immense) ! Mais Allah a ordonné au feu : « Sois froid et salutaire pour Abraham ! » Le mot <strong>jaḥīm</strong> désigne un feu si intense qu'il réduit tout en cendres. La racine évoque aussi la faim (<strong>jūʿ</strong> par dérivation) : les deux sont des épreuves douloureuses. 🔥",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">جَحِيمًا</span> (une fournaise) et <span class=\"arabic-inline\">الْجَحِيمِ</span> (l'Enfer ardent), omniprésente dans le Coran.",
        "related": "<span>جَحِيمًا</span> (une fournaise), <span>الْجَحِيمِ</span> (l'Enfer ardent), <span>جَحْمَةً</span> (un brasier)"
      },
      {
        "word": "السَّعْيَ",
        "translit": "as-saʿya",
        "meaning": "l'effort / la marche",
        "root": "س - ع - ي",
        "rootMeaning": "courir / effort",
        "rootColor": 3,
        "emoji": "🏃",
        "funFactTitle": "La racine س - ع - ي : courir / effort",
        "funFact": "Quand Ismaël a atteint l'âge du <em>saʿy</em> (l'effort, la capacité de marcher et courir), Abraham a été testé ! Le mot <strong>saʿy</strong> signifie « effort » et donne aussi le mot <strong>masʿā</strong> (ce qu'on poursuit). Le rituel du saʿy entre Safa et Marwa à La Mecque vient de cette racine : on y reproduit la course de Hajar à la recherche d'eau ! Ton effort dans ce marathon coranique est un vrai saʿy ! 🏃",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">سَعَىٰ</span> (il a fait un effort) et <span class=\"arabic-inline\">يَسْعَوْنَ</span> (ils font des efforts).",
        "related": "<span>سَعَىٰ</span> (il a fait un effort), <span>يَسْعَوْنَ</span> (ils font des efforts), <span>مَسْعَىٰ</span> (un parcours)"
      },
      {
        "word": "حَلِيمٍ",
        "translit": "ḥalīmin",
        "meaning": "patient / doux",
        "root": "ح - ل - م",
        "rootMeaning": "patience / douceur",
        "rootColor": 4,
        "emoji": "🕊️",
        "funFactTitle": "La racine ح - ل - م : patience / douceur",
        "funFact": "Ismaël est décrit comme <em>ḥalīm</em> (très patient) ! Être <strong>ḥalīm</strong>, ce n'est pas juste attendre : c'est supporter avec douceur, sans se fâcher. Le mot <strong>ḥilm</strong> signifie « sagesse » et « patience ». Al-Ḥalīm est un nom d'Allah : Il est patient même quand les gens désobéissent. C'est comme un professeur qui explique encore et encore avec le sourire ! 🕊️",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">الْحَلِيمُ</span> (le Patient) et <span class=\"arabic-inline\">يَحْلِمُ</span> (il est patient), attribut divin et qualité prophétique.",
        "related": "<span>الْحَلِيمُ</span> (le Patient), <span>يَحْلِمُ</span> (il est patient), <span>حِلْمًا</span> (de la sagesse)"
      },
      {
        "word": "بَارَكْنَا",
        "translit": "bāraknā",
        "meaning": "Nous avons béni",
        "root": "ب - ر - ك",
        "rootMeaning": "bénédiction",
        "rootColor": 5,
        "emoji": "🌟",
        "funFactTitle": "La racine ب - ر - ك : bénédiction / genou",
        "funFact": "Allah <em>bāraka</em> (a béni) Abraham et toute sa descendance ! Le mot <strong>baraka</strong> signifie « bénédiction » — une grâce qui grandit et se multiplie sans diminuer. La même racine donne <strong>baraka</strong> (le genou) : quand on se met à genoux pour prier, on reçoit la bénédiction ! Le mot <strong>mubārak</strong> signifie « béni » et c'est ce qu'on dit au début de chaque sourate ! 🌟",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">مُبَارَكًا</span> (béni) et <span class=\"arabic-inline\">بَرَكَةً</span> (une bénédiction), omniprésente dans le Coran.",
        "related": "<span>مُبَارَكًا</span> (béni), <span>بَرَكَةً</span> (une bénédiction), <span>بَارَكَ</span> (Il a béni)"
      }
    ],
    "quiz": [
      {
        "question": "Qu'est-ce qu'Abraham fait aux idoles de son peuple ?",
        "options": [
          "Il les vend",
          "Il les brise",
          "Il les cache",
          "Il les peint"
        ],
        "correct": 1
      },
      {
        "question": "Comment Allah a-t-Il sauvé Abraham du feu ?",
        "options": [
          "Il a envoyé la pluie",
          "Il a ordonné au feu d'être froid et salutaire",
          "Il a envoyé un ange",
          "Il a fait fuir Abraham"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine ح - ل - م ?",
        "options": [
          "brûler",
          "sculpter",
          "patience / douceur",
          "bénédiction"
        ],
        "correct": 2
      },
      {
        "question": "Comment est décrit Ismaël dans le Coran ?",
        "options": [
          "Fort et courageux",
          "Patient et doux (halim)",
          "Riche et puissant",
          "Rapide et intelligent"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-05 ! Tu as découvert les racines <strong>ن - ح - ت, ج - ح - م, س - ع - ي, ح - ل - م, ب - ر - ك</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-06",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "Hud, Salih et les peuples rejettés",
    "shortTitle": "Ash-Shu'ara (103-140)",
    "subtitle": "Les prophètes Hud et Salih appellent leurs peuples à la vérité. Le châtiment tombe sur ceux qui refusent !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 103,
        "arabic": "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Il y a certes là un signe, mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 104,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      },
      {
        "number": 105,
        "arabic": "كَذَّبَتْ قَوْمُ نُوحٍ الْمُرْسَلِينَ",
        "french": "Le peuple de Noé a traité de menteurs les messagers."
      },
      {
        "number": 106,
        "arabic": "إِذْ قَالَ لَهُمْ أَخُوهُمْ نُوحٌ أَلَا تَتَّقُونَ",
        "french": "Lorsque leur frère Noé leur dit : « Ne craindrez-vous pas ?"
      },
      {
        "number": 107,
        "arabic": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
        "french": "Je suis pour vous un messager digne de confiance."
      },
      {
        "number": 108,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 109,
        "arabic": "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ",
        "french": "Je ne vous demande pas pour cela de salaire. Mon salaire n'incombe qu'au Seigneur de l'univers."
      },
      {
        "number": 110,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 111,
        "arabic": "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ",
        "french": "Ils dirent : « Croirons-nous en toi, alors que ce sont les plus vils qui te suivent ? »"
      },
      {
        "number": 112,
        "arabic": "قَالَ وَمَا عِلْمِي بِمَا كَانُوا يَعْمَلُونَ",
        "french": "Il dit : « Qu'ai-je à savoir de ce qu'ils faisaient ?"
      },
      {
        "number": 113,
        "arabic": "إِنْ حِسَابُهُمْ إِلَّا عَلَىٰ رَبِّي ۖ لَوْ تَشْعُرُونَ",
        "french": "Leur compte n'incombe qu'à mon Seigneur. Si seulement vous compreniez !"
      },
      {
        "number": 114,
        "arabic": "وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ",
        "french": "Et je ne suis pas celui qui repousse les croyants."
      },
      {
        "number": 115,
        "arabic": "إِنْ أَنَا إِلَّا نَذِيرٌ مُّبِينٌ",
        "french": "Je ne suis qu'un avertisseur explicite."
      },
      {
        "number": 116,
        "arabic": "قَالُوا لَئِنْ لَمْ تَنْتَهِ يَا نُوحُ لَتَكُونَنَّ مِنَ الْمَرْجُومِينَ",
        "french": "Ils dirent : « Si tu ne cesses pas, ô Noé, tu seras lapidé. »"
      },
      {
        "number": 117,
        "arabic": "قَالَ رَبِّ إِنَّ قَوْمِي كَذَّبُونِ",
        "french": "Il dit : « Seigneur, mon peuple me traite de menteur."
      },
      {
        "number": 118,
        "arabic": "فَافْتَحْ بَيْنِي وَبَيْنَهُمْ فَتْحًا وَنَجِّنِي وَمَنْ مَعِي مِنَ الْمُؤْمِنِينَ",
        "french": "Juge donc entre moi et eux, et sauve-moi ainsi que les croyants qui sont avec moi. »"
      },
      {
        "number": 119,
        "arabic": "فَأَنْجَيْنَاهُ وَمَنْ مَعَهُ فِي الْفُلْكِ الْمَشْحُونِ",
        "french": "Nous le sauvâmes donc, lui et ceux qui étaient avec lui, dans l'arche chargée."
      },
      {
        "number": 120,
        "arabic": "ثُمَّ أَغْرَقْنَا بَعْدُ الْبَاقِينَ",
        "french": "Ensuite, Nous noyâmes les autres."
      },
      {
        "number": 121,
        "arabic": "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Il y a certes là un signe, mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 122,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      },
      {
        "number": 123,
        "arabic": "عَادٌ كَذَّبُوا الرُّسُلَ",
        "french": "Les Aad ont traité de menteurs les messagers."
      },
      {
        "number": 124,
        "arabic": "إِذْ قَالَ لَهُمْ أَخُوهُمْ هُودٌ أَلَا تَتَّقُونَ",
        "french": "Lorsque leur frère Hud leur dit : « Ne craindrez-vous pas ?"
      },
      {
        "number": 125,
        "arabic": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
        "french": "Je suis pour vous un messager digne de confiance."
      },
      {
        "number": 126,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 127,
        "arabic": "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ",
        "french": "Je ne vous demande pas pour cela de salaire. Mon salaire n'incombe qu'au Seigneur de l'univers."
      },
      {
        "number": 128,
        "arabic": "أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ",
        "french": "Élevez-vous des monuments sur chaque colline pour vous amuser ?"
      },
      {
        "number": 129,
        "arabic": "وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ",
        "french": "Et prenez-vous des palais comme si vous deviez y rester éternellement ?"
      },
      {
        "number": 130,
        "arabic": "وَإِذَا بَطَشْتُمْ بَطَشْتُمْ جَبَّارِينَ",
        "french": "Et quand vous sévissez contre quelqu'un, vous le faites impitoyablement."
      },
      {
        "number": 131,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 132,
        "arabic": "وَاتَّقُوا الَّذِي أَمَدَّكُمْ بِمَا تَعْلَمُونَ",
        "french": "Craignez Celui qui vous a pourvus de ce que vous savez."
      },
      {
        "number": 133,
        "arabic": "أَمَدَّكُمْ بِأَنْعَامٍ وَبَنِينَ",
        "french": "Il vous a pourvus de bestiaux et d'enfants."
      },
      {
        "number": 134,
        "arabic": "وَجَنَّاتٍ وَعُيُونٍ",
        "french": "de jardins et de sources."
      },
      {
        "number": 135,
        "arabic": "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ",
        "french": "Je crains pour vous le châtiment d'un Jour terrible. »"
      },
      {
        "number": 136,
        "arabic": "قَالُوا سَوَاءٌ عَلَيْنَا أَوَعَظْتَ أَمْ لَمْ تَكُنْ مِنَ الْوَاعِظِينَ",
        "french": "Ils dirent : « Que tu nous exhortes ou non, cela nous est égal."
      },
      {
        "number": 137,
        "arabic": "إِنْ هَٰذَا إِلَّا خُلُقُ الْأَوَّلِينَ",
        "french": "Ce ne sont là que de vieilles fables. »"
      },
      {
        "number": 138,
        "arabic": "وَمَا نَحْنُ بِمُعَذَّبِينَ",
        "french": "Et nous ne serons pas châtiés. »"
      },
      {
        "number": 139,
        "arabic": "فَكَذَّبُوهُ فَأَهْلَكْنَاهُمْ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Ils le traitèrent donc de menteur. Et Nous les fîmes périr. Il y a certes là un signe, mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 140,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      }
    ],
    "words": [
      {
        "word": "أَطِيعُونِ",
        "translit": "aṭīʿūnī",
        "meaning": "obéissez-moi",
        "root": "ط - و - ع",
        "rootMeaning": "obéir",
        "rootColor": 1,
        "emoji": "👍",
        "funFactTitle": "La racine ط - و - ع : obéir",
        "funFact": "Chaque prophète dit à son peuple : <em>aṭīʿūnī</em> (obéissez-moi) ! Obéir, ce n'est pas perdre sa liberté : c'est suivre le meilleur guide vers le bonheur. Le mot <strong>ṭāʿa</strong> signifie « obéissance » et <strong>maṭīʿ</strong> signifie « obéissant ». La <strong>masculinité</strong> vient de cette racine : « taʿm » (nourriture) est liée — on obéit à celui qui nous nourrit ! 👍",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">يُطِيعُونَ</span> (ils obéissent) et <span class=\"arabic-inline\">طَاعَةً</span> (obéissance), très fréquent.",
        "related": "<span>أَمِينٌ</span> (digne de confiance), <span>آمَنُوا</span> (ils ont cru), <span>أَمَانَةً</span> (une confiance)"
      },
      {
        "word": "أَمِينٌ",
        "translit": "amīnun",
        "meaning": "digne de confiance",
        "root": "أ - م - ن",
        "rootMeaning": "sécurité / confiance",
        "rootColor": 2,
        "emoji": "🔒",
        "funFactTitle": "La racine أ - م - ن : sécurité / confiance",
        "funFact": "Noé dit : je suis <em>amīn</em> (digne de confiance) ! Cette racine donne <strong>amān</strong> (sécurité), <strong>īmān</strong> (la foi) et <strong>āmīn</strong> (qu'on dit à la fin de la Fatiha). La foi, c'est se sentir en <strong>sécurité</strong> avec Allah ! Le mot <strong>mu'min</strong> (croyant) vient de là : quelqu'un en qui on a confiance et qui fait confiance à Allah. Comme un verrou solide qui protège ! 🔒",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">مُؤْمِنِينَ</span> (croyants) et <span class=\"arabic-inline\">آمِنِينَ</span> (en sécurité), omniprésente.",
        "related": "<span>طَعَامًا</span> (de la nourriture), <span>يَطْعَمُ</span> (il mange), <span>أَطْعَمَهُمْ</span> (Il les a nourris)"
      },
      {
        "word": "بَطَشْتُمْ",
        "translit": "baṭashtum",
        "meaning": "vous avez agi violemment",
        "root": "ب - ط - ش",
        "rootMeaning": "force / violence",
        "rootColor": 3,
        "emoji": "💪",
        "funFactTitle": "La racine ب - ط - ش : force / violence",
        "funFact": "Hud dit aux Aad : quand vous utilisez votre force, vous le faites comme des <em>jabbārīn</em> (tyrans) ! Le mot <strong>baṭsh</strong> signifie « une action violente ». Les Aad étaient un peuple immense et fort, mais leur force les a perdus. La vraie force n'est pas dans les muscles mais dans la <strong>foi</strong>. Un faible avec Allah est plus fort qu'un tyran sans Lui ! 💪",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">بَطْشِ</span> (la puissance) et <span class=\"arabic-inline\">يَبْطِشُ</span> (il sévit avec force), liée au pouvoir.",
        "related": "<span>قَدْرًا</span> (une valeur), <span>قَادِرًا</span> (Puissant), <span>تَقْدِيرًا</span> (une mesure)"
      },
      {
        "word": "أَمَدَّكُمْ",
        "translit": "amaddakum",
        "meaning": "Il vous a pourvus",
        "root": "م - د - د",
        "rootMeaning": "étendre / pourvoir",
        "rootColor": 4,
        "emoji": "🎁",
        "funFactTitle": "La racine م - د - د : étendre / pourvoir",
        "funFact": "Allah <em>amaddakum</em> (vous a pourvus) de bestiaux, d'enfants, de jardins et de sources ! Le mot <strong>madd</strong> signifie « étendre » : Allah étend Ses bienfaits sans limites. Le mot <strong>tamaddad</strong> signifie « s'étendre » et <strong>imtidād</strong> signifie « l'expansion ». C'est comme un tuyau d'eau qui ne s'arrête jamais de couler : les dons d'Allah sont infinis ! 🎁",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">يَمُدُّ</span> (Il étend) et <span class=\"arabic-inline\">مَدًّا</span> (une extension), toujours liée à la générosité divine.",
        "related": "<span>أَمَدًا</span> (une durée), <span>مَدَدًا</span> (un renfort), <span>يَمُدُّ</span> (Il prolonge)"
      },
      {
        "word": "وَاعِظِينَ",
        "translit": "wāʿiẕīn",
        "meaning": "des exhortateurs",
        "root": "و - ع - ظ",
        "rootMeaning": "exhorter / conseiller",
        "rootColor": 5,
        "emoji": "📢",
        "funFactTitle": "La racine و - ع - ظ : exhorter / conseiller",
        "funFact": "Les Aad disent à Hud : « Que tu nous <em>waʿiẓtanā</em> (nous exhortes) ou non, on s'en fiche ! » Le mot <strong>waʿẓ</strong> signifie « un conseil affectueux » — comme quand tes parents te disent gentiment de bien te comporter. Le mot <strong>mawʿiẓa</strong> est un rappel plein de sagesse et d'amour. Le Coran lui-même est appelé <strong>mawʿiẓa</strong> ! Un bon conseil vaut mieux que mille cadeaux ! 📢",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">مَوْعِظَةً</span> (une exhortation) et <span class=\"arabic-inline\">يَعِظُكُمْ</span> (il vous conseille), très fréquent.",
        "related": "<span>نُورًا</span> (une lumière), <span>يُنِيرُ</span> (il éclaire), <span>مُنِيرًا</span> (lumineux)"
      }
    ],
    "quiz": [
      {
        "question": "Quel prophète a été envoyé au peuple Aad ?",
        "options": [
          "Salih",
          "Noé",
          "Hud",
          "Shu'ayb"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">أَمِينٌ</span> (amīnun) ?",
        "options": [
          "savant",
          "puissant",
          "digne de confiance",
          "riche"
        ],
        "correct": 2
      },
      {
        "question": "Quelle racine donne le mot « croyant » (mu'min) ?",
        "options": [
          "ط - و - ع",
          "م - د - د",
          "أ - م - ن",
          "ب - ط - ش"
        ],
        "correct": 2
      },
      {
        "question": "Comment les Aad réagissent-ils au message de Hud ?",
        "options": [
          "Ils le suivent",
          "Ils disent que c'est égal avec ou sans ses conseils",
          "Ils s'enfuient",
          "Ils demandent des miracles"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as étudié la leçon 26-06 ! Tu as découvert les racines <strong>ط - و - ع, أ - م - ن, ب - ط - ش, م - د - د, و - ع - ظ</strong>. Continue ton marathon du Coran ! 🌟"
  },
  {
    "id": "26-07",
    "surah": 26,
    "surahName": "Ash-Shu'ara",
    "title": "Lot, Shu'ayb et la conclusion : seuls les croyants sont guidés",
    "shortTitle": "Ash-Shu'ara (141-165)",
    "subtitle": "Les derniers prophètes : Lot, Shu'ayb et la conclusion de la sourate. Le Coran est révélé en arabe clair !",
    "duration": "~10 min",
    "xp": 15,
    "verses": [
      {
        "number": 141,
        "arabic": "كَذَّبَتْ ثَمُودُ الْمُرْسَلِينَ",
        "french": "Les Thamud ont traité de menteurs les messagers."
      },
      {
        "number": 142,
        "arabic": "إِذْ قَالَ لَهُمْ أَخُوهُمْ صَالِحٌ أَلَا تَتَّقُونَ",
        "french": "Lorsque leur frère Salih leur dit : « Ne craindrez-vous pas ?"
      },
      {
        "number": 143,
        "arabic": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
        "french": "Je suis pour vous un messager digne de confiance."
      },
      {
        "number": 144,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 145,
        "arabic": "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ",
        "french": "Je ne vous demande pas pour cela de salaire. Mon salaire n'incombe qu'au Seigneur de l'univers."
      },
      {
        "number": 146,
        "arabic": "أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ",
        "french": "Serez-vous laissés en sécurité dans ce que vous avez ici ?"
      },
      {
        "number": 147,
        "arabic": "فِي جَنَّاتٍ وَعُيُونٍ",
        "french": "dans des jardins et des sources."
      },
      {
        "number": 148,
        "arabic": "وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ",
        "french": "dans des cultures et des palmiers aux fruits bien exposés."
      },
      {
        "number": 149,
        "arabic": "وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ",
        "french": "et vous sculptez dans les montagnes des maisons avec art."
      },
      {
        "number": 150,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 151,
        "arabic": "وَلَا تُطِيعُوا أَمْرَ الْمُسْرِفِينَ",
        "french": "N'obéissez pas aux ordres des transgresseurs."
      },
      {
        "number": 152,
        "arabic": "الَّذِينَ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ",
        "french": "ceux qui sèment la corruption sur terre et ne réparent pas. »"
      },
      {
        "number": 153,
        "arabic": "قَالُوا إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ",
        "french": "Ils dirent : « Tu n'es qu'un ensorcelé."
      },
      {
        "number": 154,
        "arabic": "مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا فَأْتِ بِآيَةٍ إِنْ كُنْتَ مِنَ الصَّادِقِينَ",
        "french": "Tu n'es qu'un homme comme nous. Apporte donc un signe, si tu es du nombre des véridiques. »"
      },
      {
        "number": 155,
        "arabic": "قَالَ هَٰذِهِ نَاقَةٌ لَهَا شِرْبٌ وَلَكُمْ شِرْبُ يَوْمٍ مَّعْلُومٍ",
        "french": "Il dit : « Voici une chamelle qui aura son tour de boire, comme vous aurez votre tour, un jour bien connu."
      },
      {
        "number": 156,
        "arabic": "وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابُ يَوْمٍ عَظِيمٍ",
        "french": "Et ne lui faites aucun mal, sinon le châtiment d'un jour terrible vous saisira. »"
      },
      {
        "number": 157,
        "arabic": "فَعَقَرُوهَا فَأَصْبَحُوا نَادِمِينَ",
        "french": "Ils la tuèrent donc. Puis ils eurent des regrets."
      },
      {
        "number": 158,
        "arabic": "فَأَخَذَهُمُ الْعَذَابُ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُمْ مُّؤْمِنِينَ",
        "french": "Le châtiment les saisit donc. Il y a certes là un signe, mais la plupart d'entre eux ne croient pas."
      },
      {
        "number": 159,
        "arabic": "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Certes, ton Seigneur est le Puissant, le Miséricordieux."
      },
      {
        "number": 160,
        "arabic": "كَذَّبَ قَوْمُ لُوطٍ الْمُرْسَلِينَ",
        "french": "Le peuple de Lot a traité de menteurs les messagers."
      },
      {
        "number": 161,
        "arabic": "إِذْ قَالَ لَهُمْ أَخُوهُمْ لُوطٌ أَلَا تَتَّقُونَ",
        "french": "Lorsque leur frère Lot leur dit : « Ne craindrez-vous pas ?"
      },
      {
        "number": 162,
        "arabic": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
        "french": "Je suis pour vous un messager digne de confiance."
      },
      {
        "number": 163,
        "arabic": "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ",
        "french": "Craignez Allah et obéissez-moi."
      },
      {
        "number": 164,
        "arabic": "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ",
        "french": "Je ne vous demande pas pour cela de salaire. Mon salaire n'incombe qu'au Seigneur de l'univers."
      },
      {
        "number": 165,
        "arabic": "أَتَأْتُونَ الذُّكْرَانَ مِنَ الْعَالَمِينَ",
        "french": "Allez-vous aux mâles parmi les mondes ?"
      }
    ],
    "words": [
      {
        "word": "يُفْسِدُونَ",
        "translit": "yufsidūn",
        "meaning": "ils corrompent",
        "root": "ف - س - د",
        "rootMeaning": "corrompre / gâter",
        "rootColor": 1,
        "emoji": "💔",
        "funFactTitle": "La racine ف - س - د : corrompre / gâter",
        "funFact": "Les transgresseurs <em>yufsidūn</em> (corrompent) la terre ! Le mot <strong>fasād</strong> signifie « corruption » — comme quand une pomme pourrit et devient toute molle. Le Coran dit qu'ils détruisent mais ne réparent jamais. C'est comme jeter des déchets partout sans jamais nettoyer ! Le contraire est <strong>ṣulḥ</strong> (paix/réparation) et <strong>iṣlāḥ</strong> (amélioration). Sois du côté de ceux qui réparent ! 💔",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">الْمُفْسِدُونَ</span> (les corrupteurs) et <span class=\"arabic-inline\">فَسَادٍ</span> (corruption), très fréquent dans le Coran.",
        "related": "<span>فَسَادًا</span> (une corruption), <span>مُفْسِدُونَ</span> (corrompus), <span>إِصْلَاحًا</span> (une réforme)"
      },
      {
        "word": "النَّاقَةُ",
        "translit": "an-nāqatu",
        "meaning": "la chamelle",
        "root": "ن - ق - ر",
        "rootMeaning": "percer / creuser",
        "rootColor": 2,
        "emoji": "🐪",
        "funFactTitle": "La racine ن - ق - ر : percer / creuser",
        "funFact": "La chamelle (<em>nāqa</em>) de Salih est un miracle ! La racine <strong>n-q-r</strong> donne « percer » : la chamelle faisait jaillir l'eau du sol en creusant avec son sabot ! Le mot <strong>naqār</strong> signifie « un tambour » (instrument percé). Manger cette chamelle était interdit, mais le peuple désobéit. En arabe, on dit « perchera » (un seul cheveu) de la même racine : un cheveu percé au milieu ! 🐪",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">نَاقَةَ اللَّهِ</span> (la chamelle d'Allah) et le récit de Salih et les Thamud.",
        "related": "<span>مَسَسْتُمْ</span> (vous avez touché), <span>يَمَسُّ</span> (il touche), <span>تَمَاسًّا</span> (un contact)"
      },
      {
        "word": "عَقَرُوهَا",
        "translit": "ʿaqarūhā",
        "meaning": "ils l'ont tuée (la chamelle)",
        "root": "ع - ق - ر",
        "rootMeaning": "tuer / mutiler",
        "rootColor": 3,
        "emoji": "⚡",
        "funFactTitle": "La racine ع - ق - ر : tuer / mutiler",
        "funFact": "Le peuple de Salih a <em>ʿaqarūhā</em> (tué) la chamelle miraculeuse ! Le mot <strong>ʿaqr</strong> signifie « couper les jarrets » — une façon cruelle de tuer un animal. Même après ce crime, ils ont regretté, mais il était trop tard ! Le mot <strong>muʿaqqar</strong> signifie « humilié » : ceux qui sont cruels finissent par être abaissés. La leçon : ne suis jamais les méchants, même s'ils te font miroiter des avantages ! ⚡",
        "relatedText": "On la retrouve dans <span class=\"arabic-inline\">عَقْرٍ</span> (mutilation) et le récit de la chamelle de Salih.",
        "related": "<span>نَادِمِينَ</span> (pleins de regrets), <span>نَدَامَةً</span> (un regret), <span>يَندَمُ</span> (il regrette)"
      },
      {
        "word": "الْعَذَابُ",
        "translit": "al-ʿadhābu",
        "meaning": "le châtiment",
        "root": "ع - ذ - ب",
        "rootMeaning": "punir",
        "rootColor": 4,
        "emoji": "🔥",
        "funFactTitle": "La racine ع - ذ - ب : punir (déjà vue !)",
        "funFact": "On retrouve cette racine <em>ʿadhāb</em> (châtiment) dans presque chaque histoire de prophète ! Le mot <strong>ʿadhāb</strong> signifie « punition » mais aussi « douleur amère ». En arabe classique, <strong>ʿadhīb</strong> peut signifier « savoureux » — c'est parce que le bon goût est le contraire de l'amertume du châtiment ! Allah punit seulement après avoir envoyé de nombreux avertisseurs. C'est comme un professeur qui donne plusieurs chances avant la mauvaise note ! 🔥",
        "relatedText": "Même racine que dans <span class=\"arabic-inline\">عَذَابًا</span> des sourates précédentes, toujours liée à la punition divine après les avertissements.",
        "related": "<span>عَاجِلًا</span> (prompt), <span>يُعَجِّلُ</span> (il hâte), <span>تَعْجِيلًا</span> (une hâte)"
      },
      {
        "word": "لُوطٍ",
        "translit": "Lūṭin",
        "meaning": "Lot",
        "root": "ل - و - ط",
        "rootMeaning": "s'attacher / être proche",
        "rootColor": 5,
        "emoji": "🏠",
        "funFactTitle": "La racine ل - و - ط : s'attacher / être proche",
        "funFact": "Le prophète <em>Lūṭ</em> a un nom qui vient de la racine « être proche/attaché ». Il était le neveu d'Abraham et toujours proche de lui ! Le mot <strong>līṭ</strong> signifie « quelqu'un de proche » et <strong>tawlīṭ</strong> signifie « ce qui est serré ». Lot a essayé de protéger ses invités (les anges) : il était prêt à sacrifier tout pour les défendre. L'amitié sincère est une grande qualité en Islam ! 🏠",
        "relatedText": "On la retrouve dans le nom <span class=\"arabic-inline\">لُوطٍ</span> (Lot) et dans le récit de la destruction de Sodome.",
        "related": "<span>نَجَّيْنَاكُمْ</span> (Nous vous avons sauvés), <span>يُنَجِّي</span> (il sauve), <span>نَجَاةً</span> (un sauvetage)"
      }
    ],
    "quiz": [
      {
        "question": "Quel miracle Allah a-t-Il donné au peuple de Salih ?",
        "options": [
          "Une source d'eau",
          "Une chamelle miraculeuse",
          "Un feu sacré",
          "Un arbre éternel"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine ف - س - د ?",
        "options": [
          "créer",
          "corrompre / gâter",
          "tuer",
          "pardonner"
        ],
        "correct": 1
      },
      {
        "question": "Quel est le rapport familial entre Lot et Abraham ?",
        "options": [
          "Son père",
          "Son frère",
          "Son neveu",
          "Son fils"
        ],
        "correct": 2
      },
      {
        "question": "Que se passe-t-il quand le peuple de Salih tue la chamelle ?",
        "options": [
          "Rien ne se passe",
          "Le châtiment les saisit",
          "Salih les pardonne",
          "La chamelle ressuscite"
        ],
        "correct": 1
      }
    ],
    "completionText": "🎉 Bravo ! Tu as terminé la sourate Ash-Shu'ara ! Tu as découvert les racines <strong>ف - س - د, ن - ق - ر, ع - ق - ر, ع - ذ - ب, ل - و - ط</strong>. Le Coran est rempli d'histoires pour te guider ! 🌟"
  },
  {
    "id": "27-01",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 1 à 16 : Le Livre sage et les signes de Mûsâ",
    "shortTitle": "An-Naml (v.1-16)",
    "subtitle": "Découvrons le début de la sourate de la Fourmi : le Coran est un livre clair, et Mûsâ reçoit ses premiers miracles !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "طس تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ",
        "french": "Ṭā-Sīn. Voici les versets du Coran et d'un Livre explicite."
      },
      {
        "number": 2,
        "arabic": "هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ",
        "french": "Guide et bonne annonce pour les croyants."
      },
      {
        "number": 3,
        "arabic": "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ",
        "french": "Qui accomplissent la ṣalāt, acquittent la zakāt, et croient avec certitude en l'au-delà."
      },
      {
        "number": 4,
        "arabic": "إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ زَيَّنَّا لَهُمْ أَعْمَالَهُمْ فَهُمْ يَعْمَهُونَ",
        "french": "Quant à ceux qui ne croient pas en l'au-delà, Nous avons embelli leurs actions à leurs yeux, et ils s'égarent dans leur aveuglement."
      },
      {
        "number": 5,
        "arabic": "أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ وَهُمْ فِي الْآخِرَةِ هُمُ الْأَخْسَرُونَ",
        "french": "Ceux-là auront le plus mauvais châtiment, et dans l'au-delà ils seront les plus grands perdants."
      },
      {
        "number": 6,
        "arabic": "وَإِنَّكَ لَتُلَقَّى الْقُرْآنَ مِن لَّدُنْ حَكِيمٍ عَلِيمٍ",
        "french": "Et tu reçois certes le Coran de la part d'un Sage, Omniscient."
      },
      {
        "number": 7,
        "arabic": "إِذْ قَالَ مُوسَىٰ لِأَهْلِهِ إِنِّي آنَسْتُ نَارًا سَآتِيكُم مِّنْهَا بِخَبَرٍ أَوْ آتِيكُم بِشِهَابٍ قَبَسٍ لَّعَلَّكُمْ تَصْطَلُونَ",
        "french": "Quand Mûsâ dit à sa famille : « J'ai aperçu un feu. Je vais vous en apporter des nouvelles, ou bien je vous apporterai un tison allumé afin que vous vous réchauffiez. »"
      },
      {
        "number": 8,
        "arabic": "فَلَمَّا جَاءَهَا نُودِيَ أَن بُورِكَ مَن فِي النَّارِ وَمَنْ حَوْلَهَا وَسُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ",
        "french": "Puis lorsqu'il y arriva, on l'appela : « Béni soit celui qui est dans le feu et celui qui est autour, et gloire à Allah, Seigneur des mondes !"
      },
      {
        "number": 9,
        "arabic": "يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ",
        "french": "Ô Mûsâ, c'est Moi Allah, le Puissant, le Sage. »"
      },
      {
        "number": 10,
        "arabic": "وَأَلْقِ عَصَاكَ فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ يَا مُوسَىٰ لَا تَخَفْ إِنِّي لَا يَخَافُ لَدَيَّ الْمُرْسَلُونَ",
        "french": "Jette ton bâton. » Puis quand il le vit remuer comme un serpent, il tourna le dos sans se retourner. « Ô Mûsâ, n'aie pas peur ! Les messagers ne craignent rien auprès de Moi."
      },
      {
        "number": 11,
        "arabic": "إِلَّا مَن ظَلَمَ ثُمَّ بَدَّلَ حُسْنًا بَعْدَ سُوءٍ فَإِنِّي غَفُورٌ رَّحِيمٌ",
        "french": "Sauf celui qui a commis une injustice puis a remplacé le mal par le bien. Alors Je suis Pardonneur et Miséricordieux."
      },
      {
        "number": 12,
        "arabic": "وَأَدْخِلْ يَدَكَ فِي جَيْبِكَ تَخْرُجْ بَيْضَاءَ مِنْ غَيْرِ سُوءٍ فِي تِسْعِ آيَاتٍ إِلَىٰ فِرْعَوْنَ وَقَوْمِهِ إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ",
        "french": "Introduis ta main dans ton gilet, elle sortira blanche sans aucun mal. Ce seront là neuf signes pour Pharaon et son peuple, car ils sont des gens pervers. »"
      },
      {
        "number": 13,
        "arabic": "فَلَمَّا جَاءَتْهُمْ آيَاتُنَا مُبْصِرَةً قَالُوا هَٰذَا سِحْرٌ مُّبِينٌ",
        "french": "Lorsque Nos signes leur parvinrent, clairs et évidents, ils dirent : « C'est là une magie évidente ! »"
      },
      {
        "number": 14,
        "arabic": "وَجَحَدُوا بِهَا وَاسْتَيْقَنَتْهَا أَنفُسُهُمْ ظُلْمًا وَعُلُوًّا فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِينَ",
        "french": "Ils les nièrent injustement et par orgueil, alors que leurs âmes en étaient convaincues. Regarde quelle a été la fin des corrupteurs !"
      },
      {
        "number": 15,
        "arabic": "وَلَقَدْ آتَيْنَا دَاوُودَ وَسُلَيْمَانَ عِلْمًا وَقَالَا الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا عَلَىٰ كَثِيرٍ مِّنْ عِبَادِهِ الْمُؤْمِنِينَ",
        "french": "Nous avons certes accordé le savoir à Dâwûd et à Sulaymân. Et ils dirent : « Louange à Allah qui nous a favorisés par rapport à beaucoup de Ses serviteurs croyants. »"
      },
      {
        "number": 16,
        "arabic": "وَوَرِثَ سُلَيْمَانُ دَاوُودَ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ وَأُوتِينَا مِن كُلِّ شَيْءٍ إِنَّ هَٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ",
        "french": "Et Sulaymân hérita de Dâwûd. Et il dit : « Ô hommes ! On nous a appris le langage des oiseaux, et on nous a donné de toute chose. C'est là vraiment la grâce évidente. »"
      }
    ],
    "words": [
      {
        "word": "مُّبِينٍ",
        "translit": "mubīnin",
        "meaning": "explicite / clair / manifeste",
        "root": "ب - ي - ن",
        "rootMeaning": "être clair / distinguer / séparer",
        "rootColor": 1,
        "emoji": "💡",
        "funFactTitle": "Un livre si clair qu'il brille comme une lampe !",
        "funFact": "La racine <strong>b-y-n</strong> veut dire « être clair » ou « distinguer ». <em>Mubīn</em> = clair, explicite, comme une lampe de poche qui éclaire tout le chemin ! Le Coran est appelé <em>kitāb mubīn</em> = un livre tellement clair que personne ne peut dire « je n'ai pas compris ». Le mot <em>bayān</em> = l'explication, la clarté du discours. Imagine un professeur qui explique si bien que même le plus petit élève comprend : c'est le Coran !",
        "relatedText": "La racine ب - ي - ن revient souvent pour décrire la clarté du Coran et des signes d'Allah.",
        "related": "<span>بَيَان</span> (explication), <span>بَيِّنَة</span> (preuve évidente), <span>تَبَيَّنَ</span> (devenir clair)"
      },
      {
        "word": "يُوقِنُونَ",
        "translit": "yūqinūn",
        "meaning": "ils croient avec certitude",
        "root": "ي - ق - ن",
        "rootMeaning": "être certain / avoir la certitude",
        "rootColor": 2,
        "emoji": "🔒",
        "funFactTitle": "La foi, c'est une clé SOLIDE dans le cœur !",
        "funFact": "La racine <strong>y-q-n</strong> veut dire « être certain » ou « avoir la certitude ». <em>Yūqinūn</em> = ils ont la certitude absolue, comme un roc solide au fond de la mer ! Le mot <em>yaqīn</em> = la certitude, la conviction profonde. Et <em>mutayaqqin</em> = celui qui est sûr à 100 %. La différence entre <em>īmān</em> (foi) et <em>yaqīn</em> (certitude) ? C'est la différence entre croire qu'il y a un trésor et l'avoir déjà trouvé !",
        "relatedText": "La racine ي - ق - ن exprime le plus haut niveau de conviction en Allah.",
        "related": "<span>يَقِين</span> (certitude/conviction), <span>تَيَقَّنَ</span> (être certain), <span>مُتَيَقِّن</span> (convaincu)"
      },
      {
        "word": "آتَيْنَا",
        "translit": "ātaynā",
        "meaning": "Nous avons donné / accordé",
        "root": "أ - ت - ي",
        "rootMeaning": "donner / accorder / venir",
        "rootColor": 3,
        "emoji": "🎁",
        "funFactTitle": "Allah est le plus GÉNÉREUX des donateurs !",
        "funFact": "La racine <strong>ʾ-t-y</strong> veut dire « donner » ou « accorder ». Allah <em>ātaynā</em> = Nous avons donné, comme un parent qui offre le meilleur cadeau à son enfant ! Le mot <em>ʿatāʾ</em> = un don, une faveur. Et <em>āyah</em> (verset, signe) vient de cette même racine : c'est un « cadeau » d'Allah pour nous guider ! Dâwûd et Sulaymân ont reçu le plus beau des cadeaux : le savoir. Et le savoir, c'est mieux que n'importe quel jouet !",
        "relatedText": "La racine أ - ت - ي est utilisée pour décrire les dons et bienfaits d'Allah.",
        "related": "<span>آيَة</span> (verset/signe), <span>عَطَاء</span> (don/faveur), <span>مُؤْتًى</span> (celui qui reçoit)"
      },
      {
        "word": "عِلْمًا",
        "translit": "ʿilman",
        "meaning": "le savoir / la connaissance",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 4,
        "emoji": "📚",
        "funFactTitle": "Le savoir : le trésor qui ne diminue JAMAIS !",
        "funFact": "La racine <strong>ʿ-l-m</strong> veut dire « savoir » ou « connaître ». <em>ʿIlm</em> = le savoir, la connaissance. C'est la racine la plus citée dans le Coran ! Le mot <em>ʿālim</em> = savant, et <em>ʿallām</em> = Celui qui sait tout (l'un des noms d'Allah !). Quand tu étudies, tu fais grandir ton <em>ʿilm</em> ! Contrairement à un gâteau qu'on mange et qui disparaît, le savoir augmente quand tu le partages ! Le Prophète ﷺ a dit : « Cherchez le savoir même en Chine ! »",
        "relatedText": "La racine ع - ل - م est l'une des plus fréquentes du Coran.",
        "related": "<span>عَالِم</span> (savant), <span>عَلِيم</span> (Omniscient), <span>تَعَلَّمَ</span> (apprendre)"
      },
      {
        "word": "عَصَاكَ",
        "translit": "ʿaṣāka",
        "meaning": "ton bâton",
        "root": "ع - ص - ي",
        "rootMeaning": "bâton / soutenir / adhérer",
        "rootColor": 5,
        "emoji": "🐍",
        "funFactTitle": "Le bâton de Mûsâ : de bois à serpent géant !",
        "funFact": "La racine <strong>ʿ-ṣ-w/y</strong> veut dire « bâton » ou « soutenir ». Le <em>ʿaṣā</em> de Mûsâ était un simple bâton de berger, mais Allah l'a transformé en serpent ! Le mot <em>ʿaṣā</em> = bâton, canne, et <em>taʿaṣṣā</em> = s'appuyer sur quelque chose. Imagine ton stylo qui se transforme en dragon — c'est ce qu'Allah a fait pour Mûsâ ! Ce miracle a montré à Pharaon que le pouvoir d'Allah est au-dessus de toute magie.",
        "relatedText": "La racine ع - ص - ي relie l'idée de soutien à celle du bâton de Mûsâ.",
        "related": "<span>عَصَا</span> (bâton/canne), <span>تَعَصَّبَ</span> (soutenir/protéger), <span>مُعْتَصَم</span> (refuge)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">يُوقِنُونَ</span> (yūqinūn) ?",
        "options": [
          "ils mangent",
          "ils voyagent",
          "ils croient avec certitude",
          "ils dorment"
        ],
        "correct": 2
      },
      {
        "question": "Quelle est la racine du mot <span class=\"arabic-inline\">عِلْمًا</span> (le savoir) ?",
        "options": [
          "ق - ر - أ",
          "ك - ت - ب",
          "ف - ه - م",
          "ع - ل - م"
        ],
        "correct": 3
      },
      {
        "question": "Le Coran est décrit comme un livre <span class=\"arabic-inline\">مُّبِينٍ</span>. Que veut dire <em>mubīn</em> ?",
        "options": [
          "caché",
          "complexe",
          "explicite et clair",
          "courte"
        ],
        "correct": 2
      },
      {
        "question": "Quel miracle Allah a-t-Il donné à Mûsâ quand Il lui a parlé ?",
        "options": [
          "Son bâton a volé",
          "Son bâton s'est transformé en serpent",
          "La mer s'est ouverte",
          "Le feu s'est éteint"
        ],
        "correct": 1
      }
    ],
    "completionText": "Masha'Allah ! 📖 Tu as commencé la sourate An-Naml ! Tu as découvert la racine <strong>ب - ي - ن</strong> (être clair), la racine <strong>ي - ق - ن</strong> (certitude), la racine <strong>أ - ت - ي</strong> (donner), la racine <strong>ع - ل - م</strong> (savoir) et la racine <strong>ع - ص - ي</strong> (bâton). Dâwûd et Sulaymân ont reçu le meilleur cadeau : le savoir !"
  },
  {
    "id": "27-02",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 17 à 31 : L'armée de Sulaymân et la fourmi",
    "shortTitle": "An-Naml (v.17-31)",
    "subtitle": "Sulaymân comprend le langage des oiseaux, rencontre une fourmi courageuse, et le Héron rapporte une nouvelle de Saba' !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 17,
        "arabic": "وَحُشِرَ لِسُلَيْمَانَ جُنُودُهُ مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ فَهُمْ يُوزَعُونَ",
        "french": "Et furent rassemblées pour Sulaymân ses troupes de djinns, d'hommes et d'oiseaux. Et ils furent rangés en armée."
      },
      {
        "number": 18,
        "arabic": "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
        "french": "Quand ils arrivèrent à la Vallée des Fourmis, une fourmi dit : « Ô fourmis, entrez dans vos demeures, [de peur] que Sulaymân et ses armées ne vous écrasent [sous leurs pieds] sans s'en rendre compte ! »"
      },
      {
        "number": 19,
        "arabic": "فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
        "french": "Il sourit, amusé par ses paroles, et dit : « Seigneur, inspire-moi pour que je sois reconnaissant de Tes bienfaits dont Tu m'as comblé ainsi que mes parents, et pour que je fasse une bonne œuvre qui Te soit agréable. Et fais-moi entrer, par Ta miséricorde, parmi Tes serviteurs pieux. »"
      },
      {
        "number": 20,
        "arabic": "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ",
        "french": "Et il fit l'examen des oiseaux et dit : « Pourquoi ne vois-je pas le Héron ? Est-il parmi les absents ?"
      },
      {
        "number": 21,
        "arabic": "لَأُعَذِّبَنَّهُ عَذَابًا شَدِيدًا أَوْ لَأَذْبَحَنَّهُ أَوْ لَيَأْتِيَنِّي بِسُلْطَانٍ مُّبِينٍ",
        "french": "Je le châtierai sévèrement ou je l'égorgerai, ou bien il m'apportera une preuve évidente. »"
      },
      {
        "number": 22,
        "arabic": "فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِن سَبَإٍ بِنَبَإٍ يَقِينٍ",
        "french": "Il ne tarda pas à revenir et dit : « J'ai appris ce que tu ne sais pas, et je t'apporte de Saba' une nouvelle sûre."
      },
      {
        "number": 23,
        "arabic": "إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ وَأُوتِيَتْ مِن كُلِّ شَيْءٍ وَلَهَا عَرْشٌ عَظِيمٌ",
        "french": "J'ai trouvé une femme qui règne sur eux, à qui on a donné de toute chose, et qui possède un trône immense."
      },
      {
        "number": 24,
        "arabic": "وَجَدتُّهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ مِن دُونِ اللَّهِ وَزَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ فَصَدَّهُمْ عَنِ السَّبِيلِ فَهُمْ لَا يَهْتَدُونَ",
        "french": "J'ai trouvé qu'elle et son peuple se prosternent devant le soleil au lieu d'Allah. Le Diable leur a embelli leurs actions et les a éloignés du droit chemin. Ils ne sont pas bien guidés."
      },
      {
        "number": 25,
        "arabic": "أَلَّا يَسْجُدُوا لِلَّهِ الَّذِي يُخْرِجُ الْخَبْءَ فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُخْفُونَ وَمَا تُعْلِنُونَ",
        "french": "Ne se prosternent-ils pas devant Allah qui fait sortir ce qui est caché dans les cieux et la terre, et qui sait ce que vous cachez et ce que vous divulguez ?"
      },
      {
        "number": 26,
        "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        "french": "Allah ! Point de divinité à part Lui, le Seigneur du Trône immense."
      },
      {
        "number": 27,
        "arabic": "قَالَ سَنَنظُرُ أَصَدَقْتَ أَمْ كُنتَ مِنَ الْكَاذِبِينَ",
        "french": "Il dit : « Nous allons voir si tu as dit la vérité ou si tu es du nombre des menteurs."
      },
      {
        "number": 28,
        "arabic": "اذْهَب بِّكِتَابِي هَٰذَا فَأَلْقِهْ إِلَيْهِمْ ثُمَّ تَوَلَّ عَنْهُمْ فَانظُرْ مَاذَا يَرْجِعُونَ",
        "french": "Pars avec ma lettre que voici, dépose-la chez eux, puis écarte-toi d'eux et regarde ce qu'ils répondront. »"
      },
      {
        "number": 29,
        "arabic": "قَالَتْ يَا أَيُّهَا الْمَلَأُ إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ",
        "french": "Elle dit : « Ô notables ! Un noble m'a été remis."
      },
      {
        "number": 30,
        "arabic": "إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "french": "Il vient de Sulaymân, et c'est : « Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux."
      },
      {
        "number": 31,
        "arabic": "أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ",
        "french": "Ne vous montez pas contre moi et venez à moi en soumis. »"
      }
    ],
    "words": [
      {
        "word": "النَّمْلِ",
        "translit": "an-naml",
        "meaning": "la fourmi",
        "root": "ن - م - ل",
        "rootMeaning": "fourmi / distribution",
        "rootColor": 6,
        "emoji": "🐜",
        "funFactTitle": "La fourmi qui a donné son nom à TOUTE la sourate !",
        "funFact": "La racine <strong>n-m-l</strong> veut dire « fourmi ». La sourate s'appelle <em>An-Naml</em> = La Fourmi, grâce à cette toute petite héroïne ! La fourmi avertit sa communauté : « Rentrez chez vous, l'armée arrive ! » Sulaymân a souri en entendant cela — un ROI qui écoute une FOURMI ! Le mot <em>namlah</em> = la fourmi, un insecte tiny mais tellement intelligent. En arabe, les fourmis sont connues pour leur organisation parfaite. Allah nous enseigne : même la plus petite créature mérite du respect !",
        "relatedText": "La racine ن - م - ل est unique : c'est le nom d'une sourate entière du Coran !",
        "related": "<span>نَمْلَة</span> (fourmi), <span>نَامِل</span> (qui distribue), <span>إِنْمَال</span> (distribution)"
      },
      {
        "word": "الْهُدْهُدَ",
        "translit": "al-hudhuda",
        "meaning": "le Héron / la huppe",
        "root": "ه - د - د",
        "rootMeaning": "héron / avertir / désirer",
        "rootColor": 7,
        "emoji": "🦅",
        "funFactTitle": "L'oiseau détective de Sulaymân !",
        "funFact": "La racine <strong>h-d-d</strong> veut dire « avertir » ou « désirer », et désigne aussi le héron (la huppe). Le <em>hudhud</em> de Sulaymân était comme un espion volant ! Il a découvert le royaume de Saba' avant tout le monde. Quand Sulaymân ne l'a pas trouvé, il a dit : « Où est mon héron ? » Même les oiseaux étaient soldats dans son armée ! En arabe moderne, <em>hudhud</em> = la huppe, cet oiseau avec une crête magnifique sur la tête.",
        "relatedText": "La racine ه - د - د donne le nom de l'oiseau héros de cette histoire.",
        "related": "<span>هَدْد</span> (héron/huppe), <span>تَهَدَّدَ</span> (menacer), <span>هَدِيد</span> (désir ardent)"
      },
      {
        "word": "عَرْشٌ",
        "translit": "ʿarshun",
        "meaning": "un trône",
        "root": "ع - ر - ش",
        "rootMeaning": "trône / toit / soutenir",
        "rootColor": 1,
        "emoji": "👑",
        "funFactTitle": "Le trône de la Reine : le plus beau meuble du monde !",
        "funFact": "La racine <strong>ʿ-r-sh</strong> veut dire « trône » ou « toit ». La reine de Saba' avait un <em>ʿarsh ʿaẓīm</em> = un trône immense, comme un château miniature ! Le mot <em>ʿarsh</em> = le trône, le siège royal. Et <em>al-ʿArsh</em> avec un « A » majuscule = le Trône d'Allah, le plus grand de tous les trônes ! En arabe, <em>ʿarīsh</em> = un toit, une pergola. Le trône de la Reine était si beau que Sulaymân a voulu le voir avant elle !",
        "relatedText": "La racine ع - ر - ش évoque la puissance royale et le Trône divin.",
        "related": "<span>عَرِيش</span> (toit/pergola), <span>مَعْرُوش</span> (couverte/treillissée), <span>عَرَشَ</span> (construire un toit)"
      },
      {
        "word": "يَسْجُدُونَ",
        "translit": "yasjudūn",
        "meaning": "ils se prosternent",
        "root": "س - ج - د",
        "rootMeaning": "se prosterner / adorer",
        "rootColor": 2,
        "emoji": "🤲",
        "funFactTitle": "La prosternation : le geste le plus humble !",
        "funFact": "La racine <strong>s-j-d</strong> veut dire « se prosterner » ou « adorer ». Le peuple de Saba' se prosternait devant le soleil — mais le soleil ne peut rien donner ! <em>Sujūd</em> = la prosternation, le geste où l'on met son front par terre pour Allah. Le mot <em>masjid</em> = la mosquée (lieu de prosternation). Quand tu fais le <em>sujūd</em> dans ta prière, tu es au plus proche d'Allah ! Le Prophète ﷺ a dit : « Le serviteur est le plus proche de son Seigneur pendant la prosternation. »",
        "relatedText": "La racine س - ج - د est liée à la prière et à l'adoration sincère.",
        "related": "<span>مَسْجِد</span> (mosquée), <span>سُجُود</span> (prosternation), <span>مَسْجُود</span> (prosterné/adulé)"
      },
      {
        "word": "مُسْلِمِينَ",
        "translit": "muslimīn",
        "meaning": "soumis / musulmans",
        "root": "س - ل - م",
        "rootMeaning": "paix / soumission / salut",
        "rootColor": 3,
        "emoji": "☮️",
        "funFactTitle": "Le mot « musulman » vient de la PAIX !",
        "funFact": "La racine <strong>s-l-m</strong> veut dire « paix » et « soumission ». <em>Muslim</em> = celui qui se soumet à Allah en paix, comme un bateau qui suit calmement le courant de la rivière ! Le mot <em>salām</em> = la paix, et <em>Sulaymân</em> (Salomon) vient de la même racine — son nom veut dire « homme de paix » ! Quand on se dit <em>as-salāmu ʿalaykum</em>, on dit : « Que la paix soit sur toi ! ». L'Islam = la religion de la paix !",
        "relatedText": "La racine س - ل - م est à l'origine du mot Islam, Salomon et la salutation.",
        "related": "<span>إِسْلَام</span> (soumission/religion), <span>سَلَام</span> (paix/salut), <span>سَلِيم</span> (sain/en bonne santé)"
      }
    ],
    "quiz": [
      {
        "question": "Quel insecte a donné son nom à la sourate 27 ?",
        "options": [
          "l'abeille",
          "l'araignée",
          "la fourmi",
          "le papillon"
        ],
        "correct": 2
      },
      {
        "question": "Quel oiseau a découvert le royaume de Saba' pour Sulaymân ?",
        "options": [
          "l'aigle",
          "le héron (la huppe)",
          "le corbeau",
          "le paon"
        ],
        "correct": 1
      },
      {
        "question": "Que signifiait la racine <strong>س - ل - م</strong> dans <span class=\"arabic-inline\">مُسْلِمِينَ</span> ?",
        "options": [
          "paix et soumission",
          "guerre et combat",
          "manger et boire",
          "courir et sauter"
        ],
        "correct": 0
      },
      {
        "question": "Comment la reine de Saba' adorait-elle selon le Héron ?",
        "options": [
          "Elle adorait Allah seul",
          "Elle adorait la lune",
          "Elle adorait le soleil",
          "Elle adorait les idoles en pierre"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! 🐜 Tu as rencontré la fourmi courageuse, le héron espion et la reine de Saba' ! Tu as appris la racine <strong>ن - م - ل</strong> (fourmi), la racine <strong>ه - د - د</strong> (héron), la racine <strong>ع - ر - ش</strong> (trône), la racine <strong>س - ج - د</strong> (se prosterner) et la racine <strong>س - ل - م</strong> (paix/soumission). Sulaymân souriait en écoutant une fourmi — quel roi merveilleux !"
  },
  {
    "id": "27-03",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 32 à 45 : La reine de Saba' et le trône merveilleux",
    "shortTitle": "An-Naml (v.32-45)",
    "subtitle": "La reine consulte ses conseillers, son trône est déplacé par magie, et elle se convertit à l'Islam !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 32,
        "arabic": "قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي مَا كُنتُ قَاطِعَةً أَمْرًا حَتَّىٰ تَشْهَدُونِ",
        "french": "Elle dit : « Ô notables ! Conseillez-moi dans cette affaire. Je ne déciderai rien sans que vous ne soyez présents. »"
      },
      {
        "number": 33,
        "arabic": "قَالُوا نَحْنُ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ وَالْأَمْرُ إِلَيْكِ فَانظُرِي مَاذَا تَأْمُرِينَ",
        "french": "Ils dirent : « Nous possédons la force et une grande puissance militaire. Le commandement t'appartient cependant. Regarde donc ce que tu vas ordonner. »"
      },
      {
        "number": 34,
        "arabic": "قَالَتْ إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً وَكَذَٰلِكَ يَفْعَلُونَ",
        "french": "Elle dit : « Les rois, quand ils entrent dans une cité, la corrompent et font de ses notables les plus humbles. C'est ainsi qu'ils agissent."
      },
      {
        "number": 35,
        "arabic": "وَإِنِّي مُرْسِلَةٌ إِلَيْهِم بِهَدِيَّةٍ فَنَاظِرَةٌ بِمَ يَرْجِعُ الْمُرْسَلُونَ",
        "french": "Et moi, je vais leur envoyer un présent et voir avec quoi les envoyés reviendront. »"
      },
      {
        "number": 36,
        "arabic": "فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِّمَّا آتَاكُم بَلْ أَنتُم بِهَدِيَّتِكُمْ تَفْرَحُونَ",
        "french": "Quand il arriva auprès de Sulaymân, celui-ci dit : « Est-ce avec des biens matériels que vous voulez m'aider ? Ce qu'Allah m'a donné est meilleur que ce qu'Il vous a donné. C'est vous plutôt qui vous réjouissez de votre cadeau."
      },
      {
        "number": 37,
        "arabic": "ارْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُمْ بِجُنُودٍ لَّا قِبَلَ لَهُم بِهَا وَلَنُخْرِجَنَّهُم مِّنْهَا أَذِلَّةً وَهُمْ صَاغِرُونَ",
        "french": "Retourne auprès d'eux. Nous viendrons avec des troupes contre lesquelles ils n'auront aucune force, et nous les expulserons de là bas, humiliés et rabaissés. »"
      },
      {
        "number": 38,
        "arabic": "قَالَ يَا أَيُّهَا الْمَلَأُ أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا قَبْلَ أَن يَأْتُونِي مُسْلِمِينَ",
        "french": "Il dit : « Ô notables ! Qui d'entre vous m'apportera son trône avant qu'ils ne viennent me soumettre ?"
      },
      {
        "number": 39,
        "arabic": "قَالَ عِفْرِيتٌ مِّنَ الْجِنِّ أَنَا آتِيكَ بِهِ قَبْلَ أَن تَقُومَ مِن مَّقَامِكَ وَإِنِّي عَلَيْهِ لَقَوِيٌّ أَمِينٌ",
        "french": "Un djinn redoutable dit : « Je te l'apporterai avant que tu ne te lèves de ton siège. Je suis assez fort et digne de confiance pour cela. »"
      },
      {
        "number": 40,
        "arabic": "قَالَ الَّذِي عِندَهُ عِلْمٌ مِّنَ الْكِتَابِ أَنَا آتِيكَ بِهِ قَبْلَ أَن يَرْتَدَّ إِلَيْكَ طَرْفُكَ فَلَمَّا رَآهُ مُسْتَقِرًّا عِندَهُ قَالَ هَٰذَا مِن فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ وَمَن كَفَرَ فَإِنَّ رَبِّي غَنِيٌّ كَرِيمٌ",
        "french": "Celui qui avait une connaissance du Livre dit : « Je te l'apporterai avant que ton regard ne revienne. » Puis quand Sulaymân le vit installé auprès de lui, il dit : « C'est une grâce de mon Seigneur pour m'éprouver : serai-je reconnaissant ou ingrat ? Celui qui est reconnaissant l'est pour lui-même ; et celui qui est ingrat... mon Seigneur Se suffit à Lui-même, et Il est Généreux. »"
      },
      {
        "number": 41,
        "arabic": "قَالَ نَكِّرُوا لَهَا عَرْشَهَا نَنظُرْ أَتَهْتَدِي أَمْ تَكُونُ مِنَ الَّذِينَ لَا يَهْتَدُونَ",
        "french": "Il dit : « Déguisez-lui son trône. Nous verrons si elle sera bien guidée ou si elle sera du nombre de ceux qui ne le sont pas. »"
      },
      {
        "number": 42,
        "arabic": "فَلَمَّا جَاءَتْ قِيلَ أَهَٰذَا عَرْشُكِ قَالَتْ كَأَنَّهُ هُوَ وَأُوتِينَا الْعِلْمَ مِن قَبْلِهَا وَكُنَّا مُسْلِمِينَ",
        "french": "Quand elle vint, on lui demanda : « Est-ce ton trône ? » Elle dit : « C'est comme si c'était lui. » Et on nous a donné le savoir avant elle, et nous étions déjà soumis."
      },
      {
        "number": 43,
        "arabic": "وَصَدَّهَا مَا كَانَت تَّعْبُدُ مِن دُونِ اللَّهِ إِنَّهَا كَانَتْ مِن قَوْمٍ كَافِرِينَ",
        "french": "Ce qu'elle adorait en dehors d'Allah l'empêchait d'être croyante. Elle était d'un peuple mécréant."
      },
      {
        "number": 44,
        "arabic": "قِيلَ لَهَا ادْخُلِي الصَّرْحَ فَلَمَّا رَأَتْهُ حَسِبَتْهُ لُجَّةً وَكَشَفَتْ عَن سَاقَيْهَا قَالَ إِنَّهُ صَرْحٌ مُّصَمَّدٌ مِّن قَوَارِيرَ قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "french": "On lui dit : « Entre dans le palais. » Quand elle le vit, elle le prit pour une nappe d'eau et découvrit ses jambes. Il dit : « C'est un palais pavé de cristal. » Elle dit : « Seigneur, j'ai été injuste envers moi-même, et je me soumets avec Sulaymân à Allah, Seigneur des mondes. »"
      },
      {
        "number": 45,
        "arabic": "وَلَقَدْ أَرْسَلْنَا إِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ",
        "french": "Nous avons certes envoyé Ṣâlih vers les Thamûd, leur frère : « Adorez Allah. » Et voilà qu'ils se divisèrent en deux factions qui se disputaient."
      }
    ],
    "words": [
      {
        "word": "قُوَّةٍ",
        "translit": "quwwatin",
        "meaning": "la force / la puissance",
        "root": "ق - و - ي",
        "rootMeaning": "force / vigueur / puissance",
        "rootColor": 4,
        "emoji": "💪",
        "funFactTitle": "La vraie force ne vient pas des muscles !",
        "funFact": "La racine <strong>q-w-y</strong> veut dire « force » ou « vigueur ». Les conseillers de la reine ont dit : « Nous avons la <em>quwwah</em> = la force militaire ! » Mais Sulaymân savait que la vraie force vient d'Allah ! Le mot <em>qawī</em> = fort, puissant. Et <em>muqāwamah</em> = la résistance, le fait de rester debout face aux difficultés. En arabe, on dit : « La force vient d'Allah ! » Même Superman serait faible sans l'aide d'Allah !",
        "relatedText": "La racine ق - و - ي exprime la force physique et spirituelle.",
        "related": "<span>قَوِيّ</span> (fort/puissant), <span>تَقَوَّى</span> (craindre Allah), <span>مُقَاوَمَة</span> (résistance)"
      },
      {
        "word": "هَدِيَّةٍ",
        "translit": "hadiyyatin",
        "meaning": "un cadeau / un présent",
        "root": "ه - د - ي",
        "rootMeaning": "guider / offrir / cadeau",
        "rootColor": 5,
        "emoji": "🎁",
        "funFactTitle": "La reine a offert un cadeau, Sulaymân a offert la VÉRITÉ !",
        "funFact": "La racine <strong>h-d-y</strong> veut dire « guider » et aussi « cadeau ». La reine a envoyé une <em>hadiyyah</em> = un cadeau somptueux à Sulaymân. Mais il a dit : « Ce qu'Allah m'a donné est meilleur ! » Le mot <em>hidāyah</em> = la guidance (le meilleur cadeau d'Allah !). Et <em>hādī</em> = celui qui guide. Le plus beau cadeau que tu puisses offrir ? La vérité et la bonne direction ! C'est ce que Sulaymân a offert à la reine.",
        "relatedText": "La racine ه - د - ي relie l'idée de cadeau à celle de guidée divine.",
        "related": "<span>هِدَايَة</span> (guidance), <span>هَادٍ</span> (guide), <span>مُهْدًى</span> (offert en cadeau)"
      },
      {
        "word": "فَضْلِ",
        "translit": "faḍl",
        "meaning": "la grâce / la faveur / l'excès de bien",
        "root": "ف - ض - ل",
        "rootMeaning": "faveur / grâce / excès",
        "rootColor": 6,
        "emoji": "🌟",
        "funFactTitle": "Tout ce que tu as est un cadeau d'Allah !",
        "funFact": "La racine <strong>f-ḍ-l</strong> veut dire « faveur » ou « grâce ». Sulaymân a dit à propos du trône : « C'est de la <em>faḍl rabbiyy</em> = la grâce de mon Seigneur ! » Le mot <em>faḍl</em> = l'excès de bien, ce qui dépasse ce qui est mérité. Et <em>fāḍil</em> = généreux, excellent. Quand tu réussis un examen, dis : « C'est la grâce d'Allah ! » Le nom <em>Fāḍil</em> en arabe veut dire « généreux » — celui qui donne au-delà de ce qu'il doit !",
        "relatedText": "La racine ف - ض - ل évoque la générosité et les bienfaits d'Allah.",
        "related": "<span>فَاضِل</span> (généreux/excellent), <span>أَفْضَل</span> (meilleur), <span>فَضْلًا</span> (en plus/de grâce)"
      },
      {
        "word": "صَرْحَ",
        "translit": "ṣarḥan",
        "meaning": "le palais / la cour pavée",
        "root": "ص - ر - ح",
        "rootMeaning": "palais / être clair / plaquer",
        "rootColor": 7,
        "emoji": "🏰",
        "funFactTitle": "Un palais en verre qui ressemble à de l'eau !",
        "funFact": "La racine <strong>ṣ-r-ḥ</strong> veut dire « être clair » ou « découvrir ». Le <em>ṣarḥ</em> = le palais de Sulaymân avait un sol en cristal transparent, comme une piscine géante ! La reine a cru que c'était de l'eau et a relevé sa robe — quelle surprise ! Le mot <em>maṣrūḥ</em> = clair, évident. Et <em>iṣrāḥ</em> = élargir, dévoiler. C'était un test de Sulaymân pour voir si la reine était sage ou non. Elle a réussi le test avec intelligence !",
        "relatedText": "La racine ص - ر - ح relie la transparence du cristal à la clarté de la vérité.",
        "related": "<span>مَصْرُوح</span> (clair/évident), <span>إِصْرَاح</span> (franchise/sincérité), <span>صَارِح</span> (droit/franc)"
      },
      {
        "word": "ظَلَمْتُ",
        "translit": "ẓalamtu",
        "meaning": "j'ai été injuste",
        "root": "ظ - ل - م",
        "rootMeaning": "injustice / obscurité / ténèbres",
        "rootColor": 1,
        "emoji": "⚖️",
        "funFactTitle": "Reconnaître ses erreurs, c'est être COURAGEUX !",
        "funFact": "La racine <strong>ẓ-l-m</strong> veut dire « injustice » ou « obscurité ». La reine a dit : « J'ai été <em>ẓalamtu nafsī</em> = injuste envers moi-même » en adorant le soleil. C'est comme si elle portait des lunettes de soleil et ne voyait pas la lumière d'Allah ! Le mot <em>ẓulm</em> = l'injustice ( mettre les choses au mauvais endroit). Et <em>ẓulumāt</em> = les ténèbres. Reconnaître son erreur est le premier pas vers la lumière !",
        "relatedText": "La racine ظ - ل - م est l'une des plus citées dans le Coran pour décrire l'injustice.",
        "related": "<span>ظُلْم</span> (injustice), <span>ظَلَام</span> (obscurité), <span>مَظْلُوم</span> (lésé/opprimé)"
      }
    ],
    "quiz": [
      {
        "question": "Comment la reine de Saba' a-t-elle réagi en voyant le trône modifié ?",
        "options": [
          "Elle a hurlé de colère",
          "Elle a dit « C'est comme si c'était le sien » avec sagesse",
          "Elle a refusé de regarder",
          "Elle l'a détruit"
        ],
        "correct": 1
      },
      {
        "question": "Quelle est la racine de <span class=\"arabic-inline\">هَدِيَّةٍ</span> (cadeau) ?",
        "options": [
          "ه - د - ي",
          "ق - و - ي",
          "ف - ض - ل",
          "ص - ر - ح"
        ],
        "correct": 0
      },
      {
        "question": "Pourquoi la reine a-t-elle relevé sa robe dans le palais de Sulaymân ?",
        "options": [
          "Elle avait très chaud",
          "Elle voulait courir",
          "Le sol en cristal ressemblait à de l'eau",
          "C'était la coutume de son pays"
        ],
        "correct": 2
      },
      {
        "question": "Qui a réussi à apporter le trône de la reine le plus rapidement ?",
        "options": [
          "Le djinn redoutable (ʿifrīt)",
          "Celui qui avait la connaissance du Livre",
          "Sulaymân lui-même",
          "La reine l'a apporté"
        ],
        "correct": 1
      }
    ],
    "completionText": "Félicitations ! 👑 Tu as vu la sagesse de la reine de Saba' ! Tu as appris la racine <strong>ق - و - ي</strong> (force), la racine <strong>ه - د - ي</strong> (cadeau/guider), la racine <strong>ف - ض - ل</strong> (grâce), la racine <strong>ص - ر - ح</strong> (palais) et la racine <strong>ظ - ل - م</strong> (injustice). La reine a reconnu ses erreurs — c'est la vraie grandeur !"
  },
  {
    "id": "27-04",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 46 à 60 : Ṣâlih, Lût et les signes d'Allah",
    "shortTitle": "An-Naml (v.46-60)",
    "subtitle": "Les peuples de Ṣâlih, Lût et d'autres ont été détruits pour avoir refusé la vérité. Allah est le Seigneur de toute la création !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 46,
        "arabic": "قَالَ يَا قَوْمِ لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ لَوْلَا تَسْتَغْفِرُونَ اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
        "french": "Il dit : « Ô mon peuple ! Pourquoi cherchez-vous à hâter le mal plutôt que le bien ? Si seulement vous demandiez pardon à Allah, peut-être vous serait-il fait miséricorde. »"
      },
      {
        "number": 47,
        "arabic": "قَالُوا اطَّيَّرْنَا بِكَ وَبِمَن مَّعَكَ قَالَ طَائِرُكُمْ مَّعَ اللَّهِ بَلْ أَنتُمْ قَوْمٌ تُمْتَرُونَ",
        "french": "Ils dirent : « Nous voyons en toi et en ceux qui sont avec toi un mauvais présage. » Il dit : « Votre mauvais présage dépend d'Allah. Mais vous êtes plutôt des gens qu'on met à l'épreuve. »"
      },
      {
        "number": 48,
        "arabic": "قَالَتِ الْقَرْيَةُ الَّتِي كَانَتْ حَاضِرَةً الْأَنْهَارُ إِنَّا نَتَّبِعُ مَا وَجَدْنَا عَلَيْهِ آبَاءَنَا",
        "french": "Il y avait dans la ville un groupe de neuf individus qui semaient le trouble sur terre et ne faisaient rien de bon."
      },
      {
        "number": 49,
        "arabic": "قَالُوا تَقَاسَمُوا بِاللَّهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِ مَا شَهِدْنَا مَهْلِكَ أَهْلِهِ وَإِنَّا لَصَادِقُونَ",
        "french": "Ils dirent : « Jurez par Allah que nous l'attaquerons de nuit, lui et sa famille. Ensuite nous dirons à celui qui est responsable de lui : « Nous n'avons pas été témoins de l'assassinat de sa famille. Et nous sommes véridiques. »"
      },
      {
        "number": 50,
        "arabic": "وَمَكَرُوا مَكْرًا وَمَكَرْنَا مَكْرًا وَهُمْ لَا يَشْعُرُونَ",
        "french": "Ils ourdirent une ruse. Et Nous ourdîmes une ruse, sans qu'ils s'en rendent compte."
      },
      {
        "number": 51,
        "arabic": "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ مَكْرِهِمْ أَنَّا دَمَّرْنَاهُمْ وَقَوْمَهُمْ أَجْمَعِينَ",
        "french": "Regarde ce que fut l'issue de leur ruse : Nous les fîmes périr, eux et tout leur peuple."
      },
      {
        "number": 52,
        "arabic": "فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا إِنَّ فِي ذَٰلِكَ لَآيَةٍ لِّقَوْمٍ يَعْلَمُونَ",
        "french": "Voilà leurs maisons désertes à cause de leur injustice. Il y a là un signe pour des gens qui savent."
      },
      {
        "number": 53,
        "arabic": "وَأَنجَيْنَا الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ",
        "french": "Et Nous sauvâmes ceux qui avaient cru et qui étaient pieux."
      },
      {
        "number": 54,
        "arabic": "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ وَأَنتُمْ تُبْصِرُونَ",
        "french": "Et (rappelle-toi) Lût, quand il dit à son peuple : « Commettez-vous l'infamie à yeux ouverts ?"
      },
      {
        "number": 55,
        "arabic": "أَئِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِّن دُونِ النِّسَاءِ بَلْ أَنتُمْ قَوْمٌ تَجْهَلُونَ",
        "french": "Allez-vous plutôt vers les hommes de passion que vers les femmes ? Vous êtes plutôt un peuple ignorant. »"
      },
      {
        "number": 56,
        "arabic": "فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا أَخْرِجُوا آلَ لُوطٍ مِّن قَرْيَتِكُمْ إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ",
        "french": "La seule réponse de son peuple fut de dire : « Expulsez de votre cité la famille de Lût, car ce sont des gens qui se croient purs ! »"
      },
      {
        "number": 57,
        "arabic": "فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ قَدَّرْنَاهَا مِنَ الْغَابِرِينَ",
        "french": "Nous le sauvâmes ainsi que sa famille, sauf sa femme que Nous fîmes rester parmi ceux qui furent détruits."
      },
      {
        "number": 58,
        "arabic": "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا فَسَاء مَطَرُ الْمُنذَرِينَ",
        "french": "Et Nous fîmes pleuvoir sur eux une pluie. Et quelle mauvaise pluie que celle des avertisseurs !"
      },
      {
        "number": 59,
        "arabic": "قُلِ الْحَمْدُ لِلَّهِ وَسَلَامٌ عَلَىٰ عِبَادِهِ الَّذِينَ اصْطَفَىٰ آللَّهُ خَيْرٌ أَمَّا يُشْرِكُونَ",
        "french": "Dis : « Louange à Allah et paix sur Ses serviteurs qu'Il a élus. Allah est-Il meilleur ou ce qu'ils Lui associent ?"
      },
      {
        "number": 60,
        "arabic": "أَمَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَأَنزَلَ لَكُم مِّنَ السَّمَاءِ مَاءً فَأَنبَتْنَا بِهِ حَدَائِقَ ذَاتَ بَهْجَةٍ مَا كَانَ لَكُمْ أَن تُنبِتُوا شَجَرَهَا أَئِلَهٌ مَّعَ اللَّهِ بَلْ هُمْ قَوْمٌ يَعْدِلُونَ",
        "french": "Est-ce Celui qui a créé les cieux et la terre et qui vous a fait descendre du ciel une eau avec laquelle Nous avons fait pousser des jardins pleins de beauté, dont vous ne pouviez faire pousser les arbres ? Y a-t-il donc une divinité avec Allah ? Non, mais ce sont des gens qui Lui donnent des égaux."
      }
    ],
    "words": [
      {
        "word": "تَسْتَعْجِلُونَ",
        "translit": "tastaʿjilūn",
        "meaning": "vous vous précipitez / vous hâtez",
        "root": "ع - ج - ل",
        "rootMeaning": "se presser / se hâter / empêcher",
        "rootColor": 2,
        "emoji": "⏰",
        "funFactTitle": "La patience est une SUPER-puissance !",
        "funFact": "La racine <strong>ʿ-j-l</strong> veut dire « se hâter » ou « se précipiter ». Le peuple de Ṣâlih voulait <em>yastaʿjil</em> = hâter le châtiment au lieu de demander la miséricorde ! C'est comme un enfant qui veut ouvrir tous ses cadeaux AVANT son anniversaire — la patience donne de meilleurs résultats ! Le mot <em>ʿajalah</em> = la précipitation, et <em>taʿjīl</em> = accélérer. Allah nous enseigne : la bonne chose vient à ceux qui savent attendre !",
        "relatedText": "La racine ع - ج - ل nous rappelle l'importance de la patience dans le Coran.",
        "related": "<span>عَجُول</span> (pressé/impétueux), <span>اسْتِعْجَال</span> (précipitation), <span>تَعْجِيل</span> (accélération)"
      },
      {
        "word": "تَسْتَغْفِرُونَ",
        "translit": "tastaghfirūn",
        "meaning": "vous demandez pardon",
        "root": "غ - ف - ر",
        "rootMeaning": "pardonner / couvrir / protéger",
        "rootColor": 3,
        "emoji": "💜",
        "funFactTitle": "Demander pardon, c'est comme effacer un tableau !",
        "funFact": "La racine <strong>gh-f-r</strong> veut dire « pardonner » ou « couvrir ». <em>Istighfār</em> = demander pardon à Allah, comme une gomme magique qui efface tes erreurs ! Le mot <em>ghafar</em> = il a pardonné, et <em>ghufrān</em> = le pardon complet. L'un des noms d'Allah est <em>Al-Ghafūr</em> = le Très Pardonneur. Le Prophète ﷺ demandait pardon plus de 70 fois par jour ! Imagine si quelqu'un t'offrait 70 chances par jour d'effacer tes erreurs — tu dirais oui !",
        "relatedText": "La racine غ - ف - ر est l'une des plus réconfortantes du Coran.",
        "related": "<span>غَفُور</span> (Très Pardonneur), <span>مَغْفِرَة</span> (pardon), <span>غِفْرَان</span> (grâce/pardon)"
      },
      {
        "word": "أَنزَلَ",
        "translit": "anzala",
        "meaning": "Il a fait descendre",
        "root": "ن - ز - ل",
        "rootMeaning": "descendre / révéler",
        "rootColor": 4,
        "emoji": "💧",
        "funFactTitle": "L'eau du ciel = la vie sur terre !",
        "funFact": "La racine <strong>n-z-l</strong> veut dire « descendre ». Allah <em>anzala</em> = a fait descendre l'eau du ciel pour faire pousser des jardins magnifiques ! Le mot <em>nuzūl</em> = la descente, la révélation (le Coran est un <em>nuzūl</em> min Allah). Et <em>munazzal</em> = le lieu de descente (comme un paradis !). Imagine des millions de gouttes d'eau qui tombent du ciel — chacune est un signe de la générosité d'Allah !",
        "relatedText": "La racine ن - ز - ل est utilisée pour l'eau, la révélation et tout ce qui descend.",
        "related": "<span>نُزُول</span> (descente/révélation), <span>مَنْزِل</span> (lieu de séjour), <span>نَازِلَة</span> (calamité/éprouvante)"
      },
      {
        "word": "حَدَائِقَ",
        "translit": "ḥadāʾiq",
        "meaning": "des jardins",
        "root": "ح - د - ق",
        "rootMeaning": "entourer / jardin / ceinturer",
        "rootColor": 5,
        "emoji": "🌺",
        "funFactTitle": "Les jardins d'Allah sont les plus beaux du monde !",
        "funFact": "La racine <strong>ḥ-d-q</strong> veut dire « entourer » et aussi « jardin ». Les <em>ḥadāʾiq</em> = les jardins magnifiques avec des fleurs de toutes les couleurs ! Le mot <em>ḥadīqah</em> = un jardin, littéralement « ce qui est entouré de murs » comme un paradis secret ! En arabe, le Jardin du Paradis s'appelle aussi <em>ḥadīqah</em>. Allah fait pousser des jardins avec de l'eau — et toi, tu ne peux même pas faire pousser une seule fleur sans Son aide !",
        "relatedText": "La racine ح - د - q décrit les jardins et tout ce qui est entouré de beauté.",
        "related": "<span>حَدِيقَة</span> (jardin/parc), <span>مُحَدَّق</span> (entouré/encerclé), <span>حَدْقَة</span> (pupille de l'œil)"
      },
      {
        "word": "الْحَمْدُ",
        "translit": "al-ḥamdu",
        "meaning": "la louange / la gratitude",
        "root": "ح - م - د",
        "rootMeaning": "louer / remercier / compliment",
        "rootColor": 6,
        "emoji": "👏",
        "funFactTitle": "Al-Ḥamdu li-llāh : la phrase la plus importante !",
        "funFact": "La racine <strong>ḥ-m-d</strong> veut dire « louer » ou « remercier ». <em>Al-ḥamdu li-llāh</em> = Louange à Allah, la phrase que les croyants disent le plus souvent ! Le mot <em>muḥammad</em> (le nom du Prophète ﷺ) vient de cette racine : « Celui qui est digne de louanges » ! Et <em>maḥmūd</em> = celui qui est loué. Quand tu dis « Al-ḥamdu li-llāh », tu remercies Allah pour TOUT — même les choses difficiles ! C'est la clé du bonheur.",
        "relatedText": "La racine ح - م - د est à l'origine du nom du Prophète ﷺ et de la louange.",
        "related": "<span>مُحَمَّد</span> (digne de louanges), <span>مَحْمُود</span> (loué), <span>حَمِيد</span> (digne d'éloges)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">تَسْتَغْفِرُونَ</span> (tastaghfirūn) ?",
        "options": [
          "vous dormez",
          "vous mangez",
          "vous demandez pardon",
          "vous voyagez"
        ],
        "correct": 2
      },
      {
        "question": "Que s'est-il passé avec le peuple de Lût (v57-58) ?",
        "options": [
          "Ils ont été guidés vers la vérité",
          "Une pluie destructrice est tombée sur eux",
          "Ils ont fui vers la mer",
          "Un tremblement de terre les a épargnés"
        ],
        "correct": 1
      },
      {
        "question": "Quel nom du Prophète ﷺ vient de la racine <strong>ح - م - د</strong> ?",
        "options": [
          "Ibrâhîm",
          "ʿĪsâ",
          "Muḥammad",
          "Mûsâ"
        ],
        "correct": 2
      },
      {
        "question": "Laquelle de ces racines signifie « pardonner / couvrir » ?",
        "options": [
          "ع - ج - ل",
          "ح - م - د",
          "ن - ز - ل",
          "غ - ف - ر"
        ],
        "correct": 3
      }
    ],
    "completionText": "Bravo ! 🌺 Tu as appris les leçons des peuples anciens ! Tu as découvert la racine <strong>ع - ج - ل</strong> (se hâter), la racine <strong>غ - ف - ر</strong> (pardonner), la racine <strong>ن - ز - ل</strong> (descendre), la racine <strong>ح - د - ق</strong> (jardin) et la racine <strong>ح - م - د</strong> (louer). Les peuples qui refusèrent la vérité furent détruits, mais les croyants furent sauvés !"
  },
  {
    "id": "27-05",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 61 à 76 : Les signes dans la création d'Allah",
    "shortTitle": "An-Naml (v.61-76)",
    "subtitle": "Qui a créé la terre, les montagnes, les étoiles et les mers ? Allah seul ! Pourquoi adorer autre chose que Lui ?",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 61,
        "arabic": "أَمَّن جَعَلَ الْأَرْضَ قَرَارًا وَجَعَلَ خِلَالَهَا أَنْهَارًا وَجَعَلَ لَهَا رَوَاسِيَ وَجَعَلَ بَيْنَ الْبَحْرَيْنِ حَاجِزًا أَإِلَهٌ مَّعَ اللَّهِ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ",
        "french": "Est-ce Celui qui a fait de la terre une demeure stable, qui a placé des rivières à travers elle, qui a érigé des montagnes immobiles et qui a mis une barrière entre les deux mers — y a-t-il une divinité avec Allah ? Non, mais la plupart d'entre eux ne savent pas."
      },
      {
        "number": 62,
        "arabic": "أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ السُّوءَ وَيَجْعَلُكُمْ خُلَفَاءَ الْأَرْضِ أَإِلَهٌ مَّعَ اللَّهِ قَلِيلًا مَّا تَذَكَّرُونَ",
        "french": "Est-ce Celui qui répond au malheureux quand Il l'invoque, qui écarte le mal et qui vous fait succéder sur la terre — y a-t-il donc une divinité avec Allah ? Que peu vous rappelez-vous !"
      },
      {
        "number": 63,
        "arabic": "أَمَّن يَهْدِيكُمْ فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ وَمَن يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ أَإِلَهٌ مَّعَ اللَّهِ تَعَالَى اللَّهُ عَمَّا يُشْرِكُونَ",
        "french": "Est-ce Celui qui vous guide dans les ténèbres de la terre et de la mer, et qui envoie les vents comme annonciateurs de Sa miséricorde — y a-t-il une divinité avec Allah ? Allah est très élevé au-dessus de ce qu'ils Lui associent."
      },
      {
        "number": 64,
        "arabic": "أَمَّن يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ وَمَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ أَإِلَهٌ مَّعَ اللَّهِ قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ",
        "french": "Est-ce Celui qui commence la création puis la refait, et qui vous nourrit du ciel et de la terre — y a-t-il une divinité avec Allah ? Dis : « Apportez votre preuve, si vous êtes véridiques. »"
      },
      {
        "number": 65,
        "arabic": "قُلْ لَا يَعْلَمُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ الْغَيْبَ إِلَّا اللَّهُ وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ",
        "french": "Dis : « Personne au ciel et sur terre ne connaît l'Inconnaissable à part Allah. Et ils ne savent pas quand ils seront ressuscités. »"
      },
      {
        "number": 66,
        "arabic": "بَلِ ادَّارَكَ عِلْمُهُمْ فِي الْآخِرَةِ بَلْ هُمْ فِي شَكٍّ مِّنْهَا بَلْ هُمْ مِّنْهَا عَمِينَ",
        "french": "Au contraire, leur science concernant l'au-delà est nulle. Ils doutent plutôt à son sujet. Ils sont plutôt aveugles à son sujet."
      },
      {
        "number": 67,
        "arabic": "وَقَالَ الَّذِينَ كَفَرُوا أَإِذَا كُنَّا تُرَابًا وَآبَاؤُنَا أَئِنَّا لَمُخْرَجُونَ",
        "french": "Et ceux qui ont mécru dirent : « Est-ce que lorsque nous serons poussière, nous et nos pères, serons-nous ressuscités ?"
      },
      {
        "number": 68,
        "arabic": "لَقَدْ وُعِدْنَا هَٰذَا نَحْنُ وَآبَاؤُنَا مِن قَبْلُ إِنْ هَٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ",
        "french": "On nous a certes promis cela, ainsi qu'à nos pères auparavant. Ce ne sont que des contes des anciens. »"
      },
      {
        "number": 69,
        "arabic": "قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِينَ",
        "french": "Dis : « Parcourez la terre et regardez quelle a été la fin des criminels. »"
      },
      {
        "number": 70,
        "arabic": "وَلَا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُن فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ",
        "french": "Et ne t'afflige pas pour eux, et ne sois pas angoissé par ce qu'ils ourdissent."
      },
      {
        "number": 71,
        "arabic": "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
        "french": "Et ils disent : « Quand cette promesse se réalisera-t-elle, si vous êtes véridiques ? »"
      },
      {
        "number": 72,
        "arabic": "قُلْ عَسَىٰ أَن يَكُونَ رَدِفَ لَكُم بَعْضُ الَّذِي تَسْتَعْجِلُونَ",
        "french": "Dis : « Il se peut que ce que vous hâtez soit déjà tout près de vous."
      },
      {
        "number": 73,
        "arabic": "وَإِنَّ رَبَّكَ لَذُو فَضْلٍ عَلَى النَّاسِ وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَشْكُرُونَ",
        "french": "Et ton Seigneur a certes une grâce envers les gens, mais la plupart d'entre eux ne sont pas reconnaissants."
      },
      {
        "number": 74,
        "arabic": "وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ وَمَا يُعْلِنُونَ",
        "french": "Ton Seigneur sait certes ce que renferment leurs poitrines et ce qu'ils divulguent."
      },
      {
        "number": 75,
        "arabic": "وَمَا مِنْ غَائِبَةٍ فِي السَّمَاءِ وَالْأَرْضِ إِلَّا فِي كِتَابٍ مُّبِينٍ",
        "french": "Et il n'y a rien de caché dans le ciel et sur la terre qui ne soit dans un Livre explicite."
      },
      {
        "number": 76,
        "arabic": "إِنَّ هَٰذَا الْقُرْآنَ يَقُصُّ عَلَىٰ بَنِي إِسْرَائِيلَ أَكْثَرَ الَّذِي هُمْ فِيهِ يَخْتَلِفُونَ",
        "french": "Ce Coran raconte aux Enfants d'Isrâ'îl la plupart de ce sur quoi ils divergent."
      }
    ],
    "words": [
      {
        "word": "رَوَاسِيَ",
        "translit": "rawāsiya",
        "meaning": "des montagnes immobiles / des ancrages",
        "root": "ر - و - س",
        "rootMeaning": "être stable / ancrer / consolider",
        "rootColor": 7,
        "emoji": "⛰️",
        "funFactTitle": "Les montagnes sont les « clous » de la Terre !",
        "funFact": "La racine <strong>r-w-s</strong> veut dire « être stable » ou « ancrer ». Les <em>rawāsiy</em> = les montagnes immobiles, comme des clous géants qui maintiennent la Terre en place ! Le mot <em>rāsiy</em> = stable, ferme, solide. Et <em>arsā</em> = il a ancré, fixé. Sans les montagnes, la Terre tremblerait comme de la gelée ! C'est Allah qui a créé ce système de stabilisation incroyable. Prochaine fois que tu vois une montagne, dis : « Subḥān'Allah ! »",
        "relatedText": "La racine ر - و - س illustre la stabilité que les montagnes offrent à la Terre.",
        "related": "<span>رَاسِخ</span> (ferme/stable), <span>تَرْوِيس</span> (ancrage), <span>مُرَاسِل</span> (durable/constant)"
      },
      {
        "word": "الْمُضْطَرَّ",
        "translit": "al-muḍṭarru",
        "meaning": "le malheureux / le désespéré",
        "root": "ض - ر - ر",
        "rootMeaning": "difficulté / nuisible / contraint",
        "rootColor": 1,
        "emoji": "🆘",
        "funFactTitle": "Quand tu es en difficulté, Allah T'ÉCOUTE !",
        "funFact": "La racine <strong>ḍ-r-r</strong> veut dire « difficulté » ou « nuisance ». Le <em>muḍṭarr</em> = le désespéré, celui qui n'a plus aucun espoir sauf en Allah. Allah dit : « Je réponds à celui qui M'invoque quand il est dans le besoin ! » C'est comme un numéro d'urgence GRATUIT qui fonctionne 24h/24 ! Le mot <em>ḍarr</em> = le mal, la difficulté. Et <em>ḍarar</em> = le dommage. Même quand tout va mal, Allah est là !",
        "relatedText": "La racine ض - ر - ر nous enseigne qu'Allah répond toujours à l'appel du désespéré.",
        "related": "<span>ضُرّ</span> (mal/difficulté), <span>ضَرُورِيّ</span> (indispensable/urgent), <span>مَضَرَّة</span> (nuisance)"
      },
      {
        "word": "يَهْدِيكُمْ",
        "translit": "yahdīkum",
        "meaning": "Il vous guide",
        "root": "ه - د - ي",
        "rootMeaning": "guider / diriger / orienter",
        "rootColor": 2,
        "emoji": "🧭",
        "funFactTitle": "Allah est ton GPS céleste !",
        "funFact": "La racine <strong>h-d-y</strong> veut dire « guider ». Allah <em>yahdīkum</em> = Il vous guide, comme un GPS parfait qui ne se trompe JAMAIS ! Le mot <em>hidāyah</em> = la guidance divine, la meilleure direction possible. Et <em>hādī</em> = le Guide (l'un des beaux noms d'Allah). Dans les ténèbres de la terre et de la mer, qui te guide ? Allah ! Même sans téléphone ni Wi-Fi, Allah trouve toujours le bon chemin pour toi.",
        "relatedText": "La racine ه - د - ي est centrale dans le Coran pour décrire la guidance d'Allah.",
        "related": "<span>هِدَايَة</span> (guidance), <span>مُهْتَدٍ</span> (bien guidé), <span>هَادِي</span> (guide)"
      },
      {
        "word": "الْغَيْبَ",
        "translit": "al-ghayba",
        "meaning": "l'Inconnaissable / l'invisible / le futur",
        "root": "غ - ي - ب",
        "rootMeaning": "disparaître / être absent / l'invisible",
        "rootColor": 3,
        "emoji": "🔮",
        "funFactTitle": "Seul Allah connaît l'invisible !",
        "funFact": "La racine <strong>gh-y-b</strong> veut dire « être absent » ou « invisible ». <em>Al-ghayb</em> = l'Inconnaissable, ce que personne ne peut voir — le futur, l'au-delà, les cœurs des gens ! Le mot <em>ghā'ib</em> = absent, disparu. Et <em>maghīb</em> = caché, secret. Seul Allah connaît le <em>ghayb</em> ! Pas les astrologues, pas les devins, pas même les anges. C'est comme un coffre-fort céleste dont seul Allah a le code !",
        "relatedText": "La racine غ - ي - ب nous rappelle que seul Allah connaît l'invisible.",
        "related": "<span>غَائِب</span> (absent), <span>مَغِيب</span> (caché/occulté), <span>غَيَاب</span> (disparition/absence)"
      },
      {
        "word": "يَقُصُّ",
        "translit": "yaquṣṣu",
        "meaning": "il raconte / il relate",
        "root": "ق - ص - ص",
        "rootMeaning": "raconter / suivre les traces / couper",
        "rootColor": 4,
        "emoji": "📖",
        "funFactTitle": "Le Coran : le meilleur livre d'histoires du monde !",
        "funFact": "La racine <strong>q-ṣ-ṣ</strong> veut dire « raconter » ou « relater ». Le Coran <em>yaquṣṣu</em> = raconte les histoires des peuples anciens, comme un film 3D mais en vrai ! Le mot <em>qaṣaṣ</em> = le récit, l'histoire. Et <em>muqaṣṣaṣ</em> = bien raconté, détaillé. La sourate suivante (28) s'appelle <em>Al-Qaṣaṣ</em> = Le Récit ! Le Coran ne raconte pas pour divertir, mais pour nous donner des leçons de vie. Chaque histoire a un message pour toi !",
        "relatedText": "La racine ق - ص - ص est à l'origine du nom de la sourate Al-Qaṣaṣ (28).",
        "related": "<span>قِصَاص</span> (récit/représailles), <span>قَصَص</span> (histoires/récits), <span>مُقَصِّص</span> (conteur)"
      }
    ],
    "quiz": [
      {
        "question": "À quoi les montagnes sont-elles comparées dans le Coran (v61) ?",
        "options": [
          "Des nuages géants",
          "Des ancres qui stabilisent la Terre",
          "Des escaliers vers le ciel",
          "Des miroirs pour le soleil"
        ],
        "correct": 1
      },
      {
        "question": "Qui connaît <span class=\"arabic-inline\">الْغَيْبَ</span> (l'Inconnaissable) ?",
        "options": [
          "Les savants",
          "Les anges",
          "Personne sauf Allah",
          "Les prophètes"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie la racine <strong>ض - ر - ر</strong> dans <span class=\"arabic-inline\">الْمُضْطَرَّ</span> ?",
        "options": [
          "le heureux",
          "le riche",
          "le malheureux / le désespéré",
          "le voyageur"
        ],
        "correct": 2
      },
      {
        "question": "Le Coran est décrit comme un livre qui <span class=\"arabic-inline\">يَقُصُّ</span>. Que veut dire ce mot ?",
        "options": [
          "il chante",
          "il raconte",
          "il danse",
          "il construit"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! ⛰️ Tu as découvert les signes d'Allah dans la création ! Tu as appris la racine <strong>ر - و - س</strong> (être stable), la racine <strong>ض - ر - ر</strong> (difficulté), la racine <strong>ه - د - ي</strong> (guider), la racine <strong>غ - ي - ب</strong> (l'invisible) et la racine <strong>ق - ص - ص</strong> (raconter). Allah est le seul qui mérite d'être adoré !"
  },
  {
    "id": "27-06",
    "surah": 27,
    "surahName": "An-Naml",
    "title": "An-Naml — Versets 77 à 93 : Le Coran comme guidance et la fin des mécréants",
    "shortTitle": "An-Naml (v.77-93)",
    "subtitle": "Le Coran est une guidance et une miséricorde pour les croyants. La promesse d'Allah se réalise toujours !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 77,
        "arabic": "وَإِنَّهُ لَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
        "french": "C'est là certes un guide et une miséricorde pour les croyants."
      },
      {
        "number": 78,
        "arabic": "إِنَّ رَبَّكَ يَقْضِي بَيْنَهُم بِحُكْمِهِ وَهُوَ الْعَزِيزُ الْعَلِيمُ",
        "french": "Ton Seigneur jugera certes entre eux par Son jugement. Il est le Puissant, l'Omniscient."
      },
      {
        "number": 79,
        "arabic": "فَتَوَكَّلْ عَلَى اللَّهِ إِنَّكَ عَلَى الْحَقِّ الْمُبِينِ",
        "french": "Place donc ta confiance en Allah. Tu es certes dans la vérité évidente."
      },
      {
        "number": 80,
        "arabic": "إِنَّكَ لَا تُسْمِعُ الْمَوْتَىٰ وَلَا تُسْمِعُ الصُّمَّ الدُّعَاءَ إِذَا وَلَّوْا مُدْبِرِينَ",
        "french": "Tu ne peux faire entendre les morts ni faire entendre l'appel aux sourds quand ils tournent le dos."
      },
      {
        "number": 81,
        "arabic": "وَمَا أَنتَ بِهَادِي الْعُمْيِ عَن ضَلَالَتِهِمْ إِن تُسْمِعُ إِلَّا مَن يُؤْمِنُ بِآيَاتِنَا فَهُم مُّسْلِمُونَ",
        "french": "Et tu n'es pas celui qui guide les aveugles loin de leur égarement. Tu ne fais entendre que ceux qui croient en Nos versets et qui se soumettent."
      },
      {
        "number": 82,
        "arabic": "وَإِذَا وَقَعَ الْقَوْلُ عَلَيْهِمْ أَخْرَجْنَا لَهُمْ دَابَّةً مِّنَ الْأَرْضِ تُكَلِّمُهُمْ أَنَّ النَّاسَ كَانُوا بِآيَاتِنَا لَا يُوقِنُونَ",
        "french": "Et lorsque la Parole tombera sur eux, Nous ferons sortir de terre une bête qui leur parlera, [et leur dira] que les hommes n'étaient pas convaincus de Nos signes."
      },
      {
        "number": 83,
        "arabic": "وَيَوْمَ نَحْشُرُ مِن كُلِّ أُمَّةٍ فَوْجًا مِّمَّن يُكَذِّبُ بِآيَاتِنَا فَهُمْ يُوزَعُونَ",
        "french": "Et le jour où Nous rassemblerons, de chaque communauté, un groupe de ceux qui traitaient Nos signes de mensonge, ils seront gardés en rangs."
      },
      {
        "number": 84,
        "arabic": "حَتَّىٰ إِذَا جَاءُوا قَالَ أَأَنتُمْ كَذَّبْتُم بِآيَاتِي وَلَمْ تُحِيطُوا بِهَا عِلْمًا أَمَّاذَا كُنتُمْ تَعْمَلُونَ",
        "french": "Puis quand ils seront arrivés, Il dira : « Avez-vous traité Mes signes de mensonge sans les avoir étudiés ? Qu'avez-vous donc fait ? »"
      },
      {
        "number": 85,
        "arabic": "وَوَقَعَ الْقَوْلُ عَلَيْهِم بِمَا ظَلَمُوا فَهُمْ لَا يَنطِقُونَ",
        "french": "Et le jugement sera prononcé contre eux en raison de leur injustice. Ils ne pourront parler."
      },
      {
        "number": 86,
        "arabic": "أَلَمْ يَرَوْا أَنَّا جَعَلْنَا اللَّيْلَ لِيَسْكُنُوا فِيهِ وَالنَّهَارَ مُبْصِرًا إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يُؤْمِنُونَ",
        "french": "N'ont-ils pas vu que Nous avons fait la nuit pour qu'ils s'y reposent, et le jour pour y voir clair ? Il y a là des signes pour des gens qui croient."
      },
      {
        "number": 87,
        "arabic": "وَيَوْمَ يُنْفَخُ فِي الصُّورِ فَفَزِعَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ إِلَّا مَن شَاءَ اللَّهُ وَكُلٌّ أَتَوْهُ دَاخِرِينَ",
        "french": "Et le jour où l'on soufflera dans la Trompette, tous ceux qui sont dans les cieux et sur la terre seront effrayés — exceptés ceux qu'Allah voudra. Tous viendront à Lui humblement."
      },
      {
        "number": 88,
        "arabic": "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ صَنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ إِنَّهُ خَبِيرٌ بِمَا تَفْعَلُونَ",
        "french": "Et tu verras les montagnes que tu croyais immobiles, s'envoler comme des nuages. Telle est l'œuvre d'Allah qui a tout façonné avec perfection. Il est parfaitement Informé de ce que vous faites."
      },
      {
        "number": 89,
        "arabic": "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ مِّنْهَا وَهُم مِّن فَزَعٍ يَوْمَئِذٍ آمِنُونَ",
        "french": "Celui qui viendra avec une bonne action aura mieux encore. Et ils seront à l'abri de la terreur ce jour-là."
      },
      {
        "number": 90,
        "arabic": "وَمَن جَاءَ بِالسَّيِّئَةِ فَكُبَّتْ وُجُوهُهُمْ فِي النَّارِ هَلْ تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ",
        "french": "Et celui qui viendra avec une mauvaise action... on se penchera son visage dans le Feu. « Ne serez-vous rétribués que selon ce que vous faisiez ? »"
      },
      {
        "number": 91,
        "arabic": "إِنَّمَا أُمِرْتُ أَنْ أَعْبُدَ رَبَّ هَٰذِهِ الْبَلْدَةِ الَّذِي حَرَّمَهَا وَلَهُ كُلُّ شَيْءٍ وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ",
        "french": "Il ne m'a été commandé que d'adorer le Seigneur de cette cité qu'Il a sanctifiée, à Lui appartient toute chose. Et il m'a été commandé d'être du nombre des Musulmans."
      },
      {
        "number": 92,
        "arabic": "وَأَنْ أَتْلُوَ الْقُرْآنَ فَمَنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ وَمَن ضَلَّ فَقُلْ إِنَّمَا أَنَا مِنَ الْمُنذِرِينَ",
        "french": "Et de réciter le Coran. Quiconque se guide, le fait pour lui-même. Et quiconque s'égare... dis alors : « Je ne suis qu'un avertisseur. »"
      },
      {
        "number": 93,
        "arabic": "وَقُلِ الْحَمْدُ لِلَّهِ سَيُرِيكُمْ آيَاتِهِ فَتَعْرِفُونَهَا وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
        "french": "Et dis : « Louange à Allah ! Il vous montrera Ses signes et vous les reconnaîtrez. » Ton Seigneur n'est pas inattentif à ce que vous faites."
      }
    ],
    "words": [
      {
        "word": "هُدًى",
        "translit": "hudan",
        "meaning": "une guidance / un guide",
        "root": "ه - د - ي",
        "rootMeaning": "guider / diriger / orienter",
        "rootColor": 5,
        "emoji": "🌟",
        "funFactTitle": "Le Coran : la meilleure boussole de l'univers !",
        "funFact": "La racine <strong>h-d-y</strong> veut dire « guider ». Le Coran est <em>hudan wa raḥmah</em> = guidance et miséricorde, comme une carte au trésor qui te mène directement au Paradis ! Le mot <em>hidāyah</em> = la guidance complète, parfaite. Allah dit que le Coran guide ceux qui croient. C'est comme si Allah te donnait un GPS céleste qui ne bugge JAMAIS et qui te mène toujours au bon endroit !",
        "relatedText": "La racine ه - د - ي est au cœur de la mission du Coran comme guide.",
        "related": "<span>هَادِي</span> (guide), <span>مُهْتَدٍ</span> (guidé), <span>هِدَايَة</span> (guidance)"
      },
      {
        "word": "يَقْضِي",
        "translit": "yaqḍī",
        "meaning": "Il juge / Il décide",
        "root": "ق - ض - ي",
        "rootMeaning": "juger / décider / exécuter",
        "rootColor": 6,
        "emoji": "⚖️",
        "funFactTitle": "Allah est le Juge le plus juste du monde !",
        "funFact": "La racine <strong>q-ḍ-y</strong> veut dire « juger » ou « décider ». Allah <em>yaqḍī</em> = Il juge entre les gens avec justice parfaite, comme un arbitre qui ne se trompe JAMAIS ! Le mot <em>qaḍāʾ</em> = le jugement, le décret divin. Et <em>qāḍī</em> = un juge. Contrairement aux juges humains qui peuvent se tromper, Allah connaît TOUT — les pensées cachées, les intentions secrètes. Son jugement est toujours équitable !",
        "relatedText": "La racine ق - ض - ي exprime la justice divine parfaite.",
        "related": "<span>قَضَاء</span> (décret/jugement), <span>قَاضٍ</span> (juge), <span>مَقْضِيّ</span> (décidé/tranché)"
      },
      {
        "word": "تَوَكَّلْ",
        "translit": "tawakkal",
        "meaning": "place ta confiance / fie-toi",
        "root": "و - ك - ل",
        "rootMeaning": "confier / déléguer / se fier",
        "rootColor": 7,
        "emoji": "🤝",
        "funFactTitle": "Donner les clés à Allah, c'est la meilleure décision !",
        "funFact": "La racine <strong>w-k-l</strong> veut dire « confier » ou « déléguer ». <em>Tawakkal</em> = place ta confiance en Allah, comme si tu donnais les clés de ta vie au Meilleur Conducteur de l'univers ! Le mot <em>tawakkul</em> = la confiance totale en Allah. Et <em>wakīl</em> = un représentant, un protecteur. Allah est le meilleur <em>wakīl</em> ! Faire de ton mieux ET faire confiance à Allah, c'est la formule magique pour réussir dans la vie !",
        "relatedText": "La racine و - ك - ل enseigne la confiance totale en Allah.",
        "related": "<span>وَكِيل</span> (représentant/protecteur), <span>تَوْكِيل</span> (délégation), <span>اتَّكَلَ</span> (se reposer sur)"
      },
      {
        "word": "الصُّورِ",
        "translit": "aṣ-ṣūr",
        "meaning": "la Trompette / le Cor",
        "root": "ص - و - ر",
        "rootMeaning": "souffler / sonner / image",
        "rootColor": 1,
        "emoji": "📯",
        "funFactTitle": "Le son le plus puissant de l'histoire de l'univers !",
        "funFact": "La racine <strong>ṣ-w-r</strong> veut dire « sonner » ou « souffler ». Le <em>ṣūr</em> = la Trompette que l'ange Isrâfîl soufflera au Jour du Jugement. Quand ce son retentira, TOUT le monde sera terrifié — excepté ceux qu'Allah veut ! Le mot <em>ṣūrah</em> = une image, une photo. Et <em>ṣawr</em> = le son de la trompette. Imagine le son le plus fort que tu aies jamais entendu multiplié par un million — ce sera encore rien comparé au <em>ṣūr</em> !",
        "relatedText": "La racine ص - و - ر est liée au son de la Trompette du Jour du Jugement.",
        "related": "<span>صُورَة</span> (image/photo), <span>تَصْوِير</span> (formation/création), <span>مِصْوَار</span> (trompette)"
      },
      {
        "word": "أَتْقَنَ",
        "translit": "atqana",
        "meaning": "Il a perfectionné / façonné avec soin",
        "root": "ت - ق - ن",
        "rootMeaning": "perfectionner / maîtriser / achever",
        "rootColor": 2,
        "emoji": "✨",
        "funFactTitle": "Allah est le PLUS GRAND artiste de l'univers !",
        "funFact": "La racine <strong>t-q-n</strong> veut dire « perfectionner » ou « maîtriser ». Allah <em>atqana kulla shayʾ</em> = a perfectionné TOUTE chose, comme un artiste qui met les touches finales sur son chef-d'œuvre ! Le mot <em>itqān</em> = la perfection, l'excellence. Et <em>mutqin</em> = un expert, un maître. Même les montagnes qui semblent immobiles sont des créations parfaites ! Le Prophète ﷺ a dit : « Allah a prescrit l'iḥsān (l'excellence) en toute chose. »",
        "relatedText": "La racine ت - ق - n célèbre la perfection de la création d'Allah.",
        "related": "<span>إِتْقَان</span> (perfection/excellence), <span>مُتْقِن</span> (expert/maître), <span>تَقَانَة</span> (technologie/technique)"
      }
    ],
    "quiz": [
      {
        "question": "Le Coran est décrit comme <span class=\"arabic-inline\">هُدًى وَرَحْمَةٌ</span>. Cela signifie :",
        "options": [
          "un jeu et un divertissement",
          "une guidance et une miséricorde",
          "un puzzle et une devinette",
          "une chanson et une poésie"
        ],
        "correct": 1
      },
      {
        "question": "Que se passera-t-il quand on soufflera dans <span class=\"arabic-inline\">الصُّورِ</span> (la Trompette) ?",
        "options": [
          "Tout le monde dormira",
          "Les gens dans les cieux et sur terre seront effrayés",
          "Il ne se passera rien",
          "Seuls les mécréants entendront"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine <strong>ت - ق - ن</strong> dans <span class=\"arabic-inline\">أَتْقَنَ</span> ?",
        "options": [
          "détruire",
          "oublier",
          "perfectionner",
          "courir"
        ],
        "correct": 2
      },
      {
        "question": "Le Prophète ﷺ a été commandé d'être du nombre des <span class=\"arabic-inline\">مُسْلِمِينَ</span>. La racine س - ل - م signifie :",
        "options": [
          "guerre et combat",
          "paix et soumission",
          "tristesse et peur",
          "faim et soif"
        ],
        "correct": 1
      }
    ],
    "completionText": "Félicitations ! 🎉 Tu as terminé la sourate An-Naml ! Tu as découvert la racine <strong>ه - د - ي</strong> (guider), la racine <strong>ق - ض - ي</strong> (juger), la racine <strong>و - ك - ل</strong> (confier), la racine <strong>ص - و - ر</strong> (trompette) et la racine <strong>ت - ق - ن</strong> (perfectionner). La sourate de la Fourmi t'a appris que la confiance en Allah et la gratitude sont les clés du bonheur !"
  },
  {
    "id": "28-01",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 1 à 13 : Le bébé dans le Nil et la mère courageuse",
    "shortTitle": "Al-Qasas (v.1-13)",
    "subtitle": "Découvrons le début de la sourate du Récit : Fir'awn tyrannise les Enfants d'Israël, et la mère de Mûsâ dépose son bébé dans le fleuve avec une confiance totale en Allah !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 2,
        "arabic": "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
        "french": "Voici les versets du Livre explicite."
      },
      {
        "number": 3,
        "arabic": "نَتْلُو عَلَيْكَ مِن نَّبَإِ مُوسَىٰ وَفِرْعَوْنَ بِالْحَقِّ لِقَوْمٍ يُؤْمِنُونَ",
        "french": "Nous te racontons en toute vérité l'histoire de Mûsâ et de Fir'awn, pour des gens qui croient."
      },
      {
        "number": 4,
        "arabic": "إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ وَجَعَلَ أَهْلَهَا شِيَعًا يَسْتَضْعِفُ طَائِفَةً مِّنْهُمْ يُذَبِّحُ أَبْنَاءَهُمْ وَيَسْتَحْيِي نِسَاءَهُمْ ۚ إِنَّهُ كَانَ مِنَ الْمُفْسِدِينَ",
        "french": "Fir'awn s'enorgueillit sur terre et divisa ses habitants en groupes, opprimant l'un d'eux : il massacrait leurs fils et laissait vivre leurs femmes. Il était vraiment du nombre des corrupteurs."
      },
      {
        "number": 5,
        "arabic": "وَنُرِيدُ أَن نَّمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ وَنَجْعَلَهُمْ أَئِمَّةً وَنَجْعَلَهُمُ الْوَارِثِينَ",
        "french": "Nous voulions accorder une faveur à ceux qui étaient opprimés sur terre, en faire des dirigeants et en faire les héritiers."
      },
      {
        "number": 7,
        "arabic": "وَأَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ أَنْ أَرْضِعِيهِ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ",
        "french": "Nous révélâmes à la mère de Mûsâ : « Allaite-le. Si tu crains pour lui, jette-le dans le fleuve. Ne crains pas, ne t'attriste pas : Nous te le ramènerons et ferons de lui un Messager. »"
      },
      {
        "number": 8,
        "arabic": "فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا ۗ إِنَّ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا كَانُوا خَاطِئِينَ",
        "french": "La famille de Fir'awn le recueillit pour qu'il soit leur ennemi et source de chagrin. Fir'awn, Hâmân et leurs troupes étaient fautifs."
      },
      {
        "number": 10,
        "arabic": "وَأَصْبَحَ فُؤَادُ أُمِّ مُوسَىٰ فَارِغًا ۖ إِن كَادَتْ لَتُبْدِي بِهِ لَوْلَا أَن رَّبَطْنَا عَلَىٰ قَلْبِهَا لِتَكُونَ مِنَ الْمُؤْمِنِينَ",
        "french": "Le cœur de la mère de Mûsâ devint vide. Elle allait presque le révéler, si Nous n'avions pas raffermi son cœur pour qu'elle reste parmi les croyantes."
      },
      {
        "number": 13,
        "arabic": "فَرَدَدْنَاهُ إِلَىٰ أُمِّهِ كَيْ تَقَرَّ عَيْنُهَا وَلَا تَحْزَنَ وَلِتَعْلَمَ أَنَّ وَعْدَ اللَّهِ حَقٌّ وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
        "french": "Ainsi Nous le rendîmes à sa mère pour que son œil se réjouisse, qu'elle ne s'attriste pas, et qu'elle sache que la promesse d'Allah est vérité. Mais la plupart ne savent pas."
      }
    ],
    "words": [
      {
        "word": "الْمُبِينِ",
        "translit": "al-mubīn",
        "meaning": "explicite / clair / lumineux",
        "root": "ب - ي - ن",
        "rootMeaning": "être clair / distinguer / séparer",
        "rootColor": 1,
        "emoji": "💡",
        "funFactTitle": "Un livre qui brille comme une lampe de poche !",
        "funFact": "La racine <strong>b-y-n</strong> veut dire « être clair » ou « séparer les choses ». <em>Mubīn</em> = si clair que tout le monde peut comprendre, comme un panneau lumineux sur l'autoroute ! Le Coran est appelé <em>kitāb mubīn</em> = un livre lumineux, impossible à rater. Le mot <em>bayān</em> = l'explication, le fait de rendre les choses compréhensibles. Imagine un professeur qui utilise des couleurs et des images pour expliquer : c'est exactement le style du Coran !",
        "relatedText": "La racine ب - ي - ن décrit la clarté du Coran et des signes d'Allah dans toute la sourate.",
        "related": "<span>بَيَان</span> (explication), <span>بَيِّنَة</span> (preuve évidente), <span>أَبَانَ</span> (rendre clair)"
      },
      {
        "word": "يَسْتَضْعِفُ",
        "translit": "yastaḍ'ifū",
        "meaning": "il opprime / il rend faible",
        "root": "ض - ع - ف",
        "rootMeaning": "être faible / fragilité",
        "rootColor": 2,
        "emoji": "🍂",
        "funFactTitle": "Fir'awn rendait les gens faibles… mais Allah les a rendus FORTS !",
        "funFact": "La racine <strong>ḍ-ʿ-f</strong> veut dire « être faible » ou « fragile ». Fir'awn <em>yastaḍ'ifu</em> = il rendait les gens faibles, comme un méchant qui casse les jouets des autres ! Le mot <em>ḍaʿīf</em> = faible, et <em>maḍʿūf</em> = opprimé. Mais Allah a transformé cette faiblesse en force : les opprimés sont devenus des dirigeants ! C'est comme une petite graine fragile qui devient un arbre gigantesque. La faiblesse chez Allah est en réalité une force cachée !",
        "relatedText": "La racine ض - ع - ف montre comment Allah transforme la faiblesse en puissance.",
        "related": "<span>ضَعِيف</span> (faible), <span>مُسْتَضْعَف</span> (opprimé), <span>تَضَعَّفَ</span> (s'affaiblir)"
      },
      {
        "word": "الْتَقَطَهُ",
        "translit": "altaqaṭahu",
        "meaning": "il l'a recueilli / ramassé",
        "root": "ل - ق - ط",
        "rootMeaning": "ramasser / recueillir / cueillir",
        "rootColor": 3,
        "emoji": "🧺",
        "funFactTitle": "Le plan d'Allah : un ennemi ramasse son propre ennemi !",
        "funFact": "La racine <strong>l-q-ṭ</strong> veut dire « ramasser » ou « recueillir ». La famille de Fir'awn <em>altaqaṭahu</em> = a ramassé le bébé Mûsâ du fleuve, comme on ramasse une perle sur la plage ! Le mot <em>laqaṭah</em> = quelque chose de trouvé, de ramassé par terre. Et <em>multaqā</em> = le point de rencontre, là où les gens se retrouvent. Le plus drôle ? Fir'awn voulait tuer les bébés, et c'est lui qui a « adopté » le futur sauveur ! Le plan d'Allah est toujours le meilleur !",
        "relatedText": "La racine ل - ق - ط révèle l'ironie du destin : l'ennemi a recueilli son futur vainqueur.",
        "related": "<span>لُقَاطَة</span> (chose trouvée), <span>مُلْتَقًى</span> (point de rencontre), <span>تَلَقَّطَ</span> (ramasser)"
      },
      {
        "word": "قُصِّيهِ",
        "translit": "quṣṣīhi",
        "meaning": "suis-le / suis sa trace",
        "root": "ق - ص - ص",
        "rootMeaning": "couper / raconter / suivre",
        "rootColor": 4,
        "emoji": "🔍",
        "funFactTitle": "La sœur de Mûsâ : la première détective de l'histoire !",
        "funFact": "La racine <strong>q-ṣ-ṣ</strong> veut dire « couper » ou « raconter une histoire ». La sœur de Mûsâ a reçu l'ordre de <em>quṣṣīhi</em> = « suis sa trace », comme un détective qui suit des empreintes dans le sable ! Le mot <em>qaṣṣah</em> = une histoire, un récit — et la sourate s'appelle <em>Al-Qaṣaṣ</em> = Le Récit ! Le mot <em>qāṣṣ</em> = celui qui raconte des histoires. C'est comme si tu découpais un long film en petites scènes pour les raconter à tes copains : ça, c'est le <em>qaṣaṣ</em> !",
        "relatedText": "La racine ق - ص - ص donne son nom à TOUTE la sourate : Al-Qasas = Le Récit !",
        "related": "<span>قِصَّة</span> (histoire/récit), <span>قَاصّ</span> (conteur), <span>مَقَصّ</span> (ciseaux)"
      },
      {
        "word": "تَحْزَنِي",
        "translit": "taḥzanī",
        "meaning": "ne sois pas triste",
        "root": "ح - ز - ن",
        "rootMeaning": "tristesse / chagrin",
        "rootColor": 5,
        "emoji": "😢",
        "funFactTitle": "Allah a dit à une maman : « Ne sois PAS triste ! »",
        "funFact": "La racine <strong>ḥ-z-n</strong> veut dire « tristesse » ou « chagrin ». Allah a dit à la mère de Mûsâ : <em>lā taḥzanī</em> = « ne sois pas triste », comme un câlin pour le cœur ! Le mot <em>ḥuzn</em> = la tristesse profonde, comme quand on perd quelque chose de précieux. Et <em>yaḥzan</em> = il est triste. La mère de Mûsâ avait TOUTES les raisons d'être triste : elle jetait son bébé dans un fleuve ! Mais Allah lui a promis le retour de son fils. Quand Allah promet, IL tient parole !",
        "relatedText": "La racine ح - ز - ن revient deux fois dans les versets pour rassurer la mère de Mûsâ.",
        "related": "<span>حُزْن</span> (tristesse), <span>مَحْزُون</span> (attristé), <span>حَزِين</span> (triste)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">الْتَقَطَهُ</span> (altaqaṭahu) ?",
        "options": [
          "il l'a noyé",
          "il l'a recueilli / ramassé",
          "il l'a frappé",
          "il l'a caché"
        ],
        "correct": 1
      },
      {
        "question": "Pourquoi la sourate 28 s'appelle-t-elle <em>Al-Qasas</em> ?",
        "options": [
          "Parce qu'elle parle de la prière",
          "Parce qu'elle parle du ciel",
          "Parce qu'elle raconte des histoires (récits)",
          "Parce qu'elle parle de l'eau"
        ],
        "correct": 2
      },
      {
        "question": "Quelle racine signifie « être faible / fragilité » ?",
        "options": [
          "ق - ص - ص",
          "ح - ز - ن",
          "ب - ي - ن",
          "ض - ع - ف"
        ],
        "correct": 3
      },
      {
        "question": "Qu'est-ce qu'Allah a promis à la mère de Mûsâ ?",
        "options": [
          "Que son bébé reviendrait et deviendrait Messager",
          "Qu'elle deviendrait reine",
          "Que Fir'awn serait gentil",
          "Que le fleuve disparaîtrait"
        ],
        "correct": 0
      }
    ],
    "completionText": "Masha'Allah ! 📖 Tu as commencé la sourate Al-Qasas ! Tu as découvert la racine <strong>ب - ي - ن</strong> (clarté), la racine <strong>ض - ع - ف</strong> (faiblesse), la racine <strong>ل - ق - ط</strong> (ramasser), la racine <strong>ق - ص - ص</strong> (raconter/Le Récit) et la racine <strong>ح - ز - ن</strong> (tristesse). La mère de Mûsâ a fait le choix le plus difficile avec la plus grande confiance en Allah !"
  },
  {
    "id": "28-02",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 14 à 28 : Mûsâ à Madyan, le puits et le mariage",
    "shortTitle": "Al-Qasas (v.14-28)",
    "subtitle": "Mûsâ s'enfuit d'Égypte, arrive à Madyan, aide deux filles à abreuver leurs troupeaux, et se marie !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 15,
        "arabic": "وَدَخَلَ الْمَدِينَةَ عَلَىٰ حِينِ غَفْلَةٍ مِّنْ أَهْلِهَا فَوَجَدَ فِيهَا رَجُلَيْنِ يَقْتَتِلُونَ هَٰذَا مِن شِيعَتِهِ وَهَٰذَا مِنْ عَدُوِّهِ ۖ فَاسْتَغَاثَهُ الَّذِي مِن شِيعَتِهِ عَلَى الَّذِي مِنْ عَدُوِّهِ فَوَكَزَهُ مُوسَىٰ فَقَضَىٰ عَلَيْهِ",
        "french": "Il entra dans la ville alors que ses habitants étaient inattentifs. Il y trouva deux hommes qui se battaient, l'un de son parti et l'autre de ses ennemis. Celui de son parti l'appela au secours contre son ennemi. Mûsâ lui donna un coup et l'acheva."
      },
      {
        "number": 18,
        "arabic": "فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ فَإِذَا الَّذِي اسْتَغَاثَهُ بِالْأَمْسِ يَسْتَصْرِخُهُ ۚ قَالَ لَهُ مُوسَىٰ إِنَّكَ لَغَوِيٌّ مُّبِينٌ",
        "french": "Le lendemain, il se retrouva dans la ville, craintif et aux aguets. Et voilà que celui qui l'avait appelé au secours la veille, l'appelait de nouveau à l'aide."
      },
      {
        "number": 23,
        "arabic": "وَلَمَّا وَرَدَ مَاءَ مَدْيَنَ وَجَدَ عَلَيْهِ أُمَّةً مِّنَ النَّاسِ يَسْقُونَ وَوَجَدَ مِن دُونِهِمُ امْرَأَتَيْنِ تَذُودَانِ ۖ قَالَ مَا خَطْبُكُمَا ۖ قَالَتَا لَا نَسْقِي حَتَّىٰ يُصْدِرَ الرِّعَاءُ",
        "french": "Lorsqu'il arriva à l'eau de Madyan, il y trouva un groupe de gens qui abreuvaient leurs troupeaux, et deux femmes qui tenaient leurs bêtes à l'écart. Il dit : « Que vous arrive-t-il ? » Elles dirent : « Nous n'abreuverons pas avant que les bergers ne partent. »"
      },
      {
        "number": 24,
        "arabic": "فَسَقَىٰ لَهُمَا ثُمَّ تَوَلَّىٰ إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        "french": "Il abreuva leurs troupeaux puis se retira à l'ombre et dit : « Seigneur, j'ai besoin du bien que Tu peux m'envoyer. »"
      },
      {
        "number": 25,
        "arabic": "قَالَتْ إِحْدَاهُمَا يَا أَبَتِ اسْتَأْجِرْهُ ۖ إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ",
        "french": "L'une d'elles dit : « Ô mon père, embauche-le, car le meilleur de ceux que tu peux embaucher est le fort et le digne de confiance. »"
      },
      {
        "number": 26,
        "arabic": "قَالَ إِنِّي أُرِيدُ أَنْ أُنكِحَكَ إِحْدَى ابْنَتَيَّ هَٰتَيْنِ عَلَىٰ أَن تَأْجُرَنِي ثَمَانِيَ حِجَجٍ فَإِنْ أَتْمَمْتَ عَشْرًا فَمِنْ عِندِكَ",
        "french": "Il dit : « Je veux te marier à l'une de mes deux filles, à condition que tu travailles pour moi pendant huit ans. Et si tu en fais dix, ce sera de ton plein gré. »"
      },
      {
        "number": 28,
        "arabic": "قَالَ ذَٰلِكَ بَيْنِي وَبَيْنَكَ ۖ أَيَّمَا الْأَجَلَيْنِ قَضَيْتُ فَلَا عُدْوَانَ عَلَيَّ ۖ وَاللَّهُ عَلَىٰ مَا نَقُولُ وَكِيلٌ",
        "french": "Mûsâ dit : « C'est un accord entre toi et moi. Quel que soit le terme que j'accomplisse, il n'y aura pas d'injustice à mon encontre. Et Allah est garant de ce que nous disons. »"
      }
    ],
    "words": [
      {
        "word": "شَفَقَةً",
        "translit": "shafaqatan",
        "meaning": "compassion / tendresse / sollicitude",
        "root": "ش - ف - ق",
        "rootMeaning": "compassion / crépuscule / bord",
        "rootColor": 6,
        "emoji": "💗",
        "funFactTitle": "Mûsâ était fort ET compatissant en même temps !",
        "funFact": "La racine <strong>sh-f-q</strong> veut dire « compassion » ou « tendresse ». Mûsâ a aidé les deux filles avec <em>shafaqah</em> = beaucoup de tendresse, comme un grand frère qui protège ses petits frères ! Le mot <em>shafaqah</em> = la compassion douce, comme un plaid sur un lit qui réchauffe. Et <em>shafāq</em> = le crépuscule, quand le ciel devient rose et doux. En arabe, la compassion est comparée à la douceur du crépuscule : c'est beau et ça réconforte !",
        "relatedText": "La racine ش - ف - ق montre que la vraie force inclut la douceur et la compassion.",
        "related": "<span>شَفِيق</span> (compatissant), <span>شَفَق</span> (crépuscule), <span>أَشْفَقَ</span> (avoir de la compassion)"
      },
      {
        "word": "الظِّلِّ",
        "translit": "aẓ-ẓill",
        "meaning": "l'ombre / la fraîcheur",
        "root": "ظ - ل - ل",
        "rootMeaning": "ombre / protéger / couvrir",
        "rootColor": 7,
        "emoji": "🌳",
        "funFactTitle": "Mûsâ s'est reposé à l'ombre… et a invoqué Allah !",
        "funFact": "La racine <strong>ẓ-l-l</strong> veut dire « ombre » ou « couvrir ». Mûsâ s'est assis à <em>aẓ-ẓill</em> = l'ombre d'un arbre après avoir aidé les deux filles, comme quand tu te reposes sous un arbre après le sport ! Le mot <em>ẓill</em> = l'ombre, la protection contre le soleil. Et <em>muẓill</em> = celui qui donne de l'ombre. Allah est décrit comme <em>ẓilluhu</em> = Son ombre protectrice le Jour du Jugement. Mûsâ a utilisé ce moment de repos pour faire la plus belle prière de sa vie !",
        "relatedText": "La racine ظ - ل - ل est utilisée pour l'ombre physique et la protection spirituelle.",
        "related": "<span>ظَلَال</span> (ombres), <span>مَظِلَّة</span> (parasol/abri), <span>أَظَلَّ</span> (couvrir/ombrager)"
      },
      {
        "word": "أَجَر",
        "translit": "ajr",
        "meaning": "salaire / récompense / prix du travail",
        "root": "أ - ج - ر",
        "rootMeaning": "récompenser / payer / salaire",
        "rootColor": 1,
        "emoji": "💰",
        "funFactTitle": "Le mariage de Mûsâ : le plus beau contrat de travail !",
        "funFact": "La racine <strong>ʾ-j-r</strong> veut dire « récompense » ou « payer pour un travail ». Le père des deux filles a proposé à Mûsâ un <em>ajr</em> = un salaire pour travailler, et la récompense était… un mariage avec l'une de ses filles ! Le mot <em>ajr</em> = le salaire, la récompense. Et <em>jār</em> = le voisin (celui qui mérite protection). En arabe, Allah appelle le Paradis <em>ajr</em> = la récompense ultime ! Ce « travail » de berger a mené Mûsâ au mariage ET à la prophétie !",
        "relatedText": "La racine أ - ج - ر est liée au travail de Mûsâ comme berger et à la récompense divine.",
        "related": "<span>أُجُور</span> (salaires), <span>جَار</span> (voisin), <span>مَأْجُور</span> (récompensé)"
      },
      {
        "word": "الْقَوِيُّ",
        "translit": "al-qawiyyu",
        "meaning": "le fort / le puissant",
        "root": "ق - و - ي",
        "rootMeaning": "force / vigueur / puissance",
        "rootColor": 2,
        "emoji": "💪",
        "funFactTitle": "La fille a dit : « Embauche-le, il est FORT et DIGNE DE CONFIANCE ! »",
        "funFact": "La racine <strong>q-w-y</strong> veut dire « force » ou « puissance ». La fille a décrit Mûsâ comme <em>qawiyy</em> = fort, parce qu'il a soulevé tout seul le seau que les autres bergers ne pouvaient pas bouger ! Le mot <em>qawī</em> = fort, puissant. Et <em>quwwah</em> = la force, l'énergie. Allah est <em>Al-Qawiyy</em> = Le Fort, Le Tout-Puissant. Mais la fille a ajouté « amīn » (digne de confiance) : la vraie force sans honnêteté ne vaut rien ! C'est comme un super-héros qui est aussi gentil.",
        "relatedText": "La racine ق - و - ي montre que la vraie puissance vient avec la confiance.",
        "related": "<span>قُوَّة</span> (force), <span>تَقَوَّى</span> (se protéger/craindre Allah), <span>قَوِيّ</span> (fort)"
      },
      {
        "word": "وَكِيلٌ",
        "translit": "wakīlun",
        "meaning": "garant / protecteur / tuteur",
        "root": "و - ك - ل",
        "rootMeaning": "confier / déléguer / être garant",
        "rootColor": 3,
        "emoji": "🤝",
        "funFactTitle": "Allah est le meilleur Garant de nos promesses !",
        "funFact": "La racine <strong>w-k-l</strong> veut dire « confier » ou « être garant ». Mûsâ a dit : « Allah est <em>wakīl</em> = garant de ce que nous disons », comme un notaire qui valide un contrat important ! Le mot <em>wakīl</em> = le garant, le protecteur, celui à qui on fait confiance. Et <em>tawakkul</em> = se confier à Allah, lui faire confiance. Chaque fois que tu es inquiet, dis <em>tawakkaltu ʿalā Allāh</em> = « je me confie à Allah ». C'est le meilleur garant de l'univers !",
        "relatedText": "La racine و - ك - ل montre que tout accord sincère est sous la garantie d'Allah.",
        "related": "<span>تَوَكَّلَ</span> (se confier à Allah), <span>وَكَالَة</span> (représentation), <span>مَوْكِل</span> (client/mandant)"
      }
    ],
    "quiz": [
      {
        "question": "Pourquoi Mûsâ a-t-il dû fuir l'Égypte ?",
        "options": [
          "Il avait volé de l'or",
          "Il avait frappé un homme par erreur et craignait le châtiment",
          "Il cherchait de l'eau",
          "Il voulait voyager"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine <strong>ش - ف - ق</strong> dans <span class=\"arabic-inline\">شَفَقَةً</span> ?",
        "options": [
          "obscurité",
          "colère",
          "compassion / tendresse",
          "froid"
        ],
        "correct": 2
      },
      {
        "question": "Comment la fille a-t-elle décrit Mûsâ à son père ?",
        "options": [
          "Riche et beau",
          "Le fort et le digne de confiance",
          "Le rapide et le courageux",
          "Le jeune et le timide"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">وَكِيلٌ</span> (wakīl) ?",
        "options": [
          "juge",
          "roi",
          "professeur",
          "garant / protecteur"
        ],
        "correct": 3
      }
    ],
    "completionText": "Bravo ! 🐪 Tu as suivi Mûsâ à Madyan ! Tu as appris la racine <strong>ش - ف - ق</strong> (compassion), la racine <strong>ظ - ل - ل</strong> (ombre), la racine <strong>أ - ج - ر</strong> (salaire/récompense), la racine <strong>ق - و - ي</strong> (force) et la racine <strong>و - ك - ل</strong> (garant). Mûsâ a aidé les filles avec gentillesse, et sa récompense a été un mariage et la voie vers la prophétie !"
  },
  {
    "id": "28-03",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 29 à 43 : Le feu sacré, le bâton-serpent et la mission",
    "shortTitle": "Al-Qasas (v.29-43)",
    "subtitle": "Mûsâ voit un feu sur la montagne, Allah lui parle, son bâton devient serpent, et il retourne affronter Fir'awn !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 29,
        "arabic": "فَلَمَّا قَضَىٰ مُوسَى الْأَجَلَ وَسَارَ بِأَهْلِهِ آنَسَ مِن جَانِبِ الطُّورِ نَارًا قَالَ لِأَهْلِهِ امْكُثُوا إِنِّي آنَسْتُ نَارًا لَّعَلِّي آتِيكُم مِّنْهَا بِخَبَرٍ أَوْ جَذْوَةٍ مِّنَ النَّارِ لَعَلَّكُمْ تَصْطَلُونَ",
        "french": "Lorsque Mûsâ eut accompli le terme convenu et partit avec sa famille, il aperçut un feu du côté du mont Ṭûr. Il dit à sa famille : « Attendez ici. J'ai vu un feu ; peut-être vous en apporterai-je une nouvelle ou un tison allumé afin que vous vous réchauffiez. »"
      },
      {
        "number": 30,
        "arabic": "فَلَمَّا أَتَاهَا نُودِيَ مِن شَاطِئِ الْوَادِي الْأَيْمَنِ فِي الْبُقْعَةِ الْمُبَارَكَةِ مِنَ الشَّجَرَةِ أَن يَا مُوسَىٰ إِنِّي أَنَا اللَّهُ رَبُّ الْعَالَمِينَ",
        "french": "Quand il y arriva, on l'appela depuis le bord droit de la vallée, dans la place bénie, depuis l'arbre : « Ô Mûsâ, c'est Moi Allah, le Seigneur des mondes. »"
      },
      {
        "number": 31,
        "arabic": "وَأَنْ أَلْقِ عَصَاكَ ۖ فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ ۚ يَا مُوسَىٰ أَقْبِلْ وَلَا تَخَفْ ۖ إِنَّكَ مِنَ الْآمِنِينَ",
        "french": "Jette ton bâton. Quand il le vit remuer comme un serpent, il tourna le dos sans se retourner. « Ô Mûsâ, approche et n'aie pas peur, tu es en sécurité. »"
      },
      {
        "number": 34,
        "arabic": "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        "french": "Il dit : « Seigneur, ouvre-moi ma poitrine et facilite-moi ma mission. »"
      },
      {
        "number": 36,
        "arabic": "فَلَمَّا جَاءَهُم مُّوسَىٰ بِآيَاتِنَا بَيِّنَاتٍ قَالُوا مَا هَٰذَا إِلَّا سِحْرٌ مُّفْتَرًىٰ وَمَا سَمِعْنَا بِهَٰذَا فِي آبَائِنَا الْأَوَّلِينَ",
        "french": "Quand Mûsâ vint à eux avec Nos signes évidents, ils dirent : « Ce n'est rien d'autre que de la magie inventée. Nous n'avons jamais entendu parler de cela chez nos ancêtres. »"
      },
      {
        "number": 38,
        "arabic": "قَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ لَكُم مِّنْ إِلَٰهٍ غَيْرِي فَأَوْقِدْ لِي يَا هَامَانُ عَلَى الطِّينِ فَاجْعَل لِّي صَرْحًا لَّعَلِّي أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ وَإِنِّي لَأَظُنُّهُ مِنَ الْكَاذِبِينَ",
        "french": "Fir'awn dit : « Ô notables, je ne connais pas de divinité pour vous en dehors de moi. Hâmân, allume pour moi du feu sur l'argile et construis-moi une tour afin que je monte voir la divinité de Mûsâ. Je pense qu'il est menteur. »"
      },
      {
        "number": 43,
        "arabic": "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ مِن بَعْدِ مَا أَهْلَكْنَا الْقُرُونَ الْأُولَىٰ بَصَائِرَ لِلنَّاسِ وَهُدًى وَرَحْمَةً لَّعَلَّهُمْ يَتَذَكَّرُونَ",
        "french": "Nous avons certes donné le Livre à Mûsâ après avoir fait périr les premières générations, comme source de clarté pour les gens, guide et miséricorde, afin qu'ils se rappellent."
      }
    ],
    "words": [
      {
        "word": "عَصَاكَ",
        "translit": "ʿaṣāka",
        "meaning": "ton bâton",
        "root": "ع - ص - و",
        "rootMeaning": "bâton / soutenir / appuyer",
        "rootColor": 4,
        "emoji": "🐍",
        "funFactTitle": "Un bâton de berger transformé en SERPENT géant !",
        "funFact": "La racine <strong>ʿ-ṣ-w</strong> veut dire « bâton » ou « soutenir ». Le <em>ʿaṣā</em> de Mûsâ était un simple bâton de berger, mais Allah l'a transformé en serpent qui bougeait tout seul ! Le mot <em>ʿaṣā</em> = bâton, canne, et aussi « troupeau » en ancien arabe. Et <em>taʿaṣṣā</em> = s'appuyer sur quelque chose. Imagine que ton crayon se transforme en dragon vivant pendant un examen — c'est exactement ce qu'Allah a fait pour Mûsâ ! Même Mûsâ a eu peur et a fui !",
        "relatedText": "La racine ع - ص - و est liée au miracle du bâton-serpent de Mûsâ.",
        "related": "<span>عَصَا</span> (bâton/canne), <span>تَعَصَّبَ</span> (soutenir), <span>مُعْتَصَم</span> (refuge)"
      },
      {
        "word": "سِحْرٌ",
        "translit": "siḥrun",
        "meaning": "magie / illusion",
        "root": "س - ح - ر",
        "rootMeaning": "magie / tromperie / illusion",
        "rootColor": 5,
        "emoji": "🎩",
        "funFactTitle": "Fir'awn croyait que les miracles étaient de la magie !",
        "funFact": "La racine <strong>s-ḥ-r</strong> veut dire « magie » ou « illusion ». Quand Mûsâ a montré ses miracles, Fir'awn a dit : <em>mā hādhā illā siḥrun</em> = « Ce n'est que de la magie ! » comme un enfant qui dit « C'est des effets spéciaux ! » Le mot <em>siḥr</em> = la magie, et <em>sāḥir</em> = le magicien. La différence entre le miracle d'Allah et la magie ? Le miracle est VRAI et la magie est une illusion ! Un magicien fait disparaître un lapin, mais Allah a divisé la mer en deux !",
        "relatedText": "La racine س - ح - ر oppose la fausse magie aux vrais miracles d'Allah.",
        "related": "<span>سَاحِر</span> (magicien), <span>مَسْحُور</span> (ensorcelé), <span>تَسَحَّرَ</span> (pratiquer la magie)"
      },
      {
        "word": "اشْرَحْ",
        "translit": "ishraḥ",
        "meaning": "ouvre / apaise / élargis",
        "root": "ش - ر - ح",
        "rootMeaning": "ouvrir / élargir / apaiser le cœur",
        "rootColor": 6,
        "emoji": "🕊️",
        "funFactTitle": "Mûsâ a demandé à Allah d'ouvrir son cœur !",
        "funFact": "La racine <strong>sh-r-ḥ</strong> veut dire « ouvrir » ou « élargir ». Mûsâ a fait la plus belle prière : <em>ishraḥ lī ṣadrī</em> = « Ouvre-moi la poitrine », comme ouvrir les fenêtres d'une pièce sombre pour laisser entrer la lumière ! Le mot <em>sharḥ</em> = l'explication, l'ouverture. Et <em>mashraḥ</em> = ouvert, déployé. C'est comme quand tu ressens une boule dans ton ventre de stress et que tu demandes à Allah de la libérer. Allah a exaucé Mûsâ immédiatement !",
        "relatedText": "La racine ش - ر - ح est la clé de la célèbre invocation de Mûsâ pour le courage.",
        "related": "<span>شَرْح</span> (explication), <span>مَنْشُور</span> (déployé/ouvert), <span>شُرُوح</span> (largueurs)"
      },
      {
        "word": "بَصَائِرَ",
        "translit": "baṣāʾira",
        "meaning": "lumières / preuves claires / visions",
        "root": "ب - ص - ر",
        "rootMeaning": "voir / clairvoyance / preuve",
        "rootColor": 7,
        "emoji": "👁️",
        "funFactTitle": "Le Livre est comme des LUNETTES pour le cœur !",
        "funFact": "La racine <strong>b-ṣ-r</strong> veut dire « voir » ou « avoir la vue ». Le Livre donné à Mûsâ est appelé <em>baṣāʾir</em> = des lumières pour les yeux du cœur, comme des lunettes qui te permettent de voir ce qui est invisible ! Le mot <em>baṣīrah</em> = la clairvoyance, la capacité de voir la vérité. Et <em>abṣar</em> = voir, regarder. La différence entre <em>baṣar</em> (la vue des yeux) et <em>baṣīrah</em> (la vue du cœur) ? Les yeux voient le monde, mais le cœur voit la vérité !",
        "relatedText": "La racine ب - ص - ر distingue la vue physique de la vision spirituelle du cœur.",
        "related": "<span>بَصِيرَة</span> (clairvoyance), <span>أَبْصَرَ</span> (voir/regarder), <span>بَصَر</span> (vue/vision)"
      },
      {
        "word": "رَحْمَةً",
        "translit": "raḥmatan",
        "meaning": "miséricorde / compassion",
        "root": "ر - ح - م",
        "rootMeaning": "miséricorde / tendresse maternelle",
        "rootColor": 1,
        "emoji": "🌸",
        "funFactTitle": "Le Coran : le plus grand cadeau de MISÉRICORDE !",
        "funFact": "La racine <strong>r-ḥ-m</strong> veut dire « miséricorde » et vient du mot « ventre maternel ». Le Livre de Mûsâ était une <em>raḥmah</em> = miséricorde, comme les bras protecteurs d'une maman ! Le mot <em>raḥmān</em> = Le Très-Miséricordieux, et <em>raḥīm</em> = Le Tout-Miséricordieux. Et <em>raḥīm</em> = le bébé dans le ventre de sa maman. Chaque fois que tu dis <em>bismillāhi r-raḥmāni r-raḥīm</em>, tu commences par la miséricorde d'Allah !",
        "relatedText": "La racine ر - ح - م est l'une des plus belles du Coran, liée à la tendresse maternelle.",
        "related": "<span>رَحِيم</span> (Très-Miséricordieux), <span>رَحْمَة</span> (miséricorde), <span>رَاحِم</span> (celui qui fait miséricorde)"
      }
    ],
    "quiz": [
      {
        "question": "Qu'est-ce qui s'est passé quand Mûsâ a jeté son bâton ?",
        "options": [
          "Il a disparu",
          "Il s'est transformé en lumière",
          "Il a volé vers le ciel",
          "Il s'est mis à remuer comme un serpent"
        ],
        "correct": 3
      },
      {
        "question": "Quelle est la racine de <span class=\"arabic-inline\">سِحْرٌ</span> (siḥr — magie) ?",
        "options": [
          "س - ح - ر",
          "ش - ر - ح",
          "ص - ب - ر",
          "س - ل - م"
        ],
        "correct": 0
      },
      {
        "question": "Que signifie la racine <strong>ش - ر - ح</strong> dans <span class=\"arabic-inline\">اشْرَحْ</span> ?",
        "options": [
          "fermer",
          "ouvrir / apaiser le cœur",
          "détruire",
          "construire"
        ],
        "correct": 1
      },
      {
        "question": "Qu'a dit Fir'awn en voyant les miracles de Mûsâ ?",
        "options": [
          "Je crois en Allah !",
          "Ce n'est que de la magie inventée",
          "Mûsâ est mon frère",
          "Laissez-le partir"
        ],
        "correct": 1
      }
    ],
    "completionText": "Félicitations ! 🔥 Tu as vu Mûsâ recevoir sa mission ! Tu as appris la racine <strong>ع - ص - و</strong> (bâton), la racine <strong>س - ح - ر</strong> (magie), la racine <strong>ش - ر - ح</strong> (ouvrir le cœur), la racine <strong>ب - ص - ر</strong> (voir) et la racine <strong>ر - ح - م</strong> (miséricorde). Mûsâ avait peur comme n'importe qui, mais Allah lui a donné le courage !"
  },
  {
    "id": "28-04",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 44 à 56 : Le Livre, la guidance et ceux qui écoutent",
    "shortTitle": "Al-Qasas (v.44-56)",
    "subtitle": "Mûsâ reçoit le Livre comme guide, et Allah nous parle de ceux qui écoutent la vérité avec le cœur ouvert !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 46,
        "arabic": "وَمَا كُنتَ بِجَانِبِ الْغَرْبِيِّ إِذْ قَضَيْنَا إِلَىٰ مُوسَى الْأَمْرَ وَمَا كُنتَ مِنَ الشَّاهِدِينَ",
        "french": "Tu n'étais pas du côté ouest quand Nous avons confié la mission à Mûsâ, et tu n'étais pas parmi les témoins."
      },
      {
        "number": 47,
        "arabic": "وَلَٰكِنَّا أَنبَأْنَاكُم مَّا كَانَ آبَاؤُكُمْ لَا يَعْلَمُونَ",
        "french": "Mais Nous t'avons informé de ce que tes ancêtres ne savaient pas."
      },
      {
        "number": 50,
        "arabic": "فَإِن لَّمْ يَسْتَجِيبُوا لَكَ فَاعْلَمْ أَنَّمَا يَتَّبِعُونَ أَهْوَاءَهُمْ ۚ وَمَنْ أَضَلُّ مِمَّنِ اتَّبَعَ هَوَاهُ بِغَيْرِ هُدًى مِّنَ اللَّهِ",
        "french": "S'ils ne te répondent pas, sache qu'ils ne suivent que leurs passions. Et qui est plus égaré que celui qui suit sa passion sans guide venant d'Allah ?"
      },
      {
        "number": 53,
        "arabic": "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ فَاخْتُلِفَ فِيهِ ۚ وَلَوْلَا كَلِمَةٌ سَبَقَتْ مِن رَّبِّكَ لَقُضِيَ بَيْنَهُمْ ۚ وَإِنَّهُمْ لَفِي شَكٍّ مِّنْهُ مُرِيبٍ",
        "french": "Nous avons certes donné le Livre à Mûsâ, et ils ont divergé à son sujet. N'eût été une parole déjà prononcée par ton Seigneur, leur affaire aurait été tranchée. Ils sont dans un doute profond à son sujet."
      },
      {
        "number": 55,
        "arabic": "وَإِذَا سَمِعُوا التَّذْكِرَةَ انطَلَقُوا إِلَيْهَا وَهُمْ يَشْفَعُونَ",
        "french": "Et quand ils entendent le rappel, ils s'y précipitent en croyants."
      },
      {
        "number": 56,
        "arabic": "وَالَّذِينَ لَا يَرْجُونَ لِقَاءَنَا قَالُوا لَوْلَا أُنزِلَ عَلَيْهِ الْمَلَائِكَةُ أَوْ نَرَىٰ رَبَّنَا ۗ لَقَدِ اسْتَكْبَرُوا فِي أَنفُسِهِمْ وَعَتَوْا عُتُوًّا كَبِيرًا",
        "french": "Ceux qui n'espèrent pas Nous rencontrer disent : « Que ne fait-on descendre des anges sur lui, ou ne voyons-nous notre Seigneur ? » Ils se sont enorgueillis en eux-mêmes et ont dépassé toute limite."
      }
    ],
    "words": [
      {
        "word": "أَهْوَاءَهُمْ",
        "translit": "ahwāʾahum",
        "meaning": "leurs passions / leurs désirs",
        "root": "ه - و - ي",
        "rootMeaning": "désir / passion / vouloir",
        "rootColor": 2,
        "emoji": "🎈",
        "funFactTitle": "Suivre ses passions = se promener les yeux FERMÉS !",
        "funFact": "La racine <strong>h-w-y</strong> veut dire « désir » ou « passion ». Le Coran dit que suivre ses <em>ahwāʾ</em> = passions, c'est comme marcher les yeux fermés en pleine forêt ! Le mot <em>hawā</em> = le désir, l'envie, ce qui te fait agir sans réfléchir. Et <em>mutahawwī</em> = celui qui suit ses caprices. Les passionnés de foot ne sont pas concernés ici — il s'agit des désirs qui t'éloignent d'Allah ! La différence entre un guide et une passion ? Le guide te mène au bon endroit, la passion te fait tourner en rond !",
        "relatedText": "La racine ه - و - ي décrit les désirs qui égarent quand ils ne sont pas guidés par Allah.",
        "related": "<span>هَوًى</span> (passion/désir), <span>هَوِيَ</span> (tomber/chuter), <span>تَهْوِيَة</span> (pente/abîme)"
      },
      {
        "word": "سَمِعُوا",
        "translit": "samiʿū",
        "meaning": "ils ont entendu / écouté",
        "root": "س - م - ع",
        "rootMeaning": "entendre / écouter / obéir",
        "rootColor": 3,
        "emoji": "👂",
        "funFactTitle": "Les vrais croyants COURENT vers la vérité quand ils l'entendent !",
        "funFact": "La racine <strong>s-m-ʿ</strong> veut dire « entendre » ou « écouter ». Les vrais croyants, quand ils <em>samiʿū</em> = entendent le rappel d'Allah, y courent comme on court vers une glace pendant une canicule ! Le mot <em>samāʿ</em> = l'ouïe, et <em>asamm</em> = sourd. En arabe, <em>samīʿ</em> = Celui qui entend tout (un nom d'Allah !). Mais attention : <em>samīʿ</em> ne veut pas seulement « entendre avec les oreilles » — ça veut dire « écouter avec le cœur ET obéir » !",
        "relatedText": "La racine س - م - ع relie l'audition physique à l'obéissance du cœur.",
        "related": "<span>سَمِيع</span> (Celui qui entend tout), <span>إِسْمَاع</span> (faire entendre), <span>اسْتَمَعَ</span> (écouter attentivement)"
      },
      {
        "word": "كَلِمَةٌ",
        "translit": "kalimatun",
        "meaning": "la parole / le décret / la promesse",
        "root": "ك - ل - م",
        "rootMeaning": "parole / mot / blesser",
        "rootColor": 4,
        "emoji": "💬",
        "funFactTitle": "Une PAROLE d'Allah protège tout l'univers !",
        "funFact": "La racine <strong>k-l-m</strong> veut dire « parole » ou « mot ». Allah dit qu'une <em>kalimah</em> = parole déjà prononcée par Lui a protégé les gens du châtiment immédiat ! Le mot <em>kalimah</em> = la parole, le mot, et aussi le décret divin. Et <em>kallām</em> = la conversation, le discours. Le mot le plus célèbre ? <em>Kalimat Allāh</em> = la Parole d'Allah ! C'est comme si le Créateur de l'univers disait un seul mot et tout s'arrêtait — Sa parole est la plus puissante de toutes !",
        "relatedText": "La racine ك - ل - م montre le pouvoir infini de la Parole d'Allah.",
        "related": "<span>كَلَام</span> (parole/discours), <span>كَلِمَة</span> (mot/parole), <span>تَكَلَّمَ</span> (parler)"
      },
      {
        "word": "هُدًى",
        "translit": "hudan",
        "meaning": "la guidance / la bonne direction",
        "root": "ه - د - ي",
        "rootMeaning": "guider / mener / diriger",
        "rootColor": 5,
        "emoji": "🧭",
        "funFactTitle": "Sans guidance, c'est comme un GPS sans satellite !",
        "funFact": "La racine <strong>h-d-y</strong> veut dire « guider » ou « diriger ». Le Coran est décrit comme <em>hudan</em> = guidance, comme un GPS céleste qui te montre toujours le bon chemin ! Le mot <em>hidāyah</em> = la guidance divine, la direction. Et <em>hādī</em> = le guide. En arabe, <em>hady</em> = l'animal qu'on offre en sacrifice pendant le Hajj, guidé vers la Ka'bah. Sans la guidance d'Allah, on est comme un bateau sans boussole au milieu de l'océan !",
        "relatedText": "La racine ه - د - ي est au cœur du Coran comme guide pour l'humanité.",
        "related": "<span>هِدَايَة</span> (guidance), <span>هَادٍ</span> (guide), <span>يَهْدِي</span> (il guide)"
      },
      {
        "word": "اسْتَكْبَرُوا",
        "translit": "istakbarū",
        "meaning": "ils se sont enorgueillis / ils ont été arrogants",
        "root": "ك - ب - ر",
        "rootMeaning": "être grand / arrogance / orgueil",
        "rootColor": 6,
        "emoji": "👑",
        "funFactTitle": "L'orgueil : le défaut que même les anges n'ont pas !",
        "funFact": "La racine <strong>k-b-r</strong> veut dire « être grand » ou « s'enorgueillir ». Ceux qui disent « Montre-nous Allah ! » se sont <em>istakbarū</em> = enorgueillis, comme un élève qui dit « Je suis trop intelligent pour écouter le professeur ! » Le mot <em>kibr</em> = l'orgueil, l'arrogance. Et <em>kabīr</em> = grand, mais aussi <em>Al-Kabīr</em> = Le Plus Grand (Allah). Iblis a été chassé du Paradis pour un seul mot : « Je suis meilleur que lui ! » L'orgueil est le seul péché qui ne peut pas être pardonné si on ne s'en repent pas !",
        "relatedText": "La racine ك - ب - ر oppose la grandeur d'Allah à la fausse grandeur des orgueilleux.",
        "related": "<span>كَبِير</span> (grand), <span>تَكَبَّرَ</span> (être arrogant), <span>أَكْبَر</span> (plus grand)"
      }
    ],
    "quiz": [
      {
        "question": "Que se passe-t-il quand les vrais croyants entendent le rappel d'Allah ?",
        "options": [
          "Ils s'enfuient",
          "Ils dorment",
          "Ils s'y précipitent en croyants",
          "Ils discutent"
        ],
        "correct": 2
      },
      {
        "question": "Quelle est la racine du mot <span class=\"arabic-inline\">أَهْوَاءَهُمْ</span> (leurs passions) ?",
        "options": [
          "ك - ل - م",
          "ه - و - ي",
          "ك - ب - ر",
          "س - م - ع"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie la racine <strong>ه - د - ي</strong> dans <span class=\"arabic-inline\">هُدًى</span> ?",
        "options": [
          "guider / diriger",
          "entendre / écouter",
          "parler / dire",
          "voir / regarder"
        ],
        "correct": 0
      },
      {
        "question": "Pourquoi les gens ont-ils douté du Livre de Mûsâ ?",
        "options": [
          "Parce qu'il était trop court",
          "Parce qu'ils suivaient leurs passions sans guide d'Allah",
          "Parce qu'ils avaient déjà un autre livre",
          "Parce que Mûsâ ne savait pas parler"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! 📚 Tu as appris comment le Livre guide les cœurs ! Tu as découvert la racine <strong>ه - و - ي</strong> (passion), la racine <strong>س - م - ع</strong> (entendre/obéir), la racine <strong>ك - ل - م</strong> (parole), la racine <strong>ه - د - ي</strong> (guider) et la racine <strong>ك - ب - ر</strong> (orgueil). Les vrais croyants courent vers la vérité, tandis que les orgueilleux s'en éloignent !"
  },
  {
    "id": "28-05",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 57 à 69 : La vraie richesse et la promesse d'Allah",
    "shortTitle": "Al-Qasas (v.57-69)",
    "subtitle": "Certains regrettent leur vie avant l'Islam, mais Allah montre que le vrai bonheur est dans la foi et la bonne action !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 57,
        "arabic": "وَقَالُوا لَوْلَا نُزِّلَ هَٰذَا الْقُرْآنُ عَلَىٰ رَجُلٍ مِّنَ الْقَرْيَتَيْنِ عَظِيمٍ",
        "french": "Et ils dirent : « Pourquoi ce Coran n'a-t-il pas été révélé à un homme important de l'une des deux cités ? »"
      },
      {
        "number": 60,
        "arabic": "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        "french": "Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent."
      },
      {
        "number": 61,
        "arabic": "مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ وَمَا أُرِيدُ أَن يُطْعِمُونِ",
        "french": "Je ne leur demande aucune subsistance, et Je ne veux pas qu'ils Me nourrissent."
      },
      {
        "number": 65,
        "arabic": "يَوْمَ يَقُولُ نَادُوا شُرَكَائِيَ الَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا لَهُمْ",
        "french": "Le jour où Il dira : « Appelez Mes associés que vous prétendiez. » Ils les invoqueront, mais ceux-ci ne leur répondront pas."
      },
      {
        "number": 67,
        "arabic": "فَأَمَّا مَن تَابَ وَآمَنَ وَعَمِلَ صَالِحًا فَعَسَىٰ أَن يَكُونَ مِنَ الْمُفْلِحِينَ",
        "french": "Celui qui se repent, croit et fait une bonne œuvre, celui-là peut espérer être parmi les bienheureux."
      },
      {
        "number": 69,
        "arabic": "وَرَبُّكَ يَعْلَمُ مَا تُخْفِي صُدُورُهُمْ وَمَا يُعْلِنُونَ",
        "french": "Ton Seigneur sait ce que cachent leurs poitrines et ce qu'ils divulguent."
      }
    ],
    "words": [
      {
        "word": "رِّزْقٍ",
        "translit": "rizqin",
        "meaning": "subsistance / provision / nourriture",
        "root": "ر - ز - ق",
        "rootMeaning": "pourvoir / nourrir / accorder la subsistance",
        "rootColor": 7,
        "emoji": "🍞",
        "funFactTitle": "Allah nourrit tout le monde sans avoir besoin de rien !",
        "funFact": "La racine <strong>r-z-q</strong> veut dire « pourvoir » ou « accorder la nourriture ». Allah dit : <em>mā urīdu minhum min rizq</em> = « Je ne leur demande pas de subsistance », car Allah n'a besoin de RIEN ! Le mot <em>rizq</em> = la provision, tout ce dont tu as besoin pour vivre. Et <em>rāziq</em> = Celui qui pourvoit (un des noms d'Allah !). C'est comme un chef cuisinier qui nourrit tout un restaurant sans jamais avoir faim lui-même ! Allah donne à tout le monde — même les animaux et les plantes !",
        "relatedText": "La racine ر - ز - ق montre qu'Allah est le Seul Pourvoyeur de toutes les créatures.",
        "related": "<span>رَزِيق</span> (Pourvoyeur), <span>رِزْق</span> (provision), <span>أَرْزَقَ</span> (accorder la subsistance)"
      },
      {
        "word": "تَابَ",
        "translit": "tāba",
        "meaning": "il s'est repenti / il est revenu",
        "root": "ت - و - ب",
        "rootMeaning": "revenir / se repentir / retourner",
        "rootColor": 1,
        "emoji": "🔄",
        "funFactTitle": "Le repentir : le bouton RESET de la vie !",
        "funFact": "La racine <strong>t-w-b</strong> veut dire « revenir » ou « se repentir ». Allah dit que celui qui <em>tāba</em> = se repent, c'est comme appuyer sur un bouton RESET après une mauvaise partie de jeu vidéo ! Le mot <em>tawbah</em> = le repentir, le retour à Allah. Et <em>tawwāb</em> = Celui qui accepte toujours le repentir (un des noms d'Allah !). En arabe, <em>āba ilā</em> = revenir vers. Le plus beau ? Allah aime plus le repentir qu'un parent qui retrouve son enfant perdu !",
        "relatedText": "La racine ت - و - ب est la porte ouverte du pardon divin pour tous les croyants.",
        "related": "<span>تَوْبَة</span> (repentir), <span>تَوَّاب</span> (Celui qui accepte le repentir), <span>أَنَابَ</span> (revenir à Allah)"
      },
      {
        "word": "صَالِحًا",
        "translit": "ṣāliḥan",
        "meaning": "une bonne action / juste / droit",
        "root": "ص - ل - ح",
        "rootMeaning": "être bon / juste / réparer",
        "rootColor": 2,
        "emoji": "⭐",
        "funFactTitle": "Une bonne action = une graine plantée pour le Paradis !",
        "funFact": "La racine <strong>ṣ-l-ḥ</strong> veut dire « être bon » ou « réparer ». Allah dit de faire <em>ṣāliḥan</em> = de bonnes actions, comme planter des graines de bonheur partout où tu vas ! Le mot <em>ṣāliḥ</em> = bon, juste, vertueux. Et <em>ṣulḥ</em> = la paix, la réconciliation entre deux personnes. En arabe, <em>aṣlaḥa</em> = réparer, corriger ce qui est cassé. Les bonnes actions, c'est comme les pièces d'un puzzle : chaque petite action compte pour voir le tableau complet du Paradis !",
        "relatedText": "La racine ص - ل - ح est la clé de toute action juste et de la réforme dans le Coran.",
        "related": "<span>صَلَاح</span> (bienfaisance), <span>إِصْلَاح</span> (réforme), <span>مُصْلِح</span> (réformateur)"
      },
      {
        "word": "يَقُولُ",
        "translit": "yaqūlu",
        "meaning": "il dit / il dira",
        "root": "ق - و - ل",
        "rootMeaning": "dire / parler / prononcer",
        "rootColor": 3,
        "emoji": "🗣️",
        "funFactTitle": "Le Jour du Jugement, Allah dira UNE parole et tout changera !",
        "funFact": "La racine <strong>q-w-l</strong> veut dire « dire » ou « prononcer ». Au Jour du Jugement, Allah <em>yaqūlu</em> = dira aux associateurs d'appeler leurs fausses divinités, mais personne ne répondra ! Le mot <em>qawl</em> = la parole, la déclaration. Et <em>qawlun karīm</em> = une parole noble. En arabe, <em>qāʾil</em> = celui qui dit, et <em>maqāl</em> = le discours. Le Coran est appelé <em>qawl Allah</em> = la Parole d'Allah. Une seule parole d'Allah peut créer des mondes entiers !",
        "relatedText": "La racine ق - و - l montre la puissance de la Parole divine au Jour du Jugement.",
        "related": "<span>قَوْل</span> (parole), <span>قَائِل</span> (celui qui dit), <span>مَقَال</span> (discours)"
      },
      {
        "word": "يَعْلَمُ",
        "translit": "yaʿlamu",
        "meaning": "il sait / il connaît",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 4,
        "emoji": "🧠",
        "funFactTitle": "Allah connaît même ce que tu CACHES dans ton cœur !",
        "funFact": "La racine <strong>ʿ-l-m</strong> veut dire « savoir » ou « connaître ». Allah <em>yaʿlamu</em> = sait TOUT : ce que tu dis ET ce que tu caches dans ton cœur, comme une maman qui sait toujours quand tu as fait une bêtise même sans témoins ! Le mot <em>ʿilm</em> = la connaissance, le savoir. Et <em>ʿalīm</em> = l'Omniscient (un des noms d'Allah !). C'est la racine la plus utilisée dans le Coran ! Tu peux cacher quelque chose aux gens, mais jamais à Allah. C'est à la fois impressionnant et rassurant !",
        "relatedText": "La racine ع - ل - m est la racine du savoir, l'une des plus fréquentes du Coran.",
        "related": "<span>عَالِم</span> (savant), <span>عَلِيم</span> (Omniscient), <span>تَعَلَّمَ</span> (apprendre)"
      }
    ],
    "quiz": [
      {
        "question": "Pourquoi Allah a-t-Il créé les djinns et les humains ?",
        "options": [
          "Pour qu'ils M'adorent",
          "Pour qu'ils construisent des villes",
          "Pour qu'ils luttent entre eux",
          "Pour qu'ils cherchent des trésors"
        ],
        "correct": 0
      },
      {
        "question": "Que signifie la racine <strong>ت - و - ب</strong> dans <span class=\"arabic-inline\">تَابَ</span> ?",
        "options": [
          "courir vite",
          "dormir profondément",
          "se repentir / revenir à Allah",
          "manger beaucoup"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">رِّزْقٍ</span> (rizq) ?",
        "options": [
          "la force physique",
          "la provision / nourriture accordée par Allah",
          "le sommeil",
          "le voyage"
        ],
        "correct": 1
      },
      {
        "question": "Qu'est-ce qu'Allah sait que les gens cachent ?",
        "options": [
          "Leurs mots de passe",
          "Leurs jeux vidéo préférés",
          "Ce que leurs poitrines cachent et ce qu'ils divulguent",
          "Leurs recettes de cuisine"
        ],
        "correct": 2
      }
    ],
    "completionText": "Excellent ! 🌟 Tu as découvert les secrets de la vraie richesse ! Tu as appris la racine <strong>ر - ز - ق</strong> (provision), la racine <strong>ت - و - ب</strong> (repentir), la racine <strong>ص - ل - ح</strong> (bonne action), la racine <strong>ق - و - ل</strong> (parole) et la racine <strong>ع - ل - م</strong> (savoir). Allah nourrit tout le monde sans avoir besoin de rien, et Il pardonne toujours à celui qui revient à Lui !"
  },
  {
    "id": "28-06",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 70 à 82 : Qârûn et ses trésors engloutis",
    "shortTitle": "Al-Qasas (v.70-82)",
    "subtitle": "Qârûn étale sa richesse avec arrogance, mais Allah fait engloutir sa maison par la terre — une leçon sur l'orgueil et l'argent !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 70,
        "arabic": "وَهُوَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ لَهُ الْحَمْدُ فِي الْأُولَىٰ وَالْآخِرَةِ ۖ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
        "french": "C'est Lui Allah. Point de divinité en dehors de Lui. À Lui la louange ici-bas comme dans l'au-delà. C'est Lui le Sage, le Parfaitement Informé."
      },
      {
        "number": 76,
        "arabic": "إِنَّ قَارُونَ كَانَ مِن قَوْمِ مُوسَىٰ فَبَغَىٰ عَلَيْهِمْ ۖ وَآتَيْنَاهُ مِنَ الْكُنُوزِ مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ أُولِي الْقُوَّةِ",
        "french": "Qârûn était du peuple de Mûsâ, mais il les opprimait. Nous lui avions donné des trésors dont les clés auraient pu épuiser un groupe d'hommes forts."
      },
      {
        "number": 77,
        "arabic": "قَالَ لَهُ قَوْمُهُ لَا تَفْرَحْ ۖ إِنَّ اللَّهَ لَا يُحِبُّ الْفَرِحِينَ",
        "french": "Son peuple lui dit : « Ne te réjouis pas. Allah n'aime pas les arrogants. »"
      },
      {
        "number": 78,
        "arabic": "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا",
        "french": "Cherche dans ce qu'Allah t'a donné la Demeure Dernière. N'oublie pas ta part dans la vie d'ici-bas."
      },
      {
        "number": 79,
        "arabic": "قَالَ إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِي",
        "french": "Il dit : « Je n'ai reçu tout cela que grâce à mon savoir. »"
      },
      {
        "number": 81,
        "arabic": "فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ فَمَا كَانَ لَهُ مِن فِئَةٍ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مِنَ الْمُنتَصِرِينَ",
        "french": "Nous fîmes que la terre l'engloutit avec sa demeure. Il n'eut aucun groupe pour le secourir contre Allah, et il ne fut point des secourus."
      },
      {
        "number": 82,
        "arabic": "وَأَصْبَحَ الَّذِينَ تَمَنَّوْا مَكَانَهُ بِالْأَمْسِ يَقُولُونَ وَيْكَأَنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ ۖ لَوْلَا أَن مَّنَّ اللَّهُ عَلَيْنَا لَخَسَفَ بِنَا وَيْكَأَنَّهُ لَا يُفْلِحُ الْكَافِرُونَ",
        "french": "Ceux qui la veille enviaient sa situation se mirent à dire : « Ô étonnement ! Allah dispense la subsistance à qui Il veut parmi Ses serviteurs et la restreint. Si Allah ne nous avait pas fait grâce, Il nous aurait engloutis. Ô étonnement ! Les mécréants ne réussissent pas. »"
      }
    ],
    "words": [
      {
        "word": "الْحَقُّ",
        "translit": "al-ḥaqqu",
        "meaning": "la vérité / le vrai",
        "root": "ح - ق - ق",
        "rootMeaning": "vérité / être vrai / justice",
        "rootColor": 5,
        "emoji": "⚖️",
        "funFactTitle": "Allah est la VÉRITÉ — pas comme un fake news !",
        "funFact": "La racine <strong>ḥ-q-q</strong> veut dire « vérité » ou « être vrai ». Allah est <em>al-ḥaqq</em> = La Vérité, comme un soleil qui brille même si tu fermes les yeux ! Le mot <em>ḥaqq</em> = la vérité, le droit, la justice. Et <em>ḥaqīqah</em> = la réalité. En arabe, <em>ḥaqqan</em> = vraiment, c'est VRAI ! La différence entre le vrai et le faux ? Le faux disparaît un jour, mais la vérité d'Allah reste pour toujours, comme un diamant éternel !",
        "relatedText": "La racine ح - ق - ق affirme qu'Allah est la Vérité éternelle et immuable.",
        "related": "<span>حَقِيقَة</span> (réalité), <span>حُقُوق</span> (droits), <span>تَحَقَّقَ</span> (vérifier/confirmer)"
      },
      {
        "word": "الْكُنُوزِ",
        "translit": "al-kunūzi",
        "meaning": "les trésors",
        "root": "ك - ن - ز",
        "rootMeaning": "cacher / enfouir / trésor",
        "rootColor": 6,
        "emoji": "💎",
        "funFactTitle": "Qârûn avait des trésors que les hommes forts ne pouvaient PAS porter !",
        "funFact": "La racine <strong>k-n-z</strong> veut dire « cacher » ou « enfouir ». Qârûn avait des <em>kunūz</em> = trésors si énormes que même un groupe d'hommes forts ne pouvaient pas porter les clés ! Le mot <em>kanz</em> = un trésor caché, comme un coffre-fort rempli de pièces d'or et de diamants. En arabe, <em>kunūz</em> = les trésors enfouis. Mais attention : les trésors de ce monde ne servent à rien dans l'au-delà ! Qârûn avait des montagnes d'or, mais la terre l'a tout englouti en une seconde !",
        "relatedText": "La racine ك - ن - ز illustre comment les richesses mondaines sont éphémères devant Allah.",
        "related": "<span>كَنْز</span> (trésor), <span>اكْتَنَزَ</span> (thésauriser/cacher), <span>كَنَازَة</span> (richesse)"
      },
      {
        "word": "خَسَفْنَا",
        "translit": "khasafnā",
        "meaning": "Nous avons fait engloutir",
        "root": "خ - س - ف",
        "rootMeaning": "engloutir / affaisser la terre",
        "rootColor": 7,
        "emoji": "🌋",
        "funFactTitle": "La terre a OUVERT la bouche et avalé Qârûn tout entier !",
        "funFact": "La racine <strong>kh-s-f</strong> veut dire « engloutir » ou « affaisser ». Allah a dit : <em>khasafnā bihi</em> = Nous l'avons englouti, comme quand la terre ouvre un trou géant et avale tout sur son passage ! Le mot <em>khasafa</em> = faire s'effondrer la terre. Et <em>inkhasafa</em> = s'effondrer, s'enfoncer. C'est comme un aspirateur géant invisible qui avale une maison entière ! Toute la richesse de Qârûn, tous ses trésors… engloutis en un instant. Seul Allah peut faire ça !",
        "relatedText": "La racine خ - س - ف montre la puissance d'Allah sur la terre et les orgueilleux.",
        "related": "<span>انْخَسَفَ</span> (s'effondrer), <span>خُسُوف</span> (éclipse), <span>خَسِيفَة</span> (enfouie)"
      },
      {
        "word": "يَبْسُطُ",
        "translit": "yabsuṭu",
        "meaning": "Il étend / Il accorde largement",
        "root": "ب - س - ط",
        "rootMeaning": "étendre / élargir / accorder",
        "rootColor": 1,
        "emoji": "🌍",
        "funFactTitle": "Allah donne à qui IL veut — pas à qui se croit le plus fort !",
        "funFact": "La racine <strong>b-s-ṭ</strong> veut dire « étendre » ou « accorder largement ». Allah <em>yabsuṭu al-rizq</em> = étend la provision à qui Il veut, comme un robinet d'eau qu'Allah ouvre et ferme comme Il le souhaite ! Le mot <em>bisṭ</em> = la générosité, le fait de donner largement. Et <em>bāsiṭ</em> = Celui qui donne avec largesse. Qârûn pensait que sa richesse venait de son « savoir », mais c'était Allah qui lui donnait ! On dit en arabe : « La provision vient d'Allah, pas de ton compte en banque ! »",
        "relatedText": "La racine ب - س - ط montre que toute richesse vient de la générosité d'Allah.",
        "related": "<span>بَسَطَة</span> (largeur/doucement), <span>بَسِيط</span> (étendu/simple), <span>انْبَسَطَ</span> (se détendre)"
      },
      {
        "word": "يَقْدِرُ",
        "translit": "yaqdiru",
        "meaning": "Il restreint / Il décrète",
        "root": "ق - د - ر",
        "rootMeaning": "pouvoir / mesurer / restreindre",
        "rootColor": 2,
        "emoji": "📏",
        "funFactTitle": "Allah donne avec générosité OU restreint — toujours avec sagesse !",
        "funFact": "La racine <strong>q-d-r</strong> veut dire « pouvoir » ou « mesurer ». Allah <em>yaqdiru</em> = restreint la provision quand Il le veut, comme un chef qui mesure exactement la bonne portion pour chaque invité ! Le mot <em>qadar</em> = le destin, le décret divin. Et <em>qadīr</em> = Le Tout-Puissant (un des noms d'Allah !). En arabe, <em>taqdīr</em> = la planification, l'évaluation. Allah mesure tout avec précision : ni trop, ni trop peu. Sa sagesse est PARFAITE !",
        "relatedText": "La racine ق - د - ر exprime le pouvoir absolu d'Allah de mesurer et restreindre.",
        "related": "<span>قَدِير</span> (Tout-Puissant), <span>قَدَر</span> (destin), <span>قَدْر</span> (valeur/mesure)"
      }
    ],
    "quiz": [
      {
        "question": "Pourquoi Qârûn a-t-il été englouti par la terre ?",
        "options": [
          "Il ne priait pas",
          "Il était arrogant et croyait que sa richesse venait de lui seul",
          "Il avait volé l'or de Fir'awn",
          "Il refusait de travailler"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">خَسَفْنَا</span> (khasafnā) ?",
        "options": [
          "Nous avons brûlé",
          "Nous avons noyé",
          "Nous avons fait engloutir",
          "Nous avons transporté"
        ],
        "correct": 2
      },
      {
        "question": "Quelle est la racine du mot <span class=\"arabic-inline\">الْكُنُوزِ</span> (les trésors) ?",
        "options": [
          "ك - ن - ز",
          "ب - س - ط",
          "ق - د - ر",
          "ح - ق - ق"
        ],
        "correct": 0
      },
      {
        "question": "Quelle leçon les gens ont-ils tirée après la destruction de Qârûn ?",
        "options": [
          "Il faut accumuler le plus d'or possible",
          "La richesse vient seulement du travail dur",
          "Allah accorde la richesse à qui Il veut, pas à qui se croit méritant",
          "Il ne faut jamais parler de richesse"
        ],
        "correct": 2
      }
    ],
    "completionText": "Waouh ! 💰 Tu as vu la fin incroyable de Qârûn ! Tu as appris la racine <strong>ح - ق - ق</strong> (vérité), la racine <strong>ك - ن - ز</strong> (trésor), la racine <strong>خ - س - ف</strong> (engloutir), la racine <strong>ب - س - ط</strong> (étendre/accorder) et la racine <strong>ق - د - ر</strong> (pouvoir/mesurer). La richesse sans reconnaissance envers Allah peut disparaître en un instant !"
  },
  {
    "id": "28-07",
    "surah": 28,
    "surahName": "Al-Qasas",
    "title": "Al-Qasas — Versets 83 à 88 : Le Paradis pour les bons et la fin de la sourate",
    "shortTitle": "Al-Qasas (v.83-88)",
    "subtitle": "La terre est un héritage pour les bons, la louange appartient à Allah, et la sourate se termine par l'appel au pardon !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 83,
        "arabic": "تِلْكَ الدَّارُ الْآخِرَةُ نَجْعَلُهَا لِلَّذِينَ لَا يُرِيدُونَ عُلُوًّا فِي الْأَرْضِ وَلَا فَسَادًا ۖ وَالْعَاقِبَةُ لِلْمُتَّقِينَ",
        "french": "Voici la Demeure Dernière : Nous la réservons à ceux qui ne cherchent ni à s'élever sur terre ni à semer la corruption. La belle fin appartient aux pieux."
      },
      {
        "number": 85,
        "arabic": "إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ لَرَادُّكَ إِلَىٰ مَعَادٍ",
        "french": "Celui qui t'a prescrit le Coran va te ramener à un lieu de retour."
      },
      {
        "number": 87,
        "arabic": "وَلَا يَصُدُّنَّكَ عَنْ آيَاتِ اللَّهِ بَعْدَ إِذْ أُنزِلَتْ إِلَيْكَ ۖ وَادْعُ إِلَىٰ رَبِّكَ وَلَا تَكُونَنَّ مِنَ الْمُشْرِكِينَ",
        "french": "Que rien ne te détourne des versets d'Allah après qu'ils t'ont été révélés. Et appelle à ton Seigneur. Ne sois pas du nombre des associateurs."
      },
      {
        "number": 88,
        "arabic": "وَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ ۘ لَا إِلَٰهَ إِلَّا هُوَ ۚ كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ ۚ لَهُ الْحُكْمُ وَإِلَيْهِ تُرْجَعُونَ",
        "french": "Et n'invoque aucune autre divinité avec Allah. Point de divinité à part Lui. Tout périt, sauf Son Visage. À Lui le Jugement, et vers Lui vous serez ramenés."
      }
    ],
    "words": [
      {
        "word": "الْآخِرَةُ",
        "translit": "al-ākhiratu",
        "meaning": "l'au-delà / la Demeure Dernière",
        "root": "أ - خ - ر",
        "rootMeaning": "être dernier / final / ultime",
        "rootColor": 3,
        "emoji": "🌅",
        "funFactTitle": "La Demeure Dernière : la VRAIE maison éternelle !",
        "funFact": "La racine <strong>ʾ-kh-r</strong> veut dire « être le dernier » ou « final ». <em>Al-ākhirah</em> = l'au-delà, la vie après la mort, comme le dernier niveau d'un jeu vidéo — mais en INFINI ! Le mot <em>ākhirah</em> = la dernière, l'ultime. Et <em>ākhar</em> = un autre, un dernier. Le Coran dit que le Paradis est pour ceux qui ne cherchent PAS l'orgueil sur terre. La vie d'ici-bas est comme le tutorial du jeu, et l'au-delà, c'est le VRAI jeu ! C'est pour ça qu'il faut bien jouer maintenant !",
        "relatedText": "La racine أ - خ - ر conclut la sourate en promettant le Paradis aux humbles.",
        "related": "<span>أَخِير</span> (dernier), <span>تَأَخَّرَ</span> (être en retard), <span>آخِرَة</span> (au-delà)"
      },
      {
        "word": "الْمُتَّقِينَ",
        "translit": "al-muttaqīna",
        "meaning": "les pieux / ceux qui craignent Allah",
        "root": "و - ق - ي",
        "rootMeaning": "craindre / se protéger / piété",
        "rootColor": 4,
        "emoji": "🛡️",
        "funFactTitle": "La piété : la meilleure ARMURE du monde !",
        "funFact": "La racine <strong>w-q-y</strong> veut dire « craindre Allah » ou « se protéger ». Les <em>muttaqīn</em> = les pieux, comme des chevaliers avec une armure invisible qui les protège de tout mal ! Le mot <em>taqwā</em> = la piété, la conscience d'Allah. Et <em>wiqāyah</em> = la protection, le bouclier. En arabe, <em>ittaqā</em> = se protéger en craignant Allah. C'est comme un parapluie invisible : quand tu es pieux, Allah te protège des tempêtes de la vie ! La belle fin leur appartient TOUJOURS.",
        "relatedText": "La racine و - ق - ي décrit la piété comme la meilleure protection contre le mal.",
        "related": "<span>تَقْوَى</span> (piété), <span>وَقَى</span> (protéger), <span>وِقَايَة</span> (protection/bouclier)"
      },
      {
        "word": "فَرَضَ",
        "translit": "faraḍa",
        "meaning": "Il a prescrit / obligé / décrété",
        "root": "ف - ر - ض",
        "rootMeaning": "obliger / prescrire / déterminer",
        "rootColor": 5,
        "emoji": "📜",
        "funFactTitle": "Allah a prescrit le Coran : la meilleure LOI de l'univers !",
        "funFact": "La racine <strong>f-r-ḍ</strong> veut dire « prescrire » ou « obliger ». Allah <em>faraḍa</em> = a prescrit le Coran au Prophète ﷺ, comme un enseignant qui donne le programme officiel de l'année ! Le mot <em>farīḍah</em> = l'obligation, le devoir (comme les 5 prières !). Et <em>faraḍ</em> = ce qui est obligatoire. En arabe, <em>iftaraḍa</em> = exiger quelque chose. La prière, la zakat, le jeûne — ce sont toutes des <em>farāʾiḍ</em> (pluriel) = des obligations prescrites par Allah. Chaque farīḍah accomplie est un trésor dans ton livre de bonnes actions !",
        "relatedText": "La racine ف - ر - ض souligne les obligations divines comme chemin vers la réussite.",
        "related": "<span>فَرِيضَة</span> (obligation/devoir), <span>فَرْض</span> (prescrit), <span>مُفْتَرَض</span> (obligatoire)"
      },
      {
        "word": "هَالِكٌ",
        "translit": "hālikun",
        "meaning": "périssable / voué à la destruction",
        "root": "ه - ل - ك",
        "rootMeaning": "périr / détruire / mourir",
        "rootColor": 6,
        "emoji": "🍂",
        "funFactTitle": "Tout disparaît… SAUF Allah !",
        "funFact": "La racine <strong>h-l-k</strong> veut dire « périr » ou « être détruit ». Allah dit : <em>kullu shayʾin hālikun illā wajhahu</em> = « Tout périt sauf Son Visage », comme des feuilles d'automne qui tombent toutes sauf l'arbre qui reste ! Le mot <em>halāk</em> = perdu, détruit, comme un château de sable que la mer emporte. Et <em>ahlaka</em> = détruire complètement. La leçon ? N'attache ton cœur qu'à Allah, car tout le reste disparaîtra un jour : les jouets, les téléphones, même les montagnes ! Seul Allah reste éternel.",
        "relatedText": "La racine ه - ل - ك offre l'un des versets les plus puissants du Coran sur l'éternité d'Allah.",
        "related": "<span>هَلَاك</span> (perte/destruction), <span>أَهْلَكَ</span> (détruire), <span>مُهْلِك</span> (destructeur)"
      },
      {
        "word": "يُرْجَعُونَ",
        "translit": "yurjaʿūna",
        "meaning": "ils seront ramenés / retournés",
        "root": "ر - ج - ع",
        "rootMeaning": "retourner / revenir / ramener",
        "rootColor": 7,
        "emoji": "🔄",
        "funFactTitle": "Le grand RETOUR : tout le monde revient vers Allah !",
        "funFact": "La racine <strong>r-j-ʿ</strong> veut dire « retourner » ou « revenir ». Le dernier verset dit : <em>ilayhi turjaʿūna</em> = « vers Lui vous serez ramenés », comme tous les oiseaux qui reviennent à leur nid au coucher du soleil ! Le mot <em>rujūʿ</em> = le retour, et <em>rajʿah</em> = le lieu de retour. En arabe, <em>rajāʿ</em> = l'espoir, car on espère le bon retour ! La sourate commence avec Mûsâ bébé dans le Nil et se termine par le retour de tous les humains vers Allah. Tout boucle se ferme !",
        "relatedText": "La racine ر - ج - ع clôt la sourate en rappelant le retour final vers Allah.",
        "related": "<span>رُجُوع</span> (retour), <span>أَرْجَعَ</span> (faire revenir), <span>مَرْجِع</span> (lieu de retour)"
      }
    ],
    "quiz": [
      {
        "question": "À qui Allah réserve-t-Il la Demeure Dernière (le Paradis) ?",
        "options": [
          "Aux plus riches",
          "Aux plus forts",
          "À ceux qui ne cherchent ni orgueil ni corruption",
          "Aux rois et aux reines"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">هَالِكٌ</span> (hālik) ?",
        "options": [
          "éternel",
          "périssable / voué à la destruction",
          "heureux",
          "intelligent"
        ],
        "correct": 1
      },
      {
        "question": "Quelle est la racine de <span class=\"arabic-inline\">الْمُتَّقِينَ</span> (les pieux) ?",
        "options": [
          "و - ق - ي",
          "أ - خ - ر",
          "ه - ل - ك",
          "ف - ر - ض"
        ],
        "correct": 0
      },
      {
        "question": "Quel est le dernier message de la sourate 28 ?",
        "options": [
          "N'invoque aucune divinité avec Allah — tout périt sauf Lui",
          "Construis des tours pour voir Allah",
          "Enrichis-toi autant que possible",
          "Fuis ton pays si tu es en danger"
        ],
        "correct": 0
      }
    ],
    "completionText": "Bravo ! 🌅 Tu as terminé la sourate Al-Qasas ! Tu as appris la racine <strong>أ - خ - ر</strong> (dernier/au-delà), la racine <strong>و - ق - ي</strong> (piété/protection), la racine <strong>ف - ر - ض</strong> (prescrire/obliger), la racine <strong>ه - ل - ك</strong> (périr) et la racine <strong>ر - ج - ع</strong> (retourner). Tout disparaît sauf Allah, et vers Lui est le retour final !"
  },
  {
    "id": "29-01",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "L'épreuve de la foi",
    "shortTitle": "Al-Ankabut (v.1-11)",
    "subtitle": "Allah nous apprend que la vraie foi doit être testée ! Comme à l'école, on ne donne pas le diplôme sans examen. Les prophètes avant nous ont tous été éprouvés.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الم",
        "french": "Alif, Lām, Mīm."
      },
      {
        "number": 2,
        "arabic": "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ",
        "french": "Les gens ont-ils cru qu'on les laisserait dire : « Nous croyons ! » sans qu'ils ne soient éprouvés ?"
      },
      {
        "number": 3,
        "arabic": "وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ",
        "french": "Nous avons certes éprouvé ceux qui ont vécu avant eux. Ainsi, Allah connaît ceux qui disent la vérité et Il connaît les menteurs."
      },
      {
        "number": 4,
        "arabic": "أَمْ حَسِبَ الَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ أَن يَسْبِقُونَا ۚ سَاءَ مَا يَحْكُمُونَ",
        "french": "Ou ceux qui commettent des mauvaises actions pensent-ils Nous échapper ? Quel mauvais jugement ils portent !"
      },
      {
        "number": 5,
        "arabic": "مَن كَانَ يَرْجُو لِقَاءَ اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        "french": "Celui qui espère la rencontre d'Allah doit savoir que le délai fixé par Allah va certes venir. Et c'est Lui l'Audient, l'Omniscient."
      },
      {
        "number": 6,
        "arabic": "وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ ۚ إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ",
        "french": "Et quiconque lutte, lutte uniquement pour lui-même. Allah est certes en dehors de tout besoin des mondes."
      },
      {
        "number": 7,
        "arabic": "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلَنَجْزِيَنَّهُمْ أَحْسَنَ الَّذِي كَانُوا يَعْمَلُونَ",
        "french": "Ceux qui croient et font de bonnes œuvres, Nous effacerons leurs mauvaises actions et les récompenserons selon la meilleure de ce qu'ils faisaient."
      },
      {
        "number": 8,
        "arabic": "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا ۖ وَإِن جَاهَدَاكَ لِتُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۚ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
        "french": "Nous avons commandé à l'homme la bonté envers ses parents. Mais s'ils te forcent à M'associer ce dont tu n'as aucune connaissance, alors ne leur obéis pas. Vers Moi est votre retour. Et Je vous informerai de ce que vous faisiez."
      },
      {
        "number": 9,
        "arabic": "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُدْخِلَنَّهُمْ فِي الصَّالِحِينَ",
        "french": "Ceux qui croient et font de bonnes œuvres, Nous les ferons certainement entrer parmi les vertueux."
      },
      {
        "number": 10,
        "arabic": "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ فَإِذَا أُوذِيَ فِي اللَّهِ جَعَلَ فِتْنَةَ النَّاسِ كَعَذَابِ اللَّهِ ۖ وَلَئِن جَاءَ نَصْرٌ مِّن رَّبِّكَ لَيَقُولُنَّ إِنَّا كُنَّا مَعَكُمْ ۚ أَوَلَيْسَ اللَّهُ بِأَعْلَمَ بِمَا فِي صُدُورِ الْعَالَمِينَ",
        "french": "Parmi les gens, il y en a qui disent : « Nous croyons en Allah ! » Mais quand ils souffrent pour la cause d'Allah, ils considèrent l'épreuve des hommes comme un châtiment d'Allah. Or, quand le secours de ton Seigneur vient, ils disent : « Nous étions certes avec vous ! » Allah n'est-Il pas le plus Savant de ce qu'il y a dans les poitrines de tous les mondes ?"
      },
      {
        "number": 11,
        "arabic": "وَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ آمَنُوا وَلَيَعْلَمَنَّ الْمُنَافِقِينَ",
        "french": "Allah connaîtra certes ceux qui ont cru, et Il connaîtra certes les hypocrites."
      }
    ],
    "words": [
      {
        "word": "يُفْتَنُونَ",
        "translit": "yuftanawna",
        "meaning": "ils soient éprouvés / testés",
        "root": "ف - ت - ن",
        "rootMeaning": "éprouver / tester / mettre à l'épreuve",
        "rootColor": 1,
        "emoji": "📝",
        "funFactTitle": "La foi est comme un muscle : il faut l'entraîner !",
        "funFact": "La racine <strong>f-t-n</strong> veut dire « éprouver, tester ». Allah dit qu'on ne peut PAS dire « je crois » sans être testé — comme à l'école, tu ne reçois pas ton diplôme sans passer l'examen ! Le mot <em>fitnah</em> veut dire « épreuve » mais aussi « tentation ». C'est comme un détective qui teste qui dit la vérité. Les prophètes ont tous eu leur <em>fitnah</em> : Noé avec son peuple, Ibrahim avec le feu, Moïse avec Pharaon. Chaque épreuve te rend plus fort !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فتنة</span> (épreuve), <span>فتن</span> (tester), <span>مفتون</span> (égaré par la tentation), <span>افتتن</span> (être éprouvé)"
      },
      {
        "word": "صَدَقُوا",
        "translit": "ṣadaqū",
        "meaning": "ils disent la vérité / ils sont sincères",
        "root": "ص - د - ق",
        "rootMeaning": "être véridique / sincère / dire la vérité",
        "rootColor": 2,
        "emoji": "💎",
        "funFactTitle": "Le diamant de la sincérité !",
        "funFact": "La racine <strong>ṣ-d-q</strong> veut dire « être sincère, dire la vérité ». L'épreuve révèle les <em>ṣādiqūn</em> (ceux qui sont sincères) — comme un filtre qui sépare l'or pur de l'or faux ! En arabe, <em>ṣidq</em> = « la vérité » et <em>ṣadāqa</em> = « l'aumône volontaire » car elle vient du cœur sincère. Un <em>ṣadīq</em> est un ami proche car un vrai ami est toujours honnête. Le Prophète était appelé <em>aṣ-Ṣādiq al-Amīn</em> (le Véridique, le Digne de confiance) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صدق</span> (vérité), <span>صادق</span> (sincère), <span>صداقة</span> (amitié), <span>صدقة</span> (aumône volontaire)"
      },
      {
        "word": "جَاهَدَ",
        "translit": "jāhada",
        "meaning": "il a lutté / il a fait des efforts",
        "root": "ج - ه - د",
        "rootMeaning": "lutter / faire effort / s'efforcer",
        "rootColor": 3,
        "emoji": "⚔️",
        "funFactTitle": "Le plus grand combat est contre soi-même !",
        "funFact": "La racine <strong>j-h-d</strong> veut dire « lutter, faire un effort intense ». Allah dit que quand tu <em>jāhada</em>, tu luttes pour TOI-MÊME — pas pour Allah car Il n'a besoin de personne ! C'est comme étudier dur pour un examen : les bonnes notes profitent à TOI. Le mot <em>jihād</em> vient de là — le plus grand <em>jihād</em> est le combat contre ses propres défauts. Un <em>mujāhid</em> est quelqu'un qui fait un effort sincère. Mémoriser le Coran est aussi un <em>jihād</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>جهاد</span> (effort/lutte), <span>مجاهد</span> (celui qui lutte), <span>جاهد</span> (lutter), <span>إجهاد</span> (épuisement)"
      },
      {
        "word": "وَصَّيْنَا",
        "translit": "waṣṣaynā",
        "meaning": "Nous avons recommandé / commandé",
        "root": "و - ص - ي",
        "rootMeaning": "recommander / conseiller / transmettre un message",
        "rootColor": 4,
        "emoji": "📜",
        "funFactTitle": "Le testament le plus important !",
        "funFact": "La racine <strong>w-ṣ-y</strong> veut dire « recommander, transmettre un conseil ». Allah a <em>waṣṣaynā</em> l'homme d'être bon avec ses parents — c'est l'un des commandements les plus répétés dans le Coran ! C'est comme un trésor en héritage : les parents te transmettent la vie, et Allah te demande de leur rendre la pareille avec gentillesse. Le mot <em>waṣiyya</em> = « le testament » et <em>wāṣī</em> = « celui qui donne un conseil ». Même quand les parents se trompent, on reste respectueux !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>وصية</span> (testament/conseil), <span>وصى</span> (recommander), <span>مواصلة</span> (lien/continuité), <span>وصي</span> (tuteur/conseiller)"
      },
      {
        "word": "الْمُنَافِقِينَ",
        "translit": "al-munāfiqīna",
        "meaning": "les hypocrites",
        "root": "ن - ف - ق",
        "rootMeaning": "hypocrisie / creux / être à deux faces",
        "rootColor": 5,
        "emoji": "🎭",
        "funFactTitle": "Le crocodile qui pleure !",
        "funFact": "La racine <strong>n-f-q</strong> veut dire « être creux, être à deux faces ». Un <em>munāfiq</em> (hypocrite) est comme un termitier : beau à l'extérieur mais creux à l'intérieur ! Il dit « je crois » avec sa bouche mais son cœur ne ressent rien. En arabe, <em>nāfiqā</em> (la gerboise) creuse des tunnels — elle entre par un trou et sort par un autre ! Le mot <em>nafaqa</em> veut aussi dire « dépenser » car l'argent « sort » de la poche. L'hypocrite « sort » de la vérité par ses deux faces !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نفاق</span> (hypocrisie), <span>منافق</span> (hypocrite), <span>نفق</span> (tunnel), <span>نفقة</span> (dépense)"
      }
    ],
    "quiz": [
      {
        "question": "Pourquoi Allah éprouve-t-Il les croyants selon le verset 2 ?",
        "options": [
          "Pour les punir",
          "Pour les ennuyer",
          "Pour les rendre tristes",
          "Pour vérifier qui est sincère et qui ment"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ف - ت - ن</strong> (éprouver) donne aussi le mot :",
        "options": [
          "Épreuve (fitnah)",
          "Fête (ʿīd)",
          "Prière (ṣalāh)",
          "Mosquée (masjid)"
        ],
        "correct": 0
      },
      {
        "question": "Pourquoi Allah dit-Il que celui qui lutte (jāhada) lutte pour lui-même ?",
        "options": [
          "Parce qu'Allah a besoin d'aide",
          "Parce qu'il est seul",
          "Car la récompense du bon effort lui revient",
          "Pour le punir"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">الْمُنَافِقِينَ</span> (al-munāfiqīna) ?",
        "options": [
          "Les sincères",
          "Les prophètes",
          "Les hypocrites",
          "Les anges"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! 🏋️ Tu as commencé Al-Ankabut ! Tu as découvert la racine <strong>ف - ت - ن</strong> (éprouver), <strong>ص - د - ق</strong> (sincérité), <strong>ج - ه - د</strong> (effort) et <strong>ن - ف - ق</strong> (hypocrisie). La vraie foi est testée comme l'or dans le feu !"
  },
  {
    "id": "29-02",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "Le débat d'Ibrahim et les idoles",
    "shortTitle": "Al-Ankabut (v.12-23)",
    "subtitle": "Ibrahim débat avec son peuple qui adore des idoles sans valeur. Allah montre que l'association (shirk) est le pire des mensonges !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 12,
        "arabic": "وَقَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا اتَّبِعُوا سَبِيلَنَا وَلْنَحْمِلْ خَطَايَاكُمْ وَمَا هُم بِحَامِلِينَ مِنْ خَطَايَاهُم مِّن شَيْءٍ ۖ إِنَّهُمْ لَكَاذِبُونَ",
        "french": "Ceux qui ne croient pas disent à ceux qui croient : « Suivez notre voie et nous porterons vos péchés. » Mais ils ne porteront rien de leurs péchés. Ce sont des menteurs."
      },
      {
        "number": 13,
        "arabic": "وَلَيَحْمِلُنَّ أَثْقَالَهُمْ وَأَثْقَالًا مَّعَ أَثْقَالِهِمْ وَلَيُسْأَلُنَّ يَوْمَ الْقِيَامَةِ عَمَّا كَانُوا يَفْتَرُونَ",
        "french": "Ils porteront certes leurs propres fardeaux et d'autres fardeaux en plus de leurs propres fardeaux. Et ils seront interrogés, le Jour de la Résurrection, sur ce qu'ils inventaient."
      },
      {
        "number": 14,
        "arabic": "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ",
        "french": "Nous avons certes envoyé Noé vers son peuple. Il demeura parmi eux mille ans moins cinquante ans. Puis le déluge les saisit alors qu'ils étaient injustes."
      },
      {
        "number": 15,
        "arabic": "فَأَنجَيْنَاهُ وَأَصْحَابَ السَّفِينَةِ وَجَعَلْنَاهَا آيَةً لِّلْعَالَمِينَ",
        "french": "Nous le sauvâmes, lui et les gens de l'arche, et Nous en fîmes un signe pour l'univers."
      },
      {
        "number": 16,
        "arabic": "وَإِبْرَاهِيمَ إِذْ قَالَ لِقَوْمِهِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ ۖ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
        "french": "Et (rappelle-toi) Abraham, quand il dit à son peuple : « Adorez Allah et craignez-Le. Cela vous est meilleur si vous compreniez. »"
      },
      {
        "number": 17,
        "arabic": "إِنَّمَا تَعْبُدُونَ مِن دُونِ اللَّهِ أَوْثَانًا وَتَخْلُقُونَ إِفْكًا ۚ إِنَّ الَّذِينَ تَعْبُدُونَ مِن دُونِ اللَّهِ لَا يَمْلِكُونَ لَكُمْ رِزْقًا فَابْتَغُوا عِندَ اللَّهِ الرِّزْقَ وَاعْبُدُوهُ وَاشْكُرُوا لَهُ ۖ إِلَيْهِ تُرْجَعُونَ",
        "french": "Vous n'adorez en dehors d'Allah que des idoles et vous forgez des mensonges. Ceux que vous adorez en dehors d'Allah ne possèdent aucun moyen de vous accorder la subsistance. Recherchez donc la subsistance auprès d'Allah, adorez-Le et soyez-Lui reconnaissants. C'est vers Lui que vous serez ramenés."
      },
      {
        "number": 18,
        "arabic": "وَإِن تُكَذِّبُوا فَقَدْ كَذَّبَ أُمَمٌ مِّن قَبْلِكُمْ ۖ وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ الْمُبِينُ",
        "french": "Et si vous traitez (le Coran) de mensonge, des nations avant vous ont aussi traité (leurs messagers) de menteurs. Au messager, cependant, ne revient que la transmission claire."
      },
      {
        "number": 19,
        "arabic": "أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ ثُمَّ يُعِيدُهُ ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ",
        "french": "Ne voient-ils pas comment Allah initie la création puis la refait ? Cela est facile pour Allah."
      },
      {
        "number": 20,
        "arabic": "قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ ۚ ثُمَّ اللَّهُ يُنشِئُ النَّشْأَةَ الْآخِرَةَ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        "french": "Dis : « Parcourez la terre et regardez comment Allah a commencé la création. Puis Allah recréera la vie future. Allah est Omnipotent. »"
      },
      {
        "number": 21,
        "arabic": "يُعَذِّبُ مَن يَشَاءُ وَيَرْحَمُ مَن يَشَاءُ ۖ وَإِلَيْهِ تُقْلَبُونَ",
        "french": "Il châtie qui Il veut et fait miséricorde à qui Il veut. Et c'est vers Lui que vous serez ramenés."
      },
      {
        "number": 22,
        "arabic": "وَمَا أَنتُم بِمُعْجِزِينَ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ",
        "french": "Vous n'échapperez ni sur terre ni dans le ciel. Et en dehors d'Allah, vous n'avez ni protecteur ni secoureur."
      },
      {
        "number": 23,
        "arabic": "وَالَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ وَلِقَائِهِ ۚ أُولَٰئِكَ يَئِسُوا مِن رَّحْمَتِي وَأُولَٰئِكَ لَهُمْ عَذَابٌ أَلِيمٌ",
        "french": "Et ceux qui ne croient pas aux versets d'Allah et à Sa rencontre : ceux-là désespèrent de Ma miséricorde. Et ceux-là auront un châtiment douloureux."
      }
    ],
    "words": [
      {
        "word": "أَوْثَانًا",
        "translit": "awthānan",
        "meaning": "des idoles / des statues adorées",
        "root": "و - ث - ن",
        "rootMeaning": "idole / chose faible et immobile",
        "rootColor": 6,
        "emoji": "🗿",
        "funFactTitle": "Les idoles : des statues qui ne peuvent RIEN !",
        "funFact": "La racine <strong>w-th-n</strong> donne le mot <em>wathn</em> (idole) — une statue que les gens adorent au lieu d'Allah. Ibrahim a brisé les idoles de son peuple car elles ne peuvent ni parler, ni entendre, ni nourrir personne ! C'est comme adorer un jouet en plastique : il ne peut même pas te donner un bonbon. En arabe, <em>wathana</em> = « adorer une idole ». Le mot <em>withān</em> (pluriel) vient de l'idée d'une chose « enfoncée », immobile, sans vie.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>وثن</span> (idole), <span>أوثان</span> (idoles), <span>وثنية</span> (idolâtrie), <span>متوثن</span> (enraciné/immobile)"
      },
      {
        "word": "إِفْكًا",
        "translit": "ifkan",
        "meaning": "un mensonge / une invention",
        "root": "أ - ف - ك",
        "rootMeaning": "mentir / inventer / tourner la vérité",
        "rootColor": 7,
        "emoji": "🤥",
        "funFactTitle": "Le mensonge qui perd sa forme !",
        "funFact": "La racine <strong>ʾ-f-k</strong> veut dire « mentir, inventer, déformer ». Allah dit que les idoles sont un <em>ifk</em> — une pure invention de l'esprit humain ! Le mot <em>ifk</em> vient de l'idée de « retourner » la vérité à l'envers, comme un gant qu'on met à l'envers. En arabe, <em>ʾafaka</em> = « retourner, renverser ». Quand on accuse quelqu'un injustement, on appelle ça <em>ifk</em> — comme l'histoire du mensonge contre Aïcha (ra). Le mensonge détruit la confiance comme le feu détruit le papier !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إفك</span> (mensonge), <span>أفك</span> (déformer), <span>مفتري</span> (inventeur de mensonges), <span>افتراء</span> (calomnie)"
      },
      {
        "word": "يُبْدِئُ",
        "translit": "yubdiʾu",
        "meaning": "Il initie / Il commence la création",
        "root": "ب - د - أ",
        "rootMeaning": "commencer / initier / créer du rien",
        "rootColor": 1,
        "emoji": "🌱",
        "funFactTitle": "Allah, le Premier Créateur !",
        "funFact": "La racine <strong>b-d-ʾ</strong> veut dire « commencer, initier ». Allah <em>yubdiʾu</em> la création — Il la commence à partir de RIEN ! C'est comme un auteur qui écrit un livre depuis une page blanche. Le mot <em>ibtidāʾ</em> = « le commencement ». Allah peut créer une deuxième fois exactement comme Il a créé la première fois — c'est LUI le Début et la Fin. En arabe, <em>mubtadaʾ</em> = « le point de départ ». Rien ne commence sans la permission d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ابتداء</span> (commencement), <span>بدأ</span> (commencer), <span>مبتدئ</span> (débutant), <span>بديع</span> (créateur originel)"
      },
      {
        "word": "يُعِيدُهُ",
        "translit": "yuʿīduhu",
        "meaning": "Il le refait / Il le ressuscite",
        "root": "ع - و - د",
        "rootMeaning": "revenir / répéter / ramener",
        "rootColor": 2,
        "emoji": "🔄",
        "funFactTitle": "La résurrection : un retour à la vie !",
        "funFact": "La racine <strong>ʿ-w-d</strong> veut dire « revenir, répéter, ramener ». Allah <em>yuʿīdu</em> la création — Il la ramène à la vie après la mort ! C'est comme un film qu'on rembobine : Allah peut tout recréer. Le mot <em>ʿawda</em> = « le retour » et <em>maʿād</em> = « le lieu du retour » (l'au-delà). En arabe, <em>ʿāda</em> veut dire « il est revenu ». Allah a commencé la création et Il peut la recommencer — c'est aussi facile pour Lui que de dire « Sois ! »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>عودة</span> (retour), <span>عيد</span> (fête/retour), <span>معاد</span> (au-delà/retour), <span>أعاد</span> (il a refait)"
      },
      {
        "word": "رَحْمَتِي",
        "translit": "raḥmatī",
        "meaning": "Ma miséricorde",
        "root": "ر - ح - م",
        "rootMeaning": "miséricorde / compassion / tendresse",
        "rootColor": 3,
        "emoji": "💝",
        "funFactTitle": "Le trésor de la miséricorde d'Allah !",
        "funFact": "La racine <strong>r-ḥ-m</strong> est l'une des plus belles du Coran ! <em>Raḥma</em> = la miséricorde, la tendresse d'une mère pour son enfant. En arabe, <em>raḥīm</em> = « compatissant » et <em>ar-Raḥmān</em> = « le Tout-Miséricordieux ». Le mot <em>raḥam</em> (matrice) vient de cette racine car le bébé y est protégé avec tendresse. Le Prophète a dit : « La miséricorde d'Allah comprend 100 parts, et Il en a gardé 99 pour le Jour du Jugement. » Ceux qui croient ne désespèrent JAMAIS de la <em>raḥma</em> d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رحمة</span> (miséricorde), <span>رحمن</span> (le Tout-Miséricordieux), <span>رحيم</span> (le Très-Miséricordieux), <span>رحم</span> (matrice/tendresse)"
      }
    ],
    "quiz": [
      {
        "question": "Combien d'années Noé a-t-il passé parmi son peuple selon le verset 14 ?",
        "options": [
          "500 ans",
          "950 ans",
          "200 ans",
          "1000 ans moins 50 ans"
        ],
        "correct": 3
      },
      {
        "question": "Ibrahim a dit à son peuple qu'ils adorent en dehors d'Allah des :",
        "options": [
          "idoles (awthānan)",
          "anges",
          "étoiles",
          "prophètes"
        ],
        "correct": 0
      },
      {
        "question": "La racine <strong>ب - د - أ</strong> (commencer) donne aussi le mot pour :",
        "options": [
          "La fin (nihāya)",
          "Le commencement (ibtidāʾ)",
          "Le milieu (wasaṭ)",
          "Le sommeil (nawm)"
        ],
        "correct": 1
      },
      {
        "question": "Ceux qui ne croient pas aux versets d'Allah et à Sa rencontre désespèrent de :",
        "options": [
          "La nourriture",
          "La miséricorde d'Allah",
          "La richesse",
          "La victoire"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! 🌊 Tu as étudié les versets 12 à 23 ! Tu as appris la racine <strong>و - ث - ن</strong> (idole), <strong>أ - ف - ك</strong> (mensonge), <strong>ب - د - أ</strong> (commencer) et <strong>ر - ح - م</strong> (miséricorde). Ibrahim a détruit les idoles car seul Allah mérite l'adoration !"
  },
  {
    "id": "29-03",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "La foi d'Ibrahim et l'exemple de Lot",
    "shortTitle": "Al-Ankabut (v.24-35)",
    "subtitle": "Ibrahim fuit son peuple après avoir brisé leurs idoles. Lot reçoit des anges comme hôtes. Allah sauve les croyants et détruit les injustes !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 24,
        "arabic": "فَآمَنَ لَهُ لُوطٌ وَقَالَ إِنِّي مُهَاجِرٌ إِلَىٰ رَبِّي ۖ إِنَّهُ هُوَ الْعَزِيزُ الْحَكِيمُ",
        "french": "Lot crut en lui. Il dit : « Je vais émigrer vers mon Seigneur, car c'est Lui le Puissant, le Sage. »"
      },
      {
        "number": 25,
        "arabic": "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ وَجَعَلْنَا فِي ذُرِّيَّتِهِ النُّبُوَّةَ وَالْكِتَابَ وَآتَيْنَاهُ أَجْرَهُ فِي الدُّنْيَا ۖ وَإِنَّهُ فِي الْآخِرَةِ لَمِنَ الصَّالِحِينَ",
        "french": "Et Nous lui donnâmes Isaac et Jacob, et Nous fîmes de sa descendance les prophètes et les Livres. Nous lui donnâmes sa récompense ici-bas, tandis que dans l'au-delà, il sera du nombre des gens de bien."
      },
      {
        "number": 26,
        "arabic": "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ إِنَّكُمْ لَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ",
        "french": "Et Lot, quand il dit à son peuple : « Vous commettez la turpitude que nul dans l'univers n'a commise avant vous."
      },
      {
        "number": 27,
        "arabic": "أَإِنَّكُمْ لَتَأْتُونَ الرِّجَالَ وَتَقْطَعُونَ السَّبِيلَ وَتَأْتُونَ فِي نَدْوَاتِكُمُ الْمُنكَرَ ۖ فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا ائْتِنَا بِعَذَابِ اللَّهِ إِن كُنتَ مِنَ الصَّادِقِينَ",
        "french": "Vous approchez des hommes au lieu de femmes, vous coupez les chemins et vous commettez des blâmables dans vos assemblées. » Mais la seule réponse de son peuple fut de dire : « Fais venir sur nous le châtiment d'Allah, si tu es du nombre des véridiques. »"
      },
      {
        "number": 28,
        "arabic": "قَالَ رَبِّ انصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ",
        "french": "Il dit : « Seigneur, donne-moi victoire sur ces gens corrupteurs. »"
      },
      {
        "number": 29,
        "arabic": "وَلَمَّا جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ قَالُوا إِنَّا مُهْلِكُو أَهْلِ هَٰذِهِ الْقَرْيَةِ ۖ إِنَّ أَهْلَهَا كَانُوا ظَالِمِينَ",
        "french": "Et lorsque Nos messagers vinrent auprès d'Abraham avec la bonne nouvelle, ils dirent : « Nous allons détruire les gens de cette cité car ses gens sont injustes. »"
      },
      {
        "number": 30,
        "arabic": "قَالَ إِنَّ فِيهَا لُوطًا ۖ قَالُوا نَحْنُ أَعْلَمُ بِمَن فِيهَا ۖ لَنُنَجِّيَنَّهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ كَانَتْ مِنَ الْغَابِرِينَ",
        "french": "Il dit : « Mais Lot s'y trouve ! » Ils dirent : « Nous savons parfaitement qui s'y trouve. Nous le sauverons, lui et sa famille, sauf sa femme qui sera parmi les exterminés. »"
      },
      {
        "number": 31,
        "arabic": "وَلَمَّا أَن جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًا وَقَالُوا لَا تَخَفْ وَلَا تَحْزَنْ ۖ إِنَّا مُنَجُّوكَ وَأَهْلَكَ إِلَّا امْرَأَتَكَ كَانَتْ مِنَ الْغَابِرِينَ",
        "french": "Et lorsque Nos messagers vinrent vers Lot, il fut affligé pour eux et ressenti une grande angoisse. Ils dirent : « Ne crains pas et ne t'afflige pas. Nous te sauverons ainsi que ta famille, sauf ta femme qui sera des exterminés."
      },
      {
        "number": 32,
        "arabic": "إِنَّا مُنزِلُونَ عَلَىٰ أَهْلِ هَٰذِهِ الْقَرْيَةِ رِجْزًا مِّنَ السَّمَاءِ بِمَا كَانُوا يَفْسُقُونَ",
        "french": "Nous ferons descendre du ciel un châtiment sur les habitants de cette cité pour avoir transgressé. »"
      },
      {
        "number": 33,
        "arabic": "وَلَقَد تَّرَكْنَا مِنْهَا آيَةً بَيِّنَةً لِّقَوْمٍ يَعْقِلُونَ",
        "french": "Et Nous avons certes laissé là un signe clair pour des gens qui raisonnent."
      },
      {
        "number": 34,
        "arabic": "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا فَقَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ وَارْجُوا الْيَوْمَ الْآخِرَ وَلَا تُفْسِدُوا فِي الْأَرْضِ مُفْسِدِينَ",
        "french": "Et (Nous avons envoyé) vers Madyan leur frère Shu'ayb. Il dit : « Ô mon peuple, adorez Allah et espérez le Jour dernier. Et ne semez pas la corruption sur terre. »"
      },
      {
        "number": 35,
        "arabic": "فَكَذَّبُوهُ فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ",
        "french": "Mais ils le traitèrent de menteur. Le tremblement de terre les saisit, et ils se retrouvèrent étendus (morts) dans leur demeure."
      }
    ],
    "words": [
      {
        "word": "مُهَاجِرٌ",
        "translit": "muhājirun",
        "meaning": "celui qui émigre / qui quitte son pays pour Allah",
        "root": "ه - ج - ر",
        "rootMeaning": "émigrer / quitter / abandonner",
        "rootColor": 4,
        "emoji": "🧳",
        "funFactTitle": "L'émigration pour la foi !",
        "funFact": "La racine <strong>h-j-r</strong> veut dire « émigrer, quitter ». Ibrahim a dit « je suis <em>muhājir</em> vers mon Seigneur » — il a quitté son pays, sa maison et son peuple pour Allah ! C'est comme partir en voyage léger avec seulement la confiance en Allah. Le mot <em>hijra</em> = « l'émigration » et <em>muhājirūn</em> = « les émigrants ». Le Prophète Muhammad a fait la <em>hijra</em> de la Mecque à Médine. Le mot <em>hājir</em> peut aussi signifier « abandonner le mal ». Quitter quelque chose de mauvais, c'est aussi une <em>hijra</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>هجرة</span> (émigration), <span>مهاجر</span> (émigrant), <span>هاجر</span> (émigrer), <span>مهجر</span> (lieu d'origine)"
      },
      {
        "word": "الْفَاحِشَةَ",
        "translit": "al-fāḥishata",
        "meaning": "la turpitude / le grand péché",
        "root": "ف - ح - ش",
        "rootMeaning": "turpitude / chose grave et laide",
        "rootColor": 5,
        "emoji": "⛔",
        "funFactTitle": "Les grands péchés qu'Allah déteste !",
        "funFact": "La racine <strong>f-ḥ-sh</strong> veut dire « chose laide, turpitude ». La <em>fāḥisha</em> est un péché si grave qu'Allah en parle avec sévérité — comme un acte tellement laid que tout le monde le rejette. Le peuple de Lot commettait la <em>fāḥisha</em> la plus grave de l'histoire. En arabe, <em>fāḥish</em> = « celui qui commet des actes graves » et <em>istifḥāsh</em> = « se permettre des choses interdites ». Le Prophète a dit : « Les 7 péchés destructeurs » sont tous des <em>kabāʾir</em> (grands péchés) liés à cette racine.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فاحشة</span> (turpitude), <span>فحش</span> (laideur morale), <span>متفحش</span> (qui commet des excès), <span>استفحاش</span> (aggravation)"
      },
      {
        "word": "الْمُفْسِدِينَ",
        "translit": "al-mufsidīna",
        "meaning": "les corrupteurs / ceux qui sèment la destruction",
        "root": "ف - س - د",
        "rootMeaning": "corrompre / détruire / gâcher",
        "rootColor": 6,
        "emoji": "🗑️",
        "funFactTitle": "La corruption : comme verser de l'encre dans l'eau !",
        "funFact": "La racine <strong>f-s-d</strong> veut dire « corrompre, gâcher ». Les <em>mufsidūn</em> sont ceux qui détruisent le bien autour d'eux — comme verser de l'encre noire dans un verre d'eau claire ! En arabe, <em>fasād</em> = « la corruption » et <em>mufsid</em> = « le corrupteur ». Un fruit pourri est <em>fāsid</em> car il est gâté. Allah aime ceux qui <em>ṣulaḥū</em> (réparent) et déteste ceux qui <em>afsadū</em> (corrompent). Sois un réparateur, pas un destructeur !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فساد</span> (corruption), <span>مفسد</span> (corrupteur), <span>أفسد</span> (il a corrompu), <span>إصلاح</span> (réparation — l'opposé !)"
      },
      {
        "word": "الرَّجْفَةُ",
        "translit": "ar-rajfatu",
        "meaning": "le tremblement de terre / la secousse",
        "root": "ر - ج - ف",
        "rootMeaning": "trembler / frémir / secouer violemment",
        "rootColor": 7,
        "emoji": "💥",
        "funFactTitle": "Le tremblement de terre divin !",
        "funFact": "La racine <strong>r-j-f</strong> veut dire « trembler, secouer violemment ». La <em>rajfa</em> a frappé le peuple de Shu'ayb — un tremblement si puissant que tout le monde a été anéanti ! C'est comme secouer un tapis : toute la poussière tombe d'un coup. En arabe, <em>rajafa</em> = « il a tremblé » et <em>irjāf</em> = « une grande secousse ». Le mot <em>rajīf</em> décrit aussi le cœur qui tremble de peur. Le tremblement de terre est l'un des signes de la puissance d'Allah sur la terre !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رجفة</span> (tremblement), <span>ارتجف</span> (frémir), <span>رجاف</span> (tremblement violent), <span>راجف</span> (tremblant)"
      },
      {
        "word": "جَاثِمِينَ",
        "translit": "jāthimīna",
        "meaning": "étendus (morts) au sol / immobiles",
        "root": "ج - ث - م",
        "rootMeaning": "rester immobile / s'accroupir / être étendu",
        "rootColor": 1,
        "emoji": "🔇",
        "funFactTitle": "Le silence éternel des injustes...",
        "funFact": "La racine <strong>j-th-m</strong> veut dire « rester immobile, s'accroupir, être étendu ». Les gens de Shu'ayb sont devenus <em>jāthimīn</em> — étendus morts dans leurs maisons, comme des poupées tombées ! En arabe, <em>juthūm</em> = « le cadavre » et <em>ijthām</em> = « le silence complet ». Le mot <em>jāthim</em> décrit aussi un oiseau posé immobile sur le sol. Après leur mort, plus aucun son ne sortait d'eux — un silence que seul Allah pouvait créer. Ce verset nous rappelle que seul Allah donne la vie !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>جثم</span> (être immobile), <span>جثوم</span> (s'accroupir), <span>جاثم</span> (étendu au sol), <span>جثة</span> (cadavre)"
      }
    ],
    "quiz": [
      {
        "question": "Qui a dit « Je vais émigrer vers mon Seigneur » ?",
        "options": [
          "Ibrahim",
          "Moïse",
          "Jésus",
          "Noé"
        ],
        "correct": 0
      },
      {
        "question": "La racine <strong>ه - ج - ر</strong> (émigrer) est aussi liée à :",
        "options": [
          "La prière",
          "Le sommeil",
          "Le voyage et le fait de quitter",
          "La nourriture"
        ],
        "correct": 2
      },
      {
        "question": "Comment le peuple de Shu'ayb a-t-il été puni ?",
        "options": [
          "Par un déluge",
          "Par un vent violent",
          "Par un tremblement de terre (rajfa)",
          "Par un feu"
        ],
        "correct": 2
      },
      {
        "question": "Le mot <span class=\"arabic-inline\">الْفَاحِشَةَ</span> (al-fāḥisha) désigne :",
        "options": [
          "Une bonne action",
          "Un petit mensonge",
          "Un jeu",
          "La turpitude / un grand péché"
        ],
        "correct": 3
      }
    ],
    "completionText": "Génial ! 🕋 Tu as étudié les versets 24 à 35 ! Tu as appris la racine <strong>ه - ج - ر</strong> (émigrer), <strong>ف - ح - ش</strong> (turpitude), <strong>ف - س - د</strong> (corrompre) et <strong>ر - ج - ف</strong> (trembler). Les prophètes ont toujours eu foi en Allah, même face au danger !"
  },
  {
    "id": "29-04",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "Les peuples punis et les signes dans la création",
    "shortTitle": "Al-Ankabut (v.36-45)",
    "subtitle": "Allah raconte Aad, Thamud, Pharaon et Coré — tous détruits pour leur orgueil. Puis Il nous montre Ses signes dans le ciel et sur terre !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 36,
        "arabic": "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ وَلَا تَعْبُدُوا مِن دُونِهِ غَيْرَهُمْ ۖ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ",
        "french": "Et (Nous avons envoyé) vers les Aad leur frère Houd. Il dit : « Ô mon peuple, adorez Allah et craignez-Le. Et n'adorez rien en dehors de Lui. Je crains pour vous le châtiment d'un Jour terrible. »"
      },
      {
        "number": 37,
        "arabic": "قَالُوا أَجِئْتَنَا لِنَعْبُدَ اللَّهَ وَحْدَهُ وَنَذَرَ مَا كَانَ يَعْبُدُ آبَاؤُنَا ۖ فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ",
        "french": "Ils dirent : « Es-tu venu pour que nous adorions Allah seul et abandonnions ce qu'adoraient nos ancêtres ? Apporte-nous donc ce que tu nous promets, si tu es du nombre des véridiques. »"
      },
      {
        "number": 38,
        "arabic": "قَالَ قَدْ وَقَعَ عَلَيْكُم مِّن رَّبِّكُمْ رِجْسٌ وَغَضَبٌ ۖ أَتُجَادِلُونَنِي فِي أَسْمَاءٍ سَمَّيْتُمُوهَا أَنتُمْ وَآبَاؤُكُم مَّا نَزَّلَ اللَّهُ بِهَا مِن سُلْطَانٍ ۖ فَانتَظِرُوا إِنِّي مَعَكُم مِّنَ الْمُنتَظِرِينَ",
        "french": "Il dit : « Le châtiment et la colère de votre Seigneur sont déjà tombés sur vous. Allez-vous me disputer au sujet de noms que vous et vos ancêtres avez inventés, et qu'Allah n'a révélé aucun argument ? Attendez donc ! Moi aussi j'attends avec vous. »"
      },
      {
        "number": 39,
        "arabic": "فَأَنْجَيْنَاهُ وَالَّذِينَ آمَنُوا مَعَهُ بِرَحْمَةٍ مِّنَّا وَقَطَعْنَا دَابِرَ الَّذِينَ كَذَّبُوا بِآيَاتِنَا ۖ وَمَا كَانُوا مُؤْمِنِينَ",
        "french": "Nous le sauvâmes, lui et ceux qui avaient cru avec lui, par une miséricorde de Notre part, et Nous exterminâmes ceux qui traitaient de mensonge Nos signes et qui n'étaient pas croyants."
      },
      {
        "number": 40,
        "arabic": "وَثَمُودَ فَمَا أَبْقَىٰهُمْ",
        "french": "Et (Nous détruisîmes) les Thamud. Il n'en resta rien."
      },
      {
        "number": 41,
        "arabic": "وَقَوْمَ نُوحٍ مِّن قَبْلُ ۖ إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ",
        "french": "Et le peuple de Noé auparavant. Ils étaient des gens pervers."
      },
      {
        "number": 42,
        "arabic": "وَالْمَدَائِنَ أَهْلَكْنَاهَا فَحَشَاءَ لَهَا وَبَيَّنَّا الْآيَاتِ لَعَلَّهُمْ يَرْجِعُونَ",
        "french": "Et les cités — Nous les avons détruites quand elles commirent des injustices, et Nous avons fixé un délai pour leur destruction."
      },
      {
        "number": 43,
        "arabic": "فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ",
        "french": "Si seulement une cité avait cru et tiré profit de sa foi ! Seulement le peuple de Yunus : quand ils crurent, Nous écartâmes d'eux le châtiment de l'ignominie dans la vie présente et leur donnâmes jouissance pour un certain temps."
      },
      {
        "number": 44,
        "arabic": "قُلْ يَا أَيُّهَا النَّاسُ إِنَّمَا أَنَا لَكُمْ نَذِيرٌ مُّبِينٌ",
        "french": "Dis : « Ô gens, je suis pour vous un avertisseur explicite. »"
      },
      {
        "number": 45,
        "arabic": "الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَكَّلُوا عَلَىٰ رَبِّهِمْ ۚ أَلَيْسَ اللَّهُ بِكَافٍ عِبْدَهُ ۖ وَهُمْ يُخَوِّفُونَكَ بِالَّذِينَ مِن دُونِهِ ۚ وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ",
        "french": "Ceux qui croient et font de bonnes œuvres et s'en remettent à leur Seigneur. Allah ne suffit-Il pas à Son serviteur ? Et ils te frightent avec des divinités en dehors de Lui. Et quiconque Allah égare, n'a aucun guide."
      }
    ],
    "words": [
      {
        "word": "رِجْسٌ",
        "translit": "rijzun",
        "meaning": "un châtiment impur / une souillure",
        "root": "ر - ج - ز",
        "rootMeaning": "châtiment / impureté / souillure",
        "rootColor": 2,
        "emoji": "☠️",
        "funFactTitle": "Le châtiment qui salit l'âme !",
        "funFact": "La racine <strong>r-j-z</strong> veut dire « châtiment, impureté ». Le <em>rijz</em> est un châtiment si fort qu'il « salit » tout sur son passage — comme une inondation de boue qui recouvre une ville entière ! Houd avertit son peuple que le <em>rijz</em> d'Allah allait tomber s'ils ne changeaient pas. En arabe, <em>rajz</em> veut aussi dire « le tremblement de terre » car il secoue tout. Le <em>rjaz</em> est la terre sablonneuse instable. Ce verset rappelle que la désobéissance attire le <em>rijz</em> comme le magnétisme attire le fer !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رجز</span> (châtiment), <span>رجس</span> (impureté), <span>أرجاس</span> (souillures), <span>يرجس</span> (trembler de peur)"
      },
      {
        "word": "سُلْطَانٍ",
        "translit": "sulṭānin",
        "meaning": "une preuve / une autorité / un argument",
        "root": "س - ل - ط",
        "rootMeaning": "autorité / pouvoir / preuve évidente",
        "rootColor": 3,
        "emoji": "📜",
        "funFactTitle": "La preuve qui donne le pouvoir !",
        "funFact": "La racine <strong>s-l-ṭ</strong> veut dire « pouvoir, autorité, preuve ». Le <em>sulṭān</em> dans le Coran peut vouloir dire « une preuve évidente » ou « un pouvoir » — comme un certificat qui te donne le droit de faire quelque chose ! Houd dit : vous adorez des idoles qu'Allah n'a jamais données comme <em>sulṭān</em> (preuve). En arabe, <em>sulṭān</em> = « le roi / le gouvernant » et <em>mustaṭīr</em> = « puissant ». Le mot est utilisé pour la preuve divine — Allah donne des preuves claires à ceux qui réfléchissent !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>سلطان</span> (autorité/preuve), <span>استطال</span> (être puissant), <span>تسليط</span> (pouvoir), <span>سليط</span> (dominant)"
      },
      {
        "word": "كَشَفْنَا",
        "translit": "kashafnā",
        "meaning": "Nous avons écarté / retiré",
        "root": "ك - ش - ف",
        "rootMeaning": "écarter / lever / découvrir",
        "rootColor": 4,
        "emoji": "🌤️",
        "funFactTitle": "Allah écarte les nuages de l'épreuve !",
        "funFact": "La racine <strong>k-sh-f</strong> veut dire « écarter, retirer, découvrir ». Allah a <em>kashafnā</em> le châtiment du peuple de Yunus quand ils ont cru — comme un vent qui écarte les nuages gris et laisse briller le soleil ! En arabe, <em>kashf</em> = « lever un voile » et <em>mukashshaf</em> = « ce qui est révélé ». Le <em>kashshāf</em> est un médecin qui « découvre » la maladie. Allah peut écarte toute difficulté en un instant — il suffit de demander sincèrement !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>كشف</span> (écarter/découvrir), <span>مكاشفة</span> (révélation), <span>كشاف</span> (découvreur), <span>انكشاف</span> (se révéler)"
      },
      {
        "word": "تَوَكَّلُوا",
        "translit": "tawakkalū",
        "meaning": "ils s'en remettent / ils font confiance",
        "root": "و - ك - ل",
        "rootMeaning": "se confier / faire confiance / s'en remettre à",
        "rootColor": 5,
        "emoji": "🤲",
        "funFactTitle": "Tawakkul : la confiance totale en Allah !",
        "funFact": "La racine <strong>w-k-l</strong> veut dire « se confier, faire confiance ». <em>Tawakkal</em> = mets ta confiance en Allah ! C'est comme un petit oisillon qui saute du nid en sachant que sa mère est là pour le rattraper. Le mot <em>tawakkul</em> ne veut PAS dire « ne fais rien et attends » — ça veut dire « fais de ton mieux ET fais confiance à Allah pour le résultat ». En arabe, <em>wakīl</em> = « le mandataire, le protecteur ». Allah est le meilleur <em>wakīl</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>توكل</span> (confiance), <span>وكيل</span> (mandataire), <span>اتكل</span> (s'appuyer sur), <span>وكالة</span> (représentation)"
      },
      {
        "word": "يُضْلِلِ",
        "translit": "yuḍlilu",
        "meaning": "Il égare / Il fait perdre le chemin",
        "root": "ض - ل - ل",
        "rootMeaning": "égarer / perdre / errer",
        "rootColor": 6,
        "emoji": "🧭",
        "funFactTitle": "Le GPS intérieur : qui te guide ?",
        "funFact": "La racine <strong>ḍ-l-l</strong> veut dire « égarer, perdre le chemin ». Quand quelqu'un est <em>muḍall</em> (égaré), c'est comme si son GPS intérieur était cassé — il tourne en rond sans trouver la bonne direction ! En arabe, <em>ḍalāl</em> = « l'égarement » et <em>ḍāll</em> = « égaré ». Le <em>dawlat</em> (État) vient de cette racine car le pouvoir « tourne » entre les gens. Allah guide qui Il veut et égare qui Il veut. Mais attention : l'égarement vient souvent de nos propres choix mauvais !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ضلال</span> (égarement), <span>ضال</span> (égaré), <span>إضلال</span> (faire égarer), <span>دلالة</span> (indication — l'opposé !)"
      }
    ],
    "quiz": [
      {
        "question": "Quel prophète a été envoyé au peuple de Aad ?",
        "options": [
          "Saleh",
          "Shu'ayb",
          "Houd",
          "Yunus"
        ],
        "correct": 2
      },
      {
        "question": "Quel est le seul peuple qui a été sauvé APRÈS le châtiment commencé ?",
        "options": [
          "Le peuple de Noé",
          "Le peuple de Ibrahim",
          "Le peuple de Moïse",
          "Le peuple de Yunus (Jonas)"
        ],
        "correct": 3
      },
      {
        "question": "Le mot <span class=\"arabic-inline\">سُلْطَانٍ</span> (sulṭān) dans ce verset signifie :",
        "options": [
          "Un roi",
          "Une armée",
          "Une preuve / un argument",
          "Un trésor"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>و - ك - ل</strong> (tawakkul) veut dire :",
        "options": [
          "Faire confiance à Allah",
          "Manger beaucoup",
          "Dormir profondément",
          "Courir vite"
        ],
        "correct": 0
      }
    ],
    "completionText": "Excellent ! 🌪️ Tu as étudié les versets 36 à 45 ! Tu as appris la racine <strong>ر - ج - ز</strong> (châtiment), <strong>س - ل - ط</strong> (autorité/preuve), <strong>ك - ش - ف</strong> (écarter) et <strong>و - ك - ل</strong> (confiance). Tous les peuples injustes ont été détruits — seul Allah suffit comme protecteur !"
  },
  {
    "id": "29-05",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "Le dialogue avec les Gens du Livre",
    "shortTitle": "Al-Ankabut (v.46-56)",
    "subtitle": "Allah demande de discuter avec les Juifs et les Chrétiens de manière sage et respectueuse. La sourate nous rappelle que seul Allah donne la vie et la mort.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 46,
        "arabic": "وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ إِلَّا الَّذِينَ ظَلَمُوا مِنْهُمْ ۖ وَقُولُوا آمَنَّا بِالَّذِي أُنزِلَ إِلَيْنَا وَأُنزِلَ إِلَيْكُمْ وَإِلَٰهُنَا وَإِلَٰهُكُمْ وَاحِدٌ وَنَحْنُ لَهُ مُسْلِمُونَ",
        "french": "Et ne discutez que de la meilleure façon avec les Gens du Livre, sauf ceux d'entre eux qui sont injustes. Et dites : « Nous croyons en ce qu'on a fait descendre vers nous et en ce qu'on a fait descendre vers vous, et notre Dieu et votre Dieu est le même, et c'est à Lui que nous nous soumettons. »"
      },
      {
        "number": 47,
        "arabic": "وَكَذَٰلِكَ أَنزَلْنَا إِلَيْكَ الْكِتَابَ ۚ فَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يُؤْمِنُونَ بِهِ ۖ وَمِنْ هَٰؤُلَاءِ مَن يُؤْمِنُ بِهِ ۚ وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الْكَافِرُونَ",
        "french": "C'est ainsi que Nous t'avons révélé le Livre. Ceux à qui Nous avons donné le Livre y croient. Et parmi ceux-ci, il y en a qui y croient. Et seuls les mécréants nient Nos signes."
      },
      {
        "number": 48,
        "arabic": "وَمَا كُنتَ تَتْلُو مِن قَبْلِهِ مِن كِتَابٍ وَلَا تَخُطُّهُ بِيَمِينِكَ ۖ إِذًا لَّارْتَابَ الْمُبْطِلُونَ",
        "french": "Et avant cela, tu ne récitais aucun livre et tu n'en écrivais aucun de ta main droite. Sinon, les gens du faux auraient eu des doutes."
      },
      {
        "number": 49,
        "arabic": "بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ ۚ وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الظَّالِمُونَ",
        "french": "Ce sont plutôt des versets clairs, présents dans les poitrines de ceux à qui le savoir a été donné. Et seuls les injustes nient Nos signes."
      },
      {
        "number": 50,
        "arabic": "وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ آيَاتٌ مِّن رَّبِّهِ ۖ قُلْ إِنَّمَا الْآيَاتُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
        "french": "Et ils dirent : « Pourquoi n'a-t-on pas fait descendre sur lui des miracles de son Seigneur ? » Dis : « Les miracles ne sont qu'auprès d'Allah, et je ne suis qu'un avertisseur clair. »"
      },
      {
        "number": 51,
        "arabic": "أَوَلَمْ يَكْفِهِمْ أَنَّا أَنزَلْنَا عَلَيْكَ الْكِتَابَ يُتْلَىٰ عَلَيْهِمْ ۚ إِنَّ فِي ذَٰلِكَ لَرَحْمَةً وَذِكْرَىٰ لِقَوْمٍ يُؤْمِنُونَ",
        "french": "Ne leur suffit-il pas que Nous ayons fait descendre sur toi le Livre qui leur est récité ? Il y a certes là une miséricorde et un rappel pour des gens qui croient."
      },
      {
        "number": 52,
        "arabic": "قُلْ كَفَىٰ بِاللَّهِ بَيْنِي وَبَيْنَكُمْ شَهِيدًا ۖ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ وَالَّذِينَ آمَنُوا بِالْبَاطِلِ وَكَفَرُوا بِاللَّهِ أُولَٰئِكَ هُمُ الْخَاسِرُونَ",
        "french": "Dis : « Allah suffit comme témoin entre moi et vous. Il sait ce qui est dans les cieux et sur la terre. Et ceux qui croient au faux et ne croient pas en Allah, ceux-là sont les perdants. »"
      },
      {
        "number": 53,
        "arabic": "وَيَسْتَعْجِلُونَكَ بِالْعَذَابِ ۖ وَلَوْلَا أَجَلٌ مُّسَمًّى لَّجَاءَهُمُ الْعَذَابُ وَلَيَأْتِيَنَّهُم بَغْتَةً وَهُمْ لَا يَشْعُرُونَ",
        "french": "Et ils te pressent de hâter le châtiment. S'il n'y avait pas un terme fixé, le châtiment leur serait certes venu. Mais il viendra à eux soudain, sans qu'ils le sentent."
      },
      {
        "number": 54,
        "arabic": "يَسْتَعْجِلُونَكَ بِالْعَذَابِ وَإِنَّ جَهَنَّمَ لَمُحِيطَةٌ بِالْكَافِرِينَ",
        "french": "Ils te pressent de hâter le châtiment. Or, l'Enfer cerne certainement les mécréants."
      },
      {
        "number": 55,
        "arabic": "يَوْمَ يَغْشَاهُمُ الْعَذَابُ مِن فَوْقِهِمْ وَمِن تَحْتِ أَرْجُلِهِمْ وَيَقُولُ ذُوقُوا مَا كُنتُمْ تَعْمَلُونَ",
        "french": "Le jour où le châtiment les enveloppera d'en haut et de dessous leurs pieds. Il dira : « Goûtez à ce que vous faisiez. »"
      },
      {
        "number": 56,
        "arabic": "يَا عِبَادِيَ الَّذِينَ آمَنُوا إِنَّ أَرْضِي وَاسِعَةٌ فَإِيَّايَ فَاعْبُدُونِ",
        "french": "Ô Mes serviteurs qui croyez ! Ma terre est vaste. Adorez-Moi donc !"
      }
    ],
    "words": [
      {
        "word": "تُجَادِلُوا",
        "translit": "tujādilū",
        "meaning": "vous discutez / vous débattez",
        "root": "ج - د - ل",
        "rootMeaning": "discuter / débattre / argumenter",
        "rootColor": 7,
        "emoji": "🗣️",
        "funFactTitle": "Le bon débat, comme un match propre !",
        "funFact": "La racine <strong>j-d-l</strong> veut dire « discuter, débattre ». Allah dit de discuter avec les Gens du Livre de la MEILLEURE façon — comme un match de foot où les deux équipes jouent proprement, sans tricher ! Le mot <em>jadal</em> = « la discussion » et <em>jīdāl</em> = « le débat ». En arabe, <em>jadala</em> = « argumenter avec ». Mais attention : le mauvais débat (pour avoir raison) est blâmé. Le bon débat (pour trouver la vérité) est recommandé. L'islam encourage le dialogue respectueux !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>جدال</span> (débat), <span>جادل</span> (argumenter), <span>جدل</span> (discussion), <span>تجادل</span> (disputer avec)"
      },
      {
        "word": "شَهِيدًا",
        "translit": "shahīdan",
        "meaning": "un témoin",
        "root": "ش - ه - د",
        "rootMeaning": "témoigner / être témoin / voir",
        "rootColor": 1,
        "emoji": "👁️",
        "funFactTitle": "Allah, le Témoin de tout !",
        "funFact": "La racine <strong>sh-h-d</strong> veut dire « être témoin, voir de ses propres yeux ». Allah est le meilleur <em>shahīd</em> — Il voit et sait TOUT ! C'est comme une caméra de surveillance qui filme partout à la fois, mais en INFINI. En arabe, <em>shahāda</em> = « le témoignage » — comme dire « Ash-hadu allā ilāha illa Allāh ». Le <em>shahīd</em> au pluriel est <em>shuhadāʾ</em>. Le vendredi est <em>yawm al-jumuʿa</em> mais le martyr est aussi appelé <em>shahīd</em> car Allah « témoigne » pour lui au Paradis !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شهادة</span> (témoignage), <span>شاهد</span> (témoin), <span>شهيد</span> (martyr), <span>أشهاد</span> (témoins)"
      },
      {
        "word": "بَغْتَةً",
        "translit": "baghtatan",
        "meaning": "soudainement / par surprise",
        "root": "ب - غ - ت",
        "rootMeaning": "surprendre / arriver à l'improviste",
        "rootColor": 2,
        "emoji": "⚡",
        "funFactTitle": "Le châtiment arrive sans prévenir !",
        "funFact": "La racine <strong>b-gh-t</strong> veut dire « surprendre, arriver à l'improviste ». Le châtiment vient <em>baghtatan</em> — comme un éclair dans un ciel bleu sans aucun nuage ! Les gens demandent le châtiment comme une blague, mais quand il arrive, BAM, c'est trop tard. En arabe, <em>buʿṭa</em> = « prendre par surprise » et <em>ibtighāt</em> = « une attaque soudaine ». Le mot <em>ghayṭ</em> = « le puits profond » car tu n'y vois pas le fond. Le Jour du Jugement viendra <em>baghtatan</em> — soyons toujours prêts !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بغتة</span> (soudainement), <span>فاتأ</span> (surprendre), <span>بغت</span> (arriver inopinément), <span>ابتهاج</span> (joie soudaine)"
      },
      {
        "word": "يَغْشَاهُمُ",
        "translit": "yaghshāhumu",
        "meaning": "il les enveloppe / il les couvre",
        "root": "غ - ش - و",
        "rootMeaning": "couvrir / envelopper / surplomber",
        "rootColor": 3,
        "emoji": "🌪️",
        "funFactTitle": "Le châtiment qui vient de partout !",
        "funFact": "La racine <strong>gh-sh-w</strong> veut dire « couvrir, envelopper ». Le châtiment <em>yaghshā</em> les gens — il les couvre d'en haut ET de dessous leurs pieds, comme une vague géante qui engloutit tout ! En arabe, <em>ghashāʾ</em> = « l'obscurité » et <em>ghāshiyah</em> = « ce qui couvre » (le Jour du Jugement est aussi appelé <em>al-Ghāshiyah</em>). Le mot <em>mughāshā</em> = « un voile qui recouvre ». Quand le châtiment arrive, personne ne peut s'en cacher — il couvre tout !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>غشاء</span> (voile/membrane), <span>غشاوة</span> (obscurité), <span>اغتشي</span> (envelopper), <span>غاشية</span> (couverture)"
      },
      {
        "word": "وَاسِعَةٌ",
        "translit": "wāsiʿatun",
        "meaning": "vaste / spacieuse",
        "root": "و - س - ع",
        "rootMeaning": "être vaste / large / généreux",
        "rootColor": 4,
        "emoji": "🌍",
        "funFactTitle": "La terre d'Allah est immense !",
        "funFact": "La racine <strong>w-s-ʿ</strong> veut dire « être vaste, large, généreux ». La terre est <em>wāsiʿa</em> (vaste) — Allah nous dit : si tu ne peux pas pratiquer ta religion ici, parsailleurs ! C'est comme avoir un immense terrain de jeu : tu n'es pas obligé de rester dans un petit coin. En arabe, <em>wāsiʿ</em> = « généreux » car sa générosité est « large ». Le mot <em>siʿa</em> = « la capacité » et <em>mawsūʿ</em> = « élargi ». La miséricorde d'Allah est aussi <em>wāsiʿa</em> — elle englobe tout !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>واسع</span> (vaste/généreux), <span>سعة</span> (largeur), <span>توسيع</span> (élargissement), <span>موسع</span> (ample)"
      }
    ],
    "quiz": [
      {
        "question": "Comment Allah demande-t-Il de discuter avec les Gens du Livre ?",
        "options": [
          "Agressivement",
          "Sans leur parler",
          "En les ignorant",
          "De la meilleure façon, avec sagesse"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">شَهِيدًا</span> (shahīdan) ?",
        "options": [
          "Un roi",
          "Un témoin",
          "Un soldat",
          "Un juge"
        ],
        "correct": 1
      },
      {
        "question": "Allah dit « Ma terre est vaste ». Laquelle de ces racines veut dire « vaste » ?",
        "options": [
          "ش - ه - د",
          "ب - غ - ت",
          "و - س - ع",
          "غ - ش - و"
        ],
        "correct": 2
      },
      {
        "question": "Le mot <span class=\"arabic-inline\">بَغْتَةً</span> (baghtatan) veut dire :",
        "options": [
          "Lentement",
          "Soudainement / par surprise",
          "Avec patience",
          "En silence"
        ],
        "correct": 1
      }
    ],
    "completionText": "Chouette ! 📖 Tu as étudié les versets 46 à 56 ! Tu as appris la racine <strong>ج - د - ل</strong> (discuter), <strong>ش - ه - د</strong> (témoigner), <strong>و - س - ع</strong> (vaste) et <strong>ب - غ - ت</strong> (surprise). Discute avec sagesse et fais confiance en Allah !"
  },
  {
    "id": "29-06",
    "surah": 29,
    "surahName": "Al-Ankabut",
    "title": "La toile d'araignée et la patience",
    "shortTitle": "Al-Ankabut (v.57-69)",
    "subtitle": "Le verset de l'araignée ! Allah compare les faux protecteurs à une toile d'araignée : la plus fragile des maisons. Les croyants patients auront le Paradis !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 57,
        "arabic": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۖ ثُمَّ إِلَيْنَا تُرْجَعُونَ",
        "french": "Chaque âme goûtera la mort. Ensuite, c'est vers Nous que vous serez ramenés."
      },
      {
        "number": 58,
        "arabic": "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُبَوِّئَنَّهُم مِّنَ الْجَنَّةِ غُرَفًا تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ نِعْمَ أَجْرُ الْعَامِلِينَ",
        "french": "Et ceux qui croient et font de bonnes œuvres, Nous les installerons certes dans les étages du Paradis sous lesquels coulent les rivières, pour y demeurer éternellement. Quelle belle récompense que celle de ceux qui font le bien !"
      },
      {
        "number": 59,
        "arabic": "الَّذِينَ صَبَرُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
        "french": "Ceux qui patientent et placent leur confiance en leur Seigneur."
      },
      {
        "number": 60,
        "arabic": "وَكَأَيِّن مِّن دَابَّةٍ لَّا تَحْمِلُ رِزْقَهَا اللَّهُ يَرْزُقُهَا وَإِيَّاكُمْ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        "french": "Que de bêtes qui ne portent pas leur propre nourriture ! C'est Allah qui les nourrit ainsi que vous. Et Il est l'Audient, l'Omniscient."
      },
      {
        "number": 61,
        "arabic": "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ لَيَقُولُنَّ اللَّهُ ۖ فَأَنَّىٰ يُؤْفَكُونَ",
        "french": "Et si tu leur demandes : « Qui a créé les cieux et la terre et assujetti le soleil et la lune ? » Ils diront certainement : « Allah. » Comment se fait-il qu'ils se détournent (de la vérité) ?"
      },
      {
        "number": 62,
        "arabic": "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        "french": "Allah étend largement Ses dons à qui Il veut parmi Ses serviteurs, et Il les restreint. Certes, Allah est Omnipotent."
      },
      {
        "number": 63,
        "arabic": "وَلَئِن سَأَلْتَهُم مَّن نَّزَّلَ مِنَ السَّمَاءِ مَاءً فَأَحْيَا بِهِ الْأَرْضَ مِن بَعْدِ مَوْتِهَا لَيَقُولُنَّ اللَّهُ ۖ قُلِ الْحَمْدُ لِلَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْقِلُونَ",
        "french": "Et si tu leur demandes : « Qui a fait descendre du ciel une eau avec laquelle Il a ramené la terre à la vie après sa mort ? » Ils diront certainement : « Allah. » Dis : « Louange à Allah ! » Mais la plupart d'entre eux ne raisonnent pas."
      },
      {
        "number": 64,
        "arabic": "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ",
        "french": "Cette vie d'ici-bas n'est que distraction et jeu. La demeure de l'au-delà est certes la vraie vie. S'ils savaient !"
      },
      {
        "number": 65,
        "arabic": "فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ إِذَا هُمْ يُشْرِكُونَ",
        "french": "Quand ils montent sur un bateau, ils invoquent Allah, Lui vouant un culte exclusif. Mais quand Il les sauve en les ramenant sur la terre ferme, voilà qu'ils (Lui) donnent des associés."
      },
      {
        "number": 66,
        "arabic": "لِيَكْفُرُوا بِمَا آتَيْنَاهُمْ وَلِيَتَمَتَّعُوا ۖ فَسَوْفَ يَعْلَمُونَ",
        "french": "Qu'ils nient ce que Nous leur avons donné et qu'ils jouissent. Ils sauront bientôt !"
      },
      {
        "number": 67,
        "arabic": "أَوَلَمْ يَرَوْا أَنَّا جَعَلْنَا حَرَمًا آمِنًا وَهُمْ مِنْ حَوْلِهِ يُخْتَطَفُونَ ۖ أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَةِ اللَّهِ يَكْفُرُونَ",
        "french": "Ne voient-ils pas que Nous avons fait de la Mecque un sanctuaire sûr, alors qu'autour d'eux on enlève les gens ? Croiront-ils au faux et nieront-ils les bienfaits d'Allah ?"
      },
      {
        "number": 68,
        "arabic": "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِالْحَقِّ لَمَّا جَاءَهُ ۚ أَلَيْسَ فِي جَهَنَّمَ مَثْوًى لِّلْكَافِرِينَ",
        "french": "Et quel pire injuste que celui qui invente un mensonge contre Allah ou qui nie la vérité quand elle vient à lui ? N'y a-t-il pas en Enfer une demeure pour les mécréants ?"
      },
      {
        "number": 69,
        "arabic": "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
        "french": "Et quant à ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers. Allah est certes avec les bienfaisants."
      }
    ],
    "words": [
      {
        "word": "الْعَنْكَبُوتِ",
        "translit": "al-ʿankabūti",
        "meaning": "l'araignée",
        "root": "ع - ن - ك - ب",
        "rootMeaning": "araignée / tisser une toile fragile",
        "rootColor": 5,
        "emoji": "🕷️",
        "funFactTitle": "La maison la plus fragile du monde !",
        "funFact": "Le mot <em>ʿankabūt</em> (araignée) donne son nom à cette sourate ! Allah compare ceux qui prennent des protecteurs en dehors de Lui à une araignée qui tisse sa toile — la maison la plus fragile de toutes. Si tu souffles dessus, elle s'envole ! C'est comme construire une maison en carton pendant un ouragan — ça ne protégera jamais. Les idoles, les faux protecteurs, la richesse... tout cela est comme la toile de l'araignée : fragile et inutile face à la puissance d'Allah. Seul Allah est un vrai protecteur !",
        "relatedText": "Mots liés :",
        "related": "<span>عنكبوت</span> (araignée), <span>بيت العنكبوت</span> (toile d'araignée), <span>أنكب</span> (tisser), <span>نسيج</span> (tissage)"
      },
      {
        "word": "صَبَرُوا",
        "translit": "ṣabarū",
        "meaning": "ils ont patienté / ils ont enduré",
        "root": "ص - ب - ر",
        "rootMeaning": "patienter / endurer / persévérer",
        "rootColor": 6,
        "emoji": "💪",
        "funFactTitle": "La patience, la clé de tout !",
        "funFact": "La racine <strong>ṣ-b-r</strong> veut dire « patienter, endurer ». Ceux qui <em>ṣabarū</em> obtiennent le Paradis — comme un sportif qui s'entraîne dur chaque jour et finit par gagner la médaille d'or ! Le mot <em>ṣabr</em> = « la patience » et <em>ṣābir</em> = « celui qui patiente ». En arabe, le <em>ṣabīr</em> (cactus) est la plante la plus patiente — il survit dans le désert sans eau ! Le Prophète a dit : « La patience est la moitié de la foi. » Quand c'est difficile, rappelle-toi : la récompense viendra !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صبر</span> (patience), <span>صابر</span> (patient), <span>مصبر</span> (endurant), <span>صبر</span> (cactus)"
      },
      {
        "word": "يَبْسُطُ",
        "translit": "yabsuṭu",
        "meaning": "Il étend / Il élargit (la subsistance)",
        "root": "ب - س - ط",
        "rootMeaning": "étendre / élargir / déployer",
        "rootColor": 7,
        "emoji": "🌟",
        "funFactTitle": "Allah distribue la richesse comme Il veut !",
        "funFact": "La racine <strong>b-s-ṭ</strong> veut dire « étendre, élargir ». Allah <em>yabsuṭ</em> la subsistance à qui Il veut — comme un chef qui donne des portions différentes à chacun selon sa sagesse. En arabe, <em>basṭ</em> = « l'extension » et <em>bāsiṭ</em> = « généreux ». Le mot <em>absaṭa</em> = « il a écarté les doigts ». Mains ouvertes = générosité ! Mains fermées = avarice. Allah peut enrichir ou appauvrir — la vraie richesse est dans le cœur, pas dans la poche !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بسط</span> (étendre), <span>مبسوط</span> (large/généreux), <span>انبساط</span> (détente), <span>بساطة</span> (simplicité)"
      },
      {
        "word": "حَرَمًا",
        "translit": "ḥaraman",
        "meaning": "un sanctuaire sacré / un lieu protégé",
        "root": "ح - ر - م",
        "rootMeaning": "sacré / interdit / protégé",
        "rootColor": 1,
        "emoji": "🕋",
        "funFactTitle": "La Mecque : la zone de paix depuis Ibrahim !",
        "funFact": "La racine <strong>ḥ-r-m</strong> veut dire « sacré, interdit, protégé ». La Mecque est un <em>ḥaram</em> — un endroit où la violence est INTERDITE depuis Ibrahim ! C'est comme une bulle de paix au milieu du chaos. En arabe, <em>ḥarām</em> = « interdit » et <em>ḥurūma</em> = « le respect sacré ». Le mot <em>iḥrām</em> = « l'état sacré du pèlerin ». La Kaaba est le <em>Bayt al-Ḥarām</em> (la Maison sacrée). Allah protège la Mecque depuis des milliers d'années — même les oiseaux n'y sont pas chassés !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حرام</span> (interdit), <span>حرمة</span> (sacralité), <span>محرم</span> (sacré), <span>إحرام</span> (état de pèlerinage)"
      },
      {
        "word": "سُبُلَنَا",
        "translit": "subulanā",
        "meaning": "Nos sentiers / Nos chemins",
        "root": "س - ب - ل",
        "rootMeaning": "chemin / sentier / voie",
        "rootColor": 2,
        "emoji": "🛤️",
        "funFactTitle": "Allah guide ceux qui Lui font confiance !",
        "funFact": "La racine <strong>s-b-l</strong> veut dire « chemin, sentier, voie ». Allah promet de guider sur Ses <em>subul</em> (sentiers) ceux qui luttent pour Lui — comme un GPS divin qui te montre toujours la meilleure route ! En arabe, <em>sabīl</em> = « le chemin » et <em>sabīl Allāh</em> = « le chemin d'Allah ». Le <em>sibl</em> est aussi « la jeunesse, la vigueur ». Le <em>musābil</em> est « celui qui voyage ». La meilleure route est celle qui mène vers Allah — elle est pavée de patience et de bonnes actions !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>سبيل</span> (chemin), <span>سبل</span> (sentiers), <span>مسابل</span> (routes), <span>استبلا</span> (cheminement)"
      }
    ],
    "quiz": [
      {
        "question": "Pourquoi Allah compare-t-Il les faux protecteurs à la toile d'araignée ?",
        "options": [
          "Parce qu'elle est la maison la plus fragile",
          "Parce qu'elle est belle",
          "Parce qu'elle est grande",
          "Parce qu'elle est solide"
        ],
        "correct": 0
      },
      {
        "question": "Quel est le dernier verset (69) de la sourate Al-Ankabut ?",
        "options": [
          "Allah est avec les riches",
          "Allah punit les patients",
          "Allah déteste les savants",
          "Allah guide ceux qui luttent pour Lui"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ص - ب - ر</strong> (patience) est liée aussi à quel mot amusant ?",
        "options": [
          "Le lion (asad)",
          "Le poisson (samak)",
          "Le cactus (ṣabīr) — la plante patiente du désert",
          "L'oiseau (ṭāʾir)"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">حَرَمًا</span> (ḥaraman) dans ce verset ?",
        "options": [
          "Un marché",
          "Un désert",
          "Un sanctuaire sacré et protégé",
          "Une montagne"
        ],
        "correct": 2
      }
    ],
    "completionText": "Magnifique ! 🕷️ Tu as terminé Al-Ankabut ! Tu as appris la racine <strong>ع - ن - ك - ب</strong> (araignée), <strong>ص - ب - ر</strong> (patience), <strong>ح - ر - م</strong> (sacré) et <strong>س - ب - ل</strong> (chemin). La toile d'araignée est la maison la plus fragile — seul Allah est le vrai protecteur !"
  },
  {
    "id": "30-01",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "La victoire des Romains : une prédiction divine",
    "shortTitle": "Ar-Rum (v.1-9)",
    "subtitle": "Allah prédit que les Romains, battus par les Perses, seront vainqueurs dans quelques années. C'est l'un des miracles du Coran — une prophétie qui s'est réalisée !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الم",
        "french": "Alif, Lām, Mīm."
      },
      {
        "number": 2,
        "arabic": "غُلِبَتِ الرُّومُ",
        "french": "Les Romains ont été vaincus."
      },
      {
        "number": 3,
        "arabic": "فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ",
        "french": "Dans le pays voisin. Et après leur défaite, ils seront vainqueurs."
      },
      {
        "number": 4,
        "arabic": "فِي بِضْعِ سِنِينَ ۗ لِلَّهِ الْأَمْرُ مِن قَبْلُ وَمِن بَعْدُ ۚ وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ",
        "french": "Dans quelques années. À Allah appartient l'ordre, avant et après. Et ce jour-là, les croyants se réjouiront."
      },
      {
        "number": 5,
        "arabic": "بِنَصْرِ اللَّهِ ۚ يَنصُرُ مَن يَشَاءُ ۖ وَهُوَ الْعَزِيزُ الرَّحِيمُ",
        "french": "Du secours d'Allah. Il donne la victoire à qui Il veut, et Il est le Puissant, le Miséricordieux."
      },
      {
        "number": 6,
        "arabic": "وَعْدَ اللَّهِ ۖ لَا يُخْلِفُ اللَّهُ وَعْدَهُ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
        "french": "C'est la promesse d'Allah. Allah ne manque pas à Sa promesse. Mais la plupart des gens ne savent pas."
      },
      {
        "number": 7,
        "arabic": "يَعْلَمُونَ ظَاهِرًا مِّنَ الْحَيَاةِ الدُّنْيَا وَهُمْ عَنِ الْآخِرَةِ هُمْ غَافِلُونَ",
        "french": "Ils connaissent un aspect de la vie présente, tandis qu'ils sont inattentifs à l'au-delà."
      },
      {
        "number": 8,
        "arabic": "أَوَلَمْ يَتَفَكَّرُوا فِي أَنفُسِهِمْ ۚ مَا خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ وَأَجَلٍ مُّسَمًّى ۗ وَإِنَّ كَثِيرًا مِّنَ النَّاسِ بِلِقَاءِ رَبِّهِمْ لَكَافِرُونَ",
        "french": "N'ont-ils pas médité en eux-mêmes ? Allah n'a créé les cieux et la terre et ce qui est entre eux, qu'en toute vérité et pour un terme fixé. Beaucoup de gens cependant ne croient pas à la rencontre de leur Seigneur."
      },
      {
        "number": 9,
        "arabic": "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ ۚ كَانُوا أَشَدَّ مِنْهُمْ قُوَّةً وَأَثَارُوا الْأَرْضَ وَعَمَرُوهَا أَكْثَرَ مِمَّا عَمَرُوهَا وَجَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
        "french": "N'ont-ils pas parcouru la terre pour voir ce qu'il est advenu de ceux qui ont vécu avant eux ? Ils étaient plus forts qu'eux, ont creusé et fertilisé la terre plus qu'ils ne l'ont fait. Leurs messagers leur vinrent avec des preuves évidentes. Ce n'est pas Allah qui les a lésés, mais c'est eux qui se sont lésés eux-mêmes."
      }
    ],
    "words": [
      {
        "word": "غُلِبَتِ",
        "translit": "ghulibati",
        "meaning": "ont été vaincues / battues",
        "root": "غ - ل - ب",
        "rootMeaning": "vaincre / triompher / dominer",
        "rootColor": 1,
        "emoji": "⚔️",
        "funFactTitle": "La victoire change de camp !",
        "funFact": "La racine <strong>gh-l-b</strong> veut dire « vaincre, dominer ». Les Romains ont été <em>ghulibat</em> (vaincus) par les Perses, mais Allah prédit qu'ils <em>sayaghlibūna</em> (vaincront) dans quelques années ! C'est comme un match de foot : l'équipe qui perd au premier mi-temps peut gagner au deuxième ! En arabe, <em>ghalaba</em> = « il a vaincu » et <em>ghālib</em> = « le vainqueur ». Le mot <em>ghalab</em> veut dire « la majorité ». Cette prophétie s'est réalisée en 7 ans — un miracle du Coran !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>غلب</span> (vaincre), <span>غالب</span> (vainqueur), <span>مغلوب</span> (vaincu), <span>غلبة</span> (victoire)"
      },
      {
        "word": "بِضْعِ",
        "translit": "biḍʿi",
        "meaning": "quelques (entre 3 et 9)",
        "root": "ب - ض - ع",
        "rootMeaning": "quelques / un nombre entre 3 et 9",
        "rootColor": 2,
        "emoji": "🔢",
        "funFactTitle": "Un nombre mystérieux entre 3 et 9 !",
        "funFact": "La racine <strong>b-ḍ-ʿ</strong> veut dire « quelques-uns, entre 3 et 9 ». Allah dit <em>biḍʿ sinīn</em> (quelques années) — et la victoire des Romains est arrivée en 7 ans ! C'est comme dire « je reviens dans quelques minutes » : le nombre est précis pour Allah, mais vague pour nous. En arabe, <em>biḍʿ</em> est utilisé pour les nombres entre 3 et 9, <em>maṭā</em> pour le temps, et <em>ḍiʿf</em> = « un couple, une paire ». Le mot <em>abḍāʿ</em> = « multiplier ». C'est la précision divine dans le Coran !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بضع</span> (quelques), <span>بضاعة</span> (marchandise), <span>أبضع</span> (marchand), <span>بضعة</span> (environ 3 à 9)"
      },
      {
        "word": "يَفْرَحُ",
        "translit": "yafraḥu",
        "meaning": "il se réjouit / il est joyeux",
        "root": "ف - ر - ح",
        "rootMeaning": "se réjouir / être joyeux / la joie",
        "rootColor": 3,
        "emoji": "😊",
        "funFactTitle": "La joie des croyants quand la vérité triomphe !",
        "funFact": "La racine <strong>f-r-ḥ</strong> veut dire « se réjouir, être joyeux ». Les croyants se sont réjouis quand les Romains (chrétiens) ont battu les Perses (mages), car les croyants et les Gens du Livre étaient du même côté ! C'est comme quand ton équipe préférée gagne la finale du tournoi. En arabe, <em>farḥ</em> = « la joie » et <em>farīḥ</em> = « celui qui est heureux ». Le mot <em>faraḥ</em> est aussi un prénom qui signifie « joie ». Mais attention : Allah critique la joie excessive et arrogante — la vraie joie est celle qui te rapproche d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فرح</span> (joie), <span>فرحان</span> (joyeux), <span>مفرح</span> (réjouissant), <span>تفريح</span> (réjouissance)"
      },
      {
        "word": "نَصْرِ",
        "translit": "naṣri",
        "meaning": "le secours / la victoire",
        "root": "ن - ص - ر",
        "rootMeaning": "aider / secourir / donner la victoire",
        "rootColor": 4,
        "emoji": "🏆",
        "funFactTitle": "La victoire vient ONLY d'Allah !",
        "funFact": "La racine <strong>n-ṣ-r</strong> veut dire « secourir, donner la victoire ». La victoire (<em>naṣr</em>) vient UNIQUEMENT d'Allah — pas de la force, pas de l'argent, pas des armes ! C'est comme un élève qui réussit son examen : le vrai secours vient d'Allah qui lui donne l'intelligence et la mémoire. En arabe, <em>naṣr</em> = « le secours » et <em>anṣār</em> = « les partisans » (les gens de Médine qui ont aidé le Prophète). Le mot <em>manṣūr</em> = « celui qui est victorieux ». Sourate An-Naṣr est la 110e sourate du Coran !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نصر</span> (victoire), <span>نصير</span> (secoureur), <span>أنصار</span> (partisans), <span>منصور</span> (victorieux)"
      },
      {
        "word": "ظَاهِرًا",
        "translit": "ẓāhiran",
        "meaning": "l'aspect extérieur / ce qui est apparent",
        "root": "ظ - هـ - ر",
        "rootMeaning": "être apparent / visible / extérieur",
        "rootColor": 5,
        "emoji": "👁️",
        "funFactTitle": "Ne te contente pas de la surface !",
        "funFact": "La racine <strong>ẓ-h-r</strong> veut dire « être apparent, visible ». Allah dit que les gens ne connaissent que le <em>ẓāhir</em> (l'extérieur) de la vie d'ici-bas — comme quelqu'un qui ne lit que la couverture d'un livre sans jamais l'ouvrir ! En arabe, <em>ẓāhir</em> = « l'extérieur, l'apparent » et <em>bāṭin</em> = « le caché, l'intérieur » (l'opposé). Le mot <em>ẓahara</em> = « il est apparu ». Le <em>ẓāhir</em> de l'océan, c'est la surface, mais le <em>bāṭin</em> contient les trésors ! Cherche toujours plus profond que l'apparence.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ظاهر</span> (apparent), <span>ظهر</span> (dos/apparaître), <span>أظهر</span> (révéler), <span>باطن</span> (caché — l'opposé !)"
      }
    ],
    "quiz": [
      {
        "question": "Qui a vaincu les Romains dans un premier temps ?",
        "options": [
          "Les Perses",
          "Les Grecs",
          "Les Egyptiens",
          "Les Turcs"
        ],
        "correct": 0
      },
      {
        "question": "En combien d'années Allah prédit-Il que les Romains seront vainqueurs ?",
        "options": [
          "1 an",
          "3 ans",
          "100 ans",
          "Entre 3 et 9 ans (biḍʿ sinīn)"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ن - ص - ر</strong> (victoire) donne aussi le mot :",
        "options": [
          "Les perdants",
          "Les dormeurs",
          "Les partisans (anṣār)",
          "Les voyageurs"
        ],
        "correct": 2
      },
      {
        "question": "Pourquoi les croyants se sont-ils réjouis de la victoire des Romains ?",
        "options": [
          "Car les Romains étaient riches",
          "Car les Romains avaient une armée puissante",
          "Par hasard",
          "Car les croyants et les Romains (Gens du Livre) étaient du même côté"
        ],
        "correct": 3
      }
    ],
    "completionText": "Bravo ! 🏛️ Tu as commencé Ar-Rum ! Tu as découvert la racine <strong>غ - ل - ب</strong> (vaincre), <strong>ن - ص - ر</strong> (victoire), <strong>ف - ر - ح</strong> (joie) et <strong>ظ - هـ - ر</strong> (apparent). La prophétie du Coran s'est réalisée — Allah ne manque JAMAIS à Sa promesse !"
  },
  {
    "id": "30-02",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "Les signes dans la création d'Allah",
    "shortTitle": "Ar-Rum (v.10-20)",
    "subtitle": "Allah a créé la mort et la vie pour nous tester. Il montre Ses signes : la pluie, les vents, la terre morte qui revive. L'association à Allah est le pire des péchés !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 10,
        "arabic": "ثُمَّ كَانَ عَاقِبَةَ الَّذِينَ أَسَاؤُوا السُّوءَىٰ أَن كَذَّبُوا بِآيَاتِ اللَّهِ وَكَانُوا بِهَا يَسْتَهْزِئُونَ",
        "french": "La fin de ceux qui ont fait le mal fut qu'ils ont traité de mensonge les signes d'Allah et les ont tournés en dérision."
      },
      {
        "number": 11,
        "arabic": "اللَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
        "french": "Allah initie la création puis la refait, puis c'est vers Lui que vous serez ramenés."
      },
      {
        "number": 12,
        "arabic": "وَيَوْمَ تَقُومُ السَّاعَةُ يُبْلِسُ الْمُجْرِمُونَ",
        "french": "Et le jour où l'Heure se lèvera, les criminels seront frappés de stupeur."
      },
      {
        "number": 13,
        "arabic": "وَلَمْ يَكُن لَّهُم مِّن شُرَكَائِهِمْ شُفَعَاءُ وَكَانُوا بِشُرَكَائِهِمْ كَافِرِينَ",
        "french": "Et ils n'auront pas d'intercesseurs parmi leurs associés. Et ils nieront leurs associés."
      },
      {
        "number": 14,
        "arabic": "وَيَوْمَ تَقُومُ السَّاعَةُ يَوْمَئِذٍ يَتَفَرَّقُونَ",
        "french": "Et le jour où l'Heure se lèvera — ce jour-là, ils seront séparés."
      },
      {
        "number": 15,
        "arabic": "فَأَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَهُمْ فِي رَوْضَةٍ يُحْبَرُونَ",
        "french": "Quant à ceux qui auront cru et fait de bonnes œuvres, ils seront dans un Paradis délicieux."
      },
      {
        "number": 16,
        "arabic": "وَأَمَّا الَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا وَلِقَاءِ الْآخِرَةِ فَأُولَٰئِكَ يُحْبَرُونَ فِي الْعَذَابِ",
        "french": "Et quant à ceux qui auront mécru et traité de mensonge Nos signes et la rencontre de l'au-delà, ceux-là seront livrés au châtiment."
      },
      {
        "number": 17,
        "arabic": "فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ",
        "french": "Gloire à Allah quand vous entrez dans le soir et quand vous entrez dans le matin."
      },
      {
        "number": 18,
        "arabic": "وَلَهُ الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ",
        "french": "Et à Lui toute louange dans les cieux et la terre. Et dans le soir et quand vous êtes à midi."
      },
      {
        "number": 19,
        "arabic": "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۖ وَكَذَٰلِكُمْ تُخْرَجُونَ",
        "french": "Il fait sortir le vivant du mort et fait sortir le mort du vivant, et fait revivre la terre après sa mort. Et c'est ainsi que vous serez ressuscités."
      },
      {
        "number": 20,
        "arabic": "وَمِنْ آيَاتِهِ أَنْ خَلَقَكُم مِّن تُرَابٍ ثُمَّ إِذَا أَنتُم بَشَرٌ تَنتَشِرُونَ",
        "french": "Et parmi Ses signes : Il vous a créés de poussière. Puis, voilà que vous êtes des hommes qui se dispersent (sur la terre)."
      }
    ],
    "words": [
      {
        "word": "يُبْلِسُ",
        "translit": "yublisu",
        "meaning": "ils seront frappés de stupeur / désemparés",
        "root": "ب - ل - س",
        "rootMeaning": "être silencieux / désemparé / sans voix",
        "rootColor": 6,
        "emoji": "😱",
        "funFactTitle": "Le jour où les criminels perdront la parole !",
        "funFact": "La racine <strong>b-l-s</strong> veut dire « être silencieux, sans voix, désemparé ». Le Jour du Jugement, les criminels seront <em>yublisūna</em> — tellement choqués qu'ils ne pourront PLUS parler ! C'est comme quand tu reçois une si mauvaise nouvelle que tu restes bouche bée, sans pouvoir dire un mot. En arabe, <em>iblās</em> = « le désespoir silencieux » et <em>mublis</em> = « désemparé ». Le mot <em>ablasa</em> = « il a perdu tout espoir ». Ceux qui mécroient découvriront que leurs idoles ne peuvent même pas les défendre !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إبلاس</span> (désespoir silencieux), <span>مبلس</span> (désemparé), <span>بلس</span> (être muet de stupeur), <span>تبليس</span> (confondre)"
      },
      {
        "word": "رَوْضَةٍ",
        "translit": "rawḍatin",
        "meaning": "un jardin / un Paradis verdoyant",
        "root": "ر - و - ض",
        "rootMeaning": "jardin verdoyant / verdure / délices",
        "rootColor": 7,
        "emoji": "🌿",
        "funFactTitle": "Le Paradis : le plus beau des jardins !",
        "funFact": "La racine <strong>r-w-ḍ</strong> veut dire « jardin verdoyant, verdure ». Les croyants seront dans une <em>rawḍa</em> — un jardin magnifique au Paradis, comme le plus beau parc que tu aies jamais vu, multiplié par l'infini ! En arabe, <em>rawḍa</em> = « le jardin » et <em>rawḍ</em> = « la verdure ». Le mot <em>riyāḍ</em> (pluriel de rawḍa) donne le mot « Ryad » (la capitale de l'Arabie Saoudite) — la « ville des jardins » ! Le Prophète a dit que les assemblées de science sont des <em>riyāḍ al-janna</em> (jardins du Paradis) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>روضة</span> (jardin verdoyant), <span>رياض</span> (jardins), <span>ارتياد</span> (fréquenter les jardins), <span>رياضة</span> (sport — du jardin !)"
      },
      {
        "word": "تُصْبِحُونَ",
        "translit": "tuṣbiḥūna",
        "meaning": "vous entrez dans le matin",
        "root": "ص - ب - ح",
        "rootMeaning": "matin / devenir matin / se lever",
        "rootColor": 1,
        "emoji": "🌅",
        "funFactTitle": "Gloire à Allah matin et soir !",
        "funFact": "La racine <strong>ṣ-b-ḥ</strong> veut dire « matin, purifier ». Allah est glorifié quand vous entrez dans le <em>ṣubḥ</em> (matin) — comme si chaque lever de soleil était une alarme pour prier ! En arabe, <em>ṣubḥ</em> = « le matin » et <em>maṣbaḥ</em> = « le lieu où l'on va le matin ». Le mot <em>tasbīḥ</em> (dire subḥān Allāh) vient de cette racine car glorifier Allah « purifie » l'âme. Le Prophète priait 2 rak'ahs du <em>ṣubḥ</em> (Fajr) chaque matin. Chaque matin est un nouveau cadeau d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صبح</span> (matin), <span>مصبح</span> (lieu du matin), <span>تسبيح</span> (glorification), <span>صباح</span> (bonjour)"
      },
      {
        "word": "يُخْرِجُ",
        "translit": "yukhriju",
        "meaning": "Il fait sortir / Il produit",
        "root": "خ - ر - ج",
        "rootMeaning": "sortir / produire / émerger",
        "rootColor": 2,
        "emoji": "🌱",
        "funFactTitle": "Allah fait sortir la vie de la mort !",
        "funFact": "La racine <strong>kh-r-j</strong> veut dire « sortir, produire ». Allah <em>yukhriju</em> le vivant du mort — comme une petite graine qui sort de terre après la pluie ! Une chose morte et sèche produit quelque chose de vivant et beau. En arabe, <em>khurūj</em> = « la sortie » et <em>makhraj</em> = « la sortie, l'issue ». Le mot <em>takhallaja</em> = « sortir ». De la même façon, Allah nous ressuscitera de la terre — nous « sortirons » de nos tombes comme les plantes sortent de la terre au printemps !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>خروج</span> (sortie), <span>مخرج</span> (issue), <span>خرج</span> (sortir), <span>تخرج</span> (diplômé)"
      },
      {
        "word": "تُرَابٍ",
        "translit": "turābin",
        "meaning": "de poussière / de terre",
        "root": "ت - ر - ب",
        "rootMeaning": "terre / poussière / sol",
        "rootColor": 3,
        "emoji": "🏜️",
        "funFactTitle": "De poussière à être humain : le miracle !",
        "funFact": "La racine <strong>t-r-b</strong> veut dire « terre, poussière ». Allah nous a créés de <em>turāb</em> (poussière) — comme un sculpteur qui crée la plus belle statue à partir d'un simple morceau d'argile ! En arabe, <em>turāb</em> = « la poussière » et <em>tarab</em> = « la terre ». Le mot <em>tāriq</em> (route) vient de « ce qui est foulé par les pieds ». Le <em>tirāb</em> = « l'enterrement ». De la poussière nous sommes venus, et à la poussière nous retournerons. Pas de raison d'être arrogant !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>تراب</span> (poussière), <span>تربة</span> (terre), <span>طريق</span> (route), <span>مترب</span> (poussiéreux)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">يُبْلِسُ</span> (yublisu) pour les criminels le Jour du Jugement ?",
        "options": [
          "Ils seront frappés de stupeur, sans voix",
          "Ils riront",
          "Ils danseront",
          "Ils dormiront"
        ],
        "correct": 0
      },
      {
        "question": "Où seront les croyants selon le verset 15 ?",
        "options": [
          "En enfer",
          "Dans un désert",
          "Dans un jardin verdoyant (rawḍa)",
          "Dans un château"
        ],
        "correct": 2
      },
      {
        "question": "Allah fait sortir le vivant du mort. Laquelle de ces racines signifie « sortir » ?",
        "options": [
          "ص - ب - ح",
          "خ - ر - ج",
          "ت - ر - ب",
          "ر - و - ض"
        ],
        "correct": 1
      },
      {
        "question": "De quoi Allah nous a-t-Il créés selon le verset 20 ?",
        "options": [
          "D'eau",
          "De feu",
          "De poussière (turāb)",
          "De lumière"
        ],
        "correct": 2
      }
    ],
    "completionText": "Super ! 🌅 Tu as étudié les versets 10 à 20 ! Tu as appris la racine <strong>ب - ل - س</strong> (stupeur), <strong>ر - و - ض</strong> (jardin), <strong>خ - ر - ج</strong> (sortir) et <strong>ت - ر - ب</strong> (terre/poussière). Allah fait revivre la terre morte comme Il nous ressuscitera !"
  },
  {
    "id": "30-03",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "Les signes dans le couple et la nuit",
    "shortTitle": "Ar-Rum (v.21-32)",
    "subtitle": "Allah a créé les couples pour que vous viviez en harmonie. Il a créé la nuit pour le repos et le jour pour chercher Sa grâce. Des signes pour ceux qui réfléchissent !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 21,
        "arabic": "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
        "french": "Et parmi Ses signes : Il a créé pour vous, à partir de vous-mêmes, des épouses afin que vous trouviez le repos auprès d'elles. Et Il a placé entre vous de l'affection et de la miséricorde. Il y a certes là des signes pour des gens qui réfléchissent."
      },
      {
        "number": 22,
        "arabic": "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّلْعَالِمِينَ",
        "french": "Et parmi Ses signes : la création des cieux et de la terre, et la diversité de vos langues et de vos couleurs. Il y a certes là des signes pour les savants."
      },
      {
        "number": 23,
        "arabic": "وَمِنْ آيَاتِهِ مَنَامُكُم بِاللَّيْلِ وَالنَّهَارِ وَابْتِغَاؤُكُم مِّن فَضْلِهِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَسْمَعُونَ",
        "french": "Et parmi Ses signes : votre sommeil la nuit et le jour, et votre quête de Sa grâce. Il y a certes là des signes pour des gens qui entendent."
      },
      {
        "number": 24,
        "arabic": "وَمِنْ آيَاتِهِ يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا وَيُنَزِّلُ مِنَ السَّمَاءِ مَاءً فَيُحْيِي بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
        "french": "Et parmi Ses signes : Il vous montre l'éclair avec crainte et espoir, et fait descendre du ciel une eau avec laquelle Il redonne la vie à la terre après sa mort. Il y a certes là des signes pour des gens qui raisonnent."
      },
      {
        "number": 25,
        "arabic": "وَمِنْ آيَاتِهِ أَن تَقُومَ السَّمَاءُ وَالْأَرْضُ بِأَمْرِهِ ۚ ثُمَّ إِذَا دَعَاكُمْ دَعْوَةً مِّنَ الْأَرْضِ إِذَا أَنتُمْ تَخْرُجُونَ",
        "french": "Et parmi Ses signes : le fait que les cieux et la terre se maintiennent par Son ordre. Puis, quand Il vous appellera d'un seul appel depuis la terre, voilà que vous en sortirez."
      },
      {
        "number": 26,
        "arabic": "لَهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ كُلٌّ لَّهُ قَانِتُونَ",
        "french": "À Lui appartient tout ce qui est dans les cieux et sur la terre. Tous Lui sont soumis."
      },
      {
        "number": 27,
        "arabic": "وَهُوَ الَّذِي يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ وَهُوَ أَهْوَنُ عَلَيْهِ ۚ وَلَهُ الْمَثَلُ الْأَعْلَىٰ فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
        "french": "Et c'est Lui qui commence la création puis la refait, ce qui Lui est plus facile. Et Il a la description la plus sublime dans les cieux et la terre. Et Il est le Puissant, le Sage."
      },
      {
        "number": 28,
        "arabic": "ضَرَبَ لَكُم مَّثَلًا مِّنْ أَنفُسِكُمْ ۖ هَل لَّكُم مِّن مَّا مَلَكَتْ أَيْمَانُكُم مِّن شُرَكَاءَ فِي مَا رَزَقْنَاكُمْ فَأَنتُمْ فِيهِ سَوَاءٌ تَخَافُونَهُمْ كَخِيفَتِكُمْ أَنفُسَكُمْ ۚ كَذَٰلِكَ نُفَصِّلُ الْآيَاتِ لِقَوْمٍ يَعْقِلُونَ",
        "french": "Il vous a cité une parabole tirée de vous-mêmes : Avez-vous parmi vos esclaves des associés qui partagent avec vous ce que Nous vous avons attribué, et dont vous seriez égaux en droits, les craignant comme vous vous craignez les uns les autres ? C'est ainsi que Nous exposons Nos signes pour des gens qui raisonnent."
      },
      {
        "number": 29,
        "arabic": "بَلِ اتَّبَعَ الَّذِينَ ظَلَمُوا أَهْوَاءَهُم بِغَيْرِ عِلْمٍ ۖ فَمَن يَهْدِي مَنْ أَضَلَّ اللَّهُ ۖ وَمَا لَهُم مِّن نَّاصِرِينَ",
        "french": "Mais les injustes ont suivi leurs passions sans connaissance. Qui peut guider ceux qu'Allah a égarés ? Et ils n'ont pas de secoureurs."
      },
      {
        "number": 30,
        "arabic": "فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ اللَّهِ ۚ ذَٰلِكَ الدِّينُ الْقَيِّمُ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
        "french": "Dirige ton visage vers la religion, droit. C'est la nature qu'Allah a originellement donnée aux hommes. Pas de changement à la création d'Allah. C'est la religion droite, mais la plupart des gens ne savent pas."
      },
      {
        "number": 31,
        "arabic": "مُنِيبِينَ إِلَيْهِ وَاتَّقُوهُ وَأَقِيمُوا الصَّلَاةَ وَلَا تَكُونُوا مِنَ الْمُشْرِكِينَ",
        "french": "Revenant repentants vers Lui. Craignez-Le, accomplissez la prière et ne soyez pas parmi les associateurs."
      },
      {
        "number": 32,
        "arabic": "مِنَ الَّذِينَ فَرَّقُوا دِينَهُمْ وَكَانُوا شِيَعًا ۖ كُلُّ حِزْبٍ بِمَا لَدَيْهِمْ فَرِحُونَ",
        "french": "De ceux qui ont fragmenté leur religion et se sont divisés en sectes, chaque parti se réjouissant de ce qu'il détenait."
      }
    ],
    "words": [
      {
        "word": "مَوَدَّةً",
        "translit": "mawaddatan",
        "meaning": "de l'affection / de l'amour tendre",
        "root": "و - د - د",
        "rootMeaning": "aimer / affection / amour profond",
        "rootColor": 4,
        "emoji": "❤️",
        "funFactTitle": "L'amour dans le mariage, un cadeau d'Allah !",
        "funFact": "La racine <strong>w-d-d</strong> veut dire « aimer, avoir de l'affection ». Allah a placé <em>mawadda</em> (amour tendre) entre les époux — comme une colle invisible qui unit deux cœurs ! En arabe, <em>wudd</em> = « l'amour profond » et <em>wadūd</em> = « le plein d'amour ». Allah est appelé <em>al-Wadūd</em> (le Très-Affectueux). Le <em>mawadda</em> est plus profond que le simple <em>ḥubb</em> — c'est un amour stable et durable, comme la racine d'un arbre. Le meilleur mariage est celui rempli de <em>mawadda</em> et de <em>raḥma</em> (miséricorde) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>مودة</span> (affection), <span>ودود</span> (très affectueux), <span>ود</span> (amour), <span>تواد</span> (amour mutuel)"
      },
      {
        "word": "مَنَامُكُم",
        "translit": "manāmukum",
        "meaning": "votre sommeil",
        "root": "ن - و - م",
        "rootMeaning": "dormir / sommeil / repos",
        "rootColor": 5,
        "emoji": "😴",
        "funFactTitle": "Le sommeil : une mini-mort chaque nuit !",
        "funFact": "La racine <strong>n-w-m</strong> veut dire « dormir, le sommeil ». Allah a fait du <em>manām</em> (sommeil) un de Ses signes — chaque nuit, ton âme « meurt » temporairement et revient le matin ! C'est comme un phone qui se met en veille pour recharger ses batteries. En arabe, <em>nawm</em> = « le sommeil » et <em>nāʾim</em> = « qui dort ». Le mot <em>nimnām</em> = « douillet, moelleux ». Allah donne le sommeil comme un repos, mais certains dorment trop et ratent la prière du Fajr ! Le sommeil est une grâce et un test.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نوم</span> (sommeil), <span>نائم</span> (dormeur), <span>منامة</span> (couverture), <span>نيم</span> (douceur du sommeil)"
      },
      {
        "word": "الْبَرْقَ",
        "translit": "al-barqa",
        "meaning": "l'éclair / la foudre",
        "root": "ب - ر - ق",
        "rootMeaning": "éclair / lumière soudaine / briller",
        "rootColor": 6,
        "emoji": "⚡",
        "funFactTitle": "L'éclair : entre la peur et l'espoir !",
        "funFact": "La racine <strong>b-r-q</strong> veut dire « éclair, lumière soudaine ». L'éclair (<em>barq</em>) nous donne à la fois de la peur (il peut être dangereux) et de l'espoir (il annonce la pluie) ! C'est comme un doctorat : difficile et effrayant, mais il promet un bel avenir. En arabe, <em>barq</em> = « l'éclair » et <em>barīq</em> = « brillant ». Le mot <em>barāq</em> = « rapide comme l'éclair ». Le nom « Barack » vient de cette racine ! L'éclair rappelle la puissance d'Allah — en un éclair, Il peut changer toute chose.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>برق</span> (éclair), <span>بارق</span> (brillant), <span>بريقة</span> (éclat), <span>تبريق</span> (étincellement)"
      },
      {
        "word": "حَنِيفًا",
        "translit": "ḥanīfan",
        "meaning": "droit / sincère / tourné vers Allah",
        "root": "ح - ن - ف",
        "rootMeaning": "être droit / incliné / sincère dans la religion",
        "rootColor": 7,
        "emoji": "🧭",
        "funFactTitle": "La religion droite d' Ibrahim !",
        "funFact": "La racine <strong>ḥ-n-f</strong> veut dire « être droit, incliné vers la vérité ». <em>Ḥanīf</em> = celui qui tourne son visage droit vers Allah, comme Ibrahim qui s'est tourné loin des idoles vers Dieu seul ! C'est comme une boussole qui pointe toujours vers le nord — le <em>ḥanīf</em> pointe toujours vers Allah. En arabe, <em>taḥannuf</em> = « être sincère dans la religion ». Le <em>ḥanīf</em> ne penche ni trop à gauche ni trop à droite — il suit le juste milieu. L'islam est la religion du <em>ḥanīf</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حنيف</span> (droit/sincère), <span>تحنيف</span> (incliner vers la droiture), <span>حنف</span> (inclinaison), <span>أحنف</span> (camus — métaphore du droit)"
      },
      {
        "word": "فَطَرَ",
        "translit": "faṭara",
        "meaning": "Il a créé originellement / la nature innée",
        "root": "ف - ط - ر",
        "rootMeaning": "créer originellement / la nature innée (fitra)",
        "rootColor": 1,
        "emoji": "🧬",
        "funFactTitle": "La fitra : le mode d'emploi d'Allah dans ton cœur !",
        "funFact": "La racine <strong>f-ṭ-r</strong> veut dire « créer originellement, la nature innée ». La <em>fiṭra</em> est le programme d'origine qu'Allah a mis dans chaque être humain — comme un téléphone qui vient avec un système d'exploitation installé en usine ! Chaque bébé naît avec la <em>fiṭra</em> : la croyance naturelle en Allah. Le Prophète a dit : « Tout nouveau-né naît sur la <em>fiṭra</em>, ce sont ses parents qui en font un juif, un chrétien ou un mage. » En arabe, <em>faṭara</em> = « fendre, créer » et <em>iftār</em> = « rompre le jeûne ».",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فطرة</span> (nature innée), <span>فطر</span> (créer), <span>إفطار</span> (rupture du jeûne), <span>فاطر</span> (Créateur originel)"
      }
    ],
    "quiz": [
      {
        "question": "Qu'est-ce qu'Allah a placé entre les époux selon le verset 21 ?",
        "options": [
          "De l'affection (mawadda) et de la miséricorde (raḥma)",
          "De la richesse et des bijoux",
          "Des disputes et des tests",
          "Rien du tout"
        ],
        "correct": 0
      },
      {
        "question": "La racine <strong>ف - ط - ر</strong> (fiṭra) désigne :",
        "options": [
          "La nourriture",
          "La nature innée / la création originelle",
          "Le sommeil",
          "La lumière"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie le mot <span class=\"arabic-inline\">حَنِيفًا</span> (ḥanīfan) ?",
        "options": [
          "Dormeur",
          "Riche",
          "Droit / sincèrement tourné vers Allah",
          "Menteur"
        ],
        "correct": 2
      },
      {
        "question": "L'éclair (barq) donne à la fois quel sentiment selon le Coran ?",
        "options": [
          "Seulement la peur",
          "La crainte et l'espoir",
          "Seulement la joie",
          "L'ennui"
        ],
        "correct": 1
      }
    ],
    "completionText": "Magnifique ! 💒 Tu as étudié les versets 21 à 32 ! Tu as appris la racine <strong>و - د - د</strong> (affection), <strong>ن - و - م</strong> (sommeil), <strong>ف - ط - ر</strong> (nature innée) et <strong>ح - ن - ف</strong> (droiture). Chaque couple, chaque langue, chaque couleur est un signe d'Allah !"
  },
  {
    "id": "30-04",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "Les signes dans l'eau et les bateaux",
    "shortTitle": "Ar-Rum (v.33-41)",
    "subtitle": "Allah montre Ses signes : les bateaux sur la mer, les montagnes comme des piquets, les rivières. Mais l'homme oublie et devient arrogant quand tout va bien !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 33,
        "arabic": "وَإِذَا مَسَّ النَّاسَ ضُرٌّّ دَعَوْا رَبَّهُم مُّنِيبِينَ إِلَيْهِ ثُمَّ إِذَا ذَاقُوا مِنْهُ رَحْمَةً إِذَا هُمْ يُشْرِكُونَ",
        "french": "Et quand les gens sont touchés par un malheur, ils invoquent leur Seigneur en revenant à Lui. Puis, quand Il leur accorde une miséricorde, voilà qu'ils Lui donnent des associés."
      },
      {
        "number": 34,
        "arabic": "لِيَكْفُرُوا بِمَا آتَيْنَاهُمْ فَتَمَتَّعُوا ۖ فَسَوْفَ تَعْلَمُونَ",
        "french": "Qu'ils nient ce que Nous leur avons donné. Profitez donc. Vous saurez bientôt !"
      },
      {
        "number": 35,
        "arabic": "أَمْ أَنزَلْنَا عَلَيْهِمْ سُلْطَانًا فَهُوَ يَتَكَلَّمُ بِمَا كَانُوا بِهِ يُشْرِكُونَ",
        "french": "Avons-Nous fait descendre sur eux une preuve (qui leur ordonne) de Lui donner des associés ?"
      },
      {
        "number": 36,
        "arabic": "وَإِذَا أَذَقْنَا النَّاسَ رَحْمَةً فَرِحُوا بِهَا ۖ وَإِن تُصِبْهُمْ سَيِّئَةٌ بِمَا قَدَّمَتْ أَيْدِيهِمْ إِذَا هُمْ يَأْسُونَ",
        "french": "Et quand Nous faisons goûter une miséricorde aux gens, ils s'en réjouissent. Mais si un mal les atteint à cause de ce qu'ils ont commis, voilà qu'ils désespèrent."
      },
      {
        "number": 37,
        "arabic": "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ ۖ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يُؤْمِنُونَ",
        "french": "N'ont-ils pas vu qu'Allah étend la subsistance à qui Il veut et la restreint ? Il y a certes là des signes pour des gens qui croient."
      },
      {
        "number": 38,
        "arabic": "فَآتِ ذَا الْقُرْبَىٰ حَقَّهُ وَالْمِسْكِينَ وَابْنَ السَّبِيلِ ۚ ذَٰلِكَ خَيْرٌ لِّلَّذِينَ يَرْجُونَ وَجْهَ اللَّهِ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
        "french": "Donne donc au proche parent son droit, ainsi qu'au pauvre et au voyageur. C'est meilleur pour ceux qui cherchent la Face d'Allah. Et ce sont eux qui réussissent."
      },
      {
        "number": 39,
        "arabic": "وَمَا آتَيْتُم مِّن رِّبًا لِّيَرْبُوَ فِي أَمْوَالِ النَّاسِ فَلَا يَرْبُو عِندَ اللَّهِ ۖ وَمَا آتَيْتُم مِّن زَكَاةٍ تُرِيدُونَ وَجْهَ اللَّهِ فَأُولَٰئِكَ هُمُ الْمُضْعِفُونَ",
        "french": "Ce que vous donnez comme intérêt usuraire pour qu'il augmente dans les biens des gens, cela n'augmente pas auprès d'Allah. Et ce que vous donnez comme zakat, en cherchant la Face d'Allah, voilà ceux qui verront leurs biens multipliés."
      },
      {
        "number": 40,
        "arabic": "اللَّهُ الَّذِي خَلَقَكُمْ ثُمَّ رَزَقَكُمْ ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ۖ هَلْ مِن شُرَكَائِكُم مَّن يَفْعَلُ مِن ذَٰلِكُم مِّن شَيْءٍ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ",
        "french": "Allah, c'est Lui qui vous a créés, puis vous a nourris, puis vous fera mourir, puis vous redonnera vie. Y a-t-il parmi vos associés quelqu'un qui puisse faire quoi que ce soit de cela ? Gloire à Lui ! Il est au-dessus de ce qu'ils Lui associent."
      },
      {
        "number": 41,
        "arabic": "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ",
        "french": "La corruption est apparue sur terre et sur mer à cause de ce que les gens ont commis. Il fait goûter une partie de ce qu'ils ont fait, peut-être reviendront-ils (à Allah)."
      }
    ],
    "words": [
      {
        "word": "ضُرٌّّ",
        "translit": "ḍurrun",
        "meaning": "un malheur / une difficulté / un mal",
        "root": "ض - ر - ر",
        "rootMeaning": "nuire / malheur / difficulté",
        "rootColor": 2,
        "emoji": "😢",
        "funFactTitle": "Le malheur : un réveil d'Allah !",
        "funFact": "La racine <strong>ḍ-r-r</strong> veut dire « nuire, malheur ». Quand le <em>ḍurr</em> (malheur) touche les gens, ils courent prier Allah — comme quand tu as très froid, tu cherches une couverture immédiatement ! Mais quand le mal passe, ils oublient Allah. C'est comme un élève qui ne prie que pendant les examens. En arabe, <em>ḍarr</em> = « le mal » et <em>naqqāḍ</em> = « celui qui élimine le mal ». Le <em>ḍarar</em> = « le préjudice ». Les épreuves sont des alarmes : elles nous rappellent Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ضر</span> (malheur), <span>ضرر</span> (préjudice), <span>مضرة</span> (nuisance), <span>تضار</span> (se nuire mutuellement)"
      },
      {
        "word": "مُنِيبِينَ",
        "translit": "munībīna",
        "meaning": "revenant repentants / se tournant vers Allah",
        "root": "ن - و - ب",
        "rootMeaning": "revenir / se repentir / se tourner vers",
        "rootColor": 3,
        "emoji": "🔄",
        "funFactTitle": "Le grand retour vers Allah !",
        "funFact": "La racine <strong>n-w-b</strong> veut dire « revenir, se tourner vers ». <em>Munīb</em> = quelqu'un qui REVIENT vers Allah après s'être éloigné — comme un pigeon voyageur qui revient toujours à son nid ! En arabe, <em>ināba</em> = « le retour sincère » et <em>nawba</em> = « le tour, la chance ». Le <em>nāʾib</em> = « le représentant » car il « revient » avec le message. Chaque fois que tu fais le <em>tawba</em> (repentir), tu deviens <em>munīb</em>. Allah attend ton retour à chaque instant avec amour !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إنابة</span> (retour sincère), <span>منيب</span> (repentant), <span>نوبة</span> (tour), <span>نائب</span> (représentant)"
      },
      {
        "word": "زَكَاةٍ",
        "translit": "zakātin",
        "meaning": "la zakat / l'aumône purificatrice",
        "root": "ز - ك - و / ز - ك - ي",
        "rootMeaning": "purifier / croître / être pur",
        "rootColor": 4,
        "emoji": "💝",
        "funFactTitle": "La zakat : l'argent qui grandit chez Allah !",
        "funFact": "La racine <strong>z-k-w/y</strong> veut dire « purifier, croître, être pur ». La <em>zakāt</em> purifie ton argent comme le savon purifie les vêtements sales ! Et étonnamment, quand tu donnes, ton argent « grandit » chez Allah — comme une graine que tu plantes : au début tu perds une graine, mais elle devient un arbre avec des centaines de fruits ! En arabe, <em>zakāt</em> = « la purification » et <em>zakī</em> = « pur ». Le <em>tazkīya</em> = « la purification de l'âme ». La <em>zakāt</em> est le 3e pilier de l'islam !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>زكاة</span> (aumône purificatrice), <span>تزكية</span> (purification), <span>زكي</span> (pur), <span>أزكى</span> (le plus pur)"
      },
      {
        "word": "رَزَقَكُمْ",
        "translit": "razaqakum",
        "meaning": "Il vous a nourris / vous a pourvus",
        "root": "ر - ز - ق",
        "rootMeaning": "pourvoir / nourrir / la subsistance",
        "rootColor": 5,
        "emoji": "🍽️",
        "funFactTitle": "Allah, le Grand Pourvoyeur !",
        "funFact": "La racine <strong>r-z-q</strong> veut dire « pourvoir, nourrir ». <em>Rāziq</em> = Celui qui donne la subsistance — Allah est <em>ar-Razzāq</em>, le Grand Pourvoyeur ! C'est comme un distributeur automatique infini : tu ne sais pas quand ni comment, mais la nourriture arrive toujours. En arabe, <em>rizq</em> = « la subsistance » et <em>marzūq</em> = « celui qui est pourvu ». Le mot <em>rāzāq</em> est un des plus beaux noms d'Allah. La subsistance ne vient pas seulement de ton travail — elle vient d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رزق</span> (subsistance), <span>رزاق</span> (pourvoyeur), <span>مرزوق</span> (pourvu), <span>أرزاق</span> (provisions)"
      },
      {
        "word": "الْفَسَادُ",
        "translit": "al-fasādu",
        "meaning": "la corruption / la destruction",
        "root": "ف - س - د",
        "rootMeaning": "corrompre / gâcher / détruire",
        "rootColor": 6,
        "emoji": "♻️",
        "funFactTitle": "La pollution vient de nos propres actes !",
        "funFact": "La racine <strong>f-s-d</strong> veut dire « corrompre, gâcher ». Le <em>fasād</em> (corruption) est apparu sur terre et sur mer — à cause de nos propres actions ! C'est comme jeter des déchets dans une rivière puis se plaindre que l'eau est sale. En arabe, <em>fāsid</em> = « pourri, corrompu » et <em>fasād</em> = « la corruption ». Un fruit <em>fāsid</em> est un fruit gâté. Le contraire est <em>ṣulḥ</em> (réparation, paix). La pollution environnementale est aussi un <em>fasād</em> — le Coran l'avait prédit il y a 1400 ans !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فساد</span> (corruption), <span>فاسد</span> (corrompu), <span>مفسد</span> (destructeur), <span>إصلاح</span> (réparation — l'opposé !)"
      }
    ],
    "quiz": [
      {
        "question": "Que font les gens quand un malheur les touche ?",
        "options": [
          "Ils rient",
          "Ils dorment",
          "Ils mangent",
          "Ils invoquent Allah en revenant à Lui (munībīna)"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ز - ك - و</strong> donne le mot :",
        "options": [
          "La zakat (aumône purificatrice)",
          "Le sommeil",
          "Le voyage",
          "La colère"
        ],
        "correct": 0
      },
      {
        "question": "Selon le verset 41, pourquoi la corruption est-elle apparue sur terre et sur mer ?",
        "options": [
          "A cause de la nature",
          "A cause des animaux",
          "A cause de ce que les gens ont commis",
          "Par hasard"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ر - ز - ق</strong> (subsistance) est un des noms d'Allah. Lequel ?",
        "options": [
          "Al-Malik (le Roi)",
          "Ar-Razzāq (le Grand Pourvoyeur)",
          "Al-Qayyūm (le Subsistant)",
          "Al-Jabbār (le Puissant)"
        ],
        "correct": 1
      }
    ],
    "completionText": "Excellent ! 🌊 Tu as étudié les versets 33 à 41 ! Tu as appris la racine <strong>ض - ر - ر</strong> (malheur), <strong>ن - و - ب</strong> (retour), <strong>ز - ك - و</strong> (purifier/zakat) et <strong>ر - ز - ق</strong> (pourvoir). Le malheur nous rapproche d'Allah — ne l'oublie pas quand tout va bien !"
  },
  {
    "id": "30-05",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "Le voyage et les signes dans la terre",
    "shortTitle": "Ar-Rum (v.42-52)",
    "subtitle": "Allah nous demande de voyager sur terre pour voir les signes de la création. Les associateurs sont comme des bêtes sans raison — pires encore car ils sont égarés !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 42,
        "arabic": "قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلُ ۖ كَانَ أَكْثَرُهُم مُّشْرِكِينَ",
        "french": "Dis : « Parcourez la terre et regardez quelle a été la fin de ceux qui ont vécu avant vous. La plupart d'entre eux étaient des associateurs. »"
      },
      {
        "number": 43,
        "arabic": "فَأَقِمْ وَجْهَكَ لِلدِّينِ الْقَيِّمِ مِن قَبْلِ أَن يَأْتِيَ يَوْمٌ لَّا مَرَدَّ لَهُ مِنَ اللَّهِ ۖ يَوْمَئِذٍ يَصَّدَّعُونَ",
        "french": "Dirige ton visage vers la religion droite, avant que ne vienne un jour d'Allah qu'il n'y a pas moyen de repousser. Ce jour-là, (les gens) seront divisés."
      },
      {
        "number": 44,
        "arabic": "مَن كَفَرَ فَعَلَيْهِ كُفْرُهُ ۖ وَمَنْ عَمِلَ صَالِحًا فَلِأَنفُسِهِمْ يَمْهَدُونَ",
        "french": "Celui qui mécroit, sa mécréance pèse sur lui. Et ceux qui font le bien, ils préparent (leur propre bienfait)."
      },
      {
        "number": 45,
        "arabic": "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتَ مِن فَضْلِهِ ۚ إِنَّهُ لَا يُحِبُّ الْكَافِرِينَ",
        "french": "Afin qu'Il récompense par Sa grâce ceux qui ont cru et fait de bonnes œuvres. En vérité, Il n'aime pas les mécréants."
      },
      {
        "number": 46,
        "arabic": "وَمِنْ آيَاتِهِ أَن يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ وَلِيُذِيقَكُم مِّن رَّحْمَتِهِ وَلِتَجْرِيَ الْفُلْكُ بِأَمْرِهِ وَلِتَبْتَغُوا مِن فَضْلِهِ وَلَعَلَّكُمْ تَشْكُرُونَ",
        "french": "Et parmi Ses signes : Il envoie les vents comme annonceurs de bonne nouvelle, et pour vous faire goûter de Sa miséricorde, et pour que les navires voguent par Son ordre, et pour que vous recherchiez Sa grâce. Peut-être serez-vous reconnaissants."
      },
      {
        "number": 47,
        "arabic": "وَلَقَدْ أَرْسَلْنَا مِن قَبْلِكَ رُسُلًا إِلَىٰ قَوْمِهِمْ فَجَاءُوهُم بِالْبَيِّنَاتِ فَانتَقَمْنَا مِنَ الَّذِينَ أَجْرَمُوا ۖ وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ",
        "french": "Nous avons certes envoyé avant toi des messagers vers leur peuple. Ils vinrent avec des preuves évidentes. Nous avons puni ceux qui étaient criminels. Et il était de Notre devoir de secourir les croyants."
      },
      {
        "number": 48,
        "arabic": "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَيَبْسُطُهُ فِي السَّمَاءِ كَيْفَ يَشَاءُ وَيَجْعَلُهُ كِسَفًا فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ فَإِذَا أَصَابَ بِهِ مَن يَشَاءُ مِنْ عِبَادِهِ إِذَا هُمْ يَسْتَبْشِرُونَ",
        "french": "Allah, c'est Lui qui envoie les vents qui soulèvent des nuages. Puis Il les étend dans le ciel comme Il veut et les met en morceaux. Tu vois la pluie sortir de leurs profondeurs. Puis lorsqu'Il l'envoie sur quiconque Il veut parmi Ses serviteurs, les voilà qui se réjouissent."
      },
      {
        "number": 49,
        "arabic": "وَإِن كَانُوا مِن قَبْلِ أَن يُنَزَّلَ عَلَيْهِمْ مِن قَبْلِهِ لَمُبْلِسِينَ",
        "french": "Alors qu'auparavant, avant qu'on ne la fasse descendre sur eux, ils étaient désespérés."
      },
      {
        "number": 50,
        "arabic": "فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        "french": "Regarde donc les traces de la miséricorde d'Allah, comment Il fait revivre la terre après sa mort. C'est Lui qui fait revivre les morts. Et Il est Omnipotent."
      },
      {
        "number": 51,
        "arabic": "وَلَئِنْ أَرْسَلْنَا رِيحًا فَرَأَوْهُ مُصْفَرًّا لَظَلُّوا مِن بَعْدِهِ يَكْفُرُونَ",
        "french": "Et si Nous envoyons un vent et qu'ils voient (leurs cultures) jaunir, ils restent après cela dans l'ingratitude."
      },
      {
        "number": 52,
        "arabic": "فَإِنَّكَ لَا تُسْمِعُ الْمَوْتَىٰ وَلَا تُسْمِعُ الصُّمَّ الدُّعَاءَ إِذَا وَلَّوْا مُدْبِرِينَ",
        "french": "Tu ne peux pas faire entendre les morts, ni faire entendre l'appel aux sourds quand ils s'en vont en tournant le dos."
      }
    ],
    "words": [
      {
        "word": "يَصَّدَّعُونَ",
        "translit": "yaṣṣaddaʿūna",
        "meaning": "ils seront divisés / séparés en groupes",
        "root": "ص - د - ع",
        "rootMeaning": "se fendre / se diviser / se séparer",
        "rootColor": 7,
        "emoji": "⚡",
        "funFactTitle": "Le Jour où tout le monde sera séparé !",
        "funFact": "La racine <strong>ṣ-d-ʿ</strong> veut dire « se fendre, se diviser ». Le Jour du Jugement, les gens seront <em>yaṣṣaddaʿūna</em> — séparés en deux groupes comme un rocher qui se fend en deux ! D'un côté les croyants, de l'autre les mécréants. En arabe, <em>ṣadaʿ</em> = « fendre » et <em>ṣadīʿ</em> = « fêlé ». Le <em>inṣidām</em> = « la rupture ». Le mot <em>maṣdūʿ</em> = « une fissure ». Comme un téléphone qui se casse en deux morceaux, les gens seront séparés pour toujours selon leurs choix !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صدع</span> (fissure/division), <span>انصداع</span> (rupture), <span>صديع</span> (fendu), <span>تصديع</span> (fissuration)"
      },
      {
        "word": "مُبَشِّرَاتٍ",
        "translit": "mubashshirātin",
        "meaning": "comme annonceuses de bonnes nouvelles",
        "root": "ب - ش - ر",
        "rootMeaning": "annoncer une bonne nouvelle / heureuse",
        "rootColor": 1,
        "emoji": "🎉",
        "funFactTitle": "Les vents : les messagers d'Allah !",
        "funFact": "La racine <strong>b-sh-r</strong> veut dire « annoncer une bonne nouvelle ». Les vents sont <em>mubashshirāt</em> — ils annoncent la pluie et la miséricorde comme un messager qui apporte une lettre de bonnes nouvelles ! En arabe, <em>bishāra</em> = « la bonne nouvelle » et <em>bashīr</em> = « l'annonciateur ». Le <em>mubashshir</em> est « celui qui annonce une bonne nouvelle ». Jésus est appelé <em>ʿĪsā bnu Maryam, rasūlu Allāh, kalimatahu alqāhā ilā Maryam wa rūḥan minhu wa bishāran</em> — une bonne nouvelle ! Chaque pluie est une <em>bishāra</em> d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بشارة</span> (bonne nouvelle), <span>بشير</span> (annonciateur), <span>مبشر</span> (celui qui annonce), <span>بشر</span> (annoncer)"
      },
      {
        "word": "الرِّيَاحَ",
        "translit": "ar-riyāḥa",
        "meaning": "les vents",
        "root": "ر - و - ح",
        "rootMeaning": "vent / souffle / esprit",
        "rootColor": 2,
        "emoji": "💨",
        "funFactTitle": "Les vents : les travailleurs invisibles d'Allah !",
        "funFact": "La racine <strong>r-w-ḥ</strong> veut dire « vent, souffle, esprit ». Les vents (<em>riyāḥ</em>) sont les travailleurs invisibles d'Allah — ils portent les nuages, pollinisent les fleurs et font avancer les bateaux ! En arabe, <em>rūḥ</em> = « l'esprit, l'âme » car l'âme est comme un souffle invisible. Le mot <em>rīḥ</em> = « le vent ». Jibril est aussi un <em>rūḥ</em> (esprit). Les vents sont mentionnés dans le Coran comme un signe : tu ne les vois PAS, mais tu vois leurs effets — comme la foi !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رياح</span> (vents), <span>روح</span> (esprit/âme), <span>ريح</span> (vent), <span>جبريل</span> (l'Esprit fidèle)"
      },
      {
        "word": "سَحَابًا",
        "translit": "saḥāban",
        "meaning": "des nuages",
        "root": "س - ح - ب",
        "rootMeaning": "nuage / couvrir / cacher",
        "rootColor": 3,
        "emoji": "☁️",
        "funFactTitle": "Les nuages : les éponges géantes du ciel !",
        "funFact": "La racine <strong>s-ḥ-b</strong> veut dire « nuage, couvrir ». Les <em>saḥāb</em> (nuages) sont comme des éponges géantes dans le ciel — Allah les envoie, les étend, les coupe en morceaux, puis la pluie tombe ! C'est comme un chef qui prépare un gâteau : mélange, forme, et... résultat ! En arabe, <em>saḥāb</em> = « les nuages » et <em>sāḥib</em> = « le nuage ». Le <em>suhub</em> = « les nuages chargés ». Le mot <em>masḥab</em> = « le lieu nuageux ». Allah dirige chaque nuage — rien n'est aléatoire !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>سحاب</span> (nuages), <span>سحابة</span> (nuage), <span>مسحب</span> (couvert de nuages), <span>سحب</span> (couvrir/tirer)"
      },
      {
        "word": "يَسْتَبْشِرُونَ",
        "translit": "yastabshirūna",
        "meaning": "ils se réjouissent / ils accueillent la bonne nouvelle",
        "root": "ب - ش - ر",
        "rootMeaning": "se réjouir d'une bonne nouvelle / accueillir avec joie",
        "rootColor": 4,
        "emoji": "😄",
        "funFactTitle": "La joie quand la pluie tombe enfin !",
        "funFact": "La racine <strong>b-sh-r</strong> (la même que pour <em>mubashshirāt</em>) veut aussi dire « accueillir une bonne nouvelle avec joie ». Quand la pluie arrive après une longue sécheresse, les gens <em>yastabshirūna</em> — ils se réjouissent comme toi quand tu reçois un cadeau inattendu ! En arabe, <em>istbishār</em> = « la joie de recevoir une bonne nouvelle ». Le <em>bashar</em> = « l'être humain » car l'homme a un visage qui « montre » ses émotions. La pluie est une <em>bishāra</em> (bonne nouvelle) du ciel vers la terre !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>استبشار</span> (joie), <span>بشر</span> (être humain), <span>مبشرات</span> (bonnes nouvelles), <span>بشاشة</span> (sourire chaleureux)"
      }
    ],
    "quiz": [
      {
        "question": "Que fait-on en regardant les traces des peuples anciens selon le verset 42 ?",
        "options": [
          "On apprend que la plupart étaient des associateurs et ont été punis",
          "On s'amuse",
          "On construit des villes",
          "On dort"
        ],
        "correct": 0
      },
      {
        "question": "Les vents sont décrits comme <span class=\"arabic-inline\">مُبَشِّرَاتٍ</span> (mubashshirāt). Que signifie ce mot ?",
        "options": [
          "Dangereux",
          "Froids",
          "Annonceurs de bonnes nouvelles",
          "Silencieux"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ر - و - ح</strong> (vent) donne aussi le mot pour :",
        "options": [
          "La pierre",
          "L'esprit / l'âme (rūḥ)",
          "Le feu",
          "La terre"
        ],
        "correct": 1
      },
      {
        "question": "Que veut dire <span class=\"arabic-inline\">يَصَّدَّعُونَ</span> (yaṣṣaddaʿūna) au Jour du Jugement ?",
        "options": [
          "Ils dorment",
          "Ils dansent",
          "Ils mangent ensemble",
          "Ils seront divisés en groupes"
        ],
        "correct": 3
      }
    ],
    "completionText": "Super ! 🌬️ Tu as étudié les versets 42 à 52 ! Tu as appris la racine <strong>ص - د - ع</strong> (se diviser), <strong>ب - ش - ر</strong> (bonne nouvelle), <strong>ر - و - ح</strong> (vent/esprit) et <strong>س - ح - ب</strong> (nuage). Chaque vent et chaque nuage est un signe d'Allah !"
  },
  {
    "id": "30-06",
    "surah": 30,
    "surahName": "Ar-Rum",
    "title": "L'adoration sincère et l'ordre dans l'univers",
    "shortTitle": "Ar-Rum (v.53-60)",
    "subtitle": "Allah conclut la sourate : tout dans l'univers L'adore ! Les croyants sont les meilleurs en ce monde. Tourne-toi vers la religion droite — l'islam, la religion naturelle !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 53,
        "arabic": "وَمَا أَنتَ بِهَادِي الْعُمْيِ عَن ضَلَالَتِهِمْ ۖ إِن تُسْمِعُ إِلَّا مَن يُؤْمِنُ بِآيَاتِنَا فَهُم مُّسْلِمُونَ",
        "french": "Tu ne peux pas guider les aveugles hors de leur égarement. Tu ne fais entendre que ceux qui croient en Nos versets, et ils sont soumis."
      },
      {
        "number": 54,
        "arabic": "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً ثُمَّ جَعَلَ مِن بَعْدِ قُوَّةٍ ضَعْفًا وَشَيْبَةً ۚ يَخْلُقُ مَا يَشَاءُ ۖ وَهُوَ الْعَلِيمُ الْقَدِيرُ",
        "french": "Allah, c'est Lui qui vous a créés de faiblesse, puis après la faiblesse, Il vous a donné la force, puis après la force, Il a redonné faiblesse et vieillesse. Il crée ce qu'Il veut, et Il est l'Omniscient, le Tout-Puissant."
      },
      {
        "number": 55,
        "arabic": "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا إِلَّا سَاعَةً ۗ كَذَٰلِكَ كَانُوا يُؤْمِنُونَ",
        "french": "Et le jour où l'Heure se lèvera, les criminels jureront qu'ils n'ont demeuré qu'une heure. C'est ainsi qu'ils ont été trompés."
      },
      {
        "number": 56,
        "arabic": "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَالْإِيمَانَ لَقَدْ لَبِثْتُمْ فِي كِتَابِ اللَّهِ إِلَىٰ يَوْمِ الْبَعْثِ ۖ فَهَٰذَا يَوْمُ الْبَعْثِ وَلَٰكِنَّكُمْ كُنتُمْ لَا تَعْلَمُونَ",
        "french": "Ceux à qui on a donné le savoir et la foi diront : « Vous avez demeuré dans le Décret d'Allah jusqu'au Jour de la Résurrection. Voici le Jour de la Résurrection, mais vous ne saviez pas. »"
      },
      {
        "number": 57,
        "arabic": "فَيَوْمَئِذٍ لَّا يَنفَعُ الَّذِينَ ظَلَمُوا مَعْذِرَتُهُمْ وَلَا هُمْ يُسْتَعْتَبُونَ",
        "french": "Ce jour-là, les excuses ne profiteront pas aux injustes, et on ne leur demandera pas de se repentir."
      },
      {
        "number": 58,
        "arabic": "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ ۚ وَلَئِن جِئْتَهُم بِآيَةٍ لَيَقُولَنَّ الَّذِينَ كَفَرُوا إِنْ أَنتُمْ إِلَّا مُبْطِلُونَ",
        "french": "Nous avons certes cité pour les gens, dans ce Coran, toute sorte d'exemples. Et si tu leur apportes un miracle, ceux qui mécroient diront : « Vous n'êtes que des imposteurs. »"
      },
      {
        "number": 59,
        "arabic": "كَذَٰلِكَ يَطْبَعُ اللَّهُ عَلَىٰ قُلُوبِ الَّذِينَ لَا يَعْلَمُونَ",
        "french": "C'est ainsi qu'Allah scelle les cœurs de ceux qui ne savent pas."
      },
      {
        "number": 60,
        "arabic": "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ وَلَا يَسْتَخِفَّنَّكَ الَّذِينَ لَا يُوقِنُونَ",
        "french": "Sois donc patient, car la promesse d'Allah est vérité. Et que ceux qui n'ont pas de certitude ne t'affaiblissent pas."
      }
    ],
    "words": [
      {
        "word": "ضَعْفٍ",
        "translit": "ḍaʿfin",
        "meaning": "faiblesse / fragilité",
        "root": "ض - ع - ف",
        "rootMeaning": "être faible / fragile / impuissant",
        "rootColor": 5,
        "emoji": "👶",
        "funFactTitle": "Le cycle de la vie : faible, fort, puis faible !",
        "funFact": "La racine <strong>ḍ-ʿ-f</strong> veut dire « être faible, fragile ». Allah décrit le cycle de la vie : tu nais faible (bébé), tu deviens fort (adulte), puis tu redeviens faible (vieillard) — comme les 3 étapes d'une batterie : chargée, pleine, puis vide ! En arabe, <em>ḍaʿf</em> = « la faiblesse » et <em>ḍaʿīf</em> = « faible ». Le <em>maḍʿūf</em> = « le plus faible ». Ce cycle nous rappelle l'humilité : la vraie force ne vient que d'Allah. Un bébé ne peut rien seul, et un vieillard non plus — seul Allah donne la force !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ضعف</span> (faiblesse), <span>ضعيف</span> (faible), <span>مضعف</span> (affaibli), <span>تضعيف</span> (affaiblissement)"
      },
      {
        "word": "قُوَّةً",
        "translit": "quwwatan",
        "meaning": "la force / la puissance",
        "root": "ق - و - ي / ق - و - ت",
        "rootMeaning": "force / puissance / vigueur",
        "rootColor": 6,
        "emoji": "💪",
        "funFactTitle": "La force est un cadeau d'Allah !",
        "funFact": "La racine <strong>q-w-y</strong> veut dire « force, puissance ». Allah donne la <em>quwwa</em> (force) à qui Il veut — comme un entraineur qui distribue les médailles aux méritants. En arabe, <em>qawī</em> = « fort » et <em>quwwa</em> = « la force ». Le mot <em>miqyās</em> = « la mesure » car la force se « mesure ». Le <em>qayy</em> = « le robuste ». La vraie force n'est pas dans les muscles mais dans la foi ! Le Prophète a dit : « Le fort n'est pas celui qui vainc au combat, mais celui qui se maîtrise dans la colère. »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>قوة</span> (force), <span>قوي</span> (fort), <span>تقوية</span> (renforcement), <span>مقة</span> (amour fort)"
      },
      {
        "word": "شَيْبَةً",
        "translit": "shaybatan",
        "meaning": "la vieillesse / les cheveux blancs",
        "root": "ش - ي - ب",
        "rootMeaning": "vieillesse / cheveux blancs / grisonner",
        "rootColor": 7,
        "emoji": "👴",
        "funFactTitle": "Les cheveux blancs : la lumière de l'âge !",
        "funFact": "La racine <strong>sh-y-b</strong> veut dire « vieillesse, cheveux blancs ». La <em>shayba</em> vient avec l'âge — comme du givre sur les feuilles en hiver. Le Prophète a dit que les cheveux blancs sont une « lumière » pour le croyant dans l'au-delà ! En arabe, <em>ashyab</em> = « les cheveux blancs » et <em>shāʾib</em> = « un vieillard ». Le mot <em>shayb</em> = « la canitie ». Le Prophète respectait les personnes âgées et disait que celui qui honore un vieillard, c'est comme honorer Allah. La <em>shayba</em> n'est pas une défaite — c'est une médaille d'honneur !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شيبة</span> (vieillesse), <span>أشيب</span> (cheveux blancs), <span>مشيب</span> (vieillesse avancée), <span>شيبان</span> (personnes âgées)"
      },
      {
        "word": "يَطْبَعُ",
        "translit": "yaṭbaʿu",
        "meaning": "Il scelle / Il appose un cachet",
        "root": "ط - ب - ع",
        "rootMeaning": "sceller / cacheter / marquer",
        "rootColor": 1,
        "emoji": "🔏",
        "funFactTitle": "Le cœur scellé : un cadenas sur la vérité !",
        "funFact": "La racine <strong>ṭ-b-ʿ</strong> veut dire « sceller, cacheter ». Allah <em>yaṭbaʿu</em> les cœurs de ceux qui ne veulent pas savoir — comme mettre un cadenas sur une porte fermée de l'intérieur ! En arabe, <em>ṭabiʿ</em> = « le cachet » et <em>khatm</em> = « le sceau ». Le <em>ṭābiʿ</em> = « le disciple, le suiveur » car il « porte l'empreinte » de son maître. Le Prophète a dit : « Quand le croyant commet un péché, un point noir apparaît sur son cœur. S'il se repent, il est nettoyé. Sinon, les points couvrent tout le cœur. »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>طبع</span> (sceller), <span>ختم</span> (cacheter), <span>طابع</span> (empreinte), <span>مطبوع</span> (marqué/scellé)"
      },
      {
        "word": "فَاصْبِرْ",
        "translit": "faṣbir",
        "meaning": "sois patient / endure",
        "root": "ص - ب - ر",
        "rootMeaning": "patienter / endurer / persévérer",
        "rootColor": 2,
        "emoji": "🌟",
        "funFactTitle": "Le dernier mot : sois patient !",
        "funFact": "La racine <strong>ṣ-b-r</strong> veut dire « patienter, endurer ». Le DERNIER mot d'Allah dans cette sourate est <em>faṣbir</em> — « sois patient » ! C'est comme un coach qui te dit juste avant le match : « Tiens bon ! » En arabe, <em>ṣabr</em> = « la patience » et <em>ṣābir</em> = « le patient ». Le mot <em>iṣṭibār</em> = « la réflexion » car réfléchir demande de la patience. Ce verset a été révélé quand le Prophète était triste face aux moqueries. Allah lui dit : « La promesse est VRAIE — ne laisse personne t'affaiblir ! »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صبر</span> (patience), <span>صابر</span> (patient), <span>مصبر</span> (endurant), <span>اصطبار</span> (constance)"
      }
    ],
    "quiz": [
      {
        "question": "Comment Allah décrit-Il le cycle de la vie humaine (verset 54) ?",
        "options": [
          "Fort, puis faible, puis fort",
          "Faible, puis faible, puis faible",
          "Fort, puis fort, puis fort",
          "Faible, puis fort, puis faible et vieux"
        ],
        "correct": 3
      },
      {
        "question": "Combien de temps les criminels jureront-ils avoir vécu (verset 55) ?",
        "options": [
          "100 ans",
          "Une heure",
          "Un jour",
          "Un mois"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">يَطْبَعُ</span> (yaṭbaʿu) sur les cœurs ?",
        "options": [
          "Il les ouvre",
          "Il les nettoie",
          "Il les scelle / les cachète",
          "Il les agrandit"
        ],
        "correct": 2
      },
      {
        "question": "Quel est le dernier mot de la sourate Ar-Rum ?",
        "options": [
          "Prie",
          "Dors",
          "Sois patient (faṣbir)",
          "Fuis"
        ],
        "correct": 2
      }
    ],
    "completionText": "Magnifique ! 🌟 Tu as terminé Ar-Rum ! Tu as appris la racine <strong>ض - ع - ف</strong> (faiblesse), <strong>ق - و - ي</strong> (force), <strong>ط - ب - ع</strong> (sceller) et <strong>ص - ب - ر</strong> (patience). La promesse d'Allah est vraie — sois patient et n'abandonne jamais !"
  },
  {
    "id": "31-01",
    "surah": 31,
    "surahName": "Luqman",
    "title": "Luqman — Versets 1 à 11 : Le Livre Sage et la création d'Allah",
    "shortTitle": "Luqman (v.1-11)",
    "subtitle": "Découvrons le Livre plein de sagesse et les merveilles de la création d'Allah : les cieux, les montagnes et les êtres vivants !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الٰم",
        "french": "Alif Lām Mīm."
      },
      {
        "number": 2,
        "arabic": "تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ",
        "french": "Voici les versets du Livre plein de sagesse,"
      },
      {
        "number": 3,
        "arabic": "هُدًى وَرَحْمَةً لِّلْمُحْسِنِينَ",
        "french": "un guide et une miséricorde pour les bienfaisants,"
      },
      {
        "number": 4,
        "arabic": "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ",
        "french": "qui accomplissent la prière, acquittent la Zakat et croient avec certitude à l'au-delà."
      },
      {
        "number": 5,
        "arabic": "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
        "french": "Ceux-là sont sur le chemin droit de leur Seigneur ; et ce sont eux les gens qui réussissent."
      },
      {
        "number": 6,
        "arabic": "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ بِغَيْرِ عِلْمٍ وَيَتَّخِذَهَا هُزُوًا ۚ أُولَٰئِكَ لَهُمْ عَذَابٌ مُّهِينٌ",
        "french": "Parmi les gens, il y a celui qui achète des futilités pour égarer du chemin d'Allah sans connaissance, et qui la tourne en raillerie. Ceux-là auront un châtiment avilissant."
      },
      {
        "number": 7,
        "arabic": "وَإِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا وَلَّىٰ مُسْتَكْبِرًا كَأَن لَّمْ يَسْمَعْهَا كَأَنَّ فِي أُذُنَيْهِ وَقْرًا ۖ فَبَشِّرْهُ بِعَذَابٍ أَلِيمٍ",
        "french": "Et quand on lui récite Nos versets, il tourne le dos avec orgueil, comme s'il ne les avait pas entendus, comme s'il avait des surdités dans ses oreilles. Fais-lui l'annonce d'un châtiment douloureux."
      },
      {
        "number": 8,
        "arabic": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتُ النَّعِيمِ",
        "french": "Ceux qui croient et font de bonnes œuvres auront les Jardins du délice."
      },
      {
        "number": 9,
        "arabic": "خَالِدِينَ فِيهَا ۖ وَعْدَ اللَّهِ حَقًّا ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
        "french": "Ils y demeureront éternellement. C'est la promesse d'Allah en vérité. C'est Lui le Puissant, le Sage."
      },
      {
        "number": 10,
        "arabic": "خَلَقَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا ۖ وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِكُمْ وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ ۚ وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ",
        "french": "Il a créé les cieux sans piliers que vous puissiez voir, et Il a enfoncé des montagnes fermes dans la terre pour qu'elle ne s'agite pas avec vous. Il y a répandu des animaux de toute espèce. Et du ciel, Nous avons fait descendre une eau avec laquelle Nous avons fait pousser des plantes de toute noble espèce."
      },
      {
        "number": 11,
        "arabic": "هَٰذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِن دُونِهِ ۚ بَلِ الظَّالِمُونَ فِي ضَلَالٍ مُّبِينٍ",
        "french": "Voilà la création d'Allah. Montrez-moi donc ce qu'ont créé ceux qui sont en dehors de Lui ! Non, mais les injustes sont dans un égarement évident."
      }
    ],
    "words": [
      {
        "word": "الْحَكِيمِ",
        "translit": "al-ḥakīm",
        "meaning": "le Sage / plein de sagesse",
        "root": "ح - ك - م",
        "rootMeaning": "sagesse / juger / arrêter",
        "rootColor": 1,
        "emoji": "🧠",
        "funFactTitle": "Le Coran est rempli de sagesse !",
        "funFact": "La racine <strong>ḥ-k-m</strong> veut dire « être sage » ou « juger ». <em>Al-Ḥakīm</em> = le Sage, Celui qui dit et fait les choses avec la plus grande sagesse. Le Coran est appelé <em>al-Kitāb al-Ḥakīm</em> = le Livre Sage. Imagine un professeur qui sait toujours la bonne réponse à la bonne question — c'est Allah ! Le mot <em>ḥukm</em> = le jugement, la décision. Et <em>ḥakīm</em> = le médecin sage (en arabe moderne) ! Al-Ḥakīm est aussi l'un des 99 plus beaux noms d'Allah.",
        "related": "<span>حُكْم</span> (jugement/décision), <span>حَكِيم</span> (sage/médecin), <span>أَحْكَمَ</span> (parfaire/rendre sage)"
      },
      {
        "word": "رَحْمَةً",
        "translit": "raḥmatan",
        "meaning": "une miséricorde",
        "root": "ر - ح - م",
        "rootMeaning": "miséricorde / tendresse / matrice",
        "rootColor": 2,
        "emoji": "💖",
        "funFactTitle": "Le ventre de maman = Al-Raḥim !",
        "funFact": "La racine <strong>r-ḥ-m</strong> veut dire « miséricorde » ou « tendresse ». <em>Raḥmah</em> = la miséricorde. Mais savais-tu que <em>al-raḥim</em> = le ventre de maman ? C'est là que le bébé est protégé avec la plus grande tendresse ! Ar-Raḥmān et Ar-Raḥīm sont les deux premiers noms d'Allah dans la Basmala. Le mot <em>riḥm</em> = les liens de famille. Allah dit : ceux qui maintiennent les liens familiaux recevront plus de miséricorde !",
        "related": "<span>رَحِيم</span> (très miséricordieux), <span>رَحِم</span> (ventre maternel), <span>رَّحْمَة</span> (miséricorde/tendresse)"
      },
      {
        "word": "مُّهِينٌ",
        "translit": "muhīnun",
        "meaning": "avilissant / humiliant",
        "root": "ه - و - ن",
        "rootMeaning": "humilier / rabaisser / être vil",
        "rootColor": 3,
        "emoji": "😔",
        "funFactTitle": "Se moquer du Coran, c'est se rabaisser soi-même !",
        "funFact": "La racine <strong>h-w-n</strong> veut dire « rabaisser » ou « rendre vil ». <em>Muhīn</em> = humiliant, avilissant — comme un zéro à l'école, mais en pire ! Ceux qui tournent le Coran en raillerie recevront un châtiment <em>muhīn</em>. Le mot <em>mahānah</em> = la bassesse, l'humiliation. Et <em>istahāna</em> = traiter avec mépris. En arabe, <em>hāʾin</em> = quelqu'un de vil, sans valeur. La leçon : ne te moque jamais des choses saintes !",
        "related": "<span>مَهَانَة</span> (bassese/humiliation), <span>اسْتَهَانَ</span> (traiter avec mépris), <span>هَانَ</span> (être vil/petit)"
      },
      {
        "word": "رَوَاسِيَ",
        "translit": "rawāsiya",
        "meaning": "des montagnes fermes / ancrées",
        "root": "ر - س - ي",
        "rootMeaning": "être ferme / stable / ancrer",
        "rootColor": 4,
        "emoji": "🏔️",
        "funFactTitle": "Les montagnes sont les « punaises » de la Terre !",
        "funFact": "La racine <strong>r-s-w/y</strong> veut dire « être stable » ou « ancrer ». <em>Rawāsiy</em> = les montagnes fermes, ancrées. Le verset dit qu'Allah a posé les montagnes comme des ancres pour que la terre ne tremble pas sous nos pieds ! Le mot <em>rāsiy</em> = stable, ferme. Et <em>arsā</em> = il a ancré, fixé. Imagine la Terre comme un grand bateau et les montagnes comme de grosses ancres qui l'empêchent de balloter !",
        "related": "<span>رَاسِيَة</span> (stable/ferme/ancrée), <span>أَرْسَىٰ</span> (ancrer/fixer), <span>اسْتِرْسَاء</span> (jet de l'ancre/ancrage)"
      },
      {
        "word": "بَثَّ",
        "translit": "baththa",
        "meaning": "Il a répandu / disséminé",
        "root": "ب - ث - ث",
        "rootMeaning": "répandre / disperser / étendre",
        "rootColor": 5,
        "emoji": "🐾",
        "funFactTitle": "Allah a semé les animaux comme des graines !",
        "funFact": "La racine <strong>b-th-th</strong> veut dire « répandre » ou « disséminer ». <em>Baththa</em> = il a dispersé, étendu — comme un fermier qui sème des graines dans un grand champ ! Allah a <em>baththa</em> les animaux sur toute la terre. Le mot <em>bathth</em> = la diffusion, la dispersion. Et <em>ibttāth</em> = le fait de se disperser. Imagine des milliards d'animaux répartis comme des perles sur un immense tapis vert !",
        "related": "<span>بَثّ</span> (dispersion/répandage), <span>تَبْثِيث</span> (action de disperser), <span>انْبَثَّ</span> (se disperser/s'étendre)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">الْحَكِيمِ</span> (al-ḥakīm) dans le titre du Livre ?",
        "options": [
          "le Rapide",
          "le Sage / plein de sagesse",
          "le Fort",
          "le Grand"
        ],
        "correct": 1
      },
      {
        "question": "Pourquoi Allah a-t-Il créé les montagnes (<span class=\"arabic-inline\">رَوَاسِيَ</span>) selon le verset 10 ?",
        "options": [
          "pour décorer la terre",
          "pour cacher les trésors",
          "pour que les gens puissent grimper",
          "pour que la terre ne s'agite pas"
        ],
        "correct": 3
      },
      {
        "question": "Quelle est la racine du mot <span class=\"arabic-inline\">رَحْمَةً</span> (raḥmatan) ?",
        "options": [
          "ر - ح - م (miséricorde / tendresse)",
          "ح - ك - م (sagesse)",
          "ر - س - ي (stabilité)",
          "ب - ث - ث (disperser)"
        ],
        "correct": 0
      },
      {
        "question": "Ceux qui achètent des futilités pour tourner le Coran en raillerie auront :",
        "options": [
          "un cadeau",
          "la miséricorde d'Allah",
          "le Paradis",
          "un châtiment avilissant"
        ],
        "correct": 3
      }
    ],
    "completionText": "Masha'Allah ! 🌟 Tu as commencé la sourate Luqman ! Tu as découvert la racine <strong>ح - ك - م</strong> (sagesse), la racine <strong>ر - ح - م</strong> (miséricorde), la racine <strong>ه - و - ن</strong> (rabaisser), la racine <strong>ر - س - ي</strong> (ancrer) et la racine <strong>ب - ث - ث</strong> (répandre). Les montagnes sont les ancres de la Terre !"
  },
  {
    "id": "31-02",
    "surah": 31,
    "surahName": "Luqman",
    "title": "Luqman — Versets 12 à 19 : Les conseils de Luqman à son fils",
    "shortTitle": "Luqman (v.12-19)",
    "subtitle": "Luqman le Sage donne les plus beaux conseils à son fils : ne pas associer à Allah, être reconnaissant, et faire preuve de patience !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 12,
        "arabic": "وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ ۚ وَمَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ ۖ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ حَمِيدٌ",
        "french": "Nous avons effectivement accordé la sagesse à Luqman : « Sois reconnaissant envers Allah. Car quiconque est reconnaissant n'est reconnaissant que pour lui-même. Quant à celui qui est ingrat... Allah Se suffit à Lui-même et Il est Digne de louanges. »"
      },
      {
        "number": 13,
        "arabic": "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ ۖ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ",
        "french": "Et lorsque Luqman dit à son fils tout en l'exhortant : « Ô mon fils, n'associe rien à Allah, car l'association est vraiment une injustice énorme. »"
      },
      {
        "number": 14,
        "arabic": "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ وَفِصَالُهُ فِي عَامَيْنِ أَنِ اشْكُرْ لِي وَلِوَالِدَيْكَ إِلَيَّ الْمَصِيرُ",
        "french": "Nous avons commandé à l'homme d'être bienveillant envers ses parents. Sa mère l'a porté avec peine, et avec peine elle l'a sevré en deux ans. Sois reconnaissant envers Moi et envers tes parents. Vers Moi est le retour."
      },
      {
        "number": 15,
        "arabic": "وَإِن جَاهَدَاكَ عَلَىٰ أَن تُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۖ وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا ۖ وَاتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَيَّ ۚ ثُمَّ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
        "french": "Et si tous deux te forcent à M'associer ce dont tu n'as aucune connaissance, ne leur obéis pas. Mais accompagne-les ici-bas avec bienveillance. Et suis le chemin de celui qui se tourne vers Moi. Puis, vers Moi sera votre retour, et Je vous informerai de ce que vous faisiez."
      },
      {
        "number": 16,
        "arabic": "يَا بُنَيَّ إِنَّهَا إِن تَكُ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ فَتَكُن فِي صَخْرَةٍ أَوْ فِي السَّمَاوَاتِ أَوْ فِي الْأَرْضِ يَأْتِ بِهَا اللَّهُ ۚ إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ",
        "french": "Ô mon fils, fussent-elles du poids d'un grain de moutarde, fussent-elles dans un rocher, dans les cieux ou dans la terre, Allah les fera venir. Allah est Doux et Parfaitement Informé."
      },
      {
        "number": 17,
        "arabic": "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ",
        "french": "Ô mon fils, accomplis la prière, ordonne le bien, interdis le mal et endure avec patience ce qui t'atteint. Tout cela relève des qualités les plus nobles."
      },
      {
        "number": 18,
        "arabic": "وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
        "french": "Ne détourne pas ton visage des gens et ne marche pas avec arrogance sur terre. Allah n'aime pas l'orgueilleux et le fanfaron."
      },
      {
        "number": 19,
        "arabic": "وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ ۚ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
        "french": "Sois modeste dans ta démarche et baisse ta voix. La voix la plus désagréable est bien la voix des ânes."
      }
    ],
    "words": [
      {
        "word": "الْحِكْمَةَ",
        "translit": "al-ḥikmah",
        "meaning": "la sagesse",
        "root": "ح - ك - م",
        "rootMeaning": "sagesse / juger / arrêter",
        "rootColor": 1,
        "emoji": "📚",
        "funFactTitle": "Luqman a reçu le diplôme suprême : la sagesse !",
        "funFact": "La racine <strong>ḥ-k-m</strong> revient ici avec <em>al-ḥikmah</em> = la sagesse. Allah a donné <em>al-ḥikmah</em> à Luqman — comme un professeur qui donne son meilleur prix à un excellent élève ! <em>Al-Ḥikmah</em> c'est : savoir dire la bonne chose, au bon moment, de la bonne manière. Le Prophète ﷺ a dit : « Celui à qui Allah veut du bien, Il lui accorde la compréhension de la religion (= <em>al-fiqh</em>). » En arabe moderne, un <em>ḥakīm</em> c'est un médecin — car il utilise sa sagesse pour guérir !",
        "related": "<span>حِكْمَة</span> (sagesse), <span>يَحْكُم</span> (il juge/décide), <span>مُحَكَّم</span> (bien établi/parfait)"
      },
      {
        "word": "يَعِظُهُ",
        "translit": "yaʿiẓuhu",
        "meaning": "il l'exhorte / il conseille",
        "root": "و - ع - ظ",
        "rootMeaning": "exhorter / conseiller / rappeler",
        "rootColor": 2,
        "emoji": "💬",
        "funFactTitle": "Le meilleur conseil vient du cœur !",
        "funFact": "La racine <strong>w-ʿ-ẓ</strong> veut dire « exhorter » ou « conseiller avec douceur ». <em>Yaʿiẓuhu</em> = il le conseille, comme un parent qui donne un précieux conseil à son enfant avec amour et patience. Le mot <em>waʿẓ</em> = le sermon, le rappel. Et <em>mawʿiẓah</em> = un bon conseil, une exhortation. Le Coran est souvent appelé <em>mawʿiẓah</em> ! Quand Luqman conseille son fils, il dit « Ô mon enfant » — c'est plein de tendresse !",
        "related": "<span>مَوْعِظَة</span> (conseil/exhortation), <span>وَاعِظ</span> (prédicateur/conseiller), <span>اتَّعَظَ</span> (tirer la leçon/se rappeler)"
      },
      {
        "word": "وَهْنًا",
        "translit": "wahnan",
        "meaning": "faiblesse / difficulté",
        "root": "و - ه - ن",
        "rootMeaning": "faiblesse / fatigue / lassitude",
        "rootColor": 3,
        "emoji": "🤱",
        "funFactTitle": "Maman porte bébé sur « faiblesse sur faiblesse » !",
        "funFact": "La racine <strong>w-h-n</strong> veut dire « faiblesse » ou « fatigue ». Allah dit que maman porte son bébé <em>wahnan ʿalā wahnin</em> = faiblesse sur faiblesse, difficulté sur difficulté ! C'est comme porter un sac lourd pendant des mois, sans pouvoir le poser ! Le mot <em>wahm</em> = l'épuisement, la lassitude. Et <em>mawhūn</em> = faible, fragile. Ce verset nous rappelle à quel point nos mamans sont courageuses et méritent notre gratitude !",
        "related": "<span>وَهْن</span> (faiblesse/fatigue), <span>مَوْهُون</span> (affaibli/épuisé), <span>اسْتَوْهَنَ</span> (considérer faible)"
      },
      {
        "word": "لَطِيفٌ",
        "translit": "laṭīfun",
        "meaning": "Doux / Subtil / Bienveillant",
        "root": "ل - ط - ف",
        "rootMeaning": "douleur / subtilité / bienveillance",
        "rootColor": 4,
        "emoji": "🪶",
        "funFactTitle": "Allah est plus doux qu'une plume !",
        "funFact": "La racine <strong>l-ṭ-f</strong> veut dire « être doux » ou « subtil ». <em>Laṭīf</em> = Doux, Subtil, Bienveillant — comme une plume qui touche ta joue avec la plus grande douceur ! Allah est <em>Al-Laṭīf</em> : Il connaît les plus petits détails de ta vie. Le mot <em>luṭf</em> = la douceur, la gentillesse. Et <em>lutf</em> = une faveur, un geste de bonté. Même un grain de moutarde caché dans un rocher, Allah le retrouve ! C'est la subtilité d'Allah !",
        "related": "<span>لُطْف</span> (douceur/faveur), <span>لَطِيف</span> (doux/subtil), <span>تَلَطَّفَ</span> (être délicat/s'adoucir)"
      },
      {
        "word": "مَرَحًا",
        "translit": "maraḥan",
        "meaning": "avec arrogance / insolence",
        "root": "م - ر - ح",
        "rootMeaning": "joie excessive / arrogance / insolence",
        "rootColor": 5,
        "emoji": "🦚",
        "funFactTitle": "Ne marche pas comme un paon vaniteux !",
        "funFact": "La racine <strong>m-r-ḥ</strong> veut dire « l'arrogance » ou « la joie excessive ». Luqman dit à son fils : « Ne marche pas avec <em>maraḥ</em> ! » — ne promène pas ton ego comme un paon qui fait la roue ! Le mot <em>maraḥ</em> = l'insolence, la vantardise. Et <em>tamarruḥ</em> = se montrer arrogant. Attention : la joie normale est bonne, mais l'arrogance est laide ! Le Prophète ﷺ marchait avec humilité, jamais avec <em>maraḥ</em>.",
        "related": "<span>مَرَح</span> (arrogance/insolence), <span>تَمَرَّحَ</span> (se montrer arrogant), <span>مِرْيَاح</span> (vantard)"
      }
    ],
    "quiz": [
      {
        "question": "Quel est le premier et plus important conseil que Luqman donne à son fils (v13) ?",
        "options": [
          "sois riche",
          "mange bien",
          "n'associe rien à Allah",
          "voyage beaucoup"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">وَهْنًا عَلَىٰ وَهْنٍ</span> au sujet de la mère (v14) ?",
        "options": [
          "elle porte avec difficulté sur difficulté",
          "elle rit tout le temps",
          "elle est très forte",
          "elle court très vite"
        ],
        "correct": 0
      },
      {
        "question": "Luqman dit que la voix la plus désagréable est celle de :",
        "options": [
          "le chien",
          "le chat",
          "l'âne",
          "le coq"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ل - ط - ف</strong> dans <span class=\"arabic-inline\">لَطِيفٌ</span> signifie :",
        "options": [
          "fort et puissant",
          "lent et paresseux",
          "doux et subtil",
          "grand et imposant"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! 👨‍👦 Tu as découvert les beaux conseils de Luqman à son fils ! Tu as appris la racine <strong>ح - ك - م</strong> (sagesse), la racine <strong>و - ع - ظ</strong> (conseiller), la racine <strong>و - ه - ن</strong> (faiblesse), la racine <strong>ل - ط - ف</strong> (douceur) et la racine <strong>م - ر - ح</strong> (arrogance). Suis toujours le conseil de Luqman : sois humble et reconnaissant !"
  },
  {
    "id": "31-03",
    "surah": 31,
    "surahName": "Luqman",
    "title": "Luqman — Versets 20 à 28 : Les signes d'Allah dans la création",
    "shortTitle": "Luqman (v.20-28)",
    "subtitle": "Observe la mer, les étoiles, la pluie... Tout est un signe d'Allah ! Même si les associateurs ne veulent pas le voir.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 20,
        "arabic": "أَلَمْ تَرَوْا أَنَّ اللَّهَ سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَأَسْبَغَ عَلَيْكُمْ نِعَمَهُ ظَاهِرَةً وَبَاطِنَةً ۗ وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَلَا هُدًى وَلَا كِتَابٍ مُّنِيرٍ",
        "french": "Ne voyez-vous pas qu'Allah vous a assujetti ce qui est dans les cieux et sur la terre ? Il vous a comblés de Ses bienfaits apparents et cachés. Et parmi les gens, il y a qui dispute au sujet d'Allah sans science, ni guidance, ni livre lumineux."
      },
      {
        "number": 21,
        "arabic": "وَإِذَا قِيلَ لَهُمُ اتَّبِعُوا مَا أَنزَلَ اللَّهُ قَالُوا بَلْ نَتَّبِعُ مَا وَجَدْنَا عَلَيْهِ آبَاءَنَا ۚ أَوَلَوْ كَانَ الشَّيْطَانُ يَدْعُوهمْ إِلَىٰ عَذَابِ السَّعِيرِ",
        "french": "Et quand on leur dit : « Suivez ce qu'Allah a fait descendre », ils disent : « Nous suivons plutôt ce sur quoi nous avons trouvé nos ancêtres. » Même si le Diable les appelait au châtiment de la Fournaise !"
      },
      {
        "number": 22,
        "arabic": "وَمَن يُسْلِمْ وَجْهَهُ إِلَى اللَّهِ وَهُوَ مُحْسِنٌ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ ۗ وَإِلَى اللَّهِ عَاقِبَةُ الْأُمُورِ",
        "french": "Et quiconque soumet son visage à Allah tout en étant bienfaisant, s'accroche à l'anse la plus ferme. Et c'est vers Allah qu'est l'issue de toute chose."
      },
      {
        "number": 23,
        "arabic": "وَمَن كَفَرَ فَلَا يَحْزُنكَ كُفْرُهُ ۚ إِلَيْنَا مَرْجِعُهُمْ فَنُنَبِّئُهُم بِمَا عَمِلُوا ۚ إِنَّ اللَّهَ عَلِيمٌ بِذَاتِ الصُّدُورِ",
        "french": "Et quiconque mécroit, que sa mécréance ne t'attriste pas. C'est à Nous qu'ils retourneront, et Nous les informerons de ce qu'ils faisaient. Allah connaît bien le contenu des poitrines."
      },
      {
        "number": 24,
        "arabic": "نُمَتِّعُهُمْ قَلِيلًا ثُمَّ نَضْطَرُّهُمْ إِلَىٰ عَذَابٍ غَلِيظٍ",
        "french": "Nous leur accordons un peu de jouissance, puis Nous les contraignons vers un dur châtiment."
      },
      {
        "number": 25,
        "arabic": "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ اللَّهُ ۚ قُلِ الْحَمْدُ لِلَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ",
        "french": "Et si tu leur demandes : « Qui a créé les cieux et la terre ? », ils diront certes : « Allah. » Dis : « La louange est à Allah. » Mais la plupart d'entre eux ne savent pas."
      },
      {
        "number": 26,
        "arabic": "لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ إِنَّ اللَّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
        "french": "A Allah appartient tout ce qui est dans les cieux et la terre. Allah est Celui qui Se suffit à Lui-même, le Digne de louanges."
      },
      {
        "number": 27,
        "arabic": "وَلَوْ أَنَّمَا فِي الْأَرْضِ مِن شَجَرَةٍ أَقْلَامٌ وَالْبَحْرُ يَمَدُّهُ مِن بَعْدِهِ سَبْعَةُ أَبْحُرٍ مَّا نَفِدَتْ كَلِمَاتُ اللَّهِ ۚ إِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ",
        "french": "Et si tous les arbres de la terre se changeaient en calames, et si la mer, renforcée par sept autres mers, servait d'encre pour écrire les paroles d'Allah, les paroles d'Allah ne seraient pas épuisées. Allah est Puissant et Sage."
      },
      {
        "number": 28,
        "arabic": "مَّا خَلْقُكُمْ وَلَا بَعْثُكُمْ إِلَّا كَنَفْسٍ وَاحِدَةٍ ۚ إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ",
        "french": "Votre création et votre résurrection sont comme la création d'une seule âme. Allah est Audient et Clairvoyant."
      }
    ],
    "words": [
      {
        "word": "سَخَّرَ",
        "translit": "sakhkhara",
        "meaning": "Il a assujetti / mis à votre service",
        "root": "س - خ - ر",
        "rootMeaning": "assujettir / soumettre / dompter",
        "rootColor": 1,
        "emoji": "🌅",
        "funFactTitle": "Tout l'univers travaille pour toi... gratuitement !",
        "funFact": "La racine <strong>s-kh-r</strong> veut dire « assujettir » ou « mettre au service ». Allah <em>sakhkhara</em> pour toi le soleil, la lune, la pluie, les animaux — comme un immense équipage qui travaille gratuitement pour toi ! Le mot <em>tasakhkhur</em> = l'assujettissement. Et <em>maskhar</em> = soumis, dompté. Le soleil te réveille le matin, la pluie fait pousser ta nourriture, et la gravité te garde les pieds sur terre — tout est <em>muskhar</em> par Allah !",
        "related": "<span>تَسْخِير</span> (assujettissement/mise en service), <span>مُسَخَّر</span> (soumis/domestiqué), <span>سُخْرِيَّة</span> (moquerie/dérision)"
      },
      {
        "word": "عُرْوَةِ",
        "translit": "ʿurwat",
        "meaning": "l'anse / le lien solide",
        "root": "ع - ر - و",
        "rootMeaning": "saisir / tenir fermement / lien",
        "rootColor": 2,
        "emoji": "⚓",
        "funFactTitle": "Accroche-toi à la plus forte corde de l'univers !",
        "funFact": "La racine <strong>ʿ-r-w</strong> veut dire « saisir » ou « s'accrocher ». <em>Al-ʿUrwat al-Wuthqā</em> = l'anse la plus ferme, le lien le plus solide — comme la corde d'un bateau pendant une tempête ! Ce lien solide, c'est l'islam. Le mot <em>ʿurwah</em> = une anse, un poignée. Et <em>iʿṭarā</em> = s'accrocher fermement. Quand tu te convertis sincèrement à Allah, c'est comme attraper le meilleur parachute qui existe !",
        "related": "<span>عُرْوَة</span> (anse/poignée), <span>اعْتَرَى</span> (s'accrocher/saisir), <span>مُعْتَرِض</span> (celui qui s'accroche)"
      },
      {
        "word": "أَقْلَامٌ",
        "translit": "aqlāmun",
        "meaning": "des calames / des stylos",
        "root": "ق - ل - م",
        "rootMeaning": "écrire / couper / tailler",
        "rootColor": 3,
        "emoji": "🖊️",
        "funFactTitle": "Même 8 océans d'encre ne suffiraient pas !",
        "funFact": "La racine <strong>q-l-m</strong> veut dire « écrire » ou « tailler ». <em>Aqlām</em> = des plumes, des calames (anciens stylos). Le verset dit que même si TOUS les arbres devenaient des stylos et la mer PLUS 7 mers devenaient de l'encre, les mots d'Allah ne seraient PAS épuisés ! Le mot <em>qalam</em> = un stylo, une plume. Et <em>istiqāmah</em> (d'une racine proche) = la rectitude. Allah a fait le premier <em>qalam</em> pour écrire tout ce qui arrivera !",
        "related": "<span>قَلَم</span> (stylo/plume), <span>مَقْلَمَة</span> (porte-plume), <span>اقْتَلَمَ</span> (se tailler une plume/écrire)"
      },
      {
        "word": "نَفِدَتْ",
        "translit": "nafadat",
        "meaning": "elles seraient épuisées",
        "root": "ن - ف - د",
        "rootMeaning": "s'épuiser / s'éteindre / manquer",
        "rootColor": 4,
        "emoji": "🪫",
        "funFactTitle": "Les mots d'Allah ont une batterie ILLIMITÉE !",
        "funFact": "La racine <strong>n-f-d</strong> veut dire « s'épuiser » ou « se terminer ». <em>Nafadat</em> = être épuisé, comme une batterie de téléphone à 0% ! Mais les paroles d'Allah ne s'épuisent JAMAIS. Le mot <em>nafd</em> = la dépense épuisante. Et <em>yanfad</em> = il s'épuise, se termine. C'est comme si tu essayais de vider l'océan avec une petite cuillère — impossible ! Les mots d'Allah sont INFINIS car Allah est infini !",
        "related": "<span>نَفَاد</span> (épuisement/fin), <span>أَنْفَدَ</span> (épuiser/consommer), <span>مُنْفَد</span> (épuisé/terminé)"
      },
      {
        "word": "يَعْلَمُونَ",
        "translit": "yaʿlamūna",
        "meaning": "ils savent / ils connaissent",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 5,
        "emoji": "📖",
        "funFactTitle": "Le savoir est un trésor qui te suit partout !",
        "funFact": "La racine <strong>ʿ-l-m</strong> veut dire « savoir » ou « connaître ». <em>Yaʿlamūna</em> = ils savent — mais le verset dit que la plupart des gens ne savent PAS ! Le mot <strong>ʿilm</strong> = la science, le savoir. Et <em>ʿālim</em> = un savant, quelqu'un qui sait. En arabe, on dit que la première chose créée par Allah est le <em>ʿaql</em> (l'intelligence) et le premier mot révélé est <em>iqraʾ</em> = lis ! Allah sait même ce qu'il y a dans ton cœur !",
        "related": "<span>عِلْم</span> (science/savoir), <span>عَالِم</span> (savant/celui qui sait), <span>تَعَلَّمَ</span> (apprendre/étudier)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">سَخَّرَ</span> (sakhkhara) au verset 20 ?",
        "options": [
          "Il a détruit",
          "Il a assujetti / mis à votre service",
          "Il a caché",
          "Il a oublié"
        ],
        "correct": 1
      },
      {
        "question": "Si tous les arbres devenaient des stylos et la mer plus 7 mers de l'encre, que dit le verset 27 ?",
        "options": [
          "les mots d'Allah seraient finis en un jour",
          "les stylos refuseraient d'écrire",
          "la mer se transformerait en papier",
          "les mots d'Allah ne seraient pas épuisés"
        ],
        "correct": 3
      },
      {
        "question": "« L'anse la plus ferme » (<span class=\"arabic-inline\">الْعُرْوَةِ الْوُثْقَىٰ</span>) désigne :",
        "options": [
          "une corde de montagne",
          "l'attachement à l'islam et à Allah",
          "un bateau solide",
          "une promesse humaine"
        ],
        "correct": 1
      },
      {
        "question": "Quelle est la racine du mot <span class=\"arabic-inline\">أَقْلَامٌ</span> (stylos) ?",
        "options": [
          "ن - ف - د (s'épuiser)",
          "ع - ر - و (saisir)",
          "س - خ - ر (assujettir)",
          "ق - ل - م (écrire/tailler)"
        ],
        "correct": 3
      }
    ],
    "completionText": "Excellent ! 🌊 Tu as découvert les signes d'Allah dans la sourate Luqman ! Tu as appris la racine <strong>س - خ - ر</strong> (assujettir), la racine <strong>ع - ر - و</strong> (s'accrocher), la racine <strong>ق - ل - م</strong> (écrire), la racine <strong>ن - ف - د</strong> (s'épuiser) et la racine <strong>ع - ل - م</strong> (savoir). Même 8 océans d'encre ne suffisent pas pour écrire les mots d'Allah !"
  },
  {
    "id": "31-04",
    "surah": 31,
    "surahName": "Luqman",
    "title": "Luqman — Versets 29 à 34 : Seul Allah connaît l'Heure",
    "shortTitle": "Luqman (v.29-34)",
    "subtitle": "Allah contrôle le jour et la nuit, les mers et les navires. Seul Lui connaît le moment de l'Heure et ce qui est dans les ventres des mères !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 29,
        "arabic": "أَلَمْ تَرَ أَنَّ اللَّهَ يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ كُلٌّ يَجْرِي إِلَىٰ أَجَلٍ مُّسَمًّى ۗ وَأَنَّ اللَّهَ بِمَا تَعْمَلُونَ خَبِيرٌ",
        "french": "Ne vois-tu pas qu'Allah fait pénétrer la nuit dans le jour et le jour dans la nuit ? Et qu'Il a assujetti le soleil et la lune, chacun s'avançant pour un terme fixé ? Et qu'Allah est parfaitement Informé de ce que vous faites ?"
      },
      {
        "number": 30,
        "arabic": "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِن دُونِهِ الْبَاطِلُ وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ",
        "french": "C'est ainsi parce qu'Allah est la Vérité, et que ce qu'ils invoquent en dehors de Lui est le faux, et qu'Allah est le Très-Haut, le Grand."
      },
      {
        "number": 31,
        "arabic": "أَلَمْ تَرَ أَنَّ الْفُلْكَ يَجْرِي فِي الْبَحْرِ بِنِعْمَتِ اللَّهِ لِيُرِيَكُم مِنْ آيَاتِهِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ",
        "french": "Ne vois-tu pas que les vaisseaux voguent sur la mer par la grâce d'Allah pour qu'Il te montre une partie de Ses signes ? Il y a en cela des preuves pour tout homme patient et reconnaissant."
      },
      {
        "number": 32,
        "arabic": "وَإِذَا غَشِيَهُم مَّوْجٌ كَالظُّلَلِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ فَمِنْهُم مُّقْتَصِدٌ ۚ وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا كُلُّ خَتَّارٍ كَفُورٍ",
        "french": "Et quand une vague les recouvre comme des ombres, ils invoquent Allah, Lui vouant sincèrement le culte. Mais lorsqu'Il les sauve vers la terre ferme, certains d'entre eux deviennent tièdes. Seul le traître ingrat renie Nos signes."
      },
      {
        "number": 33,
        "arabic": "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ وَاخْشَوْا يَوْمًا لَّا يَجْزِي وَالِدٌ عَن وَلَدِهِ وَلَا مَوْلُودٌ هُوَ جَازٍ عَن وَالِدِهِ شَيْئًا ۚ إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ",
        "french": "Ô hommes ! Craignez votre Seigneur et redoutez un jour où le père ne pourra rien pour son enfant, ni l'enfant pour son père. La promesse d'Allah est vérité. Que la vie d'ici-bas ne vous illusionne pas, et que le Trompeur ne vous illusionne pas au sujet d'Allah."
      },
      {
        "number": 34,
        "arabic": "إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ وَيُنَزِّلُ الْغَيْثَ وَيَعْلَمُ مَا فِي الْأَرْحَامِ ۖ وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا ۖ وَمَا تَدْرِي نَفْسٌ بِأَيِّ أَرْضٍ تَمُوتُ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ",
        "french": "Certes, la connaissance de l'Heure est auprès d'Allah. C'est Lui qui fait descendre la pluie. Il sait ce qu'il y a dans les matrices. Aucune âme ne sait ce qu'elle acquerra demain, et aucune âme ne sait dans quelle terre elle mourra. Allah est Omniscient et Parfaitement Informé."
      }
    ],
    "words": [
      {
        "word": "يُولِجُ",
        "translit": "yūliju",
        "meaning": "Il fait pénétrer / Il introduit",
        "root": "و - ل - ج",
        "rootMeaning": "entrer / pénétrer / plonger",
        "rootColor": 1,
        "emoji": "🌙",
        "funFactTitle": "Allah fait jouer au cache-cache avec le jour et la nuit !",
        "funFact": "La racine <strong>w-l-j</strong> veut dire « entrer » ou « pénétrer ». <em>Yūliju</em> = Il fait entrer — Allah fait pénétrer la nuit dans le jour comme si on mélangeait deux couleurs ! Le mot <em>awlaja</em> = il a fait entrer. Et <em>istawlaja</em> = il a plongé, il s'est enfoncé. Imagine un artiste qui fond le jour dans la nuit et la nuit dans le jour — c'est Allah, le plus grand artiste ! Ce cycle se répète tous les jours comme une horloge parfaite.",
        "related": "<span>أَوْلَجَ</span> (faire entrer/pénétrer), <span>وُلُوج</span> (entrée/pénétration), <span>مَوْلِج</span> (entrée/porte)"
      },
      {
        "word": "الْفُلْكَ",
        "translit": "al-fulka",
        "meaning": "le navire / le bateau",
        "root": "ف - ل - ك",
        "rootMeaning": "tourner / rouler / naviguer",
        "rootColor": 2,
        "emoji": "🚢",
        "funFactTitle": "Les bateaux flottent grâce à Allah !",
        "funFact": "La racine <strong>f-l-k</strong> veut dire « tourner » ou « rouler ». <em>Al-fulk</em> = le navire — parce qu'il tourne (tourne autour, navigue) sur l'eau ! Le mot <em>fulk</em> = un bateau, un vaisseau. Et <em>falaka</em> = orbite, chemin circulaire. En arabe, <em>falak</em> = l'orbite céleste ! Le Coran utilise cette racine pour les bateaux ET pour les planètes — tout « tourne » grâce à Allah ! Un bateau sur l'eau, c'est comme une planète sur son orbite !",
        "related": "<span>فَلَك</span> (navire/orbite), <span>فَلَكَة</span> (roue/engrenage), <span>تَفَلَّكَ</span> (tournoyer/naviguer)"
      },
      {
        "word": "غَشِيَهُم",
        "translit": "ghashiyahum",
        "meaning": "les recouvre / enveloppe",
        "root": "غ - ش - و",
        "rootMeaning": "couvrir / envelopper / survenir",
        "rootColor": 3,
        "emoji": "🌊",
        "funFactTitle": "Les vagues sont comme des ombres géantes !",
        "funFact": "La racine <strong>gh-sh-w/y</strong> veut dire « couvrir » ou « envelopper ». <em>Ghashiyahum</em> = les recouvre — les vagues recouvrent les marins comme une couverture géante ! Le mot <em>ghashāwah</em> = l'obscurité, ce qui couvre. Et <em>maghshī</em> = recouvert, enveloppé. Le verset dit que les vagues sont comme des ombres (<em>ka-l-ẓulal</em>) — imagine des montagnes d'eau au-dessus de ta tête ! C'est à ce moment-là que même les plus fiers invoquent Allah sincèrement.",
        "related": "<span>غَشْوَة</span> (couverture/obscurité), <span>غَاشِيَة</span> (ce qui recouvre/le Jour terrible), <span>غَشِيَ</span> (recouvrir/envelopper)"
      },
      {
        "word": "الْغَيْثَ",
        "translit": "al-ghayth",
        "meaning": "la pluie / les pluies",
        "root": "غ - ي - ث",
        "rootMeaning": "pluie bienfaisante / secours",
        "rootColor": 4,
        "emoji": "🌧️",
        "funFactTitle": "La pluie = le cadeau du ciel !",
        "funFact": "La racine <strong>gh-y-th</strong> veut dire « pluie bienfaisante » ou « secours ». <em>Al-ghayth</em> = la pluie — pas n'importe quelle pluie, mais la pluie qui fait vivre ! Le mot <em>ghayth</em> = la pluie salvatrice. Et <em>istaghāth</em> = appeler au secours. La différence entre <em>maṭar</em> et <em>ghayth</em> : <em>maṭar</em> c'est juste de l'eau qui tombe, mais <em>ghayth</em> c'est la pluie BÉNIE qui fait pousser les fleurs et les fruits ! Allah seul sait quand et où il pleuvra.",
        "related": "<span>غَيْث</span> (pluie bienfaisante), <span>اسْتَغَاثَ</span> (appeler au secours), <span>مُسْتَغِيث</span> (celui qui demande de l'aide)"
      },
      {
        "word": "الْأَرْحَامِ",
        "translit": "al-arḥām",
        "meaning": "les matrices / les ventres des mères",
        "root": "ر - ح - م",
        "rootMeaning": "miséricorde / tendresse / matrice",
        "rootColor": 5,
        "emoji": "🤰",
        "funFactTitle": "Seul Allah sait ce qui grandit dans le ventre de maman !",
        "funFact": "La racine <strong>r-ḥ-m</strong> revient ici avec <em>al-arḥām</em> = les matrices, les ventres des mères. Tu te souviens ? <em>Raḥm</em> = le ventre maternel ! Le verset dit qu'Allah seul sait ce qu'il y a dans les ventres : garçon ou fille ? Heureux ou malheureux ? Le mot <em>raḥīm</em> = miséricordieux, mais aussi = matrice ! En arabe, la même racine donne « miséricorde » et « ventre de maman » car c'est LÀ que bébé est le plus protégé. Même les médecins avec leurs échographies ne connaissent pas l'avenir du bébé !",
        "related": "<span>رَحِم</span> (matrice/ventre maternel), <span>رَحْمَة</span> (miséricorde), <span>رَّحِيم</span> (très miséricordieux)"
      }
    ],
    "quiz": [
      {
        "question": "Quelles sont les 5 choses que seul Allah connaît (v34) ?",
        "options": [
          "le prix du pain, la météo, le foot, l'école, les vacances",
          "l'Heure, la pluie, le contenu des matrices, ce qu'on gagnera demain, le lieu de sa mort",
          "le nom de chaque étoile, le poids de chaque montagne, le nombre de poissons, l'âge des arbres, la couleur du ciel",
          "le nombre de prières, le nombre de mosques, le nombre de pays musulmans, le nombre de prophètes, le nombre de sourates"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">يُولِجُ</span> (yūliju) ?",
        "options": [
          "Il détruit",
          "Il crée",
          "Il oublie",
          "Il fait pénétrer / introduire"
        ],
        "correct": 3
      },
      {
        "question": "Pourquoi les gens invoquent-ils Allah sincèrement en mer (v32) ?",
        "options": [
          "parce qu'ils aiment chanter",
          "parce que c'est une tradition",
          "parce que les vagues les recouvrent et ils ont peur",
          "parce qu'ils veulent pêcher plus de poissons"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>غ - ي - ث</strong> dans <span class=\"arabic-inline\">الْغَيْثَ</span> désigne :",
        "options": [
          "le vent",
          "la neige",
          "la pluie bienfaisante",
          "le soleil"
        ],
        "correct": 2
      }
    ],
    "completionText": "Félicitations ! 🕌 Tu as terminé la sourate Luqman ! Tu as appris la racine <strong>و - ل - ج</strong> (pénétrer), la racine <strong>ف - ل - ك</strong> (tourner/naviguer), la racine <strong>غ - ش - و</strong> (couvrir), la racine <strong>غ - ي - ث</strong> (pluie bienfaisante) et la racine <strong>ر - ح - م</strong> (miséricorde/matrice). Luqman le Sage serait fier de toi !"
  },
  {
    "id": "32-01",
    "surah": 32,
    "surahName": "As-Sajdah",
    "title": "As-Sajdah — Versets 1 à 11 : Le Livre descendu en une nuit",
    "shortTitle": "As-Sajdah (v.1-11)",
    "subtitle": "Le Coran est descendu la Nuit du Destin ! Allah a créé l'homme à partir d'argile et a façonné toute chose avec perfection.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الٰم",
        "french": "Alif Lām Mīm."
      },
      {
        "number": 2,
        "arabic": "تَنزِيلُ الْكِتَابِ لَا رَيْبَ فِيهِ مِن رَّبِّ الْعَالَمِينَ",
        "french": "La révélation du Livre, il n'y a aucun doute à ce sujet, vient du Seigneur des mondes."
      },
      {
        "number": 3,
        "arabic": "أَمْ يَقُولُونَ افْتَرَاهُ ۚ بَلْ هُوَ الْحَقُّ مِن رَّبِّكَ لِتُنذِرَ قَوْمًا مَّا أَتَاهُم مِّن نَّذِيرٍ مِّن قَبْلِكَ لَعَلَّهُمْ يَهْتَدُونَ",
        "french": "Ou diraient-ils : « Il l'a inventé ? » Non, c'est la vérité venant de ton Seigneur, pour que tu avertisses un peuple à qui aucun avertisseur n'est venu avant toi, afin qu'ils se guident."
      },
      {
        "number": 4,
        "arabic": "اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ مَا لَكُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا شَفِيعٍ ۚ أَفَلَا تَذَكَّرُونَ",
        "french": "Allah, c'est Lui qui a créé les cieux et la terre et ce qui est entre eux en six jours, puis Il S'est établi sur le Trône. Vous n'avez, en dehors de Lui, ni allié ni intercesseur. Ne vous rappelez-vous pas ?"
      },
      {
        "number": 5,
        "arabic": "يُدَبِّرُ الْأَمْرَ مِنَ السَّمَاءِ إِلَى الْأَرْضِ ثُمَّ يَعْرُجُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ أَلْفَ سَنَةٍ مِّمَّا تَعُدُّونَ",
        "french": "Il gouverne l'ordre du ciel vers la terre, puis tout remonte vers Lui en un jour dont la durée est mille ans de votre calcul."
      },
      {
        "number": 6,
        "arabic": "ذَٰلِكَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الرَّحِيمُ",
        "french": "Tel est Celui qui connaît l'invisible et le visible, le Puissant, le Miséricordieux."
      },
      {
        "number": 7,
        "arabic": "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ ۖ وَبَدَأَ خَلْقَ الْإِنسَانِ مِن طِينٍ",
        "french": "Celui qui a parfaitement fait tout ce qu'Il a créé. Et Il a commencé la création de l'homme à partir de l'argile."
      },
      {
        "number": 8,
        "arabic": "ثُمَّ جَعَلَ نَسْلَهُ مِن سُلَالَةٍ مِّن مَّاءٍ مَّهِينٍ",
        "french": "Puis Il a fait sa descendance d'une extraction d'un fluide vil."
      },
      {
        "number": 9,
        "arabic": "ثُمَّ سَوَّاهُ وَنَفَخَ فِيهِ مِن رُّوحِهِ ۖ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَّا تَشْكُرُونَ",
        "french": "Puis Il lui a donné sa forme et y a insufflé de Son esprit. Il vous a assigné l'ouïe, la vue et le cœur. Que vous êtes peu reconnaissants !"
      },
      {
        "number": 10,
        "arabic": "وَقَالُوا أَإِذَا ضَلَلْنَا فِي الْأَرْضِ أَإِنَّا لَخَلْقٌ جَدِيدٌ ۗ بَلْ هُم بِلِقَاءِ رَبِّهِمْ كَافِرُونَ",
        "french": "Et ils dirent : « Quand nous serons perdus dans la terre, serons-nous une création nouvelle ? » Non, ils sont mécréants envers la rencontre de leur Seigneur."
      },
      {
        "number": 11,
        "arabic": "قُلْ يَتَوَفَّاكُم مَّلَكُ الْمَوْتِ الَّذِي وُكِّلَ بِكُمْ ثُمَّ إِلَىٰ رَبِّكُمْ تُرْجَعُونَ",
        "french": "Dis : « L'Ange de la mort qui est chargé de vous, vous fera mourir. Ensuite, vous serez ramenés vers votre Seigneur. »"
      }
    ],
    "words": [
      {
        "word": "تَنزِيلُ",
        "translit": "tanzīlu",
        "meaning": "la révélation / ce qui est fait descendre",
        "root": "ن - ز - ل",
        "rootMeaning": "descendre / révéler / séjourner",
        "rootColor": 1,
        "emoji": "⬇️",
        "funFactTitle": "Le Coran = le cadeau qui descend du ciel !",
        "funFact": "La racine <strong>n-z-l</strong> veut dire « descendre » ou « révéler ». <em>Tanzīl</em> = la révélation, ce qui a été fait descendre du ciel vers la terre — comme un colis spécial livré par Allah ! Le mot <em>nuzūl</em> = la descente, l'arrivée. Et <em>anzala</em> = il a fait descendre. On dit <em>manzil</em> = un lieu de séjour, une étape. Le Coran est le plus beau <em>tanzīl</em> : Allah l'a fait descendre la Nuit du Destin (Laylat al-Qadr) en une seule fois !",
        "related": "<span>نُزُول</span> (descente/révélation), <span>مَنْزِل</span> (lieu de séjour), <span>أَنزَلَ</span> (faire descendre/révéler)"
      },
      {
        "word": "يُدَبِّرُ",
        "translit": "yudabbiru",
        "meaning": "Il gouverne / Il organise",
        "root": "د - ب - ر",
        "rootMeaning": "organiser / gérer / préparer",
        "rootColor": 2,
        "emoji": "⚙️",
        "funFactTitle": "Allah est le meilleur directeur de l'univers !",
        "funFact": "La racine <strong>d-b-r</strong> veut dire « organiser » ou « gérer ». <em>Yudabbir</em> = Il gouverne, Il organise — comme un chef d'orchestre qui dirige tous les musiciens de l'univers ! Le mot <em>dabr</em> = le dos (derrière), et <em>tadbīr</em> = l'organisation, la gestion. Allah <em>yudabbir al-amr</em> = Il gère toute chose, du mouvement des planètes au battement de ton cœur ! Le mot <em>dabbara</em> = soigner, traiter avec soin.",
        "related": "<span>تَدْبِير</span> (organisation/gestion), <span>دَابِر</span> (arrière/dernier), <span>دَبْر</span> (dos/arrière)"
      },
      {
        "word": "سَوَّاهُ",
        "translit": "sawwāhu",
        "meaning": "Il lui a donné sa forme / harmonisé",
        "root": "س - و - ي",
        "rootMeaning": "former / façonner / parfaire",
        "rootColor": 3,
        "emoji": "🎨",
        "funFactTitle": "Allah a façonné l'homme comme un artiste !",
        "funFact": "La racine <strong>s-w-y</strong> veut dire « former » ou « façonner ». <em>Sawwāhu</em> = Il lui a donné sa belle forme — comme un sculpteur qui façonne une statue avec la plus grande précision ! Le mot <em>taswīyah</em> = la mise en forme, l'harmonisation. Et <em>musawwī</em> = Celui qui façonne, qui donne la forme. Allah a d'abord créé l'homme d'argile, puis lui a donné la forme parfaite, puis y a insufflé Son souffle ! Trois étapes de création !",
        "related": "<span>تَسْوِيَة</span> (mise en forme/harmonisation), <span>مُسَوِّي</span> (Celui qui façonne), <span>تَسَاوَىٰ</span> (être égal/s'équilibrer)"
      },
      {
        "word": "يَتَوَفَّاكُم",
        "translit": "yatawaffākum",
        "meaning": "Il vous fait mourir / Il recueille vos âmes",
        "root": "و - ف - ي",
        "rootMeaning": "mourir / recueillir l'âme / compléter",
        "rootColor": 4,
        "emoji": "🌙",
        "funFactTitle": "L'ange de la mort est comme un facteur spécial !",
        "funFact": "La racine <strong>w-f-y</strong> veut dire « recueillir » ou « compléter ». <em>Yatawaffākum</em> = Il vous fait mourir — littéralement « Il recueille vos âmes en entier ». L'Ange de la mort <em>yatawaffā</em> les âmes comme un facteur qui récolte un courrier précieux ! Le mot <em>wafāh</em> = la mort, le décès. Et <em>tawaffā</em> = il a recueilli. En arabe, on dit <em>tawaffāhu Allāh</em> = qu'Allah lui fasse miséricorde (littéralement : qu'Il recueille son âme). La mort n'est que le retour de l'âme à Allah !",
        "related": "<span>وَفَاة</span> (décès/mort), <span>تَوَفَّىٰ</span> (recueillir l'âme), <span>مُتَوَفِّي</span> (celui qui recueille / l'Ange de la mort)"
      },
      {
        "word": "طِينٍ",
        "translit": "ṭīnin",
        "meaning": "d'argile / de terre",
        "root": "ط - ي - ن",
        "rootMeaning": "argile / boue / pâte",
        "rootColor": 5,
        "emoji": "🏺",
        "funFactTitle": "L'homme a été créé à partir d'argile !",
        "funFact": "La racine <strong>ṭ-y-n</strong> veut dire « argile » ou « boue ». Allah a créé le premier homme, Adam, à partir de <em>ṭīn</em> = d'argile — comme un potier qui forme un magnifique vase avec de la terre ! Le mot <em>ṭīn</em> = l'argile malléable. Et <em>ṭayn</em> = la boue. En arabe, un <em>faṭṭān</em> = un potier. Allah est le Meilleur des créateurs : Il a transformé de la simple argile en un être vivant, pensant et parlant !",
        "related": "<span>طِين</span> (argile/terre glaise), <span>فَتَّان</span> (potier/celui qui façonne), <span>طَيَّان</span> (argileux/terreux)"
      }
    ],
    "quiz": [
      {
        "question": "En combien de jours Allah a-t-Il créé les cieux et la terre (v4) ?",
        "options": [
          "en six jours",
          "en un jour",
          "en mille ans",
          "en sept jours"
        ],
        "correct": 0
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">يُدَبِّرُ</span> (yudabbiru) ?",
        "options": [
          "Il détruit",
          "Il mange",
          "Il gouverne / organise",
          "Il oublie"
        ],
        "correct": 2
      },
      {
        "question": "De quoi Allah a-t-Il commencé la création de l'homme (v7) ?",
        "options": [
          "de feu",
          "de lumière",
          "d'eau",
          "d'argile"
        ],
        "correct": 3
      },
      {
        "question": "Quel ange est chargé de recueillir les âmes (v11) ?",
        "options": [
          "Jibrîl",
          "Mika'îl",
          "Isrâfîl",
          "l'Ange de la mort"
        ],
        "correct": 3
      }
    ],
    "completionText": "Bravo ! 📖 Tu as commencé la sourate As-Sajdah ! Tu as découvert la racine <strong>ن - ز - ل</strong> (descendre), la racine <strong>د - ب - ر</strong> (organiser), la racine <strong>س - و - ي</strong> (façonner), la racine <strong>و - ف - ي</strong> (recueillir l'âme) et la racine <strong>ط - ي - ن</strong> (argile). Tu sais que Allah a créé l'homme d'argile puis lui a insufflé Son esprit !"
  },
  {
    "id": "32-02",
    "surah": 32,
    "surahName": "As-Sajdah",
    "title": "As-Sajdah — Versets 12 à 22 : Le châtiment et les signes de la nuit et du jour",
    "shortTitle": "As-Sajdah (v.12-22)",
    "subtitle": "Les croyants qui ont fait le bien auront les Jardins, tandis que les mécréants subiront le châtiment. La nuit et le jour sont des signes !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 12,
        "arabic": "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ أَمَّن يَمْلِكُ السَّمْعَ وَالْأَبْصَارَ وَمَن يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَمَن يُدَبِّرُ الْأَمْرَ ۚ فَسَيَقُولُونَ اللَّهُ ۚ قُلْ أَفَلَا تَتَّقُونَ",
        "french": "Dis : « Qui vous pourvoit du ciel et de la terre ? Qui détient l'ouïe et la vue ? Qui fait sortir le vivant du mort et le mort du vivant ? Qui administre l'ordre ? » Ils diront : « Allah. » Dis alors : « Ne Le craignez-vous donc pas ? »"
      },
      {
        "number": 13,
        "arabic": "فَذَٰلِكُمُ اللَّهُ رَبُّكُمُ الْحَقُّ ۖ فَمَاذَا بَعْدَ الْحَقِّ إِلَّا الضَّلَالُ ۖ فَأَنَّىٰ تُصْرَفُونَ",
        "french": "Tel est Allah, votre vrai Seigneur. Au-delà de la vérité, quoi d'autre sinon l'égarement ? Comment alors pouvez-vous vous détourner ?"
      },
      {
        "number": 14,
        "arabic": "كَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى الَّذِينَ فَسَقُوا أَنَّهُمْ لَا يُؤْمِنُونَ",
        "french": "Ainsi s'avère juste la parole de ton Seigneur contre les pervers : ils ne croiront pas."
      },
      {
        "number": 15,
        "arabic": "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ ۗ إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
        "french": "Dis : « Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? » Seuls les doués d'intelligence se rappellent."
      },
      {
        "number": 16,
        "arabic": "الَّذِينَ يُوفُونَ بِعَهْدِ اللَّهِ وَلَا يَنقُضُونَ الْمِيثَاقَ",
        "french": "Ceux qui remplissent leur pacte envers Allah et ne violent pas l'engagement."
      },
      {
        "number": 17,
        "arabic": "وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ وَيَخْشَوْنَ رَبَّهُمْ وَيَخَافُونَ سُوءَ الْحِسَابِ",
        "french": "Ceux qui joignent ce qu'Allah a ordonné de joindre, redoutent leur Seigneur et craignent le mal du calcul."
      },
      {
        "number": 18,
        "arabic": "وَالَّذِينَ صَبَرُوا ابْتِغَاءَ وَجْهِ رَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ أُولَٰئِكَ لَهُمْ عُقْبَى الدَّارِ",
        "french": "Ceux qui ont été patients dans la recherche de la face de leur Seigneur, qui accomplissent la prière, qui dépensent en secret et en public de ce que Nous leur avons attribué, et qui repoussent la mauvaise action par la bonne. Ceux-là auront la demeure finale."
      },
      {
        "number": 19,
        "arabic": "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ ۚ وَالْمَلَائِكَةُ يَدْخُلُونَ عَلَيْهِم مِّن كُلِّ بَابٍ",
        "french": "Les Jardins d'Éden, où ils entreront, ainsi que tous ceux de leurs ancêtres, conjoints et descendants qui seront vertueux. Les anges entreront auprès d'eux par toutes les portes."
      },
      {
        "number": 20,
        "arabic": "سَلَامٌ عَلَيْكُم بِمَا صَبَرْتُمْ ۚ فَنِعْمَ عُقْبَى الدَّارِ",
        "french": "« Paix sur vous, pour la patience que vous avez montrée ! » Qu'elle est bonne, la demeure finale !"
      },
      {
        "number": 21,
        "arabic": "وَالَّذِينَ يَتَخَطَّاهُمْ أَعْمَالُهُمْ أُولَٰئِكَ كَانُوا فِي النَّارِ خَالِدِينَ فِيهَا",
        "french": "Et ceux qui violent Notre pacte, s'en écartent, ceux-là seront dans le Feu où ils demeureront éternellement."
      },
      {
        "number": 22,
        "arabic": "فَأَمَّا الَّذِي أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَا ءَامُنِّي اقْرَأْ كِتَابِيَهْ",
        "french": "Celui à qui on remet son livre en sa main droite dira : « Tenez, lisez mon livre !"
      }
    ],
    "words": [
      {
        "word": "يَرْزُقُكُم",
        "translit": "yarzuqukum",
        "meaning": "Il vous pourvoit / Il vous donne la nourriture",
        "root": "ر - ز - ق",
        "rootMeaning": "nourrir / pourvoir / sustenter",
        "rootColor": 1,
        "emoji": "🍞",
        "funFactTitle": "Allah est ton fournisseur ultime !",
        "funFact": "La racine <strong>r-z-q</strong> veut dire « nourrir » ou « pourvoir ». <em>Yarzuqukum</em> = Il vous donne la nourriture — comme un restaurant infini qui sert tout le monde, gratuitement et sans interruption ! Le mot <em>rizq</em> = la provision, ce qu'Allah te donne. Et <em>razzāq</em> = le Grand Pourvoyeur. Même les oiseaux partent le matin le ventre vide et reviennent le soir rassasiés — Allah est <em>Ar-Razzāq</em>, Celui qui nourrit toute Sa création !",
        "related": "<span>رِزْق</span> (provision/nourriture), <span>رَزَّاق</span> (Grand Pourvoyeur), <span>أَرْزَقَ</span> (donner la provision)"
      },
      {
        "word": "يُوفُونَ",
        "translit": "yūfūna",
        "meaning": "ils remplissent / ils accomplissent",
        "root": "و - ف - ي",
        "rootMeaning": "accomplir / compléter / tenir sa promesse",
        "rootColor": 2,
        "emoji": "🤝",
        "funFactTitle": "Tenir sa promesse, c'est être un champion !",
        "funFact": "La racine <strong>w-f-y</strong> veut dire « accomplir » ou « compléter ». <em>Yūfūna</em> = ils remplissent, ils tiennent leur promesse — comme quelqu'un qui dit « je serai là à 15h » et qui arrive à l'heure ! Le mot <em>wafāʾ</em> = la fidélité, l'accomplissement. Et <em>awfā</em> = il a tenu sa promesse. Le verset 16 dit que les croyants remplissent leur pacte avec Allah. Le Prophète ﷺ était connu sous le nom d'Al-Amīn = le Digne de confiance !",
        "related": "<span>وَفَاء</span> (fidélité/promesse tenue), <span>أَوْفَىٰ</span> (accomplir/tenir sa parole), <span>مُوفِي</span> (celui qui accomplit)"
      },
      {
        "word": "مِيثَاقَ",
        "translit": "mīthāqa",
        "meaning": "le pacte / l'engagement solennel",
        "root": "و - ث - ق",
        "rootMeaning": "lier fortement / pacte / confiance",
        "rootColor": 3,
        "emoji": "🔗",
        "funFactTitle": "Le pacte avec Allah est le contrat le plus fort !",
        "funFact": "La racine <strong>w-th-q</strong> veut dire « lier solidement » ou « pacte ». <em>Mīthāq</em> = un pacte solennel, un engagement — comme un nœud très serré entre toi et Allah ! Le mot <em>awthāq</em> = les liens solides. Et <em>tawāthaqa</em> = se lier par un pacte. Le <em>mīthāq</em> entre Allah et les croyants est comme le contrat le plus sacré qui existe. Les hypocrites brisent ce pacte, mais les vrais croyants le gardent précieusement !",
        "related": "<span>مِيثَاق</span> (pacte/engagement solennel), <span>وَثِيقَة</span> (document solide/contrat), <span>تَوَاثَقَ</span> (se lier par un pacte)"
      },
      {
        "word": "يَدْرَءُونَ",
        "translit": "yadraʾūna",
        "meaning": "ils repoussent / ils écartent",
        "root": "د - ر - أ",
        "rootMeaning": "repousser / éloigner / détourner",
        "rootColor": 4,
        "emoji": "🛡️",
        "funFactTitle": "La bonne action = le bouclier contre la mauvaise !",
        "funFact": "La racine <strong>d-r-ʾ</strong> veut dire « repousser » ou « éloigner ». <em>Yadraʾūna</em> = ils repoussent — les croyants repoussent la mauvaise action par la bonne, comme un bouclier qui dévie les flèches ! Le mot <em>darʾ</em> = le repoussement, la défense. Et <em>adraʾa</em> = il a repoussé. Le Prophète ﷺ a dit : « Repousse le mal par le bien, et celui qui est en désaccord avec toi sera comme un ami proche. » C'est la meilleure technique anti-bullying qui existe !",
        "related": "<span>دَرْء</span> (repoussement/défense), <span>أَدْرَأَ</span> (repousser/écarter), <span>دِرْء</span> (ce qui écarte le danger)"
      },
      {
        "word": "عَدْنٍ",
        "translit": "ʿadnin",
        "meaning": "d'Éden / séjour de délices",
        "root": "ع - د - ن",
        "rootMeaning": "demeurer / séjourner / rester",
        "rootColor": 5,
        "emoji": "🌳",
        "funFactTitle": "Le Paradis = le meilleur séjour éternel !",
        "funFact": "La racine <strong>ʿ-d-n</strong> veut dire « séjourner » ou « demeurer ». <em>Jannāt ʿAdnin</em> = les Jardins d'Éden, les jardins de la demeure éternelle — comme un hôtel 5 étoiles où tu restes pour TOUJOURS ! Le mot <em>ʿadn</em> = le séjour permanent, l'établissement. Et <em>aʿdan</em> = il a demeuré, il est resté. Le mot <em>maʿdan</em> = une mine (un endroit où l'on reste pour extraire des trésors). Le Paradis est la plus belle mine de bonheur !",
        "related": "<span>عَدْن</span> (séjour permanent/Éden), <span>مَعْدِن</span> (mine/gisement), <span>أَعْدَنَ</span> (demeurer/s'établir)"
      }
    ],
    "quiz": [
      {
        "question": "Qui « repousse la mauvaise action par la bonne » (v18) ?",
        "options": [
          "les mécréants",
          "les anges",
          "les djinns",
          "les croyants patients"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie la racine <strong>ر - ز - ق</strong> dans <span class=\"arabic-inline\">يَرْزُقُكُم</span> ?",
        "options": [
          "punir",
          "dormir",
          "nourrir / pourvoir",
          "oublier"
        ],
        "correct": 2
      },
      {
        "question": "Selon le verset 15, qui se rappelle ?",
        "options": [
          "seulement les riches",
          "seulement les adultes",
          "seuls les doués d'intelligence",
          "seulement les anges"
        ],
        "correct": 2
      },
      {
        "question": "Que disent les anges aux gens du Paradis (v20) ?",
        "options": [
          "« Sortez d'ici ! »",
          "« Paix sur vous pour votre patience ! »",
          "« Attendez encore ! »",
          "« Travaillez plus ! »"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! 🌟 Tu as appris les versets centraux d'As-Sajdah ! Tu as découvert la racine <strong>ر - ز - ق</strong> (nourrir), la racine <strong>و - ف - ي</strong> (accomplir), la racine <strong>و - ث - ق</strong> (pacte), la racine <strong>د - ر - أ</strong> (repousser) et la racine <strong>ع - د - ن</strong> (demeurer). Repousse toujours le mal par le bien !"
  },
  {
    "id": "32-03",
    "surah": 32,
    "surahName": "As-Sajdah",
    "title": "As-Sajdah — Versets 23 à 30 : La Sounnah de Moussa et l'incitation à la foi",
    "shortTitle": "As-Sajdah (v.23-30)",
    "subtitle": "Allah a donné le Livre à Moussa comme guide. Le Jour du Jugement, les coupables ne pourront ni entendre ni voir ! C'est à Allah que tout retourne.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 23,
        "arabic": "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ فَلَا تَكُن فِي مِرْيَةٍ مِّن لِّقَائِهِ ۖ وَجَعَلْنَاهُ هُدًى لِّبَنِي إِسْرَائِيلَ",
        "french": "Nous avons certes donné le Livre à Moïse. Ne sois donc pas dans le doute au sujet de le rencontrer. Et Nous en avons fait un guide pour les Enfants d'Israël."
      },
      {
        "number": 24,
        "arabic": "وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا ۖ وَكَانُوا بِآيَاتِنَا يُوقِنُونَ",
        "french": "Nous avons fait d'eux des dirigeants qui guidaient selon Notre ordre, après qu'ils se soient montrés patients et qu'ils aient eu la certitude de Nos signes."
      },
      {
        "number": 25,
        "arabic": "إِنَّ رَبَّكَ هُوَ يَفْصِلُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ",
        "french": "Ton Seigneur, c'est Lui qui les jugera le Jour de la Résurrection au sujet de ce en quoi ils divergeaient."
      },
      {
        "number": 26,
        "arabic": "أَوَلَمْ يَهْدِ لَهُمْ كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّنَ الْقُرُونِ يَمْشُونَ فِي مَسَاكِنِهِمْ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ أَفَلَا يَسْمَعُونَ",
        "french": "Ne leur suffit-il pas que Nous ayons fait périr tant de générations avant eux, qu'ils marchent dans leurs demeures ? Il y a en cela des signes. N'entendent-ils donc pas ?"
      },
      {
        "number": 27,
        "arabic": "أَوَلَمْ يَرَوْا أَنَّا نَسُوقُ الْمَاءَ إِلَى الْأَرْضِ الْجُرُزِ فَنُخْرِجُ بِهِ زَرْعًا تَأْكُلُ مِنْهُ أَنْعَامُهُمْ وَأَنفُسُهُمْ ۖ أَفَلَا يُبْصِرُونَ",
        "french": "Ne voient-ils pas que Nous poussons l'eau vers une terre stérile, et que Nous en faisons sortir une culture dont mangent leurs bestiaux et eux-mêmes ? Ne voient-ils donc pas ?"
      },
      {
        "number": 28,
        "arabic": "وَيَقُولُونَ مَتَىٰ هَٰذَا الْفَتْحُ إِن كُنتُمْ صَادِقِينَ",
        "french": "Et ils disent : « Quand viendra ce Jugement, si vous êtes véridiques ? »"
      },
      {
        "number": 29,
        "arabic": "قُلْ يَوْمَ الْفَتْحِ لَا يَنفَعُ الَّذِينَ كَفَرُوا إِيمَانُهُمْ وَلَا هُمْ يُنظَرُونَ",
        "french": "Dis : « Le jour du Jugement, la foi de ceux qui n'ont pas cru ne leur profitera pas, et ils ne seront pas attendus. »"
      },
      {
        "number": 30,
        "arabic": "فَأَعْرِضْ عَنْهُمْ وَانتَظِرْ إِنَّهُم مُّنتَظِرُونَ",
        "french": "Détourne-toi d'eux et attends. Ils attendent aussi."
      }
    ],
    "words": [
      {
        "word": "يَفْصِلُ",
        "translit": "yafṣilu",
        "meaning": "Il juge / Il tranche / Il sépare",
        "root": "ف - ص - ل",
        "rootMeaning": "juger / trancher / séparer",
        "rootColor": 1,
        "emoji": "⚖️",
        "funFactTitle": "Allah est le Juge suprême du Jour du Jugement !",
        "funFact": "La racine <strong>f-ṣ-l</strong> veut dire « juger » ou « séparer ». <em>Yafṣilu</em> = Il tranche, Il juge — comme un arbitre qui sépare le vrai du faux ! Le mot <em>faṣl</em> = la décision, le jugement. Et <em>mufaṣṣil</em> = clair, distinct, séparé. Le Jour de la Résurrection, Allah <em>yafṣilu</em> entre les gens : qui a raison et qui a tort ? Seul Allah le sait avec certitude ! C'est pour cela qu'on dit <em>Yawn al-Faṣl</em> = le Jour de la Décision.",
        "related": "<span>فَصْل</span> (jugement/décision), <span>مُفَصَّل</span> (détaillé/séparé), <span>انْفِصَال</span> (séparation/indépendance)"
      },
      {
        "word": "نَسُوقُ",
        "translit": "nasūqu",
        "meaning": "Nous poussons / Nous dirigeons",
        "root": "س - و - ق",
        "rootMeaning": "pousser / mener / conduire",
        "rootColor": 2,
        "emoji": "💧",
        "funFactTitle": "Allah pousse l'eau comme un berger pousse ses moutons !",
        "funFact": "La racine <strong>s-w-q</strong> veut dire « pousser » ou « conduire ». <em>Nasūq</em> = Nous poussons — Allah dirige l'eau vers les terres sèches comme un berger qui mène ses moutons vers le meilleur pâturage ! Le mot <em>sāq</em> = le vendeur au marché (celui qui pousse ses marchandises). Et <em>siyāqah</em> = la conduite, la direction. L'eau coule exactement là où Allah la conduit, pour faire pousser la nourriture de tout le monde !",
        "related": "<span>سَاقَ</span> (pousser/conduire), <span>سُوق</span> (marché), <span>مَسَاق</span> (conduite/direction)"
      },
      {
        "word": "يُبْصِرُونَ",
        "translit": "yubṣirūna",
        "meaning": "ils voient / ils comprennent",
        "root": "ب - ص - ر",
        "rootMeaning": "voir / regarder / comprendre",
        "rootColor": 3,
        "emoji": "👁️",
        "funFactTitle": "Ouvre bien tes yeux pour voir les signes !",
        "funFact": "La racine <strong>b-ṣ-r</strong> veut dire « voir » ou « regarder ». <em>Yubṣirūna</em> = ils voient — mais Allah demande : « Ne voient-ils donc PAS ? » C'est-à-dire qu'ils ont des yeux mais ne voient PAS les signes ! Le mot <em>baṣīrah</em> = la vue intérieure, la clairvoyance (pas seulement les yeux physiques !). Et <em>abṣar</em> = les yeux. Le Coran distingue entre <em>abṣar</em> (les yeux du corps) et <em>baṣāʾir</em> (les yeux du cœur). La vraie vue est celle du cœur !",
        "related": "<span>بَصَر</span> (vue/vision), <span>بَصِيرَة</span> (clairvoyance/vue du cœur), <span>أَبْصَار</span> (yeux/regards)"
      },
      {
        "word": "أَئِمَّةً",
        "translit": "aʾimmah",
        "meaning": "des dirigeants / des guides / des imams",
        "root": "أ - م - م",
        "rootMeaning": "guider / précéder / diriger",
        "rootColor": 4,
        "emoji": "🧭",
        "funFactTitle": "Les meilleurs leaders sont ceux qui prient en premier !",
        "funFact": "La racine <strong>ʾ-m-m</strong> veut dire « précéder » ou « guider ». <em>Aʾimmah</em> = des dirigeants, des guides — comme un capitaine d'équipe qui montre le chemin ! Le mot <em>imām</em> = celui qui est devant, qui guide la prière. Et <em>ummah</em> = la communauté (celle qui suit le même guide). Allah a fait des croyants patients des <em>aʾimmah</em> parce qu'ils étaient les PREMIERS à être patients et à croire. Le vrai leader est celui qui mène par l'exemple !",
        "related": "<span>إِمَام</span> (guide/dirigeant), <span>أُمَّة</span> (communauté), <span>قُدْوَة</span> (modèle/exemple)"
      },
      {
        "word": "الْفَتْحُ",
        "translit": "al-fatḥu",
        "meaning": "le Jugement / la victoire / l'ouverture",
        "root": "ف - ت - ح",
        "rootMeaning": "ouvrir / juger / conquérir",
        "rootColor": 5,
        "emoji": "🗝️",
        "funFactTitle": "Le Jour de l'Ouverture = le Jugement final !",
        "funFact": "La racine <strong>f-t-ḥ</strong> veut dire « ouvrir » ou « juger ». <em>Al-Fatḥ</em> = l'ouverture, la victoire, le jugement — comme ouvrir une porte qui donne sur la Vérité ! Le mot <em>fataḥ</em> = il a ouvert. Et <em>miftāḥ</em> = la clé ! Les associateurs demandaient sarcastiquement : « Quand est-ce Jugement ? » Mais quand il arrivera, ils regretteront. <em>Fatḥ Makkah</em> = la conquête de La Mecque. Le Jour du <em>Fatḥ</em> = le Jour où tout sera révélé et jugé !",
        "related": "<span>فَتْح</span> (ouverture/victoire/jugement), <span>مِفْتَاح</span> (clé), <span>انْفَتَحَ</span> (s'ouvrir/se dévoiler)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">يَفْصِلُ</span> (yafṣilu) ?",
        "options": [
          "Il détruit",
          "Il crée",
          "Il oublie",
          "Il juge / tranche"
        ],
        "correct": 3
      },
      {
        "question": "Allah a fait des Enfants d'Israël des <span class=\"arabic-inline\">أَئِمَّةً</span> (guides) parce qu'ils étaient :",
        "options": [
          "riches et puissants",
          "patients et croyants",
          "grands et forts",
          "rapides et intelligents"
        ],
        "correct": 1
      },
      {
        "question": "Pourquoi Allah pousse-t-Il l'eau vers la terre stérile (v27) ?",
        "options": [
          "pour noyer les gens",
          "pour créer des rivières",
          "pour nettoyer la terre",
          "pour faire sortir une culture pour les animaux et les humains"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie la racine <strong>ف - ت - ح</strong> dans <span class=\"arabic-inline\">الْفَتْحُ</span> ?",
        "options": [
          "fermer",
          "cacher",
          "ouvrir / juger / conquérir",
          "détruire"
        ],
        "correct": 2
      }
    ],
    "completionText": "Masha'Allah ! 🕌 Tu as terminé la sourate As-Sajdah ! Tu as appris la racine <strong>ف - ص - ل</strong> (juger), la racine <strong>س - و - ق</strong> (pousser/conduire), la racine <strong>ب - ص - ر</strong> (voir), la racine <strong>أ - م - م</strong> (guider) et la racine <strong>ف - ت - ح</strong> (ouvrir/juger). Le vrai leader est celui qui guide par l'exemple et la patience !"
  },
  {
    "id": "33-01",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 1 à 8 : Le Prophète est plus proche des croyants",
    "shortTitle": "Al-Ahzab (v.1-8)",
    "subtitle": "Allah recommande au Prophète ﷺ de craindre Allah. Le Prophète est plus proche des croyants qu'ils ne le sont d'eux-mêmes !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
        "french": "Ô Prophète ! Crains Allah et n'obéis pas aux mécréants et aux hypocrites. Allah est Omniscient et Sage."
      },
      {
        "number": 2,
        "arabic": "وَاتَّبِعْ مَا يُوحَىٰ إِلَيْكَ مِن رَّبِّكَ ۚ إِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
        "french": "Suis ce qui t'est révélé de la part de ton Seigneur. Allah est Parfaitement Informé de ce que vous faites."
      },
      {
        "number": 3,
        "arabic": "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
        "french": "Et place ta confiance en Allah. Allah suffit comme protecteur."
      },
      {
        "number": 4,
        "arabic": "مَّا جَعَلَ اللَّهُ لِرَجُلٍ مِّن قَلْبَيْنِ فِي جَوْفِهِ ۚ وَمَا جَعَلَ أَزْوَاجَكُمُ اللَّائِي تُظَاهِرُونَ مِنْهُنَّ أُمَّهَاتِكُمْ ۚ وَمَا جَعَلَ أَدْعِيَاءَكُمْ أَبْنَاءَكُمْ ۚ ذَٰلِكُمْ قَوْلُكُم بِأَفْوَاهِكُمْ ۖ وَاللَّهُ يَقُولُ الْحَقَّ وَهُوَ يَهْدِي السَّبِيلَ",
        "french": "Allah n'a pas mis à l'homme deux cœurs dans sa poitrine. Il n'a point assimilé à vos mères vos épouses dont vous prononcez la formule de désaveu. Et Il n'a point fait de vos enfants adoptifs vos propres enfants. Ce sont là des propos de vos bouches. Allah dit la vérité et Il montre le chemin."
      },
      {
        "number": 5,
        "arabic": "ادْعُوهُمْ لِآبَائِهِمْ هُوَ أَقْسَطُ عِندَ اللَّهِ ۚ فَإِن لَّمْ تَعْلَمُوا آبَاءَهُمْ فَإِخْوَانُكُمْ فِي الدِّينِ وَمَوَالِيكُمْ ۚ وَلَيْسَ عَلَيْكُمْ جُنَاحٌ فِيمَا أَخْطَأْتُم بِهِ وَلَٰكِن مَّا تَعَمَّدَتْ قُلُوبُكُمْ ۚ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        "french": "Appelez-les du nom de leurs pères : c'est plus juste auprès d'Allah. Si vous ne connaissez pas leurs pères, alors ils sont vos frères en religion et vos protégés. Vous ne commettez aucun péché pour ce que vous faites par erreur, mais seulement pour ce que vos cœurs font délibérément. Allah est Pardonneur et Miséricordieux."
      },
      {
        "number": 6,
        "arabic": "النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ وَأَزْوَاجُهُ أُمَّهَاتُهُمْ ۚ وَأُولُو الْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍ فِي كِتَابِ اللَّهِ مِنَ الْمُؤْمِنِينَ وَالْمُهَاجِرِينَ إِلَّا أَن تَفْعَلُوا إِلَىٰ أَوْلِيَائِكُم مَّعْرُوفًا ۚ كَانَ ذَٰلِكَ فِي الْكِتَابِ مَسْطُورًا",
        "french": "Le Prophète a plus de droit sur les croyants qu'ils n'en ont sur eux-mêmes ; et ses épouses sont leurs mères. Les proches parents ont des droits entre eux selon le Livre d'Allah, plus que les croyants et les émigrés, à moins que vous ne fassiez un acte de bienveillance envers vos alliés. Cela est inscrit dans le Livre."
      },
      {
        "number": 7,
        "arabic": "وَإِذْ أَخَذْنَا مِنَ النَّبِيِّينَ مِيثَاقَهُمْ وَمِنكَ وَمِن نُّوحٍ وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَى ابْنِ مَرْيَمَ ۚ وَأَخَذْنَا مِنْهُم مِّيثَاقًا غَلِيظًا",
        "french": "Et rappelez-vous le moment où Nous avons pris des prophètes leur engagement, le tien, celui de Noé, d'Abraham, de Moïse et de Jésus, fils de Marie. Nous avons pris d'eux un engagement solennel."
      },
      {
        "number": 8,
        "arabic": "لِّيَسْأَلَ الصَّادِقِينَ عَن صِدْقِهِمْ ۚ وَأَعَدَّ لِلْكَافِرِينَ عَذَابًا أَلِيمًا",
        "french": "afin qu'Il interroge les véridiques sur leur véracité. Et Il a préparé pour les mécréants un châtiment douloureux."
      }
    ],
    "words": [
      {
        "word": "اتَّقِ",
        "translit": "ittaqi",
        "meaning": "crains / sois pieux",
        "root": "و - ق - ي",
        "rootMeaning": "craindre / protéger / pieux",
        "rootColor": 1,
        "emoji": "🛡️",
        "funFactTitle": "La taqwa = le meilleur bouclier du monde !",
        "funFact": "La racine <strong>w-q-y</strong> veut dire « craindre » ou « se protéger ». <em>Ittaqī</em> = crains Allah, protège-toi — comme mettre une armure invisible qui te protège du mal ! Le mot <em>taqwā</em> = la piété, la conscience d'Allah. C'est comme un bouclier : plus il est solide, plus tu es protégé ! Et <em>waqā</em> = il a protégé, il a préservé. Le Prophète ﷺ a dit : « La taqwā est ici » en pointant son cœur. Le vrai bouclier est dans ton cœur !",
        "related": "<span>تَقْوَىٰ</span> (piété/conscience d'Allah), <span>وَقَىٰ</span> (protéger/préserver), <span>وِقَايَة</span> (protection/bouclier)"
      },
      {
        "word": "وَكِيلًا",
        "translit": "wakīlan",
        "meaning": "protecteur / mandataire / suffisant",
        "root": "و - ك - ل",
        "rootMeaning": "confier / déléguer / se fier",
        "rootColor": 2,
        "emoji": "🤝",
        "funFactTitle": "Allah suffit comme meilleur protecteur !",
        "funFact": "La racine <strong>w-k-l</strong> veut dire « confier » ou « déléguer ». <em>Wakīl</em> = un protecteur, un mandataire — comme un avocat ultra-puissant qui défend ta cause ! Le verset dit : <em>kafā bi-Allāhi wakīlan</em> = Allah suffit comme protecteur ! Le mot <em>tawakkul</em> = la confiance en Allah. Et <em>wakāla</em> = la délégation, la procuration. Quand tu as Allah comme <em>wakīl</em>, tu n'as besoin de personne d'autre !",
        "related": "<span>وَكِيل</span> (protecteur/mandataire), <span>تَوَكُّل</span> (confiance en Allah), <span>وَكَالَة</span> (délégation/mandat)"
      },
      {
        "word": "أَقْسَطُ",
        "translit": "aqṣaṭu",
        "meaning": "le plus juste / le plus équitable",
        "root": "ق - س - ط",
        "rootMeaning": "être juste / équitable / droit",
        "rootColor": 3,
        "emoji": "⚖️",
        "funFactTitle": "La justice, c'est la balance parfaite !",
        "funFact": "La racine <strong>q-s-ṭ</strong> veut dire « être juste » ou « équitable ». <em>Aqṣaṭu</em> = le plus juste — comme une balance qui ne penche jamais d'un côté ! Le mot <em>qisṭ</em> = la justice, l'équité. Et <em>qāṣiṭ</em> = juste, équitable. Le verset dit qu'appeler les enfants adoptifs du nom de leurs vrais pères est plus <em>aqṣaṭ</em> = plus juste. En arabe, <em>al-Qisṭ</em> est aussi un nom d'Allah : le Juste par excellence !",
        "related": "<span>قِسْط</span> (justice/équité), <span>قَاسِط</span> (juste/équitable), <span>مُقْسِط</span> (celui qui rend justice)"
      },
      {
        "word": "أَوْلَىٰ",
        "translit": "awlā",
        "meaning": "plus digne / a plus de droit",
        "root": "و - ل - ي",
        "rootMeaning": "être proche / mériter / protéger",
        "rootColor": 4,
        "emoji": "👑",
        "funFactTitle": "Le Prophète ﷺ est le plus proche des croyants !",
        "funFact": "La racine <strong>w-l-y</strong> veut dire « être proche » ou « mériter ». <em>Awlā</em> = plus digne, plus proche — comme le capitaine de l'équipe qui est le plus concerné par la victoire ! Le verset dit que le Prophète ﷺ est <em>awlā</em> = a plus de droit sur les croyants qu'ils n'en ont sur eux-mêmes. Le mot <em>walī</em> = un ami proche, un protecteur. Et <em>walāyah</em> = l'autorité, la proximité. Aimer le Prophète ﷺ, c'est être proche de lui !",
        "related": "<span>وَلِيّ</span> (protecteur/ami proche), <span>وَلَايَة</span> (proximité/autorité), <span>تَوَلَّىٰ</span> (prendre en charge)"
      },
      {
        "word": "مَسْطُورًا",
        "translit": "masṭūran",
        "meaning": "inscrit / écrit",
        "root": "س - ط - ر",
        "rootMeaning": "écrire / enregistrer / tracer",
        "rootColor": 5,
        "emoji": "📜",
        "funFactTitle": "Les lois d'Allah sont écrites pour toujours !",
        "funFact": "La racine <strong>s-ṭ-r</strong> veut dire « écrire » ou « enregistrer ». <em>Masṭūr</em> = inscrit, écrit — comme une règle gravée dans le marbre ! Le mot <em>sijill</em> = un registre, un parchemin écrit. Et <em>satar</em> = un voile, un rideau (ce qui cache). Ce qui est <em>masṭūr</em> dans le Livre d'Allah est écrit depuis toujours et ne changera jamais ! Le mot <em>istara</em> = il a dévoilé, il a révélé. Ce qui est écrit dans le Livre d'Allah est la Vérité éternelle !",
        "related": "<span>سَطْر</span> (ligne/écriture), <span>سِجِلّ</span> (registre/parchemin), <span>مَسْطُور</span> (inscrit/écrit)"
      }
    ],
    "quiz": [
      {
        "question": "Le Prophète ﷺ est plus proche des croyants que... (v6)",
        "options": [
          "que leurs propres enfants",
          "qu'eux-mêmes",
          "que les anges",
          "que leurs parents"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">وَكِيلًا</span> (wakīlan) ?",
        "options": [
          "un ennemi",
          "un serviteur",
          "protecteur / mandataire",
          "un disciple"
        ],
        "correct": 2
      },
      {
        "question": "Allah dit qu'Il n'a pas mis à l'homme quoi dans sa poitrine (v4) ?",
        "options": [
          "deux yeux",
          "deux cœurs",
          "deux bras",
          "deux langues"
        ],
        "correct": 1
      },
      {
        "question": "La racine <strong>ق - س - ط</strong> dans <span class=\"arabic-inline\">أَقْسَطُ</span> signifie :",
        "options": [
          "le plus fort",
          "le plus rapide",
          "le plus juste / équitable",
          "le plus grand"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! 🌟 Tu as commencé la sourate Al-Ahzab ! Tu as découvert la racine <strong>و - ق - ي</strong> (craindre), la racine <strong>و - ك - ل</strong> (confier), la racine <strong>ق - س - ط</strong> (être juste), la racine <strong>و - ل - ي</strong> (être proche) et la racine <strong>س - ط - ر</strong> (écrire). Le Prophète ﷺ est plus proche des croyants qu'eux-mêmes !"
  },
  {
    "id": "33-02",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 9 à 18 : La bataille des Coalisés",
    "shortTitle": "Al-Ahzab (v.9-18)",
    "subtitle": "Les coalisés ont attaqué Médine de tous les côtés ! Mais Allah a envoyé un vent et des anges invisibles pour aider les croyants !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 9,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُيُوشٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا ۚ وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا",
        "french": "Ô croyants ! Rappelez-vous la grâce d'Allah envers vous, quand des armées sont venues contre vous. Nous avons lancé contre eux un vent et des soldats que vous n'avez pas vus. Allah voyait parfaitement ce que vous faisiez."
      },
      {
        "number": 10,
        "arabic": "إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا",
        "french": "Quand ils sont venus contre vous par au-dessus et par en-dessous, quand les regards étaient troublés, que les cœurs remontaient aux gorges et que vous faisiez des conjectures sur Allah."
      },
      {
        "number": 11,
        "arabic": "هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا",
        "french": "C'est là que les croyants ont été éprouvés et ont été secoués d'un sévère tremblement."
      },
      {
        "number": 12,
        "arabic": "وَإِذْ يَقُولُ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ مَّا وَعَدَنَا اللَّهُ وَرَسُولُهُ إِلَّا غُرُورًا",
        "french": "Et quand les hypocrites et ceux dont les cœurs sont malades disaient : « Allah et Son messager ne nous ont promis que des illusions. »"
      },
      {
        "number": 13,
        "arabic": "وَإِذْ قَالَت طَّائِفَةٌ مِّنْهُمْ يَا أَهْلَ يَثْرِبَ لَا مُقَامَ لَكُمْ فَارْجِعُوا ۚ وَيَسْتَأْذِنُ فَرِيقٌ مِّنْهُمُ النَّبِيَّ يَقُولُونَ إِنَّ بُيُوتَنَا عَوْرَةٌ وَمَا هِيَ بِعَوْرَةٍ ۖ إِن يُرِيدُونَ إِلَّا الْفِرَارَ",
        "french": "Et quand un groupe parmi eux dit : « Ô gens de Yathrib (Médine) ! Il n'y a plus de place pour vous ici. Retournez ! » Et un groupe d'entre eux demande au Prophète la permission de partir, en disant : « Nos maisons sont sans protection. » Alors qu'elles ne sont pas sans protection. Ils ne veulent que fuir."
      },
      {
        "number": 14,
        "arabic": "وَلَوْ دُخِلَتْ عَلَيْهِم مِّنْ أَطْرَافِهَا ثُمَّ سُئِلُوا الْفِتْنَةَ لَآتَوْهَا وَمَا تَلَبَّثُوا بِهَا إِلَّا يَسِيرًا",
        "french": "Si l'ennemi y était entré par tous les côtés et qu'on leur demandât de renier, ils l'auraient fait sans trop tarder."
      },
      {
        "number": 15,
        "arabic": "وَلَقَدْ كَانُوا عَاهَدُوا اللَّهَ مِن قَبْلُ لَا يُوَلُّونَ الْأَدْبَارَ ۚ وَعَهْدُ اللَّهِ كَانَ مَسْئُولًا",
        "french": "Ils avaient en effet pris auparavant un engagement envers Allah de ne pas tourner le dos. Et l'engagement envers Allah sera interrogé."
      },
      {
        "number": 16,
        "arabic": "قُل لَّن يَنفَعَكُمُ الْفِرَارُ إِن فَرَرْتُم مِّنَ الْمَوْتِ أَوِ الْقَتْلِ وَإِذًا لَّا تُمَتَّعُونَ إِلَّا قَلِيلًا",
        "french": "Dis : « La fuite ne vous sera d'aucune utilité si c'est la mort ou le combat que vous fuyez. Et vous ne jouirez alors de la vie que très peu. »"
      },
      {
        "number": 17,
        "arabic": "قُلْ مَن ذَا الَّذِي يَعْصِمُكُم مِّنَ اللَّهِ إِنْ أَرَادَ بِكُمْ سُوءًا أَوْ أَرَادَ بِكُمْ رَحْمَةً ۚ وَلَا يَجِدُونَ لَهُم مِّن دُونِ اللَّهِ وَلِيًّا وَلَا نَصِيرًا",
        "french": "Dis : « Qui donc peut vous protéger d'Allah, s'Il vous veut du mal ou s'Il vous veut une miséricorde ? » Ils ne trouveront pour eux, en dehors d'Allah, ni allié ni secoureur."
      },
      {
        "number": 18,
        "arabic": "قَدْ يَعْلَمُ اللَّهُ الْمُعَوِّقِينَ مِنكُمْ وَالْقَائِلِينَ لِإِخْوَانِهِمْ هَلُمَّ إِلَيْنَا ۖ وَلَا يَأْتُونَ الْبَأْسَ إِلَّا قَلِيلًا",
        "french": "Allah connaît bien ceux qui, parmi vous, entravent les autres et ceux qui disent à leurs frères : « Venez à nous ! » Et ils ne viennent au combat qu'à peine."
      }
    ],
    "words": [
      {
        "word": "رِيحًا",
        "translit": "rīḥan",
        "meaning": "un vent (tempête)",
        "root": "ر - و - ح",
        "rootMeaning": "vent / souffle / esprit",
        "rootColor": 1,
        "emoji": "💨",
        "funFactTitle": "Le vent d'Allah a chassé les ennemis !",
        "funFact": "La racine <strong>r-w-ḥ</strong> veut dire « vent » ou « souffle ». <em>Rīḥ</em> = un vent — Allah a envoyé un vent puissant contre les coalisés qui a détruit leurs tentes et renversé leurs chaudrons ! Le mot <em>rūḥ</em> = l'esprit, l'âme (le souffle de vie). La même racine donne « vent » et « esprit » car les deux sont invisibles mais puissants ! En arabe, on dit que le <em>rūḥ</em> vient du mot <em>rīḥ</em> car l'âme est comme un vent invisible dans le corps.",
        "related": "<span>رُوح</span> (esprit/âme), <span>رِيَاح</span> (vents), <span>مَرَاح</span> (lieu où souffle le vent)"
      },
      {
        "word": "زَاغَتِ",
        "translit": "zāghati",
        "meaning": "se sont troublés / ont dévié",
        "root": "ز - و - غ",
        "rootMeaning": "dévier / se troubler / errer",
        "rootColor": 2,
        "emoji": "😵",
        "funFactTitle": "Les yeux étaient tellement effrayés qu'ils tremblaient !",
        "funFact": "La racine <strong>z-w-gh</strong> veut dire « dévier » ou « se troubler ». <em>Zāghat al-abṣār</em> = les regards étaient troublés — comme quand tu regardes en bas d'un gratte-ciel et que tes yeux font des zigzags ! Le mot <em>zugh</em> = l'égarement, la déviation. Et <em>yazīghu</em> = il dévie, il trompe. Les croyants étaient tellement terrifiés par l'armée ennemie que leurs yeux tremblaient ! Mais leur foi les a sauvés.",
        "related": "<span>زَيْغ</span> (égarement/déviation), <span>زَاغَ</span> (dévier/se troubler), <span>أَزَاغَ</span> (égarer/détourner)"
      },
      {
        "word": "زُلْزِلُوا",
        "translit": "zulzilū",
        "meaning": "ils ont été secoués / tremblés",
        "root": "ز - ل - ز - ل",
        "rootMeaning": "secouer / trembler / ébranler",
        "rootColor": 3,
        "emoji": "🌍",
        "funFactTitle": "Un tremblement de terre de la peur !",
        "funFact": "La racine <strong>z-l-z-l</strong> veut dire « secouer » ou « trembler ». <em>Zulzilū zilzālan shadīdan</em> = ils ont été secoués d'un SÉVÈRE tremblement — comme un tremblement de terre, mais de la PEUR ! Le mot <em>zilzāl</em> = le séisme, la secousse. Et <em>zalzala</em> = la terre tremble. La sourate 99 s'appelle <em>Al-Zalzalah</em> ! Même les plus courageux ont tremblé ce jour-là face à l'immense armée ennemie.",
        "related": "<span>زَلْزَلَة</span> (séisme/tremblement de terre), <span>زُلْزِلَ</span> (secouer/ébranler), <span>مُزَلْزِل</span> (ce qui fait trembler)"
      },
      {
        "word": "يَعْصِمُكُم",
        "translit": "yaʿṣimukum",
        "meaning": "Il vous protège / Il vous préserve",
        "root": "ع - ص - م",
        "rootMeaning": "protéger / préserver / retenir",
        "rootColor": 4,
        "emoji": "🛡️",
        "funFactTitle": "Allah est le seul vrai bouclier !",
        "funFact": "La racine <strong>ʿ-ṣ-m</strong> veut dire « protéger » ou « préserver ». <em>Yaʿṣimukum</em> = Il vous protège — comme un parasol géant qui te protège de la pluie ! Le mot <em>iʿṣām</em> = la protection, la préservation. Et <em>ʿāṣim</em> = protecteur, défenseur. Le verset demande : qui peut te protéger d'Allah ? La réponse : PERSONNE ! Si Allah te protège, personne ne peut te nuire. C'est la plus grande sécurité qui existe !",
        "related": "<span>عِصْمَة</span> (protection/préservation), <span>مَعْصُوم</span> (protégé/préservé), <span>اعْتَصَمَ</span> (se réfugier/s'accrocher)"
      },
      {
        "word": "يَعْلَمُ",
        "translit": "yaʿlamu",
        "meaning": "Il sait / Il connaît",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 5,
        "emoji": "👁️",
        "funFactTitle": "Rien n'échappe à la connaissance d'Allah !",
        "funFact": "La racine <strong>ʿ-l-m</strong> veut dire « savoir » ou « connaître ». <em>Yaʿlam</em> = Il sait — Allah sait TOUT, même ce que tu caches dans ton cœur ! Le mot <strong>ʿilm</strong> = la science, la connaissance. Et <em>ʿalīm</em> = le Savant, Celui qui sait tout. Le verset dit qu'Allah <em>yaʿlam</em> ceux qui entravent les autres et les lâches. Tu ne peux rien cacher à Allah ! Mais c'est rassurant : Il sait aussi toutes tes bonnes actions !",
        "related": "<span>عِلْم</span> (science/connaissance), <span>عَلِيم</span> (Omniscient/Savant), <span>تَعَلَّمَ</span> (apprendre/étudier)"
      }
    ],
    "quiz": [
      {
        "question": "Qu'est-ce qu'Allah a envoyé contre les coalisés (v9) ?",
        "options": [
          "de la pluie",
          "un feu",
          "un vent et des soldats invisibles",
          "des serpents"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">زَاغَتِ</span> (zāghati) au sujet des regards ?",
        "options": [
          "ils se sont fermés",
          "ils se sont troublés / déviés",
          "ils se sont agrandis",
          "ils se sont assoupis"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">يَعْصِمُكُم</span> (yaʿṣimukum) ?",
        "options": [
          "Il vous nourrit",
          "Il vous protège / préserve",
          "Il vous oublie",
          "Il vous enseigne"
        ],
        "correct": 1
      },
      {
        "question": "Les hypocrites disaient que leurs maisons étaient (v13) :",
        "options": [
          "très grandes",
          "sans protection (pour avoir une excuse de fuir)",
          "très belles",
          "déjà détruites"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! ⚔️ Tu as découvert la bataille des Coalisés ! Tu as appris la racine <strong>ر - و - ح</strong> (vent), la racine <strong>ز - و - غ</strong> (dévier), la racine <strong>ز - ل - ز - ل</strong> (secouer), la racine <strong>ع - ص - م</strong> (protéger) et la racine <strong>ع - ل - م</strong> (savoir). Allah a envoyé un vent invisible pour sauver les croyants !"
  },
  {
    "id": "33-03",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 19 à 27 : La victoire d'Allah contre les coalisés",
    "shortTitle": "Al-Ahzab (v.19-27)",
    "subtitle": "Les ennemis pensaient que les musulmans étaient faibles, mais Allah les a détruits ! Les croyants patients ont reçu le butin et la victoire !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 19,
        "arabic": "أَشِحَّةً عَلَيْكُمْ ۖ فَإِذَا جَاءَ الْخَوْفُ رَأَيْتَهُمْ يَنظُرُونَ إِلَيْكَ تَدُورُ أَعْيُنُهُمْ كَالَّذِي يُغْشَىٰ عَلَيْهِ مِنَ الْمَوْتِ ۖ فَإِذَا ذَهَبَ الْخَوْفُ سَلَقُوكُم بِأَلْسِنَةٍ حِدَادٍ أَشِحَّةً عَلَى الْخَيْرِ ۚ أُولَٰئِكَ لَمْ يُؤْمِنُوا فَأَحْبَطَ اللَّهُ أَعْمَالَهُمْ ۚ وَكَانَ ذَٰلِكَ عَلَى اللَّهِ يَسِيرًا",
        "french": "Avares envers vous. Puis, quand la peur survient, tu les vois te regarder avec des yeux écarquillés, comme celui qui s'évanouit de mort. Puis, quand la peur disparaît, ils vous frappent de leurs langues acérées, avares du bien. Ceux-là n'ont jamais cru. Allah a rendu vaines leurs actions. Cela est facile pour Allah."
      },
      {
        "number": 20,
        "arabic": "يَحْسَبُونَ الْأَحْزَابَ لَمْ يَذْهَبُوا ۖ وَإِن يَأْتِ الْأَحْزَابُ يَوَدُّوا لَوْ أَنَّهُم بَادُونَ فِي الْأَعْرَابِ يَسْأَلُونَ عَنْ أَنبَائِكُمْ ۖ وَلَوْ كَانُوا فِيكُم مَّا قَاتَلُوا إِلَّا قَلِيلًا",
        "french": "Ils pensent que les coalisés ne sont pas partis. Et si les coalisés revenaient, ils aimeraient être parmi les bédouins pour demander de vos nouvelles. S'ils étaient parmi vous, ils ne combattraient que très peu."
      },
      {
        "number": 21,
        "arabic": "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا",
        "french": "En effet, vous avez dans le Messager d'Allah un excellent modèle, pour quiconque espère en Allah et au Jour dernier et invoque Allah fréquemment."
      },
      {
        "number": 22,
        "arabic": "وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ وَصَدَقَ اللَّهُ وَرَسُولُهُ ۚ وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا",
        "french": "Quand les croyants virent les coalisés, ils dirent : « Voilà ce qu'Allah et Son Messager nous avaient promis. Allah et Son Messager disaient la vérité. » Cela n'a fait qu'augmenter leur foi et leur soumission."
      },
      {
        "number": 23,
        "arabic": "مِنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ۖ فَمِنْهُم مَّن قَضَىٰ نَحْبَهُ وَمِنْهُم مَّن يَنتَظِرُ ۖ وَمَا بَدَّلُوا تَبْدِيلًا",
        "french": "Parmi les croyants, des hommes ont été sincères dans leur engagement envers Allah. Certains d'entre eux ont accompli leur vœu (sont morts en martyr), d'autres attendent encore. Et ils n'ont pas changé."
      },
      {
        "number": 24,
        "arabic": "لِيَجْزِيَ اللَّهُ الصَّادِقِينَ بِصِدْقِهِمْ وَيُعَذِّبَ الْمُنَافِقِينَ إِن شَاءَ أَوْ يَتُوبَ عَلَيْهِمْ ۚ إِنَّ اللَّهَ كَانَ غَفُورًا رَّحِيمًا",
        "french": "Afin qu'Allah récompense les véridiques pour leur sincérité, et châtie les hypocrites s'Il veut, ou leur accorde Son pardon. Allah est Pardonneur et Miséricordieux."
      },
      {
        "number": 25,
        "arabic": "وَرَدَّ اللَّهُ الَّذِينَ كَفَرُوا بِغَيْظِهِمْ لَمْ يَنَالُوا خَيْرًا ۚ وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ ۚ وَكَانَ اللَّهُ قَوِيًّا عَزِيزًا",
        "french": "Et Allah a renvoyé les mécréants dans leur colère, sans qu'ils aient obtenu aucun avantage. Et Allah a épargné aux croyants le combat. Allah est Fort et Puissant."
      },
      {
        "number": 26,
        "arabic": "وَأَنزَلَ الَّذِينَ ظَاهَرُوهُم مِّنْ أَهْلِ الْكِتَابِ مِن صَيَاصِيهِمْ وَقَذَفَ فِي قُلُوبِهِمُ الرُّعْبَ فَرِيقًا تَقْتُلُونَ وَتَأْسِرُونَ فَرِيقًا",
        "french": "Et Il a fait descendre ceux des Gens du Livre qui les avaient soutenus de leurs forteresses, et Il a jeté la terreur dans leurs cœurs. Vous en avez tué une partie et vous avez fait captifs une autre partie."
      },
      {
        "number": 27,
        "arabic": "وَأَوْرَثَكُمْ أَرْضَهُمْ وَدِيَارَهُمْ وَأَمْوَالَهُمْ وَأَرْضًا لَّمْ تَطَأُوهَا ۚ وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرًا",
        "french": "Et Il vous a fait hériter de leur terre, de leurs demeures, de leurs biens, et d'une terre que vous n'aviez jamais foulée. Et Allah est Omnipotent."
      }
    ],
    "words": [
      {
        "word": "أُسْوَةٌ",
        "translit": "uswah",
        "meaning": "un modèle / un exemple",
        "root": "أ - س - و",
        "rootMeaning": "modèle / exemple / imiter",
        "rootColor": 1,
        "emoji": "🌟",
        "funFactTitle": "Le Prophète ﷺ est le meilleur modèle de l'univers !",
        "funFact": "La racine <strong>ʾ-s-w</strong> veut dire « modèle » ou « exemple ». <em>Uswah ḥasanah</em> = un excellent modèle — le Prophète ﷺ est LE meilleur exemple à suivre, comme un GPS qui te guide vers le Paradis ! Le mot <em>ihtadā bihi</em> = il a pris modèle sur lui. Et <em>tāsaʾ</em> = ressembler à, imiter. Le verset 21 est un des plus importants du Coran : si tu veux réussir, imite le Prophète ﷺ dans tout ce qu'il faisait !",
        "related": "<span>أُسْوَة</span> (modèle/exemple à suivre), <span>تَأَسَّىٰ</span> (prendre modèle sur/imiter), <span>إِسْوَة</span> (manière d'agir)"
      },
      {
        "word": "صَدَقُوا",
        "translit": "ṣadaqū",
        "meaning": "ils ont été sincères / véridiques",
        "root": "ص - د - ق",
        "rootMeaning": "vérité / sincérité / amitié",
        "rootColor": 2,
        "emoji": "💎",
        "funFactTitle": "Les vrais héros sont ceux qui tiennent leurs promesses !",
        "funFact": "La racine <strong>ṣ-d-q</strong> veut dire « être sincère » ou « dire la vérité ». <em>Ṣadaqū</em> = ils ont été sincères — comme un ami qui ne ment JAMAIS ! Le mot <em>ṣidq</em> = la sincérité, la vérité. Et <em>ṣādiq</em> = un ami sincère. La même racine donne <em>ṣadaqah</em> = l'aumône (car elle vient d'un cœur sincère). Le mot <em>ṣadūq</em> = une bague de fiançailles (symbole de sincérité en amour) !",
        "related": "<span>صِدْق</span> (sincérité/vérité), <span>صَدِيق</span> (ami sincère), <span>صَدَقَة</span> (aumône/charité)"
      },
      {
        "word": "قَذَفَ",
        "translit": "qadhafa",
        "meaning": "Il a jeté / lancé",
        "root": "ق - ذ - ف",
        "rootMeaning": "jeter / lancer / accuser",
        "rootColor": 3,
        "emoji": "⚡",
        "funFactTitle": "Allah a jeté la terreur dans les cœurs des ennemis !",
        "funFact": "La racine <strong>q-dh-f</strong> veut dire « jeter » ou « lancer ». <em>Qadhafa</em> = Il a jeté — Allah a lancé la terreur (la peur) dans les cœurs des ennemis, comme un lance-pierres qui tire des boules de peur ! Le mot <em>qadhf</em> = le jet, mais aussi l'accusation fausse. Et <em>miqdhāf</em> = une chose lancée. En arabe moderne, <em>qadhafa</em> = accuser faussement. Allah a « jeté » la peur : sans une seule flèche, les ennemis se sont enfuis !",
        "related": "<span>قَذْف</span> (jet/accusation), <span>مِقْذَاف</span> (lance-pierres), <span>مُقَذَّف</span> (ce qui est lancé/jeté)"
      },
      {
        "word": "الرُّعْبَ",
        "translit": "ar-ruʿba",
        "meaning": "la terreur / la peur intense",
        "root": "ر - ع - ب",
        "rootMeaning": "effroi / terreur / crainte",
        "rootColor": 4,
        "emoji": "😱",
        "funFactTitle": "La peur est une arme invisible d'Allah !",
        "funFact": "La racine <strong>r-ʿ-b</strong> veut dire « terreur » ou « effroi ». <em>Ar-ruʿb</em> = la peur intense, la terreur — comme un cauchemar qui se réalise ! Le mot <em>ruʿb</em> = la frayeur extrême. Et <em>irʿāb</em> = la peur, l'effroi. Allah a jeté <em>ar-ruʿb</em> dans les cœurs des ennemis : ils étaient 10 000 et ils sont PARTIS sans combattre ! C'est plus puissant que n'importe quelle arme. La peur vient d'Allah.",
        "related": "<span>رُعْب</span> (terreur/effroi), <span>رَاعِب</span> (terrifiant), <span>ارْتَاعَ</span> (être terrifié/trembler de peur)"
      },
      {
        "word": "أَوْرَثَكُمْ",
        "translit": "awrathakum",
        "meaning": "Il vous a fait hériter",
        "root": "و - ر - ث",
        "rootMeaning": "hériter / laisser en héritage",
        "rootColor": 5,
        "emoji": "🏆",
        "funFactTitle": "Allah a donné aux croyants le plus grand héritage !",
        "funFact": "La racine <strong>w-r-th</strong> veut dire « hériter ». <em>Awrathakum</em> = Il vous a fait hériter — Allah a donné aux musulmans les terres, les maisons et les trésors des ennemis vaincus ! Le mot <em>wirāthah</em> = l'héritage, la succession. Et <em>wārith</em> = l'héritier. Al-Wārith est l'un des 99 noms d'Allah : Celui à qui tout revient après la mort de tout le monde ! Quand tu hérites en islam, tu dois distribuer avec justice selon le Coran.",
        "related": "<span>وِرَاثَة</span> (héritage/succession), <span>وَارِث</span> (héritier), <span>مِيرَاث</span> (biens d'héritage)"
      }
    ],
    "quiz": [
      {
        "question": "Le verset 21 dit que le Prophète ﷺ est un excellent <span class=\"arabic-inline\">أُسْوَةٌ</span>. Que signifie ce mot ?",
        "options": [
          "un soldat",
          "un roi",
          "un marchand",
          "un modèle / un exemple"
        ],
        "correct": 3
      },
      {
        "question": "Comment les croyants ont-ils réagi en voyant les coalisés (v22) ?",
        "options": [
          "ils ont fui",
          "ils ont pleuré",
          "ils ont dormi",
          "ils ont dit que c'était la promesse d'Allah et leur foi a augmenté"
        ],
        "correct": 3
      },
      {
        "question": "Quelle arme invisible Allah a-t-Il utilisée contre les ennemis (v26) ?",
        "options": [
          "la pluie",
          "le feu",
          "la terreur jetée dans leurs cœurs",
          "le froid"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>و - ر - ث</strong> dans <span class=\"arabic-inline\">أَوْرَثَكُمْ</span> signifie :",
        "options": [
          "détruire",
          "hériter / laisser en héritage",
          "construire",
          "acheter"
        ],
        "correct": 1
      }
    ],
    "completionText": "Excellent ! 🏆 Tu as découvert la victoire d'Allah contre les coalisés ! Tu as appris la racine <strong>أ - س - و</strong> (modèle), la racine <strong>ص - د - ق</strong> (sincérité), la racine <strong>ق - ذ - ف</strong> (jeter), la racine <strong>ر - ع - ب</strong> (terreur) et la racine <strong>و - ر - ث</strong> (hériter). Le Prophète ﷺ est le meilleur modèle à suivre !"
  },
  {
    "id": "33-04",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 28 à 38 : Les épouses du Prophète et Zayd",
    "shortTitle": "Al-Ahzab (v.28-38)",
    "subtitle": "Allah propose au Prophète ﷺ le meilleur choix. L'histoire de Zayd et de Zaynab : Allah corrige une pratique de l'époque !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 28,
        "arabic": "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ إِن كُنتُنَّ تُرِدْنَ الْحَيَاةَ الدُّنْيَا وَزِينَتَهَا فَتَعَالَيْنَ أُمَتِّعْكُنَّ وَأُسَرِّحْكُنَّ سَرَاحًا جَمِيلًا",
        "french": "Ô Prophète ! Dis à tes épouses : « Si vous désirez la vie d'ici-bas et sa parure, venez, je vous accorderai une jouissance et vous libérerai par une belle libération."
      },
      {
        "number": 29,
        "arabic": "وَإِن كُنتُنَّ تُرِدْنَ اللَّهَ وَرَسُولَهُ وَالدَّارَ الْآخِرَةَ فَإِنَّ اللَّهَ أَعَدَّ لِلْمُحْسِنَاتِ مِنكُنَّ أَجْرًا عَظِيمًا",
        "french": "Mais si vous désirez Allah, Son Messager et la Demeure dernière, Allah a préparé pour les bienfaisantes parmi vous une récompense immense. »"
      },
      {
        "number": 30,
        "arabic": "يَا نِسَاءَ النَّبِيِّ مَن يَأْتِ مِنكُنَّ بِفَاحِشَةٍ مُّبَيِّنَةٍ يُضَاعَفْ لَهَا الْعَذَابُ ضِعْفَيْنِ ۚ وَكَانَ ذَٰلِكَ عَلَى اللَّهِ يَسِيرًا",
        "french": "Ô femmes du Prophète ! Celle d'entre vous qui commet une turpitude évidente, le châtiment lui sera doublé. Et cela est facile pour Allah."
      },
      {
        "number": 31,
        "arabic": "وَمَن يَقْنُتْ مِنكُنَّ لِلَّهِ وَرَسُولِهِ وَتَعْمَلْ صَالِحًا نُّؤْتِهَا أَجْرَهَا مَرَّتَيْنِ وَأَعْتَدْنَا لَهَا رِزْقًا كَرِيمًا",
        "french": "Et celle d'entre vous qui est obéissante à Allah et à Son Messager, et qui fait le bien, Nous lui accorderons deux fois sa récompense, et Nous lui avons préparé une noble attribution."
      },
      {
        "number": 32,
        "arabic": "يَا نِسَاءَ النَّبِيِّ لَسْتُنَّ كَأَحَدٍ مِّنَ النِّسَاءِ ۚ إِنِ اتَّقَيْتُنَّ فَلَا تَخْضَعْنَ بِالْقَوْلِ فَيَطْمَعَ الَّذِي فِي قَلْبِهِ مَرَضٌ",
        "french": "Ô femmes du Prophète ! Vous n'êtes comparables à aucune autre femme. Si vous êtes pieuses, ne soyez pas trop complaisantes dans votre discours, afin que celui dont le cœur est malade ne vous désire pas."
      },
      {
        "number": 33,
        "arabic": "وَقَرْنَ فِي بُيُوتِكُنَّ وَلَا تَبَرَّجْنَ تَبَرُّجَ الْجَاهِلِيَّةِ الْأُولَىٰ ۖ وَأَقِمْنَ الصَّلَاةَ وَآتِينَ الزَّكَاةَ وَأَطِعْنَ اللَّهَ وَرَسُولَهُ ۚ إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا",
        "french": "Restez dans vos foyers, et ne vous parez pas comme on se parait à l'époque de l'ignorance antérieure. Accomplissez la prière, acquittez la Zakat, et obéissez à Allah et à Son Messager. Allah veut seulement éloigner de vous la souillure, ô gens de la Maison, et vous purifier pleinement."
      },
      {
        "number": 34,
        "arabic": "وَاذْكُرْنَ مَا يُتْلَىٰ فِي بُيُوتِكُنَّ مِنْ آيَاتِ اللَّهِ وَالْحِكْمَةِ ۚ إِنَّ اللَّهَ كَانَ لَطِيفًا خَبِيرًا",
        "french": "Et rappelez-vous ce qui est récité dans vos maisons des versets d'Allah et de la Sagesse. Allah est Doux et Parfaitement Informé."
      },
      {
        "number": 35,
        "arabic": "إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَالْقَانِتِينَ وَالْقَانِتَاتِ وَالصَّادِقِينَ وَالصَّادِقَاتِ وَالصَّابِرِينَ وَالصَّابِرَاتِ وَالْخَاشِعِينَ وَالْخَاشِعَاتِ وَالْمُتَصَدِّقِينَ وَالْمُتَصَدِّقَاتِ وَالصَّائِمِينَ وَالصَّائِمَاتِ وَالْحَافِظِينَ فُرُوجَهُمْ وَالْحَافِظَاتِ وَالذَّاكِرِينَ اللَّهَ كَثِيرًا وَالذَّاكِرَاتِ أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا",
        "french": "Les musulmans et musulmanes, croyants et croyantes, obéissants et obéissantes, sincères et sincères, patients et patientes, humbles et humbles, ceux et celles qui font la charité, les jeûneurs et jeûneuses, ceux et celles qui préservent leur chasteté, et ceux et celles qui invoquent Allah beaucoup, Allah leur a préparé un pardon et une récompense immense."
      },
      {
        "number": 36,
        "arabic": "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ ۗ وَمَن يَعْصِ اللَّهَ وَرَسُولَهُ فَقَدْ ضَلَّ ضَلَالًا مُّبِينًا",
        "french": "Il n'appartient pas à un croyant ou à une croyante, une fois qu'Allah et Son Messager ont décidé d'une chose, d'avoir le choix dans leur affaire. Et quiconque désobéit à Allah et à Son Messager s'est égaré d'un égarement évident."
      },
      {
        "number": 37,
        "arabic": "وَإِذْ تَقُولُ لِلَّذِي أَنْعَمَ اللَّهُ عَلَيْهِ وَأَنْعَمْتَ عَلَيْهِ أَمْسِكْ عَلَيْكَ زَوْجَكَ وَاتَّقِ اللَّهَ وَتُخْفِي فِي نَفْسِكَ مَا اللَّهُ مُبْدِيهِ وَتَخْشَى النَّاسَ وَاللَّهُ أَحَقُّ أَن تَخْشَاهُ ۗ فَلَمَّا زَيَّدَهَا تَزْوِيجَهَا قُلْنَا لَهُمْ آتِينَا بِغَيْرِكُمْ يَا آلَ زَيْدٍ إِنَّ اللَّهَ لَا يَسْتَحْيِي مِنَ الْحَقِّ ۗ",
        "french": "Et quand tu dis à celui qu'Allah a comblé de bienfaits, tout comme toi-même : « Garde ton épouse et crains Allah », et tu cachais en toi-même ce qu'Allah allait révéler. Tu craignais les gens alors qu'Allah est plus digne de ta crainte. Puis, quand Zayd eut cessé de vivre avec elle, Nous te l'avons donnée pour épouse, afin qu'il n'y ait aucun empêchement pour les croyants de se marier avec les femmes de leurs fils adoptifs, lorsque ceux-ci ont cessé de vivre avec elles. L'ordre d'Allah doit être accompli."
      },
      {
        "number": 38,
        "arabic": "لَّيْسَ عَلَى الْمُؤْمِنِينَ حَرَجٌ فِي أَنْفُسِهِمْ مِّمَّا عَقَدَ النِّسَاءُ أَزْوَاجَهُنَّ إِذَا آتَيْتُمُوهُنَّ أُجُورَهُنَّ وَلَا حَرَجَ عَلَيْكُمْ فِيمَا عَارَضْتُم بِهِ مِنْ خِطْبَةِ النِّسَاءِ أَوْ أَكْنَنْتُمْ فِي أَنفُسِكُمْ ۚ عَلِمَ اللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ وَلَٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّا إِلَّا أَن تَقُولُوا قَوْلًا مَّعْرُوفًا ۚ وَلَا تَعْزِمُوا عُقْدَةَ النِّكَاحِ حَتَّىٰ يَبْلُغَ الْكِتَابُ أَجَلَهُ ۚ وَاعْلَمُوا أَنَّ اللَّهَ يَعْلَمُ مَا فِي أَنفُسِكُمْ فَاحْذَرُوهُ ۚ وَاعْلَمُوا أَنَّ اللَّهَ غَفُورٌ حَلِيمٌ",
        "french": "Il n'y a aucun blâme sur les croyants au sujet de ce que leurs épouses ont convenu entre elles au sujet de leurs maris. Et il n'y a pas de mal pour vous si vous faites des allusions à des femmes pour mariage, ou si vous le gardez secret dans vos cœurs. Allah sait que vous penserez à elles. Mais ne leur donnez aucun rendez-vous en secret, sauf à dire des paroles honorables. Et ne prenez pas la décision de mariage avant que la période prescrite soit écoulée. Et sachez qu'Allah sait ce qu'il y a dans vos cœurs. Craignez-Le donc. Et sachez qu'Allah est Pardonneur et Clément."
      }
    ],
    "words": [
      {
        "word": "الْخِيَرَةُ",
        "translit": "al-khiyarah",
        "meaning": "le choix / l'option",
        "root": "خ - ي - ر",
        "rootMeaning": "choisir / bien / le meilleur",
        "rootColor": 1,
        "emoji": "🤲",
        "funFactTitle": "Le meilleur choix, c'est celui d'Allah !",
        "funFact": "La racine <strong>kh-y-r</strong> veut dire « choisir » ou « le bien ». <em>Al-khiyarah</em> = le choix — le verset dit qu'une fois qu'Allah et Son Messager ont décidé, les croyants n'ont plus le choix ! Le mot <em>khayr</em> = le bien, le meilleur. Et <em>istakhāra</em> = demander le meilleur à Allah. Le Prophète ﷺ nous a enseigné la <em>ṣalāt al-istikhārah</em> : quand tu hésites, prie et demande à Allah de choisir le mieux pour toi !",
        "related": "<span>خَيْر</span> (le bien/le meilleur), <span>اسْتِخَارَة</span> (demander le meilleur à Allah), <span>خِيَارَة</span> (choix/sélection)"
      },
      {
        "word": "تَخْضَعْنَ",
        "translit": "takhḍaʿna",
        "meaning": "vous soyez trop complaisantes / douces",
        "root": "خ - ض - ع",
        "rootMeaning": "se soumettre / être humble / complaire",
        "rootColor": 2,
        "emoji": "🎤",
        "funFactTitle": "La douceur dans la voix = la bonne dose !",
        "funFact": "La racine <strong>khl-ḍ-ʿ</strong> veut dire « se soumettre » ou « être doux ». <em>Takhḍaʿna</em> = ne soyez pas trop complaisantes dans la voix — c'est comme ajuster le volume : pas trop fort, pas trop doux ! Le mot <em>khuḍūʿ</em> = la soumission, la douceur. Et <em>khāḍiʿ</em> = soumis, humble. Le verset conseille les femmes du Prophète d'avoir une voix naturelle, sans excès de douceur qui pourrait attirer les mauvaises personnes. L'équilibre est la clé !",
        "related": "<span>خُضُوع</span> (soumission/douceur), <span>خَاضِع</span> (soumis/humble), <span>خَضَعَ</span> (se soumettre/s'humilier)"
      },
      {
        "word": "الرِّجْسَ",
        "translit": "ar-rijsa",
        "meaning": "la souillure / l'impureté",
        "root": "ر - ج - س",
        "rootMeaning": "souillure / impureté / saleté",
        "rootColor": 3,
        "emoji": "✨",
        "funFactTitle": "Allah purifie Sa maison comme un nettoyage complet !",
        "funFact": "La racine <strong>r-j-s</strong> veut dire « souillure » ou « impureté ». <em>Ar-rijs</em> = la souillure — Allah veut enlever toute saleté du cœur de la famille du Prophète ﷺ, comme un nettoyage complet de la maison ! Le mot <em>rijs</em> = l'impureté morale. Et <em>rajisa</em> = être souillé. Le Coran utilise cette racine pour les mauvaises actions, les mensonges et l'idolâtrie. La pureté est le contraire : <em>ṭahārah</em> !",
        "related": "<span>رِجْس</span> (souillure/impureté), <span>رَجِس</span> (souillé/sale), <span>تَرَجَّسَ</span> (devenir impur)"
      },
      {
        "word": "يَعْصِ",
        "translit": "yaʿṣi",
        "meaning": "il désobéit / il enfreint",
        "root": "ع - ص - ي",
        "rootMeaning": "désobéir / enfreindre / rebeller",
        "rootColor": 4,
        "emoji": "⛔",
        "funFactTitle": "La désobéissance, c'est le mauvais GPS de la vie !",
        "funFact": "La racine <strong>ʿ-ṣ-y</strong> veut dire « désobéir » ou « enfreindre ». <em>Yaʿṣi</em> = il désobéit — comme un GPS que tu ignore quand il te dit de tourner à gauche ! Le mot <em>ʿiṣyān</em> = la désobéissance, la rébellion. Et <em>ʿāṣī</em> = un désobéissant, un rebelle. Le verset 36 dit que celui qui désobéit à Allah et à Son Messager s'est complètement égaré. Mais le contraire, <em>ṭāʿah</em> = l'obéissance, est le bon chemin !",
        "related": "<span>عِصْيَان</span> (désobéissance/rébellion), <span>عَاصِي</span> (désobéissant/rebelle), <span>طَاعَة</span> (obéissance)"
      },
      {
        "word": "حَلِيمٌ",
        "translit": "ḥalīmun",
        "meaning": "Clément / Très Patient",
        "root": "ح - ل - م",
        "rootMeaning": "patience / clémence / douceur",
        "rootColor": 5,
        "emoji": "🕊️",
        "funFactTitle": "Allah est plus patient qu'une maman avec son enfant !",
        "funFact": "La racine <strong>ḥ-l-m</strong> veut dire « être patient » ou « clément ». <em>Ḥalīm</em> = le Clément, Celui qui ne se met pas en colère rapidement — comme un professeur qui répète la leçon 100 fois sans se fâcher ! Le mot <em>ḥilm</em> = la patience, la sagesse. Et <em>aḥlam</em> = plus patient. Al-Ḥalīm est l'un des 99 noms d'Allah. Le Prophète ﷺ était connu pour sa <em>ḥilm</em> : même ses ennemis ont été étonnés par sa patience !",
        "related": "<span>حِلْم</span> (patience/sagesse), <span>حَلِيم</span> (patient/clément), <span>تَحَلَّمَ</span> (se maîtriser/être patient)"
      }
    ],
    "quiz": [
      {
        "question": "Que dit le verset 36 sur le choix quand Allah et Son Messager ont décidé ?",
        "options": [
          "les croyants peuvent discuter",
          "les croyants doivent voter",
          "les croyants doivent attendre 3 jours",
          "les croyants n'ont plus le choix"
        ],
        "correct": 3
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">تَخْضَعْنَ</span> (takhḍaʿna) ?",
        "options": [
          "être trop complaisantes dans la voix",
          "chanter fort",
          "marcher vite",
          "dormir beaucoup"
        ],
        "correct": 0
      },
      {
        "question": "Le verset 35 récompense les musulmans ET les musulmanes ensemble. Combien de qualités sont mentionnées ?",
        "options": [
          "5 qualités",
          "8 qualités",
          "10 qualités",
          "12 qualités"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ح - ل - م</strong> dans <span class=\"arabic-inline\">حَلِيمٌ</span> signifie :",
        "options": [
          "rapidité",
          "colère",
          "patience / clémence",
          "force"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! 🏠 Tu as découvert les enseignements pour les femmes du Prophète ﷺ ! Tu as appris la racine <strong>خ - ي - ر</strong> (choisir), la racine <strong>خ - ض - ع</strong> (se soumettre), la racine <strong>ر - ج - س</strong> (souillure), la racine <strong>ع - ص - ي</strong> (désobéir) et la racine <strong>ح - ل - م</strong> (patience). Les musulmanes et musulmans sont égaux devant Allah !"
  },
  {
    "id": "33-05",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 39 à 48 : Le rang du Prophète et les hypocrites",
    "shortTitle": "Al-Ahzab (v.39-48)",
    "subtitle": "Allah a élevé le rang du Prophète ﷺ. Attention aux hypocrites qui propagent des rumeurs !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 39,
        "arabic": "الَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللَّهِ وَيَخْشَوْنَهُ وَلَا يَخْشَوْنَ أَحَدًا إِلَّا اللَّهَ ۚ وَكَفَىٰ بِاللَّهِ حَسِيبًا",
        "french": "Ceux qui transmettent les messages d'Allah, Le craignent et ne craignent personne d'autre qu'Allah. Et Allah suffit comme comptable."
      },
      {
        "number": 40,
        "arabic": "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ ۗ وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا",
        "french": "Muhammad n'est le père d'aucun homme parmi vous, mais il est le Messager d'Allah et le sceau des prophètes. Allah est Omniscient."
      },
      {
        "number": 41,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
        "french": "Ô croyants ! Invoquez Allah d'une invocation abondante."
      },
      {
        "number": 42,
        "arabic": "وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
        "french": "Et glorifiez-Le au début et à la fin du jour."
      },
      {
        "number": 43,
        "arabic": "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ ۖ وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        "french": "C'est Lui qui prie sur vous — ainsi que Ses anges — pour vous sortir des ténèbres vers la lumière. Et Il est Miséricordieux envers les croyants."
      },
      {
        "number": 44,
        "arabic": "تَحِيَّتُهُمْ يَوْمَ يَلْقَوْنَهُ سَلَامٌ ۚ وَأَعَدَّ لَهُمْ أَجْرًا كَرِيمًا",
        "french": "Leur salutation, le jour où ils Le rencontreront, sera : « Paix ! » Et Il leur a préparé une récompense noble."
      },
      {
        "number": 45,
        "arabic": "يَا أَيُّهَا النَّبِيُّ إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا",
        "french": "Ô Prophète ! Nous t'avons envoyé comme témoin, annonciateur de bonnes nouvelles et avertisseur."
      },
      {
        "number": 46,
        "arabic": "وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ وَسِرَاجًا مُّنِيرًا",
        "french": "Et comme appelant vers Allah par Sa permission, et comme une lampe éclairante."
      },
      {
        "number": 47,
        "arabic": "وَبَشِّرِ الْمُؤْمِنِينَ بِأَنَّ لَهُم مِّنَ اللَّهِ فَضْلًا كَبِيرًا",
        "french": "Et annonce la bonne nouvelle aux croyants : ils auront une grande grâce d'Allah."
      },
      {
        "number": 48,
        "arabic": "وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ وَدَعْ أَذَاهُمْ وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
        "french": "N'obéis pas aux mécréants et aux hypocrites, néglige leur nuisance et place ta confiance en Allah. Allah suffit comme protecteur."
      }
    ],
    "words": [
      {
        "word": "خَاتَمَ",
        "translit": "khātama",
        "meaning": "le sceau / le dernier",
        "root": "خ - ت - م",
        "rootMeaning": "sceller / terminer / le dernier",
        "rootColor": 1,
        "emoji": "💍",
        "funFactTitle": "Le Prophète ﷺ est le DERNIER maillon de la chaîne !",
        "funFact": "La racine <strong>kh-t-m</strong> veut dire « sceller » ou « terminer ». <em>Khātam al-nabiyyīn</em> = le Sceau des prophètes — le Prophète ﷺ est le dernier prophète, comme un cachet de cire qui ferme une lettre pour toujours ! Le mot <em>khatm</em> = la fin, la conclusion. Et <em>khatām</em> = une bague, un anneau (le sceau). Quand tu scelles une lettre, personne ne peut plus rien ajouter. De même, personne ne viendra après le Prophète ﷺ !",
        "related": "<span>خَاتَم</span> (sceau/anneau), <span>خِتَام</span> (conclusion/fin), <span>تَخَتَّمَ</span> (porter un anneau/sceller)"
      },
      {
        "word": "سِرَاجًا",
        "translit": "sirājan",
        "meaning": "une lampe / une lanterne",
        "root": "س - ر - ج",
        "rootMeaning": "lampe / lumière / briller",
        "rootColor": 2,
        "emoji": "🔦",
        "funFactTitle": "Le Prophète ﷺ est la lampe qui éclaire le monde !",
        "funFact": "La racine <strong>s-r-j</strong> veut dire « lampe » ou « éclairer ». <em>Sirāj munīr</em> = une lampe éclairante — le Prophète ﷺ est comparé à une lampe qui éclaire tout l'univers ! Le mot <em>sirāj</em> = une lampe, un lustre. Et <em>masraj</em> = un endroit lumineux. La même racine donne <em>sarīj</em> = le feu qui brille. Le Prophète ﷺ guide les gens des ténèbres vers la lumière, comme une torche dans une grotte sombre !",
        "related": "<span>سِرَاج</span> (lampe/lanterne), <span>مُسْرِجَة</span> (lustre/lampe), <span>سَرَجَ</span> (éclairer/illuminer)"
      },
      {
        "word": "حَسِيبًا",
        "translit": "ḥasīban",
        "meaning": "comptable / suffisant pour juger",
        "root": "ح - س - ب",
        "rootMeaning": "compter / juger / calculer",
        "rootColor": 3,
        "emoji": "🧮",
        "funFactTitle": "Allah compte TOUT, même les choses invisibles !",
        "funFact": "La racine <strong>ḥ-s-b</strong> veut dire « compter » ou « juger ». <em>Ḥasīb</em> = Celui qui compte, qui tient les comptes — comme un super-calculateur qui ne se trompe JAMAIS ! Le mot <em>ḥisāb</em> = le calcul, le compte. Et <em>iḥtāb</em> = le fait de tenir compte. Allah est <em>ḥasīb</em> : Il connaît le nombre exact de tes bonnes et mauvaises actions. Le Jour du Jugement, Il montrera le <em>ḥisāb</em> de chacun !",
        "related": "<span>حِسَاب</span> (calcul/compte/jugement), <span>يَحْسُب</span> (il compte/il calcule), <span>مَحْسُوب</span> (compté/calculé)"
      },
      {
        "word": "تَحِيَّتُهُمْ",
        "translit": "taḥiyyatuhum",
        "meaning": "leur salutation / leur accueil",
        "root": "ح - ي - ي",
        "rootMeaning": "saluer / accueillir / vivre",
        "rootColor": 4,
        "emoji": "👋",
        "funFactTitle": "La meilleure salutation du Paradis : Salam !",
        "funFact": "La racine <strong>ḥ-y-w/y</strong> veut dire « saluer » ou « vivre ». <em>Taḥiyyah</em> = la salutation, l'accueil — les croyants au Paradis seront accueillis par « Salam ! » (Paix !). Le mot <em>ḥayāt</em> = la vie (vient de la même racine !). Et <em>taḥayyā</em> = saluer chaleureusement. En arabe, <em>taḥiyyat al-masjid</em> = la prière d'accueil de la mosquée. Le mot <em>Salam</em> est aussi l'un des noms d'Allah !",
        "related": "<span>تَحِيَّة</span> (salutation/accueil), <span>حَيَاة</span> (vie), <span>حَيَّ</span> (vivre/saluer)"
      },
      {
        "word": "فَضْلًا",
        "translit": "faḍlan",
        "meaning": "une grâce / un bienfait",
        "root": "ف - ض - ل",
        "rootMeaning": "faveur / grâce / surplus",
        "rootColor": 5,
        "emoji": "🎁",
        "funFactTitle": "Allah a un cadeau géant pour les croyants !",
        "funFact": "La racine <strong>f-ḍ-l</strong> veut dire « faveur » ou « grâce ». <em>Faḍl</em> = la grâce, le bienfait, le bonus — comme quand ton prof te donne des points bonus ! Le mot <em>faḍl Allāh</em> = la grâce d'Allah, immense et gratuite. Et <em>fāḍil</em> = généreux, celui qui donne plus que nécessaire. Le verset dit qu'Allah a préparé pour les croyants un <em>faḍl kabīr</em> = une grâce immense. Le Paradis lui-même est le plus grand <em>faḍl</em> !",
        "related": "<span>فَضْل</span> (grâce/faveur/bienfait), <span>فَاضِل</span> (généreux/qui donne en plus), <span>إِفْضَال</span> (générosité/grâce)"
      }
    ],
    "quiz": [
      {
        "question": "Le Prophète ﷺ est appelé <span class=\"arabic-inline\">خَاتَمَ النَّبِيِّينَ</span>. Que signifie <em>khātam</em> ?",
        "options": [
          "le premier",
          "le plus jeune",
          "le sceau / le dernier",
          "le plus riche"
        ],
        "correct": 2
      },
      {
        "question": "Le Prophète ﷺ est comparé à <span class=\"arabic-inline\">سِرَاجًا مُّنِيرًا</span>, qui signifie :",
        "options": [
          "une lampe éclairante",
          "un roi magnifique",
          "une armée puissante",
          "un grand arbre"
        ],
        "correct": 0
      },
      {
        "question": "Quelle sera la salutation des croyants quand ils rencontreront Allah (v44) ?",
        "options": [
          "« Bravo ! »",
          "« Bonjour ! »",
          "« Paix ! » (Salam)",
          "« Au revoir ! »"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ح - س - ب</strong> dans <span class=\"arabic-inline\">حَسِيبًا</span> signifie :",
        "options": [
          "oublier",
          "compter / juger",
          "dormir",
          "manger"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! 📢 Tu as découvert le rang élevé du Prophète ﷺ ! Tu as appris la racine <strong>خ - ت - م</strong> (sceller), la racine <strong>س - ر - ج</strong> (lampe), la racine <strong>ح - س - ب</strong> (compter), la racine <strong>ح - ي - ي</strong> (saluer) et la racine <strong>ف - ض - ل</strong> (grâce). Le Prophète ﷺ est le Sceau des prophètes et une lampe éclairante !"
  },
  {
    "id": "33-06",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 49 à 57 : Règles de mariage et respect du Prophète",
    "shortTitle": "Al-Ahzab (v.49-57)",
    "subtitle": "Allah révèle des règles sur le mariage. Respecte le Prophète ﷺ et n'entre pas chez lui sans permission !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 49,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نَكَحْتُمُ الْمُؤْمِنَاتِ ثُمَّ طَلَّقْتُمُوهُنَّ مِن قَبْلِ أَن تَمَسُّوهُنَّ فَمَا لَكُمْ عَلَيْهِنَّ مِنْ عِدَّةٍ تَعْتَدُّونَهَا ۖ فَمَتِّعُوهُنَّ وَسَرِّحُوهُنَّ سَرَاحًا جَمِيلًا",
        "french": "Ô croyants ! Quand vous vous mariez avec des croyantes puis les répudiez avant d'avoir consommé le mariage, vous n'avez pas de période d'attente à observer. Donnez-leur un présent et libérez-les d'une belle libération."
      },
      {
        "number": 50,
        "arabic": "يَا أَيُّهَا النَّبِيُّ إِنَّا أَحْلَلْنَا لَكَ أَزْوَاجَكَ الَّاتِي آتَيْتَ أُجُورَهُنَّ وَمَا مَلَكَتْ يَمِينُكَ مِمَّا أَفَاءَ اللَّهُ عَلَيْكَ وَبَنَاتِ عَمِّكَ وَبَنَاتِ عَمَّاتِكَ وَبَنَاتِ خَالِكَ وَبَنَاتِ خَالَاتِكَ الَّاتِي هَاجَرْنَ مَعَكَ وَامْرَأَةً مُّؤْمِنَةً إِن وَهَبَتْ نَفْسَهَا لِلنَّبِيِّ إِنْ أَرَادَ النَّبِيُّ أَن يَسْتَنكِحَهَا خَالِصَةً لَّكَ مِن دُونِ الْمُؤْمِنِينَ ۗ قَدْ عَلِمْنَا مَا فَرَضْنَا عَلَيْهِمْ فِي أَزْوَاجِهِمْ وَمَا مَلَكَتْ أَيْدِيهِمْ لِكَيْلَا يَكُونَ عَلَيْكَ حَرَجٌ ۚ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        "french": "Ô Prophète ! Nous t'avons rendues licites tes épouses à qui tu as donné leur dot, ce que ta main droite possède parmi ce qu'Allah t'a donné comme butin, les filles de ton oncle paternel, les filles de tes tantes paternelles, les filles de ton oncle maternel, les filles de tes tantes maternelles qui ont émigré avec toi, ainsi que toute croyante qui se donne au Prophète, pourvu que le Prophète veuille l'épouser. C'est un privilège pour toi, à l'exclusion des autres croyants. Nous savons ce que Nous leur avons imposé au sujet de leurs épouses et de ce que leurs mains possèdent, afin qu'il n'y ait pas de gêne pour toi. Allah est Pardonneur et Miséricordieux."
      },
      {
        "number": 51,
        "arabic": "تُرْجِي مَن تَشَاءُ مِنْهُنَّ وَتُؤْوِي إِلَيْكَ مَن تَشَاءُ ۖ وَمَنِ ابْتَغَيْتَ مِمَّنْ عَزَلْتَ فَلَا جُنَاحَ عَلَيْكَ ۚ ذَٰلِكَ أَدْنَىٰ أَن تَقَرَّ أَعْيُنُهُنَّ فَلَا يَحْزَنَّ وَيَرْضَيْنَ بِمَا آتَيْتَهُنَّ كُلُّهُنَّ ۚ وَاللَّهُ يَعْلَمُ مَا فِي قُلُوبِكُمْ ۚ وَكَانَ اللَّهُ عَلِيمًا حَلِيمًا",
        "french": "Tu peux retarder le tour de celle d'entre elles que tu veux et recevoir chez toi celle que tu veux. Et il n'y a aucun reproche à ton égard si tu veux rappeler celle que tu avais écartée. C'est plus propre à les réjouir, à leur éviter toute tristesse et à les satisfaire toutes de ce que tu leur as donné. Allah sait ce qu'il y a dans vos cœurs. Allah est Omniscient et Clément."
      },
      {
        "number": 52,
        "arabic": "لَّا يَحِلُّ لَكَ النِّسَاءُ مِن بَعْدُ وَلَا أَن تَبَدَّلَ بِهِنَّ مِنْ أَزْوَاجٍ وَلَوْ أَعْجَبَكَ حُسْنُهُنَّ إِلَّا مَا مَلَكَتْ يَمِينُكَ ۗ وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ رَّقِيبًا",
        "french": "Il ne t'est plus permis de prendre d'autres femmes, ni de changer tes épouses pour d'autres, même si leur beauté te plaît — à l'exception de ce que ta main droite possède. Allah observe toute chose."
      },
      {
        "number": 53,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتَ النَّبِيِّ إِلَّا أَن يُؤْذَنَ لَكُمْ إِلَىٰ طَعَامٍ غَيْرَ نَاظِرِينَ إِنَاهُ وَلَٰكِنْ إِذَا دُعِيتُمْ فَادْخُلُوا فَإِذَا طَعِمْتُمْ فَانتَشِرُوا وَلَا مُسْتَأْنِسِينَ لِحَدِيثٍ ۚ إِنَّ ذَٰلِكُمْ كَانَ يُؤْذِي النَّبِيَّ فَيَسْتَحْيِي مِنكُمْ ۖ وَاللَّهُ لَا يَسْتَحْيِي مِنَ الْحَقِّ ۚ وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ ۚ ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ ۚ وَمَا كَانَ لَكُمْ أَن تُؤْذُوا رَسُولَ اللَّهِ وَلَا أَن تَنكِحُوا أَزْوَاجَهُ مِن بَعْدِهِ أَبَدًا ۚ إِنَّ ذَٰلِكُمْ كَانَ عِندَ اللَّهِ عَظِيمًا",
        "french": "Ô croyants ! N'entrez pas dans les maisons du Prophète sans permission, sauf pour un repas sans attendre son heure. Mais lorsqu'on vous invite, entrez-y. Puis, quand vous avez mangé, dispersez-vous, sans chercher à vous attarder pour une conversation. Cela gênait le Prophète, mais il était trop pudique pour vous le dire. Allah ne rougit pas de la vérité. Et si vous demandez quelque chose aux épouses du Prophète, demandez-le de derrière un voile. Cela est plus pur pour vos cœurs et pour les leurs. Il ne vous est pas permis de nuire au Messager d'Allah, ni de vous marier avec ses épouses après lui, jamais. Cela serait énorme auprès d'Allah."
      },
      {
        "number": 54,
        "arabic": "إِن تُبْدُوا شَيْئًا أَوْ تُخْفُوهُ فَإِنَّ اللَّهَ كَانَ بِكُلِّ شَيْءٍ عَلِيمًا",
        "french": "Que vous révéliez quelque chose ou que vous le cachiez, Allah est Omniscient."
      },
      {
        "number": 55,
        "arabic": "لَا جُنَاحَ عَلَيْهِنَّ فِي آبَائِهِنَّ وَلَا أَبْنَائِهِنَّ وَلَا إِخْوَانِهِنَّ وَلَا أَبْنَاءِ إِخْوَانِهِنَّ وَلَا أَبْنَاءِ أَخَوَاتِهِنَّ وَلَا نِسَائِهِنَّ وَلَا مَا مَلَكَتْ أَيْدِيهِنَّ ۗ وَاتَّقِينَ اللَّهَ ۚ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدًا",
        "french": "Il n'y a aucun mal pour elles devant leurs pères, leurs fils, leurs frères, les fils de leurs frères, les fils de leurs sœurs, leurs femmes musulmanes, et ce que leurs mains possèdent. Et craignez Allah. Allah est Témoin de toute chose."
      },
      {
        "number": 56,
        "arabic": "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
        "french": "Certes, Allah et Ses anges prient sur le Prophète. Ô croyants ! Priez sur lui et adressez-lui vos salutations."
      },
      {
        "number": 57,
        "arabic": "إِنَّ الَّذِينَ يُؤْذُونَ اللَّهَ وَرَسُولَهُ لَعَنَهُمُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ وَأَعَدَّ لَهُمْ عَذَابًا مُّهِينًا",
        "french": "Ceux qui nuisent à Allah et à Son Messager, Allah les maudit dans ce monde et dans l'autre, et leur a préparé un châtiment avilissant."
      }
    ],
    "words": [
      {
        "word": "رَقِيبًا",
        "translit": "raqīban",
        "meaning": "Observateur / Vigilant",
        "root": "ر - ق - ب",
        "rootMeaning": "observer / surveiller / veiller",
        "rootColor": 1,
        "emoji": "👁️",
        "funFactTitle": "Allah observe tout, même quand tu es seul !",
        "funFact": "La racine <strong>r-q-b</strong> veut dire « observer » ou « surveiller ». <em>Raqīb</em> = un observateur, un veilleur — comme une caméra de surveillance qui ne s'éteint JAMAIS ! Le mot <em>murāqabah</em> = la surveillance spirituelle (observer ses propres actes). Et <em>riqāb</em> = les nuques (ce qu'on surveille). Le mot <em>raqīb</em> est aussi l'un des 99 noms d'Allah : le Surveillant, Celui qui voit TOUT ! C'est pour cela qu'on doit être sage même quand personne ne regarde.",
        "related": "<span>مُرَاقَبَة</span> (surveillance spirituelle), <span>رِقَاب</span> (nuques/êtres libres), <span>رَقِيب</span> (observateur/veilleur)"
      },
      {
        "word": "حِجَابٍ",
        "translit": "ḥijābin",
        "meaning": "un voile / un rideau",
        "root": "ح - ج - ب",
        "rootMeaning": "voiler / séparer / cacher",
        "rootColor": 2,
        "emoji": "🪟",
        "funFactTitle": "Le voile = une porte de respect !",
        "funFact": "La racine <strong>ḥ-j-b</strong> veut dire « voiler » ou « séparer ». <em>Ḥijāb</em> = un voile, un rideau — comme un rideau qui sépare deux pièces pour le respect et la modestie ! Le mot <em>ḥujub</em> = des barrières, des obstacles. Et <em>ḥājib</em> = un portier, un gardien. Le verset dit de parler aux épouses du Prophète de derrière un <em>ḥijāb</em> pour la pureté des cœurs. C'est comme frapper à une porte au lieu d'entrer sans permission !",
        "related": "<span>حِجَاب</span> (voile/rideau/barrière), <span>حَاجِب</span> (sourcil/portier), <span>مُحَجَّب</span> (voilée/cachée)"
      },
      {
        "word": "يُصَلُّونَ",
        "translit": "yuṣallūna",
        "meaning": "ils prient sur / ils bénissent",
        "root": "ص - ل - و",
        "rootMeaning": "prier / bénir / invoquer",
        "rootColor": 3,
        "emoji": "🤲",
        "funFactTitle": "Allah ET Ses anges prient sur le Prophète ﷺ !",
        "funFact": "La racine <strong>ṣ-l-w</strong> veut dire « prier » ou « bénir ». <em>Yuṣallūna</em> = ils prient sur, ils bénissent — Allah ET Ses anges prient sur le Prophète ﷺ ! Imagine : le Créateur de l'univers + des milliards d'anges, tous prient sur UN seul homme ! Le mot <em>ṣalāh</em> = la prière. Et <em>ṣalawāt</em> = les bénédictions. Le verset 56 commande aux croyants de faire de même : <em>ṣallū ʿalayh</em> = priez sur lui ! C'est la célèbre formule de la <em>ṣalawāt</em> !",
        "related": "<span>صَلَاة</span> (prière/bénédiction), <span>صَلَوَات</span> (bénédictions/invocations), <span>مُصَلًّى</span> (lieu de prière)"
      },
      {
        "word": "شَهِيدًا",
        "translit": "shahīdan",
        "meaning": "Témoin / Celui qui témoigne",
        "root": "ش - ه - د",
        "rootMeaning": "témoigner / être présent / certifier",
        "rootColor": 4,
        "emoji": "📝",
        "funFactTitle": "Allah est le Témoin Suprême de tout !",
        "funFact": "La racine <strong>sh-h-d</strong> veut dire « témoigner » ou « être présent ». <em>Shahīd</em> = un témoin — Allah est Témoin de TOUT ce que tu fais, même en secret ! Le mot <em>shahādah</em> = le témoignage (les deux témoignages de la foi). Et <em>shuhadāʾ</em> = les martyrs (ceux qui témoignent de leur foi par leur sacrifice). Ash-Shahīd est aussi l'un des 99 noms d'Allah. Le jour du Jugement, Allah sera le seul <em>shahīd</em> acceptable !",
        "related": "<span>شَهَادَة</span> (témoignage/attestation), <span>شُهَدَاء</span> (martyrs/témoins), <span>شَاهِد</span> (témoin/celui qui est présent)"
      },
      {
        "word": "لَعَنَهُمُ",
        "translit": "laʿanahumu",
        "meaning": "Il les a maudits / éloignés de Sa miséricorde",
        "root": "ل - ع - ن",
        "rootMeaning": "maudire / éloigner / expulser",
        "rootColor": 5,
        "emoji": "⚠️",
        "funFactTitle": "La malédiction = être éloigné de la miséricorde !",
        "funFact": "La racine <strong>l-ʿ-n</strong> veut dire « maudire » ou « éloigner ». <em>Laʿana</em> = il a maudit — littéralement, il a éloigné de la miséricorde d'Allah, comme un professeur qui met un élève dans le coin ! Le mot <em>laʿnah</em> = la malédiction, l'éloignement. Et <em>laʿīn</em> = maudit, banni. En arabe, on dit « <em>aʿūdhu bi-Allāh min al-laʿnah</em> » = je cherche refuge auprès d'Allah contre la malédiction. Le contraire est <em>rahmah</em> = la miséricorde.",
        "related": "<span>لَعْنَة</span> (malédiction/éloignement), <span>لَعِين</span> (maudit/banni), <span>تَلَعَّنَ</span> (se maudire mutuellement)"
      }
    ],
    "quiz": [
      {
        "question": "Le verset 56 demande aux croyants de faire quoi pour le Prophète ﷺ ?",
        "options": [
          "le fuir",
          "le saluer et prier sur lui",
          "l'ignorer",
          "le critiquer"
        ],
        "correct": 1
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">رَقِيبًا</span> (raqīban) ?",
        "options": [
          "un mangeur",
          "un dormeur",
          "un Observateur / Veilleur",
          "un chanteur"
        ],
        "correct": 2
      },
      {
        "question": "Pourquoi Allah demande-t-Il de parler aux épouses du Prophète de derrière un voile (v53) ?",
        "options": [
          "parce qu'elles sont laides",
          "parce qu'elles ne parlent pas",
          "parce qu'elles sont cachées",
          "parce que c'est plus pur pour les cœurs"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ش - ه - د</strong> dans <span class=\"arabic-inline\">شَهِيدًا</span> signifie :",
        "options": [
          "dormir",
          "manger",
          "témoigner / être témoin",
          "courir"
        ],
        "correct": 2
      }
    ],
    "completionText": "Excellent ! 🕌 Tu as appris les règles de respect envers le Prophète ﷺ ! Tu as découvert la racine <strong>ر - ق - ب</strong> (observer), la racine <strong>ح - ج - ب</strong> (voiler), la racine <strong>ص - ل - و</strong> (prier/bénir), la racine <strong>ش - ه - د</strong> (témoigner) et la racine <strong>ل - ع - ن</strong> (maudire). N'oublie jamais de prier sur le Prophète ﷺ !"
  },
  {
    "id": "33-07",
    "surah": 33,
    "surahName": "Al-Ahzab",
    "title": "Al-Ahzab — Versets 58 à 73 : Respect, modestie et les deux catégories de croyants",
    "shortTitle": "Al-Ahzab (v.58-73)",
    "subtitle": "Les croyants doivent se distinguer par leur modestie. Le Jour du Jugement, Allah distinguera les hypocrites des véridiques !",
    "duration": "~9 min",
    "xp": 15,
    "verses": [
      {
        "number": 58,
        "arabic": "وَالَّذِينَ يُؤْذُونَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ بِغَيْرِ مَا اكْتَسَبُوا فَقَدِ احْتَمَلُوا بُهْتَانًا وَإِثْمًا مُّبِينًا",
        "french": "Ceux qui nuisent aux croyants et aux croyantes sans que ceux-ci aient commis de faute, se chargent d'une calomnie et d'un péché évident."
      },
      {
        "number": 59,
        "arabic": "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ ۚ ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ فَلَا يُؤْذَيْنَ ۚ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        "french": "Ô Prophète ! Dis à tes épouses, à tes filles et aux femmes des croyantes de ramener sur elles une partie de leurs manteaux. Cela est plus apte à ce qu'elles soient reconnues et ne soient pas offensées. Allah est Pardonneur et Miséricordieux."
      },
      {
        "number": 60,
        "arabic": "لَّئِن لَّمْ يَنْتَهِ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ وَالْمُرْجِفُونَ فِي الْمَدِينَةِ لَنُغْرِيَنَّكَ بِهِمْ ثُمَّ لَا يُجَاوِرُونَكَ فِيهَا إِلَّا قَلِيلًا",
        "french": "Si les hypocrites, ceux dont les cœurs sont malades, et les alarmistes de Médine ne cessent pas, Nous te donnerons l'ordre de les chasser. Ils ne séjourneront plus avec toi dans cette ville que peu de temps."
      },
      {
        "number": 61,
        "arabic": "مَلْعُونِينَ ۖ أَيْنَمَا ثُقِفُوا أُخِذُوا وَقُتِّلُوا تَقْتِيلًا",
        "french": "Maudits. Où qu'on les trouve, ils seront saisis et tués sans pitié."
      },
      {
        "number": 62,
        "arabic": "سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ ۖ وَلَن تَجِدَ لِسُنَّةِ اللَّهِ تَبْدِيلًا",
        "french": "Telle est la loi d'Allah pour ceux qui ont vécu auparavant. Et tu ne trouveras jamais de changement à la loi d'Allah."
      },
      {
        "number": 63,
        "arabic": "يَسْأَلُكَ النَّاسُ عَنِ السَّاعَةِ ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ اللَّهِ ۚ وَمَا يُدْرِيكَ لَعَلَّ السَّاعَةَ تَكُونُ قَرِيبًا",
        "french": "Les gens t'interrogent sur l'Heure. Dis : « Sa connaissance relève d'Allah seul. » Et qui te dit que l'Heure n'est pas proche ?"
      },
      {
        "number": 64,
        "arabic": "إِنَّ اللَّهَ لَعَنَ الْكَافِرِينَ وَأَعَدَّ لَهُمْ سَعِيرًا",
        "french": "Allah a maudit les mécréants et leur a préparé une Fournaise."
      },
      {
        "number": 65,
        "arabic": "خَالِدِينَ فِيهَا أَبَدًا ۖ لَا يَجِدُونَ وَلِيًّا وَلَا نَصِيرًا",
        "french": "Ils y demeureront éternellement. Ils n'y trouveront ni allié ni secoureur."
      },
      {
        "number": 66,
        "arabic": "يَوْمَ تُقَلَّبُ وُجُوهُهُمْ فِي النَّارِ يَقُولُونَ يَا لَيْتَنَا أَطَعْنَا اللَّهَ وَأَطَعْنَا الرَّسُولَا",
        "french": "Le jour où leurs visages seront tournés et retournés dans le Feu, ils diront : « Hélas pour nous ! Si seulement nous avions obéi à Allah et obéi au Messager ! »"
      },
      {
        "number": 67,
        "arabic": "وَقَالُوا رَبَّنَا إِنَّا أَطَعْنَا سَادَتَنَا وَكُبَرَاءَنَا فَأَضَلُّونَا السَّبِيلَا",
        "french": "Et ils diront : « Seigneur, nous avons obéi à nos chefs et à nos grands, et ils nous ont égarés du chemin."
      },
      {
        "number": 68,
        "arabic": "رَبَّنَا آتِهِمْ ضِعْفَيْنِ مِنَ الْعَذَابِ وَالْعَنْهُمْ لَعْنًا كَبِيرًا",
        "french": "Seigneur, inflige-leur un double châtiment et maudis-les d'une immense malédiction. »"
      },
      {
        "number": 69,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَكُونُوا كَالَّذِينَ آذَوْا مُوسَىٰ فَبَرَّأَهُ اللَّهُ مِمَّا قَالُوا ۚ وَكَانَ عِندَ اللَّهِ وَجِيهًا",
        "french": "Ô croyants ! Ne soyez pas comme ceux qui ont nui à Moïse. Allah l'a innocenté de ce qu'ils ont dit, et il était honorable auprès d'Allah."
      },
      {
        "number": 70,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا",
        "french": "Ô croyants ! Craignez Allah et dites des paroles justes."
      },
      {
        "number": 71,
        "arabic": "يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۚ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا",
        "french": "Il rectifiera vos œuvres et vous pardonnera vos péchés. Et quiconque obéit à Allah et à Son Messager a réalisé une réussite magnifique."
      },
      {
        "number": 72,
        "arabic": "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنسَانُ ۖ إِنَّهُ كَانَ ظَلُومًا جَهُولًا",
        "french": "Nous avons proposé la confiance aux cieux, à la terre et aux montagnes. Ils ont refusé de la porter et en ont eu peur. Et l'homme l'a portée. Il est très injuste et très ignorant."
      },
      {
        "number": 73,
        "arabic": "لِّيُعَذِّبَ اللَّهُ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ وَيَتُوبَ اللَّهُ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ ۗ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        "french": "Afin qu'Allah châtie les hypocrites, hommes et femmes, et les associateurs, hommes et femmes, et qu'Allah accueille le repentir des croyants et des croyantes. Allah est Pardonneur et Miséricordieux."
      }
    ],
    "words": [
      {
        "word": "جَلَابِيبِهِنَّ",
        "translit": "jalābībihinna",
        "meaning": "leurs manteaux / leurs grands voiles",
        "root": "ج - ل - ب",
        "rootMeaning": "manteau / couvrir / tirer",
        "rootColor": 1,
        "emoji": "🧥",
        "funFactTitle": "Le jilbāb = un manteau de respect !",
        "funFact": "La racine <strong>j-l-b</strong> veut dire « manteau » ou « couvrir ». <em>Jalābīb</em> = des grands manteaux, des voiles extérieurs — comme un manteau d'hiver qui couvre tout le corps ! Le mot <em>jilbāb</em> = un long manteau, un voile ample. Ce verset a révélé le <em>jilbāb</em> pour les femmes croyantes, pour qu'elles soient reconnues comme des femmes libres et respectées. Le mot <em>ijlab</em> = retirer, ramener vers soi. Le <em>jilbāb</em> est un signe d'identité et de dignité !",
        "related": "<span>جِلْبَاب</span> (manteau/voile extérieur), <span>جُلْبَة</span> (peau/manteau de fourrure), <span>اجْتَلَبَ</span> (ramener/tirer vers soi)"
      },
      {
        "word": "بُهْتَانًا",
        "translit": "buh'tānan",
        "meaning": "une calomnie / un mensonge éhonté",
        "root": "ب - ه - ت",
        "rootMeaning": "calomnier / accuser faussement",
        "rootColor": 2,
        "emoji": "🤥",
        "funFactTitle": "La calomnie est un mensonge DANGEREUX !",
        "funFact": "La racine <strong>b-h-t</strong> veut dire « calomnier » ou « accuser à tort ». <em>Buhtān</em> = une calomnie, un mensonge grave — comme accuser quelqu'un d'avoir volé alors qu'il est innocent ! Le mot <em>ibtahama</em> = il a calomnié. Et <em>mabhtam</em> = un calomniateur. Le verset condamne ceux qui nuisent aux croyants avec des <em>buh'tān</em> = de fausses accusations. Le Prophète ﷺ a dit : « Le calomniateur n'entrera pas au Paradis. »",
        "related": "<span>بُهْتَان</span> (calomnie/accusation fausse), <span>ابْتَهَمَ</span> (calomnier/accuser à tort), <span>مُبْهِت</span> (calomniateur)"
      },
      {
        "word": "سَدِيدًا",
        "translit": "sadīdan",
        "meaning": "juste / droit / approprié",
        "root": "س - د - د",
        "rootMeaning": "droit / juste / solide",
        "rootColor": 3,
        "emoji": "🎯",
        "funFactTitle": "Dis des mots JUSTES comme une flèche dans le centre !",
        "funFact": "La racine <strong>s-d-d</strong> veut dire « être droit » ou « juste ». <em>Sadīd</em> = juste, droit, approprié — comme une flèche qui atteint le centre de la cible ! Le mot <em>sadīd</em> = ce qui est correct, adapté. Et <em>sawādd</em> = la droiture, la rectitude. Le verset 70 dit : <em>qūlū qawlan sadīdan</em> = dites des paroles justes. Les meilleures paroles sont celles qui sont vraies, gentilles ET utiles ! C'est la triple règle des mots parfaits.",
        "related": "<span>سَدِيد</span> (juste/droit/approprié), <span>قَوْل سَدِيد</span> (parole juste), <span>سَدَّاد</span> (droiture/rectitude)"
      },
      {
        "word": "وَجِيهًا",
        "translit": "wajīhan",
        "meaning": "honorable / digne / éminent",
        "root": "و - ج - ه",
        "rootMeaning": "visage / honneur / dignité",
        "rootColor": 4,
        "emoji": "🌟",
        "funFactTitle": "Mûsā était un homme d'honneur auprès d'Allah !",
        "funFact": "La racine <strong>w-j-h</strong> veut dire « visage » ou « honneur ». <em>Wajīh</em> = honorable, digne — comme quelqu'un qui a toujours le « visage » découvert, jamais caché par la honte ! Le mot <em>wajh</em> = le visage (et aussi : la face d'Allah). Et <em>wujūh</em> = les visages, les personnes éminentes. Allah dit que Mûsā était <em>wajīhan</em> = honorable auprès de Lui, malgré les mensonges de ses ennemis. La vraie dignité vient d'Allah !",
        "related": "<span>وَجْه</span> (visage/face), <span>وَجِيه</span> (honorable/digne), <span>وُجُوه</span> (visages/personnes éminentes)"
      },
      {
        "word": "الْأَمَانَةَ",
        "translit": "al-amānah",
        "meaning": "la confiance / la responsabilité",
        "root": "أ - م - ن",
        "rootMeaning": "confiance / sécurité / fidélité",
        "rootColor": 5,
        "emoji": "🔑",
        "funFactTitle": "L'homme a accepté la plus grosse mission de l'univers !",
        "funFact": "La racine <strong>ʾ-m-n</strong> veut dire « confiance » ou « sécurité ». <em>Al-amānah</em> = la confiance, la responsabilité — Allah a proposé cette charge aux cieux, à la terre et aux montagnes, et ils ont REFUSÉ par peur ! Mais l'homme l'a acceptée ! Le mot <em>amīn</em> = digne de confiance. Et <em>amān</em> = la sécurité. Le Prophète ﷺ était surnommé <em>Al-Amīn</em> = le Digne de confiance. Chaque responsabilité que tu portes est une <em>amānah</em> !",
        "related": "<span>أَمَانَة</span> (confiance/responsabilité), <span>أَمِين</span> (digne de confiance), <span>أَمَان</span> (sécurité/garantie)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">جَلَابِيبِهِنَّ</span> (jalābībihinna) ?",
        "options": [
          "leurs bijoux",
          "leurs chaussures",
          "leurs manteaux / grands voiles",
          "leurs sacs"
        ],
        "correct": 2
      },
      {
        "question": "Allah a proposé <span class=\"arabic-inline\">الْأَمَانَةَ</span> (la confiance) aux cieux, à la terre et aux montagnes. Qui l'a acceptée (v72) ?",
        "options": [
          "les anges",
          "l'homme",
          "les djinns",
          "les animaux"
        ],
        "correct": 1
      },
      {
        "question": "Le verset 70 dit de dire des paroles <span class=\"arabic-inline\">سَدِيدًا</span>. Que signifie ce mot ?",
        "options": [
          "drôles",
          "longues",
          "justes / droites",
          "tristes"
        ],
        "correct": 2
      },
      {
        "question": "Que signifie <span class=\"arabic-inline\">بُهْتَانًا</span> (buh'tānan) ?",
        "options": [
          "un cadeau",
          "une prière",
          "une calomnie / un mensonge grave",
          "un repas"
        ],
        "correct": 2
      }
    ],
    "completionText": "Masha'Allah ! 🌟 Tu as terminé la sourate Al-Ahzab ! Tu as appris la racine <strong>ج - ل - ب</strong> (manteau), la racine <strong>ب - ه - ت</strong> (calomnier), la racine <strong>س - د - د</strong> (être juste), la racine <strong>و - ج - ه</strong> (visage/honneur) et la racine <strong>أ - م - ن</strong> (confiance). Tu es maintenant prêt(e) à porter la confiance d'Allah avec dignité !"
  },
  {
    "id": "34-01",
    "surah": 34,
    "surahName": "Saba",
    "title": "La louange d'Allah et la certitude de l'Heure",
    "shortTitle": "Saba (v.1-9)",
    "subtitle": "Allah est le Maître des cieux et de la terre ! Les associateurs nient l'Heure, mais Allah connaît même le poids d'un atome.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَلَهُ الْحَمْدُ فِي الْآخِرَةِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
        "french": "Louange à Allah à qui appartient tout ce qui est dans les cieux et tout ce qui est sur la terre. Et à Lui la louange dans l'au-delà. C'est Lui le Sage, le Parfaitement Connaisseur."
      },
      {
        "number": 2,
        "arabic": "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا ۚ وَهُوَ الْغَفُورُ الرَّحِيمُ",
        "french": "Il sait ce qui pénètre dans la terre et ce qui en sort, ce qui descend du ciel et ce qui y monte. C'est Lui le Pardonneur, le Miséricordieux."
      },
      {
        "number": 3,
        "arabic": "قَالَ الَّذِينَ كَفَرُوا لَا تَأْتِينَا السَّاعَةُ ۖ قُلْ بَلَىٰ وَرَبِّي لَتَأْتِيَنَّكُمْ عَالِمِ الْغَيْبِ ۖ لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ وَلَا أَصْغَرُ مِن ذَٰلِكَ وَلَا أَكْبَرُ إِلَّا فِي كِتَابٍ مُّبِينٍ",
        "french": "Ceux qui ont mécru ont dit : « L'Heure ne viendra pas pour nous. » Dis : « Mais si ! Par mon Seigneur ! Elle vous viendra certainement, Celui qui connaît l'Invisible. Rien ne Lui échappe fût-ce le poids d'un atome dans les cieux, comme sur la terre. Et rien n'est plus petit ni plus grand que cela, sans que cela ne soit inscrit dans un Livre explicite."
      },
      {
        "number": 4,
        "arabic": "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ ۚ أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ",
        "french": "Afin qu'Il récompense ceux qui croient et font les bonnes œuvres. Ceux-là auront un pardon et une généreuse provision."
      },
      {
        "number": 5,
        "arabic": "وَالَّذِينَ سَعَوْا فِي آيَاتِنَا مُعَاجِزِينَ أُولَٰئِكَ لَهُمْ عَذَابٌ مِّن رِّجْزٍ أَلِيمٌ",
        "french": "Et ceux qui s'efforcent à discréditer Nos signes, ceux-là auront le châtiment d'un supplice douloureux."
      },
      {
        "number": 6,
        "arabic": "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
        "french": "Et ceux à qui le savoir a été donné voient que ce qui t'a été révélé de la part de ton Seigneur est la vérité qui guide au chemin du Tout-Puissant, du Très-Loué."
      },
      {
        "number": 7,
        "arabic": "وَقَالَ الَّذِينَ كَفَرُوا هَلْ نَدُلُّكُمْ عَلَىٰ رَجُلٍ يُنَبِّئُكُمْ إِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍ إِنَّكُمْ لَفِي خَلْقٍ جَدِيدٍ",
        "french": "Et ceux qui ont mécru ont dit : « Vous indiquerons-nous un homme qui vous prédise que quand vous serez complètement désintégrés, vous serez de nouveau créés ?"
      },
      {
        "number": 8,
        "arabic": "أَفْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَم بِهِ جِنَّةٌ ۗ بَلِ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ فِي الْعَذَابِ وَالضَّلَالِ الْبَعِيدِ",
        "french": "A-t-il forgé un mensonge contre Allah ? Ou est-il fou ? Non, mais ceux qui ne croient pas en l'au-delà sont dans le châtiment et l'égarement profond."
      },
      {
        "number": 9,
        "arabic": "أَمْ لَمْ يَرَوْا إِلَىٰ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُم مِّنَ السَّمَاءِ وَالْأَرْضِ ۖ إِن نَّشَأْ نَخْسِفْ بِهِمُ الْأَرْضَ أَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةٍ لِّكُلِّ عَبْدٍ مُّنِيبٍ",
        "french": "N'ont-ils pas vu ce qu'il y a devant eux et derrière eux, dans le ciel et sur la terre ? Si Nous voulions, Nous ferions engloutir la terre par eux, ou ferais tomber sur eux des morceaux du ciel. Il y a en cela certes un signe pour tout serviteur qui revient repentant."
      }
    ],
    "words": [
      {
        "word": "الْحَمْدُ",
        "translit": "al-ḥamdu",
        "meaning": "la louange",
        "root": "ح - م - د",
        "rootMeaning": "louer / remercier / complimenter",
        "rootColor": 1,
        "emoji": "👏",
        "funFactTitle": "Commencer par remercier !",
        "funFact": "La racine <strong>ḥ-m-d</strong> veut dire « louer, remercier, complimenter ». Quand tu dis <em>al-ḥamdu li-llāh</em>, tu fais le MEILLEUR compliment à Allah ! C'est comme dire « chapeau l'artiste ! » devant le plus beau tableau du monde. Cette racine donne le prénom <em>Muḥammad</em> ( celui qui est digne de louanges ) et <em>Aḥmad</em> (le plus loué). Le mot <em>maḥmūd</em> = « celui qu'on loue » et <em>ḥamd</em> est plus fort que <em>shukr</em> (merci) car on peut remercier pour un cadeau, mais louer c'est reconnaître la PERFECTION !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حمد</span> (louange), <span>محمد</span> (digne de louanges), <span>أحمد</span> (le plus loué), <span>حميد</span> (digne de louange)"
      },
      {
        "word": "يَعْلَمُ",
        "translit": "yaʿlamu",
        "meaning": "Il sait / Il connaît",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 2,
        "emoji": "🧠",
        "funFactTitle": "Allah sait TOUT, même ce qui est caché !",
        "funFact": "La racine <strong>ʿ-l-m</strong> veut dire « savoir, connaître ». Allah <em>yaʿlamu</em> ce qui entre dans la terre et ce qui en sort — comme un professeur qui connaît chaque réponse de chaque élève, même ceux qui la cachent ! Le mot <em>ʿilm</em> = « le savoir » et <em>ʿālim</em> = « savant ». Le <em>taʿallam</em> = « apprends ! » — c'est ce que ton professeur te dit chaque jour. En arabe, le premier mot révélé du Coran est <em>Iqraʾ</em> (lis !) car la connaissance est la clé de tout !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>علم</span> (savoir), <span>عالم</span> (savant), <span>تعلم</span> (apprendre), <span>علم</span> (connaissance)"
      },
      {
        "word": "الْغَيْبِ",
        "translit": "al-ghaybi",
        "meaning": "l'Invisible / le caché",
        "root": "غ - ي - ب",
        "rootMeaning": "être absent / invisible / caché",
        "rootColor": 3,
        "emoji": "🔮",
        "funFactTitle": "Les secrets que seul Allah connaît !",
        "funFact": "La racine <strong>gh-y-b</strong> veut dire « être absent, invisible, caché ». Le <em>ghayb</em> c'est tout ce qu'on ne peut PAS voir : le futur, ce qu'il y a sous la terre, les pensées dans les cœurs... Allah est <em>ʿālim al-ghayb</em> — le Connaisseur de l'Invisible ! C'est comme une boîte fermée que seul Allah peut ouvrir. Le mot <em>ghāʾib</em> = « absent » et <em>ghayba</em> = « disparition ». Les anges sont appelés <em>ghayb</em> car on ne les voit pas.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>غيب</span> (invisible), <span>غائب</span> (absent), <span>غيبة</span> (absence), <span>اغتياب</span> (médire)"
      },
      {
        "word": "خَلْقٍ",
        "translit": "khalqin",
        "meaning": "la création",
        "root": "خ - ل - ق",
        "rootMeaning": "créer / façonner / mesurer",
        "rootColor": 4,
        "emoji": "🎨",
        "funFactTitle": "Allah, l'Artiste suprême !",
        "funFact": "La racine <strong>kh-l-q</strong> veut dire « créer, façonner ». Quand les associateurs demandent « sera-t-on recréés ? », ils oublient que Celui qui a créé la PREMIÈRE fois peut le refaire ! C'est comme un boulanger qui fait un gâteau — s'il a su le faire une fois, il peut en refaire un autre. Le mot <em>khalq</em> = « la création » et <em>khāliq</em> = « le Créateur ». En arabe, <em>khalāqa</em> veut dire « il a créé » et <em>makhlūq</em> = « la créature ». Chaque chose créée est un chef-d'œuvre d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>خلق</span> (création), <span>خالق</span> (Créateur), <span>مخلوق</span> (créature), <span>خلائقه</span> (ses créatures)"
      },
      {
        "word": "بَصِيرٌ",
        "translit": "baṣīrun",
        "meaning": "Celui qui voit tout",
        "root": "ب - ص - ر",
        "rootMeaning": "voir / percevoir / clairvoyant",
        "rootColor": 5,
        "emoji": "👁️",
        "funFactTitle": "Allah voit même la fourmi noire sur la pierre noire !",
        "funFact": "La racine <strong>b-ṣ-r</strong> veut dire « voir, percevoir ». Allah est <em>baṣīr</em> — Il voit TOUT, même la plus petite chose dans l'obscurité totale ! C'est comme une caméra ultra-puissante qui filme tout l'univers en même temps. Le mot <em>baṣar</em> = « la vue » et <em>abṣar</em> = « il a vu ». Le <em>muṣawwir</em> est « celui qui donne une forme » — Allah voit chaque détail de Ses créatures. On dit <em>allāhu maʿanā</em> mais Allah nous voit EN PLUS d'être avec nous !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بصر</span> (vue), <span>بصير</span> (Clairvoyant), <span>مبصر</span> (voyant), <span>بصيرة</span> (perspicacité)"
      }
    ],
    "quiz": [
      {
        "question": "Que signifie <span class=\"arabic-inline\">الْحَمْدُ</span> (al-ḥamdu) au début de la sourate ?",
        "options": [
          "Le repentir",
          "La prière",
          "La louange / les remerciements",
          "Le jeûne"
        ],
        "correct": 2
      },
      {
        "question": "Allah connaît même le poids d'un atome. Le mot atome en arabe est :",
        "options": [
          "الْجَبَلُ",
          "ذَرَّةٍ",
          "الشَّمْسُ",
          "النَّجْمُ"
        ],
        "correct": 1
      },
      {
        "question": "Laquelle de ces racines signifie « voir, percevoir » ?",
        "options": [
          "ع - ل - م",
          "ح - م - د",
          "غ - ي - ب",
          "ب - ص - ر"
        ],
        "correct": 3
      },
      {
        "question": "Que vont recevoir ceux qui croient et font de bonnes actions ?",
        "options": [
          "Un châtiment douloureux",
          "Rien du tout",
          "Seulement la richesse",
          "Un pardon et une généreuse provision"
        ],
        "correct": 3
      }
    ],
    "completionText": "Bravo ! 🌟 Tu as commencé la sourate Saba ! Tu as découvert les racines <strong>ح - م - د</strong> (louange), <strong>ع - ل - م</strong> (savoir), <strong>غ - ي - ب</strong> (invisible), <strong>خ - ل - ق</strong> (créer) et <strong>ب - ص - ر</strong> (voir). Allah connaît tout, même le poids d'un atome !"
  },
  {
    "id": "34-02",
    "surah": 34,
    "surahName": "Saba",
    "title": "David, Salomon et le peuple de Saba",
    "shortTitle": "Saba (v.10-21)",
    "subtitle": "David et Salomon avaient des pouvoirs extraordinaires ! Découvrez les deux jardins merveilleux du peuple de Saba et leur ingratitude.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 10,
        "arabic": "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ وَأَلَنَّا لَهُ الْحَدِيدَ",
        "french": "Nous avons certes accordé une grâce à David de Notre part. Ô montagnes et oiseaux, répétez avec lui les louanges ! Et Nous avons rendu le fer ductile pour lui."
      },
      {
        "number": 11,
        "arabic": "أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ ۖ وَاعْمَلُوا صَالِحًا ۖ إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ",
        "french": "« Fabrique des armures complètes, mesure bien les mailles et œuvrez à faire le bien. Je suis Clairvoyant sur ce que vous faites. »"
      },
      {
        "number": 12,
        "arabic": "وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً تَجْرِي بِأَمْرِهِ إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا ۚ وَكُنَّا بِكُلِّ شَيْءٍ عَالِمِينَ",
        "french": "Et à Salomon le vent tempétueux qui soufflait, par Son ordre, vers la terre que Nous avions bénie. Et Nous savions tout."
      },
      {
        "number": 13,
        "arabic": "وَمِنَ الشَّيَاطِينِ مَن يَغُوصُونَ لَهُ وَيَعْمَلُونَ عَمَلًا دُونَ ذَٰلِكَ ۖ وَكُنَّا لَهُمْ حَافِظِينَ",
        "french": "Parmi les démons, il y en avait qui plongeaient pour lui et faisaient d'autres travaux encore, et Nous les gardions."
      },
      {
        "number": 14,
        "arabic": "فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ ۖ فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ",
        "french": "Lorsque Nous décrétâmes pour lui la mort, rien ne leur indiqua sa mort si ce n'est la termitière qui rongea son bâton. Lorsqu'il tomba, les djinns comprirent que s'ils avaient connu le Mystère, ils ne seraient pas restés dans le supplice avilissant."
      },
      {
        "number": 15,
        "arabic": "لَقَدْ كَانَ لِسَبَإٍ فِي مَسْكَنِهِمْ آيَةٌ ۖ جَنَّتَانِ عَن يَمِينٍ وَشِمَالٍ ۖ كُلُوا مِن رِّزْقِ رَبِّكُمْ وَاشْكُرُوا لَهُ ۚ بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ",
        "french": "Il y avait assurément pour les Sabéens un signe dans leur habitat : deux jardins, l'un à droite et l'autre à gauche. « Mangez de la subsistance de votre Seigneur et soyez-Lui reconnaissants. Une contrée agréable et un Seigneur Pardonneur. »"
      },
      {
        "number": 16,
        "arabic": "فَأَعْرَضُوا فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ وَبَدَّلْنَاهُم بِجَنَّتَيْهِمْ جَنَّتَيْنِ ذَوَاتَيْ أُكُلٍ خَمْطٍ وَتِينٍ قَلِيلٍ",
        "french": "Ils se détournèrent. Alors, Nous déchaînâmes contre eux l'inondation du barrage, et Nous changeâmes leurs deux jardins en deux jardins aux fruits amers, tamaris et quelques jujubiers."
      },
      {
        "number": 17,
        "arabic": "ذَٰلِكَ جَزَيْنَاهُم بِمَا كَفَرُوا ۖ وَهَلْ نُجَازِي إِلَّا الْكَفُورَ",
        "french": "Ainsi les rétribuâmes-Nous pour leur mécréance. Ne punissons-Nous que les mécréants ?"
      },
      {
        "number": 18,
        "arabic": "وَجَعَلْنَا بَيْنَهُمْ وَبَيْنَ الْقُرَى الَّتِي بَارَكْنَا فِيهَا قُرًى ظَاهِرَةً وَقَدَّرْنَا فِيهَا السَّيْرَ ۖ سِيرُوا فِيهَا لَيَالِيَ وَأَيَّامًا آمِنِينَ",
        "french": "Et Nous avons placé entre eux et les cités que Nous avions bénies, d'autres cités proches et évidentes, et Nous avons fixé les étapes du voyage. Voyagez-y nuit et jour, en sécurité."
      },
      {
        "number": 19,
        "arabic": "فَقَالُوا رَبَّنَا بَاعِدْ بَيْنَ أَسْفَارِنَا ۚ وَظَلَمُوا أَنفُسَهُمْ ۖ فَجَعَلْنَاهُمْ أَحَادِيثَ وَمَزَّقْنَاهُمْ مَزْقًا ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ",
        "french": "Ils dirent : « Seigneur, allonge les distances de nos voyages ! » Ils se firent du tort à eux-mêmes. Nous fîmes d'eux des récits et les dispersâmes totalement. Il y a en cela certes des signes pour tout être endurant et reconnaissant."
      },
      {
        "number": 20,
        "arabic": "وَلَقَدْ صَدَّقَ عَلَيْهِمْ إِبْلِيسُ ظَنَّهُ فَاتَّبَعُوهُ إِلَّا فَرِيقًا مِّنَ الْمُؤْمِنِينَ",
        "french": "Iblis s'est avéré juste dans son opinion à leur sujet, et ils le suivirent sauf un groupe de croyants."
      },
      {
        "number": 21,
        "arabic": "وَمَا كَانَ لَهُ عَلَيْهِم مِّن سُلْطَانٍ إِلَّا لِنَعْلَمَ مَن يُؤْمِنُ بِالْآخِرَةِ مِمَّنْ هُوَ مِنْهَا فِي شَكٍّ ۚ وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ",
        "french": "Il n'avait nul pouvoir sur eux sauf ce que Nous voulions savoir qui croit en l'au-delà et qui en doutait. Ton Seigneur garde toute chose."
      }
    ],
    "words": [
      {
        "word": "فَضْلًا",
        "translit": "faḍlan",
        "meaning": "une grâce / un bienfait",
        "root": "ف - ض - ل",
        "rootMeaning": "faveur / grâce / excellence",
        "rootColor": 6,
        "emoji": "🌟",
        "funFactTitle": "Les cadeaux d'Allah pour David !",
        "funFact": "La racine <strong>f-ḍ-l</strong> veut dire « faveur, grâce, exceller ». Allah a donné à David un <em>faḍl</em> — une grâce EXTRAORDINAIRE : les montagnes et les oiseaux chantaient avec lui ! C'est comme un professeur qui donne un cadeau spécial à son meilleur élève. Le mot <em>faḍīl</em> = « généreux » et <em>fāḍil</em> = « excellent, méritant ». L'<em>ifḍāl</em> = « le privilège ». En arabe, <em>fāḍila</em> = « il a dépassé les autres en mérite ». Allah est <em>Dhū al-faḍl</em> (Celui qui possède la grâce) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فضل</span> (grâce), <span>فاضل</span> (excellent), <span>تفضل</span> (faire une faveur), <span>أفضل</span> (meilleur)"
      },
      {
        "word": "الرِّيحَ",
        "translit": "ar-rīḥa",
        "meaning": "le vent",
        "root": "ر - و - ح",
        "rootMeaning": "vent / souffle / esprit",
        "rootColor": 7,
        "emoji": "🌬️",
        "funFactTitle": "Le vent obéissait à Salomon !",
        "funFact": "La racine <strong>r-w-ḥ</strong> veut dire « vent, souffle, esprit ». Salomon contrôlait le vent qui le transportait d'un bout à l'autre de son royaume — comme si les nuages étaient son train personnel ! Le mot <em>rīḥ</em> = « le vent » et <em>rūḥ</em> = « l'esprit, l'âme ». En arabe, <em>tarawwuḥ</em> = « la prière de la nuit » car l'esprit est calme. Le mot <em>rāḥa</em> = « le repos, la détente » — comme quand une douce braise t'apaise. Allah a rendu le vent docile pour Salomon : imagine un roi qui contrôle le temps !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ريح</span> (vent), <span>روح</span> (esprit/âme), <span>راحة</span> (repos), <span>مريح</span> (doux/reposant)"
      },
      {
        "word": "جَنَّتَانِ",
        "translit": "jannatāni",
        "meaning": "deux jardins / deux paradis",
        "root": "ج - ن - ن",
        "rootMeaning": "jardin / paradis / cacher",
        "rootColor": 1,
        "emoji": "🌴",
        "funFactTitle": "Les deux jardins merveilleux de Saba !",
        "funFact": "La racine <strong>j-n-n</strong> veut dire « jardin, paradis, cacher ». Le peuple de Saba avait DEUX jardins magnifiques — un à droite et un à gauche — comme un parc d'attractions avec des arbres fruitiers partout ! Le mot <em>janna</em> = « le jardin » et <em>al-janna</em> = « le Paradis ». Mais cette racine donne aussi <em>jinn</em> (les djinns) car ils sont « cachés » de nos yeux. En arabe, <em>jannīn</em> = « l'embryon » car il est caché dans le ventre. Les Sabéens ont perdu leurs jardins car ils ont été ingrats !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>جنة</span> (jardin/Paradis), <span>جنان</span> (jardins), <span>جنين</span> (embryon), <span>جن</span> (djinns)"
      },
      {
        "word": "رِّزْقِ",
        "translit": "rizqi",
        "meaning": "la provision / la subsistance",
        "root": "ر - ز - ق",
        "rootMeaning": "nourrir / pourvoir / provision",
        "rootColor": 2,
        "emoji": "🌾",
        "funFactTitle": "Mange et remercie !",
        "funFact": "La racine <strong>r-z-q</strong> veut dire « nourrir, pourvoir ». Allah dit au peuple de Saba : <em>kulū min rizqi rabbikum</em> — « Mangez de la provision de votre Seigneur ! » C'est comme un parent qui prépare un festin pour ses enfants et dit « mangez et soyez reconnaissants ! ». Le mot <em>rizq</em> = « la provision » et <em>rāziq</em> = « Celui qui pourvoit ». En arabe, <em>arzāq</em> = « les provisions » et <em>istarzaqa</em> = « demander la provision ». C'est Allah qui te donne ton goûter, ton dîner, TOUT !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رزق</span> (provision), <span>رازق</span> (Celui qui pourvoit), <span>أرزاق</span> (provisions), <span>استرزاق</span> (demande de provision)"
      },
      {
        "word": "يَعْمَلُونَ",
        "translit": "yaʿmalūna",
        "meaning": "ils font / ils œuvrent",
        "root": "ع - م - ل",
        "rootMeaning": "faire / œuvrer / travailler",
        "rootColor": 3,
        "emoji": "⚒️",
        "funFactTitle": "Travailler avec soin, comme David !",
        "funFact": "La racine <strong>ʿ-m-l</strong> veut dire « faire, travailler, œuvrer ». Allah dit à David : <em>iʿmalū ṣāliḥan</em> — « Faites le bien ! » C'est comme ton professeur qui dit : « Travaille bien et sois appliqué ! ». David fabriquait des armures avec précision — chaque maille était mesurée ! Le mot <em>ʿamal</em> = « l'œuvre, l'action » et <em>ʿāmil</em> = « travailleur ». En arabe, <em>taʿmīl</em> = « mettre en pratique ». Allah est <em>baṣīr</em> — Il voit CHAQUE action que tu fais !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>عمل</span> (œuvre), <span>عامل</span> (travailleur), <span>معمل</span> (usine), <span>أعمال</span> (actions)"
      }
    ],
    "quiz": [
      {
        "question": "Quel prophète contrôlait le vent selon cette sourate ?",
        "options": [
          "Moïse",
          "Jésus",
          "Noé",
          "Salomon"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ج - ن - ن</strong> (jardin) donne aussi le mot pour :",
        "options": [
          "Les anges",
          "Les djinns",
          "Les prophètes",
          "Les étoiles"
        ],
        "correct": 1
      },
      {
        "question": "Pourquoi les deux jardins du peuple de Saba ont-ils été détruits ?",
        "options": [
          "À cause d'une sécheresse naturelle",
          "À cause de leur ingratitude",
          "Parce qu'ils étaient trop petits",
          "À cause d'une guerre"
        ],
        "correct": 1
      },
      {
        "question": "Comment les djinns ont-ils découvert la mort de Salomon ?",
        "options": [
          "Un ange leur a dit",
          "Ils l'ont vu mourir",
          "Une termitière a rongé son bâton",
          "Salomon leur a écrit"
        ],
        "correct": 2
      }
    ],
    "completionText": "Super ! 🏔️ Tu as étudié l'histoire de David et Salomon ! Tu as appris la racine <strong>ف - ض - ل</strong> (grâce), <strong>ر - و - ح</strong> (vent/esprit), <strong>ج - ن - ن</strong> (jardin), <strong>ر - ز - ق</strong> (provision) et <strong>ع - م - ل</strong> (œuvre). Sois reconnaissant pour les bienfaits d'Allah !"
  },
  {
    "id": "34-03",
    "surah": 34,
    "surahName": "Saba",
    "title": "L'intercession n'appartient qu'à Allah",
    "shortTitle": "Saba (v.22-30)",
    "subtitle": "Les associateurs disent que leurs idoles intercèdent pour eux, mais Allah clarifie : personne ne peut intercéder sans Sa permission !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 22,
        "arabic": "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِ اللَّهِ ۖ لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ وَمَا لَهُمْ فِيهِمَا مِن شِرْكٍ وَمَا لَهُ مِنْهُم مِّن ظَهِيرٍ",
        "french": "Dis : « Invoquez ceux que vous prétendez être des divinités en dehors d'Allah. Ils ne possèdent même pas le poids d'un atome, ni dans les cieux ni sur la terre. Ils n'ont aucune part à l'un ni à l'autre, et Il n'a parmi eux aucun assistant. »"
      },
      {
        "number": 23,
        "arabic": "وَلَا تَنفَعُ الشَّفَاعَةُ عِندَهُ إِلَّا لِمَنْ أَذِنَ لَهُ ۚ حَتَّىٰ إِذَا فُزِّعَ عَن قُلُوبِهِمْ قَالُوا مَاذَا قَالَ رَبُّكُمْ ۖ قَالُوا الْحَقَّ وَهُوَ الْعَلِيُّ الْكَبِيرُ",
        "french": "L'intercession auprès de Lui ne profite qu'à celui qu'Il autorise. Quand la frayeur s'éloignera de leurs cœurs, ils diront : « Qu'a dit votre Seigneur ? » Ils répondront : « La vérité. C'est Lui le Très-Haut, le Très-Grand. »"
      },
      {
        "number": 24,
        "arabic": "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاوَاتِ وَالْأَرْضِ قُلِ اللَّهُ ۖ وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى أَوْ فِي ضَلَالٍ مُّبِينٍ",
        "french": "Dis : « Qui vous donne la nourriture du ciel et de la terre ? » Dis : « Allah. » Certes, nous ou vous, nous sommes dans la bonne direction ou dans l'égarement manifeste."
      },
      {
        "number": 25,
        "arabic": "قُل لَّا تُسْأَلُونَ عَمَّا أَجْرَمْنَا وَلَا نُسْأَلُ عَمَّا تَعْمَلُونَ",
        "french": "Dis : « Vous ne serez pas interrogés sur ce que nous avons commis, et nous ne serons pas interrogés sur ce que vous faites. »"
      },
      {
        "number": 26,
        "arabic": "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ وَهُوَ الْفَتَّاحُ الْعَلِيمُ",
        "french": "Dis : « Notre Seigneur nous rassemblera, puis Il jugera entre nous avec la vérité. C'est Lui l'Ouvrant, l'Omniscient. »"
      },
      {
        "number": 27,
        "arabic": "قُلْ أَرُونِيَ الَّذِينَ أَلْحَقْتُم بِهِ شُرَكَاءَ ۖ كَلَّا ۚ بَلْ هُوَ اللَّهُ الْعَزِيزُ الْحَكِيمُ",
        "french": "Dis : « Montrez-moi ceux que vous Lui avez associés. Non ! C'est plutô Lui, Allah, le Tout-Puissant, le Sage. »"
      },
      {
        "number": 28,
        "arabic": "وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ بَشِيرًا وَنَذِيرًا وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
        "french": "Et Nous ne t'avons envoyé qu'en tant qu'annonciateur et avertisseur pour toute l'humanité. Mais la plupart des gens ne savent pas."
      },
      {
        "number": 29,
        "arabic": "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
        "french": "Et ils disent : « Quand cette promesse se réalisera-t-elle, si vous êtes véridiques ? »"
      },
      {
        "number": 30,
        "arabic": "قُل لَّكُم مِّيعَادُ يَوْمٍ لَّا تَسْتَأْخِرُونَ عَنْهُ سَاعَةً وَلَا تَسْتَقْدِمُونَ",
        "french": "Dis : « Vous avez un rendez-vous pour un jour que vous ne pouvez ni retarder d'une heure ni avancer. »"
      }
    ],
    "words": [
      {
        "word": "الشَّفَاعَةُ",
        "translit": "ash-shafāʿatu",
        "meaning": "l'intercession",
        "root": "ش - ف - ع",
        "rootMeaning": "intercéder / être pair / impair",
        "rootColor": 4,
        "emoji": "🤝",
        "funFactTitle": "Demander de l'aide pour quelqu'un !",
        "funFact": "La racine <strong>sh-f-ʿ</strong> veut dire « intercéder, s'ajouter ». La <em>shafāʿa</em> c'est quand quelqu'un demande à Allah de pardonner une autre personne — comme quand tu demandes à maman de pardonner ton petit frère ! Les associateurs pensaient que leurs idoles pouvaient intercéder, mais Allah dit : NON, seulement avec Ma permission ! Le mot <em>shafīʿ</em> = « intercesseur » et <em>shafaʿa</em> = « le nombre pair » (deux, quatre...) car l'intercesseur s'AJOUTE à celui qu'il aide. Le Prophète sera notre plus grand intercesseur au Jour du Jugement !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شفاعة</span> (intercession), <span>شفع</span> (pair/intercéder), <span>شافع</span> (intercesseur), <span>استشفاع</span> (demander l'intercession)"
      },
      {
        "word": "نَذِيرًا",
        "translit": "nadhīran",
        "meaning": "un avertisseur",
        "root": "ن - ذ - ر",
        "rootMeaning": "avertir / craindre / annoncer",
        "rootColor": 5,
        "emoji": "🚨",
        "funFactTitle": "Le Prophète = l'alarme qui réveille !",
        "funFact": "La racine <strong>n-dh-r</strong> veut dire « avertir, mettre en garde ». Le Prophète est un <em>nadhīr</em> — un avertisseur pour TOUS les humains, comme une alarme incendie qui avertit d'un danger ! Le mot <em>nudhur</em> = « avertissement » et <em>mundhir</em> = « celui qui avertit ». En arabe, <em>intadhar</em> = « attends avec crainte ». Allah envoie des <em>nudhur</em> (avertissements) pour qu'on revienne à Lui avant qu'il ne soit trop tard. Le <em>nadhīr</em> n'est pas méchant : il avertit par amour !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نذير</span> (avertisseur), <span>إنذار</span> (avertissement), <span>نذر</span> (vœu), <span>منذر</span> (celui qui avertit)"
      },
      {
        "word": "الْحَقِّ",
        "translit": "al-ḥaqqi",
        "meaning": "la vérité / la justice",
        "root": "ح - ق - ق",
        "rootMeaning": "être vrai / juste / avoir droit",
        "rootColor": 6,
        "emoji": "⚖️",
        "funFactTitle": "La vérité, c'est Allah !",
        "funFact": "La racine <strong>ḥ-q-q</strong> veut dire « être vrai, juste, avoir un droit ». Quand les anges diront ce qu'Allah a dit, ils diront <em>al-ḥaqq</em> — « la Vérité ! » C'est comme le verdict final d'un juge : personne ne peut le changer. Le mot <em>ḥaqq</em> = « la vérité, le droit » et <em>ḥaqīqa</em> = « la réalité ». En arabe, <em>iḥqāq</em> = « rendre justice » et <em>ḥaqq</em> est l'un des Noms d'Allah ! Le Prophète était surnommé <em>Ṣādiq al-Amīn</em> (le Véridique, le Digne de confiance).",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حق</span> (vérité), <span>حقيقة</span> (réalité), <span>حقوق</span> (droits), <span>أحق</span> (plus juste)"
      },
      {
        "word": "الْعَلِيمُ",
        "translit": "al-ʿalīmu",
        "meaning": "l'Omniscient / Celui qui sait tout",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 7,
        "emoji": "📚",
        "funFactTitle": "Celui qui ne rate RIEN !",
        "funFact": "La racine <strong>ʿ-l-m</strong> revient encore ! Allah est <em>al-ʿAlīm</em> — Celui qui sait TOUT sur tout le monde. Pas seulement les réponses à un contrôle, mais CHAQUE pensée, chaque rêve, chaque secret de chaque personne depuis le début des temps ! Le mot <em>ʿalīm</em> est un nom intensif — ça veut dire qu'Allah sait avec une connaissance INFINIE. En arabe, <em>ʿallāma</em> = « il a enseigné » et <em>maʿlūm</em> = « ce qui est su ». Si Allah sait tout, alors rien ne Lui échappe !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>عليم</span> (Omniscient), <span>علم</span> (savoir), <span>معلم</span> (professeur), <span>تعلم</span> (apprendre)"
      },
      {
        "word": "صَادِقِينَ",
        "translit": "ṣādiqīna",
        "meaning": "les véridiques / les sincères",
        "root": "ص - د - ق",
        "rootMeaning": "être sincère / dire la vérité / ami",
        "rootColor": 1,
        "emoji": "💎",
        "funFactTitle": "La sincérité, un trésor précieux !",
        "funFact": "La racine <strong>ṣ-d-q</strong> veut dire « être sincère, véridique ». Les associateurs disent : « Si vous êtes <em>ṣādiqīn</em> (véridiques) ! » — mais ils sont les premiers à ne pas l'être ! C'est comme un menteur qui accuse les autres de mentir ! Le mot <em>ṣidq</em> = « la sincérité » et <em>ṣadāqa</em> = « l'aumône volontaire » car elle vient d'un cœur sincère. En arabe, <em>ṣadīq</em> = « ami proche » car un vrai ami est toujours honnête. Les musulmans sont appelés à être <em>ṣādiqīn</strong> envers Allah et envers les gens !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>صادق</span> (véridique), <span>صدق</span> (sincérité), <span>صداقة</span> (amitié), <span>تصديق</span> (croire/certifier)"
      }
    ],
    "quiz": [
      {
        "question": "Qui a le droit d'intercéder (<span class=\"arabic-inline\">الشَّفَاعَةُ</span>) auprès d'Allah ?",
        "options": [
          "N'importe qui",
          "Uniquement avec la permission d'Allah",
          "Seulement les riches",
          "Personne jamais"
        ],
        "correct": 1
      },
      {
        "question": "La racine <strong>ن - ذ - ر</strong> (avertir) donne aussi le mot qui signifie :",
        "options": [
          "Le vent",
          "L'intercession",
          "L'avertisseur (nadhīr)",
          "Le jardin"
        ],
        "correct": 2
      },
      {
        "question": "Le Prophète a été envoyé à qui selon le verset 28 ?",
        "options": [
          "Seulement aux Arabes",
          "Seulement aux mecquois",
          "Aux anges seulement",
          "À toute l'humanité (kāffatan)"
        ],
        "correct": 3
      },
      {
        "question": "Peut-on avancer ou retarder le rendez-vous du Jour du Jugement ?",
        "options": [
          "Non, pas même d'une heure",
          "Oui, d'une heure",
          "Oui, d'un jour",
          "Seulement si on prie beaucoup"
        ],
        "correct": 0
      }
    ],
    "completionText": "Excellent ! 🔔 Tu as étudié les versets 22 à 30 ! Tu as découvert la racine <strong>ش - ف - ع</strong> (intercéder), <strong>ن - ذ - ر</strong> (avertir), <strong>ح - ق - ق</strong> (vérité), <strong>ص - د - ق</strong> (sincérité). Seul Allah permet l'intercession !"
  },
  {
    "id": "34-04",
    "surah": 34,
    "surahName": "Saba",
    "title": "Les idoles ne créent rien !",
    "shortTitle": "Saba (v.31-40)",
    "subtitle": "Les associateurs préfèrent leurs fausses idoles à Allah. Mais ces idoles ne créent rien, ne possèdent rien et ne peuvent rien donner !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 31,
        "arabic": "قَالَ الَّذِينَ كَفَرُوا إِنَّا لَا نُؤْمِنُ بِهَٰذَا الْقُرْآنِ وَلَا بِالَّذِي بَيْنَ يَدَيْهِ ۗ وَلَوْ تَرَىٰ إِذِ الظَّالِمُونَ مَوْقُوفُونَ عِندَ رَبِّهِمْ يَرْجِعُ بَعْضُهُمْ إِلَىٰ بَعْضٍ الْقَوْلَ يَقُولُ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا لَوْلَا أَنتُمْ لَكُنَّا مُؤْمِنِينَ",
        "french": "Ceux qui ont mécru ont dit : « Nous ne croyons ni en ce Coran ni en ce qui l'a précédé. » Et si tu voyais les injustes quand ils seront arrêtés devant leur Seigneur ! Ils se renverront la parole. Les faibles diront à ceux qui s'enflaient d'orgueil : « Sans vous, nous aurions été croyants. »"
      },
      {
        "number": 32,
        "arabic": "قَالَ الَّذِينَ اسْتَكْبَرُوا لِلَّذِينَ اسْتُضْعِفُوا أَنَحْنُ صَدَدْنَاكُمْ عَنِ الْهُدَىٰ بَعْدَ إِذْ جَاءَكُم ۖ بَلْ كُنتُمْ مُّجْرِمِينَ",
        "french": "Ceux qui s'enflaient d'orgueil diront à ceux qui étaient faibles : « Est-ce nous qui vous avons éloignés de la bonne direction après qu'elle vous est parvenue ? » Mais vous étiez plutôt des criminels."
      },
      {
        "number": 33,
        "arabic": "وَقَالَ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا بَلْ مَكْرُ اللَّيْلِ وَالنَّهَارِ إِذْ تَأْمُرُونَنَا أَن نَكْفُرَ بِاللَّهِ وَنَجْعَلَ لَهُ أَندَادًا ۚ وَأَسَرُّوا النَّدَامَةَ لَمَّا رَأَوُا الْعَذَابَ وَجَعَلْنَا الْأَغْلَالَ فِي أَعْنَاقِ الَّذِينَ كَفَرُوا ۖ هَلْ يُجْزَوْنَ إِلَّا مَا كَانُوا يَعْمَلُونَ",
        "french": "Et ceux qui étaient faibles diront à ceux qui s'enflaient d'orgueil : « C'était plutôt vos manœuvres, nuit et jour, de nous ordonner de mécroire en Allah et de Lui donner des associés. » Ils cacheront leur regret quand ils verront le châtiment. Nous mettrons des carcans aux cous de ceux qui ont mécru. Seraient-ils rétribués autrement que selon ce qu'ils faisaient ?"
      },
      {
        "number": 34,
        "arabic": "وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِّن نَّذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ",
        "french": "Et Nous n'avons envoyé dans aucune cité un avertisseur sans que ses gens aisés n'aient dit : « Nous sommes mécréants à ce qu'on vous a envoyé. »"
      },
      {
        "number": 35,
        "arabic": "وَقَالُوا نَحْنُ أَكْثَرُ أَمْوَالًا وَأَوْلَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ",
        "french": "Et ils dirent : « Nous avons plus de biens et d'enfants, et nous ne serons pas châtiés. »"
      },
      {
        "number": 36,
        "arabic": "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
        "french": "Dis : « Mon Seigneur étend la provision à qui Il veut, ou la restreint. Mais la plupart des gens ne savent pas. »"
      },
      {
        "number": 37,
        "arabic": "وَمَا أَمْوَالُكُمْ وَلَا أَوْلَادُكُم بِالَّتِي تُقَرِّبُكُمْ عِندَنَا زُلْفَىٰ إِلَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا فَأُولَٰئِكَ لَهُمْ جَزَاءُ الضِّعْفِ بِمَا عَمِلُوا وَهُمْ فِي الْغُرُفَاتِ آمِنُونَ",
        "french": "Ni vos biens ni vos enfants ne vous rapprocheront de Nous en proximité, sauf celui qui croit et fait le bien. Ceux-là auront une double récompense pour ce qu'ils faisaient, et ils seront en sécurité dans les étages élevés du Paradis."
      },
      {
        "number": 38,
        "arabic": "وَالَّذِينَ يَسْعَوْنَ فِي آيَاتِنَا مُعَاجِزِينَ أُولَٰئِكَ فِي الْعَذَابِ مُحْضَرُونَ",
        "french": "Et ceux qui s'efforcent à discréditer Nos signes, ceux-là seront traînés dans le châtiment."
      },
      {
        "number": 39,
        "arabic": "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ ۚ وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ",
        "french": "Dis : « Mon Seigneur étend la provision à qui Il veut parmi Ses serviteurs et la restreint pour lui. Et tout ce que vous dépensez, Il le remplace. C'est Lui le Meilleur des pourvoyeurs. »"
      },
      {
        "number": 40,
        "arabic": "وَيَوْمَ يَحْشُرُهُمْ جَمِيعًا ثُمَّ يَقُولُ لِلْمَلَائِكَةِ أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ",
        "french": "Et le jour où Il les rassemblera tous, Il dira aux anges : « Est-ce vous qu'ils adoraient ? »"
      }
    ],
    "words": [
      {
        "word": "مُّشْرِكِينَ",
        "translit": "mushrikīna",
        "meaning": "les associateurs",
        "root": "ش - ر - ك",
        "rootMeaning": "associer / partager / être partenaire",
        "rootColor": 2,
        "emoji": "🔗",
        "funFactTitle": "Associer = donner des partenaires à Allah !",
        "funFact": "La racine <strong>sh-r-k</strong> veut dire « associer, partager, être partenaire ». Un <em>mushrik</em> donne des partenaires à Allah — comme si quelqu'un disait que ton dessin a été fait par quelqu'un d'autre que toi ! Le mot <em>shirk</em> = « l'association » et c'est le PLUS GRAND péché en islam. En arabe, <em>sharīk</em> = « partenaire, associé » et <em>sharika</em> = « la société, l'entreprise ». On dit <em>mushāraka</em> = « la participation ». Allah est UNIQUE — Il n'a besoin d'aucun partenaire pour gérer l'univers !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شرك</span> (association), <span>مشرك</span> (associateur), <span>شريك</span> (partenaire), <span>مشاركة</span> (participation)"
      },
      {
        "word": "يَعْبُدُونَ",
        "translit": "yaʿbudūna",
        "meaning": "ils adorent",
        "root": "ع - ب - د",
        "rootMeaning": "adorer / servir / être serviteur",
        "rootColor": 3,
        "emoji": "🤲",
        "funFactTitle": "Adorer = se mettre au service !",
        "funFact": "La racine <strong>ʿ-b-d</strong> veut dire « adorer, servir ». Les associateurs adoraient les anges au lieu d'Allah ! Mais au Jour du Jugement, les anges diront : « C'est NOUS que vous adoriez ?! » — comme un poster de foot star qui dirait : « Pourquoi tu me pries, prie le vrai Champion ! ». Le mot <em>ʿabd</em> = « serviteur » et <em>ʿibāda</em> = « l'adoration ». En arabe, <em>ʿubūdiyya</em> = « la servitude envers Allah ». Le meilleur nom est <em>ʿAbdullāh</em> (serviteur d'Allah) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>عبد</span> (serviteur), <span>عبادة</span> (adoration), <span>عابد</span> (adorateur), <span>عبودية</span> (servitude)"
      },
      {
        "word": "أَكْثَرُ",
        "translit": "aktharu",
        "meaning": "plus (de) / la plupart",
        "root": "ك - ث - ر",
        "rootMeaning": "être nombreux / beaucoup / abonder",
        "rootColor": 4,
        "emoji": "📊",
        "funFactTitle": "Plus n'est pas toujours mieux !",
        "funFact": "La racine <strong>k-th-r</strong> veut dire « être nombreux, beaucoup ». Les associateurs disaient : « Nous avons PLUS d'argent et PLUS d'enfants ! » — comme un élève qui dit « j'ai PLUS de stylos que toi, donc je suis meilleur ! » Mais Allah répond : la richesse ne rapproche pas de Moi ! Le mot <em>kathīr</em> = « beaucoup » et <em>akthar</em> = « plus ». En arabe, <em>kathrat</em> = « la quantité » et <em>istakthara</em> = « chercher à avoir plus ». Ce qui compte, c'est la QUALITÉ de la foi, pas la quantité de biens !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>كثر</span> (beaucoup), <span>أكثر</span> (plus), <span>كثرة</span> (abondance), <span>تكثير</span> (multiplier)"
      },
      {
        "word": "يَبْسُطُ",
        "translit": "yabsuṭu",
        "meaning": "Il étend / Il accorde largement",
        "root": "ب - س - ط",
        "rootMeaning": "étendre / élargir / accorder",
        "rootColor": 5,
        "emoji": "📏",
        "funFactTitle": "Allah donne à qui Il veut !",
        "funFact": "La racine <strong>b-s-ṭ</strong> veut dire « étendre, élargir, accorder ». Allah <em>yabsuṭu</em> (étend) la provision à qui Il veut — comme un chef qui sert des grandes portions à certains et des petites à d'autres, mais chacun reçoit ce qui est bon pour lui ! Le mot <em>basṭa</em> = « il a étendu » et <em>inbisāṭ</em> = « la détente, l'aisance ». En arabe, <em>mbasṭ</em> = « celui qui est détendu ». Allah donne avec Sagesse : parfois peu mais béni, parfois beaucoup mais comme épreuve !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بسط</span> (étendre), <span>انبساط</span> (détente), <span>بسيط</span> (simple/étendu), <span>مبسوط</span> (détendu/heureux)"
      },
      {
        "word": "يَحْشُرُهُمْ",
        "translit": "yaḥshuruhum",
        "meaning": "Il les rassemble",
        "root": "ح - ش - ر",
        "rootMeaning": "rassembler / collecter / réunion",
        "rootColor": 6,
        "emoji": "👥",
        "funFactTitle": "Le plus grand rassemblement de l'histoire !",
        "funFact": "La racine <strong>ḥ-sh-r</strong> veut dire « rassembler, collecter ». Au Jour du Jugement, Allah <em>yaḥshuru</em> tous les humains — comme un directeur d'école qui rassemble TOUS les élèves de l'histoire dans la même cour ! Le mot <em>ḥashr</em> = « le rassemblement » et <em>maḥshar</em> = « le lieu du rassemblement ». En arabe, <em>ḥāshir</em> = « celui qui rassemble ». Imagine : des MILLIARDS de personnes au même endroit ! Seul Allah peut faire ça. C'est le jour où chacun sera face à ses actes.",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حشر</span> (rassemblement), <span>محشر</span> (lieu de rassemblement), <span>تحشير</span> (rassemblement), <span>حاشرة</span> (troupe)"
      }
    ],
    "quiz": [
      {
        "question": "Les associateurs pensaient que quoi les rapprochait d'Allah ?",
        "options": [
          "La prière et le jeûne",
          "Leurs biens et leurs enfants",
          "Le voyage",
          "La lecture du Coran"
        ],
        "correct": 1
      },
      {
        "question": "La racine <strong>ش - ر - ك</strong> (associer) correspond à quel grand péché ?",
        "options": [
          "Le mensonge",
          "Le vol",
          "La paresse",
          "L'association (shirk)"
        ],
        "correct": 3
      },
      {
        "question": "Que font les riches associateurs quand ils voient le châtiment ?",
        "options": [
          "Ils sont contents",
          "Ils s'enfuient",
          "Ils cachent leur regret",
          "Ils demandent pardon immédiatement"
        ],
        "correct": 2
      },
      {
        "question": "Quand Allah rassemblera tout le monde, que dira-t-Il aux anges ?",
        "options": [
          "Punissez-les",
          "Est-ce VOUS qu'ils adoraient ?",
          "Donnez-leur le Paradis",
          "Oubliez-les"
        ],
        "correct": 1
      }
    ],
    "completionText": "Génial ! 💎 Tu as étudié les versets 31 à 40 ! Tu as appris la racine <strong>ش - ر - ك</strong> (associer), <strong>ع - ب - د</strong> (adorer), <strong>ك - ث - ر</strong> (beaucoup), <strong>ب - س - ط</strong> (étendre) et <strong>ح - ش - ر</strong> (rassembler). L'argent et les enfants ne rapprochent pas d'Allah !"
  },
  {
    "id": "34-05",
    "surah": 34,
    "surahName": "Saba",
    "title": "Le châtiment des associateurs et la victoire des croyants",
    "shortTitle": "Saba (v.41-54)",
    "subtitle": "Les associateurs se repentent trop tard ! Allah montre que les faux dieux nieront toute association, et les croyants seront sauvés.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 41,
        "arabic": "قَالُوا سُبْحَانَكَ أَنتَ وَلِيُّنَا مِن دُونِهِم ۚ بَلْ كَانُوا يَعْبُدُونَ الْجِنَّ ۖ أَكْثَرُهُم بِهِم مُّؤْمِنُونَ",
        "french": "Ils diront : « Gloire à Toi ! Tu es notre Allié en dehors d'eux. » Ils n'adoraient que les djinns, et la plupart d'entre eux croyaient en eux."
      },
      {
        "number": 42,
        "arabic": "فَالْيَوْمَ لَا يَمْلِكُ بَعْضُكُمْ لِبَعْضٍ نَّفْعًا وَلَا ضَرًّا وَنَقُولُ لِلَّذِينَ ظَلَمُوا ذُوقُوا عَذَابَ النَّارِ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ",
        "french": "Ce jour-là, aucun d'entre vous ne pourra être ni utile ni nuisible à l'autre. Et Nous dirons à ceux qui ont été injustes : « Goûtez au châtiment du Feu que vous traitiez de mensonge. »"
      },
      {
        "number": 43,
        "arabic": "وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالُوا مَا هَٰذَا إِلَّا رَجُلٌ يُرِيدُ أَن يَصُدَّكُمْ عَمَّا كَانَ يَعْبُدُ آبَاؤُكُمْ وَقَالُوا مَا هَٰذَا إِلَّا إِفْكٌ مُّفْتَرًى ۚ وَقَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ",
        "french": "Et quand Nos versets clairs leur sont récités, ils disent : « Ce n'est qu'un homme qui veut vous détourner de ce que vos ancêtres adoraient. » Et ils disent : « Ce n'est qu'un mensonge inventé. » Et ceux qui ont mécru ont dit de la Vérité quand elle est venue : « Ce n'est qu'une magie évidente ! »"
      },
      {
        "number": 44,
        "arabic": "وَمَا آتَيْنَاهُم مِّن كُتُبٍ يَدْرُسُونَهَا ۖ وَمَا أَرْسَلْنَا إِلَيْهِمْ قَبْلَكَ مِن نَّذِيرٍ",
        "french": "Et Nous ne leur avons pas donné de Livres qu'ils étudieraient. Et Nous ne leur avons envoyé avant toi aucun avertisseur."
      },
      {
        "number": 45,
        "arabic": "وَكَذَّبَ الَّذِينَ مِن قَبْلِهِمْ وَمَا بَلَغُوا مِعْشَارَ مَا آتَيْنَاهُمْ فَكَذَّبُوا رُسُلِي ۖ فَكَيْفَ كَانَ نَكِيرِ",
        "french": "Et ceux d'avant eux ont aussi menti, alors qu'ils n'avaient pas reçu le dixième de ce que Nous leur avons donné. Ils ont traité Mes messagers de menteurs. Combien fut Mon châtiment !"
      },
      {
        "number": 46,
        "arabic": "قُلْ إِنَّمَا أَعِظُكُم بِوَاحِدَةٍ ۖ أَن تَقُومُوا لِلَّهِ مَثْنَىٰ وَفُرَادَىٰ ثُمَّ تَتَفَكَّرُوا ۚ مَا بِصَاحِبِكُم مِّن جِنَّةٍ ۚ إِنْ هُوَ إِلَّا نَذِيرٌ لَّكُم بَيْنَ يَدَيْ عَذَابٍ شَدِيدٍ",
        "french": "Dis : « Je vous exhorte à une seule chose : que vous vous teniez debout pour Allah, par deux et par un, puis que vous réfléchissiez. Votre compagnon n'est nullement fou. Il n'est pour vous qu'un avertisseur avant un dur châtiment. »"
      },
      {
        "number": 47,
        "arabic": "قُلْ مَا سَأَلْتُكُم مِّنْ أَجْرٍ فَهُوَ لَكُمْ ۖ إِنْ أَجْرِيَ إِلَّا عَلَى اللَّهِ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
        "french": "Dis : « Je ne vous demande aucun salaire pour cela. Mon salaire n'incombe qu'à Allah. Et Il est Témoin de toute chose. »"
      },
      {
        "number": 48,
        "arabic": "قُلْ إِنَّ رَبِّي يَقْذِفُ بِالْحَقِّ عَلَّامُ الْغُيُوبِ",
        "french": "Dis : « Certes, mon Seigneur lance la Vérité. Il est le Grand Connaisseur de l'Invisible. »"
      },
      {
        "number": 49,
        "arabic": "قُلْ جَاءَ الْحَقُّ وَمَا يُبْدِئُ الْكَاذِبُونَ وَمَا يُعِيدُونَ",
        "french": "Dis : « La Vérité est venue. Et le mensonge ne peut ni commencer ni recommencer. »"
      },
      {
        "number": 50,
        "arabic": "قُلْ إِن ضَلَلْتُ فَإِنَّمَا أَضِلُّ عَلَىٰ نَفْسِي وَإِنِ اهْتَدَيْتُ فَبِمَا يُوحِي إِلَيَّ رَبِّي ۚ إِنَّهُ سَمِيعٌ قَرِيبٌ",
        "french": "Dis : « Si je m'égare, je ne m'égare qu'à mon propre détriment. Si je suis guidé, c'est par ce que mon Seigneur me révèle. Certes, Il est Audient, Proche. »"
      },
      {
        "number": 51,
        "arabic": "وَلَوْ تَرَىٰ إِذْ فَزِعُوا فَلَا فَوْتَ وَأُخِذُوا مِن مَّكَانٍ قَرِيبٍ",
        "french": "Et si tu voyais quand ils seront saisis de peur ! Il n'y aura pas d'échappatoire, et ils seront pris de près."
      },
      {
        "number": 52,
        "arabic": "وَقَالُوا آمَنَّا بِهِ وَأَنَّىٰ لَهُمُ التَّنَاوُشُ مِن مَّكَانٍ بَعِيدٍ",
        "french": "Et ils diront : « Nous croyons en lui. » Comment pourraient-ils l'attraper d'un endroit si lointain ?"
      },
      {
        "number": 53,
        "arabic": "وَقَدْ كَفَرُوا بِهِ مِن قَبْلُ وَيَقْذِفُونَ بِالْغَيْبِ مِن مَّكَانٍ بَعِيدٍ",
        "french": "Alors qu'ils y avaient déjà mécru, et qu'ils jetaient des regards vers l'Invisible depuis un endroit lointain."
      },
      {
        "number": 54,
        "arabic": "وَحِيلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُونَ كَمَا فُعِلَ بِأَشْيَاعِهِم مِّن قَبْلُ ۚ إِنَّهُمْ كَانُوا فِي شَكٍّ مُّرِيبٍ",
        "french": "Et on dressera une barrière entre eux et ce qu'ils désirent, comme on l'a fait pour leurs semblables auparavant. Ils étaient dans un doute profondément troublant."
      }
    ],
    "words": [
      {
        "word": "النَّارِ",
        "translit": "an-nāri",
        "meaning": "le Feu (l'Enfer)",
        "root": "ن - و - ر",
        "rootMeaning": "feu / lumière / briller",
        "rootColor": 7,
        "emoji": "🔥",
        "funFactTitle": "Le feu qui punit ou éclaire !",
        "funFact": "La racine <strong>n-w-r</strong> veut dire « feu, lumière ». Le <em>nār</em> (le feu de l'Enfer) est la punition pour ceux qui ont menti — comme un four chauffé à rouge pour cuire le pain, mais ici c'est pour ceux qui ont rejeté la vérité. Mais cette même racine donne <em>nūr</em> = « la lumière » ! Le feu peut brûler OU éclairer. En arabe, <em>manār</em> = « le phare » et <em>nayyir</em> = « lumineux ». Allah est <em>Nūr as-samāwāt</em> (la Lumière des cieux) — choisis la lumière du Paradis !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نار</span> (feu), <span>نور</span> (lumière), <span>منار</span> (phare), <span>تنوير</span> (illumination)"
      },
      {
        "word": "تَتَفَكَّرُوا",
        "translit": "tatafakkarū",
        "meaning": "vous réfléchissez / vous méditez",
        "root": "ف - ك - ر",
        "rootMeaning": "penser / réfléchir / méditer",
        "rootColor": 1,
        "emoji": "💭",
        "funFactTitle": "Arrête et réfléchis !",
        "funFact": "La racine <strong>f-k-r</strong> veut dire « penser, réfléchir ». Allah dit : <em>tatafakkarū</em> — « Réfléchissez ! » C'est comme un détective qui observe les indices pour comprendre un mystère. Allah nous demande de réfléchir à Ses signes dans la nature, dans le Coran, dans notre propre corps ! Le mot <em>tafakkur</em> = « la réflexion profonde » et <em>fikr</em> = « la pensée ». En arabe, <em>fafkara</em> = « il a pensé » et <em>mufakkir</em> = « un penseur ». Le Prophète a dit : « Une heure de réflexion vaut mieux que 60 ans d'adoration ! »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>تفكر</span> (réflexion), <span>فكر</span> (pensée), <span>فكرة</span> (idée), <span>مفكر</span> (penseur)"
      },
      {
        "word": "شَهِيدٌ",
        "translit": "shahīdun",
        "meaning": "Témoin",
        "root": "ش - ه - د",
        "rootMeaning": "témoigner / être présent / certifier",
        "rootColor": 2,
        "emoji": "📝",
        "funFactTitle": "Allah est le Témoin de TOUT !",
        "funFact": "La racine <strong>sh-h-d</strong> veut dire « témoigner, être présent ». Allah est <em>shahīd</em> — le Témoin de chaque chose que tu fais, même quand personne d'autre ne regarde ! C'est comme une caméra de surveillance mais INFINIE et parfaite. Le mot <em>shahāda</em> = « le témoignage » et <em>shahīd</em> = « témoin ». En arabe, <em>shuhadāʾ</em> = « les martyrs/témoins » car ils ont témoigné de leur foi jusqu'au bout. La <em>shahāda</em> (la déclaration de foi) est le plus beau témoignage !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شهيد</span> (témoin), <span>شهادة</span> (témoignage), <span>شهداء</span> (martyrs), <span>مشهد</span> (scène/témoignage)"
      },
      {
        "word": "سَمِيعٌ",
        "translit": "samīʿun",
        "meaning": "Celui qui entend tout",
        "root": "س - م - ع",
        "rootMeaning": "entendre / écouter / obéir",
        "rootColor": 3,
        "emoji": "👂",
        "funFactTitle": "Allah entend chaque mot, même un murmure !",
        "funFact": "La racine <strong>s-m-ʿ</strong> veut dire « entendre, écouter ». Allah est <em>samīʿ</em> — Il entend TOUT, même tes prières silencieuses dans ta chambre la nuit ! C'est comme un micro qui capte le son d'une chute d'épingle à 1000 kilomètres. Le mot <em>samʿ</em> = « l'ouïe » et <em>isṭimāʿ</em> = « l'écoute attentive ». En arabe, <em>sāmiʿ</em> = « celui qui entend » et <em>taṣmiya</em> = « dire bismillāh ». Allah est à la fois <em>Samīʿ</em> (Celui qui entend) et <em>Baṣīr</em> (Celui qui voit) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>سمع</span> (entendre), <span>استماع</span> (écoute), <span>سامع</span> (celui qui entend), <span>تسمية</span> (nomination)"
      },
      {
        "word": "ضَلَلْتُ",
        "translit": "ḍalaltu",
        "meaning": "je me suis égaré",
        "root": "ض - ل - ل",
        "rootMeaning": "s'égarer / perdre le chemin",
        "rootColor": 4,
        "emoji": "🧭",
        "funFactTitle": "Perdre son chemin, c'est grave !",
        "funFact": "La racine <strong>ḍ-l-l</strong> veut dire « s'égarer, perdre le chemin ». Le Prophète dit honnêtement : « Si je m'égare, c'est à mon propre détriment » — c'est comme un guide de montagne qui admet qu'il pourrait se tromper, mais il suit une carte parfaite (la révélation) ! Le mot <em>ḍalāl</em> = « l'égarement » et <em>ḍāll</em> = « égaré ». En arabe, <em>aḍallahu</em> = « il l'a égaré » et <em>ḍalīl</em> = « le guide égaré ». La différence entre <em>ḍalāl</em> et <em>dalāl</em> est comme la différence entre un labyrinthe sombre et un chemin illuminé !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ضلال</span> (égarement), <span>ضال</span> (égaré), <span>أضل</span> (il a égaré), <span>دلال</span> (guidance)"
      }
    ],
    "quiz": [
      {
        "question": "Quand les anges seront interrogés, que diront-ils à propos de l'adoration des associateurs ?",
        "options": [
          "Gloire à Toi ! Tu es notre Allié",
          "Oui, ils nous adoraient",
          "Nous ne savons pas",
          "Ils n'adoraient personne"
        ],
        "correct": 0
      },
      {
        "question": "La racine <strong>ف - ك - ر</strong> (réfléchir) est très importante car Allah demande de :",
        "options": [
          "Manger plus",
          "Dormir plus",
          "Réfléchir à Ses signes",
          "Courir plus vite"
        ],
        "correct": 2
      },
      {
        "question": "Que se passe-t-il quand les associateurs veulent croire au Jour du Jugement ?",
        "options": [
          "On les accepte immédiatement",
          "C'est trop tard, ils sont loin",
          "Ils reçoivent le Paradis",
          "Les anges prient pour eux"
        ],
        "correct": 1
      },
      {
        "question": "Si le Prophète s'égare, qui en souffre selon le verset 50 ?",
        "options": [
          "Tout le monde",
          "Lui-même",
          "Seulement les associateurs",
          "Les anges"
        ],
        "correct": 1
      }
    ],
    "completionText": "Magnifique ! 🏆 Tu as terminé la sourate Saba ! Tu as appris la racine <strong>ن - و - ر</strong> (feu/lumière), <strong>ف - ك - ر</strong> (réfléchir), <strong>ش - ه - د</strong> (témoigner), <strong>س - م - ع</strong> (entendre) et <strong>ض - ل - ل</strong> (s'égarer). Réfléchis aux signes d'Allah et reste sur le droit chemin !"
  },
  {
    "id": "35-01",
    "surah": 35,
    "surahName": "Fatir",
    "title": "Les anges messagers et la création par paires",
    "shortTitle": "Fatir (v.1-10)",
    "subtitle": "Allah a créé les anges et vous a créés de rien. Il a fait toute chose par paires — découvrez les merveilles du Créateur !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 1,
        "arabic": "الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ ۚ يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        "french": "Louange à Allah, Créateur des cieux et de la terre, qui a fait des anges Ses messagers dotés de deux, trois ou quatre ailes. Il ajoute à la création ce qu'Il veut. Allah est Omnipotent."
      },
      {
        "number": 2,
        "arabic": "مَا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ مِن بَعْدِهِ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
        "french": "Ce qu'Allah accorde de miséricorde aux gens, personne ne peut le retenir. Et ce qu'Il retient, personne ne peut le relâcher après Lui. C'est Lui le Tout-Puissant, le Sage."
      },
      {
        "number": 3,
        "arabic": "يَا أَيُّهَا النَّاسُ اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ ۚ هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ ۚ لَا إِلَٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
        "french": "Ô hommes ! Rappelez-vous les bienfaits d'Allah pour vous. Y a-t-il un autre créateur qu'Allah qui vous pourvoit du ciel et de la terre ? Il n'y a de divinité que Lui. Comment pouvez-vous vous détourner ?"
      },
      {
        "number": 4,
        "arabic": "وَإِن يُكَذِّبُوكَ فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ ۚ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ",
        "french": "S'ils te traitent de menteur, certes des messagers avant toi ont été traités de menteurs. C'est à Allah que toute chose est renvoyée."
      },
      {
        "number": 5,
        "arabic": "يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ",
        "french": "Ô hommes ! La promesse d'Allah est vérité. Que la vie présente ne vous trompe pas, et que le Trompeur ne vous trompe pas à propos d'Allah."
      },
      {
        "number": 6,
        "arabic": "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ فَاتَّخِذُوهُ عَدُوًّا ۚ إِنَّمَا يَدْعُو حِزْبَهُ لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ",
        "french": "Le Diable est pour vous un ennemi. Prenez-le pour ennemi. Il ne fait qu'appeler ses partisans pour qu'ils soient du nombre des gens de la Fournaise."
      },
      {
        "number": 7,
        "arabic": "الَّذِينَ كَفَرُوا لَهُمْ عَذَابٌ شَدِيدٌ ۖ وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ عَظِيمٌ",
        "french": "Ceux qui ont mécru auront un châtiment sévère. Et ceux qui ont cru et fait de bonnes œuvres auront un pardon et une récompense immense."
      },
      {
        "number": 8,
        "arabic": "أَفَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ فَرَآهُ حَسَنًا ۖ فَإِنَّ اللَّهَ يُضِلُّ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ ۖ فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرَاتٍ ۚ إِنَّ اللَّهَ عَلِيمٌ بِمَا يَصْنَعُونَ",
        "french": "Celui dont le mauvais action a été embelli et qui la voit comme bonne… est-ce que celui qu'Allah égare est semblable à celui qu'Il guide ? Que ton âme ne se consume pas de tristesse pour eux. Allah sait parfaitement ce qu'ils font."
      },
      {
        "number": 9,
        "arabic": "وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ ۖ وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا",
        "french": "Et c'est Lui qui a envoyé les vents comme une annonce de Sa miséricorde. Et Nous avons fait descendre du ciel une eau pure."
      },
      {
        "number": 10,
        "arabic": "لِنُحْيِيَ بِهِ بَلْدَةً مَّيْتًا وَنُسْقِيَهُ مِمَّا خَلَقْنَا أَنْعَامًا وَأَنَاسِيَّ كَثِيرًا",
        "french": "Pour revivre par elle une terre morte, et donner à boire à ce que Nous avons créé : bétail et nombre d'hommes."
      }
    ],
    "words": [
      {
        "word": "الْمَلَائِكَةِ",
        "translit": "al-malāʾikati",
        "meaning": "les anges",
        "root": "م - ل - ك",
        "rootMeaning": "posséder / roi / ange",
        "rootColor": 1,
        "emoji": "👼",
        "funFactTitle": "Les anges : les messagers d'Allah !",
        "funFact": "La racine <strong>m-l-k</strong> veut dire « posséder, régner ». Les <em>malāʾika</em> (anges) sont les messagers d'Allah — ils ont 2, 3 ou 4 ailes ! Imagine un super-héros avec des ailes qui transmet les ordres d'Allah à la vitesse de la lumière ! Cette racine donne aussi <em>malik</em> = « roi » car le roi possède son royaume. Le mot <em>mulk</em> = « la royauté » et <em>mamlaka</em> = « le royaume ». En arabe, <em>tamallaka</em> = « il a pris possession ». Les anges sont les <em>malāʾika</em> car ils exécutent la volonté du Roi suprême !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ملائكة</span> (anges), <span>ملك</span> (roi), <span>ملك</span> (royauté), <span>مملكة</span> (royaume)"
      },
      {
        "word": "فَاطِرِ",
        "translit": "fāṭiri",
        "meaning": "le Créateur (Celui qui initie)",
        "root": "ف - ط - ر",
        "rootMeaning": "créer / fendre / initier",
        "rootColor": 2,
        "emoji": "🌍",
        "funFactTitle": "Le NOM de cette sourate !",
        "funFact": "La racine <strong>f-ṭ-r</strong> veut dire « créer en ouvrant, fendre, initier ». <em>Fāṭir</em> = Celui qui crée du NOTHING — comme un magicien qui fait apparaître un lapin d'un chapeau vide, mais pour de vrai et à une échelle INFINIE ! C'est le NOM de la sourate ! Le mot <em>faṭara</em> = « il a fendu/créé » et <em>ifṭār</em> = « la rupture du jeûne » car on « fend » le jeûne. En arabe, <em>fatīra</em> = « la pâte » car on la pétrit et la fend. <em>Fāṭir as-samāwāt</em> = le Créateur des cieux !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فاطر</span> (Créateur), <span>فطر</span> (créer/initier), <span>إفطار</span> (rupture du jeûne), <span>فطورة</span> (pâte/nature)"
      },
      {
        "word": "رَحْمَةٍ",
        "translit": "raḥmatin",
        "meaning": "la miséricorde",
        "root": "ر - ح - م",
        "rootMeaning": "miséricorde / tendresse / compassion",
        "rootColor": 3,
        "emoji": "💝",
        "funFactTitle": "La miséricorde d'Allah est infinie !",
        "funFact": "La racine <strong>r-ḥ-m</strong> veut dire « miséricorde, tendresse ». La <em>raḥma</em> est comme une couverture chaude en hiver — elle réconforte et protège. Allah est <em>Ar-Raḥmān</em> (le Très-Miséricordieux) et <em>Ar-Raḥīm</em> (le Tout-Miséricordieux) ! Le mot <em>raḥīm</em> = « compatissant » et <em>raḥma</em> = « la miséricorde ». En arabe, <em>riḁm</em> = « le ventre de la mère » car la mère est la plus miséricordieuse. Le Prophète a dit : « Allah a divisé la miséricorde en 100 parts, et en a gardé 99 pour Lui ! »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>رحمة</span> (miséricorde), <span>رحمن</span> (Très-Miséricordieux), <span>رحيم</span> (Tout-Miséricordieux), <span>رحم</span> (matrice/tendresse)"
      },
      {
        "word": "أَجْنِحَةٍ",
        "translit": "ajniḥatin",
        "meaning": "des ailes",
        "root": "ج - ن - ح",
        "rootMeaning": "aile / côté / se pencher",
        "rootColor": 4,
        "emoji": "🪽",
        "funFactTitle": "Les anges ont des ailes !",
        "funFact": "La racine <strong>j-n-ḥ</strong> veut dire « aile, côté, se pencher ». Les anges ont des <em>ajniḥa</em> (ailes) — 2, 3 ou 4 — comme des oiseaux messagers mais en mille fois plus puissants ! Le mot <em>janāḥ</em> = « l'aile » et <em>majnūḥ</em> = « celui qui a une aile ». En arabe, <em>jināḥ</em> = « le côté, le flanc » car l'aile est sur le côté du corps. Le <em>tajannuḥ</em> = « se pencher vers ». Les anges utilisent leurs ailes pour voyager à une vitesse incroyable entre les cieux et la terre !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>جناح</span> (aile), <span>أجنحة</span> (ailes), <span>جانب</span> (côté), <span>مجنحة</span> (ailée)"
      },
      {
        "word": "أَنْعَامًا",
        "translit": "anʿāman",
        "meaning": "des animaux / du bétail",
        "root": "ن - ع - م",
        "rootMeaning": "bienfait / douceur / bétail",
        "rootColor": 5,
        "emoji": "🐄",
        "funFactTitle": "Les animaux, un bienfait d'Allah !",
        "funFact": "La racine <strong>n-ʿ-m</strong> veut dire « bienfait, douceur ». Le mot <em>anʿām</em> = « le bétail » (vaches, moutons, chameaux...) car ces animaux sont un BIENFAIT immense — ils nous donnent du lait, de la viande et de la laine ! C'est comme une ferme que Allah t'offre gratuitement ! Le mot <em>naʿīm</em> = « le délice » et <em>niʿma</em> = « la grâce, le bienfait ». En arabe, <em>nāʿim</em> = « heureux » et <em>inʿām</em> = « faire don de ». Chaque fois que tu bois du lait, remercie Allah pour les <em>anʿām</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>نعم</span> (bienfait), <span>نعيم</span> (délice), <span>إنعام</span> (faire don), <span>نعمة</span> (grâce)"
      }
    ],
    "quiz": [
      {
        "question": "Comment s'appelle la sourate 35, d'après le verset 1 ?",
        "options": [
          "Al-Mala'ika",
          "Fatir (Le Créateur)",
          "Ar-Rahman",
          "Al-An'am"
        ],
        "correct": 1
      },
      {
        "question": "Combien d'ailes les anges peuvent-ils avoir selon le verset 1 ?",
        "options": [
          "Deux, trois ou quatre",
          "Seulement deux",
          "Cent",
          "Ils n'ont pas d'ailes"
        ],
        "correct": 0
      },
      {
        "question": "La racine <strong>ر - ح - م</strong> (miséricorde) est à l'origine de quels Noms d'Allah ?",
        "options": [
          "Al-Aziz et Al-Hakim",
          "Ar-Rahman et Ar-Rahim",
          "Al-Ali et Al-Kabir",
          "As-Sami et Al-Basir"
        ],
        "correct": 1
      },
      {
        "question": "Pourquoi le Diable est-il appelé ennemi ?",
        "options": [
          "Parce qu'il est fort",
          "Parce qu'il est beau",
          "Parce qu'il appelle à la Fournaise",
          "Parce qu'il est intelligent"
        ],
        "correct": 2
      }
    ],
    "completionText": "Bravo ! ✨ Tu as commencé la sourate Fatir ! Tu as découvert les racines <strong>م - ل - ك</strong> (ange/roi), <strong>ف - ط - ر</strong> (créer/initier), <strong>ر - ح - م</strong> (miséricorde), <strong>ج - ن - ح</strong> (aile) et <strong>ن - ع - م</strong> (bienfait). Prends le Diable pour ennemi !"
  },
  {
    "id": "35-02",
    "surah": 35,
    "surahName": "Fatir",
    "title": "Créés d'argile, retournés à Allah",
    "shortTitle": "Fatir (v.11-18)",
    "subtitle": "Allah vous a créés d'argile, puis Il vous fera mourir. L'aveugle et le voyant ne sont PAS égaux !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 11,
        "arabic": "وَاللَّهُ خَلَقَكُم مِّن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ جَعَلَكُمْ أَزْوَاجًا ۚ وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ ۚ وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ",
        "french": "Et Allah vous a créés de terre, puis d'une goutte de sperme, puis Il a fait de vous des couples. Nulle femelle ne porte ni ne met bas sans qu'Il le sache. Et aucune existence n'est prolongée ou abrégée sans que cela soit inscrit dans un Livre. Cela est facile pour Allah."
      },
      {
        "number": 12,
        "arabic": "وَمَا يَسْتَوِي الْبَحْرَانِ هَٰذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ وَهَٰذَا مِلْحٌ أُجَاجٌ وَمِن كُلٍّ تَأْكُلُونَ لَحْمًا طَرِيًّا وَتَسْتَخْرِجُونَ حِلْيَةً تَلْبَسُونَهَا ۖ وَتَرَى الْفُلْكَ فِيهِ مَوَاخِرَ لِتَبْتَغُوا مِن فَضْلِهِ وَلَعَلَّكُمْ تَشْكُرُونَ",
        "french": "Et les deux mers ne sont pas identiques : l'une est douce, rafraîchissante et agréable à boire, et l'autre est salée, amère. De chacune vous mangez une chair fraîche et vous extrayez un ornement que vous portez. Tu vois le navire y fendre les vagues pour que vous cherchiez de Ses bienfaits. Peut-être serez-vous reconnaissants."
      },
      {
        "number": 13,
        "arabic": "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى ۚ ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ وَالَّذِينَ تَدْعُونَ مِن دُونِهِ مَا يَمْلِكُونَ مِن قِطْمِيرٍ",
        "french": "Il fait pénétrer la nuit dans le jour et le jour dans la nuit. Et Il a assujetti le soleil et la lune, chacun courant vers un terme fixé. Tel est Allah votre Seigneur, à Lui la royauté. Ceux que vous invoquez en dehors de Lui ne possèdent même pas la pellicule d'un noyau de datte."
      },
      {
        "number": 14,
        "arabic": "إِن تَدْعُوهُمْ لَا يَسْمَعُوا دُعَاءَكُمْ وَلَوْ سَمِعُوا مَا اسْتَجَابُوا لَكُمْ ۖ وَيَوْمَ الْقِيَامَةِ يَكْفُرُونَ بِشِرْكِكُمْ ۖ وَلَا يُنَبِّئُكَ مِثْلُ خَبِيرٍ",
        "french": "Si vous les invoquez, ils n'entendent pas votre invocation. Et même s'ils entendaient, ils ne pourraient pas vous répondre. Et le Jour de la Résurrection, ils renieront votre association. Nul ne peut t'informer comme Celui qui est parfaitement informé."
      },
      {
        "number": 15,
        "arabic": "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ ۖ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ",
        "french": "Ô hommes ! C'est vous qui avez besoin d'Allah. Et Allah, c'est Lui Qui Se dispense de tout et Il est Digne de louanges."
      },
      {
        "number": 16,
        "arabic": "إِن يَشَأْ يُذْهِبْكُمْ وَيَأْتِ بِخَلْقٍ جَدِيدٍ",
        "french": "S'Il veut, Il vous fait disparaître et fait venir une création nouvelle."
      },
      {
        "number": 17,
        "arabic": "وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ",
        "french": "Et cela pour Allah n'est nullement difficile."
      },
      {
        "number": 18,
        "arabic": "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۚ وَإِن تَدْعُ مُثْقَلَةٌ إِلَىٰ حِمْلِهَا لَا يُحْمَلْ مِنْهُ شَيْءٌ وَلَوْ كَانَ ذَا قُرْبَىٰ ۗ إِنَّمَا تُنذِرُ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ وَأَقَامُوا الصَّلَاةَ ۚ وَمَن يَزْكُ فَإِنَّمَا يَزْكِي لِنَفْسِهِ ۚ وَإِلَى اللَّهِ الْمَصِيرُ",
        "french": "Et aucune âme ne portera le fardeau d'une autre. Et si une âme surchargée appelle à l'aide, rien ne sera porté pour elle même si c'est un proche parent. Tu n'avertis que ceux qui craignent leur Seigneur dans le mystère et qui accomplissent la prière. Et celui qui se purifie ne se purifie que pour lui-même. Et c'est vers Allah qu'est le retour."
      }
    ],
    "words": [
      {
        "word": "أَزْوَاجًا",
        "translit": "azwājan",
        "meaning": "des couples / des paires",
        "root": "ز - و - ج",
        "rootMeaning": "paire / couple / époux",
        "rootColor": 6,
        "emoji": "👫",
        "funFactTitle": "Tout va par paires !",
        "funFact": "La racine <strong>z-w-j</strong> veut dire « paire, couple ». Allah a créé TOUT par paires : homme et femme, jour et nuit, soleil et lune ! C'est comme les chaussures — tu as toujours la droite et la gauche ! Le mot <em>zawj</em> = « époux/épouse » et <em>azwāj</em> = « couples, paires ». En arabe, <em>muzāwaja</em> = « le mariage » et <em>zawja</em> = « la femme/épouse ». La sourate Adh-Dhāriyāt dit que tout a été créé en paires — c'est la loi d'Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>زوج</span> (époux), <span>زوجة</span> (épouse), <span>أزواج</span> (couples), <span>مزاوجة</span> (mariage)"
      },
      {
        "word": "يَسْمَعُوا",
        "translit": "yasmaʿū",
        "meaning": "ils entendent",
        "root": "س - م - ع",
        "rootMeaning": "entendre / écouter / obéir",
        "rootColor": 7,
        "emoji": "👂",
        "funFactTitle": "Les fausses idoles sont SOURDES !",
        "funFact": "La racine <strong>s-m-ʿ</strong> veut dire « entendre ». Allah dit : si tu appelles les idoles, elles n'<em>yasmaʿū</em> (n'entendent pas) ! C'est comme crier dans un téléphone éteint — personne ne répond ! Le mot <em>samʿ</em> = « l'ouïe » et <em>sāmiʿ</em> = « celui qui entend ». En arabe, <em>asāma</em> = « la surdité » et <em>mustamiʿ</em> = « l'auditeur ». Les idoles ne voient pas, n'entendent pas et ne peuvent rien faire. Pourquoi les adorer alors ?",
        "relatedText": "Mots de la même famille :",
        "related": "<span>سمع</span> (entendre), <span>أصم</span> (sourd), <span>استماع</span> (écoute), <span>سماع</span> (audition)"
      },
      {
        "word": "الْفُقَرَاءُ",
        "translit": "al-fuqarāʾu",
        "meaning": "les pauvres / les besogneux",
        "root": "ف - ق - ر",
        "rootMeaning": "être pauvre / avoir besoin / crever",
        "rootColor": 1,
        "emoji": "🙏",
        "funFactTitle": "Nous avons TOUS besoin d'Allah !",
        "funFact": "La racine <strong>f-q-r</strong> veut dire « être pauvre, avoir besoin ». Allah dit : <em>antum al-fuqarāʾu ilā Allāh</em> — « Vous êtes les pauvres dans le besoin envers Allah ! » Même le milliardaire le plus riche est <em>faqīr</em> devant Allah — comme un bébé qui a besoin de sa maman pour TOUT. Le mot <em>faqr</em> = « la pauvreté » et <em>faqīr</em> = « le pauvre ». En arabe, <em>faqīr</em> est aussi le soufi qui choisit d'être pauvre spirituellement humble. Allah seul est <em>al-Ghanī</em> (Celui qui n'a besoin de personne) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>فقير</span> (pauvre), <span>فقر</span> (pauvreté), <span>تفقر</span> (appauvrir), <span>فقرات</span> (vertèbres)"
      },
      {
        "word": "خَلْقٍ",
        "translit": "khalqin",
        "meaning": "la création",
        "root": "خ - ل - ق",
        "rootMeaning": "créer / façonner / mesurer",
        "rootColor": 2,
        "emoji": "🎨",
        "funFactTitle": "Créer du néant, un pouvoir UNIQUE !",
        "funFact": "La racine <strong>kh-l-q</strong> revient ! Allah peut nous faire disparaître et créer un nouveau peuple — comme un artiste qui efface un dessin et en refait un autre en quelques secondes ! Le mot <em>khalq</em> = « la création » et <em>khalīqa</em> = « la créature ». En arabe, <em>khallaqa</em> = « il a créé » et <em>ikhliqāq</em> = « le modelage ». Les associateurs adorent ce qui ne peut PAS créer, alors qu'Allah crée TOUT — depuis la plus petite fourmi jusqu'aux galaxies les plus grandes !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>خلق</span> (création), <span>خالق</span> (Créateur), <span>مخلوقات</span> (créatures), <span>تخليق</span> (création/former)"
      },
      {
        "word": "تُنذِرُ",
        "translit": "tundhiru",
        "meaning": "tu avertis",
        "root": "ن - ذ - ر",
        "rootMeaning": "avertir / craindre / annoncer",
        "rootColor": 3,
        "emoji": "⚠️",
        "funFactTitle": "L'avertissement, un acte de tendresse !",
        "funFact": "La racine <strong>n-dh-r</strong> veut dire « avertir, mettre en garde ». Le Prophète <em>yundhiru</em> (avertit) — il est comme un panneau « DANGER : virage dangereux » sur la route : il ne force personne, mais il prévient ! Seuls ceux qui craignent Allah dans le secret de leur cœur écoutent cet avertissement. Le mot <em>nudhura</em> = « les avertissements » et <em>indhār</em> = « la mise en garde ». En arabe, <em>munadhara</em> = « la joute oratoire » car les deux parties s'avertissent mutuellement. L'avertissement est un acte d'amour !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إنذار</span> (avertissement), <span>نذير</span> (avertisseur), <span>نذر</span> (vœu), <span>منذر</span> (celui qui avertit)"
      }
    ],
    "quiz": [
      {
        "question": "De quoi Allah a-t-Il créé les humains selon le verset 11 ?",
        "options": [
          "De feu",
          "De lumière",
          "De métal",
          "De terre (turāb) puis d'une goutte"
        ],
        "correct": 3
      },
      {
        "question": "Les deux mers mentionnées au verset 12 sont :",
        "options": [
          "Toutes les deux salées",
          "L'une douce et l'autre salée",
          "Toutes les deux douces",
          "Toutes les deux gelées"
        ],
        "correct": 1
      },
      {
        "question": "Allah dit que nous avons TOUS besoin de Lui. Le mot « pauvre » en arabe est :",
        "options": [
          "Al-aghnyā",
          "Al-mutakabbirūn",
          "Al-fuqarāʾ",
          "Al-ḥukamāʾ"
        ],
        "correct": 2
      },
      {
        "question": "Une âme peut-elle porter le fardeau d'une autre âme ?",
        "options": [
          "Oui, si elle est forte",
          "Non, chaque âme porte son propre fardeau",
          "Oui, avec la permission d'Allah",
          "Seulement les parents pour leurs enfants"
        ],
        "correct": 1
      }
    ],
    "completionText": "Super ! 🌊 Tu as étudié les versets 11 à 18 ! Tu as appris la racine <strong>ز - و - ج</strong> (paire/couple), <strong>ف - ق - ر</strong> (pauvreté/besoin), <strong>خ - ل - ق</strong> (créer) et <strong>ن - ذ - ر</strong> (avertir). Nous avons TOUS besoin d'Allah !"
  },
  {
    "id": "35-03",
    "surah": 35,
    "surahName": "Fatir",
    "title": "L'aveugle et le voyant ne sont pas égaux !",
    "shortTitle": "Fatir (v.19-28)",
    "subtitle": "Celui qui croit est comme le voyant dans un monde lumineux, et celui qui ne croit pas est comme l'aveugle dans les ténèbres.",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 19,
        "arabic": "لَا يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ",
        "french": "L'aveugle et le voyant ne sont pas égaux."
      },
      {
        "number": 20,
        "arabic": "وَلَا الظُّلُمَاتُ وَلَا النُّورُ",
        "french": "Ni les ténèbres et la lumière."
      },
      {
        "number": 21,
        "arabic": "وَلَا الظِّلُّ وَلَا الْحَرُورُ",
        "french": "Ni l'ombre et la chaleur caniculaire."
      },
      {
        "number": 22,
        "arabic": "وَمَا يَسْتَوِي الْأَحْيَاءُ وَلَا الْأَمْوَاتُ ۚ إِنَّ اللَّهَ يُسْمِعُ مَن يَشَاءُ ۖ وَمَا أَنتَ بِمُسْمِعٍ مَن فِي الْقُبُورِ",
        "french": "Et les vivants ne sont pas égaux aux morts. Allah fait entendre qui Il veut. Tu ne peux pas faire entendre ceux qui sont dans les tombes."
      },
      {
        "number": 23,
        "arabic": "إِنْ أَنتَ إِلَّا نَذِيرٌ",
        "french": "Tu n'es qu'un avertisseur."
      },
      {
        "number": 24,
        "arabic": "إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا ۚ وَإِن مِّنْ أُمَّةٍ إِلَّا خَلَا فِيهَا نَذِيرٌ",
        "french": "Nous t'avons envoyé avec la Vérité comme annonciateur et avertisseur. Il n'est pas une nation qui n'ait eu un avertisseur."
      },
      {
        "number": 25,
        "arabic": "وَإِن يُكَذِّبُوكَ فَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ وَبِالزُّبُرِ وَبِالْكِتَابِ الْمُنِيرِ",
        "french": "S'ils te traitent de menteur, eh bien, ceux d'avant eux ont aussi traité de menteurs leurs messagers qui leur étaient venus avec des preuves, les Écritures et le Livre lumineux."
      },
      {
        "number": 26,
        "arabic": "ثُمَّ أَخَذْتُ الَّذِينَ كَفَرُوا ۖ فَكَيْفَ كَانَ نَكِيرِ",
        "french": "Puis J'ai saisi ceux qui ont mécru. Et quelle fut Ma réprobation !"
      },
      {
        "number": 27,
        "arabic": "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا مِنْهُ ثَمَرَاتٍ مُّخْتَلِفًا أَلْوَانُهَا ۖ وَمِنَ الْجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ مُّخْتَلِفٌ أَلْوَانُهَا وَغَرَابِيبُ سُودٌ",
        "french": "N'as-tu pas vu qu'Allah a fait descendre du ciel de l'eau et Nous en avons fait sortir des fruits de couleurs différentes. Et dans les montagnes, il y a des sillons blancs et rouges de couleurs différentes et des roches noires."
      },
      {
        "number": 28,
        "arabic": "وَمِنَ النَّاسِ وَالدَّوَابِّ وَالْأَنْعَامِ مُخْتَلِفٌ أَلْوَانُهُ كَذَٰلِكَ ۗ إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ ۗ إِنَّ اللَّهَ عَزِيزٌ غَفُورٌ",
        "french": "Et parmi les hommes, les bêtes et les troupeaux, il y a aussi des couleurs différentes. De même, ce sont ceux qui ont la connaissance, parmi les serviteurs d'Allah, qui craignent Allah. Allah est Puissant et Pardonneur."
      }
    ],
    "words": [
      {
        "word": "الْأَعْمَىٰ",
        "translit": "al-aʿmā",
        "meaning": "l'aveugle",
        "root": "ع - م - ي",
        "rootMeaning": "être aveugle / ne pas voir",
        "rootColor": 4,
        "emoji": "😵",
        "funFactTitle": "L'aveugle ne voit PAS la lumière !",
        "funFact": "La racine <strong>ʿ-m-y</strong> veut dire « être aveugle, ne pas voir ». Allah dit : l'aveugle et le voyant ne sont PAS égaux — c'est comme comparer quelqu'un dans une pièce sans lumière avec quelqu'un dans un jardin ensoleillé ! Le mot <em>aʿmā</em> = « aveugle » et <em>ʿamyāʾ</em> = « la cécité ». En arabe, <em>taʿmā</em> = « sable fin » car il aveugge les yeux. L'aveugle spirituel, c'est celui qui ne VOIT pas les signes d'Allah autour de lui, même avec des yeux parfaits !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>أعمى</span> (aveugle), <span>عمياء</span> (cécité), <span>تعامى</span> (faire semblant de ne pas voir), <span>عميان</span> (aveugles)"
      },
      {
        "word": "الظُّلُمَاتُ",
        "translit": "aẓ-ẓulumātu",
        "meaning": "les ténèbres / l'obscurité",
        "root": "ظ - ل - م",
        "rootMeaning": "obscurité / injustice / excéder",
        "rootColor": 5,
        "emoji": "🌑",
        "funFactTitle": "Les ténèbres et l'injustice vont ensemble !",
        "funFact": "La racine <strong>ẓ-l-m</strong> veut dire « obscurité, injustice ». Les <em>ẓulumāt</em> (ténèbres) sont l'opposé de <em>nūr</em> (lumière). Le mécréant vit dans les <em>ẓulumāt</em> — comme quelqu'un qui marche dans une forêt sans lampe de poche. Mais cette racine donne aussi <em>ẓulm</em> = « l'injustice » car l'injustice est une ténèbre MORALE ! Le mot <em>ẓālim</em> = « injuste » et <em>iẓlām</em> = « l'acte d'être injuste ». En arabe, le pluriel <em>ẓulumāt</em> montre que les types d'obscurité sont nombreux. La foi est la LAMPE qui dissipe les ténèbres !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ظلم</span> (injustice), <span>ظلام</span> (obscurité), <span>ظالم</span> (injuste), <span>مظلوم</span> (opprimé)"
      },
      {
        "word": "الْأَحْيَاءُ",
        "translit": "al-aḥyāʾu",
        "meaning": "les vivants",
        "root": "ح - ي - ي",
        "rootMeaning": "vivre / la vie / être vivant",
        "rootColor": 6,
        "emoji": "🌱",
        "funFactTitle": "Le croyant est VRAIMENT vivant !",
        "funFact": "La racine <strong>ḥ-y-y</strong> veut dire « vivre, avoir la vie ». Allah dit que les vivants et les morts ne sont PAS égaux — le croyant est « vivant » même si son cœur bat normalement, car il a la lumière de la foi ! Le mot <em>ḥayāt</em> = « la vie » et <em>ḥayy</em> = « le Vivant » (un des Noms d'Allah !). En arabe, <em>taḥayya</em> = « saluer » (donner la vie par les mots). Le Paradis est <em>ḥayāt</em> éternelle. Le <em>muḥyī</em> = « Celui qui donne la vie » — Allah !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حياة</span> (vie), <span>حي</span> (vivant), <span>تحية</span> (salutation), <span>إحياء</span> (ressusciter)"
      },
      {
        "word": "ثَمَرَاتٍ",
        "translit": "thamarātin",
        "meaning": "des fruits",
        "root": "ث - م - ر",
        "rootMeaning": "fruit / résultat / produit",
        "rootColor": 7,
        "emoji": "🍎",
        "funFactTitle": "Les fruits, un cadeau du ciel !",
        "funFact": "La racine <strong>th-m-r</strong> veut dire « fruit, résultat ». Allah fait descendre la pluie et en sort des <em>thamarāt</em> (fruits) de couleurs différentes — rouge, jaune, vert, violet — comme les bonbons dans un pot, mais naturels et créés par Allah ! Le mot <em>thamar</em> = « le fruit » et <em>thamara</em> = « le résultat, la conséquence ». En arabe, <em>mithmār</em> = « le profit » car les fruits sont le profit de l'arbre. Chaque fruit est un signe qu'Allah prend soin de nous avec amour !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>ثمر</span> (fruit), <span>ثمرة</span> (résultat/fruit), <span>ثمار</span> (fruits), <span>مثمرة</span> (productive)"
      },
      {
        "word": "الْعُلَمَاءُ",
        "translit": "al-ʿulamāʾu",
        "meaning": "les savants / ceux qui savent",
        "root": "ع - ل - م",
        "rootMeaning": "savoir / connaître / apprendre",
        "rootColor": 1,
        "emoji": "🎓",
        "funFactTitle": "Les vrais savants craignent Allah !",
        "funFact": "La racine <strong>ʿ-l-m</strong> revient encore ! Les <em>ʿulamāʾ</em> (savants) sont ceux qui craignent le PLUS Allah — car plus tu en sais, plus tu réalises la grandeur d'Allah ! C'est comme un astronome : plus il découvre l'univers, plus il est émerveillé par Celui qui l'a créé. Le mot <em>ʿālim</em> = « savant » et <em>ʿulūm</em> = « les sciences ». En arabe, <em>taʿallama</em> = « il a étudié ». Le Prophète a dit : « Les savants sont les héritiers des prophètes ! »",
        "relatedText": "Mots de la même famille :",
        "related": "<span>علماء</span> (savants), <span>علم</span> (savoir), <span>معلم</span> (professeur), <span>تعلم</span> (apprendre)"
      }
    ],
    "quiz": [
      {
        "question": "L'aveugle et le voyant sont-ils égaux selon le verset 19 ?",
        "options": [
          "Oui, complètement",
          "Seulement la nuit",
          "Non, ils ne sont pas égaux",
          "Seulement en voyage"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ظ - ل - م</strong> (obscurité) est aussi liée à quel concept ?",
        "options": [
          "La justice",
          "L'injustice",
          "La patience",
          "La prière"
        ],
        "correct": 1
      },
      {
        "question": "Qui sont ceux qui craignent le PLUS Allah selon le verset 28 ?",
        "options": [
          "Les riches",
          "Les forts",
          "Les jeunes",
          "Les savants (ʿulamāʾ) parmi Ses serviteurs"
        ],
        "correct": 3
      },
      {
        "question": "Les fruits de couleurs différentes sont un signe de quoi ?",
        "options": [
          "De la météo",
          "De la puissance et de la bonté d'Allah",
          "Du hasard",
          "De la science humaine"
        ],
        "correct": 1
      }
    ],
    "completionText": "Excellent ! 🌈 Tu as étudié les versets 19 à 28 ! Tu as appris la racine <strong>ع - م - ي</strong> (aveugle), <strong>ظ - ل - م</strong> (ténèbres/injustice), <strong>ح - ي - ي</strong> (vivre) et <strong>ث - م - ر</strong> (fruit). Le croyant est vivant et éclairé !"
  },
  {
    "id": "35-04",
    "surah": 35,
    "surahName": "Fatir",
    "title": "Ceux qui lisent le Livre jour et nuit",
    "shortTitle": "Fatir (v.29-38)",
    "subtitle": "Ceux qui récitent le Livre d'Allah et font la prière recevront une récompense qui ne sera jamais diminuée !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 29,
        "arabic": "إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَّن تَبُورَ",
        "french": "Ceux qui récitent le Livre d'Allah, accomplissent la prière, et dépensent en secret et en public de ce que Nous leur avons attribué, espèrent une transaction qui ne sera jamais ruinée."
      },
      {
        "number": 30,
        "arabic": "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ ۚ إِنَّهُ غَفُورٌ شَكُورٌ",
        "french": "Afin qu'Il leur donne leurs récompenses pleines et qu'Il y ajoute de Sa grâce. C'est Lui le Pardonneur, le Reconnaissant."
      },
      {
        "number": 31,
        "arabic": "وَالَّذِي أَوْحَيْنَا إِلَيْكَ مِنَ الْكِتَابِ هُوَ الْحَقُّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ ۗ إِنَّ اللَّهَ بِعِبَادِهِ لَخَبِيرٌ بَصِيرٌ",
        "french": "Et ce que Nous t'avons révélé du Livre est la Vérité confirmant ce qui l'a précédé. Allah est parfaitement Informé de Ses serviteurs, Clairvoyant."
      },
      {
        "number": 32,
        "arabic": "ثُمَّ وَرِثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا ۖ فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهِ وَمِنْهُم مُّقْتَصِدٌ وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ بِإِذْنِ اللَّهِ ۚ ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ",
        "french": "Puis Nous avons fait hériter le Livre à ceux que Nous avons choisis parmi Nos serviteurs. Mais il y en a qui se lèsent eux-mêmes, d'autres qui sont modérés, et d'autres qui devancent dans les bonnes actions avec la permission d'Allah. C'est là la grâce immense."
      },
      {
        "number": 33,
        "arabic": "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ وَلُؤْلُؤًا ۖ وَلِبَاسُهُمْ فِيهَا حَرِيرٌ",
        "french": "Les jardins d'Éden où ils entreront, parés de bracelets d'or et de perles. Et leurs vêtements y seront de soie."
      },
      {
        "number": 34,
        "arabic": "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ ۖ إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",
        "french": "Et ils diront : « Louange à Allah qui a écarté de nous la tristesse. Notre Seigneur est certes Pardonneur et Reconnaissant."
      },
      {
        "number": 35,
        "arabic": "الَّذِي أَحَلَّنَا دَارَ الْمُقَامَةِ مِن فَضْلِهِ ۖ لَا يَمَسُّنَا فِيهَا نَصَبٌ وَلَا يَمَسُّنَا فِيهَا لُغُوبٌ",
        "french": "Celui qui, par Sa grâce, nous a installés dans la Demeure de la stabilité, où aucune fatigue ne nous touche et aucune lassitude ne nous accable. »"
      },
      {
        "number": 36,
        "arabic": "وَالَّذِينَ كَفَرُوا لَهُمْ جَهَنَّمُ يُصَلَّوْنَهَا فَبِئْسَ الْمِصَارُ",
        "french": "Et ceux qui ont mécru auront le Feu de l'Enfer. On ne les achèvera pas pour qu'ils meurent, et on ne leur allégera pas son châtiment. C'est ainsi que Nous récompensons tout ingrat."
      },
      {
        "number": 37,
        "arabic": "وَهُمْ يَصْطَرِخُونَ فِيهَا رَبَّنَا أَخْرِجْنَا نَعْمَلْ صَالِحًا غَيْرَ الَّذِي كُنَّا نَعْمَلُ ۚ أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ وَجَاءَكُمُ النَّذِيرُ ۖ فَذُوقُوا فَمَا لِلظَّالِمِينَ مِن نَّصِيرٍ",
        "french": "Et ils crieront là-dedans : « Seigneur, fais-nous sortir, nous ferons le bien, contrairement à ce que nous faisions. » Ne vous avons-Nous pas donné une vie assez longue pour que celui qui réfléchit réfléchisse ? Et l'avertisseur vous est venu. Goûtez donc ! Pour les injustes, il n'y a pas de secoureur."
      },
      {
        "number": 38,
        "arabic": "إِنَّ اللَّهَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ عَزِيزٌ حَكِيمٌ",
        "french": "Allah connaît l'Invisible et le Visible. C'est Lui le Tout-Puissant, le Sage."
      }
    ],
    "words": [
      {
        "word": "يَتْلُونَ",
        "translit": "yatlūna",
        "meaning": "ils récitent / ils lisent",
        "root": "ت - ل - و",
        "rootMeaning": "réciter / lire / suivre",
        "rootColor": 2,
        "emoji": "📖",
        "funFactTitle": "Réciter le Coran = la meilleure activité !",
        "funFact": "La racine <strong>t-l-w</strong> veut dire « réciter, lire, suivre ». Ceux qui <em>yatlūna</em> le Livre d'Allah font le meilleur investissement du monde — comme mettre de l'argent dans une banque qui ne fait QUE gagner ! Le mot <em>tilāwa</em> = « la récitation » et <em>tilāw</em> = « le suivi ». En arabe, <em>tāliy</em> = « celui qui récite » et <em>ittibāʿ</em> (suivre) vient de la même famille. Le Coran doit être récité ET suivi dans la vie quotidienne. Chaque lettre que tu lis te donne 10 hasanat (bonnes actions) !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>تلاوة</span> (récitation), <span>تالي</span> (récitant), <span>اتل</span> (récite), <span>اتباع</span> (suivi)"
      },
      {
        "word": "أَنفَقُوا",
        "translit": "anfaqū",
        "meaning": "ils ont dépensé / ils ont donné",
        "root": "ن - ف - ق",
        "rootMeaning": "dépenser / donner / épuiser",
        "rootColor": 3,
        "emoji": "💰",
        "funFactTitle": "Donner, c'est recevoir PLUS !",
        "funFact": "La racine <strong>n-f-q</strong> veut dire « dépenser, donner ». Ceux qui <em>anfaqū</em> en secret ET en public feront une « transaction » qui ne sera JAMAIS ruinée — comme si tu achetais un billet de loterie où TU GAGNES TOUJOURS ! Le mot <em>nafaqa</em> = « la dépense » et <em>infiqāq</em> = « le fait de donner ». En arabe, <em>munfiq</em> = « généreux » et <em>nāfiqa</em> = « la crevasse » car elle vide le mur. Quand tu donnes pour Allah, ta richesse ne diminue PAS — elle AUGMENTE !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إنفاق</span> (dépense), <span>نفقة</span> (dépense), <span>منفق</span> (généreux), <span>نفاق</span> (hypocrisie)"
      },
      {
        "word": "شَكُورٌ",
        "translit": "shakūrun",
        "meaning": "Reconnaissant / Très-Recognaisant",
        "root": "ش - ك - ر",
        "rootMeaning": "remercier / être reconnaissant",
        "rootColor": 4,
        "emoji": "🙏",
        "funFactTitle": "Allah remercie Ses serviteurs !",
        "funFact": "La racine <strong>sh-k-r</strong> veut dire « remercier, être reconnaissant ». C'est INCROYABLE : Allah est <em>Shakūr</em> — IL nous remercie ! Imagine un roi qui remercie ses sujets d'avoir obéi ! Le mot <em>shukr</em> = « la gratitude » et <em>shākir</em> = « reconnaissant ». En arabe, <em>shukrān</em> = « merci beaucoup ! » et <em>mashkūr</em> = « digne de gratitude ». Le <em>shakūr</em> d'Allah signifie qu'Il multiplie les bonnes actions et pardonne les mauvaises. Dis toujours <em>al-ḥamdu li-llāh</em> !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>شكر</span> (gratitude), <span>شكور</span> (Très-Reconnaissant), <span>شاكر</span> (reconnaissant), <span>شكرا</span> (merci)"
      },
      {
        "word": "الْحَزَنَ",
        "translit": "al-ḥazana",
        "meaning": "la tristesse",
        "root": "ح - ز - ن",
        "rootMeaning": "tristesse / chagrin / être triste",
        "rootColor": 5,
        "emoji": "😢",
        "funFactTitle": "Au Paradis, PLUS de tristesse !",
        "funFact": "La racine <strong>ḥ-z-n</strong> veut dire « tristesse, chagrin ». Au Paradis, les croyants diront : « Louange à Allah qui a écarté de nous le <em>ḥazan</em> ! » — comme quand tu avais un gros chagrin et qu'un câlin de maman le fait disparaître ! Le mot <em>ḥuzn</em> = « le chagrin » et <em>muḥzin</em> = « ce qui rend triste ». En arabe, <em>ḥazīna</em> = « triste » et <em>iḥzān</em> = « la tristesse ». Le Paradis est le seul endroit où il n'y a AUCUNE tristesse, AUCUNE peur !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حزن</span> (tristesse), <span>محزن</span> (triste), <span>حزين</span> (chagriné), <span>تحزين</span> (attrister)"
      },
      {
        "word": "الْغَيْبِ",
        "translit": "al-ghaybi",
        "meaning": "l'Invisible / le caché",
        "root": "غ - ي - ب",
        "rootMeaning": "être absent / invisible / caché",
        "rootColor": 6,
        "emoji": "🔮",
        "funFactTitle": "Allah connaît les secrets de l'univers !",
        "funFact": "La racine <strong>gh-y-b</strong> veut dire « être invisible, caché ». Allah connaît <em>al-ghayb</em> — tout ce qui est caché : les pensées, le futur, les secrets sous les mers ! C'est comme avoir la réponse à TOUS les mystères du monde en même temps. Le mot <em>ghayb</em> = « l'Invisible » et <em>ghāʾib</em> = « absent ». En arabe, <em>maghīb</em> = « caché » et <em>ighāb</em> = « la disparition ». Seul Allah connaît parfaitement le <em>ghayb</em> — ni les anges, ni les prophètes ne le connaissent de façon complète !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>غيب</span> (invisible), <span>غائب</span> (absent), <span>غياب</span> (absence), <span>مغيّب</span> (caché)"
      }
    ],
    "quiz": [
      {
        "question": "Ceux qui récitent le Coran et font la prière espèrent quel type de transaction ?",
        "options": [
          "Une qui sera ruinée",
          "Une normale",
          "Une qui sera remboursée",
          "Une qui ne sera jamais ruinée"
        ],
        "correct": 3
      },
      {
        "question": "La racine <strong>ش - ك - ر</strong> (remercier) est utilisée comme Nom d'Allah. Comment s'appelle-t-Il ?",
        "options": [
          "Ash-Shakūr (le Très-Reconnaissant)",
          "Ash-Shakīr",
          "Ash-Shākir",
          "Ash-Shukr"
        ],
        "correct": 0
      },
      {
        "question": "Les gens du Paradis diront « Louange à Allah » car Il a écarté d'eux :",
        "options": [
          "La chaleur",
          "La faim",
          "La tristesse",
          "Le sommeil"
        ],
        "correct": 2
      },
      {
        "question": "Allah connaît à la fois l'Invisible (<span class=\"arabic-inline\">الْغَيْبِ</span>) et :",
        "options": [
          "Le passé seulement",
          "Le Visible (ash-shahāda)",
          "Le futur seulement",
          "Les rêves seulement"
        ],
        "correct": 1
      }
    ],
    "completionText": "Génial ! 📖 Tu as étudié les versets 29 à 38 ! Tu as appris la racine <strong>ت - ل - و</strong> (réciter), <strong>ن - ف - ق</strong> (dépenser), <strong>ش - ك - ر</strong> (remercier) et <strong>ح - ز - ن</strong> (tristesse). Réciter le Coran et donner aux autres = le meilleur investissement !"
  },
  {
    "id": "35-05",
    "surah": 35,
    "surahName": "Fatir",
    "title": "Allah seul détient la puissance absolue",
    "shortTitle": "Fatir (v.39-45)",
    "subtitle": "Si Allah retirait l'eau, tout mourrait. Réfléchissez et suivez la révélation avant qu'il ne soit trop tard !",
    "duration": "~8 min",
    "xp": 15,
    "verses": [
      {
        "number": 39,
        "arabic": "هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ ۖ فَمَن كَفَرَ فَعَلَيْهِ كُفْرُهُ ۖ وَلَا يَزِيدُ الْكَافِرُونَ كُفْرَهُمْ عِندَ رَبِّهِمْ إِلَّا مَقْتًا ۖ وَلَا يَزِيدُ الْكَافِرُونَ كُفْرَهُمْ إِلَّا خَسَارًا",
        "french": "C'est Lui qui a fait de vous des successeurs sur terre. Quiconque mécroit, sa mécréance retombera sur lui. Leur mécréance n'ajoute auprès de leur Seigneur qu'aversion pour eux. Et leur mécréance n'ajoute pour eux que perte."
      },
      {
        "number": 40,
        "arabic": "قُلْ أَرَأَيْتُمْ شُرَكَاءَكُمُ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ أَمْ آتَيْنَاهُمْ كِتَابًا فَهُمْ عَلَىٰ بَيِّنَتٍ مِّنْهُ ۚ بَلْ إِن يَعِدُ الظَّالِمُونَ بَعْضُهُم بَعْضًا إِلَّا غُرُورًا",
        "french": "Dis : « Voyez-vous vos associés que vous invoquez en dehors d'Allah ? Montrez-moi ce qu'ils ont créé de la terre. Ont-ils une part dans les cieux ? Leur avons-Nous donné un Livre sur lequel ils s'appuient ? Non, mais les injustes se font des promesses trompeuses les uns aux autres. »"
      },
      {
        "number": 41,
        "arabic": "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا ۚ وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ ۖ إِنَّهُ كَانَ حَلِيمًا غَفُورًا",
        "french": "Allah retient les cieux et la terre pour qu'ils ne s'affaissent pas. Et s'ils s'affaissaient, nul autre après Lui ne pourrait les retenir. C'est Lui le Clément, le Pardonneur."
      },
      {
        "number": 42,
        "arabic": "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ لَئِن جَاءَهُمْ نَذِيرٌ لَّيَكُونُنَّ أَهْدَىٰ مِنْ إِحْدَى الْأُمَمِ ۖ فَلَمَّا جَاءَهُمْ نَذِيرٌ مَّا زَادَهُمْ إِلَّا نُفُورًا",
        "french": "Et ils ont juré par Allah de toute la force de leurs serments que si un avertisseur venait à eux, ils seraient mieux guidés que n'importe quelle autre communauté. Puis, quand un avertisseur est venu à eux, cela n'a fait qu'augmenter leur aversion."
      },
      {
        "number": 43,
        "arabic": "اسْتِكْبَارًا فِي الْأَرْضِ وَمَكْرَ السَّيِّئِ ۚ وَلَا يَحِيقُ الْمَكْرُ السَّيِّئُ إِلَّا بِأَهْلِهِ ۖ فَهَلْ يَنظُرُونَ إِلَّا سُنَّتَ الْأَوَّلِينَ ۖ فَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا ۖ وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَحْوِيلًا",
        "french": "Par orgueil sur terre et par manœuvre perfide. Mais la mauvaise manœuvre n'encerne que ses auteurs. Attendent-ils donc autre chose que le sort des anciens ? Tu ne trouveras pas de changement à la loi d'Allah et tu ne trouveras pas de déviation à la loi d'Allah."
      },
      {
        "number": 44,
        "arabic": "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ وَكَانُوا أَشَدَّ مِنْهُمْ قُوَّةً وَمَا كَانَ اللَّهُ لِيُعْجِزَهُ مِن شَيْءٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ ۚ إِنَّهُ كَانَ عَلِيمًا قَدِيرًا",
        "french": "N'ont-ils pas parcouru la terre pour voir quelle a été la fin de ceux qui les ont précédés, qui étaient plus forts qu'eux ? Rien n'échappe à Allah, ni dans les cieux ni sur la terre. C'est Lui l'Omniscient, l'Omnipotent."
      },
      {
        "number": 45,
        "arabic": "وَلَوْ يُؤَاخِذُ اللَّهُ النَّاسَ بِمَا كَسَبُوا مَا تَرَكَ عَلَىٰ ظَهْرِهَا مِن دَابَّةٍ وَلَٰكِن يُؤَخِّرُهُمْ إِلَىٰ أَجَلٍ مُّسَمًّى ۖ فَإِذَا جَاءَ أَجَلُهُمْ فَإِنَّ اللَّهَ كَانَ بِعِبَادِهِ بَصِيرًا",
        "french": "Et si Allah punissait les gens selon ce qu'ils méritent, Il ne laisserait sur le dos de la terre aucun animal. Mais Il les renvoie jusqu'à un terme fixé. Quand leur terme viendra, Allah sera Pleinement Observateur envers Ses serviteurs."
      }
    ],
    "words": [
      {
        "word": "خَلَائِفَ",
        "translit": "khalāʾifa",
        "meaning": "des successeurs / des représentants",
        "root": "خ - ل - ف",
        "rootMeaning": "succéder / remplacer / hériter",
        "rootColor": 7,
        "emoji": "👑",
        "funFactTitle": "Tu es le représentant d'Allah sur terre !",
        "funFact": "La racine <strong>kh-l-f</strong> veut dire « succéder, remplacer ». Allah a fait de nous des <em>khalāʾif</em> (successeurs) sur terre — comme un directeur d'école qui nomme des délégués de classe pour le représenter ! Le mot <em>khalīfa</em> = « successeur, calife » et <em>khilāfa</em> = « le califat, la représentation ». En arabe, <em>ikh-lāf</em> = « la succession » et <em>khalf</em> = « derrière, après ». Chaque génération remplace la précédente. Tu es responsable de la terre comme un gardien de parc !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>خليفة</span> (successeur/calife), <span>خلافة</span> (califat), <span>إخلاف</span> (remplacement), <span>تخلف</span> (rester en arrière)"
      },
      {
        "word": "يُمْسِكُ",
        "translit": "yumsiku",
        "meaning": "Il retient / Il maintient",
        "root": "م - س - ك",
        "rootMeaning": "retenir / maintenir / garder",
        "rootColor": 1,
        "emoji": "🤲",
        "funFactTitle": "Allah tient le ciel pour qu'il ne tombe pas !",
        "funFact": "La racine <strong>m-s-k</strong> veut dire « retenir, maintenir ». Allah <em>yumsiku</em> (retient) les cieux et la terre — comme si tu tenais une pile de livres au-dessus de ta tête avec tes mains. Si Allah relâchait, tout s'effondrerait ! Le mot <em>imsāk</em> = « le fait de retenir » et <em>mumsik</em> = « celui qui retient ». En arabe, <em>tamassuk</em> = « se cramponner » et <em>masaka</em> = « il a attrapé ». C'est Allah qui maintient TOUT en équilibre dans l'univers !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>إمساك</span> (retenir), <span>تمسك</span> (se cramponner), <span>ماسك</span> (qui retient), <span>مسكة</span> (poignée)"
      },
      {
        "word": "حَلِيمًا",
        "translit": "ḥalīman",
        "meaning": "Clément / Très-Patient",
        "root": "ح - ل - م",
        "rootMeaning": "patience / douceur / clémence",
        "rootColor": 2,
        "emoji": "😌",
        "funFactTitle": "Allah est le PLUS patient de tous !",
        "funFact": "La racine <strong>ḥ-l-m</strong> veut dire « être patient, doux, clément ». Allah est <em>ḥalīm</em> — IL est patient même quand les gens désobéissent depuis des siècles ! C'est comme un professeur qui ne se met jamais en colère, même si les élèves bavardent toute l'année. Le mot <em>ḥilm</em> = « la patience, la sagesse » et <em>aḥlam</em> = « plus patient ». En arabe, <em>iḥtalam</em> = « il a été patient » et <em>taḥallama</em> = « il s'est calmé ». Le <em>ḥalīm</em> ne punit PAS immédiatement — Il donne du temps pour se repentir !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>حلم</span> (patience), <span>حليم</span> (Clément), <span>تحلم</span> (se calmer), <span>محتلم</span> (patient)"
      },
      {
        "word": "اسْتِكْبَارًا",
        "translit": "istikbāran",
        "meaning": "par orgueil / par arrogance",
        "root": "ك - ب - ر",
        "rootMeaning": "être grand / orgueil / majesté",
        "rootColor": 3,
        "emoji": "😤",
        "funFactTitle": "L'orgueil, le défaut qui fait chuter !",
        "funFact": "La racine <strong>k-b-r</strong> veut dire « être grand, orgueil ». L'<em>istikbār</em> c'est se croire supérieur — comme un élève qui refuse de dire bonjour au directeur car il se croit trop important ! Le Prophète a dit : « Celui qui a un atome d'orgueil n'entrera pas au Paradis ! ». Le mot <em>kibr</em> = « l'orgueil » et <em>kabīr</em> = « grand ». En arabe, <em>takabbara</em> = « il s'est enflé d'orgueil ». Seul Allah mérite le <em>kibr</em> (la grandeur). L'humilité est la clé du Paradis !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>كبر</span> (orgueil), <span>كبير</span> (grand), <span>تكبر</span> (s'enfler d'orgueil), <span>أكبر</span> (plus grand)"
      },
      {
        "word": "بَصِيرًا",
        "translit": "baṣīran",
        "meaning": "Pleinement Observateur / Clairvoyant",
        "root": "ب - ص - ر",
        "rootMeaning": "voir / percevoir / clairvoyant",
        "rootColor": 4,
        "emoji": "👁️",
        "funFactTitle": "Allah observe TOUT, jusqu'au moindre détail !",
        "funFact": "La racine <strong>b-ṣ-r</strong> veut dire « voir, observer ». Allah est <em>baṣīr</em> — Il observe chaque personne, chaque action, chaque intention, comme un milliard de caméras ultra-HD en même temps ! Le dernier verset de la sourate rappelle : quand le terme viendra, Allah sera <em>baṣīran bi-ʿibādihi</em> — « Pleinement Observateur de Ses serviteurs ». Le mot <em>baṣar</em> = « la vue » et <em>abṣar</em> = « il a vu ». En arabe, <em>baṣīra</em> = « la perspicacité » (la vue du cœur). Allah voit même ce que tu caches sous ta couette !",
        "relatedText": "Mots de la même famille :",
        "related": "<span>بصير</span> (Clairvoyant), <span>بصر</span> (vue), <span>بصيرة</span> (perspicacité), <span>أبصر</span> (il a vu)"
      }
    ],
    "quiz": [
      {
        "question": "Allah a fait des humains quoi sur terre selon le verset 39 ?",
        "options": [
          "Des rois",
          "Des anges",
          "Des successeurs (khalāʾifa)",
          "Des esclaves"
        ],
        "correct": 2
      },
      {
        "question": "Qu'arriverait-il si Allah relâchait les cieux et la terre ?",
        "options": [
          "Rien ne se passerait",
          "Ils voleraient",
          "Ils s'affaisseraient",
          "Ils grandiraient"
        ],
        "correct": 2
      },
      {
        "question": "La racine <strong>ك - ب - ر</strong> (grandeur) donne le mot pour le plus grand péché caché qui est :",
        "options": [
          "La paresse",
          "L'orgueil (kibr)",
          "La jalousie",
          "La colère"
        ],
        "correct": 1
      },
      {
        "question": "Si Allah punissait les gens selon ce qu'ils méritent, que resterait-il sur terre ?",
        "options": [
          "Seulement les musulmans",
          "Aucun animal vivant",
          "Les montagnes",
          "Les rivières"
        ],
        "correct": 1
      }
    ],
    "completionText": "Magnifique ! 🏆 Tu as terminé la sourate Fatir ! Tu as appris la racine <strong>خ - ل - ف</strong> (succéder), <strong>م - س - ك</strong> (retenir), <strong>ح - ل - م</strong> (patience), <strong>ك - ب - ر</strong> (orgueil) et <strong>ب - ص - ر</strong> (voir). Tu es le représentant d'Allah sur terre !"
  }
];
