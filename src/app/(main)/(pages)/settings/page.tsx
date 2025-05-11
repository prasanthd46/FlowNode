'use client'; // Ensure it's a client-side component

import ProfileForm from '@/components/forms/ProfileForm';
import ProfilePicture from '@/components/profile-picture';
import { useUser } from '@clerk/nextjs';

import { removeProfileImage, uploadProfileImage } from '@/components/serveractions/serveractions';
import React, { useEffect, useState } from 'react';

const Settings = () => {
  const { user, isLoaded, isSignedIn } = useUser(); // Get user data from Clerk
  const [userProfileImage, setUserProfileImage] = useState<string | null>(''); // Track profile image locally

 
  if (!isLoaded) {
    return <div>Loading...</div>; // Handle loading state
  }

  const handleRemoveProfileImage = async () => {
    if (user?.id) {
      const response = await fetch('/api/clerk-webhook/profile-image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      });

      if (response.ok) {
        setUserProfileImage(''); // Update local state
      }
    }
  };
  const updateUserInfo = async (name:string) => {
    if (user?.id) {
      const response = await fetch('/api/clerk-webhook/profile-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            userId: user.id, 
            name,
            image:userProfileImage || ''
        }),
      });

      if (response.ok) {
        setUserProfileImage(''); // Update local state
      }
    }
  };

  const handleUploadProfileImage = async (image: string) => {
    if (user?.id) {
      const response = await fetch('/api/clerk-webhook/profile-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id, image }),
      });

      if (response.ok) {
        setUserProfileImage(image); // Update local state
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="flex flex-col gap-10 p-6">
            <p className="text-base text-white/50">Add or Update your information</p>
          </h2>
        </div>
        <ProfilePicture
          onDelete={handleRemoveProfileImage}
          userImage={userProfileImage || ''}
          onUpload={handleUploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo}/>
      </div>
    </div>
  );
};

export default Settings;
