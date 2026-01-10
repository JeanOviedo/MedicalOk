import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

import blogData from "@/data/blog.json"

export const metadata: Metadata = {
    title: "Blog de Salud",
    description: "Consejos, noticias y artículos sobre salud y bienestar.",
}

export default function BlogPage() {
    return (
        <div className="container max-w-6xl mx-auto py-10 md:py-20">
            <div className="mb-12 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Blog y Noticias</h1>
                <p className="mt-4 text-muted-foreground">
                    Mantente informado sobre las últimas novedades en medicina y salud.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {blogData.map((post) => (
                    <Card key={post.id} className="flex flex-col overflow-hidden">
                        <div className="aspect-video relative bg-muted flex items-center justify-center text-muted-foreground">
                            <span className="text-4xl">📰</span>
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center">
                                    <Calendar className="mr-1 h-3 w-3" />
                                    {post.date}
                                </span>
                            </div>
                            <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {post.excerpt}
                            </p>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                            <div className="flex items-center text-xs text-muted-foreground">
                                <User className="mr-1 h-3 w-3" />
                                by {post.author}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
