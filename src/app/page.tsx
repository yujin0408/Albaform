import Button from "@/components/common/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>버튼</Button>
      <Button buttonType="outline">라인</Button>
      <Button buttonType="secondary" className="w-[277px]">
        삭제하기
      </Button>
      <Button
        buttonType="secondary"
        className="text-gray-50 w-[122px] mt-3 rounded-md"
      >
        작성 취소
      </Button>
    </div>
  );
}
