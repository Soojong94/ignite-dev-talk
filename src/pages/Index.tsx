import PresentationContainer from "@/components/PresentationContainer";
import HeroSlide from "@/pages/slides/HeroSlide";
import RealityCheckSlide from "@/pages/slides/RealityCheckSlide";
import SpeakerIntroSlide from "@/pages/slides/SpeakerIntroSlide";
import SurvivalStrategiesSlide from "@/pages/slides/SurvivalStrategiesSlide";
import ActionPlanSlide from "@/pages/slides/ActionPlanSlide";
import CloudStatsSlide from "@/pages/slides/CloudStatsSlide";
import ToolsSlide from "@/pages/slides/ToolsSlide";

const Index = () => {
  const slides = [
    <HeroSlide />,
    <SpeakerIntroSlide />,
    <RealityCheckSlide />,
    <SurvivalStrategiesSlide />,
    <ActionPlanSlide />,
    <CloudStatsSlide />,
    <ToolsSlide />
  ];

  const slideTitles = [
    "AI와 클라우드 시대 개발자 생존 전략",
    "강연자 소개",
    "충격적인 현실 체크",
    "지금 당장 해야 할 3가지",
    "실전 액션 플랜",
    "클라우드 통계",
    "실무에서 자주 사용하는 도구들"
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "IT 강연 | AI·클라우드 시대 생존 전략",
    description:
      "AI와 클라우드 시대, 개발자의 생존 전략을 다루는 실전 강연. 현실 체크와 클라우드 통계로 2025 취업·커리어 로드맵을 제시합니다.",
    inLanguage: "ko-KR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PresentationContainer children={slides} titles={slideTitles} />
    </>
  );
};

export default Index;
