import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Shield, BarChart3, Star } from "lucide-react";

const ProjectGuideSlide = () => {
  const projects = [
    {
      title: "정적 웹사이트 호스팅",
      difficulty: "Beginner",
      icon: Code,
      color: "green",
      glowClass: "neon-glow-green",
      duration: "1-2주",
      tech: ["S3", "CloudFront", "Route 53", "GitHub Actions"],
      outcomes: [
        "AWS 기본 서비스 이해",
        "DNS 및 CDN 개념 학습",
        "CI/CD 파이프라인 기초"
      ]
    },
    {
      title: "컨테이너 기반 웹 애플리케이션",
      difficulty: "Intermediate",
      icon: Server,
      color: "blue",
      glowClass: "neon-glow-blue",
      duration: "3-4주",
      tech: ["Docker", "ECS/EKS", "ALB", "RDS", "Terraform"],
      outcomes: [
        "컨테이너 오케스트레이션",
        "로드 밸런싱 구현",
        "IaC 도구 활용"
      ]
    },
    {
      title: "마이크로서비스 아키텍처",
      difficulty: "Advanced",
      icon: Shield,
      color: "violet",
      glowClass: "neon-glow-violet",
      duration: "6-8주",
      tech: ["Kubernetes", "Istio", "Prometheus", "Grafana", "ArgoCD"],
      outcomes: [
        "서비스 메시 구현",
        "종합적인 모니터링",
        "GitOps 방식 배포"
      ]
    },
    {
      title: "데이터 파이프라인 구축",
      difficulty: "Intermediate",
      icon: BarChart3,
      color: "orange",
      glowClass: "neon-glow-orange",
      duration: "4-5주",
      tech: ["Lambda", "Kinesis", "EMR", "Redshift", "QuickSight"],
      outcomes: [
        "서버리스 데이터 처리",
        "실시간 스트리밍",
        "데이터 시각화"
      ]
    },
    {
      title: "멀티클라우드 DR 솔루션",
      difficulty: "Advanced",
      icon: Star,
      color: "red",
      glowClass: "neon-glow-red",
      duration: "8-10주",
      tech: ["Multi-Cloud", "Ansible", "Vault", "Backup", "Monitoring"],
      outcomes: [
        "재해 복구 전략",
        "멀티클라우드 관리",
        "보안 및 컴플라이언스"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-[hsl(var(--green-400))]";
      case "Intermediate": return "text-[hsl(var(--blue-400))]";
      case "Advanced": return "text-[hsl(var(--violet-400))]";
      default: return "text-muted-foreground";
    }
  };

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
            <span className="text-gradient-purple">실습 프로젝트 가이드</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
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
                  <Card className={`glass-card ${project.glowClass} h-full min-h-[380px]`}>
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${project.color}-400))] w-7 h-7`} />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-3 text-sm">
                        <span className={`font-semibold ${getDifficultyColor(project.difficulty)}`}>
                          {project.difficulty}
                        </span>
                        <span className="text-muted-foreground">
                          {project.duration}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 text-left">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-foreground">기술 스택</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: 0.5 + (index * 0.1) + (techIndex * 0.05),
                                duration: 0.3 
                              }}
                              className={`px-2 py-1 text-xs rounded-full bg-[hsl(var(--${project.color}-400)_/_0.2)] text-[hsl(var(--${project.color}-400))]`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-foreground">학습 성과</h4>
                        <ul className="space-y-1">
                          {project.outcomes.map((outcome, outcomeIndex) => (
                            <motion.li
                              key={outcomeIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.7 + (index * 0.1) + (outcomeIndex * 0.05),
                                duration: 0.3 
                              }}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <div className={`w-1 h-1 rounded-full bg-[hsl(var(--${project.color}-400))] mt-1.5 flex-shrink-0`} />
                              <span>{outcome}</span>
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
            className="mt-8 space-y-4"
          >
            <div className="p-6 glass-card neon-glow-blue max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-gradient-blue mb-4">프로젝트 선택 가이드</h3>
              <div className="grid gap-4 md:grid-cols-3 text-left text-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong className="text-[hsl(var(--green-400))]">Beginner:</strong> 클라우드 기본 서비스 익히기
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong className="text-[hsl(var(--blue-400))]">Intermediate:</strong> 자동화와 통합 구현
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong className="text-[hsl(var(--violet-400))]">Advanced:</strong> 복잡한 시스템 설계
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 glass-card neon-glow-green max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">💡 성공 팁:</strong> 
                각 프로젝트를 GitHub에 문서화하고, 블로그나 기술 발표로 공유하세요. 
                포트폴리오는 <span className="text-gradient-green font-semibold">코드보다 문제 해결 과정</span>이 더 중요합니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGuideSlide;