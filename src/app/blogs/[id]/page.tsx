import { blogs, blog } from "../../data/blogs";
import Link from "next/link";

interface BlogPageProps {
    params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
    const { id } = params;
    const blog = blogs.find((b: blog) => b.id === Number(id));

    if (!blog) {
        return (
            <main className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold">Post não encontrado.</h1>
                <Link href={"/blogs"}
                    className="text-blue-500 hover:underline mt-4 inline-block">
                    Voltar para a lista de posts
                </Link>
            </main>
        )
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">{blog.titulo}</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Por {blog.autor}</p>
                
                <div className="text-justify">
                    {blog.conteudo.trim().split('\n').map((paragrafo, index) => (
                        <p key={index} className="my-6">
                            {paragrafo}
                        </p>
                    ))}
                </div>
            </article>

            <Link href={"/blogs"}
                className="inline-block bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 mt-8">
                Voltar para todos os posts
            </Link>
        </main>
    )
}