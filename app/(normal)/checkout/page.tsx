import { CheckoutPage } from "@/components/checkout/CheckoutPage"
import { getAddresses } from "@/helper/address/action"
import { getCurrentSession } from "@/lib/auth"

export default async function Page() {
  const session = await getCurrentSession()

  const addresses = session ? await getAddresses() : []

  return <CheckoutPage addresses={addresses} />
}
