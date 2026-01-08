import HookPageClient from "./_components/HookPageClient"
import { generateStaticParams } from "./_components/generateStaticParams"

 
export default async function HookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <HookPageClient slug={slug} />
}

 