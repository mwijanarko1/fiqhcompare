'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface Ruling {
  hanafi: string;
  maliki: string;
  shafii: string;
  hanbali: string;
}

interface Subtopic {
  title: string;
  rulings: Ruling;
  references: string[];
}

interface TopicForm {
  title: string;
  description: string;
  subtopics: Subtopic[];
}

const emptyRuling: Ruling = {
  hanafi: '',
  maliki: '',
  shafii: '',
  hanbali: '',
};

const emptySubtopic: Subtopic = {
  title: '',
  rulings: { ...emptyRuling },
  references: [''],
};

export default function NewTopicPage() {
  const [formData, setFormData] = useState<TopicForm>({
    title: '',
    description: '',
    subtopics: [{ ...emptySubtopic }],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'topics'), {
        ...formData,
        lastModified: serverTimestamp(),
      });
      router.push('/admin');
    } catch (error) {
      console.error('Error adding topic:', error);
      setLoading(false);
    }
  };

  const addSubtopic = () => {
    setFormData(prev => ({
      ...prev,
      subtopics: [...prev.subtopics, { ...emptySubtopic }],
    }));
  };

  const updateSubtopic = (index: number, field: keyof Subtopic, value: any) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((subtopic, i) =>
        i === index ? { ...subtopic, [field]: value } : subtopic
      ),
    }));
  };

  const updateRuling = (subtopicIndex: number, school: keyof Ruling, value: string) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((subtopic, i) =>
        i === subtopicIndex
          ? {
              ...subtopic,
              rulings: { ...subtopic.rulings, [school]: value },
            }
          : subtopic
      ),
    }));
  };

  const addReference = (subtopicIndex: number) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((subtopic, i) =>
        i === subtopicIndex
          ? {
              ...subtopic,
              references: [...subtopic.references, ''],
            }
          : subtopic
      ),
    }));
  };

  const updateReference = (subtopicIndex: number, refIndex: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      subtopics: prev.subtopics.map((subtopic, i) =>
        i === subtopicIndex
          ? {
              ...subtopic,
              references: subtopic.references.map((ref, j) =>
                j === refIndex ? value : ref
              ),
            }
          : subtopic
      ),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Add New Topic</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Topic Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Subtopics</h2>
            <button
              type="button"
              onClick={addSubtopic}
              className="px-4 py-2 text-emerald-600 hover:text-emerald-700"
            >
              Add Subtopic
            </button>
          </div>

          {formData.subtopics.map((subtopic, subtopicIndex) => (
            <div key={subtopicIndex} className="border rounded-lg p-6 space-y-6">
              <input
                type="text"
                value={subtopic.title}
                onChange={(e) => updateSubtopic(subtopicIndex, 'title', e.target.value)}
                placeholder="Subtopic Title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Rulings</h3>
                {Object.entries(subtopic.rulings).map(([school, ruling]) => (
                  <div key={school}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {school}
                    </label>
                    <textarea
                      value={ruling}
                      onChange={(e) => updateRuling(subtopicIndex, school as keyof Ruling, e.target.value)}
                      className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      rows={2}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">References</h3>
                  <button
                    type="button"
                    onClick={() => addReference(subtopicIndex)}
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    Add Reference
                  </button>
                </div>
                {subtopic.references.map((reference, refIndex) => (
                  <input
                    key={refIndex}
                    type="text"
                    value={reference}
                    onChange={(e) => updateReference(subtopicIndex, refIndex, e.target.value)}
                    placeholder="Reference"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Topic'}
          </button>
        </div>
      </form>
    </div>
  );
} 