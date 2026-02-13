import { useState, useEffect } from 'react';
import { getProjectData, saveBeatContent } from '../../../lib/storage';
import { saveTheCatBeats } from '../../../lib/beatDefinitions';
import BeatCard from '../BeatCard';

interface SaveTheCatTabProps {
  projectId: string;
}

export default function SaveTheCatTab({ projectId }: SaveTheCatTabProps) {
  const [beatContents, setBeatContents] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getProjectData(projectId);
    setBeatContents(data.screenplay.saveTheCat);
  }, [projectId]);

  const handleBeatChange = (beatKey: string, content: string) => {
    setBeatContents(prev => ({ ...prev, [beatKey]: content }));
    saveBeatContent(projectId, 'saveTheCat', beatKey, content);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Save the Cat</h2>
        <p className="text-white/70">Blake Snyder's 15-beat structure for crafting compelling screenplays.</p>
      </div>
      
      {saveTheCatBeats.map((beat) => (
        <BeatCard
          key={beat.key}
          beat={beat}
          content={beatContents[beat.key] || ''}
          onChange={(content) => handleBeatChange(beat.key, content)}
        />
      ))}
    </div>
  );
}
