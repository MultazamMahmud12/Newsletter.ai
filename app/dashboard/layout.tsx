import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { has } = await auth();
  const hasPaidPlan =
    (await has({ plan: 'pro' })) || (await has({ plan: 'starter' }));

  if (!hasPaidPlan) {
    redirect('/#pricing');
  }

  console.log('User has access to dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;
/*What <main> does
<main> is an HTML semantic tag for the primary content of a page. It helps with:

SEO (search engines know what's important)
Accessibility (screen readers jump to main content)
Where to put <main>
Rule of thumb:

If content changes per page → put <main> in page.tsx
If you want a shared wrapper (header + main structure) → put <main> in layout.tsx
Your setup:
Home page (/)
Why: Home has no shared layout (no header), so <main> wraps the entire page content directly.

Dashboard (/dashboard)
Why: Dashboard has a shared header across all dashboard pages (/dashboard, /dashboard/settings, etc.), so:

layout.tsx provides the structure (header + main wrapper)
page.tsx provides the content (goes inside <main>)
Summary:
Location	<main> placement	Reason
Home	page.tsx	No shared layout, main wraps everything
Dashboard	layout.tsx	Shared header + main structure for all dashboard pages
Best practice: Use <main> in layout when you have a persistent structure (like header + content). Use it in page when the page is standalone. */