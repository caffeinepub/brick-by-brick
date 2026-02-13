import { ProjectData, Character } from '../types';
import { 
  saveTheCatBeats, 
  threeActStructure, 
  fichteanCurveBeats, 
  herosJourneyBeats, 
  danHarmonBeats 
} from './beatDefinitions';

export async function exportProjectToPDF(projectName: string, projectData: ProjectData): Promise<void> {
  // Create a simple text-based PDF content
  let content = `BRICK BY BRICK - SCREENPLAY WORKSPACE\n\n`;
  content += `PROJECT: ${projectName}\n`;
  content += `Generated: ${new Date().toLocaleDateString()}\n\n`;
  content += `${'='.repeat(80)}\n\n`;

  // Save the Cat
  content += `SAVE THE CAT STRUCTURE\n\n`;
  saveTheCatBeats.forEach(beat => {
    const userContent = projectData.screenplay.saveTheCat[beat.key] || '';
    if (userContent) {
      content += `${beat.name}\n`;
      content += `${'-'.repeat(beat.name.length)}\n`;
      content += `${userContent}\n\n`;
    }
  });

  // Three Act Structure
  content += `\n${'='.repeat(80)}\n\n`;
  content += `THREE ACT STRUCTURE\n\n`;
  threeActStructure.forEach(act => {
    content += `${act.name} (${act.pages}, ${act.duration})\n\n`;
    act.beats.forEach(beat => {
      const userContent = projectData.screenplay.threeAct[beat.key] || '';
      if (userContent) {
        content += `${beat.name}\n`;
        content += `${'-'.repeat(beat.name.length)}\n`;
        content += `${userContent}\n\n`;
      }
    });
  });

  // Fichtean Curve
  content += `\n${'='.repeat(80)}\n\n`;
  content += `FICHTEAN CURVE\n\n`;
  fichteanCurveBeats.forEach(beat => {
    const userContent = projectData.screenplay.fichteanCurve[beat.key] || '';
    if (userContent) {
      content += `${beat.name}\n`;
      content += `${'-'.repeat(beat.name.length)}\n`;
      content += `${userContent}\n\n`;
    }
  });

  // Hero's Journey
  content += `\n${'='.repeat(80)}\n\n`;
  content += `HERO'S JOURNEY\n\n`;
  herosJourneyBeats.forEach(beat => {
    const userContent = projectData.screenplay.herosJourney[beat.key] || '';
    if (userContent) {
      content += `${beat.name}\n`;
      content += `${'-'.repeat(beat.name.length)}\n`;
      content += `${userContent}\n\n`;
    }
  });

  // Dan Harmon Story Circle
  content += `\n${'='.repeat(80)}\n\n`;
  content += `DAN HARMON STORY CIRCLE\n\n`;
  danHarmonBeats.forEach(beat => {
    const userContent = projectData.screenplay.danHarmon[beat.key] || '';
    if (userContent) {
      content += `${beat.name}\n`;
      content += `${'-'.repeat(beat.name.length)}\n`;
      content += `${userContent}\n\n`;
    }
  });

  // References
  if (projectData.references) {
    content += `\n${'='.repeat(80)}\n\n`;
    content += `REFERENCES\n\n`;
    content += `${projectData.references}\n\n`;
  }

  // Characters
  if (projectData.characters.length > 0) {
    content += `\n${'='.repeat(80)}\n\n`;
    content += `CHARACTERS\n\n`;
    projectData.characters.forEach(char => {
      content += `${char.name}\n`;
      content += `${'-'.repeat(char.name.length)}\n`;
      if (char.arc) {
        content += `Arc: ${char.arc}\n\n`;
      }
      if (char.notes) {
        content += `Notes: ${char.notes}\n\n`;
      }
      if (char.additionalDocs) {
        content += `Additional Documentation:\n${char.additionalDocs}\n\n`;
      }
      content += `\n`;
    });
  }

  // Create a blob and download
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${projectName.replace(/[^a-z0-9]/gi, '_')}_screenplay.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
