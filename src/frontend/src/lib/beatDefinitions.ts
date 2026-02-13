export interface Beat {
  key: string;
  name: string;
  explanation: string;
  guidance: string;
  pages?: string;
  duration?: string;
}

export interface ActSection {
  name: string;
  pages: string;
  duration: string;
  beats: Beat[];
}

// Save the Cat - 15 Beats
export const saveTheCatBeats: Beat[] = [
  {
    key: 'opening-image',
    name: 'Opening Image',
    explanation: 'A visual snapshot of the protagonist\'s life before the adventure begins. This "before" picture sets the tone and shows what needs to change. It establishes the status quo that will be transformed by the end.',
    guidance: 'Show your protagonist in their ordinary world. What does their life look like? What\'s missing? Establish mood, tone, and the emotional state that will contrast with the Final Image.',
    pages: '1',
    duration: '1 min'
  },
  {
    key: 'theme-stated',
    name: 'Theme Stated',
    explanation: 'Someone (usually not the protagonist) poses a question or makes a statement that hints at the story\'s central theme. The protagonist doesn\'t understand it yet, but by the end, they will. This is the moral premise of your story.',
    guidance: 'Have a secondary character ask a question or make an observation that relates to what your protagonist needs to learn. Keep it subtle—the audience should only recognize it in hindsight.',
    pages: '5',
    duration: '5 min'
  },
  {
    key: 'setup',
    name: 'Set-Up',
    explanation: 'Introduce your protagonist\'s world, supporting characters, and the "before" snapshot in detail. Show what\'s wrong or missing in their life. Establish relationships, routines, and the stakes. This is the world that will be disrupted.',
    guidance: 'Establish your protagonist\'s everyday life, their flaws, their relationships, and what they think they want. Show the status quo and hint at the internal need. Introduce all main characters and their dynamics.',
    pages: '1-10',
    duration: '1-10 min'
  },
  {
    key: 'catalyst',
    name: 'Catalyst',
    explanation: 'The inciting incident—something happens that disrupts the status quo and sets the story in motion. Life as the protagonist knows it is over. This event is often delivered by a messenger and cannot be ignored, though the protagonist may try.',
    guidance: 'What event disrupts your protagonist\'s ordinary world? This should be a clear, definable moment—a phone call, a death, an opportunity, a threat. Make it impossible to ignore.',
    pages: '12',
    duration: '12 min'
  },
  {
    key: 'debate',
    name: 'Debate',
    explanation: 'The protagonist hesitates, questions, and resists the call to adventure. Should they go? Can they do it? What will they lose? This section shows their fear and reluctance, making them relatable and human before they commit.',
    guidance: 'Show your protagonist wrestling with the decision. What are they afraid of? What do they stand to lose? Let them voice doubts, seek advice, or try to avoid the inevitable. Build tension before the leap.',
    pages: '12-25',
    duration: '12-25 min'
  },
  {
    key: 'break-into-two',
    name: 'Break into Two',
    explanation: 'The protagonist makes a choice and crosses the threshold into Act Two. They leave the familiar world behind and enter the upside-down world of the adventure. This is a decisive action—there\'s no turning back now.',
    guidance: 'Your protagonist makes a clear, active choice to pursue the goal. They step into the new world. This should be a definitive moment—a decision, a journey begun, a commitment made.',
    pages: '25',
    duration: '25 min'
  },
  {
    key: 'b-story',
    name: 'B Story',
    explanation: 'A new character or relationship is introduced that will help the protagonist learn the theme. This is often the love story, mentor relationship, or friendship that provides emotional growth and thematic counterpoint to the main plot.',
    guidance: 'Introduce the character or relationship that will teach your protagonist the lesson they need to learn. This person often represents the theme and provides emotional stakes separate from the main plot.',
    pages: '30',
    duration: '30 min'
  },
  {
    key: 'fun-and-games',
    name: 'Fun and Games',
    explanation: 'The promise of the premise—this is what the audience came to see. The protagonist explores the new world, experiences the adventure, and either enjoys success or faces challenges. This section delivers on the genre and concept.',
    guidance: 'Deliver on your premise. If it\'s a heist movie, show the planning and execution. If it\'s a romance, show the courtship. This is the "trailer moments" section—pure genre fun before things get serious.',
    pages: '30-55',
    duration: '30-55 min'
  },
  {
    key: 'midpoint',
    name: 'Midpoint',
    explanation: 'A major event that raises the stakes and changes the direction of the story. Either a false victory (things seem great but aren\'t) or a false defeat (things seem terrible but lead to growth). Time clocks appear, and stakes are raised.',
    guidance: 'Create a major turning point. If your protagonist has been winning, give them a false high. If they\'ve been struggling, give them a false low. Raise the stakes, add a time clock, and shift the story\'s direction.',
    pages: '55',
    duration: '55 min'
  },
  {
    key: 'bad-guys-close-in',
    name: 'Bad Guys Close In',
    explanation: 'External and internal pressures mount. If the Midpoint was a false victory, things start to fall apart. If it was a false defeat, doubt and fear creep in. Enemies regroup, allies turn, and the protagonist\'s flaws cause problems.',
    guidance: 'Increase pressure from all sides. External enemies close in, internal doubts grow, relationships fracture, and the protagonist\'s flaws are exposed. Things get progressively worse, building toward the crisis.',
    pages: '55-75',
    duration: '55-75 min'
  },
  {
    key: 'all-is-lost',
    name: 'All Is Lost',
    explanation: 'The lowest point—the protagonist loses everything. The opposite of the Midpoint. Often includes a "whiff of death" (literal or metaphorical). Hope is gone, the goal seems impossible, and the protagonist is defeated.',
    guidance: 'Strip everything away from your protagonist. They lose what they thought they wanted, relationships crumble, and hope dies. Include a "whiff of death"—something or someone dies (literally or metaphorically).',
    pages: '75',
    duration: '75 min'
  },
  {
    key: 'dark-night',
    name: 'Dark Night of the Soul',
    explanation: 'The protagonist wallows in defeat, processes the loss, and faces their deepest fears and flaws. This is the moment of reflection before the breakthrough. The old self must die before the new self can emerge.',
    guidance: 'Let your protagonist sit in the darkness. Show them processing the loss, confronting their flaws, and hitting rock bottom emotionally. This is the quiet before the storm—the moment of truth before transformation.',
    pages: '75-85',
    duration: '75-85 min'
  },
  {
    key: 'break-into-three',
    name: 'Break into Three',
    explanation: 'The protagonist has an epiphany, often thanks to the B Story. They discover the solution by synthesizing the lessons of Act One and Act Two. They now know what they truly need (not just what they want) and are ready for the final battle.',
    guidance: 'Show the moment of clarity. Your protagonist realizes what they need to do, often with help from the B Story character. They synthesize everything they\'ve learned and formulate a new plan with newfound wisdom.',
    pages: '85',
    duration: '85 min'
  },
  {
    key: 'finale',
    name: 'Finale',
    explanation: 'The protagonist executes the new plan, applying everything they\'ve learned. They face the antagonist, overcome their flaw, and prove they\'ve changed. The A Story and B Story converge. The old world is destroyed, and a new world is created.',
    guidance: 'Execute the climax. Your protagonist faces the final challenge with their new understanding. They prove they\'ve changed by acting differently than they would have in Act One. Resolve both the external plot and internal arc.',
    pages: '85-110',
    duration: '85-110 min'
  },
  {
    key: 'final-image',
    name: 'Final Image',
    explanation: 'The opposite of the Opening Image. A visual snapshot showing how much the protagonist and their world have changed. This "after" picture proves the transformation and provides emotional closure.',
    guidance: 'Mirror your Opening Image but show the transformation. How has your protagonist\'s life changed? What\'s different? This should be a visual proof of growth and a satisfying emotional conclusion.',
    pages: '110',
    duration: '110 min'
  }
];

// Three Act Structure
export const threeActStructure: ActSection[] = [
  {
    name: 'Act I – Setup',
    pages: '1-25',
    duration: '1-25 min',
    beats: [
      {
        key: 'ordinary-world',
        name: 'Ordinary World',
        explanation: 'Establish the protagonist\'s normal life before the adventure begins. Show their world, relationships, routines, and what\'s missing or wrong. This is the baseline that will be disrupted and eventually transformed.',
        guidance: 'Introduce your protagonist in their everyday environment. What does their life look like? What are their relationships, habits, and problems? Establish the status quo that will be challenged.',
        pages: '1-10',
        duration: '1-10 min'
      },
      {
        key: 'inciting-incident',
        name: 'Inciting Incident',
        explanation: 'An event disrupts the ordinary world and presents the central dramatic question. This catalyst sets the story in motion and cannot be ignored. The protagonist\'s life will never be the same.',
        guidance: 'What event kicks off your story? This should be a clear, definable moment that disrupts the status quo and introduces the main conflict. Make it compelling and impossible to ignore.',
        pages: '10-12',
        duration: '10-12 min'
      },
      {
        key: 'first-plot-point',
        name: 'First Plot Point',
        explanation: 'The protagonist commits to the journey and crosses into Act Two. This is a point of no return—they leave the familiar world and enter the world of adventure. The story truly begins here.',
        guidance: 'Show your protagonist making a clear decision to pursue the goal. They cross a threshold and commit to the journey. This should be an active choice that propels them into the main conflict.',
        pages: '25',
        duration: '25 min'
      }
    ]
  },
  {
    name: 'Act II – Confrontation',
    pages: '25-85',
    duration: '25-85 min',
    beats: [
      {
        key: 'rising-conflict',
        name: 'Rising Conflict',
        explanation: 'The protagonist faces escalating obstacles and challenges. They learn the rules of the new world, make allies and enemies, and pursue their goal. Complications arise, and stakes increase with each obstacle.',
        guidance: 'Build a series of escalating challenges. Each obstacle should be harder than the last. Show your protagonist learning, adapting, and struggling. Introduce subplots and deepen relationships.',
        pages: '25-55',
        duration: '25-55 min'
      },
      {
        key: 'midpoint',
        name: 'Midpoint',
        explanation: 'A major reversal or revelation that changes everything. The protagonist either achieves a false victory or suffers a false defeat. Stakes are raised, time pressure increases, and the story shifts direction.',
        guidance: 'Create a major turning point at the story\'s center. Raise the stakes significantly. Add a ticking clock if you haven\'t already. Shift from reaction to action (or vice versa). Change the game.',
        pages: '55',
        duration: '55 min'
      },
      {
        key: 'escalation',
        name: 'Escalation',
        explanation: 'Pressure mounts from all directions. The protagonist faces their greatest challenges yet. Relationships are tested, flaws are exposed, and the antagonist gains the upper hand. Everything builds toward the crisis.',
        guidance: 'Increase tension and complications. Make things progressively worse for your protagonist. Test their relationships, expose their weaknesses, and push them toward their breaking point.',
        pages: '55-75',
        duration: '55-75 min'
      }
    ]
  },
  {
    name: 'Act III – Resolution',
    pages: '85-110',
    duration: '85-110 min',
    beats: [
      {
        key: 'climax',
        name: 'Climax',
        explanation: 'The final confrontation where the protagonist faces their greatest challenge. All plot threads converge. The protagonist must use everything they\'ve learned and prove they\'ve changed. The central dramatic question is answered.',
        guidance: 'Deliver the ultimate showdown. Your protagonist faces the antagonist or final obstacle with their new understanding and abilities. Make this the most intense, high-stakes moment of the story.',
        pages: '85-100',
        duration: '85-100 min'
      },
      {
        key: 'resolution',
        name: 'Resolution',
        explanation: 'The aftermath of the climax. Loose ends are tied up, the new status quo is established, and we see how the protagonist and their world have changed. Provide emotional closure and thematic satisfaction.',
        guidance: 'Show the consequences of the climax. How has the world changed? What has your protagonist learned? Resolve subplots, show character growth, and provide a satisfying emotional conclusion.',
        pages: '100-110',
        duration: '100-110 min'
      }
    ]
  }
];

// Fichtean Curve
export const fichteanCurveBeats: Beat[] = [
  {
    key: 'inciting-incident',
    name: 'Inciting Incident',
    explanation: 'The story begins with immediate conflict or tension. Unlike traditional structures, there\'s minimal setup—we jump straight into the action. The protagonist is thrust into a crisis that demands immediate attention.',
    guidance: 'Start with a bang. Drop your protagonist into conflict immediately. What crisis or challenge confronts them right from the start? Establish tension and stakes within the first few pages.',
    pages: '1-5',
    duration: '1-5 min'
  },
  {
    key: 'rising-action-1',
    name: 'Rising Action - First Crisis',
    explanation: 'The first major complication or obstacle. The protagonist attempts to deal with the initial conflict but faces a new challenge. Each crisis should be more intense than the last, creating a pattern of escalation.',
    guidance: 'Present the first major obstacle. How does your protagonist respond to the inciting incident? What new complication arises from their actions? Begin the pattern of escalating tension.',
    pages: '10-20',
    duration: '10-20 min'
  },
  {
    key: 'rising-action-2',
    name: 'Rising Action - Second Crisis',
    explanation: 'A more severe complication emerges. The protagonist\'s situation worsens, and the stakes increase. This crisis should be more challenging than the first, forcing the protagonist to dig deeper.',
    guidance: 'Escalate the conflict. What bigger problem emerges? How do the protagonist\'s earlier actions complicate matters? Make this crisis more intense and personal than the first.',
    pages: '30-45',
    duration: '30-45 min'
  },
  {
    key: 'rising-action-3',
    name: 'Rising Action - Third Crisis',
    explanation: 'The tension reaches a critical point. Multiple complications converge, and the protagonist faces their most difficult challenge yet. The situation seems increasingly hopeless, building toward the climax.',
    guidance: 'Pile on the pressure. Combine multiple complications. How do all the story threads converge to create maximum difficulty? Push your protagonist to their limit before the final confrontation.',
    pages: '55-70',
    duration: '55-70 min'
  },
  {
    key: 'climax',
    name: 'Climax',
    explanation: 'The highest point of tension and conflict. All the rising crises culminate in the ultimate confrontation. The protagonist must face the central conflict head-on with everything they\'ve learned and endured.',
    guidance: 'Deliver the ultimate crisis. This is the moment everything has been building toward. Your protagonist faces the biggest challenge with the highest stakes. Make it intense, decisive, and transformative.',
    pages: '75-90',
    duration: '75-90 min'
  },
  {
    key: 'falling-action',
    name: 'Falling Action',
    explanation: 'The immediate aftermath of the climax. Tension begins to release as the consequences of the climactic confrontation become clear. Loose ends start to tie up, though some uncertainty may remain.',
    guidance: 'Show the immediate consequences of the climax. How does the protagonist\'s world begin to settle? What are the direct results of their actions? Begin resolving complications.',
    pages: '90-100',
    duration: '90-100 min'
  },
  {
    key: 'resolution',
    name: 'Resolution',
    explanation: 'The story concludes with a new equilibrium. The protagonist\'s journey is complete, and we see how they and their world have changed. All major plot threads are resolved, providing closure.',
    guidance: 'Wrap up remaining threads. Show the new normal. How has your protagonist changed? What has been learned or gained? Provide emotional and narrative closure.',
    pages: '100-110',
    duration: '100-110 min'
  }
];

// Hero's Journey - 12 Steps
export const herosJourneyBeats: Beat[] = [
  {
    key: 'ordinary-world',
    name: 'Ordinary World',
    explanation: 'The hero\'s normal life before the adventure begins. We see their everyday existence, relationships, and the limitations of their current world. This establishes what they will leave behind and eventually return to, transformed.',
    guidance: 'Show your hero in their everyday life. What is their routine? What are their relationships and responsibilities? Establish the status quo and hint at what\'s missing or unfulfilled in their life.',
    pages: '1-10',
    duration: '1-10 min'
  },
  {
    key: 'call-to-adventure',
    name: 'Call to Adventure',
    explanation: 'The hero is presented with a challenge, problem, or adventure. This disrupts the ordinary world and offers the possibility of change. The call can come from external events or internal yearning.',
    guidance: 'What event or opportunity disrupts your hero\'s ordinary world? This should be a clear invitation or challenge that promises adventure, danger, or transformation. Make it compelling and significant.',
    pages: '10-12',
    duration: '10-12 min'
  },
  {
    key: 'refusal-of-call',
    name: 'Refusal of the Call',
    explanation: 'The hero hesitates or refuses the call due to fear, insecurity, or obligation. This makes them relatable and human. They express doubts about their ability to succeed or the wisdom of leaving their ordinary world.',
    guidance: 'Show your hero\'s reluctance. What fears or obligations hold them back? Why do they doubt themselves? This resistance makes their eventual acceptance more meaningful and their character more relatable.',
    pages: '12-18',
    duration: '12-18 min'
  },
  {
    key: 'meeting-mentor',
    name: 'Meeting the Mentor',
    explanation: 'The hero encounters a mentor figure who provides guidance, training, gifts, or confidence. The mentor helps the hero overcome their fears and prepares them for the journey ahead. This relationship is crucial for the hero\'s development.',
    guidance: 'Introduce a mentor figure who helps your hero prepare for the journey. What wisdom, training, or gifts do they provide? How do they help the hero overcome their initial reluctance and self-doubt?',
    pages: '18-22',
    duration: '18-22 min'
  },
  {
    key: 'crossing-threshold',
    name: 'Crossing the Threshold',
    explanation: 'The hero commits to the adventure and crosses into the special world. This is a point of no return—they leave the familiar behind and enter unknown territory. The journey truly begins here.',
    guidance: 'Show your hero making the decisive choice to begin the adventure. They cross from the ordinary world into the special world. This should be a clear, active moment of commitment and transformation.',
    pages: '25',
    duration: '25 min'
  },
  {
    key: 'tests-allies-enemies',
    name: 'Tests, Allies, and Enemies',
    explanation: 'The hero faces trials, makes friends, and identifies enemies in the special world. They learn the rules of this new world and begin to adapt. This phase builds the team and establishes the challenges ahead.',
    guidance: 'Put your hero through a series of tests in the new world. Who becomes their ally? Who opposes them? Show them learning, adapting, and forming the relationships that will be crucial later.',
    pages: '25-55',
    duration: '25-55 min'
  },
  {
    key: 'approach-inmost-cave',
    name: 'Approach to the Inmost Cave',
    explanation: 'The hero approaches the place of greatest danger or the source of their deepest fear. They prepare for the major challenge ahead, gathering resources and courage. Tension builds as the ordeal draws near.',
    guidance: 'Show your hero preparing for the biggest challenge. What is the "inmost cave"—the place or moment they most fear? Build tension and anticipation. Let them gather strength and make final preparations.',
    pages: '55-60',
    duration: '55-60 min'
  },
  {
    key: 'ordeal',
    name: 'Ordeal',
    explanation: 'The hero faces their greatest fear or most difficult challenge. This is a moment of death and rebirth—the hero must "die" (literally or metaphorically) to be reborn stronger. This is the crisis point of the journey.',
    guidance: 'Create the supreme ordeal. Your hero faces death, their greatest fear, or their most difficult challenge. They must risk everything. This should be the most intense, dangerous moment of the story.',
    pages: '60-75',
    duration: '60-75 min'
  },
  {
    key: 'reward',
    name: 'Reward (Seizing the Sword)',
    explanation: 'Having survived the ordeal, the hero claims their reward. This might be a physical object, knowledge, reconciliation, or inner growth. They have proven themselves and gained something valuable, but the journey isn\'t over.',
    guidance: 'Show your hero claiming their reward after surviving the ordeal. What have they won or learned? How have they changed? This is a moment of triumph, but hint that challenges remain.',
    pages: '75-80',
    duration: '75-80 min'
  },
  {
    key: 'road-back',
    name: 'The Road Back',
    explanation: 'The hero begins the journey back to the ordinary world, but they\'re not safe yet. New dangers emerge, or consequences of earlier actions catch up. The hero must choose to return and complete the journey.',
    guidance: 'Your hero decides to return home, but complications arise. What new dangers or consequences emerge? Show them committing to complete the journey and bring their reward back to the ordinary world.',
    pages: '80-90',
    duration: '80-90 min'
  },
  {
    key: 'resurrection',
    name: 'Resurrection',
    explanation: 'The hero faces a final test—a last dangerous encounter that requires them to use everything they\'ve learned. This is a second life-or-death moment that proves their transformation is complete. They emerge fully reborn.',
    guidance: 'Create a final climactic challenge. Your hero must use all they\'ve learned to survive one last ordeal. This proves their transformation is complete and they\'re truly ready to return home changed.',
    pages: '90-100',
    duration: '90-100 min'
  },
  {
    key: 'return-with-elixir',
    name: 'Return with the Elixir',
    explanation: 'The hero returns to the ordinary world transformed, bringing something of value (the "elixir") that benefits their community. They have grown, and their world is better for their journey. The circle is complete.',
    guidance: 'Show your hero returning home transformed. What "elixir" (wisdom, treasure, or power) do they bring back? How have they changed? How does their journey benefit others? Provide closure and show growth.',
    pages: '100-110',
    duration: '100-110 min'
  }
];

// Dan Harmon Story Circle - 8 Steps
export const danHarmonBeats: Beat[] = [
  {
    key: 'you',
    name: '1. You (A character is in a zone of comfort)',
    explanation: 'Establish the protagonist in their comfort zone—their ordinary world where they feel safe and in control. This is their status quo, but something is missing or unfulfilled. Show who they are before change.',
    guidance: 'Introduce your protagonist in their comfort zone. What is their normal life? What routines and relationships define them? Hint at what\'s missing or what internal need remains unfulfilled.',
    pages: '1-10',
    duration: '1-10 min'
  },
  {
    key: 'need',
    name: '2. Need (But they want something)',
    explanation: 'The protagonist desires something outside their comfort zone. This want drives them to action, though it may not be what they truly need. The desire creates motivation and sets the story in motion.',
    guidance: 'What does your protagonist want? What desire or goal pulls them out of their comfort zone? This want should be clear and compelling, even if it\'s not what they truly need for growth.',
    pages: '10-15',
    duration: '10-15 min'
  },
  {
    key: 'go',
    name: '3. Go (They enter an unfamiliar situation)',
    explanation: 'The protagonist leaves their comfort zone and enters an unfamiliar situation or world. They cross a threshold and commit to pursuing their want. This is the point of no return—the adventure begins.',
    guidance: 'Show your protagonist crossing into unfamiliar territory. They leave their comfort zone to pursue their want. What new world or situation do they enter? Make this transition clear and decisive.',
    pages: '20-25',
    duration: '20-25 min'
  },
  {
    key: 'search',
    name: '4. Search (They adapt to it)',
    explanation: 'The protagonist explores the unfamiliar situation, faces challenges, and adapts to the new world. They pursue their want, make allies and enemies, and learn new skills. This is the journey through the unknown.',
    guidance: 'Show your protagonist adapting to the unfamiliar situation. What challenges do they face? How do they learn and grow? Who helps or hinders them? Build the journey toward their goal.',
    pages: '25-55',
    duration: '25-55 min'
  },
  {
    key: 'find',
    name: '5. Find (They get what they wanted)',
    explanation: 'The protagonist achieves their goal or gets what they wanted. This is often a false victory—they have what they thought they wanted, but it doesn\'t bring the fulfillment they expected. The cost becomes clear.',
    guidance: 'Your protagonist achieves their goal. They get what they wanted. But show that it\'s not what they expected or that it comes at a cost. This moment should feel both triumphant and hollow.',
    pages: '55-65',
    duration: '55-65 min'
  },
  {
    key: 'take',
    name: '6. Take (They pay a heavy price for it)',
    explanation: 'The protagonist faces the consequences of getting what they wanted. The price is revealed—relationships damaged, values compromised, or unexpected costs. This is the crisis that forces true growth and realization.',
    guidance: 'Show the cost of achieving the goal. What has your protagonist lost or damaged? What consequences emerge? This should be a moment of crisis that forces them to confront what they truly need.',
    pages: '65-80',
    duration: '65-80 min'
  },
  {
    key: 'return',
    name: '7. Return (They return to their familiar situation)',
    explanation: 'The protagonist returns to their comfort zone, but they can\'t go back to who they were. They bring their experience and lessons with them. The return is often difficult, requiring a final challenge or sacrifice.',
    guidance: 'Your protagonist returns to their familiar world, but they\'re changed. What final challenge must they face? How do they apply what they\'ve learned? Show the difficulty of returning transformed.',
    pages: '80-100',
    duration: '80-100 min'
  },
  {
    key: 'change',
    name: '8. Change (Having changed)',
    explanation: 'The protagonist has transformed through their journey. They\'ve learned what they truly needed (not just what they wanted). Their internal change is complete, and they\'re now capable of living differently in their world.',
    guidance: 'Show how your protagonist has changed internally. What have they learned about themselves? How is their perspective different? Demonstrate that they now have what they truly needed all along.',
    pages: '100-110',
    duration: '100-110 min'
  }
];
