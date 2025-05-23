import { tokenStore } from "../../provider/InMemoryTokenStore"
import { getUserInfo } from "@lib/data/server/customer"

export default async function NormalServerSide() {
  const response = await getUserInfo()

  const tokens = tokenStore.getTokens()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">
        Normal Page Server {JSON.stringify(tokens)}
      </h1>
      <h2 className="text-2xl font-bold">
        Normal Page Server {JSON.stringify(response)}
      </h2>
      <h1>Server Side</h1>
    </div>
  )
}
