import { useState, useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getProfile, saveProfile, fileToDataUrl } from '../lib/storage';
import { Profile } from '../types';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppHeader from '../components/layout/AppHeader';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile>({
    name: '',
    profession: '',
    bio: '',
    image: undefined
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedProfile = getProfile();
    if (savedProfile) {
      setProfile(savedProfile);
      if (savedProfile.image) {
        setPreviewImage(savedProfile.image);
      }
    }
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await fileToDataUrl(file);
      setProfile({ ...profile, image: dataUrl });
      setPreviewImage(dataUrl);
    }
  };

  const handleSave = () => {
    saveProfile(profile);
    navigate({ to: '/' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200">
      <AppHeader />
      
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate({ to: '/' })}
          className="mb-8 flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>

        {/* Profile Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-neutral-200">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-neutral-900">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-neutral-200 shadow-xl ring-4 ring-white">
                    <img
                      src={previewImage || '/assets/generated/default-profile-icon.dim_256x256.png'}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => imageInputRef.current?.click()}
                    className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:bg-neutral-700 transition-colors ring-4 ring-white"
                  >
                    ✎
                  </button>
                </div>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-neutral-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="h-12 border-neutral-300 focus:border-neutral-900"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession" className="text-sm font-semibold text-neutral-700">
                    Profession
                  </Label>
                  <Input
                    id="profession"
                    type="text"
                    value={profile.profession}
                    onChange={(e) => setProfile({ ...profile, profession: e.target.value })}
                    className="h-12 border-neutral-300 focus:border-neutral-900"
                    placeholder="Screenwriter, Director, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm font-semibold text-neutral-700">
                    Bio / Description
                  </Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={6}
                    className="resize-none border-neutral-300 focus:border-neutral-900"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSave}
                className="w-full h-12 text-lg font-semibold shadow-lg"
                size="lg"
              >
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
