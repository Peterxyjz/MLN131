import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage:
          "url('/assets/home/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/" />
      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-20 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-inter text-[40px] font-bold leading-tight text-[#f3c554] text-shadow-lg-custom lg:text-5xl">
              NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
            </h1>
            <div className="mt-8 space-y-4 font-inter text-xl font-semibold text-[#f3c554] text-shadow-custom">
              <p>Sự ra đời của Nhà nước xã hội chủ nghĩa</p>
              <p>Bản chất của Nhà nước xã hội chủ nghĩa</p>
              <p>Chức năng Nhà nước xã hội chủ nghĩa</p>
              <p>Cơ sở nền tảng của Nhà nước xã hội chủ nghĩa</p>
              <p>Công cụ thực thi quyền làm chủ của nhân dân</p>
            </div>
            <Link
              href="/nha-nuoc-xa-hoi-chu-nghia"
              className="mt-10 inline-block rounded-md bg-[#f3c554] px-8 py-3 font-inter text-xl font-semibold text-black shadow-lg transition-colors hover:bg-[#f6d075]"
            >
              KHÁM PHÁ NGAY
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/assets/home/b319402cdbba200724209f65e9a97e81a4f0a721.png"
              alt="Quốc hội Việt Nam"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg opacity-50"
              priority
            />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              <span className="block h-2.5 w-2.5 rounded-full bg-white opacity-50" />
              <span className="block h-2.5 w-2.5 rounded-full bg-white" />
              <span className="block h-2.5 w-2.5 rounded-full bg-white opacity-50" />
            </div>
          </div>
        </section>

        <section className="grid items-center gap-16 md:grid-cols-2">
          <Image
            src="/assets/home/0bdfa266c75b9f1c8241978bef018799391fa4cd.png"
            alt="Lịch sử Việt Nam"
            width={900}
            height={600}
            className="h-auto w-full rounded-lg"
          />
          <div>
            <h2 className="font-quicksand text-2xl font-bold text-white">
              1 NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
            </h2>
            <h3 className="mt-3 font-quicksand text-sm font-bold uppercase text-white">
              Sự ra đời của Nhà nước xã hội chủ nghĩa
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#d9d9d9]">
              Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của
              Đảng, mang bản chất giai cấp công nhân, gắn bó với dân tộc và phục
              vụ nhân dân. Quyền lực nhà nước phải thống nhất, có sự phân công,
              phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp, tránh
              chồng chéo hoặc lạm quyền...
            </p>
            <Link
              href="/nha-nuoc-xa-hoi-chu-nghia"
              className="mt-6 inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              XEM THÊM
            </Link>
          </div>
        </section>

        <section className="grid items-center gap-16 md:grid-cols-2">
          <div className="md:order-last">
            <h2 className="font-quicksand text-2xl font-bold text-white">
              2. DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM
            </h2>
            <h3 className="mt-3 font-quicksand text-sm font-bold uppercase text-white">
              SỰ RA ĐỜI, PHÁT TRIỂN
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#d9d9d9]">
              Chế độ dân chủ nhân dân ở nước ta được xác lập sau Cách mạng Tháng
              Tám năm 1945....
            </p>
            <Link
              href="/dan-chu-vs-nha-nuoc-xa-hoi-chu-nghia"
              className="mt-6 inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              XEM THÊM
            </Link>
          </div>
          <Image
            src="/assets/home/eb99ea30633a5219e9dbae9a80ebe822f12fc77d.png"
            alt="Chủ tịch Hồ Chí Minh và nhân dân"
            width={900}
            height={600}
            className="h-auto w-full rounded-lg"
          />
        </section>

        <section className="grid items-center gap-16 md:grid-cols-2">
          <Image
            src="/assets/home/2628d9680cf4364ce3cef07c4903c2cc3ab2ee26.png"
            alt="Chủ tịch Hồ Chí Minh với nông dân"
            width={900}
            height={600}
            className="h-auto w-full rounded-lg"
          />
          <div>
            <h2 className="font-quicksand text-2xl font-bold text-white">
              3. PHÁT HUY DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM HIỆN NAY
            </h2>
            <p className="mt-4 text-sm font-bold text-white">
              Hiện nay, để phát huy dân chủ xã hội chủ nghĩa, Việt Nam cần tập
              trung vào các nhiệm vụ trọng tâm sau:
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#d9d9d9]">
              Thứ nhất: Xây dựng và hoàn thiện thể chế kinh tế thị trường định
              hướng XHCN. Đồng thời, cần hoàn thiện hệ thống pháp luật, đặc biệt
              về các loại tài sản mới như sở hữu trí tuệ... Song song với đó là
              cải cách hành chính mạnh mẽ, đơn giản hóa thủ tục và nâng cao hiệu
              quả môi trường kinh doanh.
            </p>
            <Link
              href="/phat-huy-va-xay-dung"
              className="mt-6 inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              XEM THÊM
            </Link>
          </div>
        </section>

        <section className="grid items-center gap-16 md:grid-cols-2">
          <Image
            src="/assets/home/136910af473ad8296d0ad5b92f6b4e0952c37cb4.png"
            alt="Minh hoạ dịch vụ công nghệ"
            width={900}
            height={600}
            className="h-auto w-full rounded-lg"
          />
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-quicksand text-2xl font-bold text-white">
              BẠN CÓ BIẾT?
            </h2>
            <p className="mt-6 text-xl font-light leading-relaxed text-[#d9d9d9]">
              Y tế từ xa (Telehealth): Nhiều bệnh viện lớn tại Việt Nam đã triển
              khai các nền tảng thăm khám, tư vấn sức khỏe từ xa. Điều này giúp
              người dân ở vùng sâu, vùng xa có thể tiếp cận chuyên gia y tế
              tuyến trên mà không cần di chuyển, ...
            </p>
            <Link
              href="/ban-co-biet"
              className="mt-8 inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              XEM THÊM
            </Link>
          </div>
        </section>
      </main>
      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
