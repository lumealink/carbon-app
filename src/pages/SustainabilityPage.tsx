import React from 'react';
import { Leaf, Target, TrendingUp, Award } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Sustainability Goals</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Targets Section */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Emission Reduction Targets</h2>
            </div>
            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      2025 Goal
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      45%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div className="w-[45%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Progress Tracking</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Current Reduction</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Projected 2024</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">35%</span>
              </div>
            </div>
          </div>

          {/* Initiatives Section */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Sustainability Initiatives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Renewable Energy Transition',
                'Waste Reduction Program',
                'Sustainable Supply Chain',
                'Carbon Offset Projects',
                'Employee Engagement',
                'Green Building Certification'
              ].map((initiative) => (
                <div key={initiative} className="border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{initiative}</h3>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Certifications & Awards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'ISO 14001:2015',
                'GHG Protocol Certified',
                'CDP Leadership Level',
                'Science Based Targets',
                'RE100 Member',
                'ESG Excellence Award'
              ].map((cert) => (
                <div key={cert} className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;