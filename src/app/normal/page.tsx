export const dynamic = "force-dynamic"

import NormalLayout from "./NormalLayout"
import NormalClientSide from "./normal-cl"
import NormalServerSide from "./normalServerSide"

export default async function NormalPage() {
  return (
    <>
      <NormalLayout>
        <NormalClientSide />
        <NormalServerSide />
      </NormalLayout>
    </>
  )
}
