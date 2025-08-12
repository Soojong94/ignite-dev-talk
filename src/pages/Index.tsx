import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Users, Briefcase, DollarSign, Cloud, Cpu, Layers } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import FloatingProgress from "@/components/FloatingProgress";

const Index = () => {
  const pageVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const { scrollYProgress } = useScroll();
  const yCircle1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCircle2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "IT 강연 | AI·클라우드 시대 생존 전략",
    description:
      "AI와 클라우드 시대, 개발자의 생존 전략을 다루는 실전 강연. 현실 체크와 클라우드 통계로 2025 취업·커리어 로드맵을 제시합니다.",
    inLanguage: "ko-KR",
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background patterns */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      {/* Floating blur circles */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(var(--blue-400)/0.25),transparent)] blur-2xl floating" style={{ y: yCircle1 }} />
      <motion.div aria-hidden className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,hsl(var(--violet-400)/0.25),transparent)] blur-2xl floating" style={{ y: yCircle2 }} />

      <FloatingProgress />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container px-6">
        {/* Hero */}
        <motion.section
          id="hero"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-[85vh] grid place-items-center"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-gradient-blue">AI와 클라우드 시대,</span> 개발자의 {" "}
              <span className="text-gradient-purple">진짜 생존 전략</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">“2025년, 코드를 짜는 시대는 끝났다”</p>
            <p className="text-sm md:text-base text-muted-foreground">현직 MSP SA 김수종</p>
            <p className="text-sm md:text-base text-muted-foreground">10개 공공기관 클라우드 인프라 관제 전문가</p>
            <p className="text-sm md:text-base text-muted-foreground">수동 4시간 → 자동 10분 (96% 업무 자동화)</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Button asChild variant="hero" size="lg"><a href="#timeline">사전 등록 알림 받기</a></Button>
              <Button asChild variant="glass" size="lg"><a href="#timeline">아젠다 보기</a></Button>
            </div>
          </div>
        </motion.section>

        {/* Reality Check */}
        <section aria-labelledby="reality" className="py-14">
          <h2 id="reality" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-green">충격적인 현실 체크</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-5">
            {/* Card 1 - Red */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--red-400)/0.3)] neon-glow-red min-h-[160px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Brain className="text-[hsl(var(--red-400))]" /> AI의 섬뜩한 진화
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">자기개선 시작</span>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    저커버그가 목격한 AI 모델들의 초기 자기개선 징후
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 - Orange */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--orange-400)/0.3)] neon-glow-orange min-h-[160px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <BarChart3 className="text-[hsl(var(--orange-400))]" /> 구글의 데이터 독점
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">500시간/분</span>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    유튜브 매분 업로드, AI 업계의 사우디아라비아
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 - Yellow */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--yellow-500)/0.3)] neon-glow-yellow min-h-[160px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Users className="text-[hsl(var(--yellow-500))]" /> 빅테크 인재 쟁탈전
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">최고급 인재</span>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    메타 초지능연구소 글로벌 AI 전문가 대거 영입
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4 - Blue */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--blue-400)/0.3)] neon-glow-blue min-h-[160px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Briefcase className="text-[hsl(var(--blue-400))]" /> 취업 시장 변화
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">채용 트렌드</span>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    네카라쿠배당토 신입공채 중단, 상시채용 전환
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 5 - Green */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--green-400)/0.3)] neon-glow-green min-h-[160px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <DollarSign className="text-[hsl(var(--green-400))]" /> 연봉 현실
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">3,000–3,500만원</span>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    신입 기준, AI/클라우드 전문가는 더 높음
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Speaker Intro */}
        <section aria-labelledby="speaker" className="py-14">
          <h2 id="speaker" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-purple">강연자 소개</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glass-card neon-glow-violet">
              <CardHeader>
                <CardTitle className="text-xl">전문 성과</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• 99.9% 서비스 안정성</li>
                  <li>• 30% 비용 절감</li>
                  <li>• 보안사고 0건</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card neon-glow-blue">
              <CardHeader>
                <CardTitle className="text-xl">기술 전문성</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• 멀티클라우드</li>
                  <li>• Kubernetes</li>
                  <li>• DevOps 파이프라인</li>
                </ul>
                <div className="pt-4">
                  <Button asChild variant="glass" size="sm">
                    <a href="https://cloudrepo.kro.kr/" target="_blank" rel="noopener noreferrer">블로그 방문하기</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Survival Strategies */}
        <section aria-labelledby="strategy" className="py-14">
          <h2 id="strategy" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-green">지금 당장 해야 할 3가지</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass-card neon-glow-blue">
              <CardHeader className="flex flex-row items-center gap-3">
                <Cloud className="text-[hsl(var(--blue-400))]" />
                <CardTitle className="text-xl">클라우드 역량 확보</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-muted-foreground">
                AWS/Azure/GCP, Docker/Kubernetes 필수
              </CardContent>
            </Card>
            <Card className="glass-card neon-glow-violet">
              <CardHeader className="flex flex-row items-center gap-3">
                <Cpu className="text-[hsl(var(--violet-400))]" />
                <CardTitle className="text-xl">AI 도구 마스터</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-muted-foreground">
                ChatGPT, Copilot, LLM 기반 기술 실전 적용
              </CardContent>
            </Card>
            <Card className="glass-card neon-glow-green">
              <CardHeader className="flex flex-row items-center gap-3">
                <Layers className="text-[hsl(var(--green-400))]" />
                <CardTitle className="text-xl">도메인 전문성 확보</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-muted-foreground">
                특정 산업/업무 도메인 깊이 파기
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Plan Timeline */}
        <section aria-labelledby="timeline" className="py-14">
          <h2 id="timeline" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-blue">실전 액션 플랜</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glass-card neon-glow-orange">
              <CardHeader>
                <CardTitle className="text-xl">단기 (1-2년)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• 기본기: 자료구조/네트워크/리눅스</li>
                  <li>• 클라우드 자격증: AWS/Azure/GCP Associate</li>
                  <li>• 실전 프로젝트: IaC, 컨테이너 기반 배포</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass-card neon-glow-yellow">
              <CardHeader>
                <CardTitle className="text-xl">중기 (3-4년)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• 시스템 아키텍트: 확장성/복원력 설계</li>
                  <li>• DevOps 전문가: CI/CD, 모니터링, SRE</li>
                  <li>• 도메인 전문가: 산업별 레퍼런스 아키텍처</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cloud Stats */}
        <section aria-labelledby="cloud-stats" className="py-10">
          <h2 id="cloud-stats" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-blue">클라우드 통계</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            <Card className="glass-card neon-glow-blue">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">글로벌 성장률</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold">
                  <StatCounter to={19} suffix="%" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-glow-green">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">한국 시장</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold">
                  <StatCounter to={7} suffix="조원" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-glow-violet">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">인력 수요</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold">
                  <StatCounter to={24} suffix="배" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-glow-orange">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">AWS 투자</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold">
                  <StatCounter to={1000} suffix="억$" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
