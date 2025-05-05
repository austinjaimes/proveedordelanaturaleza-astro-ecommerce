
export async function getAllProducts() {
  const res = await fetch(`https://therapy-scuba-lightweight-stevens.trycloudflare.com/store/products`, {
    headers: {
      'x-publishable-api-key': "pk_f2911638239867f294556195fe2b1dd7e931709f13db5c08a629494a53bd2d0e",
    },
  });

  if (!res.ok) {
    throw new Error('Error fetching products');
  }

  const data = await res.json();
  return data.products; // Retorna el listado de productos
}
