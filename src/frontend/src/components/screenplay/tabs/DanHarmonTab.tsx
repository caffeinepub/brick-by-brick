import { useState, useEffect } from 'react';
import { getProjectData, saveBeatContent } from '../../../lib/storage';
import { danHarmonBeats } from '../../../lib/beatDefinitions';
import BeatCard from '../BeatCard';

interface DanHarmonTabProps {
  projectId: string;
}

export default function DanHarmonTab({ projectId }: DanHarmonTabProps) {
  const [beatContents, setBeatContents] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getProjectData(projectId);
    setBeatContents(data.screenplay.danHarmon);
  }, [projectId]);

  const handleBeatChange = (beatKey: string, content: string) => {
    setBeatContents(prev => ({ ...prev, [beatKey]: content }));
    saveBeatContent(projectId, 'danHarmon', beatKey, content);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Dan Harmon Story Circle</h2>
        <p className="text-white/70">An 8-step structure focused on character transformation and internal change.</p>
      </div>
      
      {danHarmonBeats.map((beat) => (
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
