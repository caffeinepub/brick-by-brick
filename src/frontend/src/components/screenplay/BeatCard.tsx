import { Beat } from '../../lib/beatDefinitions';

interface BeatCardProps {
  beat: Beat;
  content: string;
  onChange: (content: string) => void;
}

export default function BeatCard({ beat, content, onChange }: BeatCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{beat.name}</h3>
          {(beat.pages || beat.duration) && (
            <div className="text-sm text-white/60">
              {beat.pages && <span>p. {beat.pages}</span>}
              {beat.pages && beat.duration && <span className="mx-2">•</span>}
              {beat.duration && <span>{beat.duration}</span>}
            </div>
          )}
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed mb-3">
          {beat.explanation}
        </p>
        
        <div className="bg-white/5 rounded-lg p-3 mb-4">
          <p className="text-white/70 text-sm italic">
            <span className="font-semibold text-white/90">What to write: </span>
            {beat.guidance}
          </p>
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start writing your beat here..."
        className="w-full h-48 px-4 py-3 bg-white/10 text-white placeholder-white/40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
        style={{ fontFamily: 'inherit', fontSize: '15px', lineHeight: '1.6' }}
      />
    </div>
  );
}
