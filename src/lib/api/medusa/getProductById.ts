
export async function getProductById(id: string) {
  const res = await fetch(`https://therapy-scuba-lightweight-stevens.trycloudflare.com/store/products/${id}`, {
    headers: {
      "x-publishable-api-key": "pk_f2911638239867f294556195fe2b1dd7e931709f13db5c08a629494a53bd2d0e"
    }
  })

  if (!res.ok) {
    throw new Error(`Error fetching product ${id}`)
  }

  const data = await res.json()
  return data.product
}
