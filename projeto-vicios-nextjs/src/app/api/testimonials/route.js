import testimonials from '@/data/testimonials.json';

export async function GET() {
  return new Response(JSON.stringify(testimonials), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
