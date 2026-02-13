import { useState, useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { getProject, getProjectData } from '../lib/storage';
import { Project, ProjectData } from '../types';
import { ArrowLeft, Download } from 'lucide-react';
import ScreenplayTabs from '../components/screenplay/ScreenplayTabs';
import { exportProjectToPDF } from '../lib/pdfExport';
import { Button } from '@/components/ui/button';
import AppHeader from '../components/layout/AppHeader';

export default function ScreenplayPage() {
  const { projectId } = useParams({ strict: false });
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (projectId) {
      const proj = getProject(projectId);
      if (proj) {
        setProject(proj);
        setProjectData(getProjectData(projectId));
      } else {
        navigate({ to: '/' });
      }
    }
  }, [projectId, navigate]);

  const handleExport = () => {
    if (project && projectData) {
      exportProjectToPDF(project.name, projectData);
    }
  };

  if (!project || !projectData) {
    return null;
  }

  const backgroundImage = project.coverImage || '/assets/generated/default-project-cover.dim_1600x900.png';

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/70" />

      {/* Logout Button */}
      <div className="relative z-20">
        <AppHeader />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => navigate({ to: '/' })}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <h1 className="text-2xl font-bold">{project.name}</h1>
              </div>
              <Button
                onClick={handleExport}
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Export to PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <ScreenplayTabs projectId={projectId!} projectData={projectData} />
      </div>
    </div>
  );
}
