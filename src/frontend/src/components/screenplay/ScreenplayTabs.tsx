import { useState } from 'react';
import { ProjectData } from '../../types';
import SaveTheCatTab from './tabs/SaveTheCatTab';
import ThreeActTab from './tabs/ThreeActTab';
import FichteanCurveTab from './tabs/FichteanCurveTab';
import HerosJourneyTab from './tabs/HerosJourneyTab';
import DanHarmonTab from './tabs/DanHarmonTab';
import ReferencesTab from './tabs/ReferencesTab';
import CharactersTab from './tabs/CharactersTab';

interface ScreenplayTabsProps {
  projectId: string;
  projectData: ProjectData;
}

type TabKey = 'saveTheCat' | 'threeAct' | 'fichtean' | 'heros' | 'danHarmon' | 'references' | 'characters';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'saveTheCat', label: 'Save the Cat' },
  { key: 'threeAct', label: 'Three Act Structure' },
  { key: 'fichtean', label: 'Fichtean Curve' },
  { key: 'heros', label: "Hero's Journey" },
  { key: 'danHarmon', label: 'Dan Harmon Story Circle' },
  { key: 'references', label: 'References' },
  { key: 'characters', label: 'Characters' }
];

export default function ScreenplayTabs({ projectId, projectData }: ScreenplayTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('saveTheCat');

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          {activeTab === 'saveTheCat' && <SaveTheCatTab projectId={projectId} />}
          {activeTab === 'threeAct' && <ThreeActTab projectId={projectId} />}
          {activeTab === 'fichtean' && <FichteanCurveTab projectId={projectId} />}
          {activeTab === 'heros' && <HerosJourneyTab projectId={projectId} />}
          {activeTab === 'danHarmon' && <DanHarmonTab projectId={projectId} />}
          {activeTab === 'references' && <ReferencesTab projectId={projectId} />}
          {activeTab === 'characters' && <CharactersTab projectId={projectId} />}
        </div>
      </div>
    </div>
  );
}
