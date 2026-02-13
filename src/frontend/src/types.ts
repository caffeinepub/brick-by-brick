export interface Project {
  id: string;
  name: string;
  coverImage?: string;
  createdAt: number;
}

export interface Profile {
  name: string;
  profession: string;
  bio: string;
  image?: string;
}

export interface BeatContent {
  [beatKey: string]: string;
}

export interface ScreenplayContent {
  saveTheCat: BeatContent;
  threeAct: BeatContent;
  fichteanCurve: BeatContent;
  herosJourney: BeatContent;
  danHarmon: BeatContent;
}

export interface Character {
  id: string;
  name: string;
  arc: string;
  notes: string;
  additionalDocs: string;
}

export interface ProjectData {
  screenplay: ScreenplayContent;
  references: string;
  characters: Character[];
}
