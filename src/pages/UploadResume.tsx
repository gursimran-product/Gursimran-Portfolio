import { useState } from 'react';
import { Upload, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function UploadResume() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setMessage({ type: 'error', text: 'Please upload a PDF file' });
      return;
    }

    setUploading(true);
    setMessage(null);

    try {
      const fileExt = 'pdf';
      const fileName = `gursimran_singh_product_manager_resume.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      setMessage({ type: 'success', text: 'Resume uploaded successfully!' });
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage({ type: 'error', text: 'Failed to upload resume. Please try again.' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Upload Resume</h1>

        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />

          <label htmlFor="resume-upload" className="cursor-pointer">
            <span className="text-lg text-gray-700 mb-4 block">
              {uploading ? 'Uploading...' : 'Click to upload your resume'}
            </span>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              disabled={uploading}
              className="hidden"
            />
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Select PDF File
            </span>
          </label>

          {message && (
            <div className={`mt-6 flex items-center justify-center gap-2 ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{message.text}</span>
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="font-semibold text-gray-900 mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click the button above to select your resume PDF</li>
            <li>The file will be uploaded to secure storage</li>
            <li>Once uploaded, the download button on the About page will work</li>
            <li>You only need to do this once</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
