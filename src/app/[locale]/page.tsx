import { redirect } from 'next/navigation';

/**
 * Home Page
 * รีไดเรกต์ไปยัง landing page
 */
export default function HomePage() {
    redirect('/landingpage');
}
