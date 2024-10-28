import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            了解更多
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            深入了解我们的产品、服务和公司理念
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            我们的优势
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: '创新技术', description: '我们不断推动技术边界，为客户提供最前沿的解决方案。' },
              { title: '卓越服务', description: '我们的团队致力于提供超出期望的客户服务体验。' },
              { title: '可靠品质', description: '我们的产品经过严格测试，确保最高的质量标准。' },
              { title: '灵活定制', description: '我们提供定制化解决方案，满足您的特定需求。' },
              { title: '持续支持', description: '我们的支持团队全天候待命，随时为您解决问题。' },
              { title: '价值导向', description: '我们致力于为客户创造长期价值，而不仅仅是短期利益。' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            常见问题
          </h2>
          <div className="mt-6 space-y-8">
            {[
              { question: '如何开始使用您的服务？', answer: '您可以通过我们的网站注册账户，然后按照指引完成初始设置。我们的客户支持团队随时为您提供帮助。' },
              { question: '您们提供哪些支持选项？', answer: '我们提供电话、邮件和在线聊天支持。此外，我们的知识库中有大量的自助资源供您参考。' },
              { question: '产品有保修吗？', answer: '是的，我们的所有产品都提供标准的一年保修。我们还提供延长保修选项，以满足不同客户的需求。' },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <p className="mt-2 text-base text-gray-500">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            联系我们了解更多
          </Link>
        </div>
      </main>
    </div>
  )
}