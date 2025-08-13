import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCounter from "@/components/StatCounter";

const CloudStatsSlide = () => {
  const stats = [
    {
      title: "글로벌 성장률",
      value: 19,
      suffix: "%",
      description: "연평균 클라우드 시장 성장률",
      color: "blue",
      glowClass: "neon-glow-blue"
    },
    {
      title: "한국 시장",
      value: 7,
      suffix: "조원",
      description: "2024년 국내 클라우드 시장 규모",
      color: "green",
      glowClass: "neon-glow-green"
    },
    {
      title: "인력 수요",
      value: 24,
      suffix: "배",
      description: "클라우드 전문가 수요 증가율",
      color: "violet",
      glowClass: "neon-glow-violet"
    },
    {
      title: "AWS 투자",
      value: 1000,
      suffix: "억$",
      description: "아시아 태평양 인프라 투자",
      color: "orange",
      glowClass: "neon-glow-orange"
    }
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-blue">클라우드 통계</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className={`glass-card ${stat.glowClass} h-full min-h-[200px] flex flex-col`}>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-sm text-muted-foreground font-medium">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center justify-center space-y-3">
                    <div className="text-4xl md:text-5xl font-bold">
                      <StatCounter 
                        to={stat.value} 
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="glass-card neon-glow-blue p-8">
              <h3 className="text-2xl font-bold text-gradient-blue mb-6">
                지금이 클라우드에 올라탈 골든타임입니다
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-gradient-green mb-3">기회 요소</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 폭발적인 시장 성장 (연 19%)</li>
                    <li>• 인력 공급 부족 (수요의 1/24)</li>
                    <li>• 정부의 디지털 뉴딜 정책</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient-orange mb-3">행동 지침</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 지금 당장 클라우드 자격증</li>
                    <li>• 실전 프로젝트 경험 쌓기</li>
                    <li>• 커뮤니티 네트워킹 활동</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudStatsSlide;