import { useState, useEffect } from 'react';
import { getProjectData, saveCharacters } from '../../../lib/storage';
import { Character } from '../../../types';
import { Plus, Trash2 } from 'lucide-react';

interface CharactersTabProps {
  projectId: string;
}

export default function CharactersTab({ projectId }: CharactersTabProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [newCharacterName, setNewCharacterName] = useState('');

  useEffect(() => {
    const data = getProjectData(projectId);
    setCharacters(data.characters);
    if (data.characters.length > 0 && !selectedCharacterId) {
      setSelectedCharacterId(data.characters[0].id);
    }
  }, [projectId]);

  const handleAddCharacter = () => {
    if (newCharacterName.trim()) {
      const newCharacter: Character = {
        id: Date.now().toString(),
        name: newCharacterName.trim(),
        arc: '',
        notes: '',
        additionalDocs: ''
      };
      const updated = [...characters, newCharacter];
      setCharacters(updated);
      saveCharacters(projectId, updated);
      setSelectedCharacterId(newCharacter.id);
      setNewCharacterName('');
    }
  };

  const handleDeleteCharacter = (id: string) => {
    const updated = characters.filter(c => c.id !== id);
    setCharacters(updated);
    saveCharacters(projectId, updated);
    if (selectedCharacterId === id) {
      setSelectedCharacterId(updated.length > 0 ? updated[0].id : null);
    }
  };

  const handleUpdateCharacter = (id: string, field: keyof Character, value: string) => {
    const updated = characters.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    );
    setCharacters(updated);
    saveCharacters(projectId, updated);
  };

  const selectedCharacter = characters.find(c => c.id === selectedCharacterId);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Characters</h2>
        <p className="text-white/70">Develop your characters with arcs, notes, and documentation.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Character List Sidebar */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCharacterName}
                  onChange={(e) => setNewCharacterName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCharacter()}
                  placeholder="Character name"
                  className="flex-1 px-3 py-2 bg-white/10 text-white placeholder-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  onClick={handleAddCharacter}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  title="Add character"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedCharacterId === character.id
                      ? 'bg-white/20'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCharacterId(character.id)}
                >
                  <span className="text-white font-medium truncate">{character.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCharacter(character.id);
                    }}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Delete character"
                  >
                    <Trash2 className="w-4 h-4 text-white/60" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Character Details */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {selectedCharacter ? (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{selectedCharacter.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 font-semibold mb-2">Character Arc</label>
                    <textarea
                      value={selectedCharacter.arc}
                      onChange={(e) => handleUpdateCharacter(selectedCharacter.id, 'arc', e.target.value)}
                      placeholder="Describe the character's journey and transformation..."
                      className="w-full h-32 px-4 py-3 bg-white/10 text-white placeholder-white/40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-semibold mb-2">Notes & Points</label>
                    <textarea
                      value={selectedCharacter.notes}
                      onChange={(e) => handleUpdateCharacter(selectedCharacter.id, 'notes', e.target.value)}
                      placeholder="Key traits, motivations, relationships, backstory..."
                      className="w-full h-48 px-4 py-3 bg-white/10 text-white placeholder-white/40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-semibold mb-2">Additional Documentation</label>
                    <textarea
                      value={selectedCharacter.additionalDocs}
                      onChange={(e) => handleUpdateCharacter(selectedCharacter.id, 'additionalDocs', e.target.value)}
                      placeholder="Research, references, visual inspiration, dialogue samples..."
                      className="w-full h-64 px-4 py-3 bg-white/10 text-white placeholder-white/40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ fontFamily: 'monospace', fontSize: '14px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10 text-center">
              <p className="text-white/60 text-lg">
                {characters.length === 0
                  ? 'Create your first character to get started'
                  : 'Select a character to view and edit details'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
