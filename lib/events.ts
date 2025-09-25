"use client";
import * as React from 'react';
import rawEvents from './events.json';
import { SparkleIcon } from 'lucide-react';

export interface EventItem {
  id: number;
  img: string;
  title: string;
  description: string;
  status?: string; // e.g., Completed, Upcoming
  date?: string;   // optional future support
  type?: string;   // categorization if needed
}

export interface LatestUpdateItem {
  title: string;
  date: string; // using status or derived relative date
  description: string;
  type: 'event';
  icon: React.ReactNode;
  img: string;
}

// Provide typed events array
export const events: EventItem[] = (rawEvents as EventItem[]).map(e => ({ ...e }));

// Derive latest updates (you can adjust selection logic here)
// Currently: take all events sorted by id desc (most recent first)
export function getLatestUpdates(limit = 6): LatestUpdateItem[] {
  return [...events]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit)
    .map(ev => ({
      title: ev.title,
      date: ev.status || '—',
      description: ev.description,
      type: 'event',
      icon: <SparkleIcon className="w-5 h-5" />,
      img: ev.img,
    }));
}
