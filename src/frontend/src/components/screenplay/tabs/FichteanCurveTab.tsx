import { useState, useEffect } from 'react';
import { getProjectData, saveBeatContent } from '../../../lib/storage';
import { fichteanCurveBeats } from '../../../lib/beatDefinitions';
import BeatCard from '../BeatCard';

interface FichteanCurveTabProps {
  projectId: string;
}

export default function FichteanCurveTab({ projectId }: FichteanCurveTabProps) {
  const [beatContents, setBeatContents] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getProjectData(projectId);
    setBeatContents(data.screenplay.fichteanCurve);
  }, [projectId]);

  const handleBeatChange = (beatKey: string, content: string) => {
    setBeatContents(prev => ({ ...prev, [beatKey]: content }));
    saveBeatContent(projectId, 'fichteanCurve', beatKey, content);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Fichtean Curve</h2>
        <p className="text-white/70">A structure built on escalating crises that drive the narrative forward.</p>
      </div>
      
      {fichteanCurveBeats.map((beat) => (
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
