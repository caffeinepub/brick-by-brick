import { useState, useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getProjects, addProject, getProfile, getIndexTheme, saveIndexTheme, fileToDataUrl } from '../lib/storage';
import { Project } from '../types';
import ProjectCard from '../components/projects/ProjectCard';
import AppHeader from '../components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function IndexPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectName, setProjectName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const themeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProjects(getProjects());
    setBackgroundImage(getIndexTheme());
    const profile = getProfile();
    if (profile?.image) {
      setProfileImage(profile.image);
    }
  }, []);

  const handleAddProject = () => {
    if (projectName.trim()) {
      const newProject = addProject(projectName.trim());
      setProjects(getProjects());
      setProjectName('');
    }
  };

  const handleThemeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await fileToDataUrl(file);
      saveIndexTheme(dataUrl);
      setBackgroundImage(dataUrl);
    }
    // Reset input so same file can be selected again
    if (themeInputRef.current) {
      themeInputRef.current.value = '';
    }
  };

  const handleProjectUpdate = () => {
    setProjects(getProjects());
  };

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: 'white' };

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      {/* Logout Button */}
      <AppHeader />

      {/* Top Controls */}
      <div className="fixed top-6 left-6 z-10 flex gap-4 items-start">
        {/* Theme Icon - Top Left */}
        <button
          onClick={() => themeInputRef.current?.click()}
          className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center justify-center border border-neutral-200"
          title="Change background theme"
        >
          <img src="/assets/generated/theme-palette-icon.dim_64x64.png" alt="Theme" className="w-8 h-8" />
        </button>
        <input
          ref={themeInputRef}
          type="file"
          accept="image/*"
          onChange={handleThemeUpload}
          className="hidden"
        />

        {/* Profile Icon */}
        <button
          onClick={() => navigate({ to: '/profile' })}
          className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all overflow-hidden border-2 border-white"
          title="Profile"
        >
          <img
            src={profileImage || '/assets/generated/default-profile-icon.dim_256x256.png'}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Logo/Title */}
        <div className="text-center mb-16 pt-12">
          <h1 className="text-7xl font-bold tracking-tight mb-4" style={{ color: 'oklch(0.2 0 0)' }}>
            BRICK BY BRICK
          </h1>
          <p className="text-xl" style={{ color: 'oklch(0.4 0 0)' }}>
            Screenplay Workspace
          </p>
        </div>

        {/* New Project Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="backdrop-blur-md shadow-2xl p-8 bg-white/90 border-neutral-200">
            <div className="flex gap-4">
              <Input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddProject()}
                placeholder="Project name"
                className="flex-1 h-12 text-lg border-neutral-300 focus:border-neutral-900 bg-white"
              />
              <Button
                onClick={handleAddProject}
                disabled={!projectName.trim()}
                className="h-12 px-8 text-lg font-semibold shadow-lg hover:shadow-xl"
                size="lg"
              >
                Add
              </Button>
            </div>
          </Card>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onUpdate={handleProjectUpdate}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-20 pb-8">
          <p className="text-sm" style={{ color: 'oklch(0.5 0 0)' }}>
            © {new Date().getFullYear()} Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
