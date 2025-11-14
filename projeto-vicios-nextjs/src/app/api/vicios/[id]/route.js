import vicios from '@/data/vicios.json';

export async function GET(request, { params }) {
  const { id } = params;
  const vicio = vicios.find((v) => v.id === id);

  if (!vicio) {
    return new Response(JSON.stringify({ error: 'Vício não encontrado' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(vicio), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
