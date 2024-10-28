// app/products/page.js
'use client';

import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = {
    name: "专业无线降噪耳机",
    price: "¥1299.00",
    description: "高端降噪耳机，提供出色的音质和舒适的佩戴体验。采用最新蓝牙5.0技术，续航时间长达30小时。",
    features: [
      "主动降噪技术",
      "蓝牙5.0连接",
      "30小时续航",
      "快速充电支持",
      "触控操作"
    ],
    images: [
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* 图片展示区 */}
          <div className="flex flex-col">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={`Product image ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-md overflow-hidden ${
                    selectedImage === idx ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 产品信息区 */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            {/* 评分 */}
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">128 评价</p>
            </div>

            {/* 价格 */}
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              {product.price}
            </p>

            {/* 描述 */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">产品描述</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {/* 特点列表 */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">产品特点</h3>
              <ul className="mt-2 space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 操作按钮 */}
            <div className="mt-8 flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                加入购物车
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}