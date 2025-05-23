import { Button, Result } from "antd"
import Head from "next/head"
import Link from "next/link"

export default function InternalServerError() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>500 - Internal Server Error</title>
        <meta name="description" content="Internal server error occurred" />
      </Head>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong on our end."
            className="text-center"
            extra={[
              <Link href="/" key="refresh">
                <Button
                  type="primary"
                  className="bg-blue-500 hover:bg-blue-600 border-blue-500"
                >
                  Try Again
                </Button>
              </Link>,
              <Link href="/" key="home">
                <Button className="ml-2 border-gray-300 hover:bg-gray-100">
                  Back Home
                </Button>
              </Link>,
            ]}
          />

          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              What could have happened?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Our servers might be overloaded</li>
              <li>There might be a temporary network issue</li>
              <li>We might be performing maintenance</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Need immediate help?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact our support team if the problem persists.
              </p>
              <Link href="mailto:support@example.com">
                <Button
                  type="default"
                  className="border-gray-300 hover:bg-gray-100"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
