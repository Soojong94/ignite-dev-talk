import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Building, Crown, ArrowRight, Star } from "lucide-react";

const CareerPathSlide = () => {
  const careerPath = [
    {
      level: "Cloud Engineer",
      duration: "0-2년",
      icon: User,
      color: "green",
      glowClass: "neon-glow-green",
      salary: "3000-4500만원",
      skills: [
        "기본 클라우드 서비스 운영",
        "Linux/Windows 시스템 관리",
        "네트워킹 기초",
        "모니터링 도구 활용"
      ],
      responsibilities: [
        "클라우드 리소스 프로비저닝",
        "백업 및 복구 작업",
        "기본적인 자동화 스크립트",
        "시스템 모니터링"
      ],
      milestones: [
        "Associate 자격증 취득",
        "첫 번째 클라우드 마이그레이션 참여",
        "자동화 도구 도입"
      ]
    },
    {
      level: "DevOps Engineer",
      duration: "2-4년",
      icon: Users,
      color: "blue",
      glowClass: "neon-glow-blue",
      salary: "4500-6500만원",
      skills: [
        "CI/CD 파이프라인 구축",
        "컨테이너 오케스트레이션",
        "IaC 도구 숙달",
        "보안 및 컴플라이언스"
      ],
      responsibilities: [
        "배포 자동화 구축",
        "개발팀과 운영팀 연결",
        "성능 최적화",
        "장애 대응 및 복구"
      ],
      milestones: [
        "Professional 자격증 취득",
        "멀티클라우드 프로젝트 리딩",
        "팀 내 기술 리더십"
      ]
    },
    {
      level: "Solutions Architect",
      duration: "4-7년",
      icon: Building,
      color: "violet",
      glowClass: "neon-glow-violet",
      salary: "6500-9000만원",
      skills: [
        "엔터프라이즈 아키텍처 설계",
        "비용 최적화 전략",
        "하이브리드/멀티클라우드",
        "비즈니스 요구사항 분석"
      ],
      responsibilities: [
        "기술 아키텍처 설계",
        "고객 기술 컨설팅",
        "프로젝트 기술 검토",
        "팀 멘토링"
      ],
      milestones: [
        "Expert 자격증 취득",
        "대규모 시스템 설계",
        "컨퍼런스 발표"
      ]
    },
    {
      level: "MSP Specialist",
      duration: "7년+",
      icon: Crown,
      color: "orange",
      glowClass: "neon-glow-orange",
      salary: "9000만원+",
      skills: [
        "고객 비즈니스 이해",
        "서비스 운영 최적화",
        "팀 관리 및 리더십",
        "신기술 도입 전략"
      ],
      responsibilities: [
        "MSP 서비스 전략 수립",
        "고객 관계 관리",
        "기술팀 리딩",
        "비즈니스 성과 관리"
      ],
      milestones: [
        "MSP 사업 확장",
        "업계 인정 전문가",
        "차세대 리더 양성"
      ]
    }
  ];

  const keySkillsProgression = [
    { skill: "기술 깊이", levels: ["기본", "숙련", "전문가", "리더"] },
    { skill: "비즈니스 이해", levels: ["무관심", "기본", "이해", "전략적"] },
    { skill: "팀 협업", levels: ["개인", "팀원", "리더", "조직장"] },
    { skill: "고객 대면", levels: ["내부", "간접", "직접", "전략"] }
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
            <span className="text-gradient-purple">커리어 성장 로드맵</span>
          </h2>

          {/* Career Path Flow */}
          <div className="space-y-6">
            {careerPath.map((role, index) => {
              const Icon = role.icon;
              const isLast = index === careerPath.length - 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.3,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="relative"
                >
                  <Card className={`glass-card ${role.glowClass} max-w-6xl mx-auto`}>
                    <CardHeader className="text-center pb-4">
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="p-4 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${role.color}-400))] w-8 h-8`} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl font-bold text-gradient-blue">
                            {role.level}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>경력 {role.duration}</span>
                            <span className={`font-semibold text-[hsl(var(--${role.color}-400))]`}>
                              {role.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-3 text-left">
                        {/* Required Skills */}
                        <div>
                          <h4 className="font-semibold mb-3 text-[hsl(var(--violet-400))]">필요 역량</h4>
                          <ul className="space-y-2">
                            {role.skills.map((skill, skillIndex) => (
                              <motion.li
                                key={skillIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.5 + (index * 0.2) + (skillIndex * 0.1),
                                  duration: 0.3 
                                }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-[hsl(var(--${role.color}-400))] mt-2 flex-shrink-0`} />
                                <span>{skill}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-semibold mb-3 text-[hsl(var(--blue-400))]">주요 업무</h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((resp, respIndex) => (
                              <motion.li
                                key={respIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.7 + (index * 0.2) + (respIndex * 0.1),
                                  duration: 0.3 
                                }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-[hsl(var(--${role.color}-400))] mt-2 flex-shrink-0`} />
                                <span>{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Milestones */}
                        <div>
                          <h4 className="font-semibold mb-3 text-[hsl(var(--green-400))]">성장 지표</h4>
                          <ul className="space-y-2">
                            {role.milestones.map((milestone, milIndex) => (
                              <motion.li
                                key={milIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.9 + (index * 0.2) + (milIndex * 0.1),
                                  duration: 0.3 
                                }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <Star className={`w-3 h-3 text-[hsl(var(--${role.color}-400))] mt-0.5 flex-shrink-0`} />
                                <span>{milestone}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow between roles */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + (index * 0.3), duration: 0.5 }}
                      className="flex justify-center mt-4 mb-2"
                    >
                      <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm">
                        <ArrowRight className="w-6 h-6 text-[hsl(var(--blue-400))]" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Skills Progression Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-12 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient-blue">역량 발전 단계</h3>
            
            <Card className="glass-card neon-glow-blue max-w-5xl mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {keySkillsProgression.map((skillArea, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 + (index * 0.1), duration: 0.5 }}
                      className="grid grid-cols-5 gap-4 items-center text-sm"
                    >
                      <div className="font-semibold text-foreground">{skillArea.skill}</div>
                      {skillArea.levels.map((level, levelIndex) => (
                        <div 
                          key={levelIndex}
                          className={`text-center p-2 rounded-lg bg-white/5 text-[hsl(var(--${
                            levelIndex === 0 ? 'green' : 
                            levelIndex === 1 ? 'blue' : 
                            levelIndex === 2 ? 'violet' : 'orange'
                          }-400))]`}
                        >
                          {level}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Success Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="mt-8 p-6 glass-card neon-glow-green max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gradient-green mb-4">커리어 성장 핵심 전략</h3>
            <div className="grid gap-4 md:grid-cols-2 text-left text-sm">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">지속적 학습:</strong> 기술 변화에 빠르게 적응
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">네트워킹:</strong> 업계 전문가들과 관계 구축
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">비즈니스 마인드:</strong> 기술을 비즈니스와 연결
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">리더십 개발:</strong> 팀과 조직을 이끄는 능력
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPathSlide;