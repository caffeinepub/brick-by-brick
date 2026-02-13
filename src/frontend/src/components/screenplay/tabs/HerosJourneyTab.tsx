import { useState, useEffect } from 'react';
import { getProjectData, saveBeatContent } from '../../../lib/storage';
import { herosJourneyBeats } from '../../../lib/beatDefinitions';
import BeatCard from '../BeatCard';

interface HerosJourneyTabProps {
  projectId: string;
}

export default function HerosJourneyTab({ projectId }: HerosJourneyTabProps) {
  const [beatContents, setBeatContents] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getProjectData(projectId);
    setBeatContents(data.screenplay.herosJourney);
  }, [projectId]);

  const handleBeatChange = (beatKey: string, content: string) => {
    setBeatContents(prev => ({ ...prev, [beatKey]: content }));
    saveBeatContent(projectId, 'herosJourney', beatKey, content);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Hero's Journey</h2>
        <p className="text-white/70">Joseph Campbell's monomyth: the universal pattern of adventure and transformation.</p>
      </div>
      
      {herosJourneyBeats.map((beat) => (
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
