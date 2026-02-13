import { useState, useEffect } from 'react';
import { getProjectData, saveBeatContent } from '../../../lib/storage';
import { threeActStructure } from '../../../lib/beatDefinitions';
import BeatCard from '../BeatCard';

interface ThreeActTabProps {
  projectId: string;
}

export default function ThreeActTab({ projectId }: ThreeActTabProps) {
  const [beatContents, setBeatContents] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getProjectData(projectId);
    setBeatContents(data.screenplay.threeAct);
  }, [projectId]);

  const handleBeatChange = (beatKey: string, content: string) => {
    setBeatContents(prev => ({ ...prev, [beatKey]: content }));
    saveBeatContent(projectId, 'threeAct', beatKey, content);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Three Act Structure</h2>
        <p className="text-white/70">The classic dramatic structure: Setup, Confrontation, and Resolution.</p>
      </div>
      
      {threeActStructure.map((act) => (
        <div key={act.name} className="space-y-6">
          <div className="border-l-4 border-white/30 pl-6 py-2">
            <h3 className="text-2xl font-bold text-white">{act.name}</h3>
            <p className="text-white/60 text-sm mt-1">
              Pages {act.pages} • Duration {act.duration}
            </p>
          </div>
          
          {act.beats.map((beat) => (
            <BeatCard
              key={beat.key}
              beat={beat}
              content={beatContents[beat.key] || ''}
              onChange={(content) => handleBeatChange(beat.key, content)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
