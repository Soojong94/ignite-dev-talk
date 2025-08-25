import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, TrendingUp, Star, CheckCircle } from "lucide-react";

const CertificationStrategySlide = () => {
  const certificationPaths = [
    {
      provider: "AWS",
      color: "orange",
      glowClass: "neon-glow-orange",
      beginner: {
        name: "Cloud Practitioner",
        difficulty: "★☆☆",
        prep: "2-4주",
        relevance: "입문용, 기본 개념",
        description: "클라우드 기초 개념과 AWS 서비스 개요"
      },
      associate: {
        name: "Solutions Architect Associate",
        difficulty: "★★☆",
        prep: "6-8주",
        relevance: "실무 직결도 높음",
        description: "가장 인기 있는 자격증, 아키텍처 설계 역량"
      },
      professional: {
        name: "Solutions Architect Professional",
        difficulty: "★★★",
        prep: "12-16주",
        relevance: "시니어 레벨 증명",
        description: "복잡한 시스템 설계 및 마이그레이션"
      }
    },
    {
      provider: "Azure",
      color: "blue",
      glowClass: "neon-glow-blue",
      beginner: {
        name: "AZ-900 Fundamentals",
        difficulty: "★☆☆",
        prep: "2-3주",
        relevance: "MS 생태계 이해",
        description: "Azure 기본 서비스와 클라우드 개념"
      },
      associate: {
        name: "AZ-104 Administrator",
        difficulty: "★★☆",
        prep: "6-10주",
        relevance: "운영 실무 중심",
        description: "Azure 리소스 관리 및 거버넌스"
      },
      professional: {
        name: "AZ-305 Solutions Architect Expert",
        difficulty: "★★★",
        prep: "14-18주",
        relevance: "엔터프라이즈 설계",
        description: "하이브리드 및 멀티클라우드 아키텍처"
      }
    },
    {
      provider: "GCP",
      color: "green",
      glowClass: "neon-glow-green",
      beginner: {
        name: "Cloud Digital Leader",
        difficulty: "★☆☆",
        prep: "2-3주",
        relevance: "비즈니스 관점",
        description: "Google Cloud 비즈니스 가치와 기본 개념"
      },
      associate: {
        name: "Associate Cloud Engineer",
        difficulty: "★★☆",
        prep: "8-10주",
        relevance: "실무 운영 역량",
        description: "GCP 서비스 배포 및 운영"
      },
      professional: {
        name: "Professional Cloud Architect",
        difficulty: "★★★",
        prep: "14-20주",
        relevance: "아키텍처 전문성",
        description: "스케일러블한 시스템 설계"
      }
    }
  ];

  const studyStrategy = [
    {
      phase: "1단계: 기초 다지기",
      duration: "2-3개월",
      icon: Award,
      color: "green",
      activities: [
        "Cloud Practitioner (AWS) 또는 AZ-900 (Azure) 취득",
        "기본 서비스 hands-on 실습",
        "클라우드 백서 및 아키텍처 문서 읽기"
      ]
    },
    {
      phase: "2단계: 전문성 구축",
      duration: "4-6개월",
      icon: TrendingUp,
      color: "blue",
      activities: [
        "Associate 레벨 자격증 취득 (SAA 추천)",
        "실제 프로젝트에서 자격증 지식 적용",
        "두 번째 클라우드 플랫폼 학습 시작"
      ]
    },
    {
      phase: "3단계: 전문가 도약",
      duration: "6개월 이상",
      icon: Star,
      color: "violet",
      activities: [
        "Professional 레벨 도전",
        "멀티클라우드 경험 축적",
        "커뮤니티 활동 및 지식 공유"
      ]
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
            <span className="text-gradient-blue">자격증 취득 전략</span>
          </h2>

          {/* Certification Paths */}
          <div className="space-y-6">
            {certificationPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                <Card className={`glass-card ${path.glowClass} max-w-6xl mx-auto`}>
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-2xl font-bold text-[hsl(var(--${path.color}-400))]`}>
                      {path.provider}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      {/* Beginner */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-[hsl(var(--green-400))]">입문 레벨</h4>
                        <div className="space-y-2 text-left">
                          <p className="font-medium text-sm">{path.beginner.name}</p>
                          <p className="text-xs text-muted-foreground">
                            <span className="text-[hsl(var(--green-400))]">{path.beginner.difficulty}</span> | {path.beginner.prep}
                          </p>
                          <p className="text-xs text-muted-foreground">{path.beginner.description}</p>
                        </div>
                      </div>

                      {/* Associate */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-[hsl(var(--blue-400))]">실무 레벨</h4>
                        <div className="space-y-2 text-left">
                          <p className="font-medium text-sm">{path.associate.name}</p>
                          <p className="text-xs text-muted-foreground">
                            <span className="text-[hsl(var(--blue-400))]">{path.associate.difficulty}</span> | {path.associate.prep}
                          </p>
                          <p className="text-xs text-muted-foreground">{path.associate.description}</p>
                        </div>
                      </div>

                      {/* Professional */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-[hsl(var(--violet-400))]">전문가 레벨</h4>
                        <div className="space-y-2 text-left">
                          <p className="font-medium text-sm">{path.professional.name}</p>
                          <p className="text-xs text-muted-foreground">
                            <span className="text-[hsl(var(--violet-400))]">{path.professional.difficulty}</span> | {path.professional.prep}
                          </p>
                          <p className="text-xs text-muted-foreground">{path.professional.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Study Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient-purple">단계별 학습 전략</h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              {studyStrategy.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 1 + (index * 0.15),
                      duration: 0.5 
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className={`glass-card neon-glow-${strategy.color} h-full`}>
                      <CardHeader className="text-center pb-4">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 rounded-full bg-white/5">
                            <Icon className={`text-[hsl(var(--${strategy.color}-400))] w-7 h-7`} />
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold">
                          {strategy.phase}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{strategy.duration}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-left">
                          {strategy.activities.map((activity, actIndex) => (
                            <motion.li
                              key={actIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 1.2 + (index * 0.1) + (actIndex * 0.05),
                                duration: 0.3 
                              }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className={`w-3 h-3 text-[hsl(var(--${strategy.color}-400))] mt-0.5 flex-shrink-0`} />
                              <span>{activity}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Success Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8 p-6 glass-card neon-glow-green max-w-5xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gradient-green mb-4">자격증 취득 성공 팁</h3>
            <div className="grid gap-4 md:grid-cols-2 text-left text-sm">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">실습과 병행:</strong> 이론만으론 부족, 직접 구현해보기
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">커뮤니티 활용:</strong> 스터디 그룹과 경험 공유
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">실무 연계:</strong> 회사 프로젝트에 학습 내용 적용
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">지속적 갱신:</strong> 자격증 만료 전 재취득 계획
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationStrategySlide;