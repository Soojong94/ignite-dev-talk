import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Terminal, 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Shield, 
  Database, 
  Code 
} from "lucide-react";

const ToolsSlide = () => {
  const toolCategories = [
    {
      icon: Cloud,
      title: "클라우드 플랫폼",
      color: "blue",
      glowClass: "neon-glow-blue",
      why: "클라우드 인프라의 핵심",
      when: "모든 프로젝트의 시작점",
      alternatives: "온프레미스 → 비용·확장성 한계",
      tools: ["AWS Console", "Azure Portal", "NCP Console", "Terraform"]
    },
    {
      icon: Container,
      title: "컨테이너",
      color: "violet",
      glowClass: "neon-glow-violet",
      why: "애플리케이션 패키징과 배포 표준화",
      when: "마이크로서비스 아키텍처 구축 시",
      alternatives: "VM → 리소스 비효율성",
      tools: ["Docker", "Kubernetes", "Helm", "Rancher"]
    },
    {
      icon: GitBranch,
      title: "DevOps",
      color: "green",
      glowClass: "neon-glow-green",
      why: "개발과 운영의 자동화 연결",
      when: "지속적 통합·배포 필요 시",
      alternatives: "수동 배포 → 휴먼에러·시간 낭비",
      tools: ["Jenkins", "GitLab CI/CD", "ArgoCD", "Ansible"]
    },
    {
      icon: Monitor,
      title: "모니터링",
      color: "orange",
      glowClass: "neon-glow-orange",
      why: "시스템 안정성과 성능 보장",
      when: "프로덕션 환경 운영 시",
      alternatives: "수동 확인 → 장애 대응 지연",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      icon: Shield,
      title: "보안",
      color: "red",
      glowClass: "neon-glow-red",
      why: "데이터와 시스템 보호",
      when: "모든 단계에서 필수",
      alternatives: "무방비 → 치명적 보안 사고",
      tools: ["Vault", "SIEM", "WAF", "Security Scanner"]
    },
    {
      icon: Database,
      title: "데이터베이스",
      color: "yellow",
      glowClass: "neon-glow-yellow",
      why: "데이터 저장과 관리의 핵심",
      when: "데이터 처리가 필요한 모든 애플리케이션",
      alternatives: "파일 기반 → 데이터 무결성 문제",
      tools: ["PostgreSQL", "MongoDB", "Redis", "InfluxDB"]
    },
    {
      icon: Terminal,
      title: "개발 도구",
      color: "purple",
      glowClass: "neon-glow-purple",
      why: "개발 생산성 향상",
      when: "코드 작성과 디버깅 시",
      alternatives: "메모장 → 비효율적 개발",
      tools: ["VS Code", "Vim", "Git", "Postman"]
    },
    {
      icon: Code,
      title: "IaC",
      color: "cyan",
      glowClass: "neon-glow-cyan",
      why: "인프라 코드화로 일관성 보장",
      when: "인프라 관리 자동화 필요 시",
      alternatives: "수동 설정 → 설정 드리프트·휴먼에러",
      tools: ["Terraform", "CloudFormation", "Pulumi", "CDK"]
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
            <span className="text-gradient-purple">실무에서 자주 사용하는 도구들</span>
          </h2>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
            {toolCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${category.glowClass} h-full min-h-[320px]`}>
                    <CardHeader className="text-center pb-3">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${category.color}-400))] w-6 h-6`} />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-3">
                      {/* Why/When/Alternative */}
                      <div className="space-y-2 text-xs">
                        <div className="text-left">
                          <span className="font-semibold text-[hsl(var(--green-400))]">왜 중요한가:</span>
                          <p className="text-muted-foreground mt-1">{category.why}</p>
                        </div>
                        <div className="text-left">
                          <span className="font-semibold text-[hsl(var(--blue-400))]">언제 사용:</span>
                          <p className="text-muted-foreground mt-1">{category.when}</p>
                        </div>
                        <div className="text-left">
                          <span className="font-semibold text-[hsl(var(--red-400))]">대안 한계:</span>
                          <p className="text-muted-foreground mt-1">{category.alternatives}</p>
                        </div>
                      </div>
                      
                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold text-xs mb-2 text-foreground">주요 도구</h4>
                        <ul className="space-y-1 text-xs">
                          {category.tools.map((tool, toolIndex) => (
                            <motion.li
                              key={toolIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.3 + (index * 0.1) + (toolIndex * 0.05),
                                duration: 0.3 
                              }}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className={`w-1 h-1 rounded-full bg-[hsl(var(--${category.color}-400))] flex-shrink-0`} />
                              <span className="leading-relaxed">{tool}</span>
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
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 p-6 glass-card neon-glow-blue max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gradient-blue mb-4">실무 팁</h3>
            <div className="grid gap-4 md:grid-cols-2 text-left">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">도구보다 중요한 것:</strong> 문제 해결 사고력
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">학습 전략:</strong> 깊이 우선, 필요에 따라 확장
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">실무 접근:</strong> 작은 프로젝트부터 시작
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">커뮤니티:</strong> 오픈소스 기여와 네트워킹
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsSlide;