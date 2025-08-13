import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Cpu, Layers } from "lucide-react";

const SurvivalStrategiesSlide = () => {
  const strategies = [
    {
      icon: Cloud,
      title: "클라우드 역량 확보",
      description: "AWS/Azure/GCP, Docker/Kubernetes 필수",
      color: "blue",
      glowClass: "neon-glow-blue"
    },
    {
      icon: Cpu,
      title: "AI 도구 마스터",
      description: "ChatGPT, Copilot, LLM 기반 기술 실전 적용",
      color: "violet",
      glowClass: "neon-glow-violet"
    },
    {
      icon: Layers,
      title: "도메인 전문성 확보",
      description: "특정 산업/업무 도메인 깊이 파기",
      color: "green",
      glowClass: "neon-glow-green"
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
            <span className="text-gradient-green">지금 당장 해야 할 3가지</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${strategy.glowClass} h-full min-h-[280px] flex flex-col`}>
                    <CardHeader className="flex-1 text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="p-4 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${strategy.color}-400))] w-12 h-12`} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {strategy.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-center">
                      <p className="text-lg text-muted-foreground text-center leading-relaxed">
                        {strategy.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-xl text-gradient-blue font-semibold">
              이 3가지가 2025년 생존의 핵심입니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SurvivalStrategiesSlide;