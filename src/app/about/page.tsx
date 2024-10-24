import Image from 'next/image'

const teamMembers = [
  {
    name: '张三',
    role: '首席执行官',
    image: '/placeholder.svg?height=400&width=400',
    bio: '张三拥有超过15年的科技行业经验，致力于创新和团队建设。'
  },
  {
    name: '李四',
    role: '技术总监',
    image: '/placeholder.svg?height=400&width=400',
    bio: '李四是一位经验丰富的全栈开发者，专注于构建可扩展的系统架构。'
  },
  {
    name: '王五',
    role: '产品经理',
    image: '/placeholder.svg?height=400&width=400',
    bio: '王五擅长将用户需求转化为创新产品，有着敏锐的市场洞察力。'
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* 简介部分 */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                我们致力于创造更美好的未来
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  在我们公司，我们相信创新和合作是推动进步的关键。我们的团队由来自不同背景的专业人士组成，
                  他们齐心协力，为客户提供最优质的解决方案。我们不仅关注技术的发展，更注重如何运用这些技术
                  来改善人们的生活和工作方式。
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=926&width=1024"
                alt="公司团队照片"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                width={1024}
                height={926}
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* 团队成员部分 */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的团队</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们的成功源于团队每一位成员的努力。每个人都带来了独特的技能和视角，共同推动我们公司向前发展。
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <li key={member.name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-base leading-7 text-indigo-600">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{member.bio}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 公司使命部分 */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的使命</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们的使命是通过创新科技和卓越服务，为客户创造价值，为员工提供成长机会，为社会做出积极贡献。
              我们坚信，只有不断追求卓越，才能在快速变化的世界中保持领先地位。
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}