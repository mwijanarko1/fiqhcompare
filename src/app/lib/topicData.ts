export interface ChapterContent {
  title: string;
  content: string[];
}

export interface TopicData {
  title: string;
  chapters: ChapterContent[];
}

export const topicData: Record<string, TopicData> = {
  purification: {
    title: "The Book of Purification",
    chapters: [
      {
        title: "Chapter 1: Rulings on the Types of Water",
        content: [
          "Water was created pure and is purifying. It purifies from ritual impurities (nullifiers of wudu and ghusl) and physical impurities",
          "Purity can't be attained by any other liquid",
          "4 types of water: Plain water (includes seas, rivers, rain, snow, hail, and wells), Used water (water used to remove spiritual impurity), Water mixed with pure substances, Water mixed with impure substances",
          "3 categories of water: Pure + purifying, Pure + not purifying (ex. Tea and ink), Impure (urine, menstrual blood, etc)",
          "When water amounts to qullatayn (around 190 liters or about 50 gallons) or is flowing, it can't become impure EXCEPT if something changes its color, taste, or smell",
          "Water less than qullatayn becomes impure by any mixing with impurities",
          "If you have doubts regarding the purity/impurity of water/something else, base your actions on certainty ('certainty is not negated by doubt')",
          "If pure water was indistinguishable from impure water (if someone loses his/her sense or in the dark), and you don't find any other water, make tayammum and avoid the water",
          "If pure + purifying water is confused with pure + not purifying, then you should make wudu out of each of them",
          "Impurity from the dog and the pig should be washed 7 times, including once with soil",
          "It is sufficient for all other impurities to be washed 3 times until purified",
          "Removing impurity: On the ground - pour water over it; Urine from a male infant who has not yet started eating regular/solid food - wet the area affected without soaking is sufficient; Madhiy (prostatic secretion) - wet the area affected without soaking is sufficient",
          "The semen of a human = pure",
          "The urine of the animals whose flesh can be eaten = pure"
        ]
      },
      {
        title: "Chapter 2: Vessels and Utensils",
        content: [
          "Gold and silver vessels used for purification or otherwise (eating, storing makeup, etc) is not lawful to use",
          "Vessels soldered with gold/silver is also not lawful unless it is with a small amount of silver solder",
          "Permissible to use all other pure vessels, to possess them, and to use the vessels of the People of the Book and their clothes (unless they are known to be impure)",
          "Wool and hair of dead animals (animals that have not been slaughtered or those that are impermissible to eat) = pure",
          "Skin and bones of any non-slaughtered dead animal = impure",
          "Every dead body = filthy EXCEPT a human's and a sea creature that only lives in the sea and that which does not have blood (as long as it did not emanate from impurities)"
        ]
      },
      {
        title: "Chapter 3: Using the Lavatory",
        content: [
          "Say 'A'udhu billahi minal khubuthi wal khaba'ith' when entering",
          "Say 'Ghufranaka' when exiting",
          "Enter with the left foot and exit with the right foot",
          "Don't enter with anything bearing the mention of Allah unless it is necessary",
          "Etiquettes of defecation and urination:",
          "- If you squat, put more weight on your left leg",
          "- If outdoors, go far away and screen yourself",
          "- Choose a soft spot to urinate on so it doesn't splash back on you",
          "- Don't urinate in a hole, groove, path, beneficial shade, or under a fruit-bearing tree",
          "- Don't face the sun or moon and don't face/turn your back towards the qibla",
          "Etiquettes of cleaning oneself:",
          "- Don't touch privates with right hand or use your right hand to wipe your privates",
          "- Wipe yourself an odd number of times and wash with water after that",
          "- If you choose to only wipe then it is sufficient",
          "- Wiping would suffice only if the filth that exited did not go beyond the area that it usually touches (if it did, need to remove filth with water)",
          "- Fewer than 3 wipes that remove all of the filth is not sufficient",
          "- Every pure substance that could remove the filth may be used for wiping EXCEPT excrement of animals, bones, and sacred/respected material"
        ]
      },
      {
        title: "Chapter 4: Wudu",
        content: [
          "Wudu and other acts of worship are not valid unless one makes the intention",
          "Description of the sunnah wudu:",
          "- Say bismillah",
          "- Wash hands 3x",
          "- Rinse mouth and nostrils 3x, combining both with one handful of water or three",
          "- Wash face 3x, from hairline down to the bottom of the jaws and chin, from one ear to other ear, run wet fingers through his beard if it is abundant, wash the beard if skin shows",
          "- Wash forearms 3x, including hands to the elbows, including the elbows",
          "- Wipe head including ears, start hands at the forelock and wiping to the nape of neck and back to forelock",
          "- Wash feet 3x, to ankles and include ankles and inner parts of toes",
          "- Say the shahadah",
          "Pillars of wudu:",
          "- Intention",
          "- Washing each part once, except for the hands",
          "- Rinsing mouth and nostrils (mandatory in Hanbali madhhab)",
          "- Doing all this in the specific order",
          "- Not delay the washing of any part such that the part prior to it becomes dry"
        ]
      },
      {
        title: "Chapter 5: Wiping Over (Leather) Socks",
        content: [
          "Permissible to wipe over leather socks and whatever resembles them, like thick socks that stay on the feet and shoes that reach above the ankle bones for wudu",
          "Duration of wiping period is 1 day and 1 night for resident, 3 for the traveler",
          "Wiping over turban if it has a tail and covers the entire head except that which is usually uncovered = permissible EXCEPT for women",
          "Wiping over all such things have a condition that they must have been put on while having complete wudu",
          "Can wipe over a bandage if it doesn't exceed the part that needs to be wrapped, can do this until he removes it"
        ]
      },
      {
        title: "Chapter 6: Nullifiers of Wudu",
        content: [
          "There are 7 nullifiers:",
          "- What exits from the private parts",
          "- Impure discharges from elsewhere in the body if they are excessive enough to be repulsive",
          "- Loss of intellect (sleep, coma, insanity, and intoxication), except for light sleep while sitting or standing",
          "- Touching the privates with the hands",
          "- If your skin touches the skin of the opposite gender with lustful desire",
          "- Apostasy from Islam",
          "- Eating camel meat",
          "If you're certain you have wudu but uncertain if you broke it then you cast the doubt away and consider yourself as having wudu",
          "If you're certain you don't have wudu but uncertain that you did wudu, then you do wudu"
        ]
      },
      {
        title: "Chapter 7: Ghusl",
        content: [
          "What makes it required:",
          "- Ejaculation of semen",
          "- The meeting of the two private parts",
          "Mandatory acts:",
          "- Intention",
          "- Washing the entire body",
          "- Rinsing the mouth and nostrils (mandatory in Hanbali madhhab)",
          "Sunnah acts:",
          "- Saying bismillah (mandatory according to Hanbali madhhab)",
          "- Rubbing the body with the hand",
          "It is not mandatory to unbraid the hair for ghusl required due to major ritual impurity as long as roots are saturated with water (however for ghusl after menstruation, it is safer to unbraid it)"
        ]
      },
      {
        title: "Chapter 8: Tayammum",
        content: [
          "Description:",
          "- Strike the wholesome sa'eed (soil according to Hanbali madhhab) once with two hands",
          "- Wipe face and hands with them",
          "- If one makes tayammum with more than one strike or wiped more than once = permissible",
          "Conditions:",
          "- Inability to use water due to: Shortage, Fear of harm if one uses it (sickness/severe cold), Fear of thirst, Worries about oneself or one's property if one seeks it, Cannot obtain it except at an expensive price",
          "- Commencement of the prayer time (should only make tayammum after the prayer time comes in)",
          "- Intention (if tayammum is made for a sunnah prayer, you can't pray a fardh salah with it)",
          "- Soil (can't use other than wholesome soil that has particles of dust)",
          "What invalidates:",
          "- Whatever invalidates wudu",
          "- Ending of the prayer time",
          "- The ability to use water, even if he was in prayer"
        ]
      },
      {
        title: "Chapter 9: Menstruation",
        content: [
          "What it makes unlawful:",
          "- The act of salah",
          "- Obligation of salah",
          "- Fasting",
          "- Tawaf",
          "- Recitation of the Quran (Malikis allow it and this opinion seems stronger)",
          "- Touching the mushaf",
          "- Staying in the masjid",
          "- Intercourse",
          "- The sunnah divorce",
          "- Counting the waiting period according to the calendar",
          "What is due upon its occurrence:",
          "- Ghusl",
          "- Puberty",
          "- Counting the waiting period according to it",
          "When to resume premenstrual functions:",
          "- Once the blood stops, fasting and divorce become permissible",
          "- The rest of the acts forbidden do not become permissible until she performs ghusl",
          "Duration, beginning, and end of menstruation:",
          "- Shortest duration is 1 day and 1 night",
          "- Longest is 15 days",
          "- Shortest interval between 2 periods is 13 days",
          "- No limit for longest interval",
          "- Youngest age at which a woman can menstruate is 9 years",
          "- Latest is 60 years"
        ]
      },
      {
        title: "Chapter 10: Postpartum Bleeding",
        content: [
          "Blood that flows out because of childbirth",
          "Ruling is like that of menstruation concerning the things that become forbidden and the things that become required and those that are dropped because of it",
          "Longest duration is 40 days, no limit for shortest",
          "Once she sees bleeding stops, she must perform ghusl",
          "If it returns within the period of 40 days, it is still considered postpartum bleeding"
        ]
      }
    ]
  },
  prayer: {
    title: "The Book of Prayer",
    chapters: [
      {
        title: "Chapter 1: Importance and Times of Prayer",
        content: [
          "Prayer is one of the pillars of Islam",
          "It is mandatory upon every adult, sane Muslim",
          "Times of the five daily prayers:",
          "- Fajr: From true dawn until sunrise",
          "- Dhuhr: From when the sun passes its zenith until an object's shadow equals its height plus the shadow at noon",
          "- Asr: From end of Dhuhr until the sun turns yellow",
          "- Maghrib: From sunset until disappearance of red twilight",
          "- Isha: From disappearance of red twilight until middle of the night (in necessity until true dawn)",
          "Forbidden times to pray voluntary prayers:",
          "- After Fajr prayer until sunrise",
          "- When the sun is at its zenith until it moves",
          "- After Asr prayer until sunset",
          "- When the sun is rising until it has fully risen",
          "- When the sun is setting until it has fully set"
        ]
      },
      {
        title: "Chapter 2: Conditions of Prayer",
        content: [
          "1. Islam - Prayer is not valid from a non-Muslim",
          "2. Sanity - Not required from an insane person",
          "3. Age of Discrimination - Children should be ordered to pray at seven and disciplined at ten",
          "4. Ritual Purity - Must have wudu, ghusl if needed, and be free from impurities",
          "5. Physical Purity - Body, clothes, and place of prayer must be pure",
          "6. Covering the Awrah:",
          "- For men: From navel to knees",
          "- For women: Entire body except face and hands",
          "7. Facing the Qibla - Must face the direction of the Kaaba",
          "8. Entry of Prayer Time - Each prayer must be performed in its prescribed time",
          "9. Intention - Must intend the specific prayer being performed"
        ]
      },
      {
        title: "Chapter 3: Pillars of Prayer",
        content: [
          "There are 14 pillars, omitting any invalidates the prayer:",
          "1. Standing if able in obligatory prayers",
          "2. Opening Takbir (Allahu Akbar)",
          "3. Reciting Al-Fatiha in every rak'ah",
          "4. Bowing (Ruku')",
          "5. Rising from bowing",
          "6. Standing straight after rising",
          "7. Prostration on seven body parts",
          "8. Rising from prostration",
          "9. Sitting between the two prostrations",
          "10. Tranquility in all positions",
          "11. Final Tashahhud",
          "12. Sitting for final Tashahhud",
          "13. Sending prayers upon the Prophet ﷺ",
          "14. Two Taslims (saying 'As-salamu alaykum wa rahmatullah')"
        ]
      },
      {
        title: "Chapter 4: Obligations of Prayer",
        content: [
          "Obligations are acts that require prostration of forgetfulness if omitted unintentionally:",
          "1. All takbirs except the opening takbir",
          "2. Saying 'Sami Allahu liman hamidah' by the imam and one praying alone",
          "3. Saying 'Rabbana wa lakal hamd'",
          "4. Saying 'Subhana Rabbi al-Adhim' in ruku'",
          "5. Saying 'Subhana Rabbi al-A'la' in sujud",
          "6. Saying 'Rabbi ghfir li' between prostrations",
          "7. First Tashahhud",
          "8. Sitting for first Tashahhud"
        ]
      },
      {
        title: "Chapter 5: Description of Prayer",
        content: [
          "1. Stand facing qibla and make intention",
          "2. Raise hands to shoulders/ears and say opening takbir",
          "3. Place right hand over left on chest",
          "4. Recite opening supplication (recommended: 'Subhanaka Allahumma...')",
          "5. Say 'A'udhu billahi...' and 'Bismillah...'",
          "6. Recite Al-Fatiha followed by another surah",
          "7. Say takbir and bow, placing hands on knees",
          "8. Say 'Subhana Rabbi al-Adhim' three times or more",
          "9. Rise saying 'Sami Allahu liman hamidah'",
          "10. Stand straight saying 'Rabbana wa lakal hamd'",
          "11. Say takbir and prostrate on seven body parts",
          "12. Say 'Subhana Rabbi al-A'la' three times or more",
          "13. Rise with takbir and sit between prostrations",
          "14. Say 'Rabbi ghfir li' between prostrations",
          "15. Perform second prostration like the first",
          "16. Rise for second rak'ah with takbir",
          "17. Repeat steps 6-15",
          "18. Sit for tashahhud after second rak'ah",
          "19. If prayer is four rak'ahs, rise and complete remaining rak'ahs",
          "20. Sit for final tashahhud",
          "21. Send prayers upon the Prophet ﷺ",
          "22. Make supplications",
          "23. Give two taslims to the right and left"
        ]
      },
      {
        title: "Chapter 6: Acts that Invalidate Prayer",
        content: [
          "1. Intentionally speaking words unrelated to prayer",
          "2. Excessive movement unrelated to prayer",
          "3. Eating or drinking",
          "4. Laughing out loud",
          "5. Leaving any pillar of prayer",
          "6. Intentionally leaving an obligation without prostration of forgetfulness",
          "7. Breaking wudu",
          "8. Exposing the awrah",
          "9. Severely deviating from the qibla",
          "10. Adding an extra pillar (like an extra ruku or sujud)",
          "11. Intentionally preceding the imam in a pillar"
        ]
      },
      {
        title: "Chapter 7: Prostration of Forgetfulness",
        content: [
          "Required when:",
          "1. Leaving an obligation unintentionally",
          "2. Adding an extra action unintentionally",
          "3. Having doubt about number of rak'ahs until certain",
          "When to perform it:",
          "- If due to omission: Before the final taslim",
          "- If due to addition: After the final taslim",
          "- If due to doubt: After the final taslim",
          "How to perform it:",
          "1. Make two prostrations like regular prayer prostrations",
          "2. Sit between them",
          "3. Give taslim after if done after final taslim",
          "If multiple causes for prostration occur, two prostrations suffice for all"
        ]
      },
      {
        title: "Chapter 8: Prayer of the Sick",
        content: [
          "1. If unable to stand, pray sitting",
          "2. If unable to sit, pray lying on side facing qibla",
          "3. If unable to lie on side, pray lying on back with feet towards qibla",
          "4. If unable to bow or prostrate, indicate with head",
          "5. If unable to move head, indicate with eyes",
          "6. Prayer is never waived as long as one is conscious",
          "7. Must make up missed prayers when recovered",
          "8. If condition is permanent, pray according to ability"
        ]
      },
      {
        title: "Chapter 9: Prayer of the Traveler",
        content: [
          "Conditions for shortening prayer:",
          "1. Journey must be of permissible purpose",
          "2. Distance must be 80km or more",
          "3. Must pass beyond city limits",
          "4. Must not intend to stay at destination for more than 4 days",
          "Rules of shortened prayer:",
          "- Shorten 4-rak'ah prayers to 2 rak'ahs",
          "- Maghrib and Fajr remain unchanged",
          "- Can combine Dhuhr with Asr, and Maghrib with Isha",
          "- Combination can be done at either prayer time (taqdim or ta'khir)",
          "When to resume normal prayer:",
          "1. Upon returning home",
          "2. Upon intending to stay more than 4 days",
          "3. Upon actually staying more than 4 days even without intention"
        ]
      }
    ]
  },
  zakat: {
    title: "The Book of Zakat",
    chapters: [
      {
        title: "Chapter 1: Conditions of Zakat",
        content: [
          "Zakat is one of the pillars of Islam",
          "Conditions for obligation:",
          "1. Islam - Not obligatory on non-Muslims",
          "2. Freedom - Not obligatory on slaves",
          "3. Complete Ownership - Must fully own the wealth",
          "4. Nisab - Wealth must reach minimum threshold",
          "5. Hawl - One lunar year must pass (except crops and fruits)",
          "6. Being Free of Debt - Debt that would reduce wealth below nisab exempts from zakat",
          "Types of wealth subject to zakat:",
          "1. Livestock (camels, cattle, sheep/goats)",
          "2. Gold and silver",
          "3. Trade goods",
          "4. Crops and fruits",
          "5. Minerals and buried treasures"
        ]
      },
      {
        title: "Chapter 2: Zakat on Livestock",
        content: [
          "Conditions for livestock zakat:",
          "1. Must be free-grazing for most of the year",
          "2. Must be kept for milk, breeding, or fattening",
          "3. Must reach nisab",
          "Zakat on Camels:",
          "- 5-9: One sheep/goat",
          "- 10-14: Two sheep/goats",
          "- 15-19: Three sheep/goats",
          "- 20-24: Four sheep/goats",
          "- 25-35: One one-year-old she-camel",
          "- 36-45: One two-year-old she-camel",
          "- 46-60: One three-year-old she-camel",
          "- 61-75: One four-year-old she-camel",
          "- 76-90: Two two-year-old she-camels",
          "Zakat on Cattle:",
          "- 30-39: One one-year-old calf",
          "- 40-59: One two-year-old cow",
          "- 60-69: Two one-year-old calves",
          "- 70-79: One one-year-old and one two-year-old",
          "Zakat on Sheep/Goats:",
          "- 40-120: One sheep",
          "- 121-200: Two sheep",
          "- 201-399: Three sheep",
          "- 400+: Four sheep, then one sheep for each 100"
        ]
      },
      {
        title: "Chapter 3: Zakat on Gold, Silver, and Currency",
        content: [
          "Gold Nisab: 85 grams (20 dinars)",
          "Silver Nisab: 595 grams (200 dirhams)",
          "Rate: 2.5% of total amount",
          "Modern paper currency:",
          "- Takes ruling of gold and silver",
          "- Calculated based on lesser of gold or silver nisab",
          "- Combined with gold and silver if owned",
          "Jewelry:",
          "- No zakat on permissible jewelry for personal use",
          "- Zakat due on jewelry for storage/investment",
          "- Zakat due on impermissible jewelry (men's gold)",
          "Trade Unit Calculations:",
          "- Value assessed at end of lunar year",
          "- Combined with other trade wealth",
          "- 2.5% paid on total value"
        ]
      },
      {
        title: "Chapter 4: Zakat on Trade Goods",
        content: [
          "Definition: Anything intended for trade and profit",
          "Conditions:",
          "1. Intention of trade at time of acquisition",
          "2. Acquired through exchange (not inheritance/gift)",
          "3. Value reaches nisab",
          "Calculation:",
          "- Valued at end of lunar year",
          "- Based on current market value",
          "- 2.5% of total value",
          "Includes:",
          "- Merchandise",
          "- Real estate for trade",
          "- Vehicles for trade",
          "- Stocks and shares for trade"
        ]
      },
      {
        title: "Chapter 5: Zakat on Crops and Fruits",
        content: [
          "Types subject to zakat:",
          "1. Grains that can be stored",
          "2. Dates and raisins",
          "Conditions:",
          "- Must reach nisab (653kg)",
          "- Must be cultivated by humans",
          "Rates:",
          "- 10% if irrigated naturally (rain, rivers)",
          "- 5% if irrigated artificially (wells, canals)",
          "- 7.5% if both methods used equally",
          "Timing:",
          "- Due at harvest time",
          "- No lunar year requirement",
          "Calculation:",
          "- After drying and cleaning",
          "- Before personal consumption"
        ]
      },
      {
        title: "Chapter 6: Recipients of Zakat",
        content: [
          "Eight categories mentioned in Quran:",
          "1. Poor - Cannot meet basic needs",
          "2. Needy - Can meet some but not all basic needs",
          "3. Zakat Collectors - Those appointed to collect/distribute",
          "4. Those whose hearts are to be reconciled",
          "5. Freeing of Slaves",
          "6. Those in Debt - If debt was for permissible purpose",
          "7. In the Way of Allah - Religious causes/jihad",
          "8. Wayfarers - Travelers in need",
          "Invalid Recipients:",
          "- Non-Muslims (except category 4)",
          "- Wealthy people",
          "- Prophet's family members",
          "- One's dependents",
          "Distribution:",
          "- Must give to at least one category",
          "- Better to distribute to multiple categories",
          "- Local recipients prioritized over distant ones"
        ]
      }
    ]
  },
  fasting: {
    title: "The Book of Fasting",
    chapters: [
      {
        title: "Chapter 1: Obligation of Ramadan Fasting",
        content: [
          "Fasting Ramadan is one of the pillars of Islam",
          "Conditions of Obligation:",
          "1. Islam",
          "2. Sanity",
          "3. Puberty",
          "4. Ability",
          "Establishing Ramadan:",
          "- Sighting of new moon by trustworthy Muslim",
          "- Completion of 30 days of Sha'ban",
          "- One witness sufficient for start",
          "- Two witnesses required for end",
          "Intention:",
          "- Must be made before dawn for obligatory fasts",
          "- Can be made before noon for voluntary fasts",
          "- Single intention sufficient for whole month",
          "- Should specify if making up missed fast"
        ]
      },
      {
        title: "Chapter 2: Conditions and Pillars of Fasting",
        content: [
          "Conditions for Validity:",
          "1. Islam",
          "2. Sanity",
          "3. Purity from menstruation/postpartum bleeding",
          "4. Knowledge of time (dawn has begun)",
          "Pillars of Fasting:",
          "1. Intention",
          "2. Abstaining from dawn to sunset from:",
          "- Food and drink",
          "- Sexual intercourse",
          "- Anything reaching the stomach",
          "- Intentional vomiting",
          "Time of Fast:",
          "- Begins at true dawn (white thread distinct from black)",
          "- Ends at sunset",
          "- Must abstain when in doubt about dawn/sunset"
        ]
      },
      {
        title: "Chapter 3: Those Exempt from Fasting",
        content: [
          "1. Sick Person:",
          "- If fasting would harm or delay recovery",
          "- Must make up when recovered",
          "2. Traveler:",
          "- Journey meeting prayer-shortening conditions",
          "- Better to fast if not difficult",
          "3. Pregnant/Nursing Women:",
          "- If fearing harm to self or child",
          "- Must make up and feed poor if feared for child",
          "4. Elderly:",
          "- If unable to fast",
          "- Feed poor person for each day",
          "5. Menstruating/Postpartum Women:",
          "- Prohibited to fast",
          "- Must make up later",
          "Making Up Missed Fasts:",
          "- Not required to be consecutive",
          "- Must complete before next Ramadan",
          "- If delayed until next Ramadan, feed poor person per day plus make up"
        ]
      },
      {
        title: "Chapter 4: What Invalidates the Fast",
        content: [
          "Actions that Break Fast:",
          "1. Eating or drinking intentionally",
          "2. Sexual intercourse",
          "3. Intentional vomiting",
          "4. Menstruation or postpartum bleeding",
          "5. Apostasy",
          "6. Intention to break fast",
          "7. Nutritional injections",
          "What Does Not Break Fast:",
          "- Eating/drinking forgetfully",
          "- Unintentional vomiting",
          "- Wet dream",
          "- Non-nutritional injections",
          "- Blood tests",
          "- Unintentional dust/water reaching throat",
          "Expiation (Kaffarah):",
          "- Required for intentional sexual intercourse",
          "- Options in order:",
          "1. Free a slave",
          "2. Fast two consecutive months",
          "3. Feed 60 poor people"
        ]
      },
      {
        title: "Chapter 5: Recommended Acts While Fasting",
        content: [
          "1. Suhoor (pre-dawn meal):",
          "- Delaying it until just before dawn",
          "- Even if just water",
          "2. Breaking Fast (Iftar):",
          "- Hastening to break at sunset",
          "- Breaking with fresh dates, or dry dates, or water",
          "- Saying prescribed dua",
          "3. Avoiding:",
          "- Excessive talk",
          "- Arguments",
          "- Backbiting",
          "- Looking at what may incite desires",
          "4. Increasing:",
          "- Quran recitation",
          "- Charity",
          "- Optional prayers",
          "- Dua",
          "5. I'tikaf (Spiritual Retreat):",
          "- Especially in last 10 nights",
          "- Seeking Laylat al-Qadr"
        ]
      }
    ]
  },
  hajj: {
    title: "The Book of Hajj",
    chapters: [
      {
        title: "Chapter 1: Obligation and Conditions of Hajj",
        content: [
          "Hajj is obligatory once in a lifetime upon every Muslim who is able",
          "Conditions of Obligation:",
          "1. Islam",
          "2. Sanity",
          "3. Puberty",
          "4. Freedom",
          "5. Physical Ability:",
          "- Sound body",
          "- Ability to ride/travel",
          "- Security of route",
          "6. Financial Ability:",
          "- Travel expenses",
          "- Accommodation",
          "- Return journey",
          "- Maintenance for dependents",
          "7. Presence of Mahram for Women:",
          "- Husband or",
          "- Male relative she cannot marry",
          "Time of Obligation:",
          "- Must perform immediately when able",
          "- Delaying without valid reason is sinful"
        ]
      },
      {
        title: "Chapter 2: The Miqat (Entry Points)",
        content: [
          "Physical Miqat (Place):",
          "1. Dhul Hulaifah - For people of Madinah",
          "2. Al-Juhfah - For people of Syria",
          "3. Qarn Al-Manazil - For people of Najd",
          "4. Yalamlam - For people of Yemen",
          "5. Dhat Irq - For people of Iraq",
          "Rules of Miqat:",
          "- Must not pass without ihram if intending Hajj/Umrah",
          "- If passing multiple miqat, use first one",
          "- Makkah residents start from Makkah",
          "- Those living between miqat and Makkah start from residence",
          "Temporal Miqat:",
          "- Months of Hajj: Shawwal, Dhul Qa'dah, first 10 days of Dhul Hijjah",
          "- Umrah can be performed any time"
        ]
      },
      {
        title: "Chapter 3: Ihram and Its Prohibitions",
        content: [
          "Ihram Requirements:",
          "1. Ghusl (recommended)",
          "2. Removing stitched clothes (men)",
          "3. Wearing ihram garments (men):",
          "- White sheet around waist",
          "- White sheet over shoulders",
          "4. Intention for specific ritual",
          "5. Talbiyah",
          "Prohibited During Ihram:",
          "1. Wearing stitched clothes (men)",
          "2. Covering head (men)",
          "3. Covering face (women)",
          "4. Using perfume",
          "5. Cutting hair/nails",
          "6. Sexual relations or foreplay",
          "7. Hunting land animals",
          "8. Contracting marriage",
          "Permitted Actions:",
          "- Washing body",
          "- Scratching skin",
          "- Using umbrella for shade",
          "- Wearing rings, watches, glasses",
          "- Changing ihram garments"
        ]
      },
      {
        title: "Chapter 4: Pillars of Hajj",
        content: [
          "Four Pillars (Omission Invalidates Hajj):",
          "1. Ihram - Intention and talbiyah",
          "2. Standing at Arafah:",
          "- Any time from noon 9th Dhul Hijjah to dawn 10th",
          "- Even a moment is sufficient",
          "3. Tawaf al-Ifadah:",
          "- Seven circuits",
          "- After standing at Arafah",
          "4. Sa'i between Safa and Marwa:",
          "- Seven rounds",
          "- Must follow a valid tawaf"
        ]
      },
      {
        title: "Chapter 5: Obligations of Hajj",
        content: [
          "Obligations (Omission Requires Dam/Sacrifice):",
          "1. Ihram from Miqat",
          "2. Standing at Arafah until sunset",
          "3. Spending night at Muzdalifah",
          "4. Spending nights at Mina",
          "5. Stoning the Jamarat:",
          "- Small (Sughra)",
          "- Medium (Wusta)",
          "- Large (Aqabah)",
          "6. Shaving/Cutting Hair",
          "7. Farewell Tawaf",
          "Order of Actions on 10th Dhul Hijjah:",
          "1. Stoning Jamrat al-Aqabah",
          "2. Sacrifice",
          "3. Shaving/Cutting Hair",
          "4. Tawaf and Sa'i"
        ]
      },
      {
        title: "Chapter 6: Types of Hajj",
        content: [
          "1. Tamattu (Best Type):",
          "- Umrah in Hajj months",
          "- Exit ihram",
          "- New ihram for Hajj",
          "- Requires sacrifice",
          "2. Qiran:",
          "- Ihram for both together",
          "- Remain in ihram",
          "- Requires sacrifice",
          "3. Ifrad:",
          "- Hajj only",
          "- No sacrifice required",
          "Rules for Each Type:",
          "- Tamattu best for non-Makkans",
          "- Ifrad best for Makkans",
          "- All fulfill obligation"
        ]
      },
      {
        title: "Chapter 7: Umrah",
        content: [
          "Ruling: Obligatory once in lifetime",
          "Pillars of Umrah:",
          "1. Ihram",
          "2. Tawaf",
          "3. Sa'i",
          "4. Shaving/Cutting Hair",
          "Differences from Hajj:",
          "- Can be performed anytime",
          "- No standing at Arafah",
          "- No stoning",
          "- No staying at Mina/Muzdalifah",
          "Best Times:",
          "- Ramadan (equals Hajj in reward)",
          "- Any time except days of Hajj for those performing Hajj"
        ]
      }
    ]
  }
}; 