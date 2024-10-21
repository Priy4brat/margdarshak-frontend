import React from 'react'
import { Bell, ChevronLeft, ChevronRight, HelpCircle, Lock, MessageSquare, Search, Settings, Check, User, RotateCw, AlertCircle, Video } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Top Navigation Bar */}
            <header className="bg-white border-b p-1 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="navbar_app_logo.png" alt="logo" className='h-15 w-60' />
                </div>
                <div className="flex-1 flex justify-center max-w-2xl mx-auto">
                    <Input
                        type="search"
                        placeholder="Search for meetings..."
                        className="w-80"
                        startAdornment={<Search className="h-4 w-4 text-gray-500" />}
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <Bell className="h-6 w-6 text-gray-500" />
                    <div className="flex items-center space-x-2">
                        <div>
                            <p className="text-sm font-medium text-right">Vaibhav Pandey</p>
                            <p className="text-xs text-gray-500 text-right">vaibhav@kotamail.com</p>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="VP" />
                            <AvatarFallback>VP</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-100 p-4 flex flex-col">
                    <nav className="flex-grow space-y-2">
                        <Button variant="ghost" className="w-full justify-start bg-black text-white">
                            <Video className="mr-2 h-5 w-5" />
                            Meetings
                            <span className="ml-auto text-white py-0.5 px-2 rounded-full text-xs">0</span>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <User className="mr-2 h-5 w-5" />
                            Profile
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Recommendations
                            <span className="ml-auto text-gray-600 py-0.5 px-2 rounded-full text-xs">0</span>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Settings className="mr-2 h-5 w-5" />
                            Settings
                        </Button>
                    </nav>
                    <div className="mt-auto space-y-2">
                        <Button variant="ghost" className="w-full justify-start">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Feedback
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Help & Support
                        </Button>
                    </div>
                </aside>

                <main className="flex-1 overflow-y-hidden-auto p-2">
                    <div className="flex justify-evenly">
                        <div className="flex-1 max-w-4xl">
                            <h1 className="text-3xl font-bold mb-2">Welcome Vaibhav,</h1>
                            <h2 className="text-xl font-semibold mb-1">Finish Setting Up Your Mentor Profile</h2>
                            <p className="text-gray-600 mb-4">Kickstart mentoring with a mentor profile you create and love</p>

                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span>33% Completed</span>
                                    <span className="text-red-500">(1/3) Completed</span>
                                </div>
                                <Progress value={33} />
                            </div>

                            <h3 className="text-lg font-semibold mb-4">Next Steps</h3>

                            <div className="space-y-4">
                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <User className="h-6 w-6 mr-4 text-gray-600" />
                                            <div>
                                                <h4 className="font-semibold">Create Your Mentor Profile</h4>
                                                <p className="text-sm text-gray-600">You have successfully created your account</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-full p-0">
                                            <Check className="h-4 w-4 bg-black rounded-full text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <Settings className="h-6 w-6 mr-4 text-gray-600" />
                                            <div>
                                                <h4 className="font-semibold">Setting Up Your Long Term Membership</h4>
                                                <p className="text-sm text-gray-600">Let's get started with this essential setup steps.</p>
                                            </div>
                                        </div>
                                        <span className="text-gray-600">0/4</span>
                                    </div>
                                    <div className="space-y-0 ml-10">
                                        <div className="flex items-center justify-between py-1 border-b border-gray-200">
                                            <div className="flex items-center">
                                                <RotateCw className="h-4 w-4 mr-2 text-gray-600" />
                                                <span className="text-gray-600">Setup Your Mentor Profile</span>
                                            </div>
                                            <RotateCw className="h-4 w-4 text-gray-600" />
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                            <div className="flex items-center">
                                                <Lock className="h-4 w-4 mr-2 text-gray-400" />
                                                <span className="text-gray-400">Setup Your Mentorship Pricing</span>
                                            </div>
                                            <Lock className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                            <div className="flex items-center">
                                                <Lock className="h-4 w-4 mr-2 text-gray-400" />
                                                <span className="text-gray-400">Setup Your Trial Call Preference</span>
                                            </div>
                                            <Lock className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex items-center">
                                                <Lock className="h-4 w-4 mr-2 text-gray-400" />
                                                <span className="text-gray-400">Setup Your Availability</span>
                                            </div>
                                            <Lock className="h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <AlertCircle className="h-5 w- mr-4 text-gray-600" />
                                            <div>
                                                <h4 className="font-semibold">Get Verified & Listed</h4>
                                                <p className="text-sm text-gray-600">Please complete above steps before booking a verification.</p>
                                            </div>
                                        </div>
                                        <Lock className="h-6 w-6 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ml-6 w-64">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex justify-between items-center mb-4">
                                    <Button variant="ghost" size="sm"><ChevronLeft className="h-4 w-4" /></Button>
                                    <span className="font-semibold">February 2024</span>
                                    <Button variant="ghost" size="sm"><ChevronRight className="h-4 w-4" /></Button>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center">
                                    <div className="text-gray-500">Su</div>
                                    <div className="text-gray-500">Mo</div>
                                    <div className="text-gray-500">Tu</div>
                                    <div className="text-gray-500">We</div>
                                    <div className="text-gray-500">Th</div>
                                    <div className="text-gray-500">Fr</div>
                                    <div className="text-gray-500">Sa</div>
                                    {[...Array(31)].map((_, i) => (
                                        <div key={i} className={`p-2 ${i + 1 === 15 ? 'bg-black text-white rounded-3xl' : ''}`}>
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}