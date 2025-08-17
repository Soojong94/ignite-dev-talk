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
      tools: ["AWS Console", "Azure Portal", "NCP Console", "Terraform"]
    },
    {
      icon: Container,
      title: "컨테이너",
      color: "violet",
      glowClass: "neon-glow-violet",
      tools: ["Docker", "Kubernetes", "Helm", "Rancher"]
    },
    {
      icon: GitBranch,
      title: "DevOps",
      color: "green",
      glowClass: "neon-glow-green",
      tools: ["Jenkins", "GitLab CI/CD", "ArgoCD", "Ansible"]
    },
    {
      icon: Monitor,
      title: "모니터링",
      color: "orange",
      glowClass: "neon-glow-orange",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      icon: Shield,
      title: "보안",
      color: "red",
      glowClass: "neon-glow-red",
      tools: ["Vault", "SIEM", "WAF", "Security Scanner"]
    },
    {
      icon: Database,
      title: "데이터베이스",
      color: "yellow",
      glowClass: "neon-glow-yellow",
      tools: ["PostgreSQL", "MongoDB", "Redis", "InfluxDB"]
    },
    {
      icon: Terminal,
      title: "개발 도구",
      color: "purple",
      glowClass: "neon-glow-purple",
      tools: ["VS Code", "Vim", "Git", "Postman"]
    },
    {
      icon: Code,
      title: "IaC",
      color: "cyan",
      glowClass: "neon-glow-cyan",
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
                  <Card className={`glass-card ${category.glowClass} h-full min-h-[180px]`}>
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
                    <CardContent className="pt-0">
                      <ul className="space-y-1 text-sm">
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