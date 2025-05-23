// app/[locale]/(public)/news/page.tsx

import Link from "next/link";

const dummyNews = [
    {
        slug: "oto-moi-ra-mat",
        title: "Ô tô mới ra mắt 2025",
        summary: "Giới thiệu mẫu xe mới với công nghệ đột phá năm 2025.",
    },
    {
        slug: "gia-xe-tang-dot-bien",
        title: "Giá xe tăng đột biến",
        summary: "Thị trường ô tô biến động mạnh, giá tăng chưa từng có.",
    },
    {
        slug: "bao-hiem-xe-2025",
        title: "Bảo hiểm xe 2025 có gì mới?",
        summary: "Chi tiết các thay đổi trong chính sách bảo hiểm năm nay.",
    },
];

export default function NewsPage() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6">Tin tức</h1>
            <ul className="space-y-6">
                {dummyNews.map((news) => (
                    <li key={news.slug} className="border-b pb-4">
                        <h2 className="text-xl font-semibold">
                            <Link href={`./news/${news.slug}`} className="text-blue-600 hover:underline">
                                {news.title}
                            </Link>
                        </h2>
                        <p className="text-gray-700">{news.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
