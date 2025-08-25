import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, GraduationCap, Code, Briefcase, Users, Lightbulb } from "lucide-react";

const FAQSlide = () => {
  const faqs = [
    {
      icon: GraduationCap,
      question: "비전공자도 클라우드 분야에 진입할 수 있나요?",
      answer: "네, 충분히 가능합니다. 클라우드는 비교적 새로운 분야라 모든 사람이 어느 정도 같은 출발선에 있습니다. 중요한 것은 꾸준한 학습과 실습입니다.",
      color: "green",
      glowClass: "neon-glow-green",
      tips: ["기초 지식부터 차근차근", "온라인 강의와 실습 병행", "커뮤니티 활용하여 질문하기"]
    },
    {
      icon: Code,
      question: "어떤 프로그래밍 언어부터 시작해야 하나요?",
      answer: "Python을 추천합니다. 문법이 간단하고 클라우드 자동화, 데이터 처리, AI/ML까지 다양하게 활용할 수 있습니다. 이후 Go나 Java도 학습하면 좋습니다.",
      color: "blue",
      glowClass: "neon-glow-blue",
      tips: ["Python → Bash/Shell → Go/Java 순서", "실제 프로젝트에 적용하며 학습", "오픈소스 코드 읽기"]
    },
    {
      icon: Briefcase,
      question: "클라우드 경력이 없어도 취업이 가능한가요?",
      answer: "포트폴리오와 자격증이 있다면 신입도 충분히 기회가 있습니다. 개인 프로젝트를 통해 실무 경험을 쌓고, 기술 블로그로 학습 과정을 공유하세요.",
      color: "violet",
      glowClass: "neon-glow-violet",
      tips: ["GitHub 포트폴리오 구축", "기술 블로그 운영", "스터디/커뮤니티 참여"]
    },
    {
      icon: Users,
      question: "혼자 공부하기 어려운데 어떻게 해야 하나요?",
      answer: "온라인 커뮤니티와 스터디 그룹을 적극 활용하세요. AWS KRUG, 클라우드 개발자 모임 등에서 동료들과 함께 학습할 수 있습니다.",
      color: "orange",
      glowClass: "neon-glow-orange",
      tips: ["온라인 커뮤니티 가입", "스터디 그룹 찾기", "meetup 행사 참여"]
    },
    {
      icon: Lightbulb,
      question: "실무 경험이 없는데 어떻게 포트폴리오를 만들죠?",
      answer: "개인 프로젝트로 충분합니다. 간단한 웹 애플리케이션부터 시작해서 클라우드 서비스를 활용한 배포, 모니터링, 자동화까지 단계적으로 확장하세요.",
      color: "red",
      glowClass: "neon-glow-red",
      tips: ["작은 프로젝트부터 시작", "단계적으로 복잡도 증가", "과정을 문서화하여 공유"]
    },
    {
      icon: HelpCircle,
      question: "어떤 클라우드부터 시작하는게 좋을까요?",
      answer: "AWS를 추천합니다. 시장 점유율이 높고 자료가 풍부하며, 한국에서도 많은 기업이 사용합니다. 기초를 다진 후 Azure나 GCP를 학습하세요.",
      color: "cyan",
      glowClass: "neon-glow-cyan",
      tips: ["AWS → Azure → GCP 순서", "하나를 깊게, 나머지는 넓게", "멀티클라우드 경험 쌓기"]
    }
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8 overflow-y-auto">
      <div className="container max-w-7xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-green">자주 묻는 질문</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${faq.glowClass} h-full min-h-[350px]`}>
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${faq.color}-400))] w-7 h-7`} />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-left leading-tight">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 text-left">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-foreground">💡 실천 팁</h4>
                        <ul className="space-y-1">
                          {faq.tips.map((tip, tipIndex) => (
                            <motion.li
                              key={tipIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.5 + (index * 0.1) + (tipIndex * 0.05),
                                duration: 0.3 
                              }}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <div className={`w-1 h-1 rounded-full bg-[hsl(var(--${faq.color}-400))] mt-1.5 flex-shrink-0`} />
                              <span>{tip}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient-blue">더 많은 도움이 필요하다면</h3>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 glass-card neon-glow-blue">
                <h4 className="font-semibold mb-2 text-[hsl(var(--blue-400))]">온라인 커뮤니티</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• AWS KRUG (Korea User Group)</p>
                  <p>• 개발자 커뮤니티 (인프런, 코드스쿼드)</p>
                  <p>• Stack Overflow Korea</p>
                </div>
              </div>
              
              <div className="p-4 glass-card neon-glow-green">
                <h4 className="font-semibold mb-2 text-[hsl(var(--green-400))]">학습 플랫폼</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• AWS Skill Builder (무료)</p>
                  <p>• Microsoft Learn (무료)</p>
                  <p>• Google Cloud Skills Boost</p>
                </div>
              </div>
              
              <div className="p-4 glass-card neon-glow-violet">
                <h4 className="font-semibold mb-2 text-[hsl(var(--violet-400))]">실습 환경</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• AWS Free Tier</p>
                  <p>• Azure Free Account</p>
                  <p>• GCP Free Credits</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-6 p-6 glass-card neon-glow-orange max-w-4xl mx-auto"
          >
            <p className="text-base text-muted-foreground">
              <strong className="text-foreground">기억하세요:</strong> 
              클라우드 분야는 <span className="text-gradient-orange font-semibold">끊임없이 변화하는 분야</span>입니다. 
              완벽함보다는 <strong className="text-foreground">지속적인 학습</strong>과 
              <strong className="text-foreground">실무 적용</strong>이 더 중요합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSlide;