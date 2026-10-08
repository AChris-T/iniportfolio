import type { Metadata } from "next";
import VideoHeader from "@/components/videograph/VideoHeader";
import VideoHero from "@/components/videograph/VideoHero";
import VideoGallery from "@/components/videograph/VideoGallery";
import VideoServices from "@/components/videograph/VideoServices";
import VideoContact from "@/components/videograph/VideoContact";

export const metadata: Metadata = {
  title: "Nini’s Cam — Video Editor",
  description: "Reels, ad edits, event highlights and long-form video editing by Nini’s Cam.",
};

export default function VideographPage() {
  return (
    <main className="flex flex-1 flex-col bg-black">
      <VideoHeader />
      <VideoHero />
      <VideoGallery />
      <VideoServices />
      <VideoContact />
    </main>
  );
}
