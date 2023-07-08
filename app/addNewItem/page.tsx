"use client"

import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { addItem } from '@/services/featureItemService';

function AddNewItem() {
  const [itemData, setItemData] = useState<FeatureItem>({
    id: 0,
    title: '',
    description: '',
    votes: { counter: 0, like: false, unlike: false }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const isConfirm = (title: string) => {
    return Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      allowOutsideClick: false
    });
  };

  const handleSend = async () => {
    try {
      const confirmed = await isConfirm('Submit Confirmation');
      if (confirmed.isConfirmed) {
        await addItem(itemData);
        setItemData({
          id: 0,
          title: '',
          description: '',
          votes: { counter: 0, like: false, unlike: false }
        });
        window.location.href = "/";
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="title">
              כותרת
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder-right"
              id="title"
              name="title"
              type="text"
              placeholder="כותרת"
              value={itemData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="description">
              תיאור
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder-right"
              id="description"
              name="description"
              type="text"
              placeholder="תיאור"
              value={itemData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSend}
            >
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewItem;
