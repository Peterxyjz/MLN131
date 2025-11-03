import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DidYouKnowPage() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9]"
      style={{
        backgroundImage:
          "url('/assets/ban-co-biet/4a22a5e0295e170d8bbbfa3301b17b33dd1e379a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header currentPath="/ban-co-biet" />
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Image
              src="/assets/ban-co-biet/136910af473ad8296d0ad5b92f6b4e0952c37cb4.png"
              alt="Y tế số và giáo dục số"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="space-y-6 text-xl font-light leading-relaxed text-[#d9d9d9]">
            <h2 className="text-center text-2xl font-bold text-white lg:text-left">
              BẠN CÓ BIẾT?
            </h2>
            <p>
              <span className="font-semibold text-white">
                Y tế từ xa (Telehealth):
              </span>{" "}
              Nhiều bệnh viện lớn tại Việt Nam đã triển khai các nền tảng thăm
              khám, tư vấn sức khỏe từ xa. Điều này giúp người dân ở vùng sâu,
              vùng xa có thể tiếp cận chuyên gia y tế tuyến trên mà không cần di
              chuyển, tiết kiệm chi phí và thời gian.
            </p>
            <p>
              <span className="font-semibold text-white">
                Hồ sơ sức khỏe điện tử:
              </span>{" "}
              Hiện nay, nhiều tỉnh thành đang triển khai hồ sơ sức khỏe điện tử
              cho người dân. Hồ sơ này giúp bác sĩ tra cứu nhanh lịch sử khám
              chữa bệnh, tiêm chủng, từ đó đưa ra chẩn đoán và phác đồ điều trị
              chính xác hơn.
            </p>
            <p>
              <span className="font-semibold text-white">
                Giáo dục số (E-learning):
              </span>{" "}
              Các trường học đang tăng cường sử dụng các hệ thống quản lý học
              tập (LMS) và nền tảng bài giảng điện tử. Điều này hỗ trợ việc học
              tập linh hoạt, giúp học sinh tự học, ôn tập mọi lúc và giáo viên
              cá nhân hóa nội dung giảng dạy.
            </p>
            <p>
              <span className="font-semibold text-white">Kết quả:</span> Nâng
              cao chất lượng dịch vụ công trong lĩnh vực y tế và giáo dục; đảm
              bảo công bằng trong việc tiếp cận tri thức và chăm sóc sức khỏe
              cho mọi người dân Việt Nam.
            </p>
          </div>
        </section>
      </main>
      <Footer className="bg-[#694030]" />
    </div>
  );
}
