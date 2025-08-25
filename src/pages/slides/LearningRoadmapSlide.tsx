import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Target, CheckCircle } from "lucide-react";

const LearningRoadmapSlide = () => {
  const roadmapStages = [
    {
      level: "Beginner",
      duration: "3-6개월",
      hours: "주 10-15시간",
      color: "green",
      glowClass: "neon-glow-green",
      icon: BookOpen,
      objectives: [
        "Linux 기본 명령어 숙달",
        "네트워크 기초 (TCP/IP, DNS, HTTP)",
        "하나의 클라우드 플랫폼 기초",
        "Git/GitHub 활용"
      ],
      milestones: [
        "AWS/Azure 기본 서비스 5개 이상 사용",
        "간단한 웹 애플리케이션 클라우드 배포",
        "CLI를 통한 리소스 관리"
      ]
    },
    {
      level: "Intermediate",
      duration: "6-12개월",
      hours: "주 15-20시간",
      color: "blue",
      glowClass: "neon-glow-blue",
      icon: Target,
      objectives: [
        "IaC (Terraform/CloudFormation) 활용",
        "CI/CD 파이프라인 구축",
        "컨테이너 기술 (Docker/Kubernetes)",
        "모니터링 및 로깅 구현"
      ],
      milestones: [
        "Associate 레벨 자격증 취득",
        "프로덕션 환경 운영 경험",
        "자동화 스크립트 작성"
      ]
    },
    {
      level: "Advanced",
      duration: "12개월 이상",
      hours: "주 20시간+",
      color: "violet",
      glowClass: "neon-glow-violet",
      icon: CheckCircle,
      objectives: [
        "멀티클라우드 아키텍처 설계",
        "고가용성 시스템 구축",
        "비용 최적화 전략 수립",
        "팀 리딩 및 멘토링"
      ],
      milestones: [
        "Professional/Expert 자격증",
        "대규모 프로젝트 리딩",
        "기술 블로그/컨퍼런스 발표"
      ]
    }
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-blue">학습 로드맵</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {roadmapStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${stage.glowClass} h-full min-h-[500px]`}>
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${stage.color}-400))] w-8 h-8`} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gradient-purple">
                        {stage.level}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {stage.duration}
                        </div>
                        <div>{stage.hours}</div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">학습 목표</h4>
                        <ul className="space-y-2">
                          {stage.objectives.map((objective, objIndex) => (
                            <motion.li
                              key={objIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.5 + (index * 0.2) + (objIndex * 0.1),
                                duration: 0.3 
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-[hsl(var(--${stage.color}-400))] mt-2 flex-shrink-0`} />
                              <span>{objective}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">달성 지표</h4>
                        <ul className="space-y-2">
                          {stage.milestones.map((milestone, milIndex) => (
                            <motion.li
                              key={milIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.8 + (index * 0.2) + (milIndex * 0.1),
                                duration: 0.3 
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className={`w-3 h-3 text-[hsl(var(--${stage.color}-400))] mt-0.5 flex-shrink-0`} />
                              <span>{milestone}</span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 p-6 glass-card neon-glow-green max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gradient-green mb-4">성공의 핵심</h3>
            <div className="grid gap-4 md:grid-cols-2 text-left">
              <div className="space-y-2">
                <p className="text-base text-muted-foreground">
                  <strong className="text-foreground">꾸준함이 핵심:</strong> 매일 조금씩이라도 꾸준히
                </p>
                <p className="text-base text-muted-foreground">
                  <strong className="text-foreground">실습 중심:</strong> 이론보다 직접 해보기
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-base text-muted-foreground">
                  <strong className="text-foreground">커뮤니티 참여:</strong> 질문하고 공유하기
                </p>
                <p className="text-base text-muted-foreground">
                  <strong className="text-foreground">포트폴리오 구축:</strong> 학습 과정을 문서화
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningRoadmapSlide;