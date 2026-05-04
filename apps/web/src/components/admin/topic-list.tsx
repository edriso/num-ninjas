'use client';

import { useState } from 'react';
import {
  createTopicAction,
  updateTopicAction,
  deleteTopicAction,
} from '@/app/admin/topics/actions';

type Topic = {
  id: number;
  name: string;
  description: string | null;
  orderInLevel: number;
};

type LevelWithTopics = {
  id: number;
  name: string;
  iconEmoji: string | null;
  topics: Topic[];
};

export function TopicList({ levels }: { levels: LevelWithTopics[] }) {
  return (
    <div className="space-y-6">
      {levels.map((level) => (
        <TopicSection key={level.id} level={level} />
      ))}
    </div>
  );
}

function TopicSection({ level }: { level: LevelWithTopics }) {
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const inputClass =
    'border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300';

  async function handleCreate(formData: FormData) {
    setSubmitting(true);
    try {
      await createTopicAction(formData);
      setShowCreate(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(formData: FormData) {
    setSubmitting(true);
    try {
      await updateTopicAction(formData);
      setEditingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(formData: FormData) {
    setSubmitting(true);
    try {
      await deleteTopicAction(formData);
      setDeletingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-bold text-gray-800">
          {level.iconEmoji} {level.name}
          <span className="text-sm font-normal text-gray-500 mr-2">
            ({level.topics.length} topics)
          </span>
        </h2>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          {showCreate ? 'Cancel' : 'Add Topic +'}
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form action={handleCreate} className="px-5 py-3 border-b border-gray-200 bg-blue-50/50">
          <input type="hidden" name="levelId" value={level.id} />
          <div className="flex items-center gap-3 flex-wrap">
            <input
              type="text"
              name="name"
              required
              placeholder="Topic Name"
              className={inputClass + ' flex-1 min-w-48'}
              autoFocus
            />
            <input
              type="text"
              name="description"
              placeholder="Description (optional)"
              className={inputClass + ' flex-1 min-w-48'}
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? '...' : 'Add'}
            </button>
          </div>
        </form>
      )}

      <div className="divide-y divide-gray-100">
        {level.topics.map((topic) => (
          <div key={topic.id} className="px-5 py-3">
            {editingId === topic.id ? (
              /* Edit form */
              <form action={handleUpdate} className="flex items-center gap-3 flex-wrap">
                <input type="hidden" name="id" value={topic.id} />
                <input
                  type="number"
                  name="orderInLevel"
                  defaultValue={topic.orderInLevel}
                  min={1}
                  className={inputClass + ' w-16 text-center'}
                />
                <input
                  type="text"
                  name="name"
                  defaultValue={topic.name}
                  required
                  className={inputClass + ' flex-1 min-w-48'}
                  autoFocus
                />
                <input
                  type="text"
                  name="description"
                  defaultValue={topic.description ?? ''}
                  placeholder="Description (optional)"
                  className={inputClass + ' flex-1 min-w-48'}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="text-green-600 hover:text-green-700 text-sm font-medium disabled:opacity-50"
                >
                  {submitting ? '...' : 'Save'}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  Cancel
                </button>
              </form>
            ) : (
              /* Display row */
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-400 ml-3">{topic.orderInLevel}.</span>
                  <span className="text-gray-800">{topic.name}</span>
                  {topic.description && (
                    <span className="text-sm text-gray-500 mr-3">: {topic.description}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(topic.id);
                      setDeletingId(null);
                    }}
                    className="text-gray-400 hover:text-gray-600 p-1"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>

                  {deletingId === topic.id ? (
                    <form action={handleDelete} className="flex items-center gap-1">
                      <input type="hidden" name="id" value={topic.id} />
                      <span className="text-xs text-red-600">Sure?</span>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="text-red-600 hover:text-red-700 text-xs font-medium disabled:opacity-50"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeletingId(null)}
                        className="text-gray-400 hover:text-gray-600 text-xs"
                      >
                        No
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => {
                        setDeletingId(topic.id);
                        setEditingId(null);
                      }}
                      className="text-gray-400 hover:text-red-500 p-1"
                      title="Delete"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {level.topics.length === 0 && (
          <div className="px-5 py-4 text-sm text-gray-400">No topics</div>
        )}
      </div>
    </div>
  );
}
