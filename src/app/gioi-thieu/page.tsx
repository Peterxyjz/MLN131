"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TEAM_MEMBERS = [
  {
    name: "Ngô Bình Dương",
    id: "SE172643",
    role: "Thiết kế bố cục web",
  },
  {
    name: "Nguyễn Trịnh Nghĩa Đức",
    id: "SE172797",
    role: "Thiết kế bố cục web",
  },
  {
    name: "Trần Mỹ Khánh",
    id: "SS170136",
    role: "Soạn nội dung",
  },
  {
    name: "Ngô Thị Ngọc Ánh",
    id: "SS171096",
    role: "Soạn nội dung",
  },
  {
    name: "Nguyễn Quốc Phong",
    id: "SE172516",
    role: "Tổng kết, tìm thêm nội dung, câu hỏi",
  },
  {
    name: "Lê Quang Huy",
    id: "SE172573",
    role: "Xây dựng sản phẩm web và AI chatbot",
  },
];

export default function GioiThieu() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9] relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/ban-co-biet/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80 pointer-events-none"></div>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1510_0%,#0a0705_100%)]" />
      </div>

      <div className="relative z-10">
        <Header currentPath="/gioi-thieu" />

        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Project Introduction */}
          <section className="mb-16">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-center font-quicksand text-4xl font-bold text-[#f3c554] sm:text-5xl">
                Giới Thiệu Dự Án
              </h1>

              <div className="rounded-2xl bg-linear-to-br from-[#1a1510]/80 to-[#0a0705]/80 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h2 className="mb-4 font-quicksand text-2xl font-semibold text-[#f3c554]">
                  Về Dự Án
                </h2>
                <p className="mb-4 leading-relaxed text-white/80">
                  Đây là dự án môn học{" "}
                  <strong>
                    MLN131 - Những nguyên lý cơ bản của Chủ nghĩa Mác - Lênin
                  </strong>
                  , nhằm nghiên cứu và trình bày các nội dung về Nhà nước xã hội
                  chủ nghĩa, Dân chủ và các vấn đề liên quan đến sự phát triển
                  của Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.
                </p>
                <p className="mb-4 leading-relaxed text-white/80">
                  Website được xây dựng với mục đích cung cấp kiến thức một cách
                  sinh động, dễ tiếp cận thông qua các bài học tương tác, quiz
                  ôn tập và các thông tin bổ ích.
                </p>

                <div className="mt-6">
                  <a
                    href="https://docs.google.com/document/d/1FGmPQakjmW0rh_sDRUfe8Cg1XZYLlFpMk5LGa3Nvr78/edit?tab=t.eze3dv68kq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#f3c554] to-[#e3a645] px-6 py-3 font-semibold text-black shadow-lg shadow-[#f3c554]/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#f3c554]/40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Tài Liệu Dự Án và AI Prompt
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section>
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center font-quicksand text-3xl font-bold text-[#f3c554] sm:text-4xl">
                Thành Viên Nhóm 4
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TEAM_MEMBERS.map((member, index) => (
                  <div
                    key={member.id}
                    className="group relative overflow-hidden rounded-xl bg-linear-to-br from-[#1a1510]/60 to-[#0a0705]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl hover:ring-[#f3c554]/40"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#f3c554]/0 to-[#f3c554]/0 opacity-0 transition-opacity group-hover:from-[#f3c554]/5 group-hover:to-[#e3a645]/5 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#f3c554] to-[#e3a645] shadow-lg shadow-[#f3c554]/30">
                        <span className="font-quicksand text-2xl font-bold text-black">
                          {index + 1}
                        </span>
                      </div>

                      <h3 className="mb-2 font-quicksand text-xl font-semibold text-white">
                        {member.name}
                      </h3>

                      <p className="mb-3 font-mono text-sm text-[#f3c554]">
                        {member.id}
                      </p>

                      <p className="text-sm leading-relaxed text-white/70">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
