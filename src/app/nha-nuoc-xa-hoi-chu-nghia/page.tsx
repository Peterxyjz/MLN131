import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cards = [
  "/assets/nha-nuoc/e9d909a16ddbdee131a4f85c3bcab0ca743bb3a1.png",
  "/assets/nha-nuoc/f6541ccf7e91c7eebbed0caada6b18e37d44ada9.png",
  "/assets/nha-nuoc/d4909be95c31d175c831ed26388bc832a2dc9e60.png",
  "/assets/nha-nuoc/c3c741d7c49c8fddc75dee3ba074e9df2d17a738.png",
];

export default function SocialistStatePage() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage:
          "url('/assets/nha-nuoc/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/nha-nuoc-xa-hoi-chu-nghia" />
      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5">
            <h1 className="font-quicksand text-5xl font-bold text-[#f3c554] lg:text-[64px] lg:leading-20">
              1 NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
            </h1>
            <h2 className="font-quicksand text-3xl font-bold text-[#f3c554]">
              Sự ra đời của Nhà nước xã hội chủ nghĩa
            </h2>
            <p className="font-quicksand text-xl font-medium text-[#d9d9d9]">
              Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của
              Đảng, mang bản chất giai cấp công nhân, gắn bó với dân tộc và phục
              vụ nhân dân. Quyền lực nhà nước phải thống nhất, có sự phân công,
              phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp, tránh
              chồng chéo hoặc lạm quyền...
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/nha-nuoc/0bdfa266c75b9f1c8241978bef018799391fa4cd.png"
              alt="Nhà nước xã hội chủ nghĩa"
              width={700}
              height={600}
              className="h-auto w-full max-w-md rounded-lg shadow-2xl shadow-black"
            />
          </div>
        </section>

        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center md:order-last">
            <div className="space-y-6 text-right">
              <h2 className="font-quicksand text-3xl font-bold text-[#f3c554]">
                Bản chất của Nhà nước xã hội chủ nghĩa
              </h2>
              <div className="font-quicksand text-xl font-medium text-[#d9d9d9] space-y-6">
                <p>
                  Nhà nước XHCN là kiểu nhà nước mới, đại diện cho quyền lực và
                  lợi ích của đa số nhân dân lao động. Về kinh tế, nó gắn liền
                  với chế độ công hữu tư liệu sản xuất và quản lý vì lợi ích
                  chung. Về văn hóa - xã hội, nhà nước hướng tới công bằng, bình
                  đẳng và sự phát triển toàn diện.
                </p>
                <p>
                  Nhiệm vụ trung tâm là phát triển kinh tế, nâng cao đời sống
                  nhân dân, tạo cơ sở cho thắng lợi của chủ nghĩa xã hội.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/nha-nuoc/0dc05d56e6cc73f05c60cefde74f95e8ffdbf9f1.png"
              alt="Hồ Chí Minh cùng công nhân"
              width={700}
              height={600}
              className="h-auto w-full max-w-md shadow-2xl shadow-black"
            />
          </div>
        </section>

        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-quicksand text-3xl font-bold text-[#f3c554]">
              Sự ra đời của Nhà nước xã hội chủ nghĩa
            </h2>
            <p className="font-quicksand text-lg font-medium text-[#d9d9d9]">
              Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của
              Đảng, mang bản chất giai cấp công nhân, gắn bó với dân tộc và phục
              vụ nhân dân. Quyền lực nhà nước phải thống nhất, có sự phân công,
              phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp, tránh
              chồng chéo hoặc lạm quyền...
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/nha-nuoc/a8e0fa1016123e027a05cf51b7f6f77188a93ea7.png"
              alt="Chủ tịch bỏ phiếu"
              width={700}
              height={600}
              className="h-auto w-full max-w-md object-cover"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-quicksand text-3xl font-bold text-[#f3c554]">
            Chức năng Nhà nước xã hội chủ nghĩa
          </h2>
          <p className="mt-4 font-quicksand text-xl font-medium text-[#d9d9d9]">
            Chức năng của Nhà nước XHCN gồm đối nội, đối ngoại: chính trị, kinh
            tế, văn hóa, xã hội; vừa mang tính giai cấp vừa mang tính xã hội.
            Nhà nước XHCN coi trọng trên hết là công cụ bảo vệ cách mạng, đồng
            thời chú trọng xây dựng xã hội mới.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Hình ảnh chức năng nhà nước"
                width={400}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </section>

        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/assets/nha-nuoc/956fe3b5f2118e59e3d061758c77cd819ce18f66.png"
              alt="Phát biểu trong hội trường"
              width={700}
              height={600}
              className="h-auto w-full max-w-md"
            />
          </div>
          <div className="font-quicksand text-2xl font-medium text-[#d9d9d9] lg:text-3xl lg:leading-10">
            Trong nền dân chủ xã hội chủ nghĩa, nhân dân có điều kiện thực hiện
            đầy đủ quyền lực chính trị; được công bằng, bình đẳng lựa chọn đại
            diện, tham gia quản lý nhà nước và xã hội, đồng thời giám sát, kiểm
            soát quyền lực để ngăn chặn tha hóa. Nếu nguyên tắc dân chủ bị vi
            phạm, quyền lực nhân dân sẽ bị biến chất, dẫn đến độc tài, chuyên
            chế.
          </div>
        </section>

        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5 md:order-last">
            <h2 className="font-quicksand text-4xl font-bold text-[#f3c554]">
              Công cụ thực thi quyền làm chủ của nhân dân
            </h2>
            <div className="font-quicksand text-2xl font-medium text-[#d9d9d9] space-y-6">
              <p>
                Nhà nước XHCN là công cụ quan trọng để hiện thực hóa dân chủ,
                vừa thể chế hóa ý chí nhân dân thành pháp luật, vừa bảo vệ quyền
                lợi hợp pháp bằng cơ chế pháp luật.
              </p>
              <p>
                Theo V.I. Lênin, sự phát triển của Nhà nước XHCN gắn liền với
                việc mở rộng dân chủ, thu hút đông đảo nhân dân tham gia quản
                lý. Nếu nhà nước đánh mất bản chất, dân chủ sẽ trở nên hình
                thức, dẫn tới nguy cơ chuyên chế. Trong hệ thống chính trị XHCN,
                Nhà nước là trụ cột vững mạnh để nhân dân xây dựng và bảo vệ Tổ
                quốc dưới sự lãnh đạo của Đảng cộng sản.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/nha-nuoc/f2780d9086654d1f6434d66de101ec9fd7af9811.png"
              alt="Người dân lao động"
              width={700}
              height={600}
              className="h-auto w-full max-w-md"
            />
          </div>
        </section>
      </main>
      <Footer
        decorationSrc="/assets/nha-nuoc/111_179.svg"
        className="bg-[#121212]"
      />
    </div>
  );
}
