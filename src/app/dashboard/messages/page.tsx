import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  CheckCheck,
  Filter,
  MoreVertical,
  Paperclip,
  PlusCircle,
  Search,
  Send,
  UserPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock chat data
const contacts = [
  {
    id: 1,
    name: "Placement Officer",
    avatar: "/images/avatars/placement-officer.jpg",
    status: "online",
    lastMessage: "Please submit your updated resume by tomorrow.",
    time: "10:30 AM",
    unread: 2,
    type: "staff",
  },
  {
    id: 2,
    name: "Microsoft Recruiter",
    avatar: "/images/companies/microsoft.png",
    status: "offline",
    lastMessage: "We would like to schedule an interview with you next week.",
    time: "Yesterday",
    unread: 0,
    type: "company",
  },
  {
    id: 3,
    name: "Google HR Team",
    avatar: "/images/companies/google.png",
    status: "online",
    lastMessage: "Thank you for your application. We are reviewing it.",
    time: "Yesterday",
    unread: 1,
    type: "company",
  },
  {
    id: 4,
    name: "Priya Sharma",
    avatar: "/images/avatars/user1.jpg",
    status: "online",
    lastMessage: "Did you prepare for the Amazon coding test?",
    time: "2 days ago",
    unread: 0,
    type: "student",
  },
  {
    id: 5,
    name: "Placement Coordinator",
    avatar: "/images/avatars/coordinator.jpg",
    status: "offline",
    lastMessage: "The pre-placement talk is scheduled for tomorrow at 2 PM.",
    time: "3 days ago",
    unread: 0,
    type: "staff",
  },
  {
    id: 6,
    name: "Amazon Recruitment",
    avatar: "/images/companies/amazon.png",
    status: "offline",
    lastMessage: "Congratulations! You've been shortlisted for the next round.",
    time: "1 week ago",
    unread: 0,
    type: "company",
  },
  {
    id: 7,
    name: "Rahul Kumar",
    avatar: "/images/avatars/user2.jpg",
    status: "online",
    lastMessage: "Can you share your notes for the technical interview?",
    time: "1 week ago",
    unread: 0,
    type: "student",
  },
  {
    id: 8,
    name: "Flipkart HR",
    avatar: "/images/companies/flipkart.png",
    status: "offline",
    lastMessage:
      "We have received your application for the internship position.",
    time: "2 weeks ago",
    unread: 0,
    type: "company",
  },
];

// Mock messages for active chat
const activeChat = {
  id: 1,
  name: "Placement Officer",
  avatar: "/images/avatars/placement-officer.jpg",
  status: "online",
  type: "staff",
  messages: [
    {
      id: 1,
      sender: "Placement Officer",
      text: "Hello! I'm reaching out regarding your placement preparations.",
      time: "10:00 AM",
      isUser: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Hi! Yes, I've been preparing for the upcoming placement season.",
      time: "10:05 AM",
      isUser: true,
    },
    {
      id: 3,
      sender: "Placement Officer",
      text: "That's great to hear. Have you updated your resume with your latest projects and skills?",
      time: "10:10 AM",
      isUser: false,
    },
    {
      id: 4,
      sender: "You",
      text: "Yes, I've updated it last week with my recent internship experience.",
      time: "10:15 AM",
      isUser: true,
    },
    {
      id: 5,
      sender: "Placement Officer",
      text: "Perfect! Could you please submit your updated resume by tomorrow? We need to share it with the companies visiting next month.",
      time: "10:20 AM",
      isUser: false,
    },
    {
      id: 6,
      sender: "You",
      text: "Sure, I'll send it by tomorrow afternoon.",
      time: "10:25 AM",
      isUser: true,
    },
    {
      id: 7,
      sender: "Placement Officer",
      text: "Also, there's a pre-placement workshop scheduled for next week. Would you like to attend?",
      time: "10:30 AM",
      isUser: false,
    },
  ],
};

const MessagesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Messages</h1>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-240px)] min-h-[600px]">
        {/* Contacts sidebar */}
        <Card className="lg:col-span-1 h-full flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Chats</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>All Messages</DropdownMenuItem>
                  <DropdownMenuItem>Companies</DropdownMenuItem>
                  <DropdownMenuItem>Placement Staff</DropdownMenuItem>
                  <DropdownMenuItem>Students</DropdownMenuItem>
                  <DropdownMenuItem>Unread</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative mt-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
          </CardHeader>

          <Tabs defaultValue="all" className="px-4">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread" className="relative">
                Unread
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 absolute -top-1 -right-1">
                  3
                </span>
              </TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>

          <CardContent className="flex-1 overflow-auto pt-2">
            <div className="space-y-1 pr-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-accent group ${
                    contact.id === activeChat.id ? "bg-accent" : ""
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>
                        {contact.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {contact.status === "online" && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-background rounded-full"></span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm truncate">
                        {contact.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {contact.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-muted-foreground truncate">
                        {contact.lastMessage}
                      </p>
                      {contact.unread > 0 && (
                        <span className="flex-shrink-0 w-5 h-5 bg-primary rounded-full text-primary-foreground text-xs flex items-center justify-center">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat area */}
        <Card className="lg:col-span-2 h-full flex flex-col">
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activeChat.avatar} alt={activeChat.name} />
                  <AvatarFallback>
                    {activeChat.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-base">{activeChat.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    {activeChat.status === "online" ? (
                      <>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Online
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        Offline
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Clear Chat</DropdownMenuItem>
                    <DropdownMenuItem>Block</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {activeChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent"
                  }`}
                >
                  {!message.isUser && (
                    <div className="font-medium text-xs mb-1">
                      {message.sender}
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                  <div
                    className={`text-xs mt-1 flex items-center justify-end gap-1 ${
                      message.isUser
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                    {message.isUser && <CheckCheck className="h-3 w-3" />}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;
