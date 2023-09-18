import React from 'react';
import { Container, Typography, Card, CardBody, Button } from '@material-tailwind/react';



const GettingStarted = () => {
    return (
        <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Getting Started with PlanPiker
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Welcome to PlanPiker, your all-in-one scheduling solution. This guide will help you get started with creating and managing schedules effortlessly.
            </p>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 1: Sign Up or Log In</h3>
              <p className="text-lg text-gray-600">
                If you're new to PlanPiker, sign up for an account. If you're an existing user, simply log in to your account.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 2: Dashboard Overview</h3>
              <p className="text-lg text-gray-600">
                Once logged in, you'll be greeted by your dashboard. This is your command center for creating and managing schedules.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 3: Create a New Schedule</h3>
              <p className="text-lg text-gray-600">
                To create a new schedule, click the "Create Schedule" button. Give your schedule a title, description, and set your preferences.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 4: Add Events</h3>
              <p className="text-lg text-gray-600">
                Add events to your schedule by clicking the "Add Event" button. Specify event details, date, time, and location.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 5: Share Your Schedule</h3>
              <p className="text-lg text-gray-600">
                Share your schedule with others by generating a unique link or inviting participants via email. You can control who can view or edit the schedule.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 6: Manage and Update</h3>
              <p className="text-lg text-gray-600">
                Use your dashboard to manage and update your schedules as needed. You can make changes, view responses, and send reminders.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Step 7: Explore Advanced Features</h3>
              <p className="text-lg text-gray-600">
                PlanPiker offers advanced features such as analytics, integrations, and reporting. Explore these options to enhance your scheduling experience.
              </p>
            </div>
  
            <div>
              <p className="text-lg text-gray-600">
                That's it! You're ready to start creating and managing schedules with ease. If you have any questions or need assistance, our support team is here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GettingStarted;