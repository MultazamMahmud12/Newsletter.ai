import { Rss } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function DashboardPageHeader() {
  return (
    <Card className="relative overflow-hidden border bg-gradient-to-br from-slate-50 to-white">
      <CardHeader className="py-8">
        <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Dashboard
        </CardTitle>
        <CardDescription className="max-w-2xl text-base sm:text-lg">
          Manage your RSS feeds and generate AI-powered newsletters
        </CardDescription>
      </CardHeader>
      <Rss className="pointer-events-none absolute right-6 top-1/2 h-32 w-32 -translate-y-1/2 text-slate-200/70" />
    </Card>
  );
}
