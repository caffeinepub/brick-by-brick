import { useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Project } from '../../types';
import { updateProjectCover, fileToDataUrl } from '../../lib/storage';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
  onUpdate: () => void;
}

export default function ProjectCard({ project, onUpdate }: ProjectCardProps) {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await fileToDataUrl(file);
      updateProjectCover(project.id, dataUrl);
      onUpdate();
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCardClick = () => {
    navigate({ to: '/screenplay/$projectId', params: { projectId: project.id } });
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const coverImage = project.coverImage || '/assets/generated/default-project-cover.dim_1600x900.png';

  return (
    <Card
      onClick={handleCardClick}
      className="group relative overflow-hidden cursor-pointer transition-all hover:shadow-2xl border-neutral-200"
    >
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={coverImage}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Edit Button */}
        <button
          onClick={handleEditClick}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90 shadow-lg"
          title="Change cover image"
        >
          ✎
        </button>
      </div>

      {/* Project Name */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-neutral-900 truncate">
          {project.name}
        </h3>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleCoverUpload}
        className="hidden"
      />
    </Card>
  );
}
