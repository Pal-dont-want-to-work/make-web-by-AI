'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: '基础版',
    price: { monthly: 29, annually: 290 },
    features: ['每月5GB存储空间', '最多10个用户', '基础客户支持', '基本分析'],
  },
  {
    name: '专业版',
    price: { monthly: 99, annually: 990 },
    features: ['每月50GB存储空间', '最多50个用户', '优先客户支持', '高级分析', 'API访问'],
  },
  {
    name: '企业版',
    price: { monthly: 299, annually: 2990 },
    features: ['无限存储空间', '无限用户', '24/7专属支持', '自定义分析', 'API访问', '专属服务器'],
  },
]

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">为您的需求选择合适的方案</h2>
          <p className="mt-4 text-xl text-gray-500">无论您是个人用户还是大型企业，我们都有适合您的方案。</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <span className="mr-3 text-sm font-medium">按月付费</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              annual ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                annual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="ml-3 text-sm font-medium">按年付费</span>
          <span className="ml-2 text-sm text-green-500 font-medium">省20%</span>
        </div>

        <div className="grid max-w-md gap-8 mx-auto lg:grid-cols-3 lg:max-w-none">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <h3 className="text-2xl font-bold leading-8 text-center text-gray-900">{plan.name}</h3>
                <div className="flex justify-center mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ¥{annual ? plan.price.annually : plan.price.monthly}
                  </span>
                  <span className="text-xl font-medium text-gray-500 self-end ml-2">
                    /{annual ? '年' : '月'}
                  </span>
                </div>
              </div>
              <div className="flex-1 px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6 flex flex-col">
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                    选择{plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
