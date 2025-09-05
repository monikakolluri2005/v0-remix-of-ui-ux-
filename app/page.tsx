import { Bell, Search, Grid3X3, ChevronDown, ChevronLeft, ChevronRight, Clock, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function TaskDashboard() {
  const timeLimit = [
    {
      id: 1,
      title: "Creating Awesome Mobile Apps",
      category: "UI UX Design",
      progress: 90,
      time: "1 Hour",
      image: "/mobile-app-design-mockups-on-desk.jpg",
    },
    {
      id: 2,
      title: "Creating Fresh Website",
      category: "Web Developer",
      progress: 85,
      time: "2 Hour",
      image: "/website-development-on-computer-screen.jpg",
    },
    {
      id: 3,
      title: "Creating Color Palettes",
      category: "UI UX Design",
      progress: 100,
      time: "1 Hour",
      image: "/color-palette-design-workspace.jpg",
    },
    {
      id: 4,
      title: "Awesome Project",
      category: "Web Developer",
      progress: 75,
      time: "3 Hour",
      image: "/web-development-project.png",
    },
  ]

  const newTasks = [
    {
      id: 1,
      title: "Creating Mobile App Design",
      category: "UI UX Design",
      progress: 75,
      time: "3 Days Left",
      image: "/mobile-app-design-interface.png",
    },
    {
      id: 2,
      title: "Creating Perfect Website",
      category: "Web Developer",
      progress: 85,
      time: "4 Days Left",
      image: "/website-design-on-laptop-screen.jpg",
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "UI UX Design",
      progress: 65,
      time: "3 Days Left",
      image: "/mobile-app-interface.png",
    },
    {
      id: 4,
      title: "Creating App",
      category: "Android Developer",
      progress: 80,
      time: "1 Day Left",
      image: "/android-app-development.png",
    },
  ]

  const avatars = [
    "/person-avatar-1.png",
    "/diverse-person-avatar-2.png",
    "/person-avatar-3.png",
    "/person-avatar-4.png",
    "/diverse-person-avatars.png",
  ]

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#ffffff] border-r border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#546fff] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-xl font-bold text-[#141522]">DNX</span>
        </div>

        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
            <Grid3X3 size={20} />
            <span>Overview</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 bg-[#f5f5f7] text-[#141522] rounded-lg">
            <div className="w-5 h-5 border-2 border-current rounded"></div>
            <span className="font-medium">Task</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
            <div className="w-5 h-5 rounded-full border-2 border-current"></div>
            <span>Mentors</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
            <div className="w-5 h-5 rounded border-2 border-current"></div>
            <span>Message</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
            <div className="w-5 h-5 rounded-full border-2 border-current"></div>
            <span>Settings</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#141522]">Explore Task</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={20} className="text-[#8e92bc]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff4d5e] rounded-full"></div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/professional-woman-avatar.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8e92bc]" />
            <Input placeholder="Search Task" className="pl-10 bg-[#ffffff] border-gray-200" />
          </div>
          <Button variant="outline" className="flex items-center gap-2 bg-[#ffffff] border-gray-200">
            <Grid3X3 size={16} />
            Category
            <ChevronDown size={16} />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-[#ffffff] border-gray-200">
            Sort By: Deadline
            <ChevronDown size={16} />
          </Button>
        </div>

        {/* Time Limit Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#141522]">Time Limit</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {timeLimit.map((task) => (
              <div key={task.id} className="bg-[#ffffff] rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={task.image || "/placeholder.svg"}
                    alt={task.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#141522] mb-1">{task.title}</h3>
                <p className="text-sm text-[#8e92bc] mb-3">{task.category}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#8e92bc]">Progress</span>
                    <span className="text-sm font-medium text-[#546fff]">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-[#f5f5f7] rounded-full h-2">
                    <div
                      className="bg-[#546fff] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#8e92bc]">
                    <Clock size={16} />
                    <span className="text-sm">{task.time}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {avatars.slice(0, 4).map((avatar, index) => (
                      <div key={index} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={avatar || "/placeholder.svg"}
                          alt={`Avatar ${index + 1}`}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Task Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#141522]">New Task</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newTasks.map((task) => (
              <div key={task.id} className="bg-[#ffffff] rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={task.image || "/placeholder.svg"}
                    alt={task.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#141522] mb-1">{task.title}</h3>
                <p className="text-sm text-[#8e92bc] mb-3">{task.category}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#8e92bc]">Progress</span>
                    <span className="text-sm font-medium text-[#546fff]">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-[#f5f5f7] rounded-full h-2">
                    <div
                      className="bg-[#546fff] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#8e92bc]">
                    <Clock size={16} />
                    <span className="text-sm">{task.time}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {avatars.slice(0, 4).map((avatar, index) => (
                      <div key={index} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={avatar || "/placeholder.svg"}
                          alt={`Avatar ${index + 1}`}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Center Popup */}
      <div className="fixed bottom-6 left-6">
        <div className="bg-[#141522] text-white p-4 rounded-xl max-w-[200px] shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-[#54577a] rounded-full flex items-center justify-center">
              <HelpCircle size={16} />
            </div>
            <div>
              <h3 className="font-medium text-sm">Help Center</h3>
            </div>
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
          <Button className="w-full bg-white text-[#141522] hover:bg-gray-100 text-xs py-1.5">Go To Help Center</Button>
        </div>
      </div>
    </div>
  )
}
