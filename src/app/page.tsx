'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockData = {
 stats: {
   totalPosts: 156,
   monthlyPosts: 23,
   popularTags: ['JavaScript', 'React', 'NextJS', 'TailwindCSS', 'TypeScript']
 },
 recentPosts: [
   {
     id: 1,
     title: "Next.js와 TailwindCSS로 블로그 만들기",
     content: "Next.js와 TailwindCSS를 사용하여...",
     tags: ["NextJS", "TailwindCSS"],
     created_at: "2024-11-14T10:00:00"
   },
   {
     id: 2,
     title: "TypeScript 타입 시스템 이해하기",
     content: "TypeScript의 타입 시스템은...",
     tags: ["TypeScript"],
     created_at: "2024-11-13T15:30:00"
   },
   {
     id: 3,
     title: "React 상태관리 전략",
     content: "효과적인 React 상태관리를 위해...",
     tags: ["React", "JavaScript"],
     created_at: "2024-11-12T09:15:00"
   }
 ]
};

export default function Home() {
 return (
   <div className="container mx-auto p-6">
     <div className="grid gap-4 md:grid-cols-3 mb-6">
       <Card>
         <CardHeader className="flex flex-row items-center justify-between pb-2">
           <CardTitle className="text-sm font-medium">총 게시글</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="text-2xl font-bold">{mockData.stats.totalPosts}</div>
         </CardContent>
       </Card>
       
       <Card>
         <CardHeader className="flex flex-row items-center justify-between pb-2">
           <CardTitle className="text-sm font-medium">이번 달 게시글</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="text-2xl font-bold">{mockData.stats.monthlyPosts}</div>
         </CardContent>
       </Card>

       <Card>
         <CardHeader className="flex flex-row items-center justify-between pb-2">
           <CardTitle className="text-sm font-medium">인기 태그</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="flex flex-wrap gap-2">
             {mockData.stats.popularTags.map(tag => (
               <Badge key={tag} variant="outline">
                 {tag}
               </Badge>
             ))}
           </div>
         </CardContent>
       </Card>
     </div>

     <Card>
       <CardHeader>
         <CardTitle>최근 게시글</CardTitle>
       </CardHeader>
       <CardContent>
         <div className="space-y-4">
           {mockData.recentPosts.map(post => (
             <div key={post.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
               <div>
                 <h3 className="font-medium">{post.title}</h3>
                 <p className="text-sm text-gray-500">
                   {new Date(post.created_at).toLocaleDateString()}
                 </p>
               </div>
               <div className="flex gap-2">
                 {post.tags.map(tag => (
                   <Badge key={tag} variant="secondary">
                     {tag}
                   </Badge>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </CardContent>
     </Card>
   </div>
 )
}
