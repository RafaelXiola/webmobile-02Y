import faq from '@/data/faq.json';

export async function GET() {
  return new Response(JSON.stringify(faq), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
