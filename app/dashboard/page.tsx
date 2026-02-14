import { DashboardPageHeader } from '@/components/dashboard/page-header';
import { RssFeedManager } from '@/components/dashboard/rss-feed-manager';

const DashboardPage = () => {
  return (
    <div className="container mx-auto space-y-3 px-5 py-5 lg:px-8">
      <DashboardPageHeader />

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - RSS Feed Manager */}
        <div>
          <RssFeedManager/>
        </div>

        {/* Right Column - Newsletter Generator */}
        <div>{/*<NewsletterGenerator />*/}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
