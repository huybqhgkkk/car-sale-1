// ProfileClient.tsx - Component phía client
"use client"

import { Avatar, Card, Descriptions, Tag } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { UserInfo } from "../../../../types/account/user-info"

interface ProfileClientProps {
  userInfo: UserInfo
  className?: string
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  userInfo,
  className,
}) => {
  return (
    <Card
      className={`max-w-2xl mx-auto shadow-md ${className}`}
      title={
        <div className="flex items-center space-x-4">
          <Avatar size={64} icon={<UserOutlined />} />
          <div>
            <h1 className="text-xl font-bold">{userInfo.fullName}</h1>
            <Tag color="blue">{userInfo.age} tuổi</Tag>
          </div>
        </div>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Họ và tên">
          {userInfo.fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Tuổi">{userInfo.age}</Descriptions.Item>
      </Descriptions>

      <div className="mt-4 space-y-4">
        <section>
          <h3 className="text-lg font-semibold mb-2">Thông tin chi tiết</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc list-inside space-y-2">
              <li>Họ và tên: {userInfo.fullName}</li>
              <li>Tuổi: {userInfo.age}</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Thống kê</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card size="small">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {userInfo.age}
                </div>
                <div className="text-gray-500">Tuổi</div>
              </div>
            </Card>
            <Card size="small">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {userInfo.fullName.length}
                </div>
                <div className="text-gray-500">Độ dài tên</div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Chỉnh sửa
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
          Xem thêm
        </button>
      </div>
    </Card>
  )
}

export default ProfileClient
