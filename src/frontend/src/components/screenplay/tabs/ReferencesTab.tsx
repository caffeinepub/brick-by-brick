import { useState, useEffect } from 'react';
import { getProjectData, saveReferences } from '../../../lib/storage';

interface ReferencesTabProps {
  projectId: string;
}

export default function ReferencesTab({ projectId }: ReferencesTabProps) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const data = getProjectData(projectId);
    setContent(data.references);
  }, [projectId]);

  const handleChange = (newContent: string) => {
    setContent(newContent);
    saveReferences(projectId, newContent);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">References</h2>
        <p className="text-white/70">Store research, inspiration, and reference materials for your screenplay.</p>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <textarea
          value={content}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Add your references, research notes, inspiration, links, or any other materials here..."
          className="w-full h-[600px] bg-transparent text-white placeholder-white/40 resize-none focus:outline-none"
          style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6' }}
        />
      </div>
    </div>
  );
}
