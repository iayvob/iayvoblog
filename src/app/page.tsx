import Comments from "@/components/comments";
import Search from "@/components/search";
import Docs from "@/components/docs";
import SectionName from "@/components/sectionName";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex justify-center items-center mb-28">
        <div><SectionName text="iayvoblog"/></div>
      </div>
      <div className="comment w-full overflow-x-auto overflow-y-hidden">
        <Comments />
      </div>
      <Search />
      <Docs />
    </main>
  );
}