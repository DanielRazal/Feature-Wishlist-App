"use client"

import { getAllItems, updateItem } from '@/services/featureItemService';
import { useEffect, useState } from 'react';
import { FaThumbsUp } from "react-icons/fa";


export default function Home() {
  
  const [featureItems, setFeatureItems] = useState<FeatureItem[]>([]);

  useEffect(() => {
    async function fetchFeatureItems() {
      try {
        const getAll = await getAllItems();
        setFeatureItems(getAll);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFeatureItems();
  }, []);

  async function handleLikeToggle(featureItem: FeatureItem) {
    try {
      const updatedVotes = {
        ...featureItem.votes,
        like: !featureItem.votes.like,
        unlike: !featureItem.votes.unlike,
        counter: featureItem.votes.like ? 0 : 1
      };
  
      const updatedItem = {
        ...featureItem,
        votes: updatedVotes
      };
  
      await updateItem(featureItem.id, updatedVotes);
  
      const updatedItems = featureItems.map(item => {
        if (item.id === featureItem.id) {
          return updatedItem;
        }
        return item;
      });
  
      setFeatureItems(updatedItems);
    } catch (error) {
      console.error(error);
    }
  }
    
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">רשימת משאלות</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {featureItems.map((featureItem: FeatureItem) => (
            <div
              key={featureItem.id}
              className="p-4 rounded border bg-white shadow-sm"
            >
              <h2 className="text-lg font-semibold text-right">כותרת: {featureItem.title}</h2>
              <p className="text-right">תיאור: {featureItem.description}</p>
              <div className="flex items-center">
                <div>
                  <FaThumbsUp
                    className={`mr-2 cursor-pointer ${featureItem.votes.like ? "text-green-500" : "text-red-500"
                      }`}
                    onClick={() => handleLikeToggle(featureItem)}
                  />
                </div>
                <div className="ml-auto">
                  <span>הצבעות: {featureItem.votes.counter}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
