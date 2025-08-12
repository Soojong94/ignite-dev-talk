import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Users } from "lucide-react";
import StatCounter from "@/components/StatCounter";

const Index = () => {
  const pageVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

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
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(var(--blue-400)/0.25),transparent)] blur-2xl floating" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,hsl(var(--violet-400)/0.25),transparent)] blur-2xl floating" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container px-6">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-[80vh] grid place-items-center"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-gradient-blue">AI와 클라우드 시대,</span> 개발자의 {" "}
              <span className="text-gradient-purple">진짜 생존 전략</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">“2025년, 코드를 짜는 시대는 끝났다”</p>
            <p className="text-sm md:text-base text-muted-foreground">현직 MSP SA가 전하는 취업 시장의 진실</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Button variant="hero" size="lg">사전 등록 알림 받기</Button>
              <Button variant="glass" size="lg">아젠다 보기</Button>
            </div>
          </div>
        </motion.section>

        {/* Reality Check */}
        <section aria-labelledby="reality" className="py-14">
          <h2 id="reality" className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            <span className="text-gradient-green">충격적인 현실 체크</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 - Red */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="glass-card border-[hsl(var(--red-400)/0.3)] neon-glow-red">
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
              <Card className="glass-card border-[hsl(var(--orange-400)/0.3)] neon-glow-orange">
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
              <Card className="glass-card border-[hsl(var(--yellow-500)/0.3)] neon-glow-yellow">
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
          </div>
        </section>

        {/* Cloud Stats */}
        <section aria-labelledby="cloud-stats" className="py-14">
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
