import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Trang không tồn tại",
  description: "Trang bạn tìm kiếm không tồn tại",
}

export default function NotFound() {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Trang không tồn tại
        </h2>

        <p className="text-gray-600 mb-8">
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không
          truy cập được.
        </p>

        {/* Actions - Sử dụng Link thay cho Button */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/vn"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded inline-flex items-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Về trang chủ
          </Link>

          {/*<Link*/}
          {/*  href="#back" // Sử dụng thẻ a với href="#back" hoặc URL cụ thể thay vì history.back()*/}
          {/*  className="px-6 py-3 border rounded hover:bg-gray-100 transition-colors"*/}
          {/*>*/}
          {/*  Quay lại*/}
          {/*</Link>*/}
          <a
              href="javascript:history.back()"
              className="px-6 py-3 border rounded hover:bg-gray-100 transition-colors"
          >
            Quay lại
          </a>
        </div>

        <div className="mt-8 text-gray-500">
          <p>Bạn cần hỗ trợ?</p>
          <Link
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
          >
            Liên hệ với chúng tôi
          </Link>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500">
        <p>Error Code: 404 | Page Not Found</p>
      </div>
    </div>
  );
}