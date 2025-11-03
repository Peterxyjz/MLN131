import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function QuizPage() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage:
          "url('/assets/home/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/quiz" />
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-quicksand text-4xl font-bold text-[#f3c554]">
          Quiz ôn tập
        </h1>
        <p className="text-xl leading-relaxed text-[#d9d9d9]">
          Phần quiz đang được hoàn thiện để giúp bạn củng cố kiến thức về nhà
          nước xã hội chủ nghĩa và nền dân chủ ở Việt Nam. Vui lòng quay lại sau
          hoặc khám phá thêm các chuyên mục bên dưới.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/nha-nuoc-xa-hoi-chu-nghia"
            className="rounded-full border border-[#f3c554] px-6 py-3 font-semibold text-[#f3c554] transition-colors hover:bg-[#f3c554] hover:text-black"
          >
            Nhà nước XHCN
          </Link>
          <Link
            href="/dan-chu-vs-nha-nuoc-xa-hoi-chu-nghia"
            className="rounded-full border border-[#f3c554] px-6 py-3 font-semibold text-[#f3c554] transition-colors hover:bg-[#f3c554] hover:text-black"
          >
            Dân chủ XHCN
          </Link>
          <Link
            href="/phat-huy-va-xay-dung"
            className="rounded-full border border-[#f3c554] px-6 py-3 font-semibold text-[#f3c554] transition-colors hover:bg-[#f3c554] hover:text-black"
          >
            Phát huy &amp; xây dựng
          </Link>
          <Link
            href="/ban-co-biet"
            className="rounded-full border border-[#f3c554] px-6 py-3 font-semibold text-[#f3c554] transition-colors hover:bg-[#f3c554] hover:text-black"
          >
            Bạn có biết
          </Link>
        </div>
      </main>
      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
