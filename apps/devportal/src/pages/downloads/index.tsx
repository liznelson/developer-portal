// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
//Promos
import opensourcePromo from '@/data/promos/opensource';
import MarkdownPage from '@/src/layouts/MarkdownPage';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('downloads', context.preview ? context.preview : null);
  const partials = pageInfo?.content ? await getPageContent(pageInfo) : pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Contribute({ pageInfo, partials }: { pageInfo: PageInfo; partials: PartialData }) {
  return <MarkdownPage pageInfo={pageInfo} partials={partials} promoAfter={[opensourcePromo]} hasGrid={false} />;
}
