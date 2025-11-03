import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const steps = [
  {
    title: "Thứ nhất",
    copy: "Xây dựng và hoàn thiện thể chế kinh tế thị trường định hướng XHCN. Đồng thời, cần hoàn thiện hệ thống pháp luật, đặc biệt về các loại tài sản mới như sở hữu trí tuệ... Song song với đó là cải cách hành chính mạnh mẽ, đơn giản hóa thủ tục và nâng cao hiệu quả môi trường kinh doanh.",
    image: "/assets/phat-huy/f060079f6dbec6c25e2075978e706f0a029176ee.png",
    reverse: false,
  },
  {
    title: "Thứ hai",
    copy: "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh, coi đây là điều kiện tiên quyết để phát triển nền dân chủ. Đồng thời, thực hiện nguyên tắc tập trung dân chủ, tự phê bình và phê bình, bảo đảm sự lãnh đạo đúng đắn của Đảng trong tiến trình xây dựng chủ nghĩa xã hội.",
    image: "/assets/phat-huy/1408f93e8b788c2a7164f27ebfc9b9999ae81968.png",
    reverse: true,
  },
  {
    title: "Thứ ba",
    copy: "Xây dựng Nhà nước pháp quyền XHCN vững mạnh. Nhà nước đặt dưới sự lãnh đạo của Đảng, thực thi quyền dân chủ của nhân dân trên mọi lĩnh vực. Tất cả chính sách, pháp luật phải xuất phát từ nguyện vọng, lợi ích chính đáng của nhân dân, bảo đảm tự do, danh dự và quyền công dân.",
    image: "/assets/phat-huy/a4795dc0fb24dd443c7dd4e0703ad7ec96b77b07.png",
    reverse: false,
    largeTitle: true,
  },
  {
    title: "Thứ tư",
    copy: "Nâng cao vai trò của các tổ chức chính trị - xã hội trong giám sát và phản biện xã hội. Các tổ chức này cần đổi mới hoạt động và bảo vệ quyền lợi hợp pháp của nhân dân, góp phần xây dựng Đảng, bảo vệ chính quyền và tăng cường khối đại đoàn kết toàn dân tộc.",
    image: "/assets/phat-huy/21745e401d476d597bd69f3b2e9b618e6901ebe4.png",
    reverse: true,
    emphasized: true,
  },
  {
    title: "Thứ năm",
    copy: "Hoàn thiện cơ chế giám sát, công khai minh bạch thông tin. Song song đó, nâng cao dân trí và văn hóa pháp luật, giúp người dân có đủ hiểu biết và năng lực tham gia quản lý xã hội.",
    image: "/assets/phat-huy/1abfa7dba561ca8914639564e2bdd1c083e55833.png",
    reverse: false,
  },
];

const ruleSections = [
  {
    title: "Một",
    copy: "Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng là yêu cầu căn bản. Nhà nước pháp quyền ở Việt Nam mang bản chất giai cấp công nhân, phục vụ lợi ích của nhân dân. Việc tổ chức quyền lực phải bảo đảm tính thống nhất, đồng thời có sự phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp, tránh chồng chéo hoặc lạm quyền.",
    image: "/assets/phat-huy/0036c937903d35f66cc69b52fca668c06cddf1f8.png",
    reverse: true,
  },
  {
    title: "Hai",
    copy: "Đẩy mạnh cải cách thể chế và đổi mới phương thức hoạt động của Nhà nước. Quốc hội cần được kiện toàn để thực sự phát huy vai trò cơ quan quyền lực cao nhất... Nền hành chính phải dân chủ, trong sạch, hiện đại... Với dịch vụ công, cần đẩy mạnh xã hội hóa theo cơ chế thị trường định hướng XHCN để nâng cao chất lượng và giảm gánh nặng ngân sách.",
    image: "/assets/phat-huy/2f1706022f9d71e1f390cf6cb55a0a1feeef86e7.png",
    reverse: false,
  },
  {
    title: "Ba",
    copy: "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực là điều kiện tiên quyết để xây dựng bộ máy tinh gọn và hiệu quả. Cán bộ phải vững vàng chính trị, đạo đức trong sáng, năng lực lãnh đạo tốt; được đãi ngộ hợp lý để khuyến khích cống hiến, có cơ chế loại bỏ những người yếu kém, vi phạm kỷ luật hoặc đạo đức công vụ.",
    image: "/assets/phat-huy/f79159de52920b9d05f46e0ff2f6c2471b6294df.png",
    reverse: true,
    largeTitle: true,
  },
  {
    title: "Bốn",
    copy: "Đẩy mạnh phòng, chống tham nhũng, lãng phí và thực hành tiết kiệm. Cần hoàn thiện thể chế, cải cách hành chính để ngăn ngừa và xử lý kịp thời; bảo vệ người đấu tranh chống tham nhũng; áp dụng chế tài nghiêm khắc với vi phạm, đồng thời phát huy tinh thần tiết kiệm và trách nhiệm trong sử dụng nguồn lực quốc gia.",
    image: "/assets/phat-huy/a2e9d8e09812571adb62ae8182f0001348ff7040.png",
    reverse: false,
    largeTitle: true,
  },
];

export default function PromoteDemocracyPage() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage:
          "url('/assets/phat-huy/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/phat-huy-va-xay-dung" />
      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-quicksand text-4xl font-bold text-[#f3c554] leading-tight md:text-5xl">
              3. Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay
            </h1>
            <p className="mt-8 font-quicksand text-xl font-medium text-[#d9d9d9] lg:text-right">
              Hiện nay, để phát huy dân chủ xã hội chủ nghĩa, Việt Nam cần tập
              trung vào các nhiệm vụ trọng tâm sau:
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/phat-huy/8a3eaafb85632e50cddab76e445c89a63b675e5a.png"
              alt="Tổng bí thư trong vòng tay nhân dân"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg shadow-2xl"
            />
          </div>
        </section>

        <section className="space-y-24">
          {steps.map((step) => (
            <div
              key={step.title}
              className="grid items-center gap-16 lg:grid-cols-2"
            >
              {step.reverse ? (
                <div className="lg:order-last">
                  <div
                    className={
                      step.emphasized
                        ? "rounded-lg bg-[#121212] p-8 text-right shadow-2xl"
                        : "rounded-lg bg-[#121212] p-8 shadow-2xl"
                    }
                  >
                    <h2
                      className={
                        step.largeTitle
                          ? "font-quicksand text-[96px] font-bold leading-none text-[#f3c554]"
                          : "font-quicksand text-6xl font-bold text-[#f3c554]"
                      }
                    >
                      {step.title}
                    </h2>
                    <p className="mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={900}
                    height={600}
                    className="h-auto w-full rounded-lg shadow-2xl"
                  />
                </div>
              )}

              {step.reverse ? (
                <Image
                  src={step.image}
                  alt={step.title}
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              ) : (
                <div className="rounded-lg bg-[#121212] p-8 shadow-2xl">
                  <h2
                    className={
                      step.largeTitle
                        ? "font-quicksand text-[96px] font-bold leading-none text-[#f3c554]"
                        : "font-quicksand text-6xl font-bold text-[#f3c554]"
                    }
                  >
                    {step.title}
                  </h2>
                  <p className="mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]">
                    {step.copy}
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="font-quicksand text-4xl font-bold text-[#f3c554]">
            3.1 Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa hiện nay
          </h2>
        </section>

        <section className="space-y-24">
          {ruleSections.map((rule) => (
            <div
              key={rule.title}
              className="grid items-center gap-16 lg:grid-cols-2"
            >
              {rule.reverse ? (
                <div className="rounded-lg bg-[#121212] p-8 text-right shadow-2xl">
                  <h3
                    className={
                      rule.largeTitle
                        ? "font-quicksand text-[96px] font-bold leading-none text-[#f3c554]"
                        : "font-quicksand text-6xl font-bold text-[#f3c554]"
                    }
                  >
                    {rule.title}
                  </h3>
                  <p
                    className={
                      rule.largeTitle
                        ? "mt-6 font-quicksand text-3xl font-medium leading-relaxed text-[#d9d9d9]"
                        : "mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]"
                    }
                  >
                    {rule.copy}
                  </p>
                </div>
              ) : (
                <Image
                  src={rule.image}
                  alt={rule.title}
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              )}

              {rule.reverse ? (
                <Image
                  src={rule.image}
                  alt={rule.title}
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              ) : (
                <div className="rounded-lg bg-[#121212] p-8 shadow-2xl">
                  <h3
                    className={
                      rule.largeTitle
                        ? "font-quicksand text-[96px] font-bold leading-none text-[#f3c554]"
                        : "font-quicksand text-6xl font-bold text-[#f3c554]"
                    }
                  >
                    {rule.title}
                  </h3>
                  <p
                    className={
                      rule.largeTitle
                        ? "mt-6 font-quicksand text-3xl font-medium leading-relaxed text-[#d9d9d9]"
                        : "mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]"
                    }
                  >
                    {rule.copy}
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer className="bg-[#694030]" />
    </div>
  );
}
