import { Check, X } from 'lucide-react'

const features = [
  { name: '无限项目', basic: true, pro: true, enterprise: true },
  { name: '无限存储', basic: false, pro: true, enterprise: true },
  { name: '自定义域名', basic: false, pro: true, enterprise: true },
  { name: '24/7 支持', basic: false, pro: false, enterprise: true },
  { name: 'API 访问', basic: false, pro: true, enterprise: true },
  { name: '高级分析', basic: false, pro: false, enterprise: true },
]

export default function FeatureComparison() {
  return (
    <section id="feature-comparison" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
          特征对比
        </h2>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {['基础版', '专业版', '企业版'].map((plan) => (
            <div key={plan} className="bg-white shadow rounded-lg divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{plan}</h3>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {features.map((feature) => {
                    const included = feature[plan.toLowerCase().replace('版', '') as keyof typeof feature]
                    return (
                      <li key={feature.name} className="flex items-start">
                        <div className="flex-shrink-0">
                          {included ? (
                            <Check className="h-6 w-6 text-green-500" />
                          ) : (
                            <X className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature.name}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}