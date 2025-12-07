export interface Scene {
  id: number;
  title: string;
  image: string;
  year: string; // relative to Hijra
  paragraph: string;
  fact: string;
}

export const scenes: Scene[] = [
  // -------------------------------------------------------
  //  BEFORE ISLAM (earliest)
  // -------------------------------------------------------

 {
    id: 1,
    title: "Arabia Before Guidance",
    image: "/Scenes/scene1.png",
    year: "≈ 200 years before Hijra",
    paragraph:
      "Before Islam, Arabia stood at a crossroads of potential and ruin. Tribes lived in constant tension, alliances shifted by the hour, and pride often meant more than justice. Power belonged to those who could seize it, while the weak—particularly women, orphans, and slaves—had little voice. People were searching for truth, yet surrounded by layers of tradition, superstition, and inherited beliefs. The world was ready for a message—one that would uplift human dignity and restore clarity to a fragmented society.",
    fact: "Some tribes in pre-Islamic Arabia practiced infanticide, especially of female infants, as a response to social and economic pressures."
  },
 
  {
    id: 2,
    title: "A Land Searching for Light",
    image: "/Scenes/scene2.png",
    year: "≈ 150 years before Hijra",
    paragraph:
      "Religious life in Arabia reflected spiritual confusion. Idols filled the Kaaba, each tribe clinging to its own deity, seeking protection in stones and rituals passed down without reflection. Only a few individuals still held onto pure monotheism, quietly questioning the traditions around them. The moral vacuum of the age did not come from ignorance alone, but from the absence of a unifying truth. This empty space is what the message of Islam would soon illuminate.",
    fact: "The Hanif monotheists, like Waraqa ibn Nawfal, were a small group who rejected idol worship centuries before Islam, showing that monotheistic ideas persisted quietly in Arabia."
  },

  
  // -------------------------------------------------------
  //  PROPHET’S LIFE (chronological)
  // -------------------------------------------------------
  {
    id: 3,
    title: "The Year of the Elephant and the Birth of the Prophet",
    image: "/Scenes/scene3.png",
    year: "53 years before Hijra",
    paragraph:
    "In the same year a mighty army failed to destroy the Kaaba—a moment still remembered as divine protection—Prophet Muhammad (peace be upon him) was born. He entered the world without political power or wealth, yet his early life carried signs of resilience and purpose. Orphaned young, raised with modesty, and shaped by the realities of a society longing for guidance, his story began quietly, yet would one day uplift the hearts of billions.",
    fact: "The army of Abraha, which attempted to destroy the Kaaba, reportedly consisted of war elephants, a unique sight for Arabian tribes unfamiliar with such beasts."
  },
  
  {
    id: 4,
    title: "A Shepherd in His Youth",
    image: "/Scenes/scene4.png",
    year: "≈ 45 years before Hijra",
    paragraph:
      "In his early youth, the Prophet Muhammad (peace be upon him) worked as a shepherd, tending sheep in the valleys surrounding Mecca. This simple yet demanding work taught him patience, responsibility, humility, and deep reflection. Shepherding shaped his character long before prophethood—giving him the solitude to observe creation and the discipline to guide, protect, and care for those under his responsibility. Many prophets before him had also been shepherds, a quiet preparation for leading hearts and nations.",
    fact: "The Prophet once said, “There was no prophet except that he tended sheep,” highlighting the role of shepherding as spiritual training for leadership."
  },
  
  {
    id: 5,
    title: "A Life of Integrity Before Prophethood",
    image: "/Scenes/scene5.png",
    year: "Before Hijra (Before Prophethood)",
    paragraph:
      "Before he carried a message, Prophet Muhammad (peace be upon him) carried a reputation. Known as 'Al-Ameen'—the Trustworthy—he became the person people turned to when honesty mattered most. Mecca had no courts or banks, yet even those who opposed him later would entrust him with their valuables. His truthfulness was not strategy, but character. This foundation of unwavering integrity would become essential the day he declared a message that would challenge the very structures of his society.",
    fact: "Muhammad's role as a mediator in tribal disputes before prophethood helped him develop a network of trust across rival clans, an uncommon skill in pre-Islamic Arabia."
  },

  {
    id: 6,
    title: "In the Cave of Hira",
    image: "/Scenes/scene6.png",
    year: "18 years before Hijra",
    paragraph:
      "Long before revelation, the Prophet sought solitude in a small cave overlooking Mecca. The world below felt increasingly empty—its idols, its conflicts, its injustices. In the silence of Hira, he reflected deeply on humanity: its fragility, its longing, its forgotten purpose. These lonely nights were the quiet steps leading to one of history’s greatest turning points. It was here that a heart prepared itself for a responsibility greater than any one man could imagine.",
    fact: "Cave Hira is located on Jabal al-Nour, a mountain whose narrow paths and elevation made it a strategic place for reflection and secrecy, away from Meccan society."
  },

  {
    id: 7,
    title: "The First Revelation",
    image: "/Scenes/scene7.png",
    year: "13 years before Hijra",
    paragraph:
      "Then, in a moment that reshaped the world, the angel Gabriel appeared with the first revelation: 'Read.' The Prophet returned home trembling—not out of doubt, but overwhelmed by the weight of a message that had begun. Revelation did not elevate him with arrogance; it humbled him. He feared for himself before he ever called others. With the support of Khadijah and the recognition of his sincerity, the mission began—quietly, gently, but with a divine clarity that would echo across centuries.",
    fact: "Khadijah's cousin, Waraqa ibn Nawfal, confirmed the angelic nature of the first revelation, marking one of the earliest recognitions of Muhammad’s prophethood."
  },

  {
    id: 8,
    title: "The Early Secret Call",
    image: "/Scenes/scene8.png",
    year: "12 years before Hijra",
    paragraph:
      "For the first years, the message spread privately—heart to heart, home to home. Islam grew not through spectacle but through conviction. The earliest Muslims embraced a faith that demanded courage and inner strength, often at the cost of comfort and safety. These early moments reveal a fundamental truth: Islam’s growth was rooted in sincerity, not force. It was a movement built by ordinary people who recognized extraordinary truth.",
    fact: "Early followers often met in private homes or caves to avoid persecution, demonstrating a grassroots approach to religious growth unusual for that time."
  },

  {
    id: 9,
    title: "The Night Journey and Ascension",
    image: "/Scenes/scene9.png",
    year: "10 years before Hijra",
    paragraph:
      "In one of the most profound events of his life, Prophet Muhammad (peace be upon him) was taken by night from Mecca to Jerusalem, and from there ascended through the heavens. The journey was not just miraculous—it was a reminder that the struggle on earth is tied to a greater reality. He witnessed signs of the unseen, met prophets before him, and experienced the nearness of the Divine in a way no other human had. The Night Journey stands as a testament to his honored status and the spiritual depth of the message he carried.",
    fact: "The Isra and Mi’raj journey reportedly included meeting prophets like Moses and Abraham, creating a symbolic link between Islam and earlier Abrahamic faiths."
  },

  {
    id: 10,
    title: "The Year of Sorrow",
    image: "/Scenes/scene10.png",
    year: "8 years before Hijra",
    paragraph:
      "After more than a decade of calling his people with patience and compassion, the Prophet suffered two of the greatest losses of his life: his beloved wife Khadijah and his supportive uncle Abu Talib. Their deaths left him painfully exposed to the cruelty of Mecca. Yet even in grief, he continued his mission with dignity. The Year of Sorrow reminds us that even the greatest of God’s messengers walked through darkness—yet never lost faith in the light ahead.",
    fact: "The Prophet’s uncle, Abu Talib, protected him politically despite not converting to Islam, showing the importance of family alliances in Meccan society."
  },

  {
    id: 11,
    title: "Persecution in Mecca",
    image: "/Scenes/scene11.png",
    year: "Before Hijra",
    paragraph:
      "As the message grew, opposition escalated. The Prophet was mocked, boycotted, threatened, and harmed. His followers were tortured for believing in one God. Yet he never responded with hatred. His resilience came not from anger, but from unwavering trust in God’s purpose. This period challenges the misconception that Islam rose through power. It rose through perseverance, moral strength, and the quiet courage of men and women who refused to abandon truth, even under fire.",
    fact: "The Quraysh imposed a social and economic boycott on Muslims and their supporters, forcing them into the valley of Abu Talib where they faced starvation for three years."
  },

  {
    id: 12,
    title: "The Public Call and Rising Hostility",
    image: "/Scenes/scene12.png",
    year: "12 years before Hijra – 1 year before Hijra",
    paragraph:
      "When the Prophet delivered his message openly, Mecca shook. The call to justice, equality, and accountability threatened the interests of the elite. They saw not a danger to their idols, but to their social advantage. Despite slander and violence, the Prophet stood with dignity, speaking not to win arguments, but to awaken hearts. The public call became a mirror reflecting the beauty of the message and the insecurities of those who opposed it.",
    fact: "The Quraysh leaders plotted repeatedly to assassinate the Prophet, highlighting the intense political threat perceived from his moral and spiritual message."
  },

  {
    id: 13,
    title: "The Migration to Medina",
    image: "/Scenes/scene13.png",
    year: "At Hijra (0 AH)",
    paragraph:
      "With persecution reaching its peak, God granted permission for migration. Under the cover of night, the Prophet left Mecca—his birthplace, his home—with a heart full of hope, not bitterness. His journey with Abu Bakr through danger and uncertainty marked a new chapter: Islam was no longer a persecuted belief, but a rising community. The Hijra became the turning point where faith transformed from survival into society-building.",
    fact: "The date of the Hijra is the starting point of the Islamic lunar calendar, officially marking year 1 AH."
  },

  {
    id: 14,
    title: "The Battles and the Defense of the Community",
    image: "/Scenes/scene14.png",
    year: "2–8 AH",
    paragraph:
      "The battles that followed—Badr, Uhud, the Trench—were not expansions of power, but acts of protection. The early Muslims fought to preserve their right to exist, to worship freely, and to defend their families. Despite having every military right to retaliate, the Prophet emphasized restraint, mercy, and justice. Even in victory, he forgave widely. These moments reveal a truth often overlooked: Islam’s ethics in war were far ahead of its time, shaped by compassion and divine guidance.",
    fact: "At the Battle of Badr, Muslims were heavily outnumbered, yet strategic positioning and morale contributed to a decisive victory that boosted the fledgling community’s confidence."
  },

  {
    id: 15,
    title: "The Farewell Sermon",
    image: "/Scenes/scene15.webp",
    year: "10 AH",
    paragraph:
      "Standing before more than a hundred thousand followers, the Prophet delivered a message that summarized the essence of Islam: the equality of all people, the sanctity of life, the protection of women, the value of justice, and the responsibility of every believer. His words were not the speech of a conqueror, but the heart of a shepherd guiding his community one final time. Soon after, he returned to his Lord, leaving behind a legacy built on light, not dominion.",
    fact: "The Farewell Sermon explicitly prohibited racial or ethnic superiority, laying the foundation for a society based on equality."
  },

  // -------------------------------------------------------
  //  AFTER THE PROPHET ﷺ
  // -------------------------------------------------------

  {
    id: 16,
    title: "After the Passing of the Prophet",
    image: "/Scenes/scene16.png",
    year: "11 AH",
    paragraph:
      "The day the Prophet passed away was the heaviest day Medina ever felt. A city once filled with revelation now echoed with grief. Yet his companions carried the message forward—not through force, but through wisdom, scholarship, morality, and an unwavering sense of responsibility. Islam spread because people saw truth lived, not just spoken. The foundations he laid became a roadmap for generations to come.",
    fact: "Abu Bakr became the first caliph immediately after the Prophet’s death, ensuring continuity of leadership and the preservation of the nascent Muslim community."
  },

  {
    id: 17,
    title: "Islam Today: A Global Legacy",
    image: "/Scenes/scene17.webp",
    year: "Modern Era",
    paragraph:
      "Today, more than 1.9 billion people—nearly a quarter of humanity—identify as Muslim. From Jakarta to Lagos, from Cairo to London, Islam has become one of the world’s most influential spiritual and moral forces. Its message of monotheism, justice, compassion, and purpose continues to resonate across cultures and languages. The story that began in a cave, carried by the heart of one man, now lives in the hearts of nations. The journey of Islam is far from over; it remains an invitation for every seeker of truth to reflect, understand, and discover.",
    fact: "Islam is now the second largest religion in the world, with rapid growth particularly in sub-Saharan Africa and Asia due to high birth rates and conversions."
  }
];


// export interface Scene {
//   id: number;
//   year: string;
//   title: string;
//   image: string;
//   paragraph: string;
// }

// export const scenes: Scene[] = [
//   {
//     id: 1,
//     year: "50 years before Hijra",
//     title: "العرب قبل الإسلام: ظلام ممتد",
//     image: "/Scenes/scene1.png",
//     paragraph:
//       "قبل بزوغ نور الإسلام بسنوات طويلة، كانت الجزيرة العربية غارقة في ظلام الجهل والاضطراب. قبائل تتناحر بلا نهاية، ووأد للبنات يُمارس بيد باردة، وضعفٌ يستباح، وحقوقٌ تُسلب من غير قوة تحميها. لقد كانت الحياة تمضي بلا بوصلة، بلا عدل، بلا رحمة شاملة تُنصف الضعيف. كان الناس يبحثون عن معنى، ينتظرون إصلاحًا يملأ هذا الفراغ الروحي العميق، ويعيد للإنسان قيمته. وفي هذا المناخ القاسي، كانت الأرض تُهيَّأ لرسالة ستغيّر وجه التاريخ."
//   },

//   {
//     id: 2,
//     year: "45 years before Hijra",
//     title: "البشرية على أعتاب التحوّل",
//     image: "/Scenes/scene2.png",
//     paragraph:
//       "كانت الأخلاق الحسنة نادرة تظهر هنا وهناك كجمراتٍ تحت الرماد، والعدل غائبًا إلا قليلًا، والروح الإنسانية تائهة بين أصنام لا تنطق وآمالٍ لا تتحقق. ومع ذلك، كان هناك شعور خفي يسري بين الحكماء أن هذا العالم لا يمكن أن يستمر بهذه الفوضى. شيء ما كان يقترب… نور ينتظر لحظة الميلاد. كانت البشرية مستعدة لأن تستقبل رسالة تصحح المسار، وتعيد الإنسان إلى ربه وإلى ذاته."
//   },

//   {
//     id: 3,
//     year: "The Year of the Elephant – 53 years before Hijra",
//     title: "عام الفيل: ميلادٌ يهزّ التاريخ",
//     image: "/Scenes/scene3.png",
//     paragraph:
//       "في العام الذي حاول فيه أبرهة هدم الكعبة، شهدت مكة حدثًا سيظل علامة فارقة في التاريخ: ميلاد النبي ﷺ. هذا الميلاد لم يكن مجرد لحظة بشرية عابرة، بل كان بداية فصل جديد في قصة الإنسانية. لقد وُلد من سيكون رحمة للعالمين في مدينة صغيرة تُحيطها القسوة من كل جانب، لكن داخله كان سلامٌ عظيم، وجاهزية لرسالة ستُبدّل الواقع كله."
//   },

//   {
//     id: 4,
//     year: "40–28 years before Hijra",
//     title: "نشأة النبي ﷺ: الصدق قبل الرسالة",
//     image: "/Scenes/scene4.png",
//     paragraph:
//       "نشأ النبي ﷺ يتيمًا، لكن الله تولّاه بالعناية واللطف. عرفه قومه بالصدق، حتى سموه «الصادق الأمين»، وهي شهادة لم تمنحها له الرسالة، بل منحها له مجهود حياته قبل أن يُكلّف بها. كان قلبه نقيًا، بعيدًا عن مظاهر الجاهلية، باحثًا عن الحق بلا معلم، وكأن فطرته كانت تقوده إلى ما سيأتي."
//   },

//   {
//     id: 5,
//     year: "10 years before Hijra",
//     title: "غار حراء: البحث عن الحقيقة",
//     image: "/Scenes/scene5.png",
//     paragraph:
//       "اعتاد النبي ﷺ أن يختلي بنفسه في غار حراء؛ يترك صخب مكة وأسواقها، ويصعد الجبل وحيدًا، كأنه يبحث عن صوتٍ داخلي يخبره بما يجري حوله. كان يشعر أن العالم أعوج، وأن على الأرض رسالة غابت. تلك اللحظات من التأمل لم تكن هروبًا، بل استعدادًا—تهيئة قلب لرؤية سيعجز البشر عن وصفها."
//   },

//   {
//     id: 6,
//     year: "10 years before Hijra",
//     title: "بداية الوحي",
//     image: "/Scenes/scene6.png",
//     paragraph:
//       "في ليلة من ليالي رمضان، اختار الله نبيه ليحمل أعظم رسالة. جاء جبريل عليه السلام بالوحي، وارتجف قلب النبي ﷺ من هول الموقف، لكنه لم يرتجف خوفًا من الحقيقة—بل من عظمة التكليف. تلك اللحظة كانت بداية الطريق، بداية النور، بداية رسالة ستغير كل شيء."
//   },

//   {
//     id: 7,
//     year: "9–7 years before Hijra",
//     title: "الدعوة السرية: بداية بناء القلوب",
//     image: "/Scenes/scene7.png",
//     paragraph:
//       "بدأت الدعوة سرًا؛ بيت الأرقم كان أول مدرسة في الإسلام. لم تكن الدعوة خطة سياسية، بل دعوة قلب لقلب. كان النبي ﷺ ينقل النور إلى أصحابه الأوائل، يرسم في وجدانهم معنى التوحيد والعدل والأخوة الإنسانية. تلك المرحلة الصغيرة في الزمن، الكبيرة في أثرها، صنعت جيلاً سيحمل الرسالة بأمانة."
//   },

//   {
//     id: 8,
//     year: "12–8 years before Hijra",
//     title: "الإسراء والمعراج: تكريم فوق السماء",
//     image: "/Scenes/scene8.png",
//     paragraph:
//       "في أصعب لحظات حياته، حين ضاقت الأرض بما رحبت، أكرم الله نبيه ﷺ برحلة ليست ككل الرحلات: الإسراء من مكة إلى القدس، ثم المعراج إلى السماوات العلى. مشاهد لا تراها الأبصار، ومقامات لا يصلها بشر. كانت الرحلة رسالة قوية: أن النبي ﷺ ليس وحده، وأن السماء معه، وأن الطريق الذي يمشيه وإن اشتد، فهو الطريق إلى الله."
//   },

//   {
//     id: 9,
//     year: "10 years before Hijra",
//     title: "عام الحزن",
//     image: "/Scenes/scene9.png",
//     paragraph:
//       "فقد النبي ﷺ زوجته خديجة، سند الروح، وفقد عمه أبا طالب، سند الأرض. اجتمع الألم الإنساني والدعوي في عام واحد، حتى سُمّي «عام الحزن». ومع ذلك لم يتوقف؛ كان يعرف أن الرسالة أكبر من جراحه، وأن الطريق وإن طال، فإن الحق لا يُترك."
//   },

//   {
//     id: 10,
//     year: "13–1 years before Hijra",
//     title: "الإيذاء في مكة: ثبات رغم القسوة",
//     image: "/iScenesscene10.png",
//     paragraph:
//       "تعرض النبي ﷺ وأصحابه لأشد أنواع الأذى؛ حصار، سخرية، تعذيب، ومقاطعة اجتماعية واقتصادية. ورغم ذلك، لم يتراجع أحدهم عن كلمة الحق. كان الثبات في مكة درسًا خالدًا: أن المبادئ أغلى من الراحة، وأن الإيمان ليس كلمات تُقال، بل تضحية وصدق."
//   },

//   {
//     id: 11,
//     year: "1 year before Hijra",
//     title: "الهجرة: انتقال الضوء",
//     image: "/iScenesscene11.png",
//     paragraph:
//       "حين اشتد الأذى ورفضت مكة الحق، أذن الله لنبيه بالهجرة. لم تكن الهجرة هروبًا، بل كانت انتقالًا بنور الرسالة إلى أرض تستطيع حملها. من غار ثور إلى مشارف المدينة، كتبت الهجرة أول سطر في فصل جديد سيغيّر تاريخ العالم."
//   },

//   {
//     id: 12,
//     year: "1–9 years after Hijra",
//     title: "الغزوات وبناء الأمة",
//     image: "/iScenesscene12.png",
//     paragraph:
//       "شهدت المدينة غزوات كثيرة، ليس هدفها القتال، بل حماية الحق وتثبيت قواعد العدل. كان النبي ﷺ قائدًا رحيمًا، لا يبدأ قتالًا، ولا ينتصر إلا بالرحمة قبل القوة. في كل معركة، كان يؤسس أمة، ويزرع قيمًا ستعيش أطول من السيوف."
//   },

//   {
//     id: 13,
//     year: "10 years after Hijra",
//     title: "خطبة الوداع: عهد الإنسانية",
//     image: "/iScenesscene13.png",
//     paragraph:
//       "في حجة الوداع، ألقى النبي ﷺ خطبة جمعت جوهر الرسالة كلها: العدالة، المساواة، الرحمة، حرمة الدماء، كرامة الإنسان. كانت الخطبة بمثابة دستور أخلاقي عالمي، يصلح لكل زمان، ويحفظ للإنسان إنسانيته مهما تغيّرت الدنيا."
//   },

//   {
//     id: 14,
//     year: "11 years after Hijra",
//     title: "بعد وفاة النبي ﷺ",
//     image: "/iScenesscene14.png",
//     paragraph:
//       "رحل النبي ﷺ تاركًا أثرًا لا يزول، ورسالة حملها أصحابه بصدق. لم يكن الفقد سهلًا، لكن الأمة فهمت أن الرسالة أكبر من وجود صاحبها الجسدي، وأن ما بُني خلال 23 عامًا سيبقى ما دام في الأرض قلبٌ مؤمن."
//   },

//   {
//     id: 15,
//     year: "1400+ years after Hijra",
//     title: "الإسلام اليوم: رسالة تتجاوز الزمن",
//     image: "/iScenesscene15.png",
//     paragraph:
//       "بعد أكثر من أربعة عشر قرنًا، يقف الإسلام اليوم كأسرع الديانات نموًا على وجه الأرض، يتبعه ما يقارب ملياري إنسان. ورغم الحملات والتشويه وسوء الفهم، يظل نور الرسالة ممتدًا، يصل إلى قلوب تبحث عن معنى وطمأنينة. إنها رسالة لا يوقفها زمن، ولا يحدّها مكان—لأنها رسالة من السماء إلى الإنسان، إلى يوم القيامة."
//   }
// ];
