import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const developmentSections = [
  {
    titleLeading: "CÁCH MẠNG THÁNG",
    highlight: "8",
    copy: "Nhà nước XHCN là kiểu nhà nước mới, đại diện cho quyền lực và lợi ích của đa số nhân dân lao động. Về kinh tế, nó gắn liền với chế độ công hữu tư liệu sản xuất và quản lý vì lợi ích chung. Về văn hóa - xã hội, nhà nước hướng tới công bằng, bình đẳng và sự phát triển toàn diện. Nhiệm vụ trung tâm là phát triển kinh tế, nâng cao đời sống nhân dân, tạo cơ sở cho thắng lợi của chủ nghĩa xã hội.",
    image: "/assets/dan-chu/9627b7650b8788dfe972debff1f56bd36a43e36c.png",
    reverse: false,
  },
  {
    titleLeading: "THỐNG NHẤT ĐẤT NƯỚC",
    highlight: undefined,
    copy: "Giai đoạn 1975 – 1978 đánh dấu thắng lợi của sự nghiệp thống nhất đất nước. Đến năm 1978, nước ta chính thức mang tên Cộng hòa Xã hội Chủ nghĩa Việt Nam, nhưng trong các văn kiện Đảng hầu như chưa sử dụng cụm từ “dân chủ xã hội chủ nghĩa”, mà thường nêu quan điểm “xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa” gần với “chuyên chính vô sản”. Việc xây dựng dân chủ phải gắn với đặc điểm kinh tế, xã hội, văn hoá của Việt Nam, đồng thời đi liền với hoàn thiện hệ thống pháp luật và kỷ cương, nhưng đây vẫn là vấn đề chưa được đặt ra một cách rõ ràng. Nhiều lĩnh vực liên quan mật thiết đến dân chủ xã hội chủ nghĩa như dân sinh, dân trí, dân quyền... chưa được đặt đúng vị trí, chưa được giải quyết thỏa đáng để thúc đẩy việc xây dựng nền dân chủ xã hội chủ nghĩa.",
    image: "/assets/dan-chu/279ac6d45618567a5d837b177b274e8ac8f5cb57.png",
    reverse: true,
  },
  {
    titleLeading: "ĐỔI MỚI",
    highlight: undefined,
    copy: "Đại hội VI của Đảng (năm 1986) đề ra đường lối đổi mới toàn diện đất nước, trong đó nhấn mạnh phát huy dân chủ để tạo ra động lực mạnh mẽ cho phát triển đất nước. Đại hội khẳng định: “Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng ‘lấy dân làm gốc’, xây dựng và phát huy quyền làm chủ của nhân dân lao động. “Cách mạng là sự nghiệp của quần chúng” – ở đâu nhân dân lao động có ý thức làm chủ và được làm chủ thực sự, ở đó sẽ xuất hiện phong trào cách mạng mạnh mẽ.”",
    image: "/assets/dan-chu/a8e0fa1016123e027a05cf51b7f6f77188a93ea7.png",
    reverse: false,
  },
];

const democracyPillars = [
  {
    title: "Dân là gốc, là chủ, làm chủ",
    paragraphs: [
      "Dân chủ phải được thực hiện trong đời sống thực tiễn ở tất cả các cấp, mọi lĩnh vực của đời sống xã hội: về lĩnh vực kinh tế, chính trị, văn hóa, xã hội. Kế thừa tư tưởng dân chủ trong lịch sử và trực tiếp là tư tưởng dân chủ của Hồ Chí Minh, từ khi trước đến nay, nhất là trong thời kỳ đổi mới, Đảng luôn xác định xây dựng nền dân chủ XHCN vừa là mục tiêu, vừa là động lực phát triển xã hội, là bản chất của chế độ XHCN. Dân chủ gắn liền với kỷ cương và phải được thể chế hóa bằng pháp luật.",
      "“Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều là của dân. Công cuộc đổi mới, xây dựng là trách nhiệm của dân. Sự nghiệp kháng chiến, kiến quốc là công việc của dân. Chính quyền từ xã đến Chính phủ Trung ương do dân cử ra. Đoàn thể từ Trung ương đến xã do dân tổ chức nên. Nói tóm lại, quyền hành và lực lượng đều ở nơi dân”.",
    ],
    image: "/assets/dan-chu/f2780d9086654d1f6434d66de101ec9fd7af9811.png",
    reverse: false,
  },
  {
    title: "Dân chủ là mục tiêu của chế độ XHCN",
    paragraphs: [
      "Trong 8 đặc trưng của chủ nghĩa xã hội Việt Nam, đặc trưng tổng quát là: “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.” Khi phát huy dân chủ, nhà nước có thể huy động sức mạnh và trí tuệ của nhân dân, góp phần giải quyết các vấn đề như chống tham nhũng, tiêu cực, thu hút nhân tài.",
    ],
    image: "/assets/dan-chu/8791afd3ba4de05f2c9dee9e9f4ec1e45bb2a292.png",
    reverse: false,
  },
  {
    title: "Dân chủ là động lực để xây dựng chế độ mới",
    paragraphs: [
      "Xây dựng xã hội dân chủ là mục tiêu lâu dài. Dân chủ rộng rãi, tăng cường giám sát, minh bạch thông tin, cùng củng cố lòng tin của nhân dân.",
    ],
    image: "/assets/dan-chu/1a558fa5d99c1da82cc259ff07b6ec63aef0d6e6.png",
    reverse: false,
  },
  {
    title: "Dân chủ phải gắn với pháp luật",
    paragraphs: [
      "Dân chủ không phải tự do vô chính phủ, mà phải trong khuôn khổ pháp luật, tôn trọng kỷ luật xã hội, với nguyên tắc nền tảng là thượng tôn pháp luật.",
    ],
    image: "/assets/dan-chu/bfbb817d6305c19bb777136fb63a85058033c623.png",
    reverse: true,
  },
  {
    title: "Dân chủ là bản chất của chế độ XHCN",
    paragraphs: [
      "Nhân dân là chủ thể của quyền lực, còn Nhà nước và các cơ quan công quyền có trách nhiệm phục vụ nhân dân, đồng thời phải chịu sự giám sát của nhân dân để bảo đảm tính minh bạch, công bằng và vì lợi ích chung.",
    ],
    image: "/assets/dan-chu/0dc05d56e6cc73f05c60cefde74f95e8ffdbf9f1.png",
    reverse: true,
  },
];

export default function DemocracyPage() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage: "url('/assets/dan-chu/dark-bg.png')",
        backgroundSize: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/dan-chu-vs-nha-nuoc-xa-hoi-chu-nghia" />
      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <div className="text-center">
            <h1 className="font-quicksand text-5xl font-bold text-[#f3c554]">
              2. DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM
            </h1>
          </div>
          <div className="mt-20 grid items-center gap-16 md:grid-cols-2">
            <Image
              src="/assets/dan-chu/e8073081f13a6b8f416dbaef61946c4e9bcb0329.png"
              alt="Phát biểu trước nhân dân"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg shadow-2xl"
            />
            <div className="text-right">
              <h2 className="font-quicksand text-3xl font-bold text-[#f3c554]">
                SỰ RA ĐỜI, PHÁT TRIỂN
              </h2>
              <p className="mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]">
                Chế độ dân chủ nhân dân ở nước ta được xác lập sau Cách mạng
                Tháng Tám năm 1945.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-20">
          {developmentSections.map((section) => (
            <div
              key={section.titleLeading}
              className="grid items-center gap-16 md:grid-cols-2"
            >
              {section.reverse ? (
                <Image
                  src={section.image}
                  alt={section.titleLeading}
                  width={900}
                  height={600}
                  className="order-last h-auto w-full rounded-lg shadow-2xl md:order-first"
                />
              ) : (
                <Image
                  src={section.image}
                  alt={section.titleLeading}
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              )}
              <div className={section.reverse ? "md:order-last" : ""}>
                <div className="flex flex-wrap items-end gap-4">
                  <h3 className="font-quicksand text-4xl font-bold text-[#f3c554]">
                    {section.titleLeading}
                  </h3>
                  {section.highlight ? (
                    <span className="font-quicksand text-[200px] font-bold leading-none text-[#f3c554]">
                      {section.highlight}
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]">
                  {section.copy}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-24">
          <div className="text-center">
            <h2 className="font-quicksand text-5xl font-bold text-[#f3c554]">
              BẢN CHẤT CỦA NỀN DÂN CHỦ XHCN Ở VIỆT NAM
            </h2>
            <div className="mt-16 grid items-center gap-16 md:grid-cols-2">
              <p className="font-quicksand text-3xl font-medium text-[#d9d9d9]">
                Dân chủ xã hội chủ nghĩa là quyền lực thuộc về nhân dân, thực
                hiện quyền làm chủ trên cơ sở gắn với lợi ích chung.
              </p>
              <Image
                src="/assets/dan-chu/06c024ebbcf0eb3a1261c190bfcbefe2c67b3e6c.png"
                alt="Lãnh đạo và nhân dân"
                width={900}
                height={600}
                className="h-auto w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {democracyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="grid items-center gap-16 md:grid-cols-2"
            >
              {pillar.reverse ? (
                <div className="md:order-last">
                  <div className="text-right">
                    <h3 className="font-quicksand text-5xl font-bold text-[#f3c554]">
                      {pillar.title}
                    </h3>
                    <div className="mt-6 space-y-6 font-quicksand text-2xl font-medium text-[#d9d9d9]">
                      {pillar.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-quicksand text-5xl font-bold text-[#f3c554]">
                    {pillar.title}
                  </h3>
                  <div className="mt-6 space-y-6 font-quicksand text-2xl font-medium text-[#d9d9d9]">
                    {pillar.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={900}
                height={600}
                className={
                  pillar.reverse
                    ? "h-auto w-full rounded-lg shadow-2xl"
                    : "order-last h-auto w-full rounded-lg shadow-2xl"
                }
              />
            </div>
          ))}

          <div className="grid items-center gap-16 md:grid-cols-2">
            <Image
              src="/assets/dan-chu/c3785689e2f97c3392370180fa5313b40b256b5e.png"
              alt="Làm việc trong hội nghị"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg shadow-2xl"
            />
            <div className="space-y-4 font-quicksand text-3xl font-medium text-[#d9d9d9]">
              <h3 className="text-5xl font-bold text-[#f3c554]">
                Thực hiện phương châm:
              </h3>
              <p>
                <span className="font-bold">Dân biết:</span> Nhà nước công khai,
                minh bạch thông tin để nhân dân được biết.
              </p>
              <p>
                <span className="font-bold">Dân bàn:</span> Nhân dân tham gia
                bàn bạc, góp ý.
              </p>
              <p>
                <span className="font-bold">Dân làm:</span> Nhân dân tham gia
                thực hiện, xây dựng.
              </p>
              <p>
                <span className="font-bold">Dân kiểm tra:</span> Nhân dân giám
                sát, đánh giá và bãi miễn cán bộ nếu không làm tròn trách nhiệm.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-24">
          <div className="text-center">
            <h2 className="font-quicksand text-5xl font-bold text-[#f3c554]">
              Trong bối cảnh Việt Nam, bản chất của dân chủ xã hội chủ nghĩa
              được thể hiện thông qua hai hình thức cơ bản
            </h2>
            <div className="mt-16 space-y-20">
              <div className="grid items-center gap-16 md:grid-cols-2">
                <div className="text-right">
                  <h3 className="font-quicksand text-3xl font-bold text-[#f3c554]">
                    Dân chủ trực tiếp
                  </h3>
                  <p className="mt-4 font-quicksand text-xl font-medium text-[#d9d9d9]">
                    Dân chủ trực tiếp cho phép nhân dân trực tiếp tham gia vào
                    quá trình quyết định những vấn đề quan trọng của đất nước và
                    cộng đồng. Điều này thể hiện qua các hoạt động như: trưng
                    cầu ý dân (ví dụ về Hiến pháp năm 2013), việc cử tri trực
                    tiếp bầu Quốc hội và Hội đồng nhân dân các cấp, hay góp ý
                    kiến đối với các dự thảo luật thông qua Cổng thông tin điện
                    tử của Chính phủ.
                  </p>
                </div>
                <Image
                  src="/assets/dan-chu/bef711b2f2b3f6d326764afd565299aa9c1f6fc6.png"
                  alt="Dân chủ trực tiếp"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="grid items-center gap-16 md:grid-cols-2">
                <Image
                  src="/assets/dan-chu/66c46c737591bcefff629ba41c79cbc16433c35a.png"
                  alt="Dân chủ gián tiếp"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
                <div>
                  <h3 className="font-quicksand text-3xl font-bold text-[#f3c554]">
                    Dân chủ gián tiếp
                  </h3>
                  <p className="mt-4 font-quicksand text-xl font-medium text-[#d9d9d9]">
                    Dân chủ gián tiếp được thực hiện thông qua cơ chế đại diện,
                    khi nhân dân bầu ra đại biểu Quốc hội và Hội đồng nhân dân
                    để thay mặt họ quyết định những vấn đề chung. Quốc hội có
                    trách nhiệm ban hành pháp luật, quyết định ngân sách và giám
                    sát hoạt động của Chính phủ. Đây là hình thức phổ biến trong
                    các nhà nước hiện đại, bảo đảm tính hiệu quả của quản lý xã
                    hội.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#121212]/80 p-8 shadow-2xl">
            <h2 className="font-quicksand text-6xl font-bold text-[#f3c554]">
              2.1. Nhà nước pháp quyền XHCN ở Việt Nam
            </h2>
            <p className="mt-8 font-quicksand text-3xl font-medium leading-tight text-[#d9d9d9]">
              Nhà nước pháp quyền là nhà nước tôn trọng và tuân thủ pháp luật
              một cách tuyệt đối, đặt Hiến pháp và pháp luật ở vị trí tối cao,
              bảo đảm mọi công dân bình đẳng trước pháp luật và có điều kiện để
              phát huy tự do, năng lực cá nhân. Trong mô hình này, bộ máy nhà
              nước được phân công, phối hợp và kiểm soát quyền lực, hoạt động
              dựa trên nguyên tắc vì lợi ích của nhân dân. Trong bối cảnh đổi
              mới, Đảng ta xác định xây dựng Nhà nước pháp quyền xã hội chủ
              nghĩa của dân, do dân, vì dân. Nhà nước quản lý xã hội bằng pháp
              luật; mọi cơ quan, tổ chức, cán bộ, công chức và công dân đều có
              nghĩa vụ tuân thủ Hiến pháp và pháp luật.
            </p>
            <div className="mt-12 grid items-start gap-16 md:grid-cols-2">
              <ul className="list-disc space-y-4 pl-6 font-quicksand text-3xl font-medium text-[#d9d9d9]">
                <li>Đề cao vai trò tối thượng của Hiến pháp và pháp luật.</li>
                <li>
                  Bảo đảm quyền con người, quyền và nghĩa vụ của công dân.
                </li>
                <li>
                  Bộ máy nhà nước phải tập trung, thống nhất nhưng có phân công
                  rõ ràng, phân cấp hợp lý để tránh lạm quyền.
                </li>
                <li>
                  Nhà nước tôn trọng và lắng nghe nhân dân, chịu sự giám sát của
                  nhân dân.
                </li>
                <li>
                  Có cơ chế kiểm soát, ngăn ngừa và xử lý các hành vi tham
                  nhũng, quan liêu, lộng quyền.
                </li>
              </ul>
              <Image
                src="/assets/dan-chu/1919f3e744b5b8b8a057058573ec1806109698d1.png"
                alt="Lễ duyệt binh"
                width={900}
                height={600}
                className="h-auto w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-quicksand text-5xl font-bold text-[#f3c554]">
              Đặc trưng của Nhà nước pháp quyền XHCN ở Việt Nam
            </h2>
            <div className="mt-16 grid items-center gap-16 md:grid-cols-2">
              <Image
                src="/assets/dan-chu/f4cad9e0764e6021f5c066ab87417995980a4e3a.png"
                alt="Gia đình Việt Nam"
                width={900}
                height={600}
                className="h-auto w-full rounded-lg shadow-2xl"
              />
              <ol className="list-decimal space-y-4 pl-6 text-left font-quicksand text-2xl font-medium text-[#d9d9d9]">
                <li>Nhà nước của nhân dân, do nhân dân, vì nhân dân.</li>
                <li>
                  Nhà nước được tổ chức và hoạt động dựa trên cơ sở Hiến pháp và
                  pháp luật.
                </li>
                <li>
                  Quyền lực nhà nước là thống nhất, có sự phân công rõ ràng, có
                  cơ chế phối hợp nhịp nhàng, và kiểm soát giữa các cơ quan lập
                  pháp, hành pháp và tư pháp.
                </li>
                <li>Nhà nước phải do Đảng Cộng sản lãnh đạo.</li>
                <li>
                  Nhà nước tôn trọng quyền con người, coi con người là chủ thể,
                  là trung tâm của sự phát triển.
                </li>
                <li>
                  Tổ chức và hoạt động của bộ máy nhà nước theo nguyên tắc tập
                  trung dân chủ, có sự phân công, phân cấp, phối hợp và kiểm
                  soát lẫn nhau, nhưng bảo đảm quyền lực là thống nhất.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-[#e3a645] px-5 py-2 text-sm font-semibold text-black">
            <span>Muốn hiểu rõ hơn?</span>
            <Link className="underline" href="/nha-nuoc-xa-hoi-chu-nghia">
              Tìm hiểu về Nhà nước pháp quyền XHCN
            </Link>
          </div>
        </section>
      </main>
      <Footer
        decorationSrc="/assets/dan-chu/71_83.svg"
        className="bg-[#121212]"
      />
    </div>
  );
}
