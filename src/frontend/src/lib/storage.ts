import { Project, Profile, ProjectData, ScreenplayContent, Character } from '../types';

let currentNamespace: string | null = null;

export function setStorageNamespace(principal: string | null): void {
  currentNamespace = principal;
}

function getNamespacedKey(key: string): string {
  if (!currentNamespace) {
    return key;
  }
  return `${key}:${currentNamespace}`;
}

const STORAGE_KEYS = {
  PROJECTS: 'brick-by-brick-projects',
  PROFILE: 'brick-by-brick-profile',
  INDEX_THEME: 'brick-by-brick-index-theme',
  PROJECT_DATA: (projectId: string) => `brick-by-brick-project-${projectId}`
};

// Projects
export function getProjects(): Project[] {
  if (!currentNamespace) {
    return [];
  }
  try {
    const data = localStorage.getItem(getNamespacedKey(STORAGE_KEYS.PROJECTS));
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveProjects(projects: Project[]): void {
  if (!currentNamespace) {
    return;
  }
  localStorage.setItem(getNamespacedKey(STORAGE_KEYS.PROJECTS), JSON.stringify(projects));
}

export function addProject(name: string): Project {
  const projects = getProjects();
  const newProject: Project = {
    id: Date.now().toString(),
    name,
    createdAt: Date.now()
  };
  projects.push(newProject);
  saveProjects(projects);
  
  // Initialize empty project data
  const emptyData: ProjectData = {
    screenplay: {
      saveTheCat: {},
      threeAct: {},
      fichteanCurve: {},
      herosJourney: {},
      danHarmon: {}
    },
    references: '',
    characters: []
  };
  saveProjectData(newProject.id, emptyData);
  
  return newProject;
}

export function updateProjectCover(projectId: string, coverImage: string): void {
  const projects = getProjects();
  const project = projects.find(p => p.id === projectId);
  if (project) {
    project.coverImage = coverImage;
    saveProjects(projects);
  }
}

export function getProject(projectId: string): Project | undefined {
  return getProjects().find(p => p.id === projectId);
}

// Profile
export function getProfile(): Profile | null {
  if (!currentNamespace) {
    return null;
  }
  try {
    const data = localStorage.getItem(getNamespacedKey(STORAGE_KEYS.PROFILE));
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: Profile): void {
  if (!currentNamespace) {
    return;
  }
  localStorage.setItem(getNamespacedKey(STORAGE_KEYS.PROFILE), JSON.stringify(profile));
}

// Index Theme
export function getIndexTheme(): string | null {
  if (!currentNamespace) {
    return null;
  }
  return localStorage.getItem(getNamespacedKey(STORAGE_KEYS.INDEX_THEME));
}

export function saveIndexTheme(imageDataUrl: string): void {
  if (!currentNamespace) {
    return;
  }
  localStorage.setItem(getNamespacedKey(STORAGE_KEYS.INDEX_THEME), imageDataUrl);
}

// Project Data
export function getProjectData(projectId: string): ProjectData {
  if (!currentNamespace) {
    return {
      screenplay: {
        saveTheCat: {},
        threeAct: {},
        fichteanCurve: {},
        herosJourney: {},
        danHarmon: {}
      },
      references: '',
      characters: []
    };
  }
  
  try {
    const data = localStorage.getItem(getNamespacedKey(STORAGE_KEYS.PROJECT_DATA(projectId)));
    if (data) {
      return JSON.parse(data);
    }
  } catch {
    // Fall through to default
  }
  
  return {
    screenplay: {
      saveTheCat: {},
      threeAct: {},
      fichteanCurve: {},
      herosJourney: {},
      danHarmon: {}
    },
    references: '',
    characters: []
  };
}

export function saveProjectData(projectId: string, data: ProjectData): void {
  if (!currentNamespace) {
    return;
  }
  localStorage.setItem(getNamespacedKey(STORAGE_KEYS.PROJECT_DATA(projectId)), JSON.stringify(data));
}

export function saveBeatContent(projectId: string, tab: keyof ScreenplayContent, beatKey: string, content: string): void {
  const data = getProjectData(projectId);
  data.screenplay[tab][beatKey] = content;
  saveProjectData(projectId, data);
}

export function saveReferences(projectId: string, content: string): void {
  const data = getProjectData(projectId);
  data.references = content;
  saveProjectData(projectId, data);
}

export function saveCharacters(projectId: string, characters: Character[]): void {
  const data = getProjectData(projectId);
  data.characters = characters;
  saveProjectData(projectId, data);
}

// Helper to convert file to data URL
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
