// app/[locale]/(public)/news/[slug]/page.tsx

import { notFound } from "next/navigation";

interface NewsDetailPageProps {
    params: {
        locale: string;
        slug: string;
    };
}

const fakeNews = [
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

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
    const newsItem = fakeNews.find((item) => item.slug === params.slug);

    if (!newsItem) return notFound();

    return (
        <div className="prose max-w-2xl mx-auto py-10">
            <h1>{newsItem.title}</h1>
            <p>{newsItem.content}</p>
        </div>
    );
}
