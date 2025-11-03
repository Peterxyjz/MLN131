"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    id: 1,
    title: "NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA",
    items: [
      "Sự ra đời của Nhà nước xã hội chủ nghĩa",
      "Bản chất của Nhà nước xã hội chủ nghĩa",
      "Chức năng Nhà nước xã hội chủ nghĩa",
      "Cơ sở nền tảng của Nhà nước xã hội chủ nghĩa",
      "Công cụ thực thi quyền làm chủ của nhân dân",
    ],
    link: "/nha-nuoc-xa-hoi-chu-nghia",
    image: "/assets/home/b319402cdbba200724209f65e9a97e81a4f0a721.png",
  },
  {
    id: 2,
    title: "Dân chủ vs Nhà nước XHCN",
    items: [
      "SỰ RA ĐỜI, PHÁT TRIỂN",
      "CÁCH MẠNG THÁNG TÁM",
      "THỐNG NHẤT ĐẤT NƯỚC",
      "ĐỔI MỚI",
      "DÂN LÀ GỐC, LÀ CHỦ, LÀM CHỦ",
    ],
    link: "/dan-chu-vs-nha-nuoc-xa-hoi-chu-nghia",
    image: "/assets/home/a4795dc0fb24dd443c7dd4e0703ad7ec96b77b07.png",
  },
  {
    id: 3,
    title: "Phát huy và xây dựng",
    items: [
      "Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay",
      "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa hiện nay",
    ],
    link: "/phat-huy-va-xay-dung",
    image: "/assets/home/image3.png",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header currentPath="/" />

      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#694030] via-[#4a2d22] to-[#2d1a14]">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/assets/common/light-bg.png')",
          }}
        />

        {/* Slides */}
        <div className="relative h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                  {/* Content */}
                  <div className="space-y-5">
                    <h1 className="font-quicksand text-3xl font-bold uppercase leading-tight text-[#f3c554] lg:text-[2.5rem]">
                      {slide.title}
                    </h1>
                    <div className="space-y-2">
                      {slide.items.map((item, i) => (
                        <p
                          key={i}
                          className="font-quicksand text-sm font-normal text-[#f3c554] lg:text-base"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={slide.link}
                      className="inline-block rounded-lg bg-[#f3c554] px-6 py-2.5 font-quicksand text-sm font-bold uppercase text-black transition-all hover:bg-[#ffd966] hover:shadow-lg hover:shadow-[#f3c554]/30 lg:px-8 lg:py-3"
                    >
                      KHÁM PHÁ NGAY
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative hidden lg:block">
                    <div className="relative h-[400px] overflow-hidden rounded-2xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#f3c554]"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/assets/common/light-bg.png')] bg-cover bg-repeat opacity-5" />

        <div className="relative mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
          {/* Section 1: Nhà nước XHCN */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f3c554]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src="/assets/home/0bdfa266c75b9f1c8241978bef018799391fa4cd.png"
                  alt="Lịch sử Việt Nam"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-full bg-gradient-to-r from-[#f3c554]/20 to-[#f3c554]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f3c554]">
                    1. NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Sự ra đời của Nhà nước xã hội chủ nghĩa
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo
                  của Đảng, mang bản chất giai cấp công nhân, gắn bó với dân tộc
                  và phục vụ nhân dân. Quyền lực nhà nước phải thống nhất, có sự
                  phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư
                  pháp, tránh chồng chéo hoặc lạm quyền.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f3c554]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bản chất của Nhà nước xã hội chủ nghĩa
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f3c554]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chức năng Nhà nước xã hội chủ nghĩa
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f3c554]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cơ sở nền tảng của Nhà nước xã hội chủ nghĩa
                  </div>
                </div>

                <Link
                  href="/nha-nuoc-xa-hoi-chu-nghia"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>

          {/* Section 2: Dân chủ XHCN */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6 lg:order-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-[#f3c554]/20 to-[#f3c554]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f3c554]">
                    2. DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  SỰ RA ĐỜI, PHÁT TRIỂN
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Chế độ dân chủ nhân dân ở nước ta được xác lập sau Cách mạng
                  Tháng Tám năm 1945. Nhân dân Việt Nam giành chính quyền, thành
                  lập Nhà nước Việt Nam Dân chủ Cộng hòa. Đây là bước ngoặt xác
                  lập chế độ dân chủ nhân dân ở nước ta.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-inter text-2xl font-bold text-[#f3c554]">
                      1945
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Cách mạng Tháng Tám
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-inter text-2xl font-bold text-[#f3c554]">
                      1986
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Đại hội VI - Đổi mới
                    </div>
                  </div>
                </div>

                <Link
                  href="/dan-chu-vs-nha-nuoc-xa-hoi-chu-nghia"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-2xl lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f3c554]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src="/assets/home/eb99ea30633a5219e9dbae9a80ebe822f12fc77d.png"
                  alt="Chủ tịch Hồ Chí Minh và nhân dân"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Phát huy dân chủ */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f3c554]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src="/assets/home/2628d9680cf4364ce3cef07c4903c2cc3ab2ee26.png"
                  alt="Chủ tịch Hồ Chí Minh với nông dân"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-full bg-gradient-to-r from-[#f3c554]/20 to-[#f3c554]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f3c554]">
                    3. PHÁT HUY DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM HIỆN NAY
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Nhiệm vụ trọng tâm
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Hiện nay, để phát huy dân chủ xã hội chủ nghĩa, Việt Nam cần
                  tập trung vào các nhiệm vụ trọng tâm:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f3c554]/20">
                      <span className="text-sm font-bold text-[#f3c554]">
                        1
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Xây dựng và hoàn thiện thể chế
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Kinh tế thị trường định hướng XHCN
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f3c554]/20">
                      <span className="text-sm font-bold text-[#f3c554]">
                        2
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Xây dựng Đảng trong sạch, vững mạnh
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Điều kiện tiên quyết phát triển dân chủ
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f3c554]/20">
                      <span className="text-sm font-bold text-[#f3c554]">
                        3
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Xây dựng Nhà nước pháp quyền
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        XHCN vững mạnh dưới sự lãnh đạo của Đảng
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/phat-huy-va-xay-dung"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>

          {/* Bạn có biết Card */}
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1510] to-[#0a0a0a] p-8 lg:p-12">
            <div className="absolute inset-0 bg-[url('/assets/common/dark-bg.png')] bg-cover bg-repeat opacity-20" />
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f3c554]/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/assets/home/136910af473ad8296d0ad5b92f6b4e0952c37cb4.png"
                  alt="Minh hoạ dịch vụ công nghệ"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f3c554]/30 bg-[#f3c554]/10 px-4 py-2">
                  <svg
                    className="h-4 w-4 text-[#f3c554]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-inter text-sm font-bold text-[#f3c554]">
                    BẠN CÓ BIẾT?
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Ứng dụng công nghệ trong dân chủ
                </h2>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-inter text-base font-bold text-[#f3c554]">
                      Y tế từ xa (Telehealth)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#d9d9d9]/80">
                      Nhiều bệnh viện lớn tại Việt Nam đã triển khai các nền
                      tảng thăm khám, tư vấn sức khỏe từ xa. Điều này giúp người
                      dân ở vùng sâu, vùng xa có thể tiếp cận chuyên gia y tế
                      tuyến trên mà không cần di chuyển.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-inter text-base font-bold text-[#f3c554]">
                      Hồ sơ sức khỏe điện tử
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#d9d9d9]/80">
                      Nhiều tỉnh thành đang triển khai hồ sơ sức khỏe điện tử
                      cho người dân. Hồ sơ này giúp bác sĩ tra cứu nhanh lịch sử
                      khám chữa bệnh, tiêm chủng, từ đó đưa ra chẩn đoán và phác
                      đồ điều trị chính xác hơn.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-inter text-base font-bold text-[#f3c554]">
                      Giáo dục số (E-learning)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#d9d9d9]/80">
                      Các trường học đang tăng cường sử dụng các hệ thống quản
                      lý học tập (LMS) và nền tảng bài giảng điện tử. Điều này
                      hỗ trợ việc học tập linh hoạt, giúp học sinh tự học, ôn
                      tập mọi lúc.
                    </p>
                  </div>
                </div>

                <Link
                  href="/ban-co-biet"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
