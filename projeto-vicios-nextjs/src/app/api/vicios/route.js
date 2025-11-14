import vicios from '@/data/vicios.json';

export async function GET() {
  return new Response(JSON.stringify(vicios), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
