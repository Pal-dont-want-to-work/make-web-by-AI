import { Lightbulb, Zap, Shield } from 'lucide-react'

const features = [
  {
    name: '创新设计',
    description: '我们的产品采用最新的设计理念，确保用户体验的最优化。',
    icon: Lightbulb
  },
  {
    name: '高效性能',
    description: '优化的性能确保您的工作流程更加顺畅，提高生产力。',
    icon: Zap
  },
  {
    name: '安全可靠',
    description: '我们优先考虑您的数据安全，采用最先进的加密技术。',
    icon: Shield
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">更快、更好、更强</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            为您的业务提供更智能的解决方案
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们的产品旨在简化您的工作流程，提高效率，并为您的业务带来真正的价值。探索我们的核心特性，了解我们如何帮助您实现目标。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      了解更多 <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}