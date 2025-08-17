import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Target } from "lucide-react";

const ActionPlanSlide = () => {
  const plans = [
    {
      icon: Calendar,
      title: "단기 (1-2년)",
      color: "orange",
      glowClass: "neon-glow-orange",
      items: [
        "기본기: 자료구조/네트워크/리눅스",
        "클라우드 자격증: AWS/Azure/GCP Associate",
        "실전 프로젝트: IaC, 컨테이너 기반 배포"
      ]
    },
    {
      icon: Target,
      title: "중기 (3-4년)",
      color: "yellow",
      glowClass: "neon-glow-yellow",
      items: [
        "시스템 아키텍트: 확장성/복원력 설계",
        "DevOps 전문가: CI/CD, 모니터링, SRE",
        "도메인 전문가: 산업별 레퍼런스 아키텍처"
      ]
    }
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-blue">실전 액션 플랜</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${plan.glowClass} h-full min-h-[320px]`}>
                    <CardHeader className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="p-3 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${plan.color}-400))] w-10 h-10`} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {plan.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-4 text-left">
                        {plan.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.5 + (index * 0.2) + (itemIndex * 0.1),
                              duration: 0.3 
                            }}
                            className="flex items-start gap-3 text-base text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-[hsl(var(--${plan.color}-400))] mt-2 flex-shrink-0`} />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 p-4 glass-card neon-glow-violet max-w-4xl mx-auto"
          >
            <div className="text-sm text-muted-foreground mb-3">
              <strong className="text-gradient-violet">SRE (Site Reliability Engineering):</strong> 서비스 안정성과 확장성을 보장하는 엔지니어링 접근법
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 p-6 glass-card neon-glow-green max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gradient-green mb-4">핵심 포인트</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">단기적으로</strong> 클라우드 기본기를 다지고, 
              <strong className="text-foreground"> 중기적으로</strong> 시스템 설계와 도메인 전문성을 키워 
              <span className="text-gradient-blue font-semibold"> AI 시대에 대체 불가능한 개발자</span>가 되어야 합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionPlanSlide;