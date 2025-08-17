import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Users, Briefcase } from "lucide-react";

const RealityCheckSlide = () => {
  const cards = [
    {
      icon: Brain,
      title: "AI의 섬뜩한 진화",
      stat: "자기개선 시작",
      description: "저커버그가 목격한 AI 모델들의 초기 자기개선 징후",
      color: "red",
      glowClass: "neon-glow-red"
    },
    {
      icon: BarChart3,
      title: "구글의 데이터 독점",
      stat: "500시간/분",
      description: "유튜브 매분 업로드, AI 업계의 사우디아라비아",
      color: "orange",
      glowClass: "neon-glow-orange"
    },
    {
      icon: Users,
      title: "빅테크 인재 쟁탈전",
      stat: "최고급 인재",
      description: "메타 초지능연구소 글로벌 AI 전문가 대거 영입",
      color: "yellow",
      glowClass: "neon-glow-yellow"
    },
    {
      icon: Briefcase,
      title: "취업 시장 변화",
      stat: "채용 트렌드",
      description: "네카라쿠배당토 신입공채 중단, 상시채용 전환",
      color: "blue",
      glowClass: "neon-glow-blue"
    },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-green">충격적인 현실 체크</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card className={`glass-card border-[hsl(var(--${card.color}-400)/0.3)] ${card.glowClass} h-full min-h-[200px] flex flex-col`}>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <Icon className={`text-[hsl(var(--${card.color}-400))] w-8 h-8`} />
                        <span className="text-sm text-muted-foreground font-medium">
                          {card.stat}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold leading-tight">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RealityCheckSlide;